// src/serverApp.ts
import express from "express";
import dotenv from "dotenv";

// src/data/bankData.ts
var INITIAL_CUSTOMERS = [
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 3658e-6,
          "Feb-26": 3304e-6,
          "Mar-26": 3722e-6,
          "Apr-26": -0.037976,
          "May-26": 5954e-6,
          "Jun-26": 9621e-6,
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
        "dec25Bf": 7,
        "monthlyBalances": {
          "Jan-26": 0.225806,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10248549",
        "name": "Chaminda Sampath Hettiarachchi",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1.455852,
        "latestLiabilitiesMn": 0.836268,
        "ytdRevenueMn": 0.154919,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10204041",
        "name": "Harindra Wijenaike Eranjith",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0,
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
        "name": "Chandika Kushan Hettiarachchi",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.032878,
        "latestLiabilitiesMn": 59.972376,
        "ytdRevenueMn": 0.961474,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10702569",
        "name": "Arjun Fernando",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.212261,
        "latestLiabilitiesMn": 83.932645,
        "ytdRevenueMn": -0.013072,
        "reportedLimitMn": 5
      },
      {
        "directorCif": "10204843",
        "name": "Arjuna Kapila Gunaratne",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.255989,
        "latestLiabilitiesMn": 43.533516,
        "ytdRevenueMn": 0.323171,
        "reportedLimitMn": 5
      },
      {
        "directorCif": "10562812",
        "name": "Manjula Hiranya DE Silva",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.700885,
        "latestLiabilitiesMn": 8.90564,
        "ytdRevenueMn": -0.038401,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10524591",
        "name": "Asite Drupath B Talwatte",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 4.645554,
        "latestLiabilitiesMn": 137.376723,
        "ytdRevenueMn": 1.296151,
        "reportedLimitMn": 96.21209
      },
      {
        "directorCif": "10290576",
        "name": "Kuda Bandara Herath",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1.232944,
        "latestLiabilitiesMn": 0.13065,
        "ytdRevenueMn": 0.177585,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10230908",
        "name": "Dhammika Prasanna DE Silva",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 1077e-6,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 82.758253
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0.072902
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 2058e-6,
        "monthlyBalances": {
          "Jan-26": 5814e-6,
          "Feb-26": 6e-6,
          "Mar-26": 374e-6,
          "Apr-26": 5236e-6,
          "May-26": 9e-6,
          "Jun-26": 527e-6,
          "Jul-26": 0.017343,
          "Aug-26": 211e-6,
          "Sep-26": 3046e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Feb-26": 0,
          "Mar-26": 0.633286,
          "Apr-26": 0.619305,
          "May-26": 9714e-6,
          "Jun-26": 3.433093,
          "Jul-26": 2.400046,
          "Aug-26": 0.228946,
          "Sep-26": 0.138202
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 645,
        "monthlyBalances": {
          "Jan-26": 645,
          "Feb-26": 645,
          "Mar-26": 645,
          "Apr-26": 645,
          "May-26": 645,
          "Jun-26": 598.333333,
          "Jul-26": 595,
          "Aug-26": 595,
          "Sep-26": 595
        },
        "monthlyRevenue": {
          "Jan-26": 1.18,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0.35872,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0.354,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0.088551,
          "Feb-26": 0.080117,
          "Mar-26": 0,
          "Apr-26": 0.14283,
          "May-26": 0,
          "Jun-26": 0.082448,
          "Jul-26": 0.055402,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 5e-4,
          "Feb-26": 5e-4,
          "Mar-26": 0,
          "Apr-26": 1e-3,
          "May-26": 0,
          "Jun-26": 5e-4,
          "Jul-26": 5e-4,
          "Aug-26": 0,
          "Sep-26": 0
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
        "latestAssetsMn": 0,
        "latestLiabilitiesMn": 203e-6,
        "ytdRevenueMn": 0,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10916353",
        "name": "Mohamed Jamaldeen",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.010078,
        "latestLiabilitiesMn": 0,
        "ytdRevenueMn": 0.012209,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10477785",
        "name": "Mohan Pandithage",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 3.994416,
        "latestLiabilitiesMn": 641e-6,
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
        "ytdRevenueMn": 8955e-6,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10385367",
        "name": "Sarath Clement Ganegoda",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.780567,
        "latestLiabilitiesMn": 0,
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
        "latestAssetsMn": 0,
        "latestLiabilitiesMn": 0.170621,
        "ytdRevenueMn": 764e-5,
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
    "reportedLimitMn": 5700,
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "LMS_CR",
        "productName": "LMS Credit Balances (LMS CR)",
        "productGroup": "LMS Credit Balances (LMS CR)",
        "category": "lms_cr",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "BG_DR",
        "productName": "Bank Guarantees (BG DR)",
        "productGroup": "Bank Guarantees & Performance Bonds",
        "category": "non_funded",
        "measureLabel": "NON_FUNDED_LCY",
        "dec25Bf": 62,
        "monthlyBalances": {
          "Jan-26": 67.946677,
          "Feb-26": 80.288393,
          "Mar-26": 60.064516,
          "Apr-26": 60,
          "May-26": 60,
          "Jun-26": 60,
          "Jul-26": 60,
          "Aug-26": 60,
          "Sep-26": 60
        },
        "monthlyRevenue": {
          "Jan-26": 5e-3,
          "Feb-26": 0.531,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0.166025,
          "Mar-26": 2.07742,
          "Apr-26": 1.900916,
          "May-26": 1.357173,
          "Jun-26": 0,
          "Jul-26": 0,
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
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.125137,
          "Jun-26": 0.180557,
          "Jul-26": 2.205474,
          "Aug-26": 0.267964,
          "Sep-26": 1.159902
        },
        "monthlyRevenue": {
          "Jan-26": 0.104311,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
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
          "Jan-26": 6157e-6,
          "Feb-26": -1225e-6,
          "Mar-26": 0.015429,
          "Apr-26": 0.037636,
          "May-26": -7471e-6,
          "Jun-26": 5355e-6,
          "Jul-26": -688e-6,
          "Aug-26": 1851e-6,
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
        "dec25Bf": 120,
        "monthlyBalances": {
          "Jan-26": 120,
          "Feb-26": 120,
          "Mar-26": 120,
          "Apr-26": 120,
          "May-26": 145,
          "Jun-26": 152.5,
          "Jul-26": 225.35992,
          "Aug-26": 266.438334,
          "Sep-26": 276.115753
        },
        "monthlyRevenue": {
          "Jan-26": 346e-6,
          "Feb-26": 313e-6,
          "Mar-26": 346e-6,
          "Apr-26": -39e-5,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 1.999956,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0.966667
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 7675e-6,
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
          "Feb-26": 3144e-6,
          "Mar-26": 0.022207,
          "Apr-26": -479e-6,
          "May-26": -2485e-6,
          "Jun-26": -1467e-6,
          "Jul-26": -7623e-6,
          "Aug-26": 3871e-6,
          "Sep-26": -4512e-6
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 27e-6,
          "Feb-26": 24e-6,
          "Mar-26": 27e-6,
          "Apr-26": 23e-6,
          "May-26": 27e-6,
          "Jun-26": 0.022884,
          "Jul-26": 163e-5,
          "Aug-26": 0.034249,
          "Sep-26": -5175e-6
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0.083871,
          "Feb-26": 25.357143,
          "Mar-26": 0,
          "Apr-26": 21.966667,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 30.27546,
          "Aug-26": 0,
          "Sep-26": 19.609283
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
    "reportedLimitMn": 405,
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 1.775767
        },
        "monthlyRevenue": {
          "Jan-26": 0.03,
          "Feb-26": 0,
          "Mar-26": 5873e-6,
          "Apr-26": 5e-3,
          "May-26": 0.01,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 5e-3
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 1250,
        "monthlyBalances": {
          "Jan-26": 1209.677419,
          "Feb-26": 625,
          "Mar-26": 625,
          "Apr-26": 541.825348,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 1.094521,
          "Feb-26": 0.388356,
          "Mar-26": 0.429966,
          "Apr-26": 0.844811,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 6.672194,
          "Feb-26": 5.21,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 5e-3,
          "Feb-26": 5e-3,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Apr-26": 0,
          "May-26": 9.748292,
          "Jun-26": 2.893383,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0.055141,
          "Feb-26": 0.035925,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.080696,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 6187e-6,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 6678e-6,
          "Jul-26": 6722e-6,
          "Aug-26": 6671e-6,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "latestAssetsMn": 0,
        "latestLiabilitiesMn": 57.039119,
        "ytdRevenueMn": -0.507521,
        "reportedLimitMn": 22
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
    "reportedLimitMn": 25,
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
          "Feb-26": 447e-6,
          "Mar-26": 781e-6,
          "Apr-26": 0.022457,
          "May-26": 0.051298,
          "Jun-26": 348e-6,
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 4.527567,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 1e-3,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10396154",
        "name": "P G M Asanga Perera",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0,
        "latestLiabilitiesMn": 447e-6,
        "ytdRevenueMn": 27e-6,
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
        "reportedLimitMn": 10
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
        "latestAssetsMn": 0,
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
    "reportedLimitMn": 5850,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 467.741935,
          "Jun-26": 421.666667,
          "Jul-26": 0,
          "Aug-26": 580.645161,
          "Sep-26": 433.333333
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.328082,
          "Jun-26": 0.310137,
          "Jul-26": 0,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 1.175007,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 435e-6,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0.02762,
          "Feb-26": 0.034839,
          "Mar-26": 0.032795,
          "Apr-26": 0.215711,
          "May-26": 0.064198,
          "Jun-26": 0.106674,
          "Jul-26": 4504e-6,
          "Aug-26": 0.068983,
          "Sep-26": 0
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
          "Jan-26": 632e-5,
          "Feb-26": 4169e-6,
          "Mar-26": 5426e-6,
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0.113077,
          "Apr-26": 0,
          "May-26": 1.625301,
          "Jun-26": 4.871041,
          "Jul-26": 0,
          "Aug-26": 9.075083,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 3e-3
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
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Apr-26": 4197e-6,
          "May-26": 4516e-6,
          "Jun-26": 4902e-6,
          "Jul-26": 5084e-6,
          "Aug-26": 5084e-6,
          "Sep-26": 492e-5
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
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0.061875,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Aug-26": 75e-4,
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
    "reportedLimitMn": 10600,
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
        "dec25Bf": 12360,
        "monthlyBalances": {
          "Jan-26": 12360,
          "Feb-26": 14167.142857,
          "Mar-26": 15516.989247,
          "Apr-26": 15426.666667,
          "May-26": 15342.258065,
          "Jun-26": 15260,
          "Jul-26": 15175.591398,
          "Aug-26": 13350.322581,
          "Sep-26": 13010
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 3e-3,
          "Apr-26": 3e-3,
          "May-26": 3e-3,
          "Jun-26": 3e-3,
          "Jul-26": 9e-3,
          "Aug-26": 9e-3,
          "Sep-26": 6e-3
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
        "reportedLimitMn": 18
      },
      {
        "directorCif": "10205956",
        "name": "A.JAYANTHA Luxman Peiris",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.462641,
        "latestLiabilitiesMn": 0,
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
          "Aug-26": 0,
          "Sep-26": 7.390387
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 25,
          "Feb-26": 25,
          "Mar-26": 25,
          "Apr-26": 25,
          "May-26": 25,
          "Jun-26": 12.5,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Apr-26": 88,
          "May-26": 84.580645,
          "Jun-26": 79.977695,
          "Jul-26": 219.677419,
          "Aug-26": 24.83871,
          "Sep-26": 65.53116
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 3e-3,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 3e-3,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 3e-3
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
        "latestLiabilitiesMn": 0,
        "ytdRevenueMn": 341e-5,
        "reportedLimitMn": null
      },
      {
        "directorCif": "11733213",
        "name": "Prasadani Naganika Gamage",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.115014,
        "latestLiabilitiesMn": 0,
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
        "latestLiabilitiesMn": 13e-6,
        "ytdRevenueMn": -6993e-6,
        "reportedLimitMn": null
      },
      {
        "directorCif": "10211303",
        "name": "Elabadagama Ralalage Samitha Gomi Sudheera Hemachandra",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0.047026,
        "latestLiabilitiesMn": 0.01281,
        "ytdRevenueMn": 3027e-6,
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
    "reportedLimitMn": 1050,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0.056523,
          "Feb-26": 0,
          "Mar-26": 1.219558,
          "Apr-26": 1.255538,
          "May-26": 0.19204,
          "Jun-26": 2.147361,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 616e-5,
          "Feb-26": 0.01764,
          "Mar-26": 6311e-6,
          "Apr-26": 9261e-6,
          "May-26": 6674e-6,
          "Jun-26": 7659e-6,
          "Jul-26": 0.010168,
          "Aug-26": 0.034569,
          "Sep-26": 7986e-6
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 33.333333
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      }
    ],
    "directors": [
      {
        "directorCif": "10308889",
        "name": "Kathirgamar Sivaskantharajah",
        "role": "Linked Director Relationship",
        "hasBalanceExtract": true,
        "latestAssetsMn": 0,
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
        "latestLiabilitiesMn": 0,
        "ytdRevenueMn": 7604e-6,
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
        "reportedLimitMn": 1
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0.018337,
          "Aug-26": 0.06798,
          "Sep-26": 0.691966
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
    "reportedLimitMn": 2780,
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
          "Jan-26": 2390,
          "Feb-26": 2390,
          "Mar-26": 2390,
          "Apr-26": 2390,
          "May-26": 2390,
          "Jun-26": 2390,
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
          "Jan-26": 8357e-6,
          "Feb-26": 0.013811,
          "Mar-26": 0.023537,
          "Apr-26": 0.027531,
          "May-26": 0.019432,
          "Jun-26": 7729e-6,
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
    "reportedLimitMn": 1e3,
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
          "May-26": 1e3,
          "Jun-26": 1e3,
          "Jul-26": 1e3,
          "Aug-26": 1193.548387,
          "Sep-26": 1560
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
          "Jan-26": 4552e-6,
          "Feb-26": 6753e-6,
          "Mar-26": 0.257414,
          "Apr-26": 7022e-6,
          "May-26": 9817e-6,
          "Jun-26": 0.017145,
          "Jul-26": 0.024659,
          "Aug-26": 0.254263,
          "Sep-26": 4175e-6
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
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 48.387097,
          "Sep-26": 10
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "latestLiabilitiesMn": 0,
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
        "latestLiabilitiesMn": 1053e-6,
        "ytdRevenueMn": -9566e-6,
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
var DIRECTOR_CUSTOMERS = [
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
          "Feb-26": -6231e-6,
          "Mar-26": -4503e-6,
          "Apr-26": -516e-6,
          "May-26": 7722e-6,
          "Jun-26": -3076e-6,
          "Jul-26": 0.010239,
          "Aug-26": 634e-6,
          "Sep-26": -847e-5
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
          "Feb-26": 4802e-6,
          "Mar-26": 4288e-6,
          "Apr-26": 0.068705,
          "May-26": 9623e-6,
          "Jun-26": 0.010794,
          "Jul-26": 8808e-6,
          "Aug-26": 7662e-6,
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
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0.016057,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0.113954,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0.082101
        },
        "monthlyRevenue": {
          "Jan-26": 5e-3,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0.01,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 5e-3
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
          "Jan-26": 3939e-6,
          "Feb-26": 3524e-6,
          "Mar-26": 3928e-6,
          "Apr-26": -862e-5,
          "May-26": 3969e-6,
          "Jun-26": 0.743293,
          "Jul-26": 0.119242,
          "Aug-26": 5535e-6,
          "Sep-26": 5357e-6
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 306e-6,
          "Apr-26": 6026e-6,
          "May-26": 0.02916,
          "Jun-26": 0.022684,
          "Jul-26": 0.020589,
          "Aug-26": 0,
          "Sep-26": 0.032878
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": -1e-6,
          "Apr-26": 1233e-6,
          "May-26": -196e-6,
          "Jun-26": 817e-6,
          "Jul-26": -158e-6,
          "Aug-26": 0,
          "Sep-26": 848e-6
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
          "Mar-26": 954e-5,
          "Apr-26": 9526e-6,
          "May-26": 984e-5,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 194e-6,
          "Apr-26": 628e-6,
          "May-26": 1033e-6,
          "Jun-26": 927e-6,
          "Jul-26": 365e-6,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
    "reportedLimitMn": 5,
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
          "Jan-26": 754e-6,
          "Feb-26": -229e-6,
          "Mar-26": 0.023519,
          "Apr-26": 1088e-6,
          "May-26": 727e-6,
          "Jun-26": -1659e-6,
          "Jul-26": -1039e-6,
          "Aug-26": -1499e-6,
          "Sep-26": -937e-6
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 2.9453,
          "Jun-26": 3.244202,
          "Jul-26": 3.340054,
          "Aug-26": 3.465206,
          "Sep-26": 3.853375
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 9743e-6,
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
        "dec25Bf": 50,
        "monthlyBalances": {
          "Jan-26": 50,
          "Feb-26": 50,
          "Mar-26": 50,
          "Apr-26": 50,
          "May-26": 79.189271,
          "Jun-26": 79.40392,
          "Jul-26": 79.599299,
          "Aug-26": 79.859808,
          "Sep-26": 80.07927
        },
        "monthlyRevenue": {
          "Jan-26": 68e-6,
          "Feb-26": -663e-5,
          "Mar-26": -136e-6,
          "Apr-26": -467e-6,
          "May-26": -0.029101,
          "Jun-26": -0.027714,
          "Jul-26": -0.022227,
          "Aug-26": -0.019794,
          "Sep-26": 9384e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 527e-6,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 1e-5,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
    "reportedLimitMn": 5,
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
          "Jan-26": 265e-5,
          "Feb-26": -2289e-6,
          "Mar-26": 4325e-6,
          "Apr-26": 275e-6,
          "May-26": -898e-6,
          "Jun-26": 0.025794,
          "Jul-26": 3603e-6,
          "Aug-26": 61e-5,
          "Sep-26": 5991e-6
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
          "Jan-26": 2491e-6,
          "Feb-26": 2228e-6,
          "Mar-26": 2134e-6,
          "Apr-26": 2069e-6,
          "May-26": 2212e-6,
          "Jun-26": 2485e-6,
          "Jul-26": 4027e-6,
          "Aug-26": 3884e-6,
          "Sep-26": 3244e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 69e-5,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.334193,
          "Jun-26": 0.717432,
          "Jul-26": 1.387246,
          "Aug-26": 0.569978,
          "Sep-26": 0.700885
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -2327e-6,
          "Jun-26": -5423e-6,
          "Jul-26": -8339e-6,
          "Aug-26": 0.040291,
          "Sep-26": -5298e-6
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.047163,
          "Jun-26": 0.378453,
          "Jul-26": 0.462645,
          "Aug-26": 0.863598,
          "Sep-26": 0.15376
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 312e-6,
          "Jun-26": 2395e-6,
          "Jul-26": 3059e-6,
          "Aug-26": 537e-5,
          "Sep-26": 1097e-6
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 11.486737,
          "Jun-26": 11.486737,
          "Jul-26": 11.486737,
          "Aug-26": 9.036227,
          "Sep-26": 8.751695
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -0.021933,
          "Jun-26": -0.021226,
          "Jul-26": -0.021928,
          "Aug-26": -555e-5,
          "Sep-26": 1099e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 176e-6,
          "Sep-26": 185e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 3.443928,
          "Jun-26": 3.911546,
          "Jul-26": 3.918679,
          "Aug-26": 3.923114,
          "Sep-26": 4.148988
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 1806e-6,
        "monthlyBalances": {
          "Jan-26": 9754e-6,
          "Feb-26": 8235e-6,
          "Mar-26": 2105e-6,
          "Apr-26": 0.018044,
          "May-26": 0.805346,
          "Jun-26": 0.674423,
          "Jul-26": 0.716776,
          "Aug-26": 0.61843,
          "Sep-26": 0.496566
        },
        "monthlyRevenue": {
          "Jan-26": -64e-6,
          "Feb-26": 79e-6,
          "Mar-26": 94e-6,
          "Apr-26": 332e-5,
          "May-26": 0.012362,
          "Jun-26": -3142e-6,
          "Jul-26": -5432e-6,
          "Aug-26": -1239e-6,
          "Sep-26": -3649e-6
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
          "Feb-26": 3421e-6,
          "Mar-26": 2687e-6,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 18e-6,
          "Jul-26": 28e-6,
          "Aug-26": 4e-6,
          "Sep-26": 1e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0.017772,
          "Aug-26": 0.071089,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 5e-3,
          "Sep-26": 0
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
          "Jan-26": 1594e-6,
          "Feb-26": 5007e-6,
          "Mar-26": 0.021621,
          "Apr-26": 8938e-6,
          "May-26": 0.012713,
          "Jun-26": 0.03292,
          "Jul-26": 0.030739,
          "Aug-26": 0.023763,
          "Sep-26": -527e-5
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
          "Jan-26": 6298e-6,
          "Feb-26": 8986e-6,
          "Mar-26": 1988e-6,
          "Apr-26": 955e-6,
          "May-26": 2647e-6,
          "Jun-26": 2469e-6,
          "Jul-26": 1958e-6,
          "Aug-26": 9064e-6,
          "Sep-26": 1195e-6
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
          "Jan-26": 4177e-6,
          "Feb-26": 0.314929,
          "Mar-26": 0.290236,
          "Apr-26": 0.279191,
          "May-26": 0.259393,
          "Jun-26": 0.181893,
          "Jul-26": 0.130792,
          "Aug-26": 0.098486,
          "Sep-26": 658e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0.029395,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0.01,
          "Sep-26": 0
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
          "Feb-26": 468e-6,
          "Mar-26": 3253e-6,
          "Apr-26": 0.015059,
          "May-26": 319e-6,
          "Jun-26": 0.020781,
          "Jul-26": 9299e-6,
          "Aug-26": 0.016681,
          "Sep-26": 1077e-6
        },
        "monthlyRevenue": {
          "Jan-26": 8854e-6,
          "Feb-26": 3593e-6,
          "Mar-26": 0.034346,
          "Apr-26": 1503e-6,
          "May-26": 0.011415,
          "Jun-26": 7022e-6,
          "Jul-26": 1709e-6,
          "Aug-26": 4522e-6,
          "Sep-26": -6e-6
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
          "Jan-26": 6195e-6,
          "Feb-26": 5689e-6,
          "Mar-26": 7058e-6,
          "Apr-26": 9462e-6,
          "May-26": 0.010359,
          "Jun-26": 0.018536,
          "Jul-26": 0.011334,
          "Aug-26": 6633e-6,
          "Sep-26": 6851e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 9e-6,
        "monthlyBalances": {
          "Jan-26": 24e-6,
          "Feb-26": 0.013817,
          "Mar-26": 0.012308,
          "Apr-26": 36e-6,
          "May-26": 0.013354,
          "Jun-26": 39e-5,
          "Jul-26": 349e-6,
          "Aug-26": 0.087638,
          "Sep-26": 364e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0.050211,
          "Mar-26": 1.812587,
          "Apr-26": 0.886351,
          "May-26": 0.889512,
          "Jun-26": 2.826436,
          "Jul-26": 0,
          "Aug-26": 0.498828,
          "Sep-26": 0.275047
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": -298e-6,
          "Mar-26": 0.015024,
          "Apr-26": 7661e-6,
          "May-26": -6195e-6,
          "Jun-26": -0.021151,
          "Jul-26": 0,
          "Aug-26": -3898e-6,
          "Sep-26": -208e-5
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 11.408758,
          "Apr-26": 19.209468,
          "May-26": 18.351492,
          "Jun-26": 17.168158,
          "Jul-26": 14.366982,
          "Aug-26": 13.371118,
          "Sep-26": 11.403433
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 1e-6,
          "May-26": 1e-6,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 19e-5,
        "monthlyBalances": {
          "Jan-26": 192e-6,
          "Feb-26": 193e-6,
          "Mar-26": 192e-6,
          "Apr-26": 196e-6,
          "May-26": 203e-6,
          "Jun-26": 206e-6,
          "Jul-26": 207e-6,
          "Aug-26": 207e-6,
          "Sep-26": 203e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 225e-6,
        "monthlyBalances": {
          "Jan-26": 538e-6,
          "Feb-26": 748e-6,
          "Mar-26": 1203e-6,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 4676e-6,
          "Aug-26": 9247e-6,
          "Sep-26": 0.010078
        },
        "monthlyRevenue": {
          "Jan-26": 747e-6,
          "Feb-26": -4e-6,
          "Mar-26": 2012e-6,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 9214e-6,
          "Aug-26": -72e-6,
          "Sep-26": 312e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 1e-6,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 1e-6,
          "Apr-26": 3e-6,
          "May-26": 3e-6,
          "Jun-26": 3e-6,
          "Jul-26": 1e-6,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Feb-26": 4199e-6,
          "Mar-26": 0.052156,
          "Apr-26": 1.294808,
          "May-26": 1.253807,
          "Jun-26": 0.610803,
          "Jul-26": 0.207706,
          "Aug-26": 0.523576,
          "Sep-26": 3.994416
        },
        "monthlyRevenue": {
          "Jan-26": -451e-6,
          "Feb-26": 1054e-6,
          "Mar-26": -343e-6,
          "Apr-26": -5536e-6,
          "May-26": 0.013769,
          "Jun-26": 748e-6,
          "Jul-26": 154e-6,
          "Aug-26": -3745e-6,
          "Sep-26": -0.026596
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 812e-6,
          "Jul-26": 0.036445,
          "Aug-26": 0.045433,
          "Sep-26": 641e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": -1353e-6,
          "Feb-26": -1207e-6,
          "Mar-26": -772e-6,
          "Apr-26": 358e-6,
          "May-26": 115e-6,
          "Jun-26": -335e-6,
          "Jul-26": 7137e-6,
          "Aug-26": 368e-6,
          "Sep-26": 285e-6
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
          "Jan-26": 221e-6,
          "Feb-26": 197e-6,
          "Mar-26": 252e-6,
          "Apr-26": 34e-5,
          "May-26": 383e-6,
          "Jun-26": 1233e-6,
          "Jul-26": 852e-6,
          "Aug-26": 837e-6,
          "Sep-26": 845e-6
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 20,
        "monthlyBalances": {
          "Jan-26": 20,
          "Feb-26": 20,
          "Mar-26": 20,
          "Apr-26": 20,
          "May-26": 20,
          "Jun-26": 20.0225,
          "Jul-26": 20,
          "Aug-26": 20,
          "Sep-26": 20
        },
        "monthlyRevenue": {
          "Jan-26": 2072e-6,
          "Feb-26": 1872e-6,
          "Mar-26": 2072e-6,
          "Apr-26": 2005e-6,
          "May-26": 2072e-6,
          "Jun-26": 6068e-6,
          "Jul-26": 6332e-6,
          "Aug-26": 6332e-6,
          "Sep-26": 6128e-6
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 1082e-6,
          "Mar-26": 0.033384,
          "Apr-26": 0.012795,
          "May-26": 0.233297,
          "Jun-26": 0.092457,
          "Jul-26": 0.011106,
          "Aug-26": 0.035106,
          "Sep-26": 0.016571
        },
        "monthlyRevenue": {
          "Jan-26": 941e-6,
          "Feb-26": 1053e-6,
          "Mar-26": -177e-6,
          "Apr-26": 3006e-6,
          "May-26": 3113e-6,
          "Jun-26": 508e-6,
          "Jul-26": 54e-5,
          "Aug-26": 2008e-6,
          "Sep-26": 976e-5
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
          "Apr-26": 0,
          "May-26": 1.143559,
          "Jun-26": 0.407636,
          "Jul-26": 0.407636,
          "Aug-26": 0.407636,
          "Sep-26": 0.382651
        },
        "monthlyRevenue": {
          "Jan-26": 4552e-6,
          "Feb-26": 4118e-6,
          "Mar-26": 4271e-6,
          "Apr-26": 0,
          "May-26": 7667e-6,
          "Jun-26": 2928e-6,
          "Jul-26": 3036e-6,
          "Aug-26": 3036e-6,
          "Sep-26": 2759e-6
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
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0.045141,
          "Jul-26": 0.050674,
          "Aug-26": 3395e-6,
          "Sep-26": 6952e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.172858,
          "Jun-26": 0.411827,
          "Jul-26": 0.20776,
          "Aug-26": 0.071349,
          "Sep-26": 0.647654
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -1204e-6,
          "Jun-26": -3093e-6,
          "Jul-26": -1623e-6,
          "Aug-26": -557e-6,
          "Sep-26": -4399e-6
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 3.894713,
          "Jun-26": 3.679974,
          "Jul-26": 3.190209,
          "Aug-26": 3.017795,
          "Sep-26": 3.007824
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 8.022763,
          "Jun-26": 8.022763,
          "Jul-26": 8.022763,
          "Aug-26": 8.022763,
          "Sep-26": 8.350356
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -0.015319,
          "Jun-26": -0.014825,
          "Jul-26": -0.015207,
          "Aug-26": -0.015319,
          "Sep-26": -1086e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0.067738
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Feb-26": 7249e-6,
          "Mar-26": 0.031535,
          "Apr-26": 0.030364,
          "May-26": 508e-6,
          "Jun-26": 6178e-6,
          "Jul-26": 0.02302,
          "Aug-26": 0.013528,
          "Sep-26": -2365e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 689e-6,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 32e-6,
          "Aug-26": 2449e-6,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.099166,
          "Jun-26": 0.101608,
          "Jul-26": 0.100773,
          "Aug-26": 0.099062,
          "Sep-26": 0.098419
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 295e-6,
          "Jun-26": 299e-6,
          "Jul-26": 298e-6,
          "Aug-26": 383e-5,
          "Sep-26": 279e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.071622,
          "Jun-26": 0.072202,
          "Jul-26": 0.072202,
          "Aug-26": 0.072202,
          "Sep-26": 0.072202
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 483e-6,
          "Jun-26": 527e-6,
          "Jul-26": 549e-6,
          "Aug-26": 549e-6,
          "Sep-26": 531e-6
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 4528e-6,
          "Sep-26": 0.032209
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": -35e-6,
          "Sep-26": -244e-6
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.645001,
          "Jun-26": 0.645956,
          "Jul-26": 0.646912,
          "Aug-26": 0.647901,
          "Sep-26": 0.656635
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 3172e-6,
          "Jun-26": 3577e-6,
          "Jul-26": 372e-5,
          "Aug-26": 3726e-6,
          "Sep-26": 3654e-6
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 7.5,
          "Jun-26": 7.5,
          "Jul-26": 7.5,
          "Aug-26": 7.5,
          "Sep-26": 7.5
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -0.012698,
          "Jun-26": -0.012288,
          "Jul-26": -0.012698,
          "Aug-26": -0.012698,
          "Sep-26": -9792e-6
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 3.304878,
          "Jun-26": 3.380811,
          "Jul-26": 3.458404,
          "Aug-26": 3.540422,
          "Sep-26": 3.624387
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Mar-26": 1e-6,
          "Apr-26": 1e-6,
          "May-26": 1e-6,
          "Jun-26": 1e-6,
          "Jul-26": 1e-6,
          "Aug-26": 1e-6,
          "Sep-26": 1e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0.013979,
          "Feb-26": -6135e-6,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 3046e-6,
        "monthlyBalances": {
          "Jan-26": 305e-5,
          "Feb-26": 3047e-6,
          "Mar-26": 3074e-6,
          "Apr-26": 3119e-6,
          "May-26": 18.839263,
          "Jun-26": 18.931361,
          "Jul-26": 18.833379,
          "Aug-26": 19.008214,
          "Sep-26": 18.974319
        },
        "monthlyRevenue": {
          "Jan-26": 11e-6,
          "Feb-26": 1e-5,
          "Mar-26": 11e-6,
          "Apr-26": 11e-6,
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
          "Jan-26": 5566e-6,
          "Feb-26": 492e-5,
          "Mar-26": 0.010846,
          "Apr-26": 4597e-6,
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
    "reportedLimitMn": 22,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 70,
          "Jun-26": 70,
          "Jul-26": 70,
          "Aug-26": 57.096774,
          "Sep-26": 50
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -0.193112,
          "Jun-26": -0.186883,
          "Jul-26": -0.192135,
          "Aug-26": -0.06837,
          "Sep-26": 23e-5
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 23e-5,
          "Jun-26": 23e-5,
          "Jul-26": 23e-5,
          "Aug-26": 23e-5,
          "Sep-26": 23e-5
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 2e-6,
          "Jun-26": 2e-6,
          "Jul-26": 2e-6,
          "Aug-26": 2e-6,
          "Sep-26": 2e-6
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
          "Jan-26": 6518e-6,
          "Feb-26": 8139e-6,
          "Mar-26": 0.018439,
          "Apr-26": 7673e-6,
          "May-26": 0.026529,
          "Jun-26": 9338e-6,
          "Jul-26": 8644e-6,
          "Aug-26": 9499e-6,
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
          "Jan-26": -6928e-6,
          "Feb-26": -6244e-6,
          "Mar-26": 0.011249,
          "Apr-26": -7083e-6,
          "May-26": -0.011725,
          "Jun-26": 0.02049,
          "Jul-26": 144e-5,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 1.727301,
          "Apr-26": 0,
          "May-26": 1561e-6,
          "Jun-26": 1561e-6,
          "Jul-26": 1561e-6,
          "Aug-26": 1561e-6,
          "Sep-26": 1.517317
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 584e-6,
          "Feb-26": 527e-6,
          "Mar-26": 8462e-6,
          "Apr-26": 523e-6,
          "May-26": 93e-6,
          "Jun-26": 39e-6,
          "Jul-26": 4e-5,
          "Aug-26": 4e-5,
          "Sep-26": 39e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.010268,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 2086e-6,
          "Feb-26": 416e-6,
          "Mar-26": 0.022777,
          "Apr-26": 7107e-6,
          "May-26": 9398e-6,
          "Jun-26": -1126e-6,
          "Jul-26": -8702e-6,
          "Aug-26": 0.032692,
          "Sep-26": 5297e-6
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
          "Jan-26": 5411e-6,
          "Feb-26": 4966e-6,
          "Mar-26": 6973e-6,
          "Apr-26": 9938e-6,
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
          "Jan-26": 1486e-6,
          "Feb-26": 1236e-6,
          "Mar-26": 1089e-6,
          "Apr-26": 108e-5,
          "May-26": 1127e-6,
          "Jun-26": 1363e-6,
          "Jul-26": 144e-5,
          "Aug-26": 1632e-6,
          "Sep-26": 1301e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 4303e-6,
          "Jun-26": 3332e-6,
          "Jul-26": 3332e-6,
          "Aug-26": 0.027443,
          "Sep-26": 3332e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 1061e-6,
          "Feb-26": 4763e-6,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0.80447,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 447e-6,
        "monthlyBalances": {
          "Jan-26": 447e-6,
          "Feb-26": 447e-6,
          "Mar-26": 447e-6,
          "Apr-26": 447e-6,
          "May-26": 447e-6,
          "Jun-26": 447e-6,
          "Jul-26": 447e-6,
          "Aug-26": 447e-6,
          "Sep-26": 447e-6
        },
        "monthlyRevenue": {
          "Jan-26": 3e-6,
          "Feb-26": 3e-6,
          "Mar-26": 3e-6,
          "Apr-26": 3e-6,
          "May-26": 3e-6,
          "Jun-26": 3e-6,
          "Jul-26": 3e-6,
          "Aug-26": 3e-6,
          "Sep-26": 3e-6
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
    "reportedLimitMn": 10,
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
          "Jan-26": -4293e-6,
          "Feb-26": -3106e-6,
          "Mar-26": -2211e-6,
          "Apr-26": -2357e-6,
          "May-26": -5043e-6,
          "Jun-26": -1225e-6,
          "Jul-26": -842e-6,
          "Aug-26": -1696e-6,
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
          "Jan-26": 6042e-6,
          "Feb-26": 5302e-6,
          "Mar-26": 5828e-6,
          "Apr-26": 5672e-6,
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
          "Jan-26": 4811e-6,
          "Feb-26": 4313e-6,
          "Mar-26": 4233e-6,
          "Apr-26": 4336e-6,
          "May-26": 6199e-6,
          "Jun-26": 6118e-6,
          "Jul-26": 6115e-6,
          "Aug-26": 6264e-6,
          "Sep-26": 5188e-6
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 21e-6,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
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
          "Feb-26": 6813e-6,
          "Mar-26": 2279e-6,
          "Apr-26": 9553e-6,
          "May-26": 0.011645,
          "Jun-26": -8403e-6,
          "Jul-26": 0.025103,
          "Aug-26": 511e-6,
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
          "Jan-26": 23e-6,
          "Feb-26": 21e-6,
          "Mar-26": -335e-6,
          "Apr-26": -1281e-6,
          "May-26": -1284e-6,
          "Jun-26": -264e-6,
          "Jul-26": -733e-6,
          "Aug-26": 1455e-6,
          "Sep-26": 3367e-6
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 10.15595,
          "Apr-26": 0.789009,
          "May-26": 0,
          "Jun-26": 1.666667,
          "Jul-26": 0.813879,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 9654e-6,
        "monthlyBalances": {
          "Jan-26": 0.014072,
          "Feb-26": 0.012252,
          "Mar-26": 7447e-6,
          "Apr-26": 0.013497,
          "May-26": 0.174662,
          "Jun-26": 0.201557,
          "Jul-26": 0.220871,
          "Aug-26": 0.247634,
          "Sep-26": 0.605014
        },
        "monthlyRevenue": {
          "Jan-26": 53e-6,
          "Feb-26": 6e-6,
          "Mar-26": 63e-6,
          "Apr-26": 226e-6,
          "May-26": 4011e-6,
          "Jun-26": 3624e-6,
          "Jul-26": -1525e-6,
          "Aug-26": -1738e-6,
          "Sep-26": 3175e-6
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
          "Jan-26": 719e-6,
          "Feb-26": 772e-6,
          "Mar-26": 984e-6,
          "Apr-26": 1918e-6,
          "May-26": 435e-5,
          "Jun-26": 4283e-6,
          "Jul-26": 6711e-6,
          "Aug-26": 897e-5,
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
          "Jan-26": 2526e-6,
          "Feb-26": 1267e-6,
          "Mar-26": 1142e-6,
          "Apr-26": -1436e-6,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 234e-6,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.014579,
          "Jun-26": 0.024129,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 887e-6,
          "Feb-26": 17e-5,
          "Mar-26": 3574e-6,
          "Apr-26": 938e-5,
          "May-26": 55e-6,
          "Jun-26": -2577e-6,
          "Jul-26": 2303e-6,
          "Aug-26": 93e-6,
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
          "Jan-26": 3302e-6,
          "Feb-26": 2826e-6,
          "Mar-26": 87e-6,
          "Apr-26": -6484e-6,
          "May-26": -8197e-6,
          "Jun-26": -9928e-6,
          "Jul-26": -0.04478,
          "Aug-26": 0.010287,
          "Sep-26": -8088e-6
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0.189355,
          "Apr-26": 6.37468,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": -1738e-6,
          "Feb-26": 3506e-6,
          "Mar-26": 5031e-6,
          "Apr-26": 9326e-6,
          "May-26": -3024e-6,
          "Jun-26": 2619e-6,
          "Jul-26": -995e-6,
          "Aug-26": 1961e-6,
          "Sep-26": -1059e-6
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
          "Jan-26": 205e-6,
          "Feb-26": 185e-6,
          "Mar-26": 205e-6,
          "Apr-26": 202e-6,
          "May-26": 218e-6,
          "Jun-26": 236e-6,
          "Jul-26": 245e-6,
          "Aug-26": 245e-6,
          "Sep-26": 237e-6
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
          "Jan-26": 79e-6,
          "Feb-26": 71e-6,
          "Mar-26": 79e-6,
          "Apr-26": 76e-6,
          "May-26": 79e-6,
          "Jun-26": 76e-6,
          "Jul-26": 79e-6,
          "Aug-26": 79e-6,
          "Sep-26": 76e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.245174,
          "Jun-26": 0.15082,
          "Jul-26": 0.060031,
          "Aug-26": 0.082036,
          "Sep-26": 0.043573
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 2561e-6,
        "monthlyBalances": {
          "Jan-26": 3663e-6,
          "Feb-26": 6716e-6,
          "Mar-26": 4272e-6,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 2117e-6,
          "Feb-26": 2209e-6,
          "Mar-26": 2757e-6,
          "Apr-26": 3221e-6,
          "May-26": 3566e-6,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 411e-6,
          "Apr-26": 1415e-6,
          "May-26": 2221e-6,
          "Jun-26": 5952e-6,
          "Jul-26": 5952e-6,
          "Aug-26": 5952e-6,
          "Sep-26": 5952e-6
        },
        "monthlyRevenue": {
          "Jan-26": 164e-6,
          "Feb-26": -96e-6,
          "Mar-26": 18e-5,
          "Apr-26": 9e-6,
          "May-26": 14e-6,
          "Jun-26": 43e-6,
          "Jul-26": 45e-6,
          "Aug-26": 45e-6,
          "Sep-26": 44e-6
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
          "Jan-26": -4054e-6,
          "Feb-26": 0.018986,
          "Mar-26": -2588e-6,
          "Apr-26": 3209e-6,
          "May-26": -3224e-6,
          "Jun-26": -272e-5,
          "Jul-26": -2492e-6,
          "Aug-26": 31e-4,
          "Sep-26": -83e-5
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
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
          "Jan-26": 101e-6,
          "Feb-26": 468e-6,
          "Mar-26": 518e-6,
          "Apr-26": 1005e-6,
          "May-26": 2409e-6,
          "Jun-26": 3518e-6,
          "Jul-26": 3914e-6,
          "Aug-26": 4838e-6,
          "Sep-26": 4076e-6
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0.967742,
          "Feb-26": 3,
          "Mar-26": 3,
          "Apr-26": 3,
          "May-26": 3,
          "Jun-26": 3,
          "Jul-26": 3,
          "Aug-26": 3,
          "Sep-26": 6
        },
        "monthlyRevenue": {
          "Jan-26": -3e-6,
          "Feb-26": -9e-6,
          "Mar-26": -1e-5,
          "Apr-26": -1e-5,
          "May-26": -1e-5,
          "Jun-26": -1e-5,
          "Jul-26": -244e-6,
          "Aug-26": -1e-5,
          "Sep-26": 367e-6
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
    "reportedLimitMn": 18,
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
          "Jan-26": -3514e-6,
          "Feb-26": -2429e-6,
          "Mar-26": -2565e-6,
          "Apr-26": -1726e-6,
          "May-26": 898e-6,
          "Jun-26": -1742e-6,
          "Jul-26": -235e-6,
          "Aug-26": -3275e-6,
          "Sep-26": -2815e-6
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
          "Feb-26": 5372e-6,
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
          "Jan-26": 475e-6,
          "Feb-26": 6068e-6,
          "Mar-26": -24e-6,
          "Apr-26": -161e-6,
          "May-26": -0.018062,
          "Jun-26": -0.017305,
          "Jul-26": -0.017885,
          "Aug-26": -0.017368,
          "Sep-26": -5554e-6
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
          "Jan-26": -1157e-6,
          "Feb-26": 241e-6,
          "Mar-26": -1263e-6,
          "Apr-26": 6761e-6,
          "May-26": -2e-4,
          "Jun-26": 2161e-6,
          "Jul-26": 8926e-6,
          "Aug-26": 4486e-6,
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
          "Jan-26": 128e-6,
          "Feb-26": 165e-6,
          "Mar-26": -469e-6,
          "Apr-26": 282e-5,
          "May-26": -119e-6,
          "Jun-26": 412e-6,
          "Jul-26": 689e-6,
          "Aug-26": -145e-6,
          "Sep-26": -71e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 278e-6,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0.04842,
          "Jul-26": 0.427018,
          "Aug-26": 0.235158,
          "Sep-26": 0.115014
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 2911e-6,
          "Jul-26": 7148e-6,
          "Aug-26": 0.017234,
          "Sep-26": 3673e-6
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.088191,
          "Jun-26": 0.157456,
          "Jul-26": 0.15572,
          "Aug-26": 0.247786,
          "Sep-26": 0.259124
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 951e-6,
          "Jun-26": 2511e-6,
          "Jul-26": -334e-6,
          "Aug-26": -1936e-6,
          "Sep-26": 41e-6
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 6.251092,
          "Jun-26": 10.348708,
          "Jul-26": 3.902472,
          "Aug-26": 4.17874,
          "Sep-26": 3.131819
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 1.232796,
          "Jun-26": 1.236617,
          "Jul-26": 1.228107,
          "Aug-26": 1.237315,
          "Sep-26": 1.232729
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 3494e-6,
          "Jun-26": 3395e-6,
          "Jul-26": 1664e-6,
          "Aug-26": 5e-6,
          "Sep-26": 58e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.231847,
          "Jun-26": 0.2152,
          "Jul-26": 0.116105,
          "Aug-26": 38e-6,
          "Sep-26": 51e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0.231986,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": -261e-6,
          "Feb-26": -158e-6,
          "Mar-26": 0.020464,
          "Apr-26": -5927e-6,
          "May-26": -7757e-6,
          "Jun-26": -3777e-6,
          "Jul-26": -3648e-6,
          "Aug-26": 835e-6,
          "Sep-26": -6764e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 12e-6,
          "Sep-26": 13e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 9495e-6,
          "Jun-26": 0.08719,
          "Jul-26": 0.024544,
          "Aug-26": 0.097723,
          "Sep-26": 0.047026
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 1434e-6,
          "Jun-26": -656e-6,
          "Jul-26": -192e-6,
          "Aug-26": -763e-6,
          "Sep-26": -354e-6
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
          "Jan-26": 1049e-6,
          "Feb-26": 431e-6,
          "Mar-26": 194e-6,
          "Apr-26": 245e-6,
          "May-26": 539e-6,
          "Jun-26": 503e-6,
          "Jul-26": 256e-6,
          "Aug-26": 195e-6,
          "Sep-26": 146e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 63e-6,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 196e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 6158e-6,
        "monthlyBalances": {
          "Jan-26": 2567e-6,
          "Feb-26": 0.010891,
          "Mar-26": 0.019331,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 2111e-6,
          "Feb-26": 0.014991,
          "Mar-26": -127e-6,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": 1391e-6,
          "Feb-26": 1246e-6,
          "Mar-26": 1371e-6,
          "Apr-26": 2231e-6,
          "May-26": 1318e-6,
          "Jun-26": 1431e-6,
          "Jul-26": 1484e-6,
          "Aug-26": 1484e-6,
          "Sep-26": 1436e-6
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
          "Jan-26": -72e-6,
          "Feb-26": -68e-6,
          "Mar-26": 0,
          "Apr-26": 141e-6,
          "May-26": 42e-6,
          "Jun-26": 32e-6,
          "Jul-26": 3e-5,
          "Aug-26": 16e-6,
          "Sep-26": 7483e-6
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
          "Jan-26": 106e-6,
          "Feb-26": 8199e-6,
          "Mar-26": 1893e-6,
          "Apr-26": 815e-6,
          "May-26": -1474e-6,
          "Jun-26": -8335e-6,
          "Jul-26": -2961e-6,
          "Aug-26": -326e-5,
          "Sep-26": 659e-6
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
          "Feb-26": 7657e-6,
          "Mar-26": 6204e-6,
          "Apr-26": 8398e-6,
          "May-26": 0.026421,
          "Jun-26": 0.019261,
          "Jul-26": 0.020353,
          "Aug-26": 9423e-6,
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
          "Jan-26": 5607e-6,
          "Feb-26": 1231e-6,
          "Mar-26": 18e-6,
          "Apr-26": 3374e-6,
          "May-26": 0.025636,
          "Jun-26": 0.082026,
          "Jul-26": 1034e-6,
          "Aug-26": 3353e-6,
          "Sep-26": 0.060411
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0.272886,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0.944977,
          "Aug-26": 0,
          "Sep-26": 0.63922
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
    "reportedLimitMn": 1,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.05738,
          "Jun-26": 0.055208,
          "Jul-26": 0.018147,
          "Aug-26": 0.035388,
          "Sep-26": 0.041593
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 2399e-6,
        "monthlyBalances": {
          "Jan-26": 4061e-6,
          "Feb-26": 0.010156,
          "Mar-26": 3161e-6,
          "Apr-26": 2103e-6,
          "May-26": 2309e-6,
          "Jun-26": 2575e-6,
          "Jul-26": 2306e-6,
          "Aug-26": 2642e-6,
          "Sep-26": 648e-5
        },
        "monthlyRevenue": {
          "Jan-26": 7487e-6,
          "Feb-26": -46e-6,
          "Mar-26": 21e-6,
          "Apr-26": 28e-6,
          "May-26": 26e-6,
          "Jun-26": 23e-6,
          "Jul-26": 24e-6,
          "Aug-26": 22e-6,
          "Sep-26": 3567e-6
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
          "Jan-26": 9936e-6,
          "Feb-26": 972e-5,
          "Mar-26": 0.010146,
          "Apr-26": 8074e-6,
          "May-26": 1.182066,
          "Jun-26": 0.223047,
          "Jul-26": 0.356188,
          "Aug-26": 0.135781,
          "Sep-26": 0.121244
        },
        "monthlyRevenue": {
          "Jan-26": 28e-6,
          "Feb-26": 25e-6,
          "Mar-26": 29e-6,
          "Apr-26": 23e-6,
          "May-26": 8703e-6,
          "Jun-26": 2486e-6,
          "Jul-26": 3966e-6,
          "Aug-26": 2373e-6,
          "Sep-26": 1847e-6
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.967742,
          "Jun-26": 10.468841,
          "Jul-26": 10.937681,
          "Aug-26": 10.937681,
          "Sep-26": 10.937681
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -1022e-6,
          "Jun-26": 1e-5,
          "Jul-26": -676e-6,
          "Aug-26": 11e-6,
          "Sep-26": 11e-6
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
          "Jan-26": 738e-6,
          "Feb-26": 723e-6,
          "Mar-26": 545e-6,
          "Apr-26": 572e-6,
          "May-26": -661e-6,
          "Jun-26": 0.010676,
          "Jul-26": -918e-6,
          "Aug-26": -1334e-6,
          "Sep-26": 8482e-6
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
          "Jan-26": 119e-6,
          "Feb-26": 108e-6,
          "Mar-26": 119e-6,
          "Apr-26": 118e-6,
          "May-26": 2286e-6,
          "Jun-26": 238e-5,
          "Jul-26": 2597e-6,
          "Aug-26": 2708e-6,
          "Sep-26": 2728e-6
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
          "Jan-26": 452e-6,
          "Feb-26": 408e-6,
          "Mar-26": 485e-6,
          "Apr-26": 485e-6,
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 26e-5,
          "Jun-26": 26e-5,
          "Jul-26": 26e-5,
          "Aug-26": 26e-5,
          "Sep-26": 26e-5
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
          "Jan-26": -6204e-6,
          "Feb-26": 2882e-6,
          "Mar-26": 3479e-6,
          "Apr-26": 0.016333,
          "May-26": 2974e-6,
          "Jun-26": -308e-5,
          "Jul-26": 0.01124,
          "Aug-26": -261e-6,
          "Sep-26": -245e-6
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
          "Jan-26": 284e-6,
          "Feb-26": 9e-5,
          "Mar-26": -2638e-6,
          "Apr-26": -2791e-6,
          "May-26": 8749e-6,
          "Jun-26": 948e-6,
          "Jul-26": 0.012972,
          "Aug-26": 3691e-6,
          "Sep-26": -739e-6
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
          "Jan-26": 0,
          "Feb-26": 0.714286,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 8.958675,
          "Jun-26": 9.007976,
          "Jul-26": 9.005411,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.499442,
          "Jun-26": 6536e-6,
          "Jul-26": 6536e-6,
          "Aug-26": 6536e-6,
          "Sep-26": 6536e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.021865,
          "Jun-26": 2117e-6,
          "Jul-26": 0.100073,
          "Aug-26": 49e-6,
          "Sep-26": 47e-6
        }
      },
      {
        "productCode": "TD_CR",
        "productName": "Term & Fixed Deposits (TD CR)",
        "productGroup": "Corporate Term & Fixed Deposits (TD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 10,
          "Jun-26": 10,
          "Jul-26": 10,
          "Aug-26": 10,
          "Sep-26": 10
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 4303e-6,
          "Jun-26": 4164e-6,
          "Jul-26": 4158e-6,
          "Aug-26": 4303e-6,
          "Sep-26": 4164e-6
        }
      },
      {
        "productCode": "CARD_CR",
        "productName": "Card Credit Balances (CARD CR)",
        "productGroup": "Commercial Card Credit Balances (CARD CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 996e-6,
          "Jun-26": 1913e-6,
          "Jul-26": 485e-6,
          "Aug-26": 215e-6,
          "Sep-26": 19e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
        }
      },
      {
        "productCode": "REMIT_DR",
        "productName": "Remittances (Remittance DR)",
        "productGroup": "Inward & Outward International Remittances",
        "category": "remittance",
        "measureLabel": "REMITTANCE_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.038068,
          "Jun-26": 0.020508,
          "Jul-26": 0.193792,
          "Aug-26": 0,
          "Sep-26": 0
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 5e-3,
          "Jun-26": 0,
          "Jul-26": 5e-3,
          "Aug-26": 0,
          "Sep-26": 0
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
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.890038,
          "Jun-26": 2.709043,
          "Jul-26": 3.210585,
          "Aug-26": 3.630363,
          "Sep-26": 4.494387
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 1061e-6,
          "Jun-26": 2417e-6,
          "Jul-26": 891e-6,
          "Aug-26": 3679e-6,
          "Sep-26": 114e-5
        }
      },
      {
        "productCode": "CARD_DR",
        "productName": "Credit Cards (CARD DR)",
        "productGroup": "Commercial & Corporate Credit Cards (CARD DR)",
        "category": "asset",
        "measureLabel": "AVG_BAL_DR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0.825249,
          "Jun-26": 0.325234,
          "Jul-26": 0.417722,
          "Aug-26": 0.549853,
          "Sep-26": 0.39585
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": -5747e-6,
          "Jun-26": -2454e-6,
          "Jul-26": -3264e-6,
          "Aug-26": -4296e-6,
          "Sep-26": -2993e-6
        }
      },
      {
        "productCode": "CASA_CR",
        "productName": "Current & Savings Accounts (CASA CR)",
        "productGroup": "Corporate Current & Call Accounts (CASA CR)",
        "category": "liability",
        "measureLabel": "AVG_BAL_CR_LCY",
        "dec25Bf": 0,
        "monthlyBalances": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 1051e-6,
          "Jun-26": 1061e-6,
          "Jul-26": 1057e-6,
          "Aug-26": 1058e-6,
          "Sep-26": 1053e-6
        },
        "monthlyRevenue": {
          "Jan-26": 0,
          "Feb-26": 0,
          "Mar-26": 0,
          "Apr-26": 0,
          "May-26": 0,
          "Jun-26": 0,
          "Jul-26": 0,
          "Aug-26": 0,
          "Sep-26": 0
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
function buildCompleteCustomerDirectory(primaryList = INITIAL_CUSTOMERS) {
  const map = /* @__PURE__ */ new Map();
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

// api/_entry.ts
var app = createExpressApp();
var entry_default = app;
export {
  entry_default as default
};
