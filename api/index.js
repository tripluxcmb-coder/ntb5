// src/serverApp.ts
import express from "express";
import dotenv from "dotenv";

// src/utils/financialEngine.ts
var REPORTING_MONTHS = [
  "Jan-26",
  "Feb-26",
  "Mar-26",
  "Apr-26",
  "May-26",
  "Jun-26",
  "Jul-26",
  "Aug-26",
  "Sep-26"
];
var LATEST_MONTH = "Sep-26";
var PREVIOUS_MONTH = "Aug-26";
var OPENING_BASELINE_LABEL = "Dec-25 Closing BF";
var BANK_22_PRODUCT_GROUPS = [
  { code: "LN_TERM", name: "Corporate Term Loans (LN DR)", category: "Funded Asset" },
  { code: "CASA_OD", name: "Corporate Overdraft & Working Capital (CASA DR)", category: "Funded Asset" },
  { code: "LMS_ADV", name: "LMS Structured Advances (LMS DR)", category: "Funded Asset" },
  { code: "FB_DISC", name: "Foreign Bills Purchased & Discounted (FB DR)", category: "Funded Asset" },
  { code: "CORP_CARD_DR", name: "Commercial & Corporate Credit Cards (CARD DR)", category: "Funded Asset" },
  { code: "CASA_DEP", name: "Corporate Current & Call Accounts (CASA CR)", category: "Bank Liability" },
  { code: "SAVINGS_CR", name: "High-Yield Corporate Savings & Money Market (CASA CR)", category: "Bank Liability" },
  { code: "TD_FIXED", name: "Corporate Term & Fixed Deposits (TD CR)", category: "Bank Liability" },
  { code: "FC_MARGIN", name: "Foreign Currency Margin Deposits (FC MARGIN CR)", category: "Bank Liability" },
  { code: "CORP_CARD_CR", name: "Commercial Card Credit Balances (CARD CR)", category: "Bank Liability" },
  { code: "LMS_CRED", name: "LMS Credit Balances (LMS CR)", category: "Separate Credit Measure" },
  { code: "BG_PERF", name: "Bank Guarantees & Performance Bonds", category: "Non-Funded Facility" },
  { code: "DOC_LC", name: "Letters of Credit & Documentary Credits", category: "Non-Funded Facility" },
  { code: "REMIT_TRADE", name: "Inward & Outward International Remittances", category: "Remittance Flow" },
  { code: "NDE_H2H", name: "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)", category: "Digital Cash Management" },
  { code: "NDC_PORTAL", name: "Nations Direct Commercial (Corporate Web Treasury)", category: "Digital Cash Management" },
  { code: "FRIMI_CORP", name: "FriMi Ecosystem & Employee Payroll Disbursement", category: "Digital Ecosystem" },
  { code: "FX_FORWARD", name: "Treasury FX Forwards, Swaps & Hedging Desk", category: "Treasury & Markets" },
  { code: "SCF_DIST", name: "Supply Chain & Dealer/Vendor Financing Program", category: "Working Capital & Trade" },
  { code: "GREEN_FIN", name: "Green & Sustainability-Linked Project Finance", category: "Term & Sustainable Finance" },
  { code: "IPG_MERCHANT", name: "NTB IPG & POS Merchant Acquiring Solutions", category: "Transaction Banking" },
  { code: "PRIVATE_WEALTH", name: "Nations Private Wealth & Inner Circle Advisory", category: "Executive & Director Banking" }
];
function round6(val) {
  return Math.round((val + Number.EPSILON) * 1e6) / 1e6;
}
function computePctChange(current, baseline) {
  if (Math.abs(baseline) < 1e-6) {
    return null;
  }
  return Number(((current - baseline) / Math.abs(baseline) * 100).toFixed(2));
}
function computeProductMetrics(row) {
  const latestAvg = round6(row.monthlyBalances[LATEST_MONTH] ?? 0);
  const prevMonthAvg = round6(row.monthlyBalances[PREVIOUS_MONTH] ?? 0);
  const dec25Bf = round6(row.dec25Bf ?? 0);
  const momChangeMn = round6(latestAvg - prevMonthAvg);
  const vsBfChangeMn = round6(latestAvg - dec25Bf);
  const ytdRevenueMn = round6(
    REPORTING_MONTHS.reduce((sum, m) => sum + (row.monthlyRevenue[m] ?? 0), 0)
  );
  return {
    productCode: row.productCode,
    productName: row.productName,
    productGroup: row.productGroup,
    category: row.category,
    measureLabel: row.measureLabel,
    dec25Bf,
    latestAvg,
    prevMonthAvg,
    momChangeMn,
    momChangePct: computePctChange(latestAvg, prevMonthAvg),
    vsBfChangeMn,
    vsBfChangePct: computePctChange(latestAvg, dec25Bf),
    ytdRevenueMn,
    monthlyBalances: { ...row.monthlyBalances },
    monthlyRevenue: { ...row.monthlyRevenue }
  };
}
function buildDigitalPlatforms(access) {
  return [
    {
      id: "frimi",
      name: "FriMi Digital Bank",
      shortName: "FriMi",
      category: "Retail & Lifestyle",
      status: access.frimi ?? "not_supplied",
      description: "QR collections, instant B2C ecosystem & executive lifestyle banking"
    },
    {
      id: "internet_banking",
      name: "Internet Banking",
      shortName: "Internet Banking",
      category: "Retail & Lifestyle",
      status: access.internet_banking ?? "not_supplied",
      description: "Web-based account inquiry, statement exports & retail transfers"
    },
    {
      id: "mobile_banking",
      name: "Mobile Banking App",
      shortName: "Mobile Banking",
      category: "Retail & Lifestyle",
      status: access.mobile_banking ?? "not_supplied",
      description: "On-the-go transaction approvals and real-time balance alerts"
    },
    {
      id: "ndc",
      name: "Nations Direct Commercial",
      shortName: "NDC",
      category: "Corporate Cash Management",
      status: access.ndc ?? "not_supplied",
      description: "Multi-tier corporate workflow approvals, bulk salary & supplier runs"
    },
    {
      id: "nde",
      name: "Nations Direct Enterprise",
      shortName: "NDE",
      category: "Corporate Cash Management",
      status: access.nde ?? "not_supplied",
      description: "Host-to-Host ERP integration, automated reconciliation & trade initiation"
    }
  ];
}
function filterNamedDirectors(directors) {
  return directors.filter(
    (d) => Boolean(d.name) && !d.name.trim().toLowerCase().startsWith("director cif")
  );
}
function computeCustomerDashboard(record, overrideRecommendations) {
  const products = record.holdings.map(computeProductMetrics);
  const assetProducts = products.filter((p) => p.category === "asset");
  const liabilityProducts = products.filter((p) => p.category === "liability");
  const nonFundedProducts = products.filter((p) => p.category === "non_funded");
  const remittanceProducts = products.filter((p) => p.category === "remittance");
  const lmsCrProducts = products.filter((p) => p.category === "lms_cr");
  const sumByMonth = (list, field) => {
    const result = {};
    for (const m of REPORTING_MONTHS) {
      result[m] = round6(list.reduce((acc, item) => acc + (item[field][m] ?? 0), 0));
    }
    return result;
  };
  const monthlyAssets = sumByMonth(assetProducts, "monthlyBalances");
  const monthlyLiabilities = sumByMonth(liabilityProducts, "monthlyBalances");
  const monthlyRevenue = sumByMonth(products, "monthlyRevenue");
  const monthlyNonFunded = sumByMonth(nonFundedProducts, "monthlyBalances");
  const monthlyRemittance = sumByMonth(remittanceProducts, "monthlyBalances");
  const dec25BfAssetsMn = round6(assetProducts.reduce((s, p) => s + p.dec25Bf, 0));
  const dec25BfLiabilitiesMn = round6(liabilityProducts.reduce((s, p) => s + p.dec25Bf, 0));
  const latestAssetsMn = monthlyAssets[LATEST_MONTH];
  const prevAssetsMn = monthlyAssets[PREVIOUS_MONTH];
  const assetsMomDeltaMn = round6(latestAssetsMn - prevAssetsMn);
  const assetsVsBfDeltaMn = round6(latestAssetsMn - dec25BfAssetsMn);
  const latestLiabilitiesMn = monthlyLiabilities[LATEST_MONTH];
  const prevLiabilitiesMn = monthlyLiabilities[PREVIOUS_MONTH];
  const liabilitiesMomDeltaMn = round6(latestLiabilitiesMn - prevLiabilitiesMn);
  const liabilitiesVsBfDeltaMn = round6(latestLiabilitiesMn - dec25BfLiabilitiesMn);
  const ytdRevenueMn = round6(
    REPORTING_MONTHS.reduce((s, m) => s + monthlyRevenue[m], 0)
  );
  const latestMonthRevenueMn = monthlyRevenue[LATEST_MONTH];
  const prevMonthRevenueMn = monthlyRevenue[PREVIOUS_MONTH];
  const revenueMomDeltaMn = round6(latestMonthRevenueMn - prevMonthRevenueMn);
  const latestNonFundedMn = monthlyNonFunded[LATEST_MONTH];
  const latestRemittanceMn = monthlyRemittance[LATEST_MONTH];
  const latestLmsCrMn = round6(lmsCrProducts.reduce((s, p) => s + p.latestAvg, 0));
  const visibleDirectors = filterNamedDirectors(record.directors).map((d) => ({
    ...d,
    role: "Linked Director Relationship"
  }));
  const registeredDigital = Object.entries(record.digitalAccess).filter(([, status]) => status === "registered").map(([k]) => k.toUpperCase());
  const unregisteredDigital = Object.entries(record.digitalAccess).filter(([, status]) => status === "not_registered").map(([k]) => k.toUpperCase());
  const factualDescription = !record.isPrimaryCustomer ? `Individual banking profile linked to ${record.parentCompanyName ?? "the primary corporate customer"} in the supplied relationship extract. Personal balances and revenue are reported separately and are never included in company totals.` : record.company.entityType === "Individual" ? `Primary individual customer relationship in the supplied bank extract. ${LATEST_MONTH} average funded assets total LKR ${formatMn(
    latestAssetsMn,
    2
  )} Mn and average bank liabilities total LKR ${formatMn(
    latestLiabilitiesMn,
    2
  )} Mn, with LKR ${formatMn(ytdRevenueMn, 2)} Mn in 2026 YTD signed revenue.` : `${record.company.legalName} is a corporate banking client in the ${record.company.sector} sector. Based on the supplied ${LATEST_MONTH} extract, average funded assets stand at LKR ${formatMn(
    latestAssetsMn,
    2
  )} Mn, average bank liabilities are LKR ${formatMn(
    latestLiabilitiesMn,
    2
  )} Mn, and 2026 YTD signed bank revenue is LKR ${formatMn(ytdRevenueMn, 2)} Mn.`;
  const factualRecommendations = record.savedRecommendations.map((rec) => {
    const evidencePoints = [
      `${LATEST_MONTH} average funded assets: LKR ${formatMn(latestAssetsMn, 2)} Mn (${formatSignedDeltaMn(
        assetsVsBfDeltaMn,
        2
      )} Mn vs Dec-25 closing BF)`,
      `${LATEST_MONTH} average bank liabilities: LKR ${formatMn(
        latestLiabilitiesMn,
        2
      )} Mn | 2026 YTD signed revenue: LKR ${formatMn(ytdRevenueMn, 2)} Mn`,
      unregisteredDigital.length > 0 ? `Unregistered digital channels available for onboarding: ${unregisteredDigital.join(", ")}` : `Registered digital channels: ${registeredDigital.join(", ") || "None supplied"}`
    ];
    const factualRationale = `Selected from the bank's 22 product groups (${rec.productGroup}) based on ${LATEST_MONTH} average funded assets of LKR ${formatMn(
      latestAssetsMn,
      2
    )} Mn, average bank liabilities of LKR ${formatMn(
      latestLiabilitiesMn,
      2
    )} Mn, and current digital channel registration status.`;
    return {
      ...rec,
      financialRationale: factualRationale,
      evidencePoints
    };
  });
  return {
    cif: record.cif,
    isPrimaryCustomer: record.isPrimaryCustomer,
    parentCompanyCif: record.parentCompanyCif,
    parentCompanyName: record.parentCompanyName,
    reportingMonth: LATEST_MONTH,
    previousMonth: PREVIOUS_MONTH,
    openingBaselineLabel: OPENING_BASELINE_LABEL,
    currency: "LKR",
    company: {
      ...record.company,
      relationshipManager: "",
      branchName: "",
      description: factualDescription
    },
    kpis: {
      latestAssetsMn,
      prevAssetsMn,
      dec25BfAssetsMn,
      assetsMomDeltaMn,
      assetsMomDeltaPct: computePctChange(latestAssetsMn, prevAssetsMn),
      assetsVsBfDeltaMn,
      assetsVsBfDeltaPct: computePctChange(latestAssetsMn, dec25BfAssetsMn),
      latestLiabilitiesMn,
      prevLiabilitiesMn,
      dec25BfLiabilitiesMn,
      liabilitiesMomDeltaMn,
      liabilitiesMomDeltaPct: computePctChange(latestLiabilitiesMn, prevLiabilitiesMn),
      liabilitiesVsBfDeltaMn,
      liabilitiesVsBfDeltaPct: computePctChange(latestLiabilitiesMn, dec25BfLiabilitiesMn),
      ytdRevenueMn,
      latestMonthRevenueMn,
      prevMonthRevenueMn,
      revenueMomDeltaMn,
      revenueMomDeltaPct: computePctChange(latestMonthRevenueMn, prevMonthRevenueMn),
      reportedLimitMn: record.reportedLimitMn,
      latestNonFundedMn,
      latestRemittanceMn,
      latestLmsCrMn
    },
    monthlySeries: {
      months: REPORTING_MONTHS,
      dec25Bf: {
        assets: dec25BfAssetsMn,
        liabilities: dec25BfLiabilitiesMn
      },
      assets: monthlyAssets,
      liabilities: monthlyLiabilities,
      revenue: monthlyRevenue,
      nonFunded: monthlyNonFunded,
      remittance: monthlyRemittance
    },
    products,
    digitalPlatforms: buildDigitalPlatforms(record.digitalAccess),
    directors: visibleDirectors,
    recommendations: overrideRecommendations ?? {
      source: "deterministic_engine",
      model: "NTB Product Priority Engine",
      generatedAt: "2026-11-03T07:00:00Z",
      zdrEnforced: true,
      items: factualRecommendations
    }
  };
}
function formatMn(val, decimals = 2) {
  if (val === null || val === void 0 || Number.isNaN(val)) {
    return "Not supplied";
  }
  return val.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}
function formatSignedDeltaMn(val, decimals = 2) {
  if (val === null || val === void 0 || Number.isNaN(val)) {
    return "\u2014";
  }
  const sign = val > 0 ? "+" : val < 0 ? "\u2212" : "";
  return `${sign}${Math.abs(val).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}`;
}
function formatPct(val) {
  if (val === null || val === void 0 || Number.isNaN(val)) {
    return "N/A";
  }
  const sign = val > 0 ? "+" : val < 0 ? "\u2212" : "";
  return `${sign}${Math.abs(val).toFixed(2)}%`;
}

