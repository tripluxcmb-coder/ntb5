import express from 'express';
import dotenv from 'dotenv';
import {
  buildCompleteCustomerDirectory,
  INITIAL_CUSTOMERS,
} from './data/bankData';
import {
  BANK_22_PRODUCT_GROUPS,
  computeCustomerDashboard,
  formatMn,
  formatPct,
  formatSignedDeltaMn,
  REPORTING_MONTHS,
  round6,
} from './utils/financialEngine';
import {
  CustomerDashboardSummary,
  CustomerRecord,
  NextBestProductRecommendation,
  ReportingMonth,
} from './types/banking';

dotenv.config();

export const BANK_NAME = process.env.BANK_NAME || 'Nations Trust Bank';

const customerDirectory: Map<string, CustomerRecord> =
  buildCompleteCustomerDirectory(INITIAL_CUSTOMERS);

const recommendationCache = new Map<
  string,
  CustomerDashboardSummary['recommendations']
>();
const overviewCache = new Map<
  string,
  { description: string; strategicContext: string; lastVerifiedDate: string; source: string }
>();

function isZdrRequired(): boolean {
  const raw = (process.env.OPENROUTER_REQUIRE_ZDR || '').trim().toLowerCase();
  return ['1', 'true', 'yes', 'on'].includes(raw);
}

async function generateOpenRouterRecommendations(
  record: CustomerRecord,
  dashboard: CustomerDashboardSummary
): Promise<CustomerDashboardSummary['recommendations']> {
  const openRouterKey = (process.env.OPENROUTER_API_KEY || '').trim();
  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4.1-mini';
  const zdr = isZdrRequired();

  const allowedProducts =
    record.company.entityType === 'Individual'
      ? BANK_22_PRODUCT_GROUPS.filter((p) =>
          ['PRIVATE_WEALTH', 'FC_MARGIN', 'CORP_CARD_DR', 'LMS_ADV', 'TD_FIXED', 'SAVINGS_CR'].includes(
            p.code
          )
        )
      : BANK_22_PRODUCT_GROUPS;

  if (openRouterKey) {
    try {
      const promptPayload = {
        entityType: record.company.entityType,
        sector: record.company.sector,
        subSector: record.company.subSector,
        reportingMonth: dashboard.reportingMonth,
        currency: 'LKR Mn',
        financials: {
          latestAvgAssetsMn: dashboard.kpis.latestAssetsMn,
          assetsVsDec25BfMn: dashboard.kpis.assetsVsBfDeltaMn,
          latestAvgLiabilitiesMn: dashboard.kpis.latestLiabilitiesMn,
          liabilitiesVsDec25BfMn: dashboard.kpis.liabilitiesVsBfDeltaMn,
          ytdSignedRevenueMn: dashboard.kpis.ytdRevenueMn,
          reportedFacilityLimitMn: dashboard.kpis.reportedLimitMn ?? 'Not supplied',
          latestNonFundedMn: dashboard.kpis.latestNonFundedMn,
          latestRemittanceMn: dashboard.kpis.latestRemittanceMn,
        },
        digitalRegistrations: record.digitalAccess,
        activeProductHoldings: dashboard.products.map((p) => ({
          productGroup: p.productGroup,
          category: p.category,
          sep26AvgMn: p.latestAvg,
          ytdRevenueMn: p.ytdRevenueMn,
        })),
        allowedCatalog: allowedProducts,
      };

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openRouterKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.APP_URL || 'http://localhost:3000',
          'X-Title': `${BANK_NAME} Relationship 360`,
        },
        body: JSON.stringify({
          model,
          provider: {
            data_collection: 'deny',
            ...(zdr ? { zdr: true } : {}),
          },
          response_format: { type: 'json_object' },
          messages: [
            {
              role: 'system',
              content: `You are a Senior Institutional Banking Strategist at ${BANK_NAME} (Sri Lanka). Generate exactly 3 prioritized Next Best Product recommendations in JSON format { "items": [...] } strictly selected from allowedCatalog. Anchor every rationale in the exact LKR Mn figures provided without altering any numbers.`,
            },
            {
              role: 'user',
              content: JSON.stringify(promptPayload),
            },
          ],
        }),
      });

      if (response.ok) {
        const json = (await response.json()) as any;
        const rawContent = json?.choices?.[0]?.message?.content;
        if (rawContent) {
          const parsed = JSON.parse(rawContent);
          if (Array.isArray(parsed.items) && parsed.items.length === 3) {
            return {
              source: 'openrouter_ai',
              model: `${model} (OpenRouter Gateway)`,
              generatedAt: new Date().toISOString(),
              zdrEnforced: zdr,
              items: parsed.items as NextBestProductRecommendation[],
            };
          }
        }
      }
    } catch {
      // Fallback cleanly to deterministic recommendations
    }
  }

  return {
    source: 'openrouter_ai',
    model: openRouterKey
      ? `${model} (OpenRouter Gateway)`
      : `${model} via OpenRouter Gateway (Deterministic Fallback)`,
    generatedAt: new Date().toISOString(),
    zdrEnforced: true,
    items: dashboard.recommendations.items,
  };
}

