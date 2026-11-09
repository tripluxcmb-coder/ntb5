import { CustomerRecord } from "../types/banking";

export const INITIAL_CUSTOMERS: CustomerRecord[] = [
  {
    "cif": "50100120",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 144.516819,
    "company": {
      "legalName": "Central Finance Company PLC",
      "shortName": "Central Finance",
      "entityType": "Corporate",
      "sector": "Diversified Financials & NBFI",
      "subSector": "Asset Financing & Leasing",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.centralfinance.lk",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.794118,
        "monthlyBalances": {
          "Jan-26": 0.980315,
          "Feb-26": 0.997648,
          "Mar-26": 1.363297,
          "Apr-26": 0.761979,
          "May-26": 1.237161,
          "Jun-26": 0.878696,
          "Jul-26": 1.428353,
          "Aug-26": 1.088681,
          "Sep-26": 1.092816
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 24.636317,
        "monthlyBalances": {
          "Jan-26": 25.900775,
          "Feb-26": 20.764829,
          "Mar-26": 19.972269,
          "Apr-26": 26.22919,
          "May-26": 22.206804,
          "Jun-26": 34.990267,
          "Jul-26": 38.895538,
          "Aug-26": 48.119475,
          "Sep-26": 19.691463
        },
        "monthlyRevenue": {
          "Jan-26": 0.172309,
          "Feb-26": 0.121604,
          "Mar-26": 0.135126,
          "Apr-26": 0.166407,
          "May-26": 0.150667,
          "Jun-26": 0.255431,
          "Jul-26": 0.291071,
          "Aug-26": 0.363958,
          "Sep-26": 0.145081
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1032.780428,
        "monthlyBalances": {
          "Jan-26": 1032.963859,
          "Feb-26": 1032.963859,
          "Mar-26": 1033.277707,
          "Apr-26": 1033.475928,
          "May-26": 388.314637,
          "Jun-26": 33.817657,
          "Jul-26": 34.045477,
          "Aug-26": 34.045477,
          "Sep-26": 34.462529
        },
        "monthlyRevenue": {
          "Jan-26": 0.003658,
          "Feb-26": 0.003304,
          "Mar-26": 0.003722,
          "Apr-26": -0.037976,
          "May-26": 0.005954,
          "Jun-26": 0.009621,
          "Jul-26": 0.011797,
          "Aug-26": 0.011797,
          "Sep-26": 0.011556
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2.46767,
        "monthlyBalances": {
          "Jan-26": 2.444926,
          "Feb-26": 2.734792,
          "Mar-26": 2.622531,
          "Apr-26": 2.844291,
          "May-26": 2.483173,
          "Jun-26": 2.508281,
          "Jul-26": 2.371048,
          "Aug-26": 2.571842,
          "Sep-26": 2.537983
        },
        "monthlyRevenue": {
          "Jan-26": 0.0301,
          "Feb-26": 0.028842,
          "Mar-26": 0.070093,
          "Apr-26": 0.073157,
          "May-26": 0.042474,
          "Jun-26": 0.065329,
          "Jul-26": 0.05954,
          "Aug-26": 0.071253,
          "Sep-26": 0.085209
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 7.0,
        "monthlyBalances": {
          "Jan-26": 0.225806,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 156.390644,
        "monthlyBalances": {
          "Jan-26": 126.518035,
          "Feb-26": 29.193111,
          "Mar-26": 108.843823,
          "Apr-26": 176.838386,
          "May-26": 179.007753,
          "Jun-26": 102.665117,
          "Jul-26": 113.92388,
          "Aug-26": 94.921107,
          "Sep-26": 65.256803
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10248549",
        "name": "Central1",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1.455852,
        "latestLiabilitiesMn": 0.836268,
        "ytdRevenueMn": 0.154919,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10204041",
        "name": "Central2",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 1055.863419,
        "ytdRevenueMn": 2.3603,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11790224",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10205481",
        "name": "Central13",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.032878,
        "latestLiabilitiesMn": 59.972376,
        "ytdRevenueMn": 0.961474,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10702569",
        "name": "Central4",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.212261,
        "latestLiabilitiesMn": 83.932645,
        "ytdRevenueMn": -0.013072,
        "reportedLimitMn": 5.0
      },
      {
        "directorCif": "10204843",
        "name": "Arjuna Kapila Gunaratne",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.255989,
        "latestLiabilitiesMn": 43.533516,
        "ytdRevenueMn": 0.323171,
        "reportedLimitMn": 5.0
      },
      {
        "directorCif": "10562812",
        "name": "Central5",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.700885,
        "latestLiabilitiesMn": 8.90564,
        "ytdRevenueMn": -0.038401,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10524591",
        "name": "Central6",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 4.645554,
        "latestLiabilitiesMn": 137.376723,
        "ytdRevenueMn": 1.296151,
        "reportedLimitMn": 96.21209
      },
      {
        "directorCif": "10290576",
        "name": "Central7",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1.232944,
        "latestLiabilitiesMn": 0.13065,
        "ytdRevenueMn": 0.177585,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10230908",
        "name": "Central8",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.001077,
        "latestLiabilitiesMn": 0.716194,
        "ytdRevenueMn": 0.155075,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50688593",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 1458.13,
    "company": {
      "legalName": "Haycarb PLC",
      "shortName": "Haycarb",
      "entityType": "Corporate",
      "sector": "Activated Carbon & Environmental Solutions",
      "subSector": "Export Manufacturing & Purification",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.haycarb.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 12.072393,
        "monthlyBalances": {
          "Jan-26": 23.62971,
          "Feb-26": 17.286052,
          "Mar-26": 8.755857,
          "Apr-26": 10.252982,
          "May-26": 18.538539,
          "Jun-26": 6.190283,
          "Jul-26": 9.687595,
          "Aug-26": 12.267263,
          "Sep-26": 13.104609
        },
        "monthlyRevenue": {
          "Jan-26": 0.033428,
          "Feb-26": 0.022572,
          "Mar-26": 0.018125,
          "Apr-26": 0.022619,
          "May-26": 0.029999,
          "Jun-26": 0.03025,
          "Jul-26": 0.031864,
          "Aug-26": 0.021249,
          "Sep-26": 0.020685
        }
      },
      {
        "productCode": "FB_DR",
        "productName": "Foreign Bills Purchased & Discounted (FB DR)",
        "productGroup": "Foreign Bills Purchased & Discounted (FB DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 82.758253
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.072902
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.002058,
        "monthlyBalances": {
          "Jan-26": 0.005814,
          "Feb-26": 6e-06,
          "Mar-26": 0.000374,
          "Apr-26": 0.005236,
          "May-26": 9e-06,
          "Jun-26": 0.000527,
          "Jul-26": 0.017343,
          "Aug-26": 0.000211,
          "Sep-26": 0.003046
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.020898,
        "monthlyBalances": {
          "Jan-26": 0.020753,
          "Feb-26": 0.0,
          "Mar-26": 0.633286,
          "Apr-26": 0.619305,
          "May-26": 0.009714,
          "Jun-26": 3.433093,
          "Jul-26": 2.400046,
          "Aug-26": 0.228946,
          "Sep-26": 0.138202
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 9.323322,
        "monthlyBalances": {
          "Jan-26": 19.467719,
          "Feb-26": 13.840534,
          "Mar-26": 8.367975,
          "Apr-26": 25.867391,
          "May-26": 18.779159,
          "Jun-26": 10.627197,
          "Jul-26": 25.997801,
          "Aug-26": 19.084006,
          "Sep-26": 11.570182
        },
        "monthlyRevenue": {
          "Jan-26": 0.276749,
          "Feb-26": 0.224439,
          "Mar-26": 0.151808,
          "Apr-26": 0.319476,
          "May-26": 0.246492,
          "Jun-26": 0.192847,
          "Jul-26": 0.371038,
          "Aug-26": 0.322583,
          "Sep-26": 0.259293
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 645.0,
        "monthlyBalances": {
          "Jan-26": 645.0,
          "Feb-26": 645.0,
          "Mar-26": 645.0,
          "Apr-26": 645.0,
          "May-26": 645.0,
          "Jun-26": 598.333333,
          "Jul-26": 595.0,
          "Aug-26": 595.0,
          "Sep-26": 595.0
        },
        "monthlyRevenue": {
          "Jan-26": 1.18,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.35872,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.354,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.088551,
          "Feb-26": 0.080117,
          "Mar-26": 0.0,
          "Apr-26": 0.14283,
          "May-26": 0.0,
          "Jun-26": 0.082448,
          "Jul-26": 0.055402,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0005,
          "Feb-26": 0.0005,
          "Mar-26": 0.0,
          "Apr-26": 0.001,
          "May-26": 0.0,
          "Jun-26": 0.0005,
          "Jul-26": 0.0005,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "11653453",
        "name": "Kulappu Arachchige Don Dhammika Perera",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.275047,
        "latestLiabilitiesMn": 11.403433,
        "ytdRevenueMn": 0.535658,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11728407",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10228955",
        "name": "Yogadinusha Yogagopalakrishnan",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 0.000203,
        "ytdRevenueMn": 0.0,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10916353",
        "name": "Mohamed Jamaldeen",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.010078,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.012209,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10477785",
        "name": "Mohan Pandithage",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 3.994416,
        "latestLiabilitiesMn": 0.000641,
        "ytdRevenueMn": -0.020946,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11278026",
        "name": "Ragunathan Srivalli Sharmila",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.044654,
        "latestLiabilitiesMn": 20.150564,
        "ytdRevenueMn": 0.044709,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10508356",
        "name": "Sujeewa Rajapakse",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.016571,
        "latestLiabilitiesMn": 0.389603,
        "ytdRevenueMn": 0.053119,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11728410",
        "name": "Sarath Ananda Kumara Abayawardana",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.647654,
        "latestLiabilitiesMn": 11.425918,
        "ytdRevenueMn": 0.008955,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10385367",
        "name": "Sarath Clement Ganegoda",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.780567,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.120285,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11185534",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11727955",
        "name": "Swbrjm Arjun Michael Sabaragamuwe Senaratna",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 0.170621,
        "ytdRevenueMn": 0.00764,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "51012681",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 5700.0,
    "company": {
      "legalName": "L. G. Farm (Private) Limited",
      "shortName": "L. G. Farm",
      "entityType": "Corporate",
      "sector": "Agribusiness & Livestock Production",
      "subSector": "Integrated Poultry & Feed Operations",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://lgfarm.lk/about.php",
          "type": "website"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "not_registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 3294.774047,
        "monthlyBalances": {
          "Jan-26": 3355.976932,
          "Feb-26": 3609.821757,
          "Mar-26": 3875.764501,
          "Apr-26": 4113.017956,
          "May-26": 4169.254841,
          "Jun-26": 4347.325253,
          "Jul-26": 4447.404238,
          "Aug-26": 4654.999925,
          "Sep-26": 4852.601174
        },
        "monthlyRevenue": {
          "Jan-26": 9.109438,
          "Feb-26": 9.232155,
          "Mar-26": 11.506838,
          "Apr-26": 11.155085,
          "May-26": 10.528483,
          "Jun-26": 8.506722,
          "Jul-26": 8.855621,
          "Aug-26": 9.384486,
          "Sep-26": 10.350867
        }
      },
      {
        "productCode": "LMS_DR",
        "productName": "LMS Advances (LMS DR)",
        "productGroup": "LMS Structured Advances (LMS DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 10.077321,
        "monthlyBalances": {
          "Jan-26": 9.861215,
          "Feb-26": 9.668218,
          "Mar-26": 9.569885,
          "Apr-26": 9.26841,
          "May-26": 9.067334,
          "Jun-26": 8.880491,
          "Jul-26": 8.69555,
          "Aug-26": 8.471848,
          "Sep-26": 8.273564
        },
        "monthlyRevenue": {
          "Jan-26": 0.014006,
          "Feb-26": 0.01241,
          "Mar-26": 0.014344,
          "Apr-26": 0.012746,
          "May-26": 0.012886,
          "Jun-26": 0.012099,
          "Jul-26": 0.012062,
          "Aug-26": 0.015177,
          "Sep-26": 0.011207
        }
      },
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 136.203113,
        "monthlyBalances": {
          "Jan-26": 143.21778,
          "Feb-26": 155.510487,
          "Mar-26": 150.925657,
          "Apr-26": 137.464857,
          "May-26": 160.30133,
          "Jun-26": 151.816386,
          "Jul-26": 165.828526,
          "Aug-26": 213.020304,
          "Sep-26": 190.73891
        },
        "monthlyRevenue": {
          "Jan-26": 1.909161,
          "Feb-26": 1.859672,
          "Mar-26": 2.102493,
          "Apr-26": 1.920838,
          "May-26": 2.529008,
          "Jun-26": 2.217363,
          "Jul-26": 2.420639,
          "Aug-26": 2.484032,
          "Sep-26": 1.895783
        }
      },
      {
        "productCode": "FB_DR",
        "productName": "Foreign Bills Purchased & Discounted (FB DR)",
        "productGroup": "Foreign Bills Purchased & Discounted (FB DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 22.929699,
        "monthlyBalances": {
          "Jan-26": 213.063109,
          "Feb-26": 382.613499,
          "Mar-26": 253.050035,
          "Apr-26": 124.781911,
          "May-26": 237.445734,
          "Jun-26": 211.429727,
          "Jul-26": 234.727599,
          "Aug-26": 232.166108,
          "Sep-26": 165.268696
        },
        "monthlyRevenue": {
          "Jan-26": 2.416467,
          "Feb-26": 2.220066,
          "Mar-26": 2.447471,
          "Apr-26": 2.738614,
          "May-26": 0.3265,
          "Jun-26": 3.496451,
          "Jul-26": 1.995959,
          "Aug-26": 3.445218,
          "Sep-26": 1.628058
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 165.590802,
        "monthlyBalances": {
          "Jan-26": 227.255109,
          "Feb-26": 231.862503,
          "Mar-26": 231.217045,
          "Apr-26": 228.73872,
          "May-26": 232.545846,
          "Jun-26": 242.066839,
          "Jul-26": 243.927994,
          "Aug-26": 233.54006,
          "Sep-26": 161.334519
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "LMS_CR",
        "productName": "LMS Credit Balances (LMS CR)",
        "productGroup": "LMS Credit Balances (LMS CR)",
        "category": "lms_cr",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 62.0,
        "monthlyBalances": {
          "Jan-26": 67.946677,
          "Feb-26": 80.288393,
          "Mar-26": 60.064516,
          "Apr-26": 60.0,
          "May-26": 60.0,
          "Jun-26": 60.0,
          "Jul-26": 60.0,
          "Aug-26": 60.0,
          "Sep-26": 60.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.005,
          "Feb-26": 0.531,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "DOC_CR_DR",
        "productName": "Documentary Credits / Letters of Credit (DC DR)",
        "productGroup": "Letters of Credit & Documentary Credits",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 1038.042992,
        "monthlyBalances": {
          "Jan-26": 1003.046161,
          "Feb-26": 816.510551,
          "Mar-26": 691.287094,
          "Apr-26": 512.011825,
          "May-26": 602.031934,
          "Jun-26": 431.219936,
          "Jul-26": 265.158768,
          "Aug-26": 282.927365,
          "Sep-26": 303.570259
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.166025,
          "Mar-26": 2.07742,
          "Apr-26": 1.900916,
          "May-26": 1.357173,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 7.792131,
          "Sep-26": 0.084094
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 6.451613,
        "monthlyBalances": {
          "Jan-26": 0.498548,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.125137,
          "Jun-26": 0.180557,
          "Jul-26": 2.205474,
          "Aug-26": 0.267964,
          "Sep-26": 1.159902
        },
        "monthlyRevenue": {
          "Jan-26": 0.104311,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0547,
          "Jun-26": 0.087735,
          "Jul-26": 0.032893,
          "Aug-26": 0.091038,
          "Sep-26": 0.171084
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10205574",
    "isPrimaryCustomer": true,
    "reportedLimitMn": null,
    "company": {
      "legalName": "Anil Kumar Lalchand Hirdaramani",
      "shortName": "Anil K. L. Hirdaramani",
      "entityType": "Individual",
      "sector": "Private Wealth & Individual Banking",
      "subSector": "Private Wealth Relationship",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.254486,
        "monthlyBalances": {
          "Jan-26": 0.792145,
          "Feb-26": 0.905754,
          "Mar-26": 0.857529,
          "Apr-26": 0.9982,
          "May-26": 1.328011,
          "Jun-26": 0.428392,
          "Jul-26": 0.227308,
          "Aug-26": 0.082643,
          "Sep-26": 0.783821
        },
        "monthlyRevenue": {
          "Jan-26": 0.006157,
          "Feb-26": -0.001225,
          "Mar-26": 0.015429,
          "Apr-26": 0.037636,
          "May-26": -0.007471,
          "Jun-26": 0.005355,
          "Jul-26": -0.000688,
          "Aug-26": 0.001851,
          "Sep-26": 0.020013
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 15.249943,
        "monthlyBalances": {
          "Jan-26": 18.255132,
          "Feb-26": 21.168548,
          "Mar-26": 21.114164,
          "Apr-26": 19.100319,
          "May-26": 19.337314,
          "Jun-26": 25.844618,
          "Jul-26": 6.677107,
          "Aug-26": 17.77123,
          "Sep-26": 14.664427
        },
        "monthlyRevenue": {
          "Jan-26": 0.04032,
          "Feb-26": 0.04223,
          "Mar-26": 0.046634,
          "Apr-26": 0.04272,
          "May-26": 0.049997,
          "Jun-26": 0.085122,
          "Jul-26": 0.029915,
          "Aug-26": 0.061229,
          "Sep-26": 0.048499
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 120.0,
        "monthlyBalances": {
          "Jan-26": 120.0,
          "Feb-26": 120.0,
          "Mar-26": 120.0,
          "Apr-26": 120.0,
          "May-26": 145.0,
          "Jun-26": 152.5,
          "Jul-26": 225.35992,
          "Aug-26": 266.438334,
          "Sep-26": 276.115753
        },
        "monthlyRevenue": {
          "Jan-26": 0.000346,
          "Feb-26": 0.000313,
          "Mar-26": 0.000346,
          "Apr-26": -0.00039,
          "May-26": -0.047389,
          "Jun-26": -0.043686,
          "Jul-26": 0.043375,
          "Aug-26": 0.039146,
          "Sep-26": 0.037889
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 1.999956,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.966667
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10219465",
    "isPrimaryCustomer": true,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": 714.627,
    "company": {
      "legalName": "Mahesh Chandra Amalean",
      "shortName": "Mahesh C. Amalean",
      "entityType": "Individual",
      "sector": "Private Wealth & Individual Banking",
      "subSector": "Private Wealth Relationship",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 5.124029,
        "monthlyBalances": {
          "Jan-26": 5.394624,
          "Feb-26": 605.205342,
          "Mar-26": 678.004587,
          "Apr-26": 131.662067,
          "May-26": 0.573673,
          "Jun-26": 0.032136,
          "Jul-26": 28.338218,
          "Aug-26": 439.52177,
          "Sep-26": 641.31127
        },
        "monthlyRevenue": {
          "Jan-26": 0.007675,
          "Feb-26": 0.39237,
          "Mar-26": 0.59746,
          "Apr-26": 0.168203,
          "May-26": 0.041428,
          "Jun-26": 0.048898,
          "Jul-26": 0.110178,
          "Aug-26": 0.454496,
          "Sep-26": 0.656011
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1.086511,
        "monthlyBalances": {
          "Jan-26": 0.875981,
          "Feb-26": 0.133704,
          "Mar-26": 0.285553,
          "Apr-26": 0.568467,
          "May-26": 0.667122,
          "Jun-26": 0.433856,
          "Jul-26": 1.863893,
          "Aug-26": 0.43026,
          "Sep-26": 0.818598
        },
        "monthlyRevenue": {
          "Jan-26": -0.018057,
          "Feb-26": 0.003144,
          "Mar-26": 0.022207,
          "Apr-26": -0.000479,
          "May-26": -0.002485,
          "Jun-26": -0.001467,
          "Jul-26": -0.007623,
          "Aug-26": 0.003871,
          "Sep-26": -0.004512
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.252853,
        "monthlyBalances": {
          "Jan-26": 0.252733,
          "Feb-26": 0.252926,
          "Mar-26": 1.811416,
          "Apr-26": 0.825992,
          "May-26": 26.62859,
          "Jun-26": 27.251843,
          "Jul-26": 32.443142,
          "Aug-26": 26.96865,
          "Sep-26": 28.066733
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 16.952907,
        "monthlyBalances": {
          "Jan-26": 16.952907,
          "Feb-26": 16.952907,
          "Mar-26": 16.952907,
          "Apr-26": 16.952907,
          "May-26": 16.952907,
          "Jun-26": 49.517352,
          "Jul-26": 225.027626,
          "Aug-26": 538.900544,
          "Sep-26": 823.968949
        },
        "monthlyRevenue": {
          "Jan-26": 2.7e-05,
          "Feb-26": 2.4e-05,
          "Mar-26": 2.7e-05,
          "Apr-26": 2.3e-05,
          "May-26": 2.7e-05,
          "Jun-26": 0.022884,
          "Jul-26": 0.00163,
          "Aug-26": 0.034249,
          "Sep-26": -0.005175
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.083871,
          "Feb-26": 25.357143,
          "Mar-26": 0.0,
          "Apr-26": 21.966667,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 30.27546,
          "Aug-26": 0.0,
          "Sep-26": 19.609283
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50100126",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 405.0,
    "company": {
      "legalName": "Ceylon Grain Elevators PLC",
      "shortName": "Ceylon Grain Elevators",
      "entityType": "Corporate",
      "sector": "Agribusiness, Poultry & Feed Milling",
      "subSector": "Feed Milling & Poultry Integration",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.prima.com.lk",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.509836,
        "monthlyBalances": {
          "Jan-26": 1.216807,
          "Feb-26": 0.210488,
          "Mar-26": 0.472245,
          "Apr-26": 0.067918,
          "May-26": 0.463502,
          "Jun-26": 0.889364,
          "Jul-26": 0.474544,
          "Aug-26": 0.52327,
          "Sep-26": 2.212205
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "FB_DR",
        "productName": "Foreign Bills Purchased & Discounted (FB DR)",
        "productGroup": "Foreign Bills Purchased & Discounted (FB DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 73.541372,
        "monthlyBalances": {
          "Jan-26": 108.921306,
          "Feb-26": 48.566336,
          "Mar-26": 1.718087,
          "Apr-26": 5.837764,
          "May-26": 33.87788,
          "Jun-26": 106.026344,
          "Jul-26": 44.477947,
          "Aug-26": 20.183023,
          "Sep-26": 2.812989
        },
        "monthlyRevenue": {
          "Jan-26": 0.661761,
          "Feb-26": 0.193681,
          "Mar-26": 0.059022,
          "Apr-26": 0.095657,
          "May-26": 0.59595,
          "Jun-26": 0.420886,
          "Jul-26": 0.080981,
          "Aug-26": 0.125603,
          "Sep-26": 0.051618
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 27.349176,
        "monthlyBalances": {
          "Jan-26": 17.677689,
          "Feb-26": 24.942391,
          "Mar-26": 13.788889,
          "Apr-26": 15.178974,
          "May-26": 19.953977,
          "Jun-26": 31.006504,
          "Jul-26": 14.790966,
          "Aug-26": 15.384105,
          "Sep-26": 11.98842
        },
        "monthlyRevenue": {
          "Jan-26": 0.084837,
          "Feb-26": 0.097527,
          "Mar-26": 0.081924,
          "Apr-26": 0.080593,
          "May-26": 0.103506,
          "Jun-26": 0.16995,
          "Jul-26": 0.090544,
          "Aug-26": 0.099188,
          "Sep-26": 0.105785
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 36.64,
        "monthlyBalances": {
          "Jan-26": 103.152935,
          "Feb-26": 17.145393,
          "Mar-26": 2.220065,
          "Apr-26": 1.6352,
          "May-26": 12.297161,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 1.775767
        },
        "monthlyRevenue": {
          "Jan-26": 0.03,
          "Feb-26": 0.0,
          "Mar-26": 0.005873,
          "Apr-26": 0.005,
          "May-26": 0.01,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.005
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 10.645161,
        "monthlyBalances": {
          "Jan-26": 12.741936,
          "Feb-26": 11.428571,
          "Mar-26": 15.322581,
          "Apr-26": 12.666667,
          "May-26": 13.225806,
          "Jun-26": 12.333333,
          "Jul-26": 15.322581,
          "Aug-26": 12.048387,
          "Sep-26": 17.1
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "11770636",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11770639",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11701468",
        "name": "Wickrema Senaka Weerasooria",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.032209,
        "latestLiabilitiesMn": 8.156635,
        "ytdRevenueMn": -0.042604,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10253923",
        "name": "Rajanayagam N Asirwatham",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 3.624388,
        "latestLiabilitiesMn": 37.99309,
        "ytdRevenueMn": 0.481899,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50201635",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 13288.9,
    "company": {
      "legalName": "Dialog Axiata PLC",
      "shortName": "Dialog Axiata",
      "entityType": "Corporate",
      "sector": "Telecommunications & Digital Infrastructure",
      "subSector": "Mobile, Broadband & Enterprise ICT",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.dialog.lk",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1250.0,
        "monthlyBalances": {
          "Jan-26": 1209.677419,
          "Feb-26": 625.0,
          "Mar-26": 625.0,
          "Apr-26": 541.825348,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 1.094521,
          "Feb-26": 0.388356,
          "Mar-26": 0.429966,
          "Apr-26": 0.844811,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "FB_DR",
        "productName": "Foreign Bills Purchased & Discounted (FB DR)",
        "productGroup": "Foreign Bills Purchased & Discounted (FB DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 226.797853,
        "monthlyBalances": {
          "Jan-26": 83.072732,
          "Feb-26": 46.024713,
          "Mar-26": 81.744417,
          "Apr-26": 129.398472,
          "May-26": 239.375821,
          "Jun-26": 349.133387,
          "Jul-26": 269.172713,
          "Aug-26": 190.454692,
          "Sep-26": 136.828343
        },
        "monthlyRevenue": {
          "Jan-26": 0.405853,
          "Feb-26": 0.120175,
          "Mar-26": 0.371913,
          "Apr-26": 1.226419,
          "May-26": 0.05335,
          "Jun-26": 1.849025,
          "Jul-26": 0.752398,
          "Aug-26": 0.828238,
          "Sep-26": 0.866736
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 337.026202,
        "monthlyBalances": {
          "Jan-26": 105.646126,
          "Feb-26": 88.95637,
          "Mar-26": 157.322804,
          "Apr-26": 112.327679,
          "May-26": 73.817532,
          "Jun-26": 103.939652,
          "Jul-26": 94.456014,
          "Aug-26": 102.893328,
          "Sep-26": 96.576472
        },
        "monthlyRevenue": {
          "Jan-26": 0.624901,
          "Feb-26": 0.462413,
          "Mar-26": 0.946405,
          "Apr-26": 0.647551,
          "May-26": 0.413939,
          "Jun-26": 0.672426,
          "Jul-26": 0.652538,
          "Aug-26": 0.699825,
          "Sep-26": 0.598444
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 6.672194,
          "Feb-26": 5.21,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.005,
          "Feb-26": 0.005,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "DOC_CR_DR",
        "productName": "Documentary Credits / Letters of Credit (DC DR)",
        "productGroup": "Letters of Credit & Documentary Credits",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 15.302458,
        "monthlyBalances": {
          "Jan-26": 20.580059,
          "Feb-26": 13.51551,
          "Mar-26": 4.943883,
          "Apr-26": 0.0,
          "May-26": 9.748292,
          "Jun-26": 2.893383,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.055141,
          "Feb-26": 0.035925,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.080696,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 20.047309,
        "monthlyBalances": {
          "Jan-26": 31.296159,
          "Feb-26": 10.623388,
          "Mar-26": 11.628632,
          "Apr-26": 15.074614,
          "May-26": 11.043777,
          "Jun-26": 10.306863,
          "Jul-26": 14.162505,
          "Aug-26": 6.546956,
          "Sep-26": 11.787783
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.006187,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.006678,
          "Jul-26": 0.006722,
          "Aug-26": 0.006671,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "11723747",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11723746",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11556267",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11723756",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11723754",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11723757",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10219465",
        "name": "Mahesh Chandra Amalean",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 642.129868,
        "latestLiabilitiesMn": 852.035682,
        "ytdRevenueMn": 2.525034,
        "reportedLimitMn": 714.627
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50205063",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 222.845797,
    "company": {
      "legalName": "Asiri Hospital Holdings PLC",
      "shortName": "Asiri Health",
      "entityType": "Corporate",
      "sector": "Healthcare & Hospital Services",
      "subSector": "Tertiary Care Hospitals & Diagnostics",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.asirihealth.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 432.957738,
        "monthlyBalances": {
          "Jan-26": 422.675146,
          "Feb-26": 409.765326,
          "Mar-26": 392.168156,
          "Apr-26": 371.984253,
          "May-26": 361.064298,
          "Jun-26": 350.158728,
          "Jul-26": 320.208209,
          "Aug-26": 286.585115,
          "Sep-26": 259.359104
        },
        "monthlyRevenue": {
          "Jan-26": 1.482978,
          "Feb-26": 1.29869,
          "Mar-26": 1.487318,
          "Apr-26": 1.444507,
          "May-26": 1.382257,
          "Jun-26": 1.11561,
          "Jul-26": 1.142293,
          "Aug-26": 1.125868,
          "Sep-26": 1.014466
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 8.146028,
        "monthlyBalances": {
          "Jan-26": 6.116561,
          "Feb-26": 4.157954,
          "Mar-26": 10.056117,
          "Apr-26": 5.892657,
          "May-26": 13.975301,
          "Jun-26": 5.437265,
          "Jul-26": 6.758275,
          "Aug-26": 9.085124,
          "Sep-26": 10.794653
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.799616,
        "monthlyBalances": {
          "Jan-26": 0.59772,
          "Feb-26": 0.491105,
          "Mar-26": 0.531704,
          "Apr-26": 0.675126,
          "May-26": 0.250517,
          "Jun-26": 0.355535,
          "Jul-26": 0.532822,
          "Aug-26": 0.885394,
          "Sep-26": 1.291546
        },
        "monthlyRevenue": {
          "Jan-26": 0.1286,
          "Feb-26": 0.127651,
          "Mar-26": 0.127029,
          "Apr-26": 0.081079,
          "May-26": 0.130266,
          "Jun-26": 0.076143,
          "Jul-26": 0.093543,
          "Aug-26": 0.182284,
          "Sep-26": 0.093604
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10409077",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11723287",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11723284",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10200869",
        "name": "Sivakumar Selliah",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 57.039119,
        "ytdRevenueMn": -0.507521,
        "reportedLimitMn": 22.0
      },
      {
        "directorCif": "10223537",
        "name": "Sudarshan Ahangama",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 24.350368,
        "latestLiabilitiesMn": 8.681635,
        "ytdRevenueMn": 0.241174,
        "reportedLimitMn": 23.20672
      },
      {
        "directorCif": "10202770",
        "name": "Samantha Aruna Bandara Rajapaksa",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1.296968,
        "latestLiabilitiesMn": 9.744714,
        "ytdRevenueMn": 0.556488,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50218745",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 25.0,
    "company": {
      "legalName": "John Keells Holdings PLC",
      "shortName": "John Keells Holdings",
      "entityType": "Corporate",
      "sector": "Diversified Conglomerate",
      "subSector": "Transportation, Consumer Foods, Retail & Leisure",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.keells.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 4.623432,
        "monthlyBalances": {
          "Jan-26": 5.03042,
          "Feb-26": 4.992084,
          "Mar-26": 3.932149,
          "Apr-26": 7.261957,
          "May-26": 4.809916,
          "Jun-26": 6.673228,
          "Jul-26": 5.296859,
          "Aug-26": 6.072979,
          "Sep-26": 7.747285
        },
        "monthlyRevenue": {
          "Jan-26": 0.056074,
          "Feb-26": 0.061409,
          "Mar-26": 0.20742,
          "Apr-26": 0.071025,
          "May-26": 0.109313,
          "Jun-26": 0.108723,
          "Jul-26": 0.087486,
          "Aug-26": 0.069569,
          "Sep-26": 0.094765
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.093446,
        "monthlyBalances": {
          "Jan-26": 0.058325,
          "Feb-26": 0.090172,
          "Mar-26": 0.120227,
          "Apr-26": 0.046925,
          "May-26": 0.035539,
          "Jun-26": 0.037407,
          "Jul-26": 0.113522,
          "Aug-26": 0.052649,
          "Sep-26": 0.045482
        },
        "monthlyRevenue": {
          "Jan-26": 0.031694,
          "Feb-26": 0.000447,
          "Mar-26": 0.000781,
          "Apr-26": 0.022457,
          "May-26": 0.051298,
          "Jun-26": 0.000348,
          "Jul-26": 0.061783,
          "Aug-26": 0.056463,
          "Sep-26": 0.033606
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 14098.940249,
        "monthlyBalances": {
          "Jan-26": 13578.456255,
          "Feb-26": 13570.691684,
          "Mar-26": 13691.068204,
          "Apr-26": 13888.238104,
          "May-26": 14359.671628,
          "Jun-26": 14798.456991,
          "Jul-26": 15409.414814,
          "Aug-26": 15278.319318,
          "Sep-26": 15166.508036
        },
        "monthlyRevenue": {
          "Jan-26": 0.2594,
          "Feb-26": 0.226072,
          "Mar-26": -0.438954,
          "Apr-26": -0.544076,
          "May-26": -0.5074,
          "Jun-26": 0.100442,
          "Jul-26": -0.052425,
          "Aug-26": 0.929506,
          "Sep-26": -0.137739
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.124648,
        "monthlyBalances": {
          "Jan-26": 0.122642,
          "Feb-26": 0.020421,
          "Mar-26": 0.397066,
          "Apr-26": 0.076715,
          "May-26": 0.864727,
          "Jun-26": 0.096752,
          "Jul-26": 0.77841,
          "Aug-26": 1.089892,
          "Sep-26": 0.433244
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 53.675456,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 4.527567,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.001,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10396154",
        "name": "P G M Asanga Perera",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 0.000447,
        "ytdRevenueMn": 2.7e-05,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10221227",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10507404",
        "name": "Nihal Fonseka",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.454678,
        "latestLiabilitiesMn": 31.179577,
        "ytdRevenueMn": 0.207482,
        "reportedLimitMn": 10.0
      },
      {
        "directorCif": "11155133",
        "name": "Mohamed Ashroff Omar",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.907415,
        "latestLiabilitiesMn": 94.790831,
        "ytdRevenueMn": 2.563429,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10396156",
        "name": "Marie Premila Perera Seneviratne",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.605014,
        "latestLiabilitiesMn": 176.470161,
        "ytdRevenueMn": -0.1573,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10428075",
        "name": "Damian Amal Cabraal",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.070467,
        "latestLiabilitiesMn": 283.448504,
        "ytdRevenueMn": 0.196514,
        "reportedLimitMn": 0.989
      },
      {
        "directorCif": "10218162",
        "name": "Rusi Sohli Captain",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.182428,
        "latestLiabilitiesMn": 0.462043,
        "ytdRevenueMn": 0.018299,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10294918",
        "name": "S S H Wijayasuriya",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 4.664821,
        "ytdRevenueMn": 0.116422,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50223711",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 5850.0,
    "company": {
      "legalName": "Lion Brewery (Ceylon) PLC",
      "shortName": "Lion Brewery",
      "entityType": "Corporate",
      "sector": "Beverages & Consumer Manufacturing",
      "subSector": "Brewing & Islandwide Distribution",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.lionbeer.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 467.741935,
          "Jun-26": 421.666667,
          "Jul-26": 0.0,
          "Aug-26": 580.645161,
          "Sep-26": 433.333333
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.328082,
          "Jun-26": 0.310137,
          "Jul-26": 0.0,
          "Aug-26": 0.690411,
          "Sep-26": 0.54137
        }
      },
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 1.175007,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.000435,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.02762,
          "Feb-26": 0.034839,
          "Mar-26": 0.032795,
          "Apr-26": 0.215711,
          "May-26": 0.064198,
          "Jun-26": 0.106674,
          "Jul-26": 0.004504,
          "Aug-26": 0.068983,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2558.889825,
        "monthlyBalances": {
          "Jan-26": 4306.339129,
          "Feb-26": 3333.410762,
          "Mar-26": 3649.021784,
          "Apr-26": 3286.314727,
          "May-26": 1254.002873,
          "Jun-26": 636.910324,
          "Jul-26": 1130.943576,
          "Aug-26": 758.777664,
          "Sep-26": 456.680636
        },
        "monthlyRevenue": {
          "Jan-26": 0.00632,
          "Feb-26": 0.004169,
          "Mar-26": 0.005426,
          "Apr-26": 0.298819,
          "May-26": 0.474664,
          "Jun-26": 0.29096,
          "Jul-26": 0.503922,
          "Aug-26": 0.340461,
          "Sep-26": 0.201894
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.032966,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.113077,
          "Apr-26": 0.0,
          "May-26": 1.625301,
          "Jun-26": 4.871041,
          "Jul-26": 0.0,
          "Aug-26": 9.075083,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 165.757795,
        "monthlyBalances": {
          "Jan-26": 205.634058,
          "Feb-26": 194.803682,
          "Mar-26": 224.101038,
          "Apr-26": 374.656233,
          "May-26": 399.192708,
          "Jun-26": 257.721774,
          "Jul-26": 313.849995,
          "Aug-26": 287.420054,
          "Sep-26": 232.915827
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.003
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50241932",
    "isPrimaryCustomer": true,
    "reportedLimitMn": null,
    "company": {
      "legalName": "CIC Holdings PLC",
      "shortName": "CIC Holdings",
      "entityType": "Corporate",
      "sector": "Agribusiness, Healthcare & Industrial Chemicals",
      "subSector": "Crop Solutions, Pharma & Livestock",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.cic.lk",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "FB_DR",
        "productName": "Foreign Bills Purchased & Discounted (FB DR)",
        "productGroup": "Foreign Bills Purchased & Discounted (FB DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 74.779886,
        "monthlyBalances": {
          "Jan-26": 76.798316,
          "Feb-26": 56.659496,
          "Mar-26": 13.53375,
          "Apr-26": 10.53164,
          "May-26": 10.891075,
          "Jun-26": 11.154707,
          "Jul-26": 11.175012,
          "Aug-26": 11.047635,
          "Sep-26": 10.966386
        },
        "monthlyRevenue": {
          "Jan-26": 0.975127,
          "Feb-26": 0.431369,
          "Mar-26": 0.141559,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 247.684933,
        "monthlyBalances": {
          "Jan-26": 396.099088,
          "Feb-26": 419.859037,
          "Mar-26": 483.009882,
          "Apr-26": 450.614978,
          "May-26": 466.806817,
          "Jun-26": 464.531977,
          "Jul-26": 377.810493,
          "Aug-26": 296.365118,
          "Sep-26": 201.665929
        },
        "monthlyRevenue": {
          "Jan-26": 1.120337,
          "Feb-26": 1.059443,
          "Mar-26": 1.419583,
          "Apr-26": 1.546251,
          "May-26": 1.214746,
          "Jun-26": 1.127711,
          "Jul-26": 1.23644,
          "Aug-26": 0.750047,
          "Sep-26": 0.984201
        }
      },
      {
        "productCode": "FC_MARGIN_CR",
        "productName": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 11.274474,
        "monthlyBalances": {
          "Jan-26": 11.913669,
          "Feb-26": 11.648875,
          "Mar-26": 3.282061,
          "Apr-26": 0.6825,
          "May-26": 0.6825,
          "Jun-26": 0.6825,
          "Jul-26": 0.6825,
          "Aug-26": 0.6825,
          "Sep-26": 0.6825
        },
        "monthlyRevenue": {
          "Jan-26": 0.074369,
          "Feb-26": 0.06568,
          "Mar-26": 0.020488,
          "Apr-26": 0.004197,
          "May-26": 0.004516,
          "Jun-26": 0.004902,
          "Jul-26": 0.005084,
          "Aug-26": 0.005084,
          "Sep-26": 0.00492
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 6.962194,
        "monthlyBalances": {
          "Jan-26": 6.84771,
          "Feb-26": 7.012357,
          "Mar-26": 1.967484,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.061875,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 4.680519,
        "monthlyBalances": {
          "Jan-26": 8.610818,
          "Feb-26": 5.388401,
          "Mar-26": 5.83318,
          "Apr-26": 4.926497,
          "May-26": 5.753127,
          "Jun-26": 2.185822,
          "Jul-26": 17.705454,
          "Aug-26": 5.32391,
          "Sep-26": 18.335186
        },
        "monthlyRevenue": {
          "Jan-26": 0.041277,
          "Feb-26": 0.01,
          "Mar-26": 0.109646,
          "Apr-26": 0.017183,
          "May-26": 0.046037,
          "Jun-26": 0.014186,
          "Jul-26": 0.0135,
          "Aug-26": 0.0075,
          "Sep-26": 0.112028
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50252639",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 10600.0,
    "company": {
      "legalName": "L O L C Finance PLC",
      "shortName": "LOLC Finance",
      "entityType": "Corporate",
      "sector": "Diversified Financials & NBFI",
      "subSector": "Non-Bank Financial Services & Digital Finance",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.lolcfinance.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 12360.0,
        "monthlyBalances": {
          "Jan-26": 12360.0,
          "Feb-26": 14167.142857,
          "Mar-26": 15516.989247,
          "Apr-26": 15426.666667,
          "May-26": 15342.258065,
          "Jun-26": 15260.0,
          "Jul-26": 15175.591398,
          "Aug-26": 13350.322581,
          "Sep-26": 13010.0
        },
        "monthlyRevenue": {
          "Jan-26": 8.158313,
          "Feb-26": 14.077151,
          "Mar-26": 21.18719,
          "Apr-26": 20.845722,
          "May-26": 22.025133,
          "Jun-26": 11.663965,
          "Jul-26": 11.688428,
          "Aug-26": 13.776061,
          "Sep-26": 15.485058
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 52.959727,
        "monthlyBalances": {
          "Jan-26": 44.49427,
          "Feb-26": 71.742301,
          "Mar-26": 56.021284,
          "Apr-26": 167.980355,
          "May-26": 62.053222,
          "Jun-26": 63.560667,
          "Jul-26": 52.24023,
          "Aug-26": 89.620039,
          "Sep-26": 65.83905
        },
        "monthlyRevenue": {
          "Jan-26": 0.218004,
          "Feb-26": 7.830521,
          "Mar-26": 0.374648,
          "Apr-26": 0.856363,
          "May-26": 0.443676,
          "Jun-26": 0.313248,
          "Jul-26": 0.308749,
          "Aug-26": 0.499798,
          "Sep-26": 0.412444
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 10739.917947,
        "monthlyBalances": {
          "Jan-26": 10751.612421,
          "Feb-26": 10742.615933,
          "Mar-26": 10838.436048,
          "Apr-26": 10995.383951,
          "May-26": 11370.64662,
          "Jun-26": 11645.886814,
          "Jul-26": 11667.085848,
          "Aug-26": 11534.100414,
          "Sep-26": 11449.274034
        },
        "monthlyRevenue": {
          "Jan-26": 1.669144,
          "Feb-26": 1.478166,
          "Mar-26": 1.112918,
          "Apr-26": 1.07001,
          "May-26": 1.146491,
          "Jun-26": 1.563624,
          "Jul-26": 1.360402,
          "Aug-26": 2.35573,
          "Sep-26": 1.501267
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 544.916395,
        "monthlyBalances": {
          "Jan-26": 690.234768,
          "Feb-26": 1131.46643,
          "Mar-26": 3343.179554,
          "Apr-26": 2733.447128,
          "May-26": 3335.644879,
          "Jun-26": 3755.55107,
          "Jul-26": 2567.522023,
          "Aug-26": 1076.481916,
          "Sep-26": 1415.326745
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.003,
          "Apr-26": 0.003,
          "May-26": 0.003,
          "Jun-26": 0.003,
          "Jul-26": 0.009,
          "Aug-26": 0.009,
          "Sep-26": 0.006
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10454914",
        "name": "Kandiah Sundararaj",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.572055,
        "latestLiabilitiesMn": 6.734041,
        "ytdRevenueMn": 0.030295,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11078980",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10228862",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11422572",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10305480",
        "name": "Francisco Kankanamalage Conrad Prasad Niroshan Dias",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.702942,
        "latestLiabilitiesMn": 63.996917,
        "ytdRevenueMn": 0.515848,
        "reportedLimitMn": 18.0
      },
      {
        "directorCif": "10205956",
        "name": "A.JAYANTHA Luxman Peiris",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.462641,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.035799,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50338088",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 50880.634921,
    "company": {
      "legalName": "Citizens Development Business Finance PLC",
      "shortName": "CDB Finance",
      "entityType": "Corporate",
      "sector": "Diversified Financials & NBFI",
      "subSector": "Leasing, Mobility & Financial Services",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.cdb.lk",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 13485.330261,
        "monthlyBalances": {
          "Jan-26": 13261.72555,
          "Feb-26": 13532.001134,
          "Mar-26": 13175.806452,
          "Apr-26": 13642.089947,
          "May-26": 13149.564772,
          "Jun-26": 12722.407407,
          "Jul-26": 15605.581157,
          "Aug-26": 15676.779314,
          "Sep-26": 15234.179894
        },
        "monthlyRevenue": {
          "Jan-26": 15.868739,
          "Feb-26": 16.329119,
          "Mar-26": 18.212079,
          "Apr-26": 19.344437,
          "May-26": 18.769697,
          "Jun-26": 16.255013,
          "Jul-26": 19.880892,
          "Aug-26": 22.565257,
          "Sep-26": 24.061845
        }
      },
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.761112,
        "monthlyBalances": {
          "Jan-26": 29.9103,
          "Feb-26": 13.518186,
          "Mar-26": 31.677972,
          "Apr-26": 17.354182,
          "May-26": 17.920239,
          "Jun-26": 87.178737,
          "Jul-26": 1.696242,
          "Aug-26": 0.0,
          "Sep-26": 7.390387
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.536492,
        "monthlyBalances": {
          "Jan-26": 0.37761,
          "Feb-26": 0.522004,
          "Mar-26": 0.385007,
          "Apr-26": 0.127364,
          "May-26": 0.076853,
          "Jun-26": 0.070356,
          "Jul-26": 0.31866,
          "Aug-26": 0.266487,
          "Sep-26": 0.691668
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 181.342768,
        "monthlyBalances": {
          "Jan-26": 175.716277,
          "Feb-26": 243.000398,
          "Mar-26": 165.903284,
          "Apr-26": 215.805702,
          "May-26": 262.760274,
          "Jun-26": 193.159444,
          "Jul-26": 291.102384,
          "Aug-26": 329.111889,
          "Sep-26": 265.951326
        },
        "monthlyRevenue": {
          "Jan-26": 0.603338,
          "Feb-26": 0.71131,
          "Mar-26": 0.520256,
          "Apr-26": 0.721498,
          "May-26": 0.962923,
          "Jun-26": 0.772978,
          "Jul-26": 6.105551,
          "Aug-26": 1.195175,
          "Sep-26": 0.951401
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 8585.153483,
        "monthlyBalances": {
          "Jan-26": 8456.800096,
          "Feb-26": 8453.765317,
          "Mar-26": 8288.96684,
          "Apr-26": 8250.535691,
          "May-26": 8512.71386,
          "Jun-26": 8439.471085,
          "Jul-26": 8321.27775,
          "Aug-26": 8238.529027,
          "Sep-26": 7993.186733
        },
        "monthlyRevenue": {
          "Jan-26": 2.826167,
          "Feb-26": 2.546617,
          "Mar-26": 59.88082,
          "Apr-26": 2.5197,
          "May-26": 2.238524,
          "Jun-26": 71.44399,
          "Jul-26": 3.254076,
          "Aug-26": 2.979895,
          "Sep-26": 77.124412
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 8.396955,
        "monthlyBalances": {
          "Jan-26": 7.764416,
          "Feb-26": 7.6722,
          "Mar-26": 7.110239,
          "Apr-26": 5.006051,
          "May-26": 4.923591,
          "Jun-26": 3.972202,
          "Jul-26": 4.94516,
          "Aug-26": 5.465541,
          "Sep-26": 5.931465
        },
        "monthlyRevenue": {
          "Jan-26": 0.129891,
          "Feb-26": 0.121277,
          "Mar-26": 0.123248,
          "Apr-26": 0.105395,
          "May-26": 0.111372,
          "Jun-26": 0.10886,
          "Jul-26": 0.230716,
          "Aug-26": 0.129542,
          "Sep-26": 0.159041
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 18.548387,
        "monthlyBalances": {
          "Jan-26": 25.0,
          "Feb-26": 25.0,
          "Mar-26": 25.0,
          "Apr-26": 25.0,
          "May-26": 25.0,
          "Jun-26": 12.5,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 36.32119,
        "monthlyBalances": {
          "Jan-26": 60.16129,
          "Feb-26": 52.535714,
          "Mar-26": 69.085258,
          "Apr-26": 88.0,
          "May-26": 84.580645,
          "Jun-26": 79.977695,
          "Jul-26": 219.677419,
          "Aug-26": 24.83871,
          "Sep-26": 65.53116
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.003,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.003,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.003
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10384224",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10454676",
        "name": "Sampath Priyantha Perera Amarathunga",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.010291,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.00341,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11733213",
        "name": "Prasadani Naganika Gamage",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.115014,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.030966,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10481145",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10372267",
        "name": "Joseph Rene Alastair Corera",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.259124,
        "latestLiabilitiesMn": 4.364599,
        "ytdRevenueMn": 0.216499,
        "reportedLimitMn": 1.05365
      },
      {
        "directorCif": "11175839",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10478192",
        "name": "Sujeewa Kumarapperuma",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.942628,
        "latestLiabilitiesMn": 1.3e-05,
        "ytdRevenueMn": -0.006993,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10211303",
        "name": "Elabadagama Ralalage Samitha Gomi Sudheera Hemachandra",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.047026,
        "latestLiabilitiesMn": 0.01281,
        "ytdRevenueMn": 0.003027,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50415498",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 1050.0,
    "company": {
      "legalName": "Fintrex Finance PLC",
      "shortName": "Fintrex Finance",
      "entityType": "Corporate",
      "sector": "Diversified Financials & NBFI",
      "subSector": "Leasing, Trade Finance & SME Lending",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.fintrexfinance.com",
          "type": "website"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 483.602151,
        "monthlyBalances": {
          "Jan-26": 464.157706,
          "Feb-26": 445.93254,
          "Mar-26": 425.268817,
          "Apr-26": 406.203704,
          "May-26": 386.379928,
          "Jun-26": 367.314815,
          "Jul-26": 347.491039,
          "Aug-26": 328.046595,
          "Sep-26": 842.314815
        },
        "monthlyRevenue": {
          "Jan-26": 0.72567,
          "Feb-26": 0.726244,
          "Mar-26": 0.785178,
          "Apr-26": 0.714315,
          "May-26": 0.69197,
          "Jun-26": 0.655963,
          "Jul-26": 0.43411,
          "Aug-26": 0.470776,
          "Sep-26": 2.061872
        }
      },
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.056523,
          "Feb-26": 0.0,
          "Mar-26": 1.219558,
          "Apr-26": 1.255538,
          "May-26": 0.19204,
          "Jun-26": 2.147361,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.058803,
        "monthlyBalances": {
          "Jan-26": 0.030315,
          "Feb-26": 0.046136,
          "Mar-26": 0.092824,
          "Apr-26": 0.27168,
          "May-26": 0.110508,
          "Jun-26": 0.047578,
          "Jul-26": 0.071694,
          "Aug-26": 0.123222,
          "Sep-26": 0.09574
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 40.098067,
        "monthlyBalances": {
          "Jan-26": 29.200755,
          "Feb-26": 47.355688,
          "Mar-26": 28.516183,
          "Apr-26": 24.005227,
          "May-26": 35.958747,
          "Jun-26": 35.179532,
          "Jul-26": 45.600962,
          "Aug-26": 45.075594,
          "Sep-26": 59.494752
        },
        "monthlyRevenue": {
          "Jan-26": 0.068401,
          "Feb-26": 0.083375,
          "Mar-26": 0.078169,
          "Apr-26": 0.070862,
          "May-26": 0.09439,
          "Jun-26": 0.113621,
          "Jul-26": 0.119687,
          "Aug-26": 0.10343,
          "Sep-26": 5.122597
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.141733,
        "monthlyBalances": {
          "Jan-26": 0.134008,
          "Feb-26": 0.137264,
          "Mar-26": 0.179051,
          "Apr-26": 0.149196,
          "May-26": 0.118405,
          "Jun-26": 0.154821,
          "Jul-26": 0.117693,
          "Aug-26": 0.224851,
          "Sep-26": 0.184031
        },
        "monthlyRevenue": {
          "Jan-26": 0.00616,
          "Feb-26": 0.01764,
          "Mar-26": 0.006311,
          "Apr-26": 0.009261,
          "May-26": 0.006674,
          "Jun-26": 0.007659,
          "Jul-26": 0.010168,
          "Aug-26": 0.034569,
          "Sep-26": 0.007986
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 33.333333
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10308889",
        "name": "Kathirgamar Sivaskantharajah",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.0,
        "latestLiabilitiesMn": 0.199259,
        "ytdRevenueMn": 0.030367,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10251794",
        "name": "Ahamed Sabry Ibrahim",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.024322,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.007604,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10486749",
        "name": "Shrihan Blaise Perera",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.264119,
        "latestLiabilitiesMn": 42.314065,
        "ytdRevenueMn": 0.332783,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10749862",
        "name": "Seminda Nilam Jayasinghe",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.048073,
        "latestLiabilitiesMn": 11.058925,
        "ytdRevenueMn": 0.028966,
        "reportedLimitMn": 1.0
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "50774687",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 7300.000004,
    "company": {
      "legalName": "Asia Asset Finance PLC",
      "shortName": "Asia Asset Finance",
      "entityType": "Corporate",
      "sector": "Diversified Financials & NBFI",
      "subSector": "Gold Loans, Asset Finance & Micro-Credit",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.asiaassetfinance.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1079.973121,
        "monthlyBalances": {
          "Jan-26": 851.702512,
          "Feb-26": 848.363099,
          "Mar-26": 1920.430111,
          "Apr-26": 3254.351856,
          "May-26": 3744.892477,
          "Jun-26": 3623.796301,
          "Jul-26": 3497.670256,
          "Aug-26": 3374.059145,
          "Sep-26": 3252.962969
        },
        "monthlyRevenue": {
          "Jan-26": 1.978246,
          "Feb-26": 1.940987,
          "Mar-26": 5.267891,
          "Apr-26": 9.331064,
          "May-26": 10.745387,
          "Jun-26": 9.187036,
          "Jul-26": 8.465819,
          "Aug-26": 9.159546,
          "Sep-26": 9.218209
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.018337,
          "Aug-26": 0.06798,
          "Sep-26": 0.691966
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 33.48486,
        "monthlyBalances": {
          "Jan-26": 142.734334,
          "Feb-26": 59.669708,
          "Mar-26": 256.111915,
          "Apr-26": 441.40295,
          "May-26": 477.341252,
          "Jun-26": 389.762524,
          "Jul-26": 612.743925,
          "Aug-26": 574.398942,
          "Sep-26": 421.992033
        },
        "monthlyRevenue": {
          "Jan-26": 0.743467,
          "Feb-26": 6.344198,
          "Mar-26": 1.263871,
          "Apr-26": 12.075169,
          "May-26": 2.451283,
          "Jun-26": 2.252803,
          "Jul-26": 3.658502,
          "Aug-26": 3.405946,
          "Sep-26": 2.456421
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.441121,
        "monthlyBalances": {
          "Jan-26": 0.210166,
          "Feb-26": 0.43949,
          "Mar-26": 0.753606,
          "Apr-26": 0.58295,
          "May-26": 0.387248,
          "Jun-26": 0.541381,
          "Jul-26": 0.668314,
          "Aug-26": 0.425108,
          "Sep-26": 0.768327
        },
        "monthlyRevenue": {
          "Jan-26": 0.126453,
          "Feb-26": 0.134613,
          "Mar-26": 0.125277,
          "Apr-26": 0.164781,
          "May-26": 0.153979,
          "Jun-26": 0.112791,
          "Jul-26": 0.15016,
          "Aug-26": 0.195546,
          "Sep-26": 0.196659
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 2.516129,
        "monthlyBalances": {
          "Jan-26": 103.16129,
          "Feb-26": 41.5,
          "Mar-26": 71.605132,
          "Apr-26": 152.666667,
          "May-26": 186.620968,
          "Jun-26": 125.533333,
          "Jul-26": 114.399724,
          "Aug-26": 256.352487,
          "Sep-26": 544.326533
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "51002024",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 2780.0,
    "company": {
      "legalName": "Browns Investments PLC",
      "shortName": "Browns Investments",
      "entityType": "Corporate",
      "sector": "Diversified Investments, Plantations & Leisure",
      "subSector": "Agribusiness, Hospitality & Strategic Investments",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.brownsinvestments.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "not_registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 2389.984593,
        "monthlyBalances": {
          "Jan-26": 2390.0,
          "Feb-26": 2390.0,
          "Mar-26": 2390.0,
          "Apr-26": 2390.0,
          "May-26": 2390.0,
          "Jun-26": 2390.0,
          "Jul-26": 2530.16129,
          "Aug-26": 2780.967742,
          "Sep-26": 2778.916667
        },
        "monthlyRevenue": {
          "Jan-26": 2.530063,
          "Feb-26": 2.192252,
          "Mar-26": 2.890263,
          "Apr-26": 1.245638,
          "May-26": 0.539145,
          "Jun-26": 0.521753,
          "Jul-26": 2.707097,
          "Aug-26": 2.682584,
          "Sep-26": 3.121779
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2.358179,
        "monthlyBalances": {
          "Jan-26": 1.178617,
          "Feb-26": 1.935166,
          "Mar-26": 3.354048,
          "Apr-26": 4.236128,
          "May-26": 2.728967,
          "Jun-26": 0.982221,
          "Jul-26": 1.407029,
          "Aug-26": 4.970987,
          "Sep-26": 2.926888
        },
        "monthlyRevenue": {
          "Jan-26": 0.008357,
          "Feb-26": 0.013811,
          "Mar-26": 0.023537,
          "Apr-26": 0.027531,
          "May-26": 0.019432,
          "Jun-26": 0.007729,
          "Jul-26": 0.012906,
          "Aug-26": 0.14073,
          "Sep-26": 0.026
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2517.749128,
        "monthlyBalances": {
          "Jan-26": 2529.989979,
          "Feb-26": 2536.785885,
          "Mar-26": 2570.084028,
          "Apr-26": 2616.299589,
          "May-26": 2714.65999,
          "Jun-26": 2780.371604,
          "Jul-26": 2791.11227,
          "Aug-26": 2791.282142,
          "Sep-26": 2771.054791
        },
        "monthlyRevenue": {
          "Jan-26": 0.943692,
          "Feb-26": 0.853335,
          "Mar-26": 0.874201,
          "Apr-26": 1.281837,
          "May-26": 0.284885,
          "Jun-26": 0.382732,
          "Jul-26": 0.420694,
          "Aug-26": 0.544744,
          "Sep-26": -0.114145
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 35.935484,
        "monthlyBalances": {
          "Jan-26": 9.322581,
          "Feb-26": 139.857143,
          "Mar-26": 218.677419,
          "Apr-26": 6.233333,
          "May-26": 4.645161,
          "Jun-26": 1.433333,
          "Jul-26": 13.032258,
          "Aug-26": 267.258065,
          "Sep-26": 257.433333
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10209797",
        "name": "Jayanta M Swaminathan",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.299378,
        "latestLiabilitiesMn": 11.996753,
        "ytdRevenueMn": 0.09778,
        "reportedLimitMn": 3.558921
      },
      {
        "directorCif": "10207866",
        "name": "Stefan Furkhan",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1.299892,
        "latestLiabilitiesMn": 71.756668,
        "ytdRevenueMn": 0.587383,
        "reportedLimitMn": null
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "NDE_H2H",
        "productGroup": "Nations Direct Enterprise (Host-to-Host ERP Cash Mgmt)",
        "headlineOffer": "Nations Direct Enterprise (NDE) Host-to-Host ERP Integration",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Automate bulk supplier payments, dealer collections, and real-time treasury reconciliation.",
        "evidencePoints": [],
        "talkingPoints": [
          "Integrate corporate ERP directly with Nations Direct Enterprise for automated payables and receivables.",
          "Capture operating CASA float through real-time virtual account reconciliation."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "51039588",
    "isPrimaryCustomer": true,
    "reportedLimitMn": 1000.0,
    "company": {
      "legalName": "Hayleys PLC",
      "shortName": "Hayleys",
      "entityType": "Corporate",
      "sector": "Diversified Export & Industrial Conglomerate",
      "subSector": "Export Manufacturing, Logistics & Agriculture",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Institutional & Corporate",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [
        {
          "label": "Official Website",
          "url": "https://www.hayleys.com",
          "type": "website"
        },
        {
          "label": "CSE Filings",
          "url": "https://www.cse.lk",
          "type": "cse_filing"
        }
      ],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_registered",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "registered",
      "nde": "registered"
    },
    "holdings": [
      {
        "productCode": "LN_DR",
        "productName": "Corporate Term Loans (LN DR)",
        "productGroup": "Corporate Term Loans (LN DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 593.580645,
        "monthlyBalances": {
          "Jan-26": 684.032258,
          "Feb-26": 1782.5,
          "Mar-26": 2064.334194,
          "Apr-26": 1150.964333,
          "May-26": 1000.0,
          "Jun-26": 1000.0,
          "Jul-26": 1000.0,
          "Aug-26": 1193.548387,
          "Sep-26": 1560.0
        },
        "monthlyRevenue": {
          "Jan-26": 1.073664,
          "Feb-26": 2.276346,
          "Mar-26": 2.994575,
          "Apr-26": 1.884933,
          "May-26": 1.520548,
          "Jun-26": 1.475343,
          "Jul-26": 1.248493,
          "Aug-26": 1.70685,
          "Sep-26": 2.347891
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1.11082,
        "monthlyBalances": {
          "Jan-26": 0.472856,
          "Feb-26": 0.98485,
          "Mar-26": 0.995529,
          "Apr-26": 1.01349,
          "May-26": 1.483693,
          "Jun-26": 2.385711,
          "Jul-26": 3.310224,
          "Aug-26": 0.464863,
          "Sep-26": 0.523618
        },
        "monthlyRevenue": {
          "Jan-26": 0.004552,
          "Feb-26": 0.006753,
          "Mar-26": 0.257414,
          "Apr-26": 0.007022,
          "May-26": 0.009817,
          "Jun-26": 0.017145,
          "Jul-26": 0.024659,
          "Aug-26": 0.254263,
          "Sep-26": 0.004175
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 23.225806,
        "monthlyBalances": {
          "Jan-26": 22.096774,
          "Feb-26": 51.607143,
          "Mar-26": 33.741935,
          "Apr-26": 33.333333,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 48.387097,
          "Sep-26": 10.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "11643145",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11751348",
        "name": null,
        "role": "Linked Director Relationship",
        "hasBalanceExtract": false,
        "latestAssetsMn": null,
        "latestLiabilitiesMn": null,
        "ytdRevenueMn": null,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10916353",
        "name": "Mohamed Jamaldeen",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.010078,
        "latestLiabilitiesMn": 0.0,
        "ytdRevenueMn": 0.012209,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10536874",
        "name": "Kalupathirathnehelage Don Gamini Gunaratne",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 4.397616,
        "latestLiabilitiesMn": 10.006555,
        "ytdRevenueMn": 0.608454,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11256570",
        "name": "Liyanamohottige Joseph Sri Harsha Cabral",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 4.890237,
        "latestLiabilitiesMn": 0.001053,
        "ytdRevenueMn": -0.009566,
        "reportedLimitMn": 10.95324
      }
    ],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "FRIMI_CORP",
        "productGroup": "FriMi Ecosystem & Employee Payroll Disbursement",
        "headlineOffer": "FriMi Corporate Collections & Executive Payroll Ecosystem",
        "targetCategory": "Cash Management & Digital",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Expand low-cost CASA float via FriMi digital collections and payroll onboarding.",
        "evidencePoints": [],
        "talkingPoints": [
          "Onboard retail collections and employee payroll onto FriMi digital rails.",
          "Retain recurring settlement float within Nations Trust Bank CASA accounts."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "SCF_DIST",
        "productGroup": "Supply Chain & Dealer/Vendor Financing Program",
        "headlineOffer": "Structured Supply Chain, Dealer & Vendor Financing Program",
        "targetCategory": "Working Capital & Trade",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Deepen working capital utilization across verified domestic suppliers and distributor networks.",
        "evidencePoints": [],
        "talkingPoints": [
          "Digitize invoice discounting and distributor credit lines on Nations Direct.",
          "Optimize working capital cycle within the existing corporate banking relationship."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "FX_FORWARD",
        "productGroup": "Treasury FX Forwards, Swaps & Hedging Desk",
        "headlineOffer": "Treasury FX Forwards, Trade Settlement & Liquidity Desk",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Capture cross-border remittance, trade finance, and money-market treasury flows.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide direct Treasury desk pricing for inward/outward remittances and import/export bills.",
          "Structure short-term money market and term deposit placement sweeps."
        ],
        "implementationTimeline": ""
      }
    ]
  }
];

export const DIRECTOR_CUSTOMERS: CustomerRecord[] = [
  {
    "cif": "10248549",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Chaminda Sampath Hettiarachchi",
      "shortName": "Chaminda Sampath Hettiarachchi",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1.503484,
        "monthlyBalances": {
          "Jan-26": 1.224119,
          "Feb-26": 1.380473,
          "Mar-26": 1.44129,
          "Apr-26": 0.904305,
          "May-26": 1.051132,
          "Jun-26": 1.120064,
          "Jul-26": 1.230826,
          "Aug-26": 1.648632,
          "Sep-26": 1.455852
        },
        "monthlyRevenue": {
          "Jan-26": -0.013129,
          "Feb-26": -0.006231,
          "Mar-26": -0.004503,
          "Apr-26": -0.000516,
          "May-26": 0.007722,
          "Jun-26": -0.003076,
          "Jul-26": 0.010239,
          "Aug-26": 0.000634,
          "Sep-26": -0.00847
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1.694032,
        "monthlyBalances": {
          "Jan-26": 1.455396,
          "Feb-26": 0.989485,
          "Mar-26": 0.692161,
          "Apr-26": 0.975743,
          "May-26": 1.927544,
          "Jun-26": 1.935949,
          "Jul-26": 1.483841,
          "Aug-26": 1.282241,
          "Sep-26": 0.836268
        },
        "monthlyRevenue": {
          "Jan-26": 0.012615,
          "Feb-26": 0.004802,
          "Mar-26": 0.004288,
          "Apr-26": 0.068705,
          "May-26": 0.009623,
          "Jun-26": 0.010794,
          "Jul-26": 0.008808,
          "Aug-26": 0.007662,
          "Sep-26": 0.024952
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.013362,
        "monthlyBalances": {
          "Jan-26": 0.027482,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.016057,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.113954,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.082101
        },
        "monthlyRevenue": {
          "Jan-26": 0.005,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.01,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.005
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10204041",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Harindra Wijenaike Eranjith",
      "shortName": "Harindra Wijenaike Eranjith",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 67.64754,
        "monthlyBalances": {
          "Jan-26": 67.896209,
          "Feb-26": 68.146066,
          "Mar-26": 67.987601,
          "Apr-26": 67.627961,
          "May-26": 67.868518,
          "Jun-26": 68.119235,
          "Jul-26": 68.392154,
          "Aug-26": 68.684736,
          "Sep-26": 68.97894
        },
        "monthlyRevenue": {
          "Jan-26": 0.146264,
          "Feb-26": 0.13232,
          "Mar-26": 0.146349,
          "Apr-26": 0.148659,
          "May-26": 0.171658,
          "Jun-26": 0.186392,
          "Jul-26": 0.184443,
          "Aug-26": 0.184821,
          "Sep-26": 0.179227
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 764.5,
        "monthlyBalances": {
          "Jan-26": 801.596774,
          "Feb-26": 814.5,
          "Mar-26": 833.854839,
          "Apr-26": 864.5,
          "May-26": 864.5,
          "Jun-26": 869.372156,
          "Jul-26": 937.517568,
          "Aug-26": 986.884479,
          "Sep-26": 986.884479
        },
        "monthlyRevenue": {
          "Jan-26": 0.003939,
          "Feb-26": 0.003524,
          "Mar-26": 0.003928,
          "Apr-26": -0.00862,
          "May-26": 0.003969,
          "Jun-26": 0.743293,
          "Jul-26": 0.119242,
          "Aug-26": 0.005535,
          "Sep-26": 0.005357
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11790224",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11790224",
      "shortName": "Director CIF 11790224",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10205481",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Chandika Kushan Hettiarachchi",
      "shortName": "Chandika Kushan Hettiarachchi",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.000306,
          "Apr-26": 0.006026,
          "May-26": 0.02916,
          "Jun-26": 0.022684,
          "Jul-26": 0.020589,
          "Aug-26": 0.0,
          "Sep-26": 0.032878
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": -1e-06,
          "Apr-26": 0.001233,
          "May-26": -0.000196,
          "Jun-26": 0.000817,
          "Jul-26": -0.000158,
          "Aug-26": 0.0,
          "Sep-26": 0.000848
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2.793106,
        "monthlyBalances": {
          "Jan-26": 3.975078,
          "Feb-26": 25.838529,
          "Mar-26": 25.27697,
          "Apr-26": 28.923146,
          "May-26": 21.117424,
          "Jun-26": 18.009221,
          "Jul-26": 6.404413,
          "Aug-26": 1.257499,
          "Sep-26": 1.60906
        },
        "monthlyRevenue": {
          "Jan-26": 0.027469,
          "Feb-26": 0.146782,
          "Mar-26": 0.159389,
          "Apr-26": 0.17881,
          "May-26": 0.140986,
          "Jun-26": 0.130302,
          "Jul-26": 0.048858,
          "Aug-26": 0.010325,
          "Sep-26": 0.012433
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 53.317564,
        "monthlyBalances": {
          "Jan-26": 54.806947,
          "Feb-26": 54.761087,
          "Mar-26": 55.249535,
          "Apr-26": 56.049586,
          "May-26": 57.962508,
          "Jun-26": 59.36556,
          "Jul-26": 59.473624,
          "Aug-26": 58.795723,
          "Sep-26": 58.363316
        },
        "monthlyRevenue": {
          "Jan-26": 0.012065,
          "Feb-26": 0.010759,
          "Mar-26": 0.00954,
          "Apr-26": 0.009526,
          "May-26": 0.00984,
          "Jun-26": 0.011787,
          "Jul-26": 0.013016,
          "Aug-26": 0.015549,
          "Sep-26": 0.011495
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.000194,
          "Apr-26": 0.000628,
          "May-26": 0.001033,
          "Jun-26": 0.000927,
          "Jul-26": 0.000365,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10702569",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": 5.0,
    "company": {
      "legalName": "Arjun Fernando",
      "shortName": "Arjun Fernando",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.025532,
        "monthlyBalances": {
          "Jan-26": 0.028174,
          "Feb-26": 0.043578,
          "Mar-26": 0.022242,
          "Apr-26": 0.025792,
          "May-26": 0.233069,
          "Jun-26": 0.261232,
          "Jul-26": 0.206095,
          "Aug-26": 0.209439,
          "Sep-26": 0.212261
        },
        "monthlyRevenue": {
          "Jan-26": 0.000754,
          "Feb-26": -0.000229,
          "Mar-26": 0.023519,
          "Apr-26": 0.001088,
          "May-26": 0.000727,
          "Jun-26": -0.001659,
          "Jul-26": -0.001039,
          "Aug-26": -0.001499,
          "Sep-26": -0.000937
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 2.9453,
          "Jun-26": 3.244202,
          "Jul-26": 3.340054,
          "Aug-26": 3.465206,
          "Sep-26": 3.853375
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.009743,
          "Jun-26": 0.012146,
          "Jul-26": 0.012519,
          "Aug-26": 0.013337,
          "Sep-26": 0.015075
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 50.0,
        "monthlyBalances": {
          "Jan-26": 50.0,
          "Feb-26": 50.0,
          "Mar-26": 50.0,
          "Apr-26": 50.0,
          "May-26": 79.189271,
          "Jun-26": 79.40392,
          "Jul-26": 79.599299,
          "Aug-26": 79.859808,
          "Sep-26": 80.07927
        },
        "monthlyRevenue": {
          "Jan-26": 6.8e-05,
          "Feb-26": -0.00663,
          "Mar-26": -0.000136,
          "Apr-26": -0.000467,
          "May-26": -0.029101,
          "Jun-26": -0.027714,
          "Jul-26": -0.022227,
          "Aug-26": -0.019794,
          "Sep-26": 0.009384
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.000527,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 1e-05,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10204843",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": 5.0,
    "company": {
      "legalName": "Arjuna Kapila Gunaratne",
      "shortName": "Arjuna Kapila Gunaratne",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.124994,
        "monthlyBalances": {
          "Jan-26": 0.153927,
          "Feb-26": 0.243901,
          "Mar-26": 0.163651,
          "Apr-26": 0.238584,
          "May-26": 0.45599,
          "Jun-26": 0.232006,
          "Jul-26": 0.36508,
          "Aug-26": 0.266231,
          "Sep-26": 0.255989
        },
        "monthlyRevenue": {
          "Jan-26": 0.00265,
          "Feb-26": -0.002289,
          "Mar-26": 0.004325,
          "Apr-26": 0.000275,
          "May-26": -0.000898,
          "Jun-26": 0.025794,
          "Jul-26": 0.003603,
          "Aug-26": 0.00061,
          "Sep-26": 0.005991
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 3.542743,
        "monthlyBalances": {
          "Jan-26": 5.628099,
          "Feb-26": 7.843442,
          "Mar-26": 8.398406,
          "Apr-26": 10.55828,
          "May-26": 9.326011,
          "Jun-26": 2.669757,
          "Jul-26": 3.32743,
          "Aug-26": 3.277713,
          "Sep-26": 3.870203
        },
        "monthlyRevenue": {
          "Jan-26": 0.02506,
          "Feb-26": 0.031781,
          "Mar-26": 0.03764,
          "Apr-26": 0.047095,
          "May-26": 0.045845,
          "Jun-26": 0.013952,
          "Jul-26": 0.018369,
          "Aug-26": 0.017948,
          "Sep-26": 0.020646
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 37.596398,
        "monthlyBalances": {
          "Jan-26": 38.702118,
          "Feb-26": 38.695443,
          "Mar-26": 38.766543,
          "Apr-26": 38.883002,
          "May-26": 39.161455,
          "Jun-26": 39.365689,
          "Jul-26": 39.395726,
          "Aug-26": 39.726256,
          "Sep-26": 39.663313
        },
        "monthlyRevenue": {
          "Jan-26": 0.002491,
          "Feb-26": 0.002228,
          "Mar-26": 0.002134,
          "Apr-26": 0.002069,
          "May-26": 0.002212,
          "Jun-26": 0.002485,
          "Jul-26": 0.004027,
          "Aug-26": 0.003884,
          "Sep-26": 0.003244
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.00069,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10562812",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Manjula Hiranya DE Silva",
      "shortName": "Manjula Hiranya DE Silva",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.334193,
          "Jun-26": 0.717432,
          "Jul-26": 1.387246,
          "Aug-26": 0.569978,
          "Sep-26": 0.700885
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.002327,
          "Jun-26": -0.005423,
          "Jul-26": -0.008339,
          "Aug-26": 0.040291,
          "Sep-26": -0.005298
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.047163,
          "Jun-26": 0.378453,
          "Jul-26": 0.462645,
          "Aug-26": 0.863598,
          "Sep-26": 0.15376
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.000312,
          "Jun-26": 0.002395,
          "Jul-26": 0.003059,
          "Aug-26": 0.00537,
          "Sep-26": 0.001097
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 11.486737,
          "Jun-26": 11.486737,
          "Jul-26": 11.486737,
          "Aug-26": 9.036227,
          "Sep-26": 8.751695
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.021933,
          "Jun-26": -0.021226,
          "Jul-26": -0.021928,
          "Aug-26": -0.00555,
          "Sep-26": 0.001099
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.000176,
          "Sep-26": 0.000185
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10524591",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": 96.21209,
    "company": {
      "legalName": "Asite Drupath B Talwatte",
      "shortName": "Asite Drupath B Talwatte",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 3.443928,
          "Jun-26": 3.911546,
          "Jul-26": 3.918679,
          "Aug-26": 3.923114,
          "Sep-26": 4.148988
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.001806,
        "monthlyBalances": {
          "Jan-26": 0.009754,
          "Feb-26": 0.008235,
          "Mar-26": 0.002105,
          "Apr-26": 0.018044,
          "May-26": 0.805346,
          "Jun-26": 0.674423,
          "Jul-26": 0.716776,
          "Aug-26": 0.61843,
          "Sep-26": 0.496566
        },
        "monthlyRevenue": {
          "Jan-26": -6.4e-05,
          "Feb-26": 7.9e-05,
          "Mar-26": 9.4e-05,
          "Apr-26": 0.00332,
          "May-26": 0.012362,
          "Jun-26": -0.003142,
          "Jul-26": -0.005432,
          "Aug-26": -0.001239,
          "Sep-26": -0.003649
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 3.562326,
        "monthlyBalances": {
          "Jan-26": 3.554819,
          "Feb-26": 0.954379,
          "Mar-26": 0.514055,
          "Apr-26": 18.366897,
          "May-26": 21.931285,
          "Jun-26": 21.864537,
          "Jul-26": 23.205215,
          "Aug-26": 23.715497,
          "Sep-26": 23.831053
        },
        "monthlyRevenue": {
          "Jan-26": 0.010163,
          "Feb-26": 0.003421,
          "Mar-26": 0.002687,
          "Apr-26": 0.110514,
          "May-26": 0.137611,
          "Jun-26": 0.145342,
          "Jul-26": 0.160452,
          "Aug-26": 0.196448,
          "Sep-26": 0.163703
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 75.523474,
        "monthlyBalances": {
          "Jan-26": 75.523474,
          "Feb-26": 78.174999,
          "Mar-26": 78.644696,
          "Apr-26": 79.193401,
          "May-26": 113.311026,
          "Jun-26": 113.390289,
          "Jul-26": 113.601555,
          "Aug-26": 113.570097,
          "Sep-26": 113.545669
        },
        "monthlyRevenue": {
          "Jan-26": 0.027672,
          "Feb-26": 0.02572,
          "Mar-26": 0.028483,
          "Apr-26": 0.025169,
          "May-26": 0.067372,
          "Jun-26": 0.06533,
          "Jul-26": 0.036312,
          "Aug-26": 0.041988,
          "Sep-26": 0.040435
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 1.8e-05,
          "Jul-26": 2.8e-05,
          "Aug-26": 4e-06,
          "Sep-26": 1e-06
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.017772,
          "Aug-26": 0.071089,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.005,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10290576",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Kuda Bandara Herath",
      "shortName": "Kuda Bandara Herath",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.035127,
        "monthlyBalances": {
          "Jan-26": 0.017291,
          "Feb-26": 0.107179,
          "Mar-26": 0.414377,
          "Apr-26": 0.72465,
          "May-26": 1.367839,
          "Jun-26": 0.990481,
          "Jul-26": 0.957721,
          "Aug-26": 0.663652,
          "Sep-26": 1.232944
        },
        "monthlyRevenue": {
          "Jan-26": 0.001594,
          "Feb-26": 0.005007,
          "Mar-26": 0.021621,
          "Apr-26": 0.008938,
          "May-26": 0.012713,
          "Jun-26": 0.03292,
          "Jul-26": 0.030739,
          "Aug-26": 0.023763,
          "Sep-26": -0.00527
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1.679082,
        "monthlyBalances": {
          "Jan-26": 1.485212,
          "Feb-26": 2.354639,
          "Mar-26": 0.434204,
          "Apr-26": 0.14884,
          "May-26": 0.50553,
          "Jun-26": 0.371683,
          "Jul-26": 0.250355,
          "Aug-26": 0.551705,
          "Sep-26": 0.129992
        },
        "monthlyRevenue": {
          "Jan-26": 0.006298,
          "Feb-26": 0.008986,
          "Mar-26": 0.001988,
          "Apr-26": 0.000955,
          "May-26": 0.002647,
          "Jun-26": 0.002469,
          "Jul-26": 0.001958,
          "Aug-26": 0.009064,
          "Sep-26": 0.001195
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.10063,
        "monthlyBalances": {
          "Jan-26": 0.004177,
          "Feb-26": 0.314929,
          "Mar-26": 0.290236,
          "Apr-26": 0.279191,
          "May-26": 0.259393,
          "Jun-26": 0.181893,
          "Jul-26": 0.130792,
          "Aug-26": 0.098486,
          "Sep-26": 0.000658
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.061543,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.029395,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.01,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10230908",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100120",
    "parentCompanyName": "Central Finance Company PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Dhammika Prasanna DE Silva",
      "shortName": "Dhammika Prasanna DE Silva",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Central Finance Company PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.054961,
        "monthlyBalances": {
          "Jan-26": 0.04851,
          "Feb-26": 0.000468,
          "Mar-26": 0.003253,
          "Apr-26": 0.015059,
          "May-26": 0.000319,
          "Jun-26": 0.020781,
          "Jul-26": 0.009299,
          "Aug-26": 0.016681,
          "Sep-26": 0.001077
        },
        "monthlyRevenue": {
          "Jan-26": 0.008854,
          "Feb-26": 0.003593,
          "Mar-26": 0.034346,
          "Apr-26": 0.001503,
          "May-26": 0.011415,
          "Jun-26": 0.007022,
          "Jul-26": 0.001709,
          "Aug-26": 0.004522,
          "Sep-26": -6e-06
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.927224,
        "monthlyBalances": {
          "Jan-26": 1.214949,
          "Feb-26": 1.157451,
          "Mar-26": 1.318407,
          "Apr-26": 1.788194,
          "May-26": 1.760643,
          "Jun-26": 2.751476,
          "Jul-26": 1.829452,
          "Aug-26": 0.584754,
          "Sep-26": 0.71583
        },
        "monthlyRevenue": {
          "Jan-26": 0.006195,
          "Feb-26": 0.005689,
          "Mar-26": 0.007058,
          "Apr-26": 0.009462,
          "May-26": 0.010359,
          "Jun-26": 0.018536,
          "Jul-26": 0.011334,
          "Aug-26": 0.006633,
          "Sep-26": 0.006851
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 9e-06,
        "monthlyBalances": {
          "Jan-26": 2.4e-05,
          "Feb-26": 0.013817,
          "Mar-26": 0.012308,
          "Apr-26": 3.6e-05,
          "May-26": 0.013354,
          "Jun-26": 0.00039,
          "Jul-26": 0.000349,
          "Aug-26": 0.087638,
          "Sep-26": 0.000364
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11653453",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Kulappu Arachchige Don Dhammika Perera",
      "shortName": "Kulappu Arachchige Don Dhammika Perera",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.050211,
          "Mar-26": 1.812587,
          "Apr-26": 0.886351,
          "May-26": 0.889512,
          "Jun-26": 2.826436,
          "Jul-26": 0.0,
          "Aug-26": 0.498828,
          "Sep-26": 0.275047
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": -0.000298,
          "Mar-26": 0.015024,
          "Apr-26": 0.007661,
          "May-26": -0.006195,
          "Jun-26": -0.021151,
          "Jul-26": 0.0,
          "Aug-26": -0.003898,
          "Sep-26": -0.00208
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 11.408758,
          "Apr-26": 19.209468,
          "May-26": 18.351492,
          "Jun-26": 17.168158,
          "Jul-26": 14.366982,
          "Aug-26": 13.371118,
          "Sep-26": 11.403433
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.05184,
          "Apr-26": 0.086463,
          "May-26": 0.090261,
          "Jun-26": 0.095052,
          "Jul-26": 0.082621,
          "Aug-26": 0.076895,
          "Sep-26": 0.063463
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 1e-06,
          "May-26": 1e-06,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11728407",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11728407",
      "shortName": "Director CIF 11728407",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10228955",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Yogadinusha Yogagopalakrishnan",
      "shortName": "Yogadinusha Yogagopalakrishnan",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.00019,
        "monthlyBalances": {
          "Jan-26": 0.000192,
          "Feb-26": 0.000193,
          "Mar-26": 0.000192,
          "Apr-26": 0.000196,
          "May-26": 0.000203,
          "Jun-26": 0.000206,
          "Jul-26": 0.000207,
          "Aug-26": 0.000207,
          "Sep-26": 0.000203
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10916353",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51039588",
    "parentCompanyName": "Hayleys PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Mohamed Jamaldeen",
      "shortName": "Mohamed Jamaldeen",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Hayleys PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.000225,
        "monthlyBalances": {
          "Jan-26": 0.000538,
          "Feb-26": 0.000748,
          "Mar-26": 0.001203,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.004676,
          "Aug-26": 0.009247,
          "Sep-26": 0.010078
        },
        "monthlyRevenue": {
          "Jan-26": 0.000747,
          "Feb-26": -4e-06,
          "Mar-26": 0.002012,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.009214,
          "Aug-26": -7.2e-05,
          "Sep-26": 0.000312
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1e-06,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 1e-06,
          "Apr-26": 3e-06,
          "May-26": 3e-06,
          "Jun-26": 3e-06,
          "Jul-26": 1e-06,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10477785",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Mohan Pandithage",
      "shortName": "Mohan Pandithage",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1.122581,
        "monthlyBalances": {
          "Jan-26": 0.017095,
          "Feb-26": 0.004199,
          "Mar-26": 0.052156,
          "Apr-26": 1.294808,
          "May-26": 1.253807,
          "Jun-26": 0.610803,
          "Jul-26": 0.207706,
          "Aug-26": 0.523576,
          "Sep-26": 3.994416
        },
        "monthlyRevenue": {
          "Jan-26": -0.000451,
          "Feb-26": 0.001054,
          "Mar-26": -0.000343,
          "Apr-26": -0.005536,
          "May-26": 0.013769,
          "Jun-26": 0.000748,
          "Jul-26": 0.000154,
          "Aug-26": -0.003745,
          "Sep-26": -0.026596
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.000812,
          "Jul-26": 0.036445,
          "Aug-26": 0.045433,
          "Sep-26": 0.000641
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11278026",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Ragunathan Srivalli Sharmila",
      "shortName": "Ragunathan Srivalli Sharmila",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.37903,
        "monthlyBalances": {
          "Jan-26": 0.283676,
          "Feb-26": 0.205777,
          "Mar-26": 0.118051,
          "Apr-26": 0.102293,
          "May-26": 0.112682,
          "Jun-26": 0.106434,
          "Jul-26": 0.05078,
          "Aug-26": 0.033927,
          "Sep-26": 0.044654
        },
        "monthlyRevenue": {
          "Jan-26": -0.001353,
          "Feb-26": -0.001207,
          "Mar-26": -0.000772,
          "Apr-26": 0.000358,
          "May-26": 0.000115,
          "Jun-26": -0.000335,
          "Jul-26": 0.007137,
          "Aug-26": 0.000368,
          "Sep-26": 0.000285
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.049418,
        "monthlyBalances": {
          "Jan-26": 0.047266,
          "Feb-26": 0.046461,
          "Mar-26": 0.054253,
          "Apr-26": 0.073741,
          "May-26": 0.074694,
          "Jun-26": 0.216354,
          "Jul-26": 0.146942,
          "Aug-26": 0.144392,
          "Sep-26": 0.150564
        },
        "monthlyRevenue": {
          "Jan-26": 0.000221,
          "Feb-26": 0.000197,
          "Mar-26": 0.000252,
          "Apr-26": 0.00034,
          "May-26": 0.000383,
          "Jun-26": 0.001233,
          "Jul-26": 0.000852,
          "Aug-26": 0.000837,
          "Sep-26": 0.000845
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 20.0,
        "monthlyBalances": {
          "Jan-26": 20.0,
          "Feb-26": 20.0,
          "Mar-26": 20.0,
          "Apr-26": 20.0,
          "May-26": 20.0,
          "Jun-26": 20.0225,
          "Jul-26": 20.0,
          "Aug-26": 20.0,
          "Sep-26": 20.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.002072,
          "Feb-26": 0.001872,
          "Mar-26": 0.002072,
          "Apr-26": 0.002005,
          "May-26": 0.002072,
          "Jun-26": 0.006068,
          "Jul-26": 0.006332,
          "Aug-26": 0.006332,
          "Sep-26": 0.006128
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10508356",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Sujeewa Rajapakse",
      "shortName": "Sujeewa Rajapakse",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.001082,
          "Mar-26": 0.033384,
          "Apr-26": 0.012795,
          "May-26": 0.233297,
          "Jun-26": 0.092457,
          "Jul-26": 0.011106,
          "Aug-26": 0.035106,
          "Sep-26": 0.016571
        },
        "monthlyRevenue": {
          "Jan-26": 0.000941,
          "Feb-26": 0.001053,
          "Mar-26": -0.000177,
          "Apr-26": 0.003006,
          "May-26": 0.003113,
          "Jun-26": 0.000508,
          "Jul-26": 0.00054,
          "Aug-26": 0.002008,
          "Sep-26": 0.00976
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1.000334,
        "monthlyBalances": {
          "Jan-26": 1.001864,
          "Feb-26": 1.003395,
          "Mar-26": 0.93991,
          "Apr-26": 0.0,
          "May-26": 1.143559,
          "Jun-26": 0.407636,
          "Jul-26": 0.407636,
          "Aug-26": 0.407636,
          "Sep-26": 0.382651
        },
        "monthlyRevenue": {
          "Jan-26": 0.004552,
          "Feb-26": 0.004118,
          "Mar-26": 0.004271,
          "Apr-26": 0.0,
          "May-26": 0.007667,
          "Jun-26": 0.002928,
          "Jul-26": 0.003036,
          "Aug-26": 0.003036,
          "Sep-26": 0.002759
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.063445,
        "monthlyBalances": {
          "Jan-26": 0.052583,
          "Feb-26": 0.02377,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.045141,
          "Jul-26": 0.050674,
          "Aug-26": 0.003395,
          "Sep-26": 0.006952
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11728410",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Sarath Ananda Kumara Abayawardana",
      "shortName": "Sarath Ananda Kumara Abayawardana",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.172858,
          "Jun-26": 0.411827,
          "Jul-26": 0.20776,
          "Aug-26": 0.071349,
          "Sep-26": 0.647654
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.001204,
          "Jun-26": -0.003093,
          "Jul-26": -0.001623,
          "Aug-26": -0.000557,
          "Sep-26": -0.004399
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 3.894713,
          "Jun-26": 3.679974,
          "Jul-26": 3.190209,
          "Aug-26": 3.017795,
          "Sep-26": 3.007824
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.017592,
          "Jun-26": 0.018367,
          "Jul-26": 0.016182,
          "Aug-26": 0.01502,
          "Sep-26": 0.014426
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 8.022763,
          "Jun-26": 8.022763,
          "Jul-26": 8.022763,
          "Aug-26": 8.022763,
          "Sep-26": 8.350356
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.015319,
          "Jun-26": -0.014825,
          "Jul-26": -0.015207,
          "Aug-26": -0.015319,
          "Sep-26": -0.001086
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.067738
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10385367",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Sarath Clement Ganegoda",
      "shortName": "Sarath Clement Ganegoda",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.746581,
        "monthlyBalances": {
          "Jan-26": 1.098493,
          "Feb-26": 0.806729,
          "Mar-26": 1.386258,
          "Apr-26": 1.169731,
          "May-26": 0.574669,
          "Jun-26": 0.377581,
          "Jul-26": 0.775769,
          "Aug-26": 0.994961,
          "Sep-26": 0.780567
        },
        "monthlyRevenue": {
          "Jan-26": 0.010268,
          "Feb-26": 0.007249,
          "Mar-26": 0.031535,
          "Apr-26": 0.030364,
          "May-26": 0.000508,
          "Jun-26": 0.006178,
          "Jul-26": 0.02302,
          "Aug-26": 0.013528,
          "Sep-26": -0.002365
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.000689,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11185534",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11185534",
      "shortName": "Director CIF 11185534",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11727955",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50688593",
    "parentCompanyName": "Haycarb PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Swbrjm Arjun Michael Sabaragamuwe Senaratna",
      "shortName": "Swbrjm Arjun Michael Sabaragamuwe Senaratna",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Haycarb PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 3.2e-05,
          "Aug-26": 0.002449,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.099166,
          "Jun-26": 0.101608,
          "Jul-26": 0.100773,
          "Aug-26": 0.099062,
          "Sep-26": 0.098419
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.000295,
          "Jun-26": 0.000299,
          "Jul-26": 0.000298,
          "Aug-26": 0.00383,
          "Sep-26": 0.000279
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.071622,
          "Jun-26": 0.072202,
          "Jul-26": 0.072202,
          "Aug-26": 0.072202,
          "Sep-26": 0.072202
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.000483,
          "Jun-26": 0.000527,
          "Jul-26": 0.000549,
          "Aug-26": 0.000549,
          "Sep-26": 0.000531
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11770636",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100126",
    "parentCompanyName": "Ceylon Grain Elevators PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11770636",
      "shortName": "Director CIF 11770636",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Ceylon Grain Elevators PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11770639",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100126",
    "parentCompanyName": "Ceylon Grain Elevators PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11770639",
      "shortName": "Director CIF 11770639",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Ceylon Grain Elevators PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11701468",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100126",
    "parentCompanyName": "Ceylon Grain Elevators PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Wickrema Senaka Weerasooria",
      "shortName": "Wickrema Senaka Weerasooria",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Ceylon Grain Elevators PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.004528,
          "Sep-26": 0.032209
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": -3.5e-05,
          "Sep-26": -0.000244
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.645001,
          "Jun-26": 0.645956,
          "Jul-26": 0.646912,
          "Aug-26": 0.647901,
          "Sep-26": 0.656635
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.003172,
          "Jun-26": 0.003577,
          "Jul-26": 0.00372,
          "Aug-26": 0.003726,
          "Sep-26": 0.003654
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 7.5,
          "Jun-26": 7.5,
          "Jul-26": 7.5,
          "Aug-26": 7.5,
          "Sep-26": 7.5
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.012698,
          "Jun-26": -0.012288,
          "Jul-26": -0.012698,
          "Aug-26": -0.012698,
          "Sep-26": -0.009792
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10253923",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50100126",
    "parentCompanyName": "Ceylon Grain Elevators PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Rajanayagam N Asirwatham",
      "shortName": "Rajanayagam N Asirwatham",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Ceylon Grain Elevators PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 3.304878,
          "Jun-26": 3.380811,
          "Jul-26": 3.458404,
          "Aug-26": 3.540422,
          "Sep-26": 3.624387
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.774178,
        "monthlyBalances": {
          "Jan-26": 0.793165,
          "Feb-26": 0.695487,
          "Mar-26": 1e-06,
          "Apr-26": 1e-06,
          "May-26": 1e-06,
          "Jun-26": 1e-06,
          "Jul-26": 1e-06,
          "Aug-26": 1e-06,
          "Sep-26": 1e-06
        },
        "monthlyRevenue": {
          "Jan-26": 0.013979,
          "Feb-26": -0.006135,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.003046,
        "monthlyBalances": {
          "Jan-26": 0.00305,
          "Feb-26": 0.003047,
          "Mar-26": 0.003074,
          "Apr-26": 0.003119,
          "May-26": 18.839263,
          "Jun-26": 18.931361,
          "Jul-26": 18.833379,
          "Aug-26": 19.008214,
          "Sep-26": 18.974319
        },
        "monthlyRevenue": {
          "Jan-26": 1.1e-05,
          "Feb-26": 1e-05,
          "Mar-26": 1.1e-05,
          "Apr-26": 1.1e-05,
          "May-26": 0.065723,
          "Jun-26": 0.063109,
          "Jul-26": 0.065313,
          "Aug-26": 0.067171,
          "Sep-26": 0.066805
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 23.062424,
        "monthlyBalances": {
          "Jan-26": 23.112918,
          "Feb-26": 23.110292,
          "Mar-26": 21.885151,
          "Apr-26": 19.995565,
          "May-26": 37.778526,
          "Jun-26": 24.527435,
          "Jul-26": 19.068301,
          "Aug-26": 19.125528,
          "Sep-26": 19.018771
        },
        "monthlyRevenue": {
          "Jan-26": 0.005566,
          "Feb-26": 0.00492,
          "Mar-26": 0.010846,
          "Apr-26": 0.004597,
          "May-26": 0.042261,
          "Jun-26": 0.040477,
          "Jul-26": 0.012014,
          "Aug-26": 0.012537,
          "Sep-26": 0.012673
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723747",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723747",
      "shortName": "Director CIF 11723747",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Dialog Axiata PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723746",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723746",
      "shortName": "Director CIF 11723746",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Dialog Axiata PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11556267",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11556267",
      "shortName": "Director CIF 11556267",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Dialog Axiata PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723756",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723756",
      "shortName": "Director CIF 11723756",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Dialog Axiata PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723754",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723754",
      "shortName": "Director CIF 11723754",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Dialog Axiata PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723757",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50201635",
    "parentCompanyName": "Dialog Axiata PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723757",
      "shortName": "Director CIF 11723757",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Dialog Axiata PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10409077",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50205063",
    "parentCompanyName": "Asiri Hospital Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 10409077",
      "shortName": "Director CIF 10409077",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Asiri Hospital Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723287",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50205063",
    "parentCompanyName": "Asiri Hospital Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723287",
      "shortName": "Director CIF 11723287",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Asiri Hospital Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11723284",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50205063",
    "parentCompanyName": "Asiri Hospital Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11723284",
      "shortName": "Director CIF 11723284",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Asiri Hospital Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10200869",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50205063",
    "parentCompanyName": "Asiri Hospital Holdings PLC",
    "reportedLimitMn": 22.0,
    "company": {
      "legalName": "Sivakumar Selliah",
      "shortName": "Sivakumar Selliah",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Asiri Hospital Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 6.458474,
        "monthlyBalances": {
          "Jan-26": 6.471891,
          "Feb-26": 6.492534,
          "Mar-26": 6.507785,
          "Apr-26": 6.62181,
          "May-26": 6.975979,
          "Jun-26": 7.081066,
          "Jul-26": 7.006784,
          "Aug-26": 8.032092,
          "Sep-26": 7.038889
        },
        "monthlyRevenue": {
          "Jan-26": 0.012982,
          "Feb-26": 0.011727,
          "Mar-26": 0.01298,
          "Apr-26": 0.012709,
          "May-26": 0.014423,
          "Jun-26": 0.014231,
          "Jul-26": 0.014164,
          "Aug-26": 0.022078,
          "Sep-26": 0.017445
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 70.0,
          "Jun-26": 70.0,
          "Jul-26": 70.0,
          "Aug-26": 57.096774,
          "Sep-26": 50.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.193112,
          "Jun-26": -0.186883,
          "Jul-26": -0.192135,
          "Aug-26": -0.06837,
          "Sep-26": 0.00023
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.00023,
          "Jun-26": 0.00023,
          "Jul-26": 0.00023,
          "Aug-26": 0.00023,
          "Sep-26": 0.00023
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 2e-06,
          "Jun-26": 2e-06,
          "Jul-26": 2e-06,
          "Aug-26": 2e-06,
          "Sep-26": 2e-06
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10223537",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50205063",
    "parentCompanyName": "Asiri Hospital Holdings PLC",
    "reportedLimitMn": 23.20672,
    "company": {
      "legalName": "Sudarshan Ahangama",
      "shortName": "Sudarshan Ahangama",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Asiri Hospital Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 4.855359,
        "monthlyBalances": {
          "Jan-26": 5.217014,
          "Feb-26": 6.000668,
          "Mar-26": 4.655208,
          "Apr-26": 3.584655,
          "May-26": 22.856107,
          "Jun-26": 23.105931,
          "Jul-26": 23.037746,
          "Aug-26": 23.151203,
          "Sep-26": 22.050628
        },
        "monthlyRevenue": {
          "Jan-26": 0.006518,
          "Feb-26": 0.008139,
          "Mar-26": 0.018439,
          "Apr-26": 0.007673,
          "May-26": 0.026529,
          "Jun-26": 0.009338,
          "Jul-26": 0.008644,
          "Aug-26": 0.009499,
          "Sep-26": 0.020263
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.305051,
        "monthlyBalances": {
          "Jan-26": 0.376899,
          "Feb-26": 1.156388,
          "Mar-26": 1.443451,
          "Apr-26": 1.089674,
          "May-26": 2.196172,
          "Jun-26": 1.048228,
          "Jul-26": 2.2982,
          "Aug-26": 2.278506,
          "Sep-26": 2.29974
        },
        "monthlyRevenue": {
          "Jan-26": -0.006928,
          "Feb-26": -0.006244,
          "Mar-26": 0.011249,
          "Apr-26": -0.007083,
          "May-26": -0.011725,
          "Jun-26": 0.02049,
          "Jul-26": 0.00144,
          "Aug-26": 0.044733,
          "Sep-26": 0.069853
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 1.727301,
          "Apr-26": 0.0,
          "May-26": 0.001561,
          "Jun-26": 0.001561,
          "Jul-26": 0.001561,
          "Aug-26": 0.001561,
          "Sep-26": 1.517317
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 7.232277,
        "monthlyBalances": {
          "Jan-26": 7.232277,
          "Feb-26": 7.232277,
          "Mar-26": 7.087115,
          "Apr-26": 6.932277,
          "May-26": 7.104436,
          "Jun-26": 7.164318,
          "Jul-26": 7.164318,
          "Aug-26": 7.164318,
          "Sep-26": 7.164318
        },
        "monthlyRevenue": {
          "Jan-26": 0.000584,
          "Feb-26": 0.000527,
          "Mar-26": 0.008462,
          "Apr-26": 0.000523,
          "May-26": 9.3e-05,
          "Jun-26": 3.9e-05,
          "Jul-26": 4e-05,
          "Aug-26": 4e-05,
          "Sep-26": 3.9e-05
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.010268,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10202770",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50205063",
    "parentCompanyName": "Asiri Hospital Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Samantha Aruna Bandara Rajapaksa",
      "shortName": "Samantha Aruna Bandara Rajapaksa",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Asiri Hospital Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.558359,
        "monthlyBalances": {
          "Jan-26": 0.058075,
          "Feb-26": 0.143305,
          "Mar-26": 0.026065,
          "Apr-26": 0.153975,
          "May-26": 0.390217,
          "Jun-26": 0.51527,
          "Jul-26": 1.403701,
          "Aug-26": 0.563851,
          "Sep-26": 1.296968
        },
        "monthlyRevenue": {
          "Jan-26": 0.002086,
          "Feb-26": 0.000416,
          "Mar-26": 0.022777,
          "Apr-26": 0.007107,
          "May-26": 0.009398,
          "Jun-26": -0.001126,
          "Jul-26": -0.008702,
          "Aug-26": 0.032692,
          "Sep-26": 0.005297
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 10.406165,
        "monthlyBalances": {
          "Jan-26": 1.458287,
          "Feb-26": 1.564496,
          "Mar-26": 1.903916,
          "Apr-26": 2.980772,
          "May-26": 42.082142,
          "Jun-26": 29.493871,
          "Jul-26": 12.889436,
          "Aug-26": 5.21183,
          "Sep-26": 5.106392
        },
        "monthlyRevenue": {
          "Jan-26": 0.005411,
          "Feb-26": 0.004966,
          "Mar-26": 0.006973,
          "Apr-26": 0.009938,
          "May-26": 0.143648,
          "Jun-26": 0.20695,
          "Jul-26": 0.054276,
          "Aug-26": 0.0222,
          "Sep-26": 0.020427
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 5.079925,
        "monthlyBalances": {
          "Jan-26": 5.085457,
          "Feb-26": 4.61721,
          "Mar-26": 4.190157,
          "Apr-26": 4.250833,
          "May-26": 4.395911,
          "Jun-26": 4.608476,
          "Jul-26": 4.723166,
          "Aug-26": 4.66933,
          "Sep-26": 4.63499
        },
        "monthlyRevenue": {
          "Jan-26": 0.001486,
          "Feb-26": 0.001236,
          "Mar-26": 0.001089,
          "Apr-26": 0.00108,
          "May-26": 0.001127,
          "Jun-26": 0.001363,
          "Jul-26": 0.00144,
          "Aug-26": 0.001632,
          "Sep-26": 0.001301
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.004303,
          "Jun-26": 0.003332,
          "Jul-26": 0.003332,
          "Aug-26": 0.027443,
          "Sep-26": 0.003332
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 1.299999,
        "monthlyBalances": {
          "Jan-26": 0.001061,
          "Feb-26": 0.004763,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.80447,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10396154",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "P G M Asanga Perera",
      "shortName": "P G M Asanga Perera",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.000447,
        "monthlyBalances": {
          "Jan-26": 0.000447,
          "Feb-26": 0.000447,
          "Mar-26": 0.000447,
          "Apr-26": 0.000447,
          "May-26": 0.000447,
          "Jun-26": 0.000447,
          "Jul-26": 0.000447,
          "Aug-26": 0.000447,
          "Sep-26": 0.000447
        },
        "monthlyRevenue": {
          "Jan-26": 3e-06,
          "Feb-26": 3e-06,
          "Mar-26": 3e-06,
          "Apr-26": 3e-06,
          "May-26": 3e-06,
          "Jun-26": 3e-06,
          "Jul-26": 3e-06,
          "Aug-26": 3e-06,
          "Sep-26": 3e-06
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10221227",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 10221227",
      "shortName": "Director CIF 10221227",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10507404",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": 10.0,
    "company": {
      "legalName": "Nihal Fonseka",
      "shortName": "Nihal Fonseka",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.180946,
        "monthlyBalances": {
          "Jan-26": 0.570826,
          "Feb-26": 0.499194,
          "Mar-26": 0.472828,
          "Apr-26": 0.430795,
          "May-26": 1.048784,
          "Jun-26": 0.636273,
          "Jul-26": 0.50641,
          "Aug-26": 0.520408,
          "Sep-26": 0.454678
        },
        "monthlyRevenue": {
          "Jan-26": -0.004293,
          "Feb-26": -0.003106,
          "Mar-26": -0.002211,
          "Apr-26": -0.002357,
          "May-26": -0.005043,
          "Jun-26": -0.001225,
          "Jul-26": -0.000842,
          "Aug-26": -0.001696,
          "Sep-26": 0.020063
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1.911328,
        "monthlyBalances": {
          "Jan-26": 1.933561,
          "Feb-26": 1.908191,
          "Mar-26": 1.906005,
          "Apr-26": 1.888476,
          "May-26": 12.995996,
          "Jun-26": 12.515241,
          "Jul-26": 12.071072,
          "Aug-26": 12.156911,
          "Sep-26": 11.692592
        },
        "monthlyRevenue": {
          "Jan-26": 0.006042,
          "Feb-26": 0.005302,
          "Mar-26": 0.005828,
          "Apr-26": 0.005672,
          "May-26": 0.030249,
          "Jun-26": 0.027985,
          "Jul-26": 0.026768,
          "Aug-26": 0.028037,
          "Sep-26": 0.024732
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 17.017383,
        "monthlyBalances": {
          "Jan-26": 17.031557,
          "Feb-26": 17.020653,
          "Mar-26": 17.136792,
          "Apr-26": 17.327022,
          "May-26": 19.113485,
          "Jun-26": 19.709442,
          "Jul-26": 19.746831,
          "Aug-26": 19.594646,
          "Sep-26": 19.486985
        },
        "monthlyRevenue": {
          "Jan-26": 0.004811,
          "Feb-26": 0.004313,
          "Mar-26": 0.004233,
          "Apr-26": 0.004336,
          "May-26": 0.006199,
          "Jun-26": 0.006118,
          "Jul-26": 0.006115,
          "Aug-26": 0.006264,
          "Sep-26": 0.005188
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 2.1e-05,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11155133",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Mohamed Ashroff Omar",
      "shortName": "Mohamed Ashroff Omar",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.038968,
          "Feb-26": 0.271317,
          "Mar-26": 0.33413,
          "Apr-26": 0.478012,
          "May-26": 1.57082,
          "Jun-26": 1.494067,
          "Jul-26": 1.181283,
          "Aug-26": 2.074964,
          "Sep-26": 0.907415
        },
        "monthlyRevenue": {
          "Jan-26": 0.069846,
          "Feb-26": 0.006813,
          "Mar-26": 0.002279,
          "Apr-26": 0.009553,
          "May-26": 0.011645,
          "Jun-26": -0.008403,
          "Jul-26": 0.025103,
          "Aug-26": 0.000511,
          "Sep-26": 0.013095
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 42.911867,
        "monthlyBalances": {
          "Jan-26": 25.791218,
          "Feb-26": 11.901253,
          "Mar-26": 130.290525,
          "Apr-26": 54.281661,
          "May-26": 22.480391,
          "Jun-26": 26.093273,
          "Jul-26": 58.691344,
          "Aug-26": 98.055749,
          "Sep-26": 50.255219
        },
        "monthlyRevenue": {
          "Jan-26": 0.118881,
          "Feb-26": 0.049496,
          "Mar-26": 0.580843,
          "Apr-26": 0.242686,
          "May-26": 0.111506,
          "Jun-26": 0.145497,
          "Jul-26": 0.338157,
          "Aug-26": 0.564684,
          "Sep-26": 0.280268
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 16.119098,
        "monthlyBalances": {
          "Jan-26": 17.081274,
          "Feb-26": 17.081274,
          "Mar-26": 18.774265,
          "Apr-26": 43.424716,
          "May-26": 44.323795,
          "Jun-26": 44.983233,
          "Jul-26": 45.034023,
          "Aug-26": 44.715408,
          "Sep-26": 44.535612
        },
        "monthlyRevenue": {
          "Jan-26": 2.3e-05,
          "Feb-26": 2.1e-05,
          "Mar-26": -0.000335,
          "Apr-26": -0.001281,
          "May-26": -0.001284,
          "Jun-26": -0.000264,
          "Jul-26": -0.000733,
          "Aug-26": 0.001455,
          "Sep-26": 0.003367
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 10.15595,
          "Apr-26": 0.789009,
          "May-26": 0.0,
          "Jun-26": 1.666667,
          "Jul-26": 0.813879,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10396156",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Marie Premila Perera Seneviratne",
      "shortName": "Marie Premila Perera Seneviratne",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.009654,
        "monthlyBalances": {
          "Jan-26": 0.014072,
          "Feb-26": 0.012252,
          "Mar-26": 0.007447,
          "Apr-26": 0.013497,
          "May-26": 0.174662,
          "Jun-26": 0.201557,
          "Jul-26": 0.220871,
          "Aug-26": 0.247634,
          "Sep-26": 0.605014
        },
        "monthlyRevenue": {
          "Jan-26": 5.3e-05,
          "Feb-26": 6e-06,
          "Mar-26": 6.3e-05,
          "Apr-26": 0.000226,
          "May-26": 0.004011,
          "Jun-26": 0.003624,
          "Jul-26": -0.001525,
          "Aug-26": -0.001738,
          "Sep-26": 0.003175
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.121822,
        "monthlyBalances": {
          "Jan-26": 0.154535,
          "Feb-26": 0.184397,
          "Mar-26": 0.212909,
          "Apr-26": 0.420727,
          "May-26": 0.906398,
          "Jun-26": 0.840484,
          "Jul-26": 1.246825,
          "Aug-26": 1.637592,
          "Sep-26": 1.993483
        },
        "monthlyRevenue": {
          "Jan-26": 0.000719,
          "Feb-26": 0.000772,
          "Mar-26": 0.000984,
          "Apr-26": 0.001918,
          "May-26": 0.00435,
          "Jun-26": 0.004283,
          "Jul-26": 0.006711,
          "Aug-26": 0.00897,
          "Sep-26": 0.010667
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 53.662441,
        "monthlyBalances": {
          "Jan-26": 53.81056,
          "Feb-26": 53.917761,
          "Mar-26": 87.650987,
          "Apr-26": 104.171143,
          "May-26": 171.542755,
          "Jun-26": 172.214314,
          "Jul-26": 174.173302,
          "Aug-26": 174.829168,
          "Sep-26": 174.476678
        },
        "monthlyRevenue": {
          "Jan-26": 0.002526,
          "Feb-26": 0.001267,
          "Mar-26": 0.001142,
          "Apr-26": -0.001436,
          "May-26": -0.160985,
          "Jun-26": -0.062171,
          "Jul-26": -0.011427,
          "Aug-26": 0.013658,
          "Sep-26": 0.012857
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.000234,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10428075",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": 0.989,
    "company": {
      "legalName": "Damian Amal Cabraal",
      "shortName": "Damian Amal Cabraal",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.014579,
          "Jun-26": 0.024129,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.058621,
        "monthlyBalances": {
          "Jan-26": 0.11672,
          "Feb-26": 0.134066,
          "Mar-26": 0.149723,
          "Apr-26": 0.177845,
          "May-26": 0.421775,
          "Jun-26": 0.546576,
          "Jul-26": 0.136686,
          "Aug-26": 0.147955,
          "Sep-26": 0.070467
        },
        "monthlyRevenue": {
          "Jan-26": 0.000887,
          "Feb-26": 0.00017,
          "Mar-26": 0.003574,
          "Apr-26": 0.00938,
          "May-26": 5.5e-05,
          "Jun-26": -0.002577,
          "Jul-26": 0.002303,
          "Aug-26": 9.3e-05,
          "Sep-26": 0.010133
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 5.31837,
        "monthlyBalances": {
          "Jan-26": 4.817584,
          "Feb-26": 5.528281,
          "Mar-26": 6.47327,
          "Apr-26": 3.921651,
          "May-26": 5.340661,
          "Jun-26": 5.639016,
          "Jul-26": 9.660736,
          "Aug-26": 4.427302,
          "Sep-26": 3.506635
        },
        "monthlyRevenue": {
          "Jan-26": 0.022567,
          "Feb-26": 0.022817,
          "Mar-26": 0.030165,
          "Apr-26": 0.018021,
          "May-26": 0.026009,
          "Jun-26": 0.03003,
          "Jul-26": 0.041088,
          "Aug-26": 0.02443,
          "Sep-26": 0.018344
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 56.526908,
        "monthlyBalances": {
          "Jan-26": 56.583014,
          "Feb-26": 56.539852,
          "Mar-26": 56.999568,
          "Apr-26": 217.782815,
          "May-26": 272.787094,
          "Jun-26": 278.603377,
          "Jul-26": 278.212504,
          "Aug-26": 283.076601,
          "Sep-26": 279.941869
        },
        "monthlyRevenue": {
          "Jan-26": 0.003302,
          "Feb-26": 0.002826,
          "Mar-26": 8.7e-05,
          "Apr-26": -0.006484,
          "May-26": -0.008197,
          "Jun-26": -0.009928,
          "Jul-26": -0.04478,
          "Aug-26": 0.010287,
          "Sep-26": -0.008088
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.189355,
          "Apr-26": 6.37468,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10218162",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Rusi Sohli Captain",
      "shortName": "Rusi Sohli Captain",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.353387,
        "monthlyBalances": {
          "Jan-26": 0.114793,
          "Feb-26": 0.022185,
          "Mar-26": 0.246069,
          "Apr-26": 0.681003,
          "May-26": 0.836898,
          "Jun-26": 0.127794,
          "Jul-26": 0.244679,
          "Aug-26": 0.084851,
          "Sep-26": 0.182428
        },
        "monthlyRevenue": {
          "Jan-26": -0.001738,
          "Feb-26": 0.003506,
          "Mar-26": 0.005031,
          "Apr-26": 0.009326,
          "May-26": -0.003024,
          "Jun-26": 0.002619,
          "Jul-26": -0.000995,
          "Aug-26": 0.001961,
          "Sep-26": -0.001059
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.035209,
        "monthlyBalances": {
          "Jan-26": 0.03293,
          "Feb-26": 0.03293,
          "Mar-26": 0.03293,
          "Apr-26": 0.03293,
          "May-26": 0.03293,
          "Jun-26": 0.03293,
          "Jul-26": 0.03293,
          "Aug-26": 0.03293,
          "Sep-26": 0.03293
        },
        "monthlyRevenue": {
          "Jan-26": 0.000205,
          "Feb-26": 0.000185,
          "Mar-26": 0.000205,
          "Apr-26": 0.000202,
          "May-26": 0.000218,
          "Jun-26": 0.000236,
          "Jul-26": 0.000245,
          "Aug-26": 0.000245,
          "Sep-26": 0.000237
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.38554,
        "monthlyBalances": {
          "Jan-26": 0.38554,
          "Feb-26": 0.38554,
          "Mar-26": 0.38554,
          "Apr-26": 0.38554,
          "May-26": 0.38554,
          "Jun-26": 0.38554,
          "Jul-26": 0.38554,
          "Aug-26": 0.38554,
          "Sep-26": 0.38554
        },
        "monthlyRevenue": {
          "Jan-26": 7.9e-05,
          "Feb-26": 7.1e-05,
          "Mar-26": 7.9e-05,
          "Apr-26": 7.6e-05,
          "May-26": 7.9e-05,
          "Jun-26": 7.6e-05,
          "Jul-26": 7.9e-05,
          "Aug-26": 7.9e-05,
          "Sep-26": 7.6e-05
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.245174,
          "Jun-26": 0.15082,
          "Jul-26": 0.060031,
          "Aug-26": 0.082036,
          "Sep-26": 0.043573
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10294918",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50218745",
    "parentCompanyName": "John Keells Holdings PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "S S H Wijayasuriya",
      "shortName": "S S H Wijayasuriya",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 John Keells Holdings PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.002561,
        "monthlyBalances": {
          "Jan-26": 0.003663,
          "Feb-26": 0.006716,
          "Mar-26": 0.004272,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.546279,
        "monthlyBalances": {
          "Jan-26": 0.465979,
          "Feb-26": 0.538209,
          "Mar-26": 0.606647,
          "Apr-26": 0.69185,
          "May-26": 0.725144,
          "Jun-26": 3.442338,
          "Jul-26": 5.218627,
          "Aug-26": 4.612712,
          "Sep-26": 4.658869
        },
        "monthlyRevenue": {
          "Jan-26": 0.002117,
          "Feb-26": 0.002209,
          "Mar-26": 0.002757,
          "Apr-26": 0.003221,
          "May-26": 0.003566,
          "Jun-26": 0.019138,
          "Jul-26": 0.030011,
          "Aug-26": 0.026527,
          "Sep-26": 0.026428
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.000411,
          "Apr-26": 0.001415,
          "May-26": 0.002221,
          "Jun-26": 0.005952,
          "Jul-26": 0.005952,
          "Aug-26": 0.005952,
          "Sep-26": 0.005952
        },
        "monthlyRevenue": {
          "Jan-26": 0.000164,
          "Feb-26": -9.6e-05,
          "Mar-26": 0.00018,
          "Apr-26": 9e-06,
          "May-26": 1.4e-05,
          "Jun-26": 4.3e-05,
          "Jul-26": 4.5e-05,
          "Aug-26": 4.5e-05,
          "Sep-26": 4.4e-05
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10454914",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50252639",
    "parentCompanyName": "L O L C Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Kandiah Sundararaj",
      "shortName": "Kandiah Sundararaj",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 L O L C Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.502295,
        "monthlyBalances": {
          "Jan-26": 0.459364,
          "Feb-26": 0.422382,
          "Mar-26": 0.379052,
          "Apr-26": 0.344751,
          "May-26": 0.46623,
          "Jun-26": 0.403968,
          "Jul-26": 0.344533,
          "Aug-26": 0.587549,
          "Sep-26": 0.572055
        },
        "monthlyRevenue": {
          "Jan-26": -0.004054,
          "Feb-26": 0.018986,
          "Mar-26": -0.002588,
          "Apr-26": 0.003209,
          "May-26": -0.003224,
          "Jun-26": -0.00272,
          "Jul-26": -0.002492,
          "Aug-26": 0.0031,
          "Sep-26": -0.00083
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.016129,
          "Feb-26": 0.064154,
          "Mar-26": 0.083026,
          "Apr-26": 0.179691,
          "May-26": 0.39926,
          "Jun-26": 0.563348,
          "Jul-26": 0.799994,
          "Aug-26": 1.00185,
          "Sep-26": 0.734041
        },
        "monthlyRevenue": {
          "Jan-26": 0.000101,
          "Feb-26": 0.000468,
          "Mar-26": 0.000518,
          "Apr-26": 0.001005,
          "May-26": 0.002409,
          "Jun-26": 0.003518,
          "Jul-26": 0.003914,
          "Aug-26": 0.004838,
          "Sep-26": 0.004076
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.967742,
          "Feb-26": 3.0,
          "Mar-26": 3.0,
          "Apr-26": 3.0,
          "May-26": 3.0,
          "Jun-26": 3.0,
          "Jul-26": 3.0,
          "Aug-26": 3.0,
          "Sep-26": 6.0
        },
        "monthlyRevenue": {
          "Jan-26": -3e-06,
          "Feb-26": -9e-06,
          "Mar-26": -1e-05,
          "Apr-26": -1e-05,
          "May-26": -1e-05,
          "Jun-26": -1e-05,
          "Jul-26": -0.000244,
          "Aug-26": -1e-05,
          "Sep-26": 0.000367
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11078980",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50252639",
    "parentCompanyName": "L O L C Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11078980",
      "shortName": "Director CIF 11078980",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 L O L C Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10228862",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50252639",
    "parentCompanyName": "L O L C Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 10228862",
      "shortName": "Director CIF 10228862",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 L O L C Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11422572",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50252639",
    "parentCompanyName": "L O L C Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11422572",
      "shortName": "Director CIF 11422572",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 L O L C Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10305480",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50252639",
    "parentCompanyName": "L O L C Finance PLC",
    "reportedLimitMn": 18.0,
    "company": {
      "legalName": "Francisco Kankanamalage Conrad Prasad Niroshan Dias",
      "shortName": "Francisco Kankanamalage Conrad Prasad Niroshan Dias",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 L O L C Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1.393723,
        "monthlyBalances": {
          "Jan-26": 0.541006,
          "Feb-26": 0.467402,
          "Mar-26": 0.385213,
          "Apr-26": 0.265833,
          "May-26": 0.432654,
          "Jun-26": 0.315304,
          "Jul-26": 0.319664,
          "Aug-26": 0.419242,
          "Sep-26": 0.702942
        },
        "monthlyRevenue": {
          "Jan-26": -0.003514,
          "Feb-26": -0.002429,
          "Mar-26": -0.002565,
          "Apr-26": -0.001726,
          "May-26": 0.000898,
          "Jun-26": -0.001742,
          "Jul-26": -0.000235,
          "Aug-26": -0.003275,
          "Sep-26": -0.002815
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 16.221509,
        "monthlyBalances": {
          "Jan-26": 5.009448,
          "Feb-26": 1.688165,
          "Mar-26": 23.241272,
          "Apr-26": 25.777398,
          "May-26": 26.603536,
          "Jun-26": 25.210799,
          "Jul-26": 29.439713,
          "Aug-26": 30.505201,
          "Sep-26": 29.752976
        },
        "monthlyRevenue": {
          "Jan-26": 0.016221,
          "Feb-26": 0.005372,
          "Mar-26": 0.051783,
          "Apr-26": 0.057958,
          "May-26": 0.074639,
          "Jun-26": 0.087302,
          "Jul-26": 0.104565,
          "Aug-26": 0.107035,
          "Sep-26": 0.098192
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 13.133771,
        "monthlyBalances": {
          "Jan-26": 13.162221,
          "Feb-26": 13.307877,
          "Mar-26": 13.498099,
          "Apr-26": 13.528779,
          "May-26": 33.510466,
          "Jun-26": 33.533932,
          "Jul-26": 33.569131,
          "Aug-26": 33.768685,
          "Sep-26": 34.243941
        },
        "monthlyRevenue": {
          "Jan-26": 0.000475,
          "Feb-26": 0.006068,
          "Mar-26": -2.4e-05,
          "Apr-26": -0.000161,
          "May-26": -0.018062,
          "Jun-26": -0.017305,
          "Jul-26": -0.017885,
          "Aug-26": -0.017368,
          "Sep-26": -0.005554
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10205956",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50252639",
    "parentCompanyName": "L O L C Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "A.JAYANTHA Luxman Peiris",
      "shortName": "A.JAYANTHA Luxman Peiris",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 L O L C Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.268425,
        "monthlyBalances": {
          "Jan-26": 0.24881,
          "Feb-26": 0.253447,
          "Mar-26": 0.20081,
          "Apr-26": 0.113664,
          "May-26": 0.42158,
          "Jun-26": 0.468319,
          "Jul-26": 0.419306,
          "Aug-26": 0.399489,
          "Sep-26": 0.462641
        },
        "monthlyRevenue": {
          "Jan-26": -0.001157,
          "Feb-26": 0.000241,
          "Mar-26": -0.001263,
          "Apr-26": 0.006761,
          "May-26": -0.0002,
          "Jun-26": 0.002161,
          "Jul-26": 0.008926,
          "Aug-26": 0.004486,
          "Sep-26": 0.015844
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10384224",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 10384224",
      "shortName": "Director CIF 10384224",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10454676",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Sampath Priyantha Perera Amarathunga",
      "shortName": "Sampath Priyantha Perera Amarathunga",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.069226,
        "monthlyBalances": {
          "Jan-26": 0.067757,
          "Feb-26": 0.100391,
          "Mar-26": 0.069397,
          "Apr-26": 0.047753,
          "May-26": 0.056056,
          "Jun-26": 0.057857,
          "Jul-26": 0.049505,
          "Aug-26": 0.020493,
          "Sep-26": 0.010291
        },
        "monthlyRevenue": {
          "Jan-26": 0.000128,
          "Feb-26": 0.000165,
          "Mar-26": -0.000469,
          "Apr-26": 0.00282,
          "May-26": -0.000119,
          "Jun-26": 0.000412,
          "Jul-26": 0.000689,
          "Aug-26": -0.000145,
          "Sep-26": -7.1e-05
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.000278,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11733213",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Prasadani Naganika Gamage",
      "shortName": "Prasadani Naganika Gamage",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.04842,
          "Jul-26": 0.427018,
          "Aug-26": 0.235158,
          "Sep-26": 0.115014
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.002911,
          "Jul-26": 0.007148,
          "Aug-26": 0.017234,
          "Sep-26": 0.003673
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10481145",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 10481145",
      "shortName": "Director CIF 10481145",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10372267",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": 1.05365,
    "company": {
      "legalName": "Joseph Rene Alastair Corera",
      "shortName": "Joseph Rene Alastair Corera",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.088191,
          "Jun-26": 0.157456,
          "Jul-26": 0.15572,
          "Aug-26": 0.247786,
          "Sep-26": 0.259124
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.000951,
          "Jun-26": 0.002511,
          "Jul-26": -0.000334,
          "Aug-26": -0.001936,
          "Sep-26": 4.1e-05
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 6.251092,
          "Jun-26": 10.348708,
          "Jul-26": 3.902472,
          "Aug-26": 4.17874,
          "Sep-26": 3.131819
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.038029,
          "Jun-26": 0.070738,
          "Jul-26": 0.051512,
          "Aug-26": 0.027359,
          "Sep-26": 0.019012
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 1.232796,
          "Jun-26": 1.236617,
          "Jul-26": 1.228107,
          "Aug-26": 1.237315,
          "Sep-26": 1.232729
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.003494,
          "Jun-26": 0.003395,
          "Jul-26": 0.001664,
          "Aug-26": 5e-06,
          "Sep-26": 5.8e-05
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.231847,
          "Jun-26": 0.2152,
          "Jul-26": 0.116105,
          "Aug-26": 3.8e-05,
          "Sep-26": 5.1e-05
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.231986,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11175839",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11175839",
      "shortName": "Director CIF 11175839",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10478192",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Sujeewa Kumarapperuma",
      "shortName": "Sujeewa Kumarapperuma",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.084971,
        "monthlyBalances": {
          "Jan-26": 0.06429,
          "Feb-26": 0.052834,
          "Mar-26": 0.209787,
          "Apr-26": 0.893376,
          "May-26": 1.097347,
          "Jun-26": 0.889636,
          "Jul-26": 0.828346,
          "Aug-26": 0.777534,
          "Sep-26": 0.942628
        },
        "monthlyRevenue": {
          "Jan-26": -0.000261,
          "Feb-26": -0.000158,
          "Mar-26": 0.020464,
          "Apr-26": -0.005927,
          "May-26": -0.007757,
          "Jun-26": -0.003777,
          "Jul-26": -0.003648,
          "Aug-26": 0.000835,
          "Sep-26": -0.006764
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 1.2e-05,
          "Sep-26": 1.3e-05
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10211303",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50338088",
    "parentCompanyName": "Citizens Development Business Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Elabadagama Ralalage Samitha Gomi Sudheera Hemachandra",
      "shortName": "Elabadagama Ralalage Samitha Gomi Sudheera Hemachandra",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Citizens Development Business Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.009495,
          "Jun-26": 0.08719,
          "Jul-26": 0.024544,
          "Aug-26": 0.097723,
          "Sep-26": 0.047026
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.001434,
          "Jun-26": -0.000656,
          "Jul-26": -0.000192,
          "Aug-26": -0.000763,
          "Sep-26": -0.000354
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.030884,
        "monthlyBalances": {
          "Jan-26": 0.19747,
          "Feb-26": 0.080409,
          "Mar-26": 0.020402,
          "Apr-26": 0.020612,
          "May-26": 0.073294,
          "Jun-26": 0.063238,
          "Jul-26": 0.016689,
          "Aug-26": 0.016287,
          "Sep-26": 0.012614
        },
        "monthlyRevenue": {
          "Jan-26": 0.001049,
          "Feb-26": 0.000431,
          "Mar-26": 0.000194,
          "Apr-26": 0.000245,
          "May-26": 0.000539,
          "Jun-26": 0.000503,
          "Jul-26": 0.000256,
          "Aug-26": 0.000195,
          "Sep-26": 0.000146
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 6.3e-05,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.000196
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10308889",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50415498",
    "parentCompanyName": "Fintrex Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Kathirgamar Sivaskantharajah",
      "shortName": "Kathirgamar Sivaskantharajah",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Fintrex Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.006158,
        "monthlyBalances": {
          "Jan-26": 0.002567,
          "Feb-26": 0.010891,
          "Mar-26": 0.019331,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.002111,
          "Feb-26": 0.014991,
          "Mar-26": -0.000127,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.223081,
        "monthlyBalances": {
          "Jan-26": 0.222807,
          "Feb-26": 0.220959,
          "Mar-26": 0.219624,
          "Apr-26": 0.200193,
          "May-26": 0.199259,
          "Jun-26": 0.199259,
          "Jul-26": 0.199259,
          "Aug-26": 0.199259,
          "Sep-26": 0.199259
        },
        "monthlyRevenue": {
          "Jan-26": 0.001391,
          "Feb-26": 0.001246,
          "Mar-26": 0.001371,
          "Apr-26": 0.002231,
          "May-26": 0.001318,
          "Jun-26": 0.001431,
          "Jul-26": 0.001484,
          "Aug-26": 0.001484,
          "Sep-26": 0.001436
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10251794",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50415498",
    "parentCompanyName": "Fintrex Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Ahamed Sabry Ibrahim",
      "shortName": "Ahamed Sabry Ibrahim",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Fintrex Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0179,
        "monthlyBalances": {
          "Jan-26": 0.015833,
          "Feb-26": 0.021618,
          "Mar-26": 0.020531,
          "Apr-26": 0.023976,
          "May-26": 0.017829,
          "Jun-26": 0.019184,
          "Jul-26": 0.017445,
          "Aug-26": 0.019271,
          "Sep-26": 0.024322
        },
        "monthlyRevenue": {
          "Jan-26": -7.2e-05,
          "Feb-26": -6.8e-05,
          "Mar-26": 0.0,
          "Apr-26": 0.000141,
          "May-26": 4.2e-05,
          "Jun-26": 3.2e-05,
          "Jul-26": 3e-05,
          "Aug-26": 1.6e-05,
          "Sep-26": 0.007483
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10486749",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50415498",
    "parentCompanyName": "Fintrex Finance PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Shrihan Blaise Perera",
      "shortName": "Shrihan Blaise Perera",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Fintrex Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.219664,
        "monthlyBalances": {
          "Jan-26": 0.061969,
          "Feb-26": 0.073052,
          "Mar-26": 0.153342,
          "Apr-26": 0.120845,
          "May-26": 0.377175,
          "Jun-26": 1.420651,
          "Jul-26": 0.705128,
          "Aug-26": 0.623495,
          "Sep-26": 0.264119
        },
        "monthlyRevenue": {
          "Jan-26": 0.000106,
          "Feb-26": 0.008199,
          "Mar-26": 0.001893,
          "Apr-26": 0.000815,
          "May-26": -0.001474,
          "Jun-26": -0.008335,
          "Jul-26": -0.002961,
          "Aug-26": -0.00326,
          "Sep-26": 0.000659
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2.583697,
        "monthlyBalances": {
          "Jan-26": 3.631204,
          "Feb-26": 1.682974,
          "Mar-26": 1.343407,
          "Apr-26": 1.829214,
          "May-26": 5.285669,
          "Jun-26": 3.830589,
          "Jul-26": 3.470013,
          "Aug-26": 1.57833,
          "Sep-26": 3.55562
        },
        "monthlyRevenue": {
          "Jan-26": 0.016575,
          "Feb-26": 0.007657,
          "Mar-26": 0.006204,
          "Apr-26": 0.008398,
          "May-26": 0.026421,
          "Jun-26": 0.019261,
          "Jul-26": 0.020353,
          "Aug-26": 0.009423,
          "Sep-26": 0.040159
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 15.301027,
        "monthlyBalances": {
          "Jan-26": 15.372283,
          "Feb-26": 16.236991,
          "Mar-26": 16.61659,
          "Apr-26": 18.106447,
          "May-26": 26.272957,
          "Jun-26": 36.44745,
          "Jul-26": 39.228179,
          "Aug-26": 41.287808,
          "Sep-26": 38.758445
        },
        "monthlyRevenue": {
          "Jan-26": 0.005607,
          "Feb-26": 0.001231,
          "Mar-26": 1.8e-05,
          "Apr-26": 0.003374,
          "May-26": 0.025636,
          "Jun-26": 0.082026,
          "Jul-26": 0.001034,
          "Aug-26": 0.003353,
          "Sep-26": 0.060411
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.272886,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.944977,
          "Aug-26": 0.0,
          "Sep-26": 0.63922
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10749862",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "50415498",
    "parentCompanyName": "Fintrex Finance PLC",
    "reportedLimitMn": 1.0,
    "company": {
      "legalName": "Seminda Nilam Jayasinghe",
      "shortName": "Seminda Nilam Jayasinghe",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Fintrex Finance PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.05738,
          "Jun-26": 0.055208,
          "Jul-26": 0.018147,
          "Aug-26": 0.035388,
          "Sep-26": 0.041593
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.002399,
        "monthlyBalances": {
          "Jan-26": 0.004061,
          "Feb-26": 0.010156,
          "Mar-26": 0.003161,
          "Apr-26": 0.002103,
          "May-26": 0.002309,
          "Jun-26": 0.002575,
          "Jul-26": 0.002306,
          "Aug-26": 0.002642,
          "Sep-26": 0.00648
        },
        "monthlyRevenue": {
          "Jan-26": 0.007487,
          "Feb-26": -4.6e-05,
          "Mar-26": 2.1e-05,
          "Apr-26": 2.8e-05,
          "May-26": 2.6e-05,
          "Jun-26": 2.3e-05,
          "Jul-26": 2.4e-05,
          "Aug-26": 2.2e-05,
          "Sep-26": 0.003567
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.012324,
        "monthlyBalances": {
          "Jan-26": 0.009936,
          "Feb-26": 0.00972,
          "Mar-26": 0.010146,
          "Apr-26": 0.008074,
          "May-26": 1.182066,
          "Jun-26": 0.223047,
          "Jul-26": 0.356188,
          "Aug-26": 0.135781,
          "Sep-26": 0.121244
        },
        "monthlyRevenue": {
          "Jan-26": 2.8e-05,
          "Feb-26": 2.5e-05,
          "Mar-26": 2.9e-05,
          "Apr-26": 2.3e-05,
          "May-26": 0.008703,
          "Jun-26": 0.002486,
          "Jul-26": 0.003966,
          "Aug-26": 0.002373,
          "Sep-26": 0.001847
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.967742,
          "Jun-26": 10.468841,
          "Jul-26": 10.937681,
          "Aug-26": 10.937681,
          "Sep-26": 10.937681
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.001022,
          "Jun-26": 1e-05,
          "Jul-26": -0.000676,
          "Aug-26": 1.1e-05,
          "Sep-26": 1.1e-05
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10209797",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51002024",
    "parentCompanyName": "Browns Investments PLC",
    "reportedLimitMn": 3.558921,
    "company": {
      "legalName": "Jayanta M Swaminathan",
      "shortName": "Jayanta M Swaminathan",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Browns Investments PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.048401,
        "monthlyBalances": {
          "Jan-26": 0.046221,
          "Feb-26": 0.04241,
          "Mar-26": 0.038103,
          "Apr-26": 0.030388,
          "May-26": 0.173163,
          "Jun-26": 0.163766,
          "Jul-26": 0.174388,
          "Aug-26": 0.260605,
          "Sep-26": 0.299378
        },
        "monthlyRevenue": {
          "Jan-26": 0.000738,
          "Feb-26": 0.000723,
          "Mar-26": 0.000545,
          "Apr-26": 0.000572,
          "May-26": -0.000661,
          "Jun-26": 0.010676,
          "Jul-26": -0.000918,
          "Aug-26": -0.001334,
          "Sep-26": 0.008482
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.022545,
        "monthlyBalances": {
          "Jan-26": 0.022564,
          "Feb-26": 0.022584,
          "Mar-26": 0.022601,
          "Apr-26": 0.02262,
          "May-26": 0.533828,
          "Jun-26": 0.540313,
          "Jul-26": 0.558099,
          "Aug-26": 0.570762,
          "Sep-26": 0.584821
        },
        "monthlyRevenue": {
          "Jan-26": 0.000119,
          "Feb-26": 0.000108,
          "Mar-26": 0.000119,
          "Apr-26": 0.000118,
          "May-26": 0.002286,
          "Jun-26": 0.00238,
          "Jul-26": 0.002597,
          "Aug-26": 0.002708,
          "Sep-26": 0.002728
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 2.198895,
        "monthlyBalances": {
          "Jan-26": 2.198895,
          "Feb-26": 2.198895,
          "Mar-26": 2.299442,
          "Apr-26": 2.347321,
          "May-26": 11.181118,
          "Jun-26": 11.334821,
          "Jul-26": 11.411672,
          "Aug-26": 11.411672,
          "Sep-26": 11.411672
        },
        "monthlyRevenue": {
          "Jan-26": 0.000452,
          "Feb-26": 0.000408,
          "Mar-26": 0.000485,
          "Apr-26": 0.000485,
          "May-26": 0.020273,
          "Jun-26": 0.012874,
          "Jul-26": 0.010384,
          "Aug-26": 0.010384,
          "Sep-26": 0.010049
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.00026,
          "Jun-26": 0.00026,
          "Jul-26": 0.00026,
          "Aug-26": 0.00026,
          "Sep-26": 0.00026
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10207866",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51002024",
    "parentCompanyName": "Browns Investments PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Stefan Furkhan",
      "shortName": "Stefan Furkhan",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Browns Investments PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.139332,
        "monthlyBalances": {
          "Jan-26": 0.26056,
          "Feb-26": 0.162371,
          "Mar-26": 0.229451,
          "Apr-26": 0.703443,
          "May-26": 1.42941,
          "Jun-26": 0.759351,
          "Jul-26": 0.295047,
          "Aug-26": 1.287167,
          "Sep-26": 1.299892
        },
        "monthlyRevenue": {
          "Jan-26": -0.006204,
          "Feb-26": 0.002882,
          "Mar-26": 0.003479,
          "Apr-26": 0.016333,
          "May-26": 0.002974,
          "Jun-26": -0.00308,
          "Jul-26": 0.01124,
          "Aug-26": -0.000261,
          "Sep-26": -0.000245
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 5.608836,
        "monthlyBalances": {
          "Jan-26": 8.222078,
          "Feb-26": 10.893044,
          "Mar-26": 7.192916,
          "Apr-26": 13.078888,
          "May-26": 6.102412,
          "Jun-26": 13.119429,
          "Jul-26": 4.769907,
          "Aug-26": 11.173824,
          "Sep-26": 9.753106
        },
        "monthlyRevenue": {
          "Jan-26": 0.038283,
          "Feb-26": 0.0466,
          "Mar-26": 0.033406,
          "Apr-26": 0.08487,
          "May-26": 0.031021,
          "Jun-26": 0.076703,
          "Jul-26": 0.082105,
          "Aug-26": 0.079378,
          "Sep-26": 0.067333
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 55.228,
        "monthlyBalances": {
          "Jan-26": 55.288136,
          "Feb-26": 55.241874,
          "Mar-26": 55.73461,
          "Apr-26": 56.541685,
          "May-26": 84.600435,
          "Jun-26": 72.637226,
          "Jul-26": 70.84177,
          "Aug-26": 63.753262,
          "Sep-26": 62.003562
        },
        "monthlyRevenue": {
          "Jan-26": 0.000284,
          "Feb-26": 9e-05,
          "Mar-26": -0.002638,
          "Apr-26": -0.002791,
          "May-26": 0.008749,
          "Jun-26": 0.000948,
          "Jul-26": 0.012972,
          "Aug-26": 0.003691,
          "Sep-26": -0.000739
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.059765,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.714286,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11643145",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51039588",
    "parentCompanyName": "Hayleys PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11643145",
      "shortName": "Director CIF 11643145",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Hayleys PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11751348",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51039588",
    "parentCompanyName": "Hayleys PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Director CIF 11751348",
      "shortName": "Director CIF 11751348",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Hayleys PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "not_supplied",
      "mobile_banking": "not_supplied",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "10536874",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51039588",
    "parentCompanyName": "Hayleys PLC",
    "reportedLimitMn": null,
    "company": {
      "legalName": "Kalupathirathnehelage Don Gamini Gunaratne",
      "shortName": "Kalupathirathnehelage Don Gamini Gunaratne",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Hayleys PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 8.958675,
          "Jun-26": 9.007976,
          "Jul-26": 9.005411,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 3.115661,
        "monthlyBalances": {
          "Jan-26": 3.050231,
          "Feb-26": 2.997833,
          "Mar-26": 2.912672,
          "Apr-26": 2.820345,
          "May-26": 3.053866,
          "Jun-26": 2.976239,
          "Jul-26": 3.349438,
          "Aug-26": 3.984313,
          "Sep-26": 4.397616
        },
        "monthlyRevenue": {
          "Jan-26": 0.069078,
          "Feb-26": 0.047085,
          "Mar-26": 0.054203,
          "Apr-26": 0.043599,
          "May-26": 0.037173,
          "Jun-26": 0.044705,
          "Jul-26": 0.033885,
          "Aug-26": 0.05222,
          "Sep-26": 0.071263
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.499442,
          "Jun-26": 0.006536,
          "Jul-26": 0.006536,
          "Aug-26": 0.006536,
          "Sep-26": 0.006536
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.021865,
          "Jun-26": 0.002117,
          "Jul-26": 0.100073,
          "Aug-26": 4.9e-05,
          "Sep-26": 4.7e-05
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 10.0,
          "Jun-26": 10.0,
          "Jul-26": 10.0,
          "Aug-26": 10.0,
          "Sep-26": 10.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.004303,
          "Jun-26": 0.004164,
          "Jul-26": 0.004158,
          "Aug-26": 0.004303,
          "Sep-26": 0.004164
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.000996,
          "Jun-26": 0.001913,
          "Jul-26": 0.000485,
          "Aug-26": 0.000215,
          "Sep-26": 1.9e-05
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.038068,
          "Jun-26": 0.020508,
          "Jul-26": 0.193792,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.005,
          "Jun-26": 0.0,
          "Jul-26": 0.005,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  },
  {
    "cif": "11256570",
    "isPrimaryCustomer": false,
    "parentCompanyCif": "51039588",
    "parentCompanyName": "Hayleys PLC",
    "reportedLimitMn": 10.95324,
    "company": {
      "legalName": "Liyanamohottige Joseph Sri Harsha Cabral",
      "shortName": "Liyanamohottige Joseph Sri Harsha Cabral",
      "entityType": "Individual",
      "sector": "Linked Director \u2014 Personal Banking",
      "subSector": "Linked Director Relationship \u2014 Hayleys PLC",
      "headquarters": "Sri Lanka",
      "relationshipTier": "Private Wealth",
      "relationshipManager": "",
      "branchName": "",
      "description": "",
      "strategicContext": "",
      "keyHighlights": [],
      "links": [],
      "lastVerifiedDate": "2026-11-03"
    },
    "digitalAccess": {
      "frimi": "not_supplied",
      "internet_banking": "registered",
      "mobile_banking": "registered",
      "ndc": "not_supplied",
      "nde": "not_supplied"
    },
    "holdings": [
      {
        "productCode": "CASA_DR",
        "productName": "Overdraft & Working Capital (CASA DR)",
        "productGroup": "Corporate Overdraft & Working Capital (CASA DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.890038,
          "Jun-26": 2.709043,
          "Jul-26": 3.210585,
          "Aug-26": 3.630363,
          "Sep-26": 4.494387
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.001061,
          "Jun-26": 0.002417,
          "Jul-26": 0.000891,
          "Aug-26": 0.003679,
          "Sep-26": 0.00114
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.825249,
          "Jun-26": 0.325234,
          "Jul-26": 0.417722,
          "Aug-26": 0.549853,
          "Sep-26": 0.39585
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": -0.005747,
          "Jun-26": -0.002454,
          "Jul-26": -0.003264,
          "Aug-26": -0.004296,
          "Sep-26": -0.002993
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0.0,
        "monthlyBalances": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.001051,
          "Jun-26": 0.001061,
          "Jul-26": 0.001057,
          "Aug-26": 0.001058,
          "Sep-26": 0.001053
        },
        "monthlyRevenue": {
          "Jan-26": 0.0,
          "Feb-26": 0.0,
          "Mar-26": 0.0,
          "Apr-26": 0.0,
          "May-26": 0.0,
          "Jun-26": 0.0,
          "Jul-26": 0.0,
          "Aug-26": 0.0,
          "Sep-26": 0.0
        }
      }
    ],
    "directors": [],
    "savedRecommendations": [
      {
        "priority": 1,
        "productCode": "PRIVATE_WEALTH",
        "productGroup": "Nations Private Wealth & Inner Circle Advisory",
        "headlineOffer": "Nations Private Wealth Portfolio & Fixed Income Mandate",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Tailored Private Wealth deposit and fixed-income management aligned with personal liquidity balances.",
        "evidencePoints": [],
        "talkingPoints": [
          "Present structured term deposit laddering and sovereign fixed-income custody options.",
          "Review Lombard credit line structuring against existing Term Deposit holdings."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 2,
        "productCode": "FC_MARGIN",
        "productGroup": "Foreign Currency Margin Deposits (FC MARGIN CR)",
        "headlineOffer": "Personal Foreign Currency (PFC) Multi-Currency Deposit Suite",
        "targetCategory": "Treasury & Markets",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Diversify personal liquidity across USD, GBP, and EUR foreign currency accounts.",
        "evidencePoints": [],
        "talkingPoints": [
          "Offer preferential FX conversion spreads and multi-currency international settlement.",
          "Link foreign currency deposits to Private Wealth relationship privileges."
        ],
        "implementationTimeline": ""
      },
      {
        "priority": 3,
        "productCode": "CORP_CARD_DR",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "headlineOffer": "American Express Platinum Reserve & Travel Concierge",
        "targetCategory": "Wealth & Executive Banking",
        "confidenceScore": "",
        "estimatedAnnualRevenueUpliftMn": 0,
        "financialRationale": "Consolidate high-value personal and international travel spend on Nations Trust Bank American Express.",
        "evidencePoints": [],
        "talkingPoints": [
          "Provide complimentary supplementary family cards and global lounge access.",
          "Enable automated standing instruction settlement from CASA balances."
        ],
        "implementationTimeline": ""
      }
    ]
  }
];

export function buildCompleteCustomerDirectory(
  primaryList: CustomerRecord[] = INITIAL_CUSTOMERS
): Map<string, CustomerRecord> {
  const map = new Map<string, CustomerRecord>();
  for (const c of primaryList) {
    map.set(c.cif, c);
  }
  for (const d of DIRECTOR_CUSTOMERS) {
    if (!map.has(d.cif)) {
      map.set(d.cif, d);
    }
  }
  return map;
}