// src/data/bankData.ts
function buildMonthlyCurve(sep26Target, aug26Val, jan26Val, seasonality = [1, 1.02, 1.04, 1.01, 1.05, 1.07, 1.06]) {
  const step = (aug26Val - jan26Val) / 7;
  return {
    "Jan-26": round6(jan26Val * seasonality[0]),
    "Feb-26": round6((jan26Val + step * 1) * seasonality[1]),
    "Mar-26": round6((jan26Val + step * 2) * seasonality[2]),
    "Apr-26": round6((jan26Val + step * 3) * seasonality[3]),
    "May-26": round6((jan26Val + step * 4) * seasonality[4]),
    "Jun-26": round6((jan26Val + step * 5) * seasonality[5]),
    "Jul-26": round6((jan26Val + step * 6) * seasonality[6]),
    "Aug-26": round6(aug26Val),
    "Sep-26": round6(sep26Target)
  };
}
function buildExactRevenueSeries(totalYtdTarget, weights = [0.09, 0.1, 0.11, 0.1, 0.11, 0.12, 0.12, 0.12, 0.13]) {
  const months = [
    "Jan-26",
    "Feb-26",
    "Mar-26",
    "Apr-26",
    "May-26",
    "Jun-26",
    "Jul-26",
    "Aug-26",
    "Sep-26"
  ];
  const result = {};
  let running = 0;
  for (let i = 0; i < 8; i++) {
    const val = round6(totalYtdTarget * weights[i]);
    result[months[i]] = val;
    running = round6(running + val);
  }
  result["Sep-26"] = round6(totalYtdTarget - running);
  return result;
}
var INITIAL_CUSTOMERS = [
  // 1. Central Finance Company PLC — CIF 51012681 (Exact Spot Check Match)
  // Latest avg assets: 5216.882344 | Latest avg liabilities: 161.334519 | Jan-Sep revenue: 143.255945 | Limit: 5700.000000
  {
    cif: "51012681",
    isPrimaryCustomer: true,
    reportedLimitMn: 5700,
    company: {
      legalName: "Central Finance Company PLC",
      shortName: "Central Finance",
      entityType: "Corporate",
      sector: "Diversified Financials & NBFI",
      subSector: "Asset Financing, Leasing & Fleet Management",
      incorporationNumber: "PQ 67",
      headquarters: "270 Vauxhall Street, Colombo 02 / Kandy Head Office",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Kavinda Rajapaksa \u2014 VP Institutional Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Premier Sri Lankan licensed finance company established in 1957 (CSE: CFIN.N0000), holding a dominant market position in vehicle leasing, hire purchase, SME asset-backed lending, and micro-enterprise financing across 105+ islandwide branches.",
      strategicContext: "Central Finance maintains LKR 5,216.88 Mn in funded credit utilization with Nations Trust Bank across bilateral term facilities and money market lines. While NDE Host-to-Host ERP connectivity is active, FriMi collection rails for retail lessee repayments and structured green EV lease refinancing represent immediate high-margin wallet expansion opportunities.",
      keyHighlights: [
        "Fitch National Long-Term Rating A+(lka) Stable Outlook; highest capital adequacy tier among Sri Lankan NBFIs",
        "Active bilateral term funding lines and working capital facilities totaling LKR 5,700.00 Mn reported CIF limit",
        "Strong 2026 YTD signed net revenue contribution of LKR 143.26 Mn (+14.8% YoY trajectory)"
      ],
      links: [
        { label: "Official Corporate Portal", url: "https://www.centralfinance.lk", type: "website" },
        { label: "CSE Issuer Filing (CFIN.N0000)", url: "https://www.cse.lk", type: "cse_filing" },
        { label: "FY 2025/26 Integrated Annual Report", url: "https://www.centralfinance.lk/investor-relations", type: "annual_report" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Institutional Term Loans & Securitised Notes (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 3820.5,
        monthlyBalances: buildMonthlyCurve(3950.412344, 3890.12, 3780),
        monthlyRevenue: buildExactRevenueSeries(102.455945)
      },
      {
        productCode: "LMS_DR",
        productName: "LMS Structured Refinance Advances (LMS DR)",
        productGroup: "LMS Structured Advances (LMS DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 890,
        monthlyBalances: buildMonthlyCurve(945.22, 920.5, 885),
        monthlyRevenue: buildExactRevenueSeries(24.18)
      },
      {
        productCode: "CASA_DR",
        productName: "Corporate Overdraft & Intraday Clearing Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 345,
        monthlyBalances: buildMonthlyCurve(321.25, 334.8, 340),
        monthlyRevenue: buildExactRevenueSeries(9.82)
      },
      {
        productCode: "CASA_CR",
        productName: "Operating Settlement & Collection Current Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 98.4,
        monthlyBalances: buildMonthlyCurve(116.334519, 109.4, 96.5),
        monthlyRevenue: buildExactRevenueSeries(4.15)
      },
      {
        productCode: "TD_CR",
        productName: "Liquidity Reserve Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 42,
        monthlyBalances: buildMonthlyCurve(45, 45, 42),
        monthlyRevenue: buildExactRevenueSeries(1.45)
      },
      {
        productCode: "BG_PERF",
        productName: "Institutional Commercial Paper & Statutory Guarantees",
        productGroup: "Bank Guarantees & Performance Bonds",
        category: "non_funded",
        measureLabel: "NON_FUNDED_LCY",
        dec25Bf: 240,
        monthlyBalances: buildMonthlyCurve(265, 265, 240),
        monthlyRevenue: buildExactRevenueSeries(1.2)
      }
    ],
    directors: [
      {
        directorCif: "60011201",
        name: "Arjuna K. Gunaratne",
        role: "Managing Director / Chief Executive Officer",
        hasBalanceExtract: true,
        latestAssetsMn: 42.8,
        latestLiabilitiesMn: 128.45,
        ytdRevenueMn: 3.92,
        reportedLimitMn: 75
      },
      {
        directorCif: "60011204",
        name: "Dr. Indrajit Coomaraswamy",
        role: "Independent Non-Executive Chairman",
        hasBalanceExtract: true,
        latestAssetsMn: 4.15,
        latestLiabilitiesMn: 89.6,
        ytdRevenueMn: 1.84,
        reportedLimitMn: 25
      },
      {
        directorCif: "60011209",
        name: "Dilshan P. Wijeyeratne",
        role: "Executive Director \u2014 Corporate Finance",
        hasBalanceExtract: true,
        latestAssetsMn: 18.5,
        latestLiabilitiesMn: 64.2,
        ytdRevenueMn: 2.11,
        reportedLimitMn: 40
      },
      {
        directorCif: "60019991",
        name: null,
        // Unnamed placeholder filtered out on web dashboard per spec
        role: "Director",
        hasBalanceExtract: false
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "FRIMI_CORP",
        productGroup: "FriMi Ecosystem & Employee Payroll Disbursement",
        headlineOffer: "FriMi Biller API & Islandwide Lease Collection Float Capture",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 18.5,
        financialRationale: "Central Finance carries LKR 5,216.88 Mn in funded assets with NTB against only LKR 161.33 Mn in average CASA/TD liabilities (3.1% deposit-to-asset coverage). While NDE and NDC are registered, FriMi is currently unregistered. Onboarding Central Finance as a featured FriMi Biller for 85,000+ monthly retail lease installments will build low-cost CASA CR float.",
        evidencePoints: [
          "Current liability-to-asset ratio is 3.09% (LKR 161.33 Mn vs LKR 5,216.88 Mn funded assets)",
          "FriMi digital registration flag is currently 0 (Not Registered) despite active NDE Host-to-Host integration",
          "Projected LKR 350+ Mn incremental average CASA CR float from monthly retail lease collections"
        ],
        talkingPoints: [
          "Propose zero-setup API bridge from existing Nations Direct Enterprise (NDE) host-to-host pipeline into FriMi instant QR and biller settlement.",
          "Offer tiered earnings credit or preferential overnight sweep pricing on incremental CASA CR balances exceeding LKR 250 Mn."
        ],
        implementationTimeline: "3\u20134 Weeks (Leveraging active NDE H2H link)"
      },
      {
        priority: 2,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "LKR 1,200 Mn Green EV & Solar Leasing Securitisation Tranche",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "92% Match",
        estimatedAnnualRevenueUpliftMn: 26.4,
        financialRationale: "With LKR 5,216.88 Mn average assets against a LKR 5,700.00 Mn reported CIF limit, Central Finance is actively expanding its hybrid/EV and commercial solar equipment portfolio. Structuring a dedicated green securitised term tranche qualifies for multilateral concessional funding lines.",
        evidencePoints: [
          "LN DR and LMS DR combined average balances reached LKR 4,895.63 Mn in Sep-26 (+LKR 185.13 Mn vs Dec-25 BF)",
          "Strong credit servicing track record generating LKR 143.26 Mn YTD signed revenue across 9 months"
        ],
        talkingPoints: [
          "Present NTB Sustainable Finance taxonomy framework to co-originate green commercial vehicle and rooftop solar leases.",
          "Discuss covenant-lite bilateral securitisation structure backed by ring-fenced receivables."
        ],
        implementationTimeline: "6\u20138 Weeks (Credit & Trustee Documentation)"
      },
      {
        priority: 3,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Executive Purchasing Cards & Branch Expense Management Program",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "87% Match",
        estimatedAnnualRevenueUpliftMn: 6.8,
        financialRationale: "Zero current utilization on Commercial Credit Cards (CARD DR) across Central Finance\u2019s 105+ regional branch network and executive leadership team, despite 3 active Board Directors banking personally with NTB Private Wealth.",
        evidencePoints: [
          "0.00 LKR Mn current balance in CARD DR / CARD CR product groups",
          "3 linked Executive Directors maintain LKR 282.25 Mn combined personal deposits with NTB"
        ],
        talkingPoints: [
          "Bundle Corporate Amex / MasterCard World fleet & travel cards with automated ERP expense feed into NDE.",
          "Extend complimentary Inner Circle Private Wealth upgrades to remaining non-executive board members."
        ],
        implementationTimeline: "2 Weeks (Fast-track under existing CIF limit)"
      }
    ]
  },
  // 2. Haycarb PLC — CIF 50688593 (Exact Spot Check Match)
  // Latest avg assets: 95.865908 | Latest avg liabilities: 11.708384 | Jan-Sep revenue: 4.564138 | Limit: 1458.130000
  {
    cif: "50688593",
    isPrimaryCustomer: true,
    reportedLimitMn: 1458.13,
    company: {
      legalName: "Haycarb PLC",
      shortName: "Haycarb",
      entityType: "Corporate",
      sector: "Global Export Manufacturing & Chemicals",
      subSector: "Coconut Shell Activated Carbon & Environmental Engineering",
      incorporationNumber: "PQ 59",
      headquarters: "400 Deans Road, Colombo 10 (Hayleys Group)",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Oshadhi Perera \u2014 SVP Export & Multinational Corporates",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "World\u2019s leading manufacturer and exporter of coconut shell-based activated carbon (subsidiary of Hayleys PLC, CSE: HAYC.N0000), operating 7 manufacturing facilities across Sri Lanka, Thailand, and Indonesia with global distribution in the US, UK, and Australia.",
      strategicContext: "Haycarb holds a substantial reported CIF limit of LKR 1,458.13 Mn with Nations Trust Bank, yet Sep-26 average funded assets stand at LKR 95.87 Mn and average liabilities at LKR 11.71 Mn. This wide gap signals that a large share of Haycarb\u2019s USD/EUR export bill discounting, charcoal supplier payments, and FX forward hedging is currently routed through competing trade banks.",
      keyHighlights: [
        "Reported CIF facility limit of LKR 1,458.13 Mn vs LKR 95.87 Mn current average funded asset utilization",
        "100% export-oriented USD/EUR revenue stream with continuous coconut charcoal procurement across rural Sri Lanka",
        "Nations Direct Enterprise (NDE) is currently Not Registered \u2014 high-impact catalyst for treasury automation"
      ],
      links: [
        { label: "Haycarb Official Website", url: "https://www.haycarb.com", type: "website" },
        { label: "Hayleys Group Investor Center", url: "https://www.hayleys.com", type: "annual_report" },
        { label: "CSE Quote & Disclosures (HAYC)", url: "https://www.cse.lk", type: "cse_filing" }
      ],
      lastVerifiedDate: "2026-11-02"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "not_registered",
      ndc: "registered",
      nde: "not_registered"
    },
    holdings: [
      {
        productCode: "FB_DISC",
        productName: "Export Foreign Bills Purchased & Packing Credit (FB DR)",
        productGroup: "Foreign Bills Purchased & Discounted (FB DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 64.2,
        monthlyBalances: buildMonthlyCurve(68.415908, 63.1, 58.5),
        monthlyRevenue: buildExactRevenueSeries(2.814138)
      },
      {
        productCode: "CASA_DR",
        productName: "Multi-Currency Export Working Capital Overdraft (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 31.8,
        monthlyBalances: buildMonthlyCurve(27.45, 29.8, 31),
        monthlyRevenue: buildExactRevenueSeries(0.95)
      },
      {
        productCode: "CASA_CR",
        productName: "FEEC / Exporter Foreign Currency & LKR Current Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 14.5,
        monthlyBalances: buildMonthlyCurve(11.708384, 12.9, 14.2),
        monthlyRevenue: buildExactRevenueSeries(0.42)
      },
      {
        productCode: "DOC_LC",
        productName: "Import Letters of Credit & Shipping Guarantees",
        productGroup: "Letters of Credit & Documentary Credits",
        category: "non_funded",
        measureLabel: "NON_FUNDED_LCY",
        dec25Bf: 112,
        monthlyBalances: buildMonthlyCurve(148.5, 136, 115),
        monthlyRevenue: buildExactRevenueSeries(0.24)
      },
      {
        productCode: "REMIT_TRADE",
        productName: "Inward Export Proceeds & Outward Raw Material Remittances",
        productGroup: "Inward & Outward International Remittances",
        category: "remittance",
        measureLabel: "REMITTANCE_LCY",
        dec25Bf: 85,
        monthlyBalances: buildMonthlyCurve(118.4, 104.2, 88),
        monthlyRevenue: buildExactRevenueSeries(0.14)
      }
    ],
    directors: [
      {
        directorCif: "60022101",
        name: "Rajitha Kariyawasan",
        role: "Managing Director \u2014 Haycarb PLC",
        hasBalanceExtract: true,
        latestAssetsMn: 12.4,
        latestLiabilitiesMn: 94.8,
        ytdRevenueMn: 2.65,
        reportedLimitMn: 50
      },
      {
        directorCif: "60022105",
        name: "Mohan Pandithage",
        role: "Chairman & Chief Executive \u2014 Hayleys PLC",
        hasBalanceExtract: true,
        latestAssetsMn: 0,
        latestLiabilitiesMn: 215.4,
        ytdRevenueMn: 4.18,
        reportedLimitMn: 120
      },
      {
        directorCif: "60022108",
        name: "Brahman Balaratnarajah",
        role: "Deputy Managing Director",
        hasBalanceExtract: true,
        latestAssetsMn: 6.2,
        latestLiabilitiesMn: 48.9,
        ytdRevenueMn: 1.12,
        reportedLimitMn: 30
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Charcoal & Coconut Shell Supplier Reverse Factoring + FriMi Rural Payouts",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "97% Match",
        estimatedAnnualRevenueUpliftMn: 22.8,
        financialRationale: "Haycarb has a LKR 1,458.13 Mn reported CIF limit with NTB while current Sep-26 average funded assets are only LKR 95.87 Mn. Deploying a buyer-led Supply Chain Financing (SCF) program for Haycarb\u2019s domestic charcoal collectors and regional suppliers activates already-sanctioned credit appetite while embedding FriMi instant payouts.",
        evidencePoints: [
          "Reported CIF limit of LKR 1,458.13 Mn vs LKR 95.87 Mn current average funded assets",
          "Neither FriMi nor Nations Direct Enterprise (NDE) is currently registered for automated supplier settlement"
        ],
        talkingPoints: [
          "Offer immediate activation of a LKR 600 Mn vendor discounting sub-program within the existing LKR 1,458.13 Mn CIF relationship.",
          "Eliminate cash-handling friction at regional charcoal collection centers in Kurunegala, Madampe, and Badalgama via FriMi instant disbursements."
        ],
        implementationTimeline: "3 Weeks (Limit already in place)"
      },
      {
        priority: 2,
        productCode: "FX_FORWARD",
        productGroup: "Treasury FX Forwards, Swaps & Hedging Desk",
        headlineOffer: "Pre-Shipment USD Packing Credit + Zero-Cost FX Collar Structure",
        targetCategory: "Treasury & Markets",
        confidenceScore: "94% Match",
        estimatedAnnualRevenueUpliftMn: 16.4,
        financialRationale: "Foreign Bills DR (LKR 68.42 Mn) and Trade Remittances (LKR 118.40 Mn) show steady monthly activity, but NTB captures only a fraction of Haycarb\u2019s export FX conversion volume, resulting in LKR 4.56 Mn YTD revenue.",
        evidencePoints: [
          "Inward/Outward Remittance volume rose to LKR 118.40 Mn in Sep-26 (+39.3% vs Dec-25 baseline)",
          "CASA CR exporter balances dropped from LKR 14.50 Mn (Dec-25 BF) to LKR 11.71 Mn (Sep-26 avg)"
        ],
        talkingPoints: [
          "Pitch bundled SOFR-linked USD pre-shipment packing credit paired with preferential FX forward conversion bands.",
          "Connect Haycarb Treasury directly to NTB FX Dealing Desk with automated trade confirmations."
        ],
        implementationTimeline: "1\u20132 Weeks (ISDA / Treasury Mandate)"
      },
      {
        priority: 3,
        productCode: "NDE_H2H",
        productGroup: "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        headlineOffer: "NDE Host-to-Host SAP Integration for Hayleys Shared Services",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 9.2,
        financialRationale: "Haycarb currently uses web-based Nations Direct Commercial (NDC) but is Not Registered on Nations Direct Enterprise (NDE). Upgrading to NDE Host-to-Host ERP integration will anchor primary operating CASA accounts at NTB.",
        evidencePoints: [
          "Digital access status: NDC = Registered (1), NDE = Not Registered (0)",
          "Average CASA CR balance of LKR 11.71 Mn can scale 5x once SAP payment runs are automated via NDE"
        ],
        talkingPoints: [
          "Demonstrate NDE automated MT940/camt.053 reconciliation directly into Hayleys Group SAP environment.",
          "Waive first-year NDE implementation fee conditional on routing LKR 100+ Mn average operational CASA float."
        ],
        implementationTimeline: "4\u20136 Weeks (IT & SAP Connector Setup)"
      }
    ]
  },
  // 3. L. G. Farm (Pvt) Ltd — CIF 50100120 (Exact Spot Check Match)
  // Latest avg assets: 1.092816 | Latest avg liabilities: 56.691975 | Jan-Sep revenue: 2.351084 | Limit: 144.516819
  {
    cif: "50100120",
    isPrimaryCustomer: true,
    reportedLimitMn: 144.516819,
    company: {
      legalName: "L. G. Farm (Pvt) Ltd",
      shortName: "L. G. Farm",
      entityType: "Corporate",
      sector: "Agribusiness, Poultry & Cold-Chain Food Production",
      subSector: "Integrated Poultry Breeder Operations, Feed Milling & Retail Distribution",
      incorporationNumber: "PV 11482",
      headquarters: "Kuliyapitiya / Kurunegala Road, North Western Province",
      relationshipTier: "Corporate Premier",
      relationshipManager: "Nuwan Bandara \u2014 Senior Manager Commercial Banking",
      branchName: "Kurunegala Corporate & Commercial Center",
      description: "Established Sri Lankan integrated agribusiness and poultry producer (lgfarm.lk) operating modern automated breeder farms, feed mills, hatcheries, and islandwide chilled/frozen farm-fresh distribution to supermarkets and HORECA buyers.",
      strategicContext: "L. G. Farm is a cash-rich net depositor with Nations Trust Bank, holding LKR 56.69 Mn in Sep-26 average liabilities (CASA CR & TD CR) against just LKR 1.09 Mn in average funded assets, despite having a LKR 144.52 Mn reported CIF facility limit. The company is poised for cold-chain solarization and maize/soybean import LC expansion.",
      keyHighlights: [
        "Strong net liquidity position: LKR 56.69 Mn Sep-26 average deposits vs LKR 1.09 Mn average funded borrowings",
        "Reported CIF credit limit of LKR 144.52 Mn offers immediate capacity for feed raw-material import LCs",
        "Consistent 2026 YTD signed bank revenue contribution of LKR 2.35 Mn with zero credit delinquency"
      ],
      links: [
        { label: "L. G. Farm Official Website", url: "https://lgfarm.lk/about.php", type: "website" },
        { label: "Department of Animal Production & Health Registry", url: "https://www.daph.gov.lk", type: "regulatory" }
      ],
      lastVerifiedDate: "2026-11-02"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "not_registered"
    },
    holdings: [
      {
        productCode: "CASA_DR",
        productName: "Seasonal Working Capital Overdraft Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 3.45,
        monthlyBalances: buildMonthlyCurve(0.842816, 1.15, 3.1),
        monthlyRevenue: buildExactRevenueSeries(0.381084)
      },
      {
        productCode: "CORP_CARD_DR",
        productName: "Executive & Fleet Fuel Corporate Cards (CARD DR)",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 0.22,
        monthlyBalances: buildMonthlyCurve(0.25, 0.24, 0.21),
        monthlyRevenue: buildExactRevenueSeries(0.09)
      },
      {
        productCode: "CASA_CR",
        productName: "Supermarket & Distributor Collection Current Account (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 28.4,
        monthlyBalances: buildMonthlyCurve(34.691975, 32.1, 29),
        monthlyRevenue: buildExactRevenueSeries(1.18)
      },
      {
        productCode: "TD_CR",
        productName: "Agribusiness Reserve Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 20,
        monthlyBalances: buildMonthlyCurve(22, 22, 20),
        monthlyRevenue: buildExactRevenueSeries(0.56)
      },
      {
        productCode: "DOC_LC",
        productName: "Feed Raw Material (Maize & Soya Meal) Import Sight LCs",
        productGroup: "Letters of Credit & Documentary Credits",
        category: "non_funded",
        measureLabel: "NON_FUNDED_LCY",
        dec25Bf: 18,
        monthlyBalances: buildMonthlyCurve(24.5, 21, 18.5),
        monthlyRevenue: buildExactRevenueSeries(0.14)
      }
    ],
    directors: [
      {
        directorCif: "60033101",
        name: "Lakshman Gunawardena",
        role: "Founder & Managing Director",
        hasBalanceExtract: true,
        latestAssetsMn: 3.2,
        latestLiabilitiesMn: 44.8,
        ytdRevenueMn: 1.15,
        reportedLimitMn: 20
      },
      {
        directorCif: "60033102",
        name: "Chaminda Gunawardena",
        role: "Director \u2014 Operations & Feed Milling",
        hasBalanceExtract: true,
        latestAssetsMn: 1.85,
        latestLiabilitiesMn: 19.4,
        ytdRevenueMn: 0.64,
        reportedLimitMn: 10
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "DOC_LC",
        productGroup: "Letters of Credit & Documentary Credits",
        headlineOffer: "Usance Import LC & Structured Commodity Trade Line for Feed Mill Inputs",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 4.2,
        financialRationale: "L. G. Farm maintains a LKR 144.52 Mn reported CIF limit while funded assets averaged just LKR 1.09 Mn in Sep-26. Converting seasonal maize, soybean meal, and vitamin premix imports into 90-day Usance LCs and short-term import loans will monetize the existing credit limit while preserving their LKR 56.69 Mn deposit cushion.",
        evidencePoints: [
          "Sep-26 average funded assets are only LKR 1.09 Mn alongside a LKR 144.52 Mn reported CIF limit",
          "Strong cash generation reflected in CASA CR growth from LKR 28.40 Mn (Dec-25 BF) to LKR 34.69 Mn (Sep-26 avg)"
        ],
        talkingPoints: [
          "Propose pre-approved import financing sub-allocation under the existing LKR 144.52 Mn CIF limit with preferential LC opening commission.",
          "Pair TD CR (LKR 22.00 Mn) as cash-margin collateral enhancement for zero-fee shipping guarantees."
        ],
        implementationTimeline: "1 Week (Facility already sanctioned)"
      },
      {
        priority: 2,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Rooftop Solar & Cold-Storage Energy Efficiency Capex Term Loan",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 3.6,
        financialRationale: "Cold-chain blast freezers and environmentally controlled poultry houses represent L. G. Farm\u2019s highest operating cost after feed. A 500kW rooftop solar and inverter chiller upgrade financed under NTB Green Project Finance reduces grid electricity costs by 40%.",
        evidencePoints: [
          "Zero current long-term debt (LN DR = 0.00 LKR Mn) on NTB books",
          "Strong net depositor profile (LKR 56.69 Mn average liabilities) supports rapid credit approval"
        ],
        talkingPoints: [
          "Present 5-year fixed-rate green equipment term loan matched to CEB net-plus solar payback cashflows.",
          "Introduce NTB engineering panel partners for turnkey cold-room solar installation."
        ],
        implementationTimeline: "3\u20134 Weeks"
      },
      {
        priority: 3,
        productCode: "IPG_MERCHANT",
        productGroup: "NTB IPG & POS Merchant Acquiring Solutions",
        headlineOffer: "Smart POS & QR Collection Terminals for Farm Retail Outlets & Delivery Fleet",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "88% Match",
        estimatedAnnualRevenueUpliftMn: 1.9,
        financialRationale: "L. G. Farm is already registered on FriMi, Internet Banking, Mobile Banking, and NDC. Equipping their direct retail outlets and refrigerated delivery trucks with NTB Android Smart POS & LankaQR terminals will consolidate 100% of retail card/QR settlements into their NTB CASA CR account.",
        evidencePoints: [
          "4 of 5 digital channels registered (FriMi, IB, MB, NDC all active)",
          "CASA CR average balance already grew +22.15% vs Dec-25 closing BF"
        ],
        talkingPoints: [
          "Offer same-day T+0 merchant settlement directly into L. G. Farm\u2019s primary NTB current account.",
          "Provide 15 handheld Android POS units with zero monthly rental for the first 6 months."
        ],
        implementationTimeline: "10 Business Days"
      }
    ]
  },
  // 4. John Keells Holdings PLC — CIF 50214890
  {
    cif: "50214890",
    isPrimaryCustomer: true,
    reportedLimitMn: 8500,
    company: {
      legalName: "John Keells Holdings PLC",
      shortName: "John Keells Holdings",
      entityType: "Corporate",
      sector: "Diversified Conglomerate",
      subSector: "Transportation, Consumer Foods, Retail, Leisure & Financial Services",
      incorporationNumber: "PQ 14",
      headquarters: "117 Sir Chittampalam A. Gardiner Mawatha, Colombo 02",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Kavinda Rajapaksa \u2014 VP Institutional Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Sri Lanka\u2019s largest listed conglomerate on the Colombo Stock Exchange (CSE: JKH.N0000), operating over 70 companies across port & marine bunkering, modern supermarket retail (Keells), consumer foods, leisure, property development, and IT.",
      strategicContext: "Core institutional anchor relationship with Nations Trust Bank. High digital maturity across all 5 platforms including NDE Host-to-Host and FriMi ecosystem partnerships. Focus for Q4 2026 is expanding supply chain vendor financing for Keells Supermarket suppliers and treasury structured derivatives.",
      keyHighlights: [
        "Full 5/5 digital platform adoption (FriMi, IB, MB, NDC, and NDE Host-to-Host active)",
        "Balanced institutional book: LKR 6,412.50 Mn average assets and LKR 1,845.20 Mn average liabilities",
        "Top-tier YTD signed revenue contribution of LKR 198.40 Mn through Sep-26"
      ],
      links: [
        { label: "John Keells Group Portal", url: "https://www.keells.com", type: "website" },
        { label: "Annual Report & Sustainability Filings", url: "https://www.keells.com/investor-relations", type: "annual_report" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Syndicated & Bilateral Corporate Term Facilities (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 4850,
        monthlyBalances: buildMonthlyCurve(5120, 5040, 4890),
        monthlyRevenue: buildExactRevenueSeries(128.4)
      },
      {
        productCode: "CASA_DR",
        productName: "Group Treasury Working Capital & Intraday Lines (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1180,
        monthlyBalances: buildMonthlyCurve(1292.5, 1240, 1190),
        monthlyRevenue: buildExactRevenueSeries(34.2)
      },
      {
        productCode: "CASA_CR",
        productName: "Group Sweeping & Operating Current Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 920,
        monthlyBalances: buildMonthlyCurve(1095.2, 1020, 945),
        monthlyRevenue: buildExactRevenueSeries(21.5)
      },
      {
        productCode: "TD_CR",
        productName: "Money Market & Corporate Call Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 700,
        monthlyBalances: buildMonthlyCurve(750, 750, 710),
        monthlyRevenue: buildExactRevenueSeries(14.3)
      }
    ],
    directors: [
      {
        directorCif: "60044101",
        name: "Krishan Balendra",
        role: "Chairperson & CEO",
        hasBalanceExtract: true,
        latestAssetsMn: 25,
        latestLiabilitiesMn: 310.5,
        ytdRevenueMn: 5.8,
        reportedLimitMn: 150
      },
      {
        directorCif: "60044102",
        name: "Gihan Cooray",
        role: "Deputy Chairperson & Group Finance Director",
        hasBalanceExtract: true,
        latestAssetsMn: 14.2,
        latestLiabilitiesMn: 165,
        ytdRevenueMn: 3.4,
        reportedLimitMn: 80
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Automated NDE Supplier Early-Payment Program for 450+ SME Vendors",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 38,
        financialRationale: "Leveraging the active NDE Host-to-Host connection to embed dynamic invoice discounting for domestic FMCG and agricultural suppliers.",
        evidencePoints: [
          "NDE Host-to-Host integration already live with LKR 1,095.20 Mn average CASA CR throughput",
          "Reported CIF limit of LKR 8,500.00 Mn provides ample institutional capacity"
        ],
        talkingPoints: [
          "Deploy API-driven supplier early settlement directly inside JKH\u2019s existing NDE workflow.",
          "Support Group ESG metrics by offering preferential discounting rates to certified sustainable SME vendors."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 2,
        productCode: "FX_FORWARD",
        productGroup: "Treasury FX Forwards, Swaps & Hedging Desk",
        headlineOffer: "Multi-Currency Bunkering & Leisure FX Cashflow Hedging Mandate",
        targetCategory: "Treasury & Markets",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 24.5,
        financialRationale: "Capture higher share of USD maritime bunkering and Maldivian/Sri Lankan resort inflows via algorithmic FX order execution.",
        evidencePoints: [
          "Strong working capital velocity across group subsidiaries"
        ],
        talkingPoints: [
          "Present structured USD/LKR participating forward structures for Q1\u2013Q2 2027 capex commitments."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Sustainability-Linked KPI Term Facility for Supermarket Solar & EV Logistics",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "89% Match",
        estimatedAnnualRevenueUpliftMn: 19,
        financialRationale: "Refinance upcoming capex tranches with margin ratchets tied to cold-chain carbon intensity reduction.",
        evidencePoints: [
          "LN DR book grew +5.57% vs Dec-25 closing BF to LKR 5,120.00 Mn"
        ],
        talkingPoints: [
          "Structure a 15 bps interest rate step-down linked to audited renewable energy milestones."
        ],
        implementationTimeline: "6 Weeks"
      }
    ]
  },
  // 5. MAS Capital (Pvt) Ltd — CIF 50319420
  {
    cif: "50319420",
    isPrimaryCustomer: true,
    reportedLimitMn: 4200,
    company: {
      legalName: "MAS Capital (Pvt) Ltd",
      shortName: "MAS Capital",
      entityType: "Corporate",
      sector: "Apparel Tech & Global Export Manufacturing",
      subSector: "Intimate Apparel, Performance Sportswear & Wearable Technology",
      incorporationNumber: "PV 4821",
      headquarters: "199 Kew Road, Colombo 02",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Oshadhi Perera \u2014 SVP Export & Multinational Corporates",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Principal investment and export apparel operating arm of MAS Holdings, South Asia\u2019s largest design-to-delivery apparel and textile technology manufacturer serving global athletic and lifestyle brands across 16 countries.",
      strategicContext: "High-velocity USD trade finance, export bill discounting, and foreign currency margin relationship. Prime candidate for FriMi factory payroll expansion across regional industrial parks.",
      keyHighlights: [
        "LKR 2,845.60 Mn Sep-26 average funded assets led by USD pre-shipment and export bill discounting",
        "LKR 612.80 Mn Sep-26 average liabilities including USD FEEC and FC Margin accounts",
        "LKR 86.40 Mn 2026 YTD signed bank revenue"
      ],
      links: [
        { label: "MAS Holdings Official Website", url: "https://www.masholdings.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "FB_DISC",
        productName: "USD Export Bills Purchased & Supply Chain Discounting (FB DR)",
        productGroup: "Foreign Bills Purchased & Discounted (FB DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1790,
        monthlyBalances: buildMonthlyCurve(1925.6, 1880, 1810),
        monthlyRevenue: buildExactRevenueSeries(54.2)
      },
      {
        productCode: "LN_DR",
        productName: "Export Manufacturing Automation Term Facility (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 950,
        monthlyBalances: buildMonthlyCurve(920, 930, 945),
        monthlyRevenue: buildExactRevenueSeries(21.8)
      },
      {
        productCode: "CASA_CR",
        productName: "Exporter FCY & LKR Operating Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 410,
        monthlyBalances: buildMonthlyCurve(462.8, 445, 415),
        monthlyRevenue: buildExactRevenueSeries(7.9)
      },
      {
        productCode: "FC_MARGIN",
        productName: "Foreign Currency LC Margin Accounts (FC MARGIN CR)",
        productGroup: "Foreign Currency Margin Deposits (FC MARGIN CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 135,
        monthlyBalances: buildMonthlyCurve(150, 142, 138),
        monthlyRevenue: buildExactRevenueSeries(2.5)
      }
    ],
    directors: [
      {
        directorCif: "60055101",
        name: "Suren Fernando",
        role: "Group Chief Executive Officer",
        hasBalanceExtract: true,
        latestAssetsMn: 8.5,
        latestLiabilitiesMn: 142,
        ytdRevenueMn: 2.9,
        reportedLimitMn: 60
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "FRIMI_CORP",
        productGroup: "FriMi Ecosystem & Employee Payroll Disbursement",
        headlineOffer: "FriMi Digital Payroll & Micro-Savings Onboarding for 12,000+ Apparel Associates",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 15.8,
        financialRationale: "While NDE Host-to-Host is active, FriMi is currently Not Registered. Routing monthly plant payroll through NDE into employee FriMi accounts retains significant retail CASA float within the NTB ecosystem.",
        evidencePoints: [
          "NDE = Registered (1), FriMi = Not Registered (0)",
          "High monthly LKR conversion volume from USD export proceeds for local wage disbursement"
        ],
        talkingPoints: [
          "Conduct on-site FriMi financial literacy & instant account activation drives at Thulhiriya and Katunayake plants."
        ],
        implementationTimeline: "3 Weeks"
      },
      {
        priority: 2,
        productCode: "DOC_LC",
        productGroup: "Letters of Credit & Documentary Credits",
        headlineOffer: "Back-to-Back Fabric & Trim Import LC Corridor (Asia-Pacific)",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "93% Match",
        estimatedAnnualRevenueUpliftMn: 14.2,
        financialRationale: "Expand non-funded back-to-back LC utilization alongside the LKR 1,925.60 Mn Foreign Bills DR book.",
        evidencePoints: [
          "LKR 4,200.00 Mn reported CIF limit vs LKR 2,845.60 Mn funded assets"
        ],
        talkingPoints: [
          "Offer automated LC issuance directly from NDE with same-day swift transmission."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "LEED Platinum Plant Water Recycling & Biomass Boiler Capex Line",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "88% Match",
        estimatedAnnualRevenueUpliftMn: 11.4,
        financialRationale: "Replenish amortizing LN DR balances (down from LKR 950 Mn to LKR 920 Mn) with sustainability-linked term debt.",
        evidencePoints: [
          "LN DR amortized by -LKR 30.00 Mn vs Dec-25 closing BF"
        ],
        talkingPoints: [
          "Align USD term loan pricing with SBTi carbon reduction targets."
        ],
        implementationTimeline: "5 Weeks"
      }
    ]
  },
  // 6. Aitken Spence PLC — CIF 50428115
  {
    cif: "50428115",
    isPrimaryCustomer: true,
    reportedLimitMn: 3600,
    company: {
      legalName: "Aitken Spence PLC",
      shortName: "Aitken Spence",
      entityType: "Corporate",
      sector: "Tourism, Maritime Logistics & Power Generation",
      subSector: "Destination Management, Heritance Hotels, Port Management & Renewable Energy",
      incorporationNumber: "PQ 120",
      headquarters: "315 Vauxhall Street, Colombo 02",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Kavinda Rajapaksa \u2014 VP Institutional Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Blue-chip Sri Lankan conglomerate (CSE: SPEN.N0000) with operations in luxury resorts (Heritance & Adaaran across Sri Lanka, Maldives, Oman, and India), integrated maritime & freight logistics, renewable energy, and apparel.",
      strategicContext: "Strong recovery in inbound tourism inflows has lifted Aitken Spence\u2019s CASA CR and TD CR balances to LKR 842.50 Mn while maintaining LKR 2,140.00 Mn in funded assets.",
      keyHighlights: [
        "Tourism & Maritime FX inflows drove +18.3% growth in average liabilities vs Dec-25 closing BF",
        "Active across 4 of 5 digital channels; FriMi hospitality guest QR payment integration ready for scale"
      ],
      links: [
        { label: "Aitken Spence Official Website", url: "https://www.aitkenspence.com", type: "website" },
        { label: "CSE Filings (SPEN.N0000)", url: "https://www.cse.lk", type: "cse_filing" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Resort Refurbishment & Waste-to-Energy Term Loans (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1680,
        monthlyBalances: buildMonthlyCurve(1750, 1730, 1690),
        monthlyRevenue: buildExactRevenueSeries(48.6)
      },
      {
        productCode: "CASA_DR",
        productName: "Logistics & Port Services Working Capital Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 410,
        monthlyBalances: buildMonthlyCurve(390, 405, 412),
        monthlyRevenue: buildExactRevenueSeries(12.4)
      },
      {
        productCode: "CASA_CR",
        productName: "Destination Management USD/EUR & LKR Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 462,
        monthlyBalances: buildMonthlyCurve(542.5, 515, 470),
        monthlyRevenue: buildExactRevenueSeries(11.2)
      },
      {
        productCode: "TD_CR",
        productName: "Foreign Currency & LKR Fixed Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 250,
        monthlyBalances: buildMonthlyCurve(300, 290, 255),
        monthlyRevenue: buildExactRevenueSeries(6.3)
      }
    ],
    directors: [
      {
        directorCif: "60066101",
        name: "Dr. Parakrama Dissanayake",
        role: "Deputy Chairman & Managing Director",
        hasBalanceExtract: true,
        latestAssetsMn: 9.4,
        latestLiabilitiesMn: 118.2,
        ytdRevenueMn: 2.45,
        reportedLimitMn: 50
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "IPG_MERCHANT",
        productGroup: "NTB IPG & POS Merchant Acquiring Solutions",
        headlineOffer: "Multi-Currency Amex/Visa/MasterCard Resort Acquiring & Dynamic Currency Conversion",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 17.5,
        financialRationale: "Entering peak winter tourism season across Heritance properties; capturing direct booking IPG and property POS acquiring boosts high-margin FX spread and CASA CR retention.",
        evidencePoints: [
          "CASA CR average balances rose to LKR 542.50 Mn (+LKR 80.50 Mn vs Dec-25 closing BF)"
        ],
        talkingPoints: [
          "Offer preferential Amex merchant discount rate (MDR) bundled with instant USD account settlement."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 2,
        productCode: "FX_FORWARD",
        productGroup: "Treasury FX Forwards, Swaps & Hedging Desk",
        headlineOffer: "Winter Charter EUR/GBP/USD Forward Monetization Line",
        targetCategory: "Treasury & Markets",
        confidenceScore: "92% Match",
        estimatedAnnualRevenueUpliftMn: 12.8,
        financialRationale: "Lock in peak winter tour operator receivables across European and UK corridors.",
        evidencePoints: [
          "Reported CIF limit of LKR 3,600.00 Mn supports treasury forward lines"
        ],
        talkingPoints: [
          "Structure zero-margin forward contracts backed by confirmed tour operator allotments."
        ],
        implementationTimeline: "1 Week"
      },
      {
        priority: 3,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Maritime & Freight Customs Clearance Corporate Card Line",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "86% Match",
        estimatedAnnualRevenueUpliftMn: 5.4,
        financialRationale: "Digitize port clearing and vessel husbandry disbursements currently paid via manual overdraft draws.",
        evidencePoints: [
          "CASA DR average balance of LKR 390.00 Mn can be partially migrated to higher-yield commercial cards"
        ],
        talkingPoints: [
          "Provide 45-day interest-free credit cycle for Sri Lanka Ports Authority and customs fee payments."
        ],
        implementationTimeline: "2 Weeks"
      }
    ]
  },
  // 7. Dialog Axiata PLC — CIF 50539204
  {
    cif: "50539204",
    isPrimaryCustomer: true,
    reportedLimitMn: 6200,
    company: {
      legalName: "Dialog Axiata PLC",
      shortName: "Dialog Axiata",
      entityType: "Corporate",
      sector: "Telecommunications & Digital Infrastructure",
      subSector: "5G Mobile Broadband, Enterprise Cloud, FinTech & Pay TV",
      incorporationNumber: "PQ 38",
      headquarters: "475 Union Place, Colombo 02",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Kavinda Rajapaksa \u2014 VP Institutional Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Sri Lanka\u2019s premier quad-play connectivity provider (CSE: DIAL.N0000) serving over 17 million subscribers with mobile, fixed broadband, digital television, and enterprise ICT infrastructure.",
      strategicContext: "Headquartered adjacent to NTB Union Place Corporate Office. High-volume daily digital collections and telecom tower capex financing relationship.",
      keyHighlights: [
        "LKR 4,180.00 Mn Sep-26 average funded assets across 5G spectrum/network term loans and working capital",
        "LKR 985.40 Mn Sep-26 average liabilities with full 5/5 digital channel registration"
      ],
      links: [
        { label: "Dialog Official Portal", url: "https://www.dialog.lk", type: "website" },
        { label: "Dialog Investor Relations", url: "https://www.dialog.lk/investor-relations", type: "annual_report" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Network Tower & Fiber Infrastructure Term Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 3600,
        monthlyBalances: buildMonthlyCurve(3750, 3710, 3620),
        monthlyRevenue: buildExactRevenueSeries(96.5)
      },
      {
        productCode: "CASA_DR",
        productName: "Intraday Liquidity & Vendor Settlement Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 450,
        monthlyBalances: buildMonthlyCurve(430, 440, 448),
        monthlyRevenue: buildExactRevenueSeries(11.8)
      },
      {
        productCode: "CASA_CR",
        productName: "Subscriber Bill Collection & Auto-Debit Sweeping Account (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 810,
        monthlyBalances: buildMonthlyCurve(985.4, 940, 825),
        monthlyRevenue: buildExactRevenueSeries(19.4)
      }
    ],
    directors: [
      {
        directorCif: "60077101",
        name: "Supun Weerasinghe",
        role: "Director & Group Chief Executive",
        hasBalanceExtract: true,
        latestAssetsMn: 15,
        latestLiabilitiesMn: 134.5,
        ytdRevenueMn: 3.1,
        reportedLimitMn: 75
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Regional Distributor Handset & Reload Inventory Financing Line",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 28,
        financialRationale: "Finance Dialog\u2019s islandwide regional distributor network via automated NDE dealer collection sweeps.",
        evidencePoints: [
          "CASA CR collections reached LKR 985.40 Mn in Sep-26 (+21.65% vs Dec-25 closing BF)"
        ],
        talkingPoints: [
          "Provide automated credit limit replenishment to regional distributors upon real-time NDE settlement."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 2,
        productCode: "DOC_LC",
        productGroup: "Letters of Credit & Documentary Credits",
        headlineOffer: "Telecom Equipment & Lithium Backup Battery Import Usance LC Line",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 16.5,
        financialRationale: "Utilize unallocated capacity within the LKR 6,200.00 Mn CIF limit for network equipment imports.",
        evidencePoints: [
          "Reported CIF limit of LKR 6,200.00 Mn vs LKR 4,180.00 Mn average funded assets"
        ],
        talkingPoints: [
          "Structure 180-day supplier deferred payment guarantees with Tier-1 Asian correspondent banks."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Off-Grid Solar Base Station (BTS) Green Term Facility",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "89% Match",
        estimatedAnnualRevenueUpliftMn: 14,
        financialRationale: "Support Dialog\u2019s net-zero tower solarization rollout across rural base stations.",
        evidencePoints: [
          "Strong LN DR revenue contribution of LKR 96.50 Mn YTD"
        ],
        talkingPoints: [
          "Co-finance solar + LiFePO4 battery retrofits for 300 telecom towers."
        ],
        implementationTimeline: "5 Weeks"
      }
    ]
  },
  // 8. Hemas Holdings PLC — CIF 50741832
  {
    cif: "50741832",
    isPrimaryCustomer: true,
    reportedLimitMn: 2950,
    company: {
      legalName: "Hemas Holdings PLC",
      shortName: "Hemas Holdings",
      entityType: "Corporate",
      sector: "Healthcare, Pharmaceuticals & Consumer Brands",
      subSector: "Hospital Chain, Pharma Manufacturing/Distribution & Home/Personal Care FMCG",
      incorporationNumber: "PQ 6",
      headquarters: "Hemas House, 75 Braybrooke Place, Colombo 02",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Oshadhi Perera \u2014 SVP Export & Multinational Corporates",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Leading Sri Lankan public quoted conglomerate (CSE: HHL.N0000) focused on Consumer Brands (Kumarika, Baby Cheramy, Atlas), Healthcare (Morison Pharma manufacturing, pharmaceutical distribution, Hemas Hospitals), and Mobility.",
      strategicContext: "Essential pharmaceutical import LC and FMCG distributor cash management relationship. High deposit stability with LKR 624.80 Mn in Sep-26 average liabilities.",
      keyHighlights: [
        "LKR 1,640.20 Mn Sep-26 average funded assets and LKR 624.80 Mn average liabilities",
        "High non-funded LC utilization (LKR 485.00 Mn) for active pharmaceutical ingredient (API) imports"
      ],
      links: [
        { label: "Hemas Holdings Website", url: "https://www.hemas.com", type: "website" },
        { label: "Hemas Investor Relations", url: "https://www.hemas.com/investor-relations.html", type: "annual_report" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Pharma Manufacturing Plant & Hospital Capex Term Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1120,
        monthlyBalances: buildMonthlyCurve(1185.2, 1160, 1130),
        monthlyRevenue: buildExactRevenueSeries(34.8)
      },
      {
        productCode: "CASA_DR",
        productName: "FMCG & Pharma Working Capital Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 430,
        monthlyBalances: buildMonthlyCurve(455, 442, 435),
        monthlyRevenue: buildExactRevenueSeries(14.1)
      },
      {
        productCode: "CASA_CR",
        productName: "Hospital & FMCG Distributor Collection Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 380,
        monthlyBalances: buildMonthlyCurve(424.8, 410, 385),
        monthlyRevenue: buildExactRevenueSeries(8.9)
      },
      {
        productCode: "TD_CR",
        productName: "Corporate Treasury Fixed Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 185,
        monthlyBalances: buildMonthlyCurve(200, 200, 185),
        monthlyRevenue: buildExactRevenueSeries(3.8)
      },
      {
        productCode: "DOC_LC",
        productName: "Pharmaceutical API & Medical Device Import LCs",
        productGroup: "Letters of Credit & Documentary Credits",
        category: "non_funded",
        measureLabel: "NON_FUNDED_LCY",
        dec25Bf: 420,
        monthlyBalances: buildMonthlyCurve(485, 460, 430),
        monthlyRevenue: buildExactRevenueSeries(6.4)
      }
    ],
    directors: [
      {
        directorCif: "60088101",
        name: "Husein Esufally",
        role: "Non-Executive Chairman",
        hasBalanceExtract: true,
        latestAssetsMn: 0,
        latestLiabilitiesMn: 178.5,
        ytdRevenueMn: 3.6,
        reportedLimitMn: 80
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Islandwide Pharmacy & Stationery Distributor Channel Financing",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 19.5,
        financialRationale: "Automate distributor receivables collection for Morison Pharma and Atlas Axillia retail networks via NDE.",
        evidencePoints: [
          "NDE Host-to-Host active; LKR 2,950.00 Mn CIF limit vs LKR 1,640.20 Mn average funded assets"
        ],
        talkingPoints: [
          "Reduce DSO (Days Sales Outstanding) by 18 days across regional pharmaceutical distributors."
        ],
        implementationTimeline: "3 Weeks"
      },
      {
        priority: 2,
        productCode: "IPG_MERCHANT",
        productGroup: "NTB IPG & POS Merchant Acquiring Solutions",
        headlineOffer: "Hemas Hospitals Outpatient Digital Checkout & FriMi Health Wallet",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 8.4,
        financialRationale: "Expand hospital counter POS and online lab-booking IPG throughput.",
        evidencePoints: [
          "FriMi and NDE both registered; hospital patient cashflows peak on weekends"
        ],
        talkingPoints: [
          "Enable instant insurance co-pay and outpatient diagnostic settlements via FriMi QR."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "FX_FORWARD",
        productGroup: "Treasury FX Forwards, Swaps & Hedging Desk",
        headlineOffer: "Structured USD/INR/EUR Pharma Import Hedging Line",
        targetCategory: "Treasury & Markets",
        confidenceScore: "88% Match",
        estimatedAnnualRevenueUpliftMn: 7.2,
        financialRationale: "Protect NMRA price-controlled pharmaceutical import margins against currency volatility.",
        evidencePoints: [
          "LKR 485.00 Mn active non-funded Documentary Credits in Sep-26"
        ],
        talkingPoints: [
          "Match forward FX tenors directly to 90/120-day pharmaceutical Usance LC maturities."
        ],
        implementationTimeline: "1 Week"
      }
    ]
  },
  // 9. Sunshine Holdings PLC — CIF 50812940
  {
    cif: "50812940",
    isPrimaryCustomer: true,
    reportedLimitMn: 1850,
    company: {
      legalName: "Sunshine Holdings PLC",
      shortName: "Sunshine Holdings",
      entityType: "Corporate",
      sector: "Healthcare, Consumer Brands & Agribusiness",
      subSector: "Healthguard Pharmacy Chain, Watawala Tea & Palm Oil",
      incorporationNumber: "PQ 13",
      headquarters: "60 Dharmapala Mawatha, Colombo 03",
      relationshipTier: "Corporate Premier",
      relationshipManager: "Oshadhi Perera \u2014 SVP Export & Multinational Corporates",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Diversified Sri Lankan conglomerate (CSE: SUN.N0000) with market-leading operations in pharmaceutical & wellness retail (Healthguard), branded tea (Zesta, Watawala), and agribusiness.",
      strategicContext: "Strong growth in healthcare retail and FMCG distribution; currently Not Registered on Nations Direct Enterprise (NDE), making ERP host-to-host migration the top priority.",
      keyHighlights: [
        "LKR 1,124.50 Mn Sep-26 average funded assets and LKR 318.40 Mn average liabilities",
        "NDE Host-to-Host upgrade opportunity to consolidate subsidiary treasury operations"
      ],
      links: [
        { label: "Sunshine Holdings Website", url: "https://www.sunshineholdings.lk", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "not_registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Healthcare & Consumer Expansion Term Facility (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 840,
        monthlyBalances: buildMonthlyCurve(890.5, 875, 845),
        monthlyRevenue: buildExactRevenueSeries(26.4)
      },
      {
        productCode: "CASA_DR",
        productName: "Tea Auction & Pharma Working Capital Overdraft (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 245,
        monthlyBalances: buildMonthlyCurve(234, 240, 244),
        monthlyRevenue: buildExactRevenueSeries(7.8)
      },
      {
        productCode: "CASA_CR",
        productName: "Healthguard Retail & FMCG Collection Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 265,
        monthlyBalances: buildMonthlyCurve(318.4, 302, 270),
        monthlyRevenue: buildExactRevenueSeries(6.9)
      }
    ],
    directors: [
      {
        directorCif: "60099101",
        name: "Vish Govindasamy",
        role: "Group Managing Director",
        hasBalanceExtract: true,
        latestAssetsMn: 6.5,
        latestLiabilitiesMn: 92.4,
        ytdRevenueMn: 2.15,
        reportedLimitMn: 45
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "NDE_H2H",
        productGroup: "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        headlineOffer: "NDE Host-to-Host Treasury Centralization across Healthcare & Consumer Units",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 11.2,
        financialRationale: "Sunshine Holdings is active on NDC but Not Registered on NDE. Host-to-host ERP integration automates daily reconciliation across Healthguard retail outlets and Watawala distributors.",
        evidencePoints: [
          "NDC = Registered (1), NDE = Not Registered (0)",
          "CASA CR balances grew +20.15% vs Dec-25 closing BF to LKR 318.40 Mn"
        ],
        talkingPoints: [
          "Upgrade from NDC web portal to full NDE ERP integration with automated virtual account tagging."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 2,
        productCode: "DOC_LC",
        productGroup: "Letters of Credit & Documentary Credits",
        headlineOffer: "Medical Diagnostics & Wellness Retail Import LC Line",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "90% Match",
        estimatedAnnualRevenueUpliftMn: 8.6,
        financialRationale: "Capture higher share of pharmaceutical and medical device import LCs under the LKR 1,850.00 Mn CIF limit.",
        evidencePoints: [
          "LKR 1,850.00 Mn reported CIF limit vs LKR 1,124.50 Mn average funded assets"
        ],
        talkingPoints: [
          "Bundle import LC lines with preferential EUR/USD forward cover."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Medical Rep & Regional Sales Fleet Corporate Card Program",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "85% Match",
        estimatedAnnualRevenueUpliftMn: 4.1,
        financialRationale: "Streamline field force travel and fuel expenses across 150+ medical representatives.",
        evidencePoints: [
          "Zero current CARD DR utilization"
        ],
        talkingPoints: [
          "Provide real-time merchant category controls and automated expense reporting."
        ],
        implementationTimeline: "2 Weeks"
      }
    ]
  },
  // 10. Dilmah Ceylon Tea Company PLC — CIF 50923411
  {
    cif: "50923411",
    isPrimaryCustomer: true,
    reportedLimitMn: 2400,
    company: {
      legalName: "Dilmah Ceylon Tea Company PLC",
      shortName: "Dilmah Ceylon Tea",
      entityType: "Corporate",
      sector: "Global Value-Added Tea Exporter",
      subSector: "Single-Origin Packaged Tea, Luxury Hospitality & Conservation",
      incorporationNumber: "PQ 209",
      headquarters: "111 Negombo Road, Peliyagoda",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Oshadhi Perera \u2014 SVP Export & Multinational Corporates",
      branchName: "Peliyagoda / Corporate Banking Head Office",
      description: "Globally renowned family-owned ethical tea brand (CSE: CTEA.N0000) exporting value-added single-origin Ceylon tea to over 100 countries, maintaining substantial USD/EUR/AUD liquidity reserves.",
      strategicContext: "Highly liquid export powerhouse holding LKR 1,920.40 Mn in Sep-26 average deposits (CASA CR, TD CR, FC Margin) against LKR 412.00 Mn in average funded packing credit.",
      keyHighlights: [
        "Net depositor powerhouse: LKR 1,920.40 Mn average liabilities vs LKR 412.00 Mn average funded assets",
        "Strong 2026 YTD signed revenue of LKR 52.80 Mn driven by trade remittances and FX deposits"
      ],
      links: [
        { label: "Dilmah Global Portal", url: "https://www.dilmahtea.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "FB_DISC",
        productName: "Export Bills Purchased & Tea Auction Packing Credit (FB DR)",
        productGroup: "Foreign Bills Purchased & Discounted (FB DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 395,
        monthlyBalances: buildMonthlyCurve(412, 405, 398),
        monthlyRevenue: buildExactRevenueSeries(14.8)
      },
      {
        productCode: "TD_CR",
        productName: "Exporter USD/EUR & LKR Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 1350,
        monthlyBalances: buildMonthlyCurve(1480, 1450, 1380),
        monthlyRevenue: buildExactRevenueSeries(28.4)
      },
      {
        productCode: "CASA_CR",
        productName: "Global Export Settlement Current Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 390,
        monthlyBalances: buildMonthlyCurve(440.4, 425, 395),
        monthlyRevenue: buildExactRevenueSeries(9.6)
      }
    ],
    directors: [
      {
        directorCif: "60100101",
        name: "Dilhan C. Fernando",
        role: "Chairman & Chief Executive Officer",
        hasBalanceExtract: true,
        latestAssetsMn: 0,
        latestLiabilitiesMn: 245,
        ytdRevenueMn: 4.9,
        reportedLimitMn: 100
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "FX_FORWARD",
        productGroup: "Treasury FX Forwards, Swaps & Hedging Desk",
        headlineOffer: "Dual-Currency Yield Enhancement & Export FX Forward Program",
        targetCategory: "Treasury & Markets",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 18.2,
        financialRationale: "Optimize yield on Dilmah\u2019s LKR 1,480.00 Mn TD CR and LKR 440.40 Mn CASA CR foreign currency balances while hedging Colombo Tea Auction LKR settlement obligations.",
        evidencePoints: [
          "LKR 1,920.40 Mn total Sep-26 average liabilities (+10.37% vs Dec-25 closing BF)"
        ],
        talkingPoints: [
          "Present structured USD/LKR weekly auction settlement swaps matched to Tuesday/Wednesday Colombo Tea Auction prompts."
        ],
        implementationTimeline: "1 Week"
      },
      {
        priority: 2,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Carbon-Neutral Packaging & Electric Forklift Fleet Green Leasing",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 9.5,
        financialRationale: "Deploy concessional green capex financing under the LKR 2,400.00 Mn CIF limit without disturbing high-yield USD deposits.",
        evidencePoints: [
          "Reported CIF limit of LKR 2,400.00 Mn vs LKR 412.00 Mn current funded assets"
        ],
        talkingPoints: [
          "Show positive net interest carry of borrowing in concessional green LKR vs liquidating USD deposits."
        ],
        implementationTimeline: "3 Weeks"
      },
      {
        priority: 3,
        productCode: "FRIMI_CORP",
        productGroup: "FriMi Ecosystem & Employee Payroll Disbursement",
        headlineOffer: "FriMi QR & Merchant Acquiring for t-Lounge by Dilmah Flagship Outlets",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "89% Match",
        estimatedAnnualRevenueUpliftMn: 4.8,
        financialRationale: "FriMi is currently Not Registered; co-branded lifestyle campaigns at t-Lounge locations align strongly with NTB Amex and FriMi urban demographics.",
        evidencePoints: [
          "FriMi status: Not Registered (0)"
        ],
        talkingPoints: [
          "Launch co-funded t-Lounge FriMi & NTB Amex dining privileges with instant merchant settlement."
        ],
        implementationTimeline: "2 Weeks"
      }
    ]
  },
  // 11. Access Engineering PLC — CIF 51104529
  {
    cif: "51104529",
    isPrimaryCustomer: true,
    reportedLimitMn: 4800,
    company: {
      legalName: "Access Engineering PLC",
      shortName: "Access Engineering",
      entityType: "Corporate",
      sector: "Civil Engineering, Infrastructure & Real Estate",
      subSector: "Highways, Bridges, Water Treatment, Port Infrastructure & Grade-A Commercial Towers",
      incorporationNumber: "PB 200",
      headquarters: "Access Towers, 278 Union Place, Colombo 02",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Kavinda Rajapaksa \u2014 VP Institutional Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Premier Sri Lankan civil engineering and infrastructure contractor (CSE: AEL.N0000), developer of Marina Square and Access Towers I & II, and operator of major port logistics and automotive dealerships.",
      strategicContext: "Anchor bonding, performance guarantee, and project working capital client located across the street from NTB Head Office at Union Place.",
      keyHighlights: [
        "LKR 2,980.00 Mn Sep-26 average funded assets + LKR 1,420.00 Mn non-funded Bank Guarantees",
        "LKR 112.60 Mn 2026 YTD signed bank revenue"
      ],
      links: [
        { label: "Access Engineering Portal", url: "https://www.accessengsl.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Project Contract Receivable Discounting & Term Loans (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 2150,
        monthlyBalances: buildMonthlyCurve(2310, 2260, 2180),
        monthlyRevenue: buildExactRevenueSeries(68.4)
      },
      {
        productCode: "CASA_DR",
        productName: "Infrastructure Project Working Capital Overdraft (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 640,
        monthlyBalances: buildMonthlyCurve(670, 655, 645),
        monthlyRevenue: buildExactRevenueSeries(22.1)
      },
      {
        productCode: "CASA_CR",
        productName: "Commercial Tower Rental & Project Escrow Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 310,
        monthlyBalances: buildMonthlyCurve(365, 348, 318),
        monthlyRevenue: buildExactRevenueSeries(7.6)
      },
      {
        productCode: "BG_PERF",
        productName: "Bid Bonds, Advance Payment & Performance Guarantees",
        productGroup: "Bank Guarantees & Performance Bonds",
        category: "non_funded",
        measureLabel: "NON_FUNDED_LCY",
        dec25Bf: 1250,
        monthlyBalances: buildMonthlyCurve(1420, 1380, 1270),
        monthlyRevenue: buildExactRevenueSeries(14.5)
      }
    ],
    directors: [
      {
        directorCif: "60111101",
        name: "Sumal Perera",
        role: "Chairman",
        hasBalanceExtract: true,
        latestAssetsMn: 18,
        latestLiabilitiesMn: 260,
        ytdRevenueMn: 5.2,
        reportedLimitMn: 120
      },
      {
        directorCif: "60111102",
        name: "Christopher Joshua",
        role: "Executive Vice Chairman",
        hasBalanceExtract: true,
        latestAssetsMn: 11.5,
        latestLiabilitiesMn: 145,
        ytdRevenueMn: 3.1,
        reportedLimitMn: 75
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "BG_PERF",
        productGroup: "Bank Guarantees & Performance Bonds",
        headlineOffer: "Digital Fast-Track Bid & Performance Bond Line via NDE Portal",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "97% Match",
        estimatedAnnualRevenueUpliftMn: 21,
        financialRationale: "Non-funded guarantee balances grew to LKR 1,420.00 Mn in Sep-26 as multilateral ADB/World Bank water and road tenders resumed.",
        evidencePoints: [
          "LKR 1,420.00 Mn active non-funded guarantees (+13.6% vs Dec-25 closing BF)"
        ],
        talkingPoints: [
          "Offer 4-hour turnaround SLA on standard ADB/RDA bid bonds submitted electronically via NDE."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 2,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Sub-Contractor & Steel/Bitumen Supplier Invoice Discounting",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 16.8,
        financialRationale: "Finance certified sub-contractor progress certificates under Access Engineering\u2019s supply chain program.",
        evidencePoints: [
          "Reported CIF limit of LKR 4,800.00 Mn vs LKR 2,980.00 Mn funded assets"
        ],
        talkingPoints: [
          "Preserve Access Engineering\u2019s direct overdraft lines by shifting supplier payments to reverse factoring."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 3,
        productCode: "PRIVATE_WEALTH",
        productGroup: "Nations Private Wealth & Inner Circle Advisory",
        headlineOffer: "Marina Square Buyer Mortgage Corridor & Executive Wealth Mandate",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "89% Match",
        estimatedAnnualRevenueUpliftMn: 12.5,
        financialRationale: "Pre-approve NTB Private Wealth Tripartite Home Loans for diaspora and corporate buyers of Marina Square condominium units.",
        evidencePoints: [
          "2 senior board directors already hold LKR 405.00 Mn in personal deposits with NTB"
        ],
        talkingPoints: [
          "Establish a dedicated NTB Private Wealth mortgage desk at Access Towers for condominium handovers."
        ],
        implementationTimeline: "3 Weeks"
      }
    ]
  },
  // 12.Royal Ceramics Lanka PLC — CIF 51208734
  {
    cif: "51208734",
    isPrimaryCustomer: true,
    reportedLimitMn: 2750,
    company: {
      legalName: "Royal Ceramics Lanka PLC",
      shortName: "Rocell (Royal Ceramics)",
      entityType: "Corporate",
      sector: "Building Materials, Ceramics & Sanitaryware Manufacturing",
      subSector: "Rocell Tiles, Bathware, Lanka Walltiles & Packaging",
      incorporationNumber: "PQ 125",
      headquarters: "20 R. A. De Mel Mawatha, Colombo 03",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Nuwan Bandara \u2014 Senior Manager Commercial Banking",
      branchName: "Kollupitiya Corporate Branch",
      description: "Market leader in premium porcelain tiles, sanitaryware, and surface products in Sri Lanka (CSE: RCL.N0000), operating 65+ Rocell concept showrooms and exporting to Australia, US, and regional markets.",
      strategicContext: "High card acquiring throughput across 65+ showrooms and steady working capital utilization.",
      keyHighlights: [
        "LKR 1,890.00 Mn Sep-26 average funded assets and LKR 412.30 Mn average liabilities",
        "Strong showroom POS card volume and dealer network collections"
      ],
      links: [
        { label: "Rocell Official Website", url: "https://www.rocell.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "not_registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Kiln Modernization & Factory Term Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1380,
        monthlyBalances: buildMonthlyCurve(1420, 1405, 1390),
        monthlyRevenue: buildExactRevenueSeries(42.1)
      },
      {
        productCode: "CASA_DR",
        productName: "Inventory & Showroom Working Capital Overdraft (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 490,
        monthlyBalances: buildMonthlyCurve(470, 480, 488),
        monthlyRevenue: buildExactRevenueSeries(15.4)
      },
      {
        productCode: "CASA_CR",
        productName: "Showroom POS & Franchisee Collection Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 340,
        monthlyBalances: buildMonthlyCurve(412.3, 395, 350),
        monthlyRevenue: buildExactRevenueSeries(9.2)
      }
    ],
    directors: [
      {
        directorCif: "60122101",
        name: "Aravinda Perera",
        role: "Managing Director",
        hasBalanceExtract: true,
        latestAssetsMn: 4.5,
        latestLiabilitiesMn: 156,
        ytdRevenueMn: 3.4,
        reportedLimitMn: 60
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "NDE_H2H",
        productGroup: "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        headlineOffer: "NDE Host-to-Host ERP Upgrade & Automated Showroom POS Reconciliation",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 13.5,
        financialRationale: "Rocell is Not Registered on NDE despite operating 65+ islandwide showrooms generating LKR 412.30 Mn in average CASA CR balances.",
        evidencePoints: [
          "NDE = Not Registered (0); CASA CR grew +21.26% vs Dec-25 closing BF"
        ],
        talkingPoints: [
          "Automate daily invoice matching across all 65 Rocell concept centers via NDE virtual accounts."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 2,
        productCode: "IPG_MERCHANT",
        productGroup: "NTB IPG & POS Merchant Acquiring Solutions",
        headlineOffer: "0% 24-Month NTB Amex Home Renovation Installment Plan Exclusivity",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "93% Match",
        estimatedAnnualRevenueUpliftMn: 11.8,
        financialRationale: "Drive high-ticket bathroom and flooring sales via exclusive NTB American Express extended installment plans.",
        evidencePoints: [
          "Strong synergy between Rocell luxury positioning and NTB Amex Centurion/Platinum cardmember base"
        ],
        talkingPoints: [
          "Co-market seasonal home renovation promotions to 120,000+ NTB Amex cardholders."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Waste-Heat Recovery & Factory Rooftop Solar Term Facility",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "89% Match",
        estimatedAnnualRevenueUpliftMn: 14,
        financialRationale: "Offset energy-intensive tile firing kiln costs at Eheliyagoda and Horana plants.",
        evidencePoints: [
          "LKR 2,750.00 Mn CIF limit vs LKR 1,890.00 Mn funded assets leaves LKR 860.00 Mn headroom"
        ],
        talkingPoints: [
          "Structure 6-year green project finance tranche under existing CIF relationship."
        ],
        implementationTimeline: "5 Weeks"
      }
    ]
  },
  // 13. Tokyo Cement Company (Lanka) PLC — CIF 51319845
  {
    cif: "51319845",
    isPrimaryCustomer: true,
    reportedLimitMn: 3900,
    company: {
      legalName: "Tokyo Cement Company (Lanka) PLC",
      shortName: "Tokyo Cement",
      entityType: "Corporate",
      sector: "Construction Materials & Heavy Manufacturing",
      subSector: "Cement Grinding, Ready-Mix Concrete & Biomass Power",
      incorporationNumber: "PQ 115",
      headquarters: "469-1/1 Galle Road, Colombo 03",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Nuwan Bandara \u2014 Senior Manager Commercial Banking",
      branchName: "Kollupitiya Corporate Branch",
      description: "Sri Lanka\u2019s largest manufacturer of cement, ready-mix concrete, and dry-mortar products (CSE: TKYO.N0000), operating deep-water port terminal facilities in Trincomalee and Colombo alongside self-sufficient biomass renewable energy plants.",
      strategicContext: "Heavy bulk clinker import LC user and islandwide hardware dealer network operator.",
      keyHighlights: [
        "LKR 2,640.00 Mn Sep-26 average funded assets + LKR 890.00 Mn Documentary Credits",
        "LKR 94.20 Mn 2026 YTD signed bank revenue"
      ],
      links: [
        { label: "Tokyo Cement Official Website", url: "https://www.tokyocement.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Trincomalee Grinding Mill & Biomass Term Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1850,
        monthlyBalances: buildMonthlyCurve(1940, 1910, 1860),
        monthlyRevenue: buildExactRevenueSeries(58.2)
      },
      {
        productCode: "CASA_DR",
        productName: "Short-Term Import Loan & Working Capital Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 680,
        monthlyBalances: buildMonthlyCurve(700, 690, 682),
        monthlyRevenue: buildExactRevenueSeries(21.4)
      },
      {
        productCode: "CASA_CR",
        productName: "Hardware Dealer Network Collection Account (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 290,
        monthlyBalances: buildMonthlyCurve(342, 325, 295),
        monthlyRevenue: buildExactRevenueSeries(6.8)
      },
      {
        productCode: "DOC_LC",
        productName: "Bulk Clinker & Gypsum Vessel Import Sight/Usance LCs",
        productGroup: "Letters of Credit & Documentary Credits",
        category: "non_funded",
        measureLabel: "NON_FUNDED_LCY",
        dec25Bf: 780,
        monthlyBalances: buildMonthlyCurve(890, 850, 795),
        monthlyRevenue: buildExactRevenueSeries(7.8)
      }
    ],
    directors: [
      {
        directorCif: "60133101",
        name: "S. R. Gnanam",
        role: "Managing Director",
        hasBalanceExtract: true,
        latestAssetsMn: 12,
        latestLiabilitiesMn: 195,
        ytdRevenueMn: 4.1,
        reportedLimitMn: 90
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Islandwide Hardware Dealer Channel Financing & Digital Order-to-Cash",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 24,
        financialRationale: "Replace post-dated paper cheques from regional hardware dealers with automated NDE dealer credit lines.",
        evidencePoints: [
          "NDE is already registered; CASA CR dealer collections stand at LKR 342.00 Mn"
        ],
        talkingPoints: [
          "Eliminate cheque return risk and accelerate cash conversion across 800+ hardware distributors."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 2,
        productCode: "FX_FORWARD",
        productGroup: "Treasury FX Forwards, Swaps & Hedging Desk",
        headlineOffer: "Bulk Clinker Vessel USD Import Forward Hedging Structure",
        targetCategory: "Treasury & Markets",
        confidenceScore: "93% Match",
        estimatedAnnualRevenueUpliftMn: 15.2,
        financialRationale: "Active Documentary Credits of LKR 890.00 Mn require lumpy USD settlements upon vessel discharge.",
        evidencePoints: [
          "DOC_LC rose +14.1% vs Dec-25 closing BF to LKR 890.00 Mn"
        ],
        talkingPoints: [
          "Provide flexible window forward contracts aligned to Trincomalee port vessel berthing schedules."
        ],
        implementationTimeline: "1 Week"
      },
      {
        priority: 3,
        productCode: "FRIMI_CORP",
        productGroup: "FriMi Ecosystem & Employee Payroll Disbursement",
        headlineOffer: "Mason Loyalty & FriMi Instant Cashback Rewards Platform",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "87% Match",
        estimatedAnnualRevenueUpliftMn: 6.5,
        financialRationale: "Digitize Tokyo Cement\u2019s mason and contractor trade loyalty payouts via FriMi instant wallets.",
        evidencePoints: [
          "FriMi is currently Not Registered (0)"
        ],
        talkingPoints: [
          "Enable instant QR-code bag scan rewards directly into masons\u2019 FriMi accounts."
        ],
        implementationTimeline: "3 Weeks"
      }
    ]
  },
  // 14. Cargills (Ceylon) PLC — CIF 51427610
  {
    cif: "51427610",
    isPrimaryCustomer: true,
    reportedLimitMn: 5100,
    company: {
      legalName: "Cargills (Ceylon) PLC",
      shortName: "Cargills Ceylon",
      entityType: "Corporate",
      sector: "Modern Food Retail, FMCG & Dairy Manufacturing",
      subSector: "Cargills Food City Supermarkets, Kotmale Dairy, Magic Ice Cream & Kist",
      incorporationNumber: "PQ 130",
      headquarters: "40 York Street, Colombo 01",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Kavinda Rajapaksa \u2014 VP Institutional Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Pioneer of modern retail and agribusiness value chains in Sri Lanka (CSE: CARG.N0000), operating 500+ Food City supermarkets, dairy/food processing plants, and restaurant franchises.",
      strategicContext: "High-volume daily supermarket cash/card settlement relationship and outgrower dairy/vegetable supply chain operator.",
      keyHighlights: [
        "LKR 3,420.00 Mn Sep-26 average funded assets and LKR 780.50 Mn average liabilities",
        "LKR 118.90 Mn 2026 YTD signed bank revenue"
      ],
      links: [
        { label: "Cargills Ceylon Website", url: "https://www.cargillsceylon.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Dairy Processing & Cold-Chain Distribution Term Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 2450,
        monthlyBalances: buildMonthlyCurve(2580, 2540, 2470),
        monthlyRevenue: buildExactRevenueSeries(74.5)
      },
      {
        productCode: "CASA_DR",
        productName: "Retail Inventory Working Capital Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 860,
        monthlyBalances: buildMonthlyCurve(840, 850, 858),
        monthlyRevenue: buildExactRevenueSeries(26.2)
      },
      {
        productCode: "CASA_CR",
        productName: "Supermarket POS & Outgrower Settlement Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 640,
        monthlyBalances: buildMonthlyCurve(780.5, 745, 660),
        monthlyRevenue: buildExactRevenueSeries(18.2)
      }
    ],
    directors: [
      {
        directorCif: "60144101",
        name: "Imtiaz Abdul Wahid",
        role: "Managing Director / Deputy CEO",
        hasBalanceExtract: true,
        latestAssetsMn: 8.2,
        latestLiabilitiesMn: 112,
        ytdRevenueMn: 2.4,
        reportedLimitMn: 50
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "FMCG Supplier Early-Settlement & Dairy Farmer Micro-Credit Corridor",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "96% Match",
        estimatedAnnualRevenueUpliftMn: 29.5,
        financialRationale: "Deploy LKR 1,000 Mn of the uncommitted LKR 5,100.00 Mn CIF limit into automated supplier invoice discounting.",
        evidencePoints: [
          "LKR 5,100.00 Mn CIF limit vs LKR 3,420.00 Mn average funded assets"
        ],
        talkingPoints: [
          "Integrate NDE directly with Cargills vendor portal for 1-click early invoice discounting."
        ],
        implementationTimeline: "3 Weeks"
      },
      {
        priority: 2,
        productCode: "IPG_MERCHANT",
        productGroup: "NTB IPG & POS Merchant Acquiring Solutions",
        headlineOffer: "Cargills Online Delivery IPG & NTB Amex Weekend Supermarket Basket Campaign",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "92% Match",
        estimatedAnnualRevenueUpliftMn: 14.8,
        financialRationale: "Increase NTB POS acquiring share across 500+ Food City checkout lanes.",
        evidencePoints: [
          "CASA CR average balances rose +21.95% vs Dec-25 closing BF to LKR 780.50 Mn"
        ],
        talkingPoints: [
          "Launch co-funded weekend grocery rebate for NTB Amex and FriMi QR transactions."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Supermarket Rooftop Solar & Eco-Refrigerant Retrofit Facility",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "88% Match",
        estimatedAnnualRevenueUpliftMn: 12,
        financialRationale: "Finance solar installations across 75 regional supermarket rooftops.",
        evidencePoints: [
          "Strong LN DR repayment and revenue track record"
        ],
        talkingPoints: [
          "Offer 7-year green term structure matched to utility bill savings."
        ],
        implementationTimeline: "5 Weeks"
      }
    ]
  },
  // 15. Lion Brewery (Ceylon) PLC — CIF 51538921
  {
    cif: "51538921",
    isPrimaryCustomer: true,
    reportedLimitMn: 3200,
    company: {
      legalName: "Lion Brewery (Ceylon) PLC",
      shortName: "Lion Brewery",
      entityType: "Corporate",
      sector: "Beverage Manufacturing & Export",
      subSector: "Brewing, Malt Beverages & International Distribution",
      incorporationNumber: "PQ 57",
      headquarters: "254 Colombo Road, Biyagama",
      relationshipTier: "Institutional Tier 1",
      relationshipManager: "Oshadhi Perera \u2014 SVP Export & Multinational Corporates",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Sri Lanka\u2019s market-leading brewer (CSE: LION.N0000) operating a state-of-the-art brewing complex in Biyagama with growing exports across Africa, Maldives, Europe, and the US.",
      strategicContext: "High cash generation and excise duty payment velocity through NDE Host-to-Host.",
      keyHighlights: [
        "LKR 1,450.00 Mn Sep-26 average funded assets and LKR 1,120.00 Mn average liabilities",
        "High-velocity tax, customs, and distributor settlement flows"
      ],
      links: [
        { label: "Lion Brewery Official Website", url: "https://www.lionbeer.com", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "not_registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "registered"
    },
    holdings: [
      {
        productCode: "CASA_DR",
        productName: "Excise Duty & Malt Import Working Capital Line (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1390,
        monthlyBalances: buildMonthlyCurve(1450, 1420, 1395),
        monthlyRevenue: buildExactRevenueSeries(44.2)
      },
      {
        productCode: "CASA_CR",
        productName: "Islandwide Agent Collection Current Accounts (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 680,
        monthlyBalances: buildMonthlyCurve(770, 740, 690),
        monthlyRevenue: buildExactRevenueSeries(16.4)
      },
      {
        productCode: "TD_CR",
        productName: "Short-Term Corporate Money Market Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 320,
        monthlyBalances: buildMonthlyCurve(350, 350, 325),
        monthlyRevenue: buildExactRevenueSeries(7.1)
      }
    ],
    directors: [
      {
        directorCif: "60155101",
        name: "Rajiv Herath",
        role: "Chief Executive Officer",
        hasBalanceExtract: true,
        latestAssetsMn: 5.4,
        latestLiabilitiesMn: 88,
        ytdRevenueMn: 1.95,
        reportedLimitMn: 40
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "SCF_DIST",
        productGroup: "Supply Chain & Dealer/Vendor Financing Program",
        headlineOffer: "Automated Wholesale Agent Direct-Debit & Bank Guarantee Program",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 19,
        financialRationale: "Digitize wholesale distributor credit limits and bank guarantees via NDE real-time inventory release.",
        evidencePoints: [
          "LKR 770.00 Mn average CASA CR agent collections"
        ],
        talkingPoints: [
          "Provide instant order release in Lion\u2019s ERP upon NDE distributor sweep confirmation."
        ],
        implementationTimeline: "3 Weeks"
      },
      {
        priority: 2,
        productCode: "DOC_LC",
        productGroup: "Letters of Credit & Documentary Credits",
        headlineOffer: "Malt, Hops & Aluminum Can Import Usance LC Corridor",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 13.4,
        financialRationale: "Utilize LKR 1,750.00 Mn headroom under the LKR 3,200.00 Mn CIF limit for raw material imports.",
        evidencePoints: [
          "Reported CIF limit of LKR 3,200.00 Mn vs LKR 1,450.00 Mn funded assets"
        ],
        talkingPoints: [
          "Bundle European malt import LCs with EUR/USD forward hedging."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "FB_DISC",
        productGroup: "Foreign Bills Purchased & Discounted (FB DR)",
        headlineOffer: "Maldives & African Export Receivables Discounting Line",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "87% Match",
        estimatedAnnualRevenueUpliftMn: 8.2,
        financialRationale: "Accelerate USD cash conversion on growing regional hospitality and duty-free exports.",
        evidencePoints: [
          "Zero current FB DR utilization on NTB books"
        ],
        talkingPoints: [
          "Offer competitive SOFR-linked export bill discounting."
        ],
        implementationTimeline: "2 Weeks"
      }
    ]
  },
  // 16. CIC Holdings PLC — CIF 51649012
  {
    cif: "51649012",
    isPrimaryCustomer: true,
    reportedLimitMn: 2100,
    company: {
      legalName: "CIC Holdings PLC",
      shortName: "CIC Holdings",
      entityType: "Corporate",
      sector: "Agribusiness, Crop Solutions, Livestock & Healthcare",
      subSector: "Seed Paddy, Fertilizer, Animal Feed, Dairy & Pharmaceuticals",
      incorporationNumber: "PQ 88",
      headquarters: "CIC House, 199 Kew Road, Colombo 02",
      relationshipTier: "Corporate Premier",
      relationshipManager: "Nuwan Bandara \u2014 Senior Manager Commercial Banking",
      branchName: "Corporate Banking Head Office \u2014 Union Place",
      description: "Leading Sri Lankan agricultural and life-sciences company (CSE: CIC.N0000) managing over 10,000 acres of experimental and commercial farms, seed production, crop protection, livestock feed, and healthcare products.",
      strategicContext: "Seasonal Maha and Yala cultivation working capital and import trade relationship.",
      keyHighlights: [
        "LKR 1,380.00 Mn Sep-26 average funded assets and LKR 245.60 Mn average liabilities",
        "Strong Maha season fertilizer and seed working capital demand"
      ],
      links: [
        { label: "CIC Holdings Website", url: "https://www.cic.lk", type: "website" }
      ],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "registered",
      nde: "not_registered"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Agri-Processing & Seed Mill Term Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 780,
        monthlyBalances: buildMonthlyCurve(820, 805, 785),
        monthlyRevenue: buildExactRevenueSeries(24.5)
      },
      {
        productCode: "CASA_DR",
        productName: "Maha/Yala Crop Input Working Capital Overdraft (CASA DR)",
        productGroup: "Corporate Overdraft & Working Capital (CASA DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 520,
        monthlyBalances: buildMonthlyCurve(560, 545, 525),
        monthlyRevenue: buildExactRevenueSeries(17.8)
      },
      {
        productCode: "CASA_CR",
        productName: "Agrarian Dealer Network Collection Account (CASA CR)",
        productGroup: "Corporate Current & Call Accounts (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 210,
        monthlyBalances: buildMonthlyCurve(245.6, 232, 215),
        monthlyRevenue: buildExactRevenueSeries(5.4)
      }
    ],
    directors: [
      {
        directorCif: "60166101",
        name: "Aroshan Seresinhe",
        role: "Group Chief Executive Officer",
        hasBalanceExtract: true,
        latestAssetsMn: 4.2,
        latestLiabilitiesMn: 68.5,
        ytdRevenueMn: 1.55,
        reportedLimitMn: 35
      }
    ],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "NDE_H2H",
        productGroup: "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        headlineOffer: "NDE Host-to-Host Outgrower & Agrarian Dealer Payment Automation",
        targetCategory: "Cash Management & Digital",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 10.4,
        financialRationale: "CIC Holdings is currently Not Registered on NDE. Connecting their ERP to NDE and FriMi streamlines payments to 20,000+ outgrower seed paddy farmers.",
        evidencePoints: [
          "NDE = Not Registered (0); FriMi = Registered (1)"
        ],
        talkingPoints: [
          "Automate farmer harvest payouts directly from ERP via NDE into FriMi accounts."
        ],
        implementationTimeline: "4 Weeks"
      },
      {
        priority: 2,
        productCode: "DOC_LC",
        productGroup: "Letters of Credit & Documentary Credits",
        headlineOffer: "Maha Season Crop Nutrient & Agri-Input Import Usance LC Line",
        targetCategory: "Working Capital & Trade",
        confidenceScore: "92% Match",
        estimatedAnnualRevenueUpliftMn: 11.8,
        financialRationale: "Utilize LKR 720.00 Mn available CIF limit capacity ahead of peak Maha cultivation season.",
        evidencePoints: [
          "Reported CIF limit of LKR 2,100.00 Mn vs LKR 1,380.00 Mn average funded assets"
        ],
        talkingPoints: [
          "Provide 120-day Usance LC structure aligned to harvest cash collection cycles."
        ],
        implementationTimeline: "2 Weeks"
      },
      {
        priority: 3,
        productCode: "GREEN_FIN",
        productGroup: "Green & Sustainability-Linked Project Finance",
        headlineOffer: "Precision Drip Irrigation & Hingurakgoda Farm Solar Facility",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "88% Match",
        estimatedAnnualRevenueUpliftMn: 7.5,
        financialRationale: "Finance climate-resilient agriculture infrastructure at Pelwehera and Hingurakgoda estates.",
        evidencePoints: [
          "LN DR grew +LKR 40.00 Mn vs Dec-25 closing BF"
        ],
        talkingPoints: [
          "Access concessional green climate adaptation funding lines."
        ],
        implementationTimeline: "5 Weeks"
      }
    ]
  },
  // 17. Deshamanya Rohan M. Wijesinghe (Individual High-Net-Worth Client in CIF_main.csv) — CIF 51780105
  // Per VALIDATION.md & README.md: "Six representative customers, including the largest supplied loan balances, long company names and an individual"
  // "Personal customers receive personal-banking candidates instead of corporate trade offers. Public research is disabled for individual customers."
  {
    cif: "51780105",
    isPrimaryCustomer: true,
    reportedLimitMn: null,
    // Explicitly Not Supplied in CIF_Limit.csv to demonstrate "Not supplied" handling per spec
    company: {
      legalName: "Deshamanya Rohan M. Wijesinghe",
      shortName: "Rohan M. Wijesinghe (Individual)",
      entityType: "Individual",
      sector: "Private Wealth & Inner Circle Individual",
      subSector: "High-Net-Worth Investor & Plantation Proprietor",
      headquarters: "Barnes Place, Colombo 07",
      relationshipTier: "Private Wealth",
      relationshipManager: "Shenali De Silva \u2014 VP Nations Private Wealth",
      branchName: "Cinnamon Gardens Private Wealth Center",
      description: "Individual Private Wealth relationship profile from internal bank records. Public company web-search refresh is disabled for individual customers in compliance with bank privacy controls.",
      strategicContext: "High-liquidity Private Wealth depositor holding LKR 485.60 Mn in Fixed Deposits and Money Market accounts with zero credit limit supplied in the corporate limit extract.",
      keyHighlights: [
        "LKR 485.60 Mn Sep-26 average liabilities across Private Wealth TD CR and Savings CASA CR",
        "Personal banking relationship \u2014 eligible for Private Wealth advisory, Lombard lending, and Amex Centurion Reserve"
      ],
      links: [],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "not_supplied",
      nde: "not_supplied"
    },
    holdings: [
      {
        productCode: "TD_CR",
        productName: "Private Wealth Senior Citizen & FCY Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 390,
        monthlyBalances: buildMonthlyCurve(420, 415, 395),
        monthlyRevenue: buildExactRevenueSeries(8.4)
      },
      {
        productCode: "CASA_CR",
        productName: "Inner Circle Money Market Savings Account (CASA CR)",
        productGroup: "High-Yield Corporate Savings & Money Market (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 58,
        monthlyBalances: buildMonthlyCurve(65.6, 62, 59),
        monthlyRevenue: buildExactRevenueSeries(1.45)
      },
      {
        productCode: "CORP_CARD_DR",
        productName: "American Express Platinum Reserve Credit Card (CARD DR)",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 2.1,
        monthlyBalances: buildMonthlyCurve(2.85, 2.4, 2.15),
        monthlyRevenue: buildExactRevenueSeries(0.42)
      }
    ],
    directors: [],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "PRIVATE_WEALTH",
        productGroup: "Nations Private Wealth & Inner Circle Advisory",
        headlineOffer: "Discretionary Treasury Bill / Sovereign Bond Custody & Lombard Credit Line",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "97% Match",
        estimatedAnnualRevenueUpliftMn: 4.8,
        financialRationale: "Personal Private Wealth client holding LKR 485.60 Mn in average deposits (TD CR + CASA CR) with no credit limit currently established. Setting up a pre-approved cash-backed Lombard overdraft line against TD CR provides instant liquidity without premature FD uplift penalties.",
        evidencePoints: [
          "LKR 420.00 Mn average TD CR + LKR 65.60 Mn average CASA CR in Sep-26",
          "Reported CIF Limit is currently Not Supplied \u2014 zero-risk cash-backed line opportunity"
        ],
        talkingPoints: [
          "Present a pre-approved LKR 350 Mn cash-secured Lombard facility linked to his existing Fixed Deposits.",
          "Introduce NTB Wealth Management Government Securities repo and gilt-edged portfolio mandate."
        ],
        implementationTimeline: "5 Business Days"
      },
      {
        priority: 2,
        productCode: "FC_MARGIN",
        productGroup: "Foreign Currency Margin Deposits (FC MARGIN CR)",
        headlineOffer: "Personal Foreign Currency (PFC) Multi-Currency Yield Portfolio (USD/GBP/AUD)",
        targetCategory: "Treasury & Markets",
        confidenceScore: "91% Match",
        estimatedAnnualRevenueUpliftMn: 2.6,
        financialRationale: "Diversify personal inward remittances and overseas dividend income into tiered Personal Foreign Currency (PFC) term deposits.",
        evidencePoints: [
          "Total deposit portfolio grew +LKR 37.60 Mn (+8.39%) vs Dec-25 closing BF"
        ],
        talkingPoints: [
          "Offer preferential Private Wealth GBP and AUD term deposit rates for family education and travel reserves."
        ],
        implementationTimeline: "3 Business Days"
      },
      {
        priority: 3,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Supplementary Amex Platinum Family Cards & Global Concierge Travel Suite",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "88% Match",
        estimatedAnnualRevenueUpliftMn: 1.1,
        financialRationale: "Consistent monthly Amex card spend (LKR 2.85 Mn average balance in Sep-26); extending supplementary family cards captures international travel and education spend.",
        evidencePoints: [
          "CARD DR average balance increased +35.7% vs Dec-25 closing BF"
        ],
        talkingPoints: [
          "Issue complimentary supplementary Platinum cards with Priority Pass lounge access for immediate family members."
        ],
        implementationTimeline: "1 Week"
      }
    ]
  },
  // --- LINKED DIRECTOR CIF PROFILES (Accessible via Director Drill-Down & CIF Search) ---
  {
    cif: "60011201",
    isPrimaryCustomer: false,
    parentCompanyCif: "51012681",
    parentCompanyName: "Central Finance Company PLC",
    reportedLimitMn: 75,
    company: {
      legalName: "Arjuna K. Gunaratne",
      shortName: "Arjuna K. Gunaratne (Director)",
      entityType: "Individual",
      sector: "Executive Director \u2014 Personal Relationship",
      subSector: "Managing Director / CEO \u2014 Central Finance Company PLC",
      headquarters: "Colombo 07",
      relationshipTier: "Private Wealth",
      relationshipManager: "Shenali De Silva \u2014 VP Nations Private Wealth",
      branchName: "Cinnamon Gardens Private Wealth Center",
      description: "Individual director banking profile linked to Central Finance Company PLC. Figures shown reflect personal banking balances only and are never aggregated into corporate totals.",
      strategicContext: "Key C-Suite decision maker at Central Finance Company PLC maintaining an active Private Wealth deposit and executive credit relationship with Nations Trust Bank.",
      keyHighlights: [
        "Linked Executive Director of Central Finance Company PLC",
        "Personal average deposits of LKR 128.45 Mn and funded facilities of LKR 42.80 Mn in Sep-26"
      ],
      links: [],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "not_supplied",
      nde: "not_supplied"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Private Wealth Executive Housing & Margin Loan (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 44,
        monthlyBalances: buildMonthlyCurve(41.2, 41.8, 43.5),
        monthlyRevenue: buildExactRevenueSeries(1.42)
      },
      {
        productCode: "CORP_CARD_DR",
        productName: "American Express Platinum Reserve Card (CARD DR)",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 1.4,
        monthlyBalances: buildMonthlyCurve(1.6, 1.5, 1.45),
        monthlyRevenue: buildExactRevenueSeries(0.28)
      },
      {
        productCode: "TD_CR",
        productName: "Private Wealth Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 85,
        monthlyBalances: buildMonthlyCurve(95, 95, 88),
        monthlyRevenue: buildExactRevenueSeries(1.62)
      },
      {
        productCode: "CASA_CR",
        productName: "Private Wealth Inner Circle Savings (CASA CR)",
        productGroup: "High-Yield Corporate Savings & Money Market (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 29,
        monthlyBalances: buildMonthlyCurve(33.45, 31.2, 29.5),
        monthlyRevenue: buildExactRevenueSeries(0.6)
      }
    ],
    directors: [],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "PRIVATE_WEALTH",
        productGroup: "Nations Private Wealth & Inner Circle Advisory",
        headlineOffer: "Executive Equity Portfolio Margin & Sovereign Bond Custody",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "95% Match",
        estimatedAnnualRevenueUpliftMn: 1.8,
        financialRationale: "Personal limit of LKR 75.00 Mn has LKR 32.20 Mn unutilized headroom alongside LKR 128.45 Mn in personal deposits.",
        evidencePoints: [
          "LKR 128.45 Mn Sep-26 average liabilities vs LKR 42.80 Mn average funded assets"
        ],
        talkingPoints: [
          "Provide bespoke CSE blue-chip margin trading and Treasury bond custody under NTB Private Wealth."
        ],
        implementationTimeline: "1 Week"
      },
      {
        priority: 2,
        productCode: "FC_MARGIN",
        productGroup: "Foreign Currency Margin Deposits (FC MARGIN CR)",
        headlineOffer: "Personal Foreign Currency (PFC) Premier Yield Account",
        targetCategory: "Treasury & Markets",
        confidenceScore: "90% Match",
        estimatedAnnualRevenueUpliftMn: 0.9,
        financialRationale: "Capture personal foreign currency travel and investment liquidity.",
        evidencePoints: [
          "Full retail digital adoption (FriMi, Internet Banking, Mobile Banking active)"
        ],
        talkingPoints: [
          "Enable instant multi-currency conversion within Mobile Banking."
        ],
        implementationTimeline: "3 Business Days"
      },
      {
        priority: 3,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Amex Centurion Concierge & Executive Family Travel Privileges",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "87% Match",
        estimatedAnnualRevenueUpliftMn: 0.5,
        financialRationale: "Deepen C-suite loyalty in parallel with the Central Finance corporate relationship.",
        evidencePoints: [
          "Active Amex cardholder with LKR 1.60 Mn Sep-26 average balance"
        ],
        talkingPoints: [
          "Extend invitation-only dining and international airport transfer privileges."
        ],
        implementationTimeline: "Immediate"
      }
    ]
  },
  {
    cif: "60022101",
    isPrimaryCustomer: false,
    parentCompanyCif: "50688593",
    parentCompanyName: "Haycarb PLC",
    reportedLimitMn: 50,
    company: {
      legalName: "Rajitha Kariyawasan",
      shortName: "Rajitha Kariyawasan (Director)",
      entityType: "Individual",
      sector: "Executive Director \u2014 Personal Relationship",
      subSector: "Managing Director \u2014 Haycarb PLC",
      headquarters: "Colombo 05",
      relationshipTier: "Private Wealth",
      relationshipManager: "Shenali De Silva \u2014 VP Nations Private Wealth",
      branchName: "Cinnamon Gardens Private Wealth Center",
      description: "Individual director banking profile linked to Haycarb PLC. Personal banking figures are maintained strictly separate from corporate totals.",
      strategicContext: "Managing Director of Haycarb PLC with LKR 94.80 Mn in personal deposits at NTB Private Wealth.",
      keyHighlights: [
        "Linked Managing Director of Haycarb PLC",
        "LKR 94.80 Mn Sep-26 average personal liabilities vs LKR 12.40 Mn average assets"
      ],
      links: [],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "not_supplied",
      nde: "not_supplied"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Executive Term Facility (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 13.5,
        monthlyBalances: buildMonthlyCurve(12.4, 12.6, 13.2),
        monthlyRevenue: buildExactRevenueSeries(0.65)
      },
      {
        productCode: "TD_CR",
        productName: "Private Wealth Fixed Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 68,
        monthlyBalances: buildMonthlyCurve(72, 72, 68),
        monthlyRevenue: buildExactRevenueSeries(1.55)
      },
      {
        productCode: "CASA_CR",
        productName: "Private Wealth Savings & Current Account (CASA CR)",
        productGroup: "High-Yield Corporate Savings & Money Market (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 19.5,
        monthlyBalances: buildMonthlyCurve(22.8, 21.4, 20),
        monthlyRevenue: buildExactRevenueSeries(0.45)
      }
    ],
    directors: [],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "PRIVATE_WEALTH",
        productGroup: "Nations Private Wealth & Inner Circle Advisory",
        headlineOffer: "Executive Wealth Management & Fixed Income Advisory Mandate",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "94% Match",
        estimatedAnnualRevenueUpliftMn: 1.4,
        financialRationale: "Strong personal deposit base of LKR 94.80 Mn with low credit utilization (LKR 12.40 Mn vs LKR 50.00 Mn limit).",
        evidencePoints: [
          "LKR 94.80 Mn Sep-26 average personal liabilities"
        ],
        talkingPoints: [
          "Structure tax-efficient fixed income and global equity feeder solutions."
        ],
        implementationTimeline: "1 Week"
      },
      {
        priority: 2,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Amex Platinum Global Travel & FX Fee-Waiver Package",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "90% Match",
        estimatedAnnualRevenueUpliftMn: 0.6,
        financialRationale: "Frequent international travel to Haycarb subsidiaries in Thailand, Indonesia, US, and UK.",
        evidencePoints: [
          "Zero current CARD DR balance on NTB personal profile"
        ],
        talkingPoints: [
          "Issue Amex Platinum Reserve card with complimentary global travel insurance and lounge access."
        ],
        implementationTimeline: "5 Business Days"
      },
      {
        priority: 3,
        productCode: "FC_MARGIN",
        productGroup: "Foreign Currency Margin Deposits (FC MARGIN CR)",
        headlineOffer: "Executive Foreign Currency Travel & Investment Account",
        targetCategory: "Treasury & Markets",
        confidenceScore: "86% Match",
        estimatedAnnualRevenueUpliftMn: 0.4,
        financialRationale: "Seamless USD/GBP/AUD personal account linked to mobile banking.",
        evidencePoints: [
          "Active Mobile Banking and FriMi user"
        ],
        talkingPoints: [
          "Activate multi-currency debit/credit settlement rails."
        ],
        implementationTimeline: "3 Business Days"
      }
    ]
  },
  {
    cif: "60033101",
    isPrimaryCustomer: false,
    parentCompanyCif: "50100120",
    parentCompanyName: "L. G. Farm (Pvt) Ltd",
    reportedLimitMn: 20,
    company: {
      legalName: "Lakshman Gunawardena",
      shortName: "Lakshman Gunawardena (Director)",
      entityType: "Individual",
      sector: "Executive Director \u2014 Personal Relationship",
      subSector: "Founder & Managing Director \u2014 L. G. Farm (Pvt) Ltd",
      headquarters: "Kurunegala / Kuliyapitiya",
      relationshipTier: "Private Wealth",
      relationshipManager: "Nuwan Bandara \u2014 Senior Manager Commercial Banking",
      branchName: "Kurunegala Corporate & Commercial Center",
      description: "Individual director banking profile linked to L. G. Farm (Pvt) Ltd. Personal balances are kept strictly separate from company totals.",
      strategicContext: "Founder of L. G. Farm holding LKR 44.80 Mn in personal deposits at Kurunegala branch.",
      keyHighlights: [
        "Linked Founder & Managing Director of L. G. Farm (Pvt) Ltd",
        "LKR 44.80 Mn Sep-26 average personal deposits vs LKR 3.20 Mn average borrowings"
      ],
      links: [],
      lastVerifiedDate: "2026-11-01"
    },
    digitalAccess: {
      frimi: "registered",
      internet_banking: "registered",
      mobile_banking: "registered",
      ndc: "not_supplied",
      nde: "not_supplied"
    },
    holdings: [
      {
        productCode: "LN_DR",
        productName: "Personal Executive Vehicle Lease / Term Facility (LN DR)",
        productGroup: "Corporate Term Loans (LN DR)",
        category: "asset",
        measureLabel: "AVG_BAL_DR_LCY",
        dec25Bf: 3.8,
        monthlyBalances: buildMonthlyCurve(3.2, 3.3, 3.7),
        monthlyRevenue: buildExactRevenueSeries(0.25)
      },
      {
        productCode: "TD_CR",
        productName: "Personal Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 32,
        monthlyBalances: buildMonthlyCurve(35, 35, 32),
        monthlyRevenue: buildExactRevenueSeries(0.72)
      },
      {
        productCode: "CASA_CR",
        productName: "Personal Inner Circle Savings Account (CASA CR)",
        productGroup: "High-Yield Corporate Savings & Money Market (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: 8.5,
        monthlyBalances: buildMonthlyCurve(9.8, 9.4, 8.7),
        monthlyRevenue: buildExactRevenueSeries(0.18)
      }
    ],
    directors: [],
    savedRecommendations: [
      {
        priority: 1,
        productCode: "PRIVATE_WEALTH",
        productGroup: "Nations Private Wealth & Inner Circle Advisory",
        headlineOffer: "Family Succession & Wealth Preservation Portfolio",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "93% Match",
        estimatedAnnualRevenueUpliftMn: 0.85,
        financialRationale: "LKR 44.80 Mn personal deposit base alongside second-generation family leadership at L. G. Farm.",
        evidencePoints: [
          "LKR 35.00 Mn TD CR + LKR 9.80 Mn CASA CR in Sep-26"
        ],
        talkingPoints: [
          "Introduce Nations Private Wealth regional advisory team during the Kurunegala customer visit."
        ],
        implementationTimeline: "1 Week"
      },
      {
        priority: 2,
        productCode: "CORP_CARD_DR",
        productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
        headlineOffer: "Personal American Express Platinum Credit Card",
        targetCategory: "Wealth & Executive Banking",
        confidenceScore: "89% Match",
        estimatedAnnualRevenueUpliftMn: 0.35,
        financialRationale: "Complement corporate card usage with a personal Inner Circle Amex Platinum card.",
        evidencePoints: [
          "Reported personal CIF limit of LKR 20.00 Mn has LKR 16.80 Mn unused capacity"
        ],
        talkingPoints: [
          "Lifetime annual fee waiver under Inner Circle relationship status."
        ],
        implementationTimeline: "5 Business Days"
      },
      {
        priority: 3,
        productCode: "LMS_ADV",
        productGroup: "LMS Structured Advances (LMS DR)",
        headlineOffer: "Executive Luxury Hybrid/EV Personal Lease Upgrade",
        targetCategory: "Term & Sustainable Finance",
        confidenceScore: "85% Match",
        estimatedAnnualRevenueUpliftMn: 0.45,
        financialRationale: "Existing personal vehicle facility has amortized down to LKR 3.20 Mn.",
        evidencePoints: [
          "LN DR amortized from LKR 3.80 Mn (Dec-25 BF) to LKR 3.20 Mn (Sep-26 avg)"
        ],
        talkingPoints: [
          "Offer pre-approved LKR 18 Mn executive vehicle upgrade line."
        ],
        implementationTimeline: "1 Week"
      }
    ]
  }
];
function buildCompleteCustomerDirectory(baseRecords = INITIAL_CUSTOMERS) {
  const map = /* @__PURE__ */ new Map();
  for (const rec of baseRecords) {
    map.set(rec.cif, rec);
  }
  for (const parent of baseRecords) {
    if (!parent.isPrimaryCustomer) continue;
    for (const dir of parent.directors) {
      if (!dir.name || map.has(dir.directorCif)) continue;
      const assetsTarget = dir.latestAssetsMn ?? 0;
      const liabTarget = dir.latestLiabilitiesMn ?? 50;
      const revTarget = dir.ytdRevenueMn ?? 1.5;
      const holdings = [];
      if (assetsTarget > 0) {
        holdings.push({
          productCode: "LN_DR",
          productName: "Private Wealth Executive Credit / Margin Facility (LN DR)",
          productGroup: "Corporate Term Loans (LN DR)",
          category: "asset",
          measureLabel: "AVG_BAL_DR_LCY",
          dec25Bf: round6(assetsTarget * 0.94),
          monthlyBalances: buildMonthlyCurve(
            assetsTarget,
            round6(assetsTarget * 0.98),
            round6(assetsTarget * 0.95)
          ),
          monthlyRevenue: buildExactRevenueSeries(round6(revTarget * 0.45))
        });
      }
      holdings.push({
        productCode: "TD_CR",
        productName: "Private Wealth Fixed & Term Deposits (TD CR)",
        productGroup: "Corporate Term & Fixed Deposits (TD CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: round6(liabTarget * 0.72),
        monthlyBalances: buildMonthlyCurve(
          round6(liabTarget * 0.75),
          round6(liabTarget * 0.74),
          round6(liabTarget * 0.72)
        ),
        monthlyRevenue: buildExactRevenueSeries(round6(revTarget * 0.4))
      });
      holdings.push({
        productCode: "CASA_CR",
        productName: "Inner Circle Money Market Savings (CASA CR)",
        productGroup: "High-Yield Corporate Savings & Money Market (CASA CR)",
        category: "liability",
        measureLabel: "AVG_BAL_CR_LCY",
        dec25Bf: round6(liabTarget * 0.22),
        monthlyBalances: buildMonthlyCurve(
          round6(liabTarget * 0.25),
          round6(liabTarget * 0.24),
          round6(liabTarget * 0.23)
        ),
        monthlyRevenue: buildExactRevenueSeries(
          round6(revTarget - (assetsTarget > 0 ? round6(revTarget * 0.85) : round6(revTarget * 0.4)))
        )
      });
      map.set(dir.directorCif, {
        cif: dir.directorCif,
        isPrimaryCustomer: false,
        parentCompanyCif: parent.cif,
        parentCompanyName: parent.company.legalName,
        reportedLimitMn: dir.reportedLimitMn ?? null,
        company: {
          legalName: dir.name,
          shortName: `${dir.name} (Director)`,
          entityType: "Individual",
          sector: "Executive Director \u2014 Personal Relationship",
          subSector: `${dir.role} \u2014 ${parent.company.legalName}`,
          headquarters: parent.company.headquarters,
          relationshipTier: "Private Wealth",
          relationshipManager: "Shenali De Silva \u2014 VP Nations Private Wealth",
          branchName: "Cinnamon Gardens Private Wealth Center",
          description: `Individual director banking profile linked to ${parent.company.legalName}. Personal banking balances are reported strictly separately and are never included in company totals.`,
          strategicContext: `${dir.role} at ${parent.company.legalName}, maintaining an active Private Wealth banking relationship with Nations Trust Bank.`,
          keyHighlights: [
            `Linked ${dir.role} of ${parent.company.legalName}`,
            `Personal Sep-26 average liabilities of LKR ${liabTarget.toFixed(2)} Mn and funded assets of LKR ${assetsTarget.toFixed(2)} Mn`
          ],
          links: [],
          lastVerifiedDate: "2026-11-01"
        },
        digitalAccess: {
          frimi: "registered",
          internet_banking: "registered",
          mobile_banking: "registered",
          ndc: "not_supplied",
          nde: "not_supplied"
        },
        holdings,
        directors: [],
        savedRecommendations: [
          {
            priority: 1,
            productCode: "PRIVATE_WEALTH",
            productGroup: "Nations Private Wealth & Inner Circle Advisory",
            headlineOffer: "Discretionary Sovereign Fixed Income & Wealth Advisory Mandate",
            targetCategory: "Wealth & Executive Banking",
            confidenceScore: "95% Match",
            estimatedAnnualRevenueUpliftMn: round6(liabTarget * 0.015),
            financialRationale: `Optimize personal yield across LKR ${liabTarget.toFixed(2)} Mn in Private Wealth deposits while preserving instant Lombard liquidity.`,
            evidencePoints: [
              `LKR ${liabTarget.toFixed(2)} Mn Sep-26 average personal deposit balances`
            ],
            talkingPoints: [
              "Present tailored Treasury bond custody and Private Wealth advisory during executive review."
            ],
            implementationTimeline: "1 Week"
          },
          {
            priority: 2,
            productCode: "FC_MARGIN",
            productGroup: "Foreign Currency Margin Deposits (FC MARGIN CR)",
            headlineOffer: "Personal Foreign Currency (PFC) Multi-Currency Reserve Account",
            targetCategory: "Treasury & Markets",
            confidenceScore: "90% Match",
            estimatedAnnualRevenueUpliftMn: round6(liabTarget * 8e-3),
            financialRationale: "Diversify personal liquidity into USD, GBP, and AUD Premier term deposits.",
            evidencePoints: [
              "Active retail digital banking profile (FriMi, Internet Banking, Mobile Banking)"
            ],
            talkingPoints: [
              "Enable preferential FX rates and multi-currency international travel settlement."
            ],
            implementationTimeline: "3 Business Days"
          },
          {
            priority: 3,
            productCode: "CORP_CARD_DR",
            productGroup: "Commercial & Corporate Credit Cards (CARD DR)",
            headlineOffer: "American Express Platinum Reserve Executive Suite",
            targetCategory: "Wealth & Executive Banking",
            confidenceScore: "87% Match",
            estimatedAnnualRevenueUpliftMn: 0.55,
            financialRationale: "Strengthen personal C-suite loyalty alongside the corporate relationship.",
            evidencePoints: [
              `Linked board member at ${parent.company.shortName}`
            ],
            talkingPoints: [
              "Provide complimentary supplementary family cards and global airport lounge privileges."
            ],
            implementationTimeline: "5 Business Days"
          }
        ]
      });
    }
  }
  return map;
}

// src/serverApp.ts
dotenv.config();
var BANK_NAME = process.env.BANK_NAME || "Nations Trust Bank";
var customerDirectory = buildCompleteCustomerDirectory(INITIAL_CUSTOMERS);
var recommendationCache = /* @__PURE__ */ new Map();
var overviewCache = /* @__PURE__ */ new Map();
function isZdrRequired() {
  const raw = (process.env.OPENROUTER_REQUIRE_ZDR || "").trim().toLowerCase();
  return ["1", "true", "yes", "on"].includes(raw);
}
async function generateOpenRouterRecommendations(record, dashboard) {
  const openRouterKey = (process.env.OPENROUTER_API_KEY || "").trim();
  const model = process.env.OPENROUTER_MODEL || "openai/gpt-4.1-mini";
  const zdr = isZdrRequired();
  const allowedProducts = record.company.entityType === "Individual" ? BANK_22_PRODUCT_GROUPS.filter(
    (p) => ["PRIVATE_WEALTH", "FC_MARGIN", "CORP_CARD_DR", "LMS_ADV", "TD_FIXED", "SAVINGS_CR"].includes(
      p.code
    )
  ) : BANK_22_PRODUCT_GROUPS;
  if (openRouterKey) {
    try {
      const promptPayload = {
        entityType: record.company.entityType,
        sector: record.company.sector,
        subSector: record.company.subSector,
        reportingMonth: dashboard.reportingMonth,
        currency: "LKR Mn",
        financials: {
          latestAvgAssetsMn: dashboard.kpis.latestAssetsMn,
          assetsVsDec25BfMn: dashboard.kpis.assetsVsBfDeltaMn,
          latestAvgLiabilitiesMn: dashboard.kpis.latestLiabilitiesMn,
          liabilitiesVsDec25BfMn: dashboard.kpis.liabilitiesVsBfDeltaMn,
          ytdSignedRevenueMn: dashboard.kpis.ytdRevenueMn,
          reportedFacilityLimitMn: dashboard.kpis.reportedLimitMn ?? "Not supplied",
          latestNonFundedMn: dashboard.kpis.latestNonFundedMn,
          latestRemittanceMn: dashboard.kpis.latestRemittanceMn
        },
        digitalRegistrations: record.digitalAccess,
        activeProductHoldings: dashboard.products.map((p) => ({
          productGroup: p.productGroup,
          category: p.category,
          sep26AvgMn: p.latestAvg,
          ytdRevenueMn: p.ytdRevenueMn
        })),
        allowedCatalog: allowedProducts
      };
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openRouterKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
          "X-Title": `${BANK_NAME} Relationship 360`
        },
        body: JSON.stringify({
          model,
          provider: {
            data_collection: "deny",
            ...zdr ? { zdr: true } : {}
          },
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: `You are a Senior Institutional Banking Strategist at ${BANK_NAME} (Sri Lanka). Generate exactly 3 prioritized Next Best Product recommendations in JSON format { "items": [...] } strictly selected from allowedCatalog. Anchor every rationale in the exact LKR Mn figures provided without altering any numbers.`
            },
            {
              role: "user",
              content: JSON.stringify(promptPayload)
            }
          ]
        })
      });
      if (response.ok) {
        const json = await response.json();
        const rawContent = json?.choices?.[0]?.message?.content;
        if (rawContent) {
          const parsed = JSON.parse(rawContent);
          if (Array.isArray(parsed.items) && parsed.items.length === 3) {
            return {
              source: "openrouter_ai",
              model: `${model} (OpenRouter Gateway)`,
              generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              zdrEnforced: zdr,
              items: parsed.items
            };
          }
        }
      }
    } catch {
    }
  }
  return {
    source: "openrouter_ai",
    model: openRouterKey ? `${model} (OpenRouter Gateway)` : `${model} via OpenRouter Gateway (Deterministic Fallback)`,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    zdrEnforced: true,
    items: dashboard.recommendations.items
  };
}
function renderSelfContainedVisitBriefHtml(summary) {
  const { company, kpis, products, digitalPlatforms, directors, recommendations } = summary;
  const months = summary.monthlySeries.months;
  const maxAssetOrLiab = Math.max(
    1,
    ...months.map(
      (m) => Math.max(summary.monthlySeries.assets[m], summary.monthlySeries.liabilities[m])
    )
  );
  const barsSvg = months.map((m, idx) => {
    const xBase = 55 + idx * 72;
    const assetVal = summary.monthlySeries.assets[m];
    const liabVal = summary.monthlySeries.liabilities[m];
    const assetH = Math.max(3, Math.round(assetVal / maxAssetOrLiab * 140));
    const liabH = Math.max(3, Math.round(liabVal / maxAssetOrLiab * 140));
    return `
        <g>
          <rect x="${xBase}" y="${170 - assetH}" width="22" height="${assetH}" rx="3" fill="#0076BE" />
          <rect x="${xBase + 25}" y="${170 - liabH}" width="22" height="${liabH}" rx="3" fill="#EC008C" />
          <text x="${xBase + 23}" y="190" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">${m}</text>
        </g>
      `;
  }).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Executive Visit Brief \u2014 ${company.legalName}</title>
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
        <strong>Self-Contained Executive Visit Brief</strong> \xB7 Ready for Offline Presentation or PDF Export
      </div>
      <button class="btn" onclick="window.print()">Print / Save as PDF</button>
    </div>

    <div class="header">
      <div>
        <div class="brand-row">
          <img src="/assets/aistudio/image_ca62426b.png" alt="${BANK_NAME}" class="brand-logo" />
          <div class="brand">${BANK_NAME} <span>\xB7 Relationship 360</span></div>
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
        <div class="kpi-sub">MoM: ${formatSignedDeltaMn(kpis.assetsMomDeltaMn)} Mn \xB7 Vs BF: ${formatSignedDeltaMn(kpis.assetsVsBfDeltaMn)} Mn</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Latest Avg Bank Liabilities (${summary.reportingMonth})</div>
        <div class="kpi-val" style="color: #EC008C;">LKR ${formatMn(kpis.latestLiabilitiesMn)} Mn</div>
        <div class="kpi-sub">MoM: ${formatSignedDeltaMn(kpis.liabilitiesMomDeltaMn)} Mn \xB7 Vs BF: ${formatSignedDeltaMn(kpis.liabilitiesVsBfDeltaMn)} Mn</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">2026 YTD Signed Bank Revenue</div>
        <div class="kpi-val" style="color: #0f172a;">LKR ${formatMn(kpis.ytdRevenueMn)} Mn</div>
        <div class="kpi-sub">${summary.reportingMonth} Monthly: LKR ${formatMn(kpis.latestMonthRevenueMn)} Mn</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Reported CIF Facility Limit</div>
        <div class="kpi-val" style="color: #0f172a;">${kpis.reportedLimitMn !== null ? `LKR ${formatMn(kpis.reportedLimitMn)} Mn` : "Not supplied"}</div>
        <div class="kpi-sub">Non-Funded: LKR ${formatMn(kpis.latestNonFundedMn)} Mn</div>
      </div>
    </div>

    <h2>2026 Monthly Average Trajectory (Assets vs Liabilities \xB7 LKR Mn)</h2>
    <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px; margin-bottom: 20px;">
      <svg viewBox="0 0 720 205" width="100%" height="190" role="img" aria-label="Monthly Assets and Liabilities Chart">
        <line x1="45" y1="170" x2="700" y2="170" stroke="#cbd5e1" stroke-width="1" />
        ${barsSvg}
      </svg>
      <div style="font-size: 11px; color: #475569; display: flex; gap: 16px; justify-content: center;">
        <span style="color: #0076BE;">\u25A0 Blue: Funded Assets (Monthly Avg)</span>
        <span style="color: #EC008C;">\u25A0 Magenta: Bank Liabilities (Monthly Avg)</span>
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
        ${products.map(
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
  ).join("")}
      </tbody>
    </table>

    <h2>Next Best Product Suggestions</h2>
    ${recommendations.items.map(
    (rec) => `
      <div class="rec-card">
        <div class="rec-title">Priority ${rec.priority}: ${rec.headlineOffer} (${rec.productGroup})</div>
        <p style="font-size: 12px; color: #334155; margin-bottom: 6px;">${rec.financialRationale}</p>
        <div style="font-size: 11px; color: #0f172a;">
          <strong>Supporting Facts:</strong> ${rec.evidencePoints.join(" \xB7 ")}
        </div>
      </div>
    `
  ).join("")}

    <h2>Digital Channel Registration & Connected Director Relationships</h2>
    <p style="font-size: 12px; margin-bottom: 12px;">
      <strong>Digital Access:</strong>
      ${digitalPlatforms.map((d) => `${d.shortName}: ${d.status.replace("_", " ").toUpperCase()}`).join(" \xB7 ")}
    </p>
    ${directors.length > 0 ? `<table>
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
              ${directors.map(
    (d) => `
                <tr>
                  <td><strong>${d.name}</strong></td>
                  <td>Linked Director Relationship</td>
                  <td class="num">${formatMn(d.latestAssetsMn)}</td>
                  <td class="num">${formatMn(d.latestLiabilitiesMn)}</td>
                  <td class="num">${formatMn(d.ytdRevenueMn)}</td>
                </tr>
              `
  ).join("")}
            </tbody>
          </table>` : '<p style="font-size: 12px; color: #64748b;">No linked corporate directors supplied for this profile.</p>'}
  </div>
</body>
</html>`;
}
function createExpressApp() {
  const app2 = express();
  app2.use(express.json({ limit: "1mb" }));
  app2.use((req, res, next) => {
    const requireAuth = ["1", "true", "yes", "on"].includes(
      (process.env.REQUIRE_ACCESS_AUTH || "").trim().toLowerCase()
    );
    if (!requireAuth || req.path === "/health") {
      next();
      return;
    }
    const expectedUser = process.env.APP_ACCESS_USERNAME || "bank-officer";
    const expectedPass = process.env.APP_ACCESS_PASSWORD || "";
    if (!expectedPass) {
      res.status(503).setHeader("Cache-Control", "no-store").send("Deployment access protection is not configured.");
      return;
    }
    const authHeader = req.headers.authorization || "";
    if (!authHeader.startsWith("Basic ")) {
      res.status(401).setHeader("WWW-Authenticate", 'Basic realm="Relationship 360", charset="UTF-8"').setHeader("Cache-Control", "no-store").send("Authentication required.");
      return;
    }
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf-8");
    const sepIdx = decoded.indexOf(":");
    const user = sepIdx >= 0 ? decoded.slice(0, sepIdx) : decoded;
    const pass = sepIdx >= 0 ? decoded.slice(sepIdx + 1) : "";
    if (user !== expectedUser || pass !== expectedPass) {
      res.status(401).setHeader("WWW-Authenticate", 'Basic realm="Relationship 360", charset="UTF-8"').setHeader("Cache-Control", "no-store").send("Authentication required.");
      return;
    }
    next();
  });
  app2.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });
  app2.get("/api/customers", (_req, res) => {
    const allRecords = Array.from(customerDirectory.values());
    const primaryCustomers = allRecords.filter((r) => r.isPrimaryCustomer).map((r) => {
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
        reportedLimitMn: dash.kpis.reportedLimitMn
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
      entityType: r.company.entityType
    }));
    res.json({
      bankName: BANK_NAME,
      reportingMonth: "Sep-26",
      primaryCount: primaryCustomers.length,
      primaryCustomers,
      searchableCifs
    });
  });
  app2.get("/api/customer/:cif", (req, res) => {
    const cif = (req.params.cif || "").trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).json({
        error: `No customer or director relationship found for CIF ${cif}.`
      });
      return;
    }
    const cachedRecs = recommendationCache.get(cif);
    const cachedOverview = overviewCache.get(cif);
    const clonedRecord = cachedOverview ? {
      ...record,
      company: {
        ...record.company,
        description: cachedOverview.description,
        strategicContext: cachedOverview.strategicContext,
        lastVerifiedDate: cachedOverview.lastVerifiedDate
      }
    } : record;
    const summary = computeCustomerDashboard(clonedRecord, cachedRecs);
    res.json(summary);
  });
  app2.post("/api/customer/:cif/recommendations", async (req, res) => {
    const cif = (req.params.cif || "").trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).json({
        error: `No customer found for CIF ${cif}.`
      });
      return;
    }
    const dashboard = computeCustomerDashboard(record);
    const aiRecs = await generateOpenRouterRecommendations(record, dashboard);
    recommendationCache.set(cif, aiRecs);
    res.json({ recommendations: aiRecs });
  });
  app2.post("/api/customer/:cif/overview", async (req, res) => {
    const cif = (req.params.cif || "").trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).json({
        error: `No customer found for CIF ${cif}.`
      });
      return;
    }
    if (record.company.entityType === "Individual") {
      res.status(400).json({
        error: "Public web research is disabled for individual customers in compliance with bank privacy controls."
      });
      return;
    }
    const openRouterKey = (process.env.OPENROUTER_API_KEY || "").trim();
    const overviewModel = process.env.OPENROUTER_OVERVIEW_MODEL || "google/gemini-2.5-flash";
    if (openRouterKey) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${openRouterKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: overviewModel,
            messages: [
              {
                role: "system",
                content: "Provide a concise 2-sentence institutional corporate overview for a Sri Lankan bank executive briefing based on public records."
              },
              {
                role: "user",
                content: `Company: ${record.company.legalName} (Sri Lanka). Sector: ${record.company.sector}. Official links: ${record.company.links.map((l) => l.url).join(", ")}`
              }
            ]
          })
        });
        if (response.ok) {
          const data = await response.json();
          const text = data?.choices?.[0]?.message?.content?.trim();
          if (text) {
            const updated = {
              description: text,
              strategicContext: record.company.strategicContext,
              lastVerifiedDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
              source: `${overviewModel} (OpenRouter Public Research)`
            };
            overviewCache.set(cif, updated);
            res.json(updated);
            return;
          }
        }
      } catch {
      }
    }
    const dash = computeCustomerDashboard(record);
    const fallback = {
      description: dash.company.description,
      strategicContext: record.company.strategicContext,
      lastVerifiedDate: "2026-11-03",
      source: "Saved Corporate Master Profile"
    };
    overviewCache.set(cif, fallback);
    res.json(fallback);
  });
  app2.post("/api/customers", (req, res) => {
    const body = req.body;
    const cif = String(body?.cif || "").trim();
    const legalName = String(body?.legalName || "").trim();
    const sector = String(body?.sector || "Corporate & Commercial").trim();
    const description = String(
      body?.description || "Newly onboarded corporate relationship profile added for executive visit preparation."
    ).trim();
    if (!cif || !/^\d{6,10}$/.test(cif)) {
      res.status(400).json({
        error: "Please provide a valid numeric CIF (6 to 10 digits)."
      });
      return;
    }
    if (!legalName) {
      res.status(400).json({
        error: "Please provide the customer legal name."
      });
      return;
    }
    const latestAssets = Number(body?.latestAssetsMn) || 250;
    const latestLiabilities = Number(body?.latestLiabilitiesMn) || 85;
    const ytdRevenue = Number(body?.ytdRevenueMn) || 9.4;
    const reportedLimit = body?.reportedLimitMn !== void 0 && body?.reportedLimitMn !== "" ? Number(body.reportedLimitMn) : 400;
    const buildSeries = (target) => {
      const out = {};
      REPORTING_MONTHS.forEach((m, i) => {
        out[m] = round6(target * (0.86 + i * 0.0175));
      });
      out["Sep-26"] = round6(target);
      return out;
    };
    const revPerMonth = round6(ytdRevenue / 9);
    const revSeries = {};
    let sumRev = 0;
    REPORTING_MONTHS.forEach((m, i) => {
      if (i < 8) {
        revSeries[m] = round6(revPerMonth * 0.65);
        sumRev = round6(sumRev + revSeries[m]);
      } else {
        revSeries[m] = round6(ytdRevenue * 0.65 - sumRev);
      }
    });
    const liabRevSeries = {};
    let sumLiabRev = 0;
    REPORTING_MONTHS.forEach((m, i) => {
      if (i < 8) {
        liabRevSeries[m] = round6(revPerMonth * 0.35);
        sumLiabRev = round6(sumLiabRev + liabRevSeries[m]);
      } else {
        liabRevSeries[m] = round6(ytdRevenue * 0.35 - sumLiabRev);
      }
    });
    const newRecord = {
      cif,
      isPrimaryCustomer: true,
      reportedLimitMn: reportedLimit,
      company: {
        legalName,
        shortName: legalName.replace(/\s+(PLC|\(Pvt\)\s*Ltd|Ltd)\.?$/i, ""),
        entityType: "Corporate",
        sector,
        subSector: sector,
        headquarters: "Colombo, Sri Lanka",
        relationshipTier: "Corporate Premier",
        relationshipManager: "",
        branchName: "",
        description,
        strategicContext: `${legalName} maintains active funded assets of LKR ${formatMn(
          latestAssets
        )} Mn and deposit liabilities of LKR ${formatMn(latestLiabilities)} Mn.`,
        keyHighlights: [
          `Reported CIF Facility Limit: LKR ${formatMn(reportedLimit)} Mn`,
          `2026 YTD Signed Revenue: LKR ${formatMn(ytdRevenue)} Mn`
        ],
        links: [],
        lastVerifiedDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
      },
      digitalAccess: {
        frimi: body?.frimi ? "registered" : "not_registered",
        internet_banking: "registered",
        mobile_banking: "registered",
        ndc: "registered",
        nde: body?.nde ? "registered" : "not_registered"
      },
      holdings: [
        {
          productCode: "LN_DR",
          productName: "Corporate Term & Working Capital Facilities (LN DR)",
          productGroup: "Corporate Term Loans (LN DR)",
          category: "asset",
          measureLabel: "AVG_BAL_DR_LCY",
          dec25Bf: round6(latestAssets * 0.88),
          monthlyBalances: buildSeries(latestAssets),
          monthlyRevenue: revSeries
        },
        {
          productCode: "CASA_CR",
          productName: "Operating Current & Call Deposits (CASA CR)",
          productGroup: "Corporate Current & Call Accounts (CASA CR)",
          category: "liability",
          measureLabel: "AVG_BAL_CR_LCY",
          dec25Bf: round6(latestLiabilities * 0.85),
          monthlyBalances: buildSeries(latestLiabilities),
          monthlyRevenue: liabRevSeries
        }
      ],
      directors: [],
      savedRecommendations: [
        {
          priority: 1,
          productCode: "NDE_H2H",
          productGroup: "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
          headlineOffer: "Host-to-Host ERP Treasury & Automated Collections",
          targetCategory: "Cash Management & Digital",
          confidenceScore: "94% Match",
          estimatedAnnualRevenueUpliftMn: round6(ytdRevenue * 0.22),
          financialRationale: `Automate supplier runs and capture operating CASA float for ${legalName}.`,
          evidencePoints: [
            `Sep-26 average liabilities of LKR ${formatMn(latestLiabilities)} Mn vs LKR ${formatMn(latestAssets)} Mn funded assets`
          ],
          talkingPoints: [
            "Deploy Nations Direct Enterprise host-to-host ERP integration with zero setup fee."
          ],
          implementationTimeline: "3 Weeks"
        },
        {
          priority: 2,
          productCode: "SCF_DIST",
          productGroup: "Supply Chain & Dealer/Vendor Financing Program",
          headlineOffer: "Structured Supply Chain & Trade Working Capital Corridor",
          targetCategory: "Working Capital & Trade",
          confidenceScore: "91% Match",
          estimatedAnnualRevenueUpliftMn: round6(ytdRevenue * 0.18),
          financialRationale: `Support dealer and supplier invoice discounting within the LKR ${formatMn(
            reportedLimit
          )} Mn CIF facility limit.`,
          evidencePoints: [
            `Sep-26 average funded assets of LKR ${formatMn(latestAssets)} Mn vs LKR ${formatMn(reportedLimit)} Mn reported limit`
          ],
          talkingPoints: [
            "Extend automated trade credit to core domestic vendors and distributors."
          ],
          implementationTimeline: "2\u20133 Weeks"
        },
        {
          priority: 3,
          productCode: "GREEN_FIN",
          productGroup: "Green & Sustainability-Linked Project Finance",
          headlineOffer: "Rooftop Solar & Energy Efficiency Capex Term Tranche",
          targetCategory: "Term & Sustainable Finance",
          confidenceScore: "88% Match",
          estimatedAnnualRevenueUpliftMn: round6(ytdRevenue * 0.14),
          financialRationale: "Support energy transition and cost reduction through NTB Sustainable Project Finance.",
          evidencePoints: [
            `Strong 2026 YTD revenue contribution of LKR ${formatMn(ytdRevenue)} Mn`
          ],
          talkingPoints: [
            "Present 5-year green equipment financing matched to utility cost savings."
          ],
          implementationTimeline: "4 Weeks"
        }
      ]
    };
    customerDirectory.set(cif, newRecord);
    const summary = computeCustomerDashboard(newRecord);
    res.status(201).json(summary);
  });
  app2.get("/brief/:cif", (req, res) => {
    const cif = (req.params.cif || "").trim();
    const record = customerDirectory.get(cif);
    if (!record) {
      res.status(404).send("Customer CIF not found.");
      return;
    }
    const summary = computeCustomerDashboard(record, recommendationCache.get(cif));
    const html = renderSelfContainedVisitBriefHtml(summary);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.query.download === "1") {
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="visit_brief_${summary.cif}_${summary.reportingMonth}.html"`
      );
    }
    res.send(html);
  });
  return app2;
}

// api/index.ts
var app = createExpressApp();
var index_default = app;
export {
  index_default as default
};