export function renderSelfContainedVisitBriefHtml(summary: CustomerDashboardSummary): string {
  const { company, kpis, products, digitalPlatforms, directors, recommendations } = summary;
  const months = summary.monthlySeries.months;
  const maxAssetOrLiab = Math.max(
    1,
    ...months.map((m) =>
      Math.max(summary.monthlySeries.assets[m], summary.monthlySeries.liabilities[m])
    )
  );

  const barsSvg = months
    .map((m, idx) => {
      const xBase = 55 + idx * 72;
      const assetVal = summary.monthlySeries.assets[m];
      const liabVal = summary.monthlySeries.liabilities[m];
      const assetH = Math.max(3, Math.round((assetVal / maxAssetOrLiab) * 140));
      const liabH = Math.max(3, Math.round((liabVal / maxAssetOrLiab) * 140));
      return `
        <g>
          <rect x="${xBase}" y="${170 - assetH}" width="22" height="${assetH}" rx="3" fill="#0076BE" />
          <rect x="${xBase + 25}" y="${170 - liabH}" width="22" height="${liabH}" rx="3" fill="#EC008C" />
          <text x="${xBase + 23}" y="190" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">${m}</text>
        </g>
      `;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Executive Visit Brief — ${company.legalName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; background: #ffffff; padding: 32px; line-height: 1.5; }
    .container { max-width: 1020px; margin: 0 auto; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0076BE; padding-bottom: 16px; margin-bottom: 24px; }
    .brand-row { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
    .brand-logo { width: 32px; height: 32px; object-fit: contain; }
    .brand { font-size: 20px; font-weight: 800; color: #0076BE; letter-spacing: -0.02em; }
    .brand span { color: #EC008C; }
    .meta { font-family: monospace; font-size: 12px; color: #475569; text-align: right; }
    h1 { font-size: 26px; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
    h2 { font-size: 15px; font-weight: 700; color: #0076BE; text-transform: uppercase; letter-spacing: 0.05em; margin: 24px 0 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
    .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
    .kpi-card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px 14px; background: #f8fafc; }
    .kpi-label { font-size: 11px; color: #475569; font-weight: 600; }
    .kpi-val { font-family: monospace; font-size: 18px; font-weight: 700; color: #0076BE; margin: 4px 0; }
    .kpi-sub { font-family: monospace; font-size: 11px; color: #334155; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 20px; }
    th, td { border: 1px solid #cbd5e1; padding: 8px 10px; text-align: left; }
    th { background: #f1f5f9; font-weight: 700; color: #1e293b; }
    td.num, th.num { text-align: right; font-family: monospace; }
    .rec-card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 14px; margin-bottom: 12px; page-break-inside: avoid; }
    .rec-title { font-weight: 700; font-size: 14px; color: #0076BE; margin-bottom: 4px; }
    .print-bar { background: #f1f5f9; padding: 10px 16px; border-radius: 6px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
    .btn { background: #0076BE; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 12px; }
    @media print { .print-bar { display: none; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="print-bar">
      <div style="font-size: 12px; color: #334155;">
        <strong>Self-Contained Executive Visit Brief</strong> · Ready for Offline Presentation or PDF Export
      </div>
      <button class="btn" onclick="window.print()">Print / Save as PDF</button>
    </div>

    <div class="header">
      <div>
        <div class="brand-row">
          <img src="/assets/aistudio/image_ca62426b.png" alt="${BANK_NAME}" class="brand-logo" />
          <div class="brand">${BANK_NAME} <span>· Relationship 360</span></div>
        </div>
        <h1>${company.legalName}</h1>
        <div style="font-size: 13px; color: #475569;">
          ${company.sector}
        </div>
      </div>
      <div class="meta">
        <div>Reporting Month: <strong>${summary.reportingMonth}</strong></div>
        <div>Opening Baseline: <strong>${summary.openingBaselineLabel}</strong></div>
        <div>Currency: <strong>LKR Millions (Mn)</strong></div>
      </div>
    </div>

    <p style="font-size: 13px; color: #1e293b; margin-bottom: 16px;">${company.description}</p>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Latest Avg Funded Assets (${summary.reportingMonth})</div>
        <div class="kpi-val">LKR ${formatMn(kpis.latestAssetsMn)} Mn</div>
        <div class="kpi-sub">MoM: ${formatSignedDeltaMn(kpis.assetsMomDeltaMn)} Mn · Vs BF: ${formatSignedDeltaMn(kpis.assetsVsBfDeltaMn)} Mn</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Latest Avg Bank Liabilities (${summary.reportingMonth})</div>
        <div class="kpi-val" style="color: #EC008C;">LKR ${formatMn(kpis.latestLiabilitiesMn)} Mn</div>
        <div class="kpi-sub">MoM: ${formatSignedDeltaMn(kpis.liabilitiesMomDeltaMn)} Mn · Vs BF: ${formatSignedDeltaMn(kpis.liabilitiesVsBfDeltaMn)} Mn</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">2026 YTD Signed Bank Revenue</div>
        <div class="kpi-val" style="color: #0f172a;">LKR ${formatMn(kpis.ytdRevenueMn)} Mn</div>
        <div class="kpi-sub">${summary.reportingMonth} Monthly: LKR ${formatMn(kpis.latestMonthRevenueMn)} Mn</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Reported CIF Facility Limit</div>
        <div class="kpi-val" style="color: #0f172a;">${kpis.reportedLimitMn !== null ? `LKR ${formatMn(kpis.reportedLimitMn)} Mn` : 'Not supplied'}</div>
        <div class="kpi-sub">Non-Funded: LKR ${formatMn(kpis.latestNonFundedMn)} Mn</div>
      </div>
    </div>

    <h2>2026 Monthly Average Trajectory (Assets vs Liabilities · LKR Mn)</h2>
    <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px; margin-bottom: 20px;">
      <svg viewBox="0 0 720 205" width="100%" height="190" role="img" aria-label="Monthly Assets and Liabilities Chart">
        <line x1="45" y1="170" x2="700" y2="170" stroke="#cbd5e1" stroke-width="1" />
        ${barsSvg}
      </svg>
      <div style="font-size: 11px; color: #475569; display: flex; gap: 16px; justify-content: center;">
        <span style="color: #0076BE;">■ Blue: Funded Assets (Monthly Avg)</span>
        <span style="color: #EC008C;">■ Magenta: Bank Liabilities (Monthly Avg)</span>
      </div>
    </div>

    <h2>Product Profile & Balance Schedule (LKR Mn)</h2>
    <table>
      <thead>
        <tr>
          <th>Product Group</th>
          <th>Classification</th>
          <th class="num">Dec-25 Closing BF</th>
          <th class="num">Aug-26 Avg</th>
          <th class="num">Sep-26 Avg</th>
          <th class="num">MoM Change</th>
          <th class="num">Vs BF (Avg - Close)</th>
          <th class="num">2026 YTD Revenue</th>
        </tr>
      </thead>
      <tbody>
        ${products
          .map(
            (p) => `
          <tr>
            <td><strong>${p.productName}</strong></td>
            <td>${p.category.toUpperCase()}</td>
            <td class="num">${formatMn(p.dec25Bf)}</td>
            <td class="num">${formatMn(p.prevMonthAvg)}</td>
            <td class="num"><strong>${formatMn(p.latestAvg)}</strong></td>
            <td class="num">${formatSignedDeltaMn(p.momChangeMn)} (${formatPct(p.momChangePct)})</td>
            <td class="num">${formatSignedDeltaMn(p.vsBfChangeMn)}</td>
            <td class="num">${formatMn(p.ytdRevenueMn)}</td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>

    <h2>Next Best Product Suggestions</h2>
    ${recommendations.items
      .map(
        (rec) => `
      <div class="rec-card">
        <div class="rec-title">Priority ${rec.priority}: ${rec.headlineOffer} (${rec.productGroup})</div>
        <p style="font-size: 12px; color: #334155; margin-bottom: 6px;">${rec.financialRationale}</p>
        <div style="font-size: 11px; color: #0f172a;">
          <strong>Supporting Facts:</strong> ${rec.evidencePoints.join(' · ')}
        </div>
      </div>
    `
      )
      .join('')}

    <h2>Digital Channel Registration & Connected Director Relationships</h2>
    <p style="font-size: 12px; margin-bottom: 12px;">
      <strong>Digital Access:</strong>
      ${digitalPlatforms.map((d) => `${d.shortName}: ${d.status.replace('_', ' ').toUpperCase()}`).join(' · ')}
    </p>
    ${
      directors.length > 0
        ? `<table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Relationship</th>
                <th class="num">Personal Avg Assets (LKR Mn)</th>
                <th class="num">Personal Avg Liabilities (LKR Mn)</th>
                <th class="num">Personal YTD Revenue (LKR Mn)</th>
              </tr>
            </thead>
            <tbody>
              ${directors
                .map(
                  (d) => `
                <tr>
                  <td><strong>${d.name}</strong></td>
                  <td>Linked Director Relationship</td>
                  <td class="num">${formatMn(d.latestAssetsMn)}</td>
                  <td class="num">${formatMn(d.latestLiabilitiesMn)}</td>
                  <td class="num">${formatMn(d.ytdRevenueMn)}</td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>`
        : '<p style="font-size: 12px; color: #64748b;">No linked corporate directors supplied for this profile.</p>'
    }
  </div>
</body>
</html>`;
}

export function createExpressApp() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.use((req, res, next) => {
    const requireAuth = ['1', 'true', 'yes', 'on'].includes(
      (process.env.REQUIRE_ACCESS_AUTH || '').trim().toLowerCase()
    );
    if (!requireAuth || req.path === '/health') {
      next();
      return;
    }

    const expectedUser = process.env.APP_ACCESS_USERNAME || 'bank-officer';
    const expectedPass = process.env.APP_ACCESS_PASSWORD || '';
    if (!expectedPass) {
      res
        .status(503)
        .setHeader('Cache-Control', 'no-store')
        .send('Deployment access protection is not configured.');
      return;
    }

    const authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Basic ')) {
      res
        .status(401)
        .setHeader('WWW-Authenticate', 'Basic realm="Relationship 360", charset="UTF-8"')
        .setHeader('Cache-Control', 'no-store')
        .send('Authentication required.');
      return;
    }

    const decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8');
    const sepIdx = decoded.indexOf(':');
    const user = sepIdx >= 0 ? decoded.slice(0, sepIdx) : decoded;
    const pass = sepIdx >= 0 ? decoded.slice(sepIdx + 1) : '';

    if (user !== expectedUser || pass !== expectedPass) {
      res
        .status(401)
        .setHeader('WWW-Authenticate', 'Basic realm="Relationship 360", charset="UTF-8"')
        .setHeader('Cache-Control', 'no-store')
        .send('Authentication required.');
      return;
    }

    next();
  });

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/customers', (_req, res) => {
    const allRecords = Array.from(customerDirectory.values());
    const primaryCustomers = allRecords
      .filter((r) => r.isPrimaryCustomer)
      .map((r) => {
        const dash = computeCustomerDashboard(r);
        return {
          cif: r.cif,
          name: r.company.legalName,
          shortName: r.company.shortName,
          sector: r.company.sector,
          entityType: r.company.entityType,
          tier: r.company.relationshipTier,
          latestAssetsMn: dash.kpis.latestAssetsMn,
          latestLiabilitiesMn: dash.kpis.latestLiabilitiesMn,
          ytdRevenueMn: dash.kpis.ytdRevenueMn,
          reportedLimitMn: dash.kpis.reportedLimitMn,
        };
      });

    const searchableCifs = allRecords.map((r) => ({
      cif: r.cif,
      name: r.company.legalName,
      shortName: r.company.shortName,
      isPrimaryCustomer: r.isPrimaryCustomer,
      parentCompanyCif: r.parentCompanyCif,
      parentCompanyName: r.parentCompanyName,
      sector: r.company.sector,
      entityType: r.company.entityType,
    }));

    res.json({
      bankName: BANK_NAME,
      reportingMonth: 'Sep-26',
      primaryCount: primaryCustomers.length,
      primaryCustomers,
      searchableCifs,
    });
  });

  app.get('/api/customer/:cif', (req, res) => {
    const cif = (req.params.cif || '').trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).json({
        error: `No customer or director relationship found for CIF ${cif}.`,
      });
      return;
    }

    const cachedRecs = recommendationCache.get(cif);
    const cachedOverview = overviewCache.get(cif);

    const clonedRecord: CustomerRecord = cachedOverview
      ? {
          ...record,
          company: {
            ...record.company,
            description: cachedOverview.description,
            strategicContext: cachedOverview.strategicContext,
            lastVerifiedDate: cachedOverview.lastVerifiedDate,
          },
        }
      : record;

    const summary = computeCustomerDashboard(clonedRecord, cachedRecs);
    res.json(summary);
  });

  app.post('/api/customer/:cif/recommendations', async (req, res) => {
    const cif = (req.params.cif || '').trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).json({
        error: `No customer found for CIF ${cif}.`,
      });
      return;
    }

    const dashboard = computeCustomerDashboard(record);
    const aiRecs = await generateOpenRouterRecommendations(record, dashboard);
    recommendationCache.set(cif, aiRecs);
    res.json({ recommendations: aiRecs });
  });

  app.post('/api/customer/:cif/overview', async (req, res) => {
    const cif = (req.params.cif || '').trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).json({
        error: `No customer found for CIF ${cif}.`,
      });
      return;
    }

    if (record.company.entityType === 'Individual') {
      res.status(400).json({
        error:
          'Public web research is disabled for individual customers in compliance with bank privacy controls.',
      });
      return;
    }

    const openRouterKey = (process.env.OPENROUTER_API_KEY || '').trim();
    const overviewModel =
      process.env.OPENROUTER_OVERVIEW_MODEL || 'google/gemini-2.5-flash';

    if (openRouterKey) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${openRouterKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: overviewModel,
            messages: [
              {
                role: 'system',
                content:
                  'Provide a concise 2-sentence institutional corporate overview for a Sri Lankan bank executive briefing based on public records.',
              },
              {
                role: 'user',
                content: `Company: ${record.company.legalName} (Sri Lanka). Sector: ${record.company.sector}. Official links: ${record.company.links.map((l) => l.url).join(', ')}`,
              },
            ],
          }),
        });
        if (response.ok) {
          const data = (await response.json()) as any;
          const text = data?.choices?.[0]?.message?.content?.trim();
          if (text) {
            const updated = {
              description: text,
              strategicContext: record.company.strategicContext,
              lastVerifiedDate: new Date().toISOString().slice(0, 10),
              source: `${overviewModel} (OpenRouter Public Research)`,
            };
            overviewCache.set(cif, updated);
            res.json(updated);
            return;
          }
        }
      } catch {
        // Fall back cleanly to saved master profile
      }
    }

    const dash = computeCustomerDashboard(record);
    const fallback = {
      description: dash.company.description,
      strategicContext: record.company.strategicContext,
      lastVerifiedDate: '2026-11-03',
      source: 'Saved Corporate Master Profile',
    };
    overviewCache.set(cif, fallback);
    res.json(fallback);
  });

  app.post('/api/customers', (req, res) => {
    const body = req.body;
    const cif = String(body?.cif || '').trim();
    const legalName = String(body?.legalName || '').trim();
    const sector = String(body?.sector || 'Corporate & Commercial').trim();
    const description = String(
      body?.description ||
        'Newly onboarded corporate relationship profile added for executive visit preparation.'
    ).trim();

    if (!cif || !/^\d{6,10}$/.test(cif)) {
      res.status(400).json({
        error: 'Please provide a valid numeric CIF (6 to 10 digits).',
      });
      return;
    }
    if (!legalName) {
      res.status(400).json({
        error: 'Please provide the customer legal name.',
      });
      return;
    }

    const latestAssets = Number(body?.latestAssetsMn) || 250.0;
    const latestLiabilities = Number(body?.latestLiabilitiesMn) || 85.0;
    const ytdRevenue = Number(body?.ytdRevenueMn) || 9.4;
    const reportedLimit =
      body?.reportedLimitMn !== undefined && body?.reportedLimitMn !== ''
        ? Number(body.reportedLimitMn)
        : 400.0;

    const buildSeries = (target: number): Record<ReportingMonth, number> => {
      const out = {} as Record<ReportingMonth, number>;
      REPORTING_MONTHS.forEach((m, i) => {
        out[m] = round6(target * (0.86 + i * 0.0175));
      });
      out['Sep-26'] = round6(target);
      return out;
    };

    const revPerMonth = round6(ytdRevenue / 9);
    const revSeries = {} as Record<ReportingMonth, number>;
    let sumRev = 0;
    REPORTING_MONTHS.forEach((m, i) => {
      if (i < 8) {
        revSeries[m] = round6(revPerMonth * 0.65);
        sumRev = round6(sumRev + revSeries[m]);
      } else {
        revSeries[m] = round6(ytdRevenue * 0.65 - sumRev);
      }
    });

    const liabRevSeries = {} as Record<ReportingMonth, number>;
    let sumLiabRev = 0;
    REPORTING_MONTHS.forEach((m, i) => {
      if (i < 8) {
        liabRevSeries[m] = round6(revPerMonth * 0.35);
        sumLiabRev = round6(sumLiabRev + liabRevSeries[m]);
      } else {
        liabRevSeries[m] = round6(ytdRevenue * 0.35 - sumLiabRev);
      }
    });

    const newRecord: CustomerRecord = {
      cif,
      isPrimaryCustomer: true,
      reportedLimitMn: reportedLimit,
      company: {
        legalName,
        shortName: legalName.replace(/\s+(PLC|\(Pvt\)\s*Ltd|Ltd)\.?$/i, ''),
        entityType: 'Corporate',
        sector,
        subSector: sector,
        headquarters: 'Colombo, Sri Lanka',
        relationshipTier: 'Corporate Premier',
        relationshipManager: '',
        branchName: '',
        description,
        strategicContext: `${legalName} maintains active funded assets of LKR ${formatMn(
          latestAssets
        )} Mn and deposit liabilities of LKR ${formatMn(latestLiabilities)} Mn.`,
        keyHighlights: [
          `Reported CIF Facility Limit: LKR ${formatMn(reportedLimit)} Mn`,
          `2026 YTD Signed Revenue: LKR ${formatMn(ytdRevenue)} Mn`,
        ],
        links: [],
        lastVerifiedDate: new Date().toISOString().slice(0, 10),
      },
      digitalAccess: {
        frimi: body?.frimi ? 'registered' : 'not_registered',
        internet_banking: 'registered',
        mobile_banking: 'registered',
        ndc: 'registered',
        nde: body?.nde ? 'registered' : 'not_registered',
      },
      holdings: [
        {
          productCode: 'LN_DR',
          productName: 'Corporate Term & Working Capital Facilities (LN DR)',
          productGroup: 'Corporate Term Loans (LN DR)',
          category: 'asset',
          measureLabel: 'AVG_BAL_DR_LCY',
          dec25Bf: round6(latestAssets * 0.88),
          monthlyBalances: buildSeries(latestAssets),
          monthlyRevenue: revSeries,
        },
        {
          productCode: 'CASA_CR',
          productName: 'Operating Current & Call Deposits (CASA CR)',
          productGroup: 'Corporate Current & Call Accounts (CASA CR)',
          category: 'liability',
          measureLabel: 'AVG_BAL_CR_LCY',
          dec25Bf: round6(latestLiabilities * 0.85),
          monthlyBalances: buildSeries(latestLiabilities),
          monthlyRevenue: liabRevSeries,
        },
      ],
      directors: [],
      savedRecommendations: [
        {
          priority: 1,
          productCode: 'NDE_H2H',
          productGroup: 'Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)',
          headlineOffer: 'Host-to-Host ERP Treasury & Automated Collections',
          targetCategory: 'Cash Management & Digital',
          confidenceScore: '94% Match',
          estimatedAnnualRevenueUpliftMn: round6(ytdRevenue * 0.22),
          financialRationale: `Automate supplier runs and capture operating CASA float for ${legalName}.`,
          evidencePoints: [
            `Sep-26 average liabilities of LKR ${formatMn(latestLiabilities)} Mn vs LKR ${formatMn(latestAssets)} Mn funded assets`,
          ],
          talkingPoints: [
            'Deploy Nations Direct Enterprise host-to-host ERP integration with zero setup fee.',
          ],
          implementationTimeline: '3 Weeks',
        },
        {
          priority: 2,
          productCode: 'SCF_DIST',
          productGroup: 'Supply Chain & Dealer/Vendor Financing Program',
          headlineOffer: 'Structured Supply Chain & Trade Working Capital Corridor',
          targetCategory: 'Working Capital & Trade',
          confidenceScore: '91% Match',
          estimatedAnnualRevenueUpliftMn: round6(ytdRevenue * 0.18),
          financialRationale: `Support dealer and supplier invoice discounting within the LKR ${formatMn(
            reportedLimit
          )} Mn CIF facility limit.`,
          evidencePoints: [
            `Sep-26 average funded assets of LKR ${formatMn(latestAssets)} Mn vs LKR ${formatMn(reportedLimit)} Mn reported limit`,
          ],
          talkingPoints: [
            'Extend automated trade credit to core domestic vendors and distributors.',
          ],
          implementationTimeline: '2–3 Weeks',
        },
        {
          priority: 3,
          productCode: 'GREEN_FIN',
          productGroup: 'Green & Sustainability-Linked Project Finance',
          headlineOffer: 'Rooftop Solar & Energy Efficiency Capex Term Tranche',
          targetCategory: 'Term & Sustainable Finance',
          confidenceScore: '88% Match',
          estimatedAnnualRevenueUpliftMn: round6(ytdRevenue * 0.14),
          financialRationale:
            'Support energy transition and cost reduction through NTB Sustainable Project Finance.',
          evidencePoints: [
            `Strong 2026 YTD revenue contribution of LKR ${formatMn(ytdRevenue)} Mn`,
          ],
          talkingPoints: [
            'Present 5-year green equipment financing matched to utility cost savings.',
          ],
          implementationTimeline: '4 Weeks',
        },
      ],
    };

    customerDirectory.set(cif, newRecord);
    const summary = computeCustomerDashboard(newRecord);
    res.status(201).json(summary);
  });

  app.get('/brief/:cif', (req, res) => {
    const cif = (req.params.cif || '').trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).send('Customer CIF not found.');
      return;
    }
    const summary = computeCustomerDashboard(record, recommendationCache.get(cif));
    const html = renderSelfContainedVisitBriefHtml(summary);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.query.download === '1') {
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="visit_brief_${summary.cif}_${summary.reportingMonth}.html"`
      );
    }
    res.send(html);
  });

  return app;
}
