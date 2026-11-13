# 💰 PixartualAI — Business Model & Pricing Economics

> **Document Version**: 2.0.0  
> **Status**: Approved Financial & Commercial Architecture  
> **Model**: Predictable Credit Subscription with Add-on Elasticity

---

## 1. Pricing Philosophy: The Credit Advantage

### Why Credits Instead of Variable Token Billing?
Platforms charging users per token (or raw LLM input/output fractions) subject customers to **"Token Anxiety"**—the fear that asking for a complex page or detailed refinement will result in an unpredictable invoice.

**PixartualAI solves this with a Deterministic Flat-Credit Model:**
1. **Predictable Spend**: Every action has a transparent, fixed credit cost regardless of how many tokens the underlying model consumes.
2. **Built-in Profit Margins**: Every credit tier guarantees a minimum 65–80% gross margin over raw LLM API and compute infrastructure costs.
3. **No Overage Surprises**: When plan credits reach zero, work does not halt unexpectedly—users can choose to top up or wait for monthly renewal.

---

## 2. Plan Matrix & Tier Gating

| Feature / Limit | Free Plan | Starter Plan | Pro Plan (Most Popular) | Enterprise |
| :--- | :--- | :--- | :--- | :--- |
| **Monthly Price (Billed Yearly)** | **$0** forever | **$20** / month | **$40** / month | Custom Contact |
| **Monthly Price (Billed Monthly)**| **$0** | **$25** / month | **$49** / month | Custom |
| **Monthly AI Credits** | **35 credits** *(one-time grant)* | **100 credits** / mo *(slider to 500)* | **500 credits** / mo *(slider to 2500)* | Custom Allocation |
| **Hosted Sites** | 1 site | 1 site (expandable) | 3 sites included (up to 10) | Unlimited |
| **Subdomain Publishing** | ✅ Included (`*.pixartual.app`) | ✅ Included | ✅ Included | ✅ Included |
| **Custom Domain Support** | ❌ | ✅ 1 Custom Domain | ✅ 3 Custom Domains | ✅ Unlimited |
| **Remove Pixartual Branding**| ❌ | ✅ Included | ✅ Included | ✅ White-label |
| **Relational Database** | ✅ 500 records | ✅ 25,000 records | ✅ 250,000 records | Dedicated Cluster |
| **File Storage** | 250 MB | 5 GB | 50 GB | 1 TB+ |
| **Realtime Analytics** | Basic (7 days) | Standard (30 days) | Advanced (1 year) | Full Event Export |
| **Code Export (React/Next.js)**| ❌ | ✅ Clean Code ZIP | ✅ Clean Code ZIP + Git sync | Custom Monorepo |
| **Monthly Email Sends** | 10 emails/mo | 10,000 emails/mo | 50,000 emails/mo | Dedicated IP |
| **Team Collaborators** | 1 seat | 2 seats | 5 seats included | Unlimited RBAC |
| **Support SLA** | Community | Standard Email | Priority Support (4h SLA) | 24/7 Dedicated Slack |

---

## 3. Credit Consumption Schedule

Credits map deterministically to high-value product actions:

```
┌────────────────────────────────────────────────────────┬───────────────┐
│ Action Category                                        │ Credit Cost   │
├────────────────────────────────────────────────────────┼───────────────┤
│ New Full Product Generation (Landing + App + Schema)   │ 20 credits    │
│ Single Full Page Synthesis (e.g., Pricing, Docs)       │ 10 credits    │
│ Surgical Section Refinement (e.g., Layout/Copy via Chat)│ 2 credits     │
│ Procedural AI Image Generation (Brand Visual Asset)    │ 3 credits     │
│ Relational CMS Collection Auto-Population (Mock Data)  │ 5 credits     │
│ Complete Responsive Mobile Optimization Pass           │ 3 credits     │
│ Webflow / Framer Site Ingestion & 1:1 Rebuild          │ 25 credits    │
└────────────────────────────────────────────────────────┴───────────────┘
```

---

## 4. Top-Up Credit Packs

Active subscribers can purchase add-on credit bundles at any time. Unlike monthly plan credits (which reset each billing cycle), **Top-Up Credits Never Expire** as long as the account holds an active paid subscription.

- **Starter Pack**: 250 credits — **$15** ($0.060 per credit)
- **Growth Pack**: 500 credits — **$25** ($0.050 per credit)
- **Scale Pack**: 1,200 credits — **$50** ($0.041 per credit)
- **Power Pack**: 3,000 credits — **$100** ($0.033 per credit)

---

## 5. Unit Economics & Gross Margin Architecture

### Cost Model per Generation Event:
- **LLM Synthesis Cost**:
  - Utilizing optimized prompt compression and structured JSON schemas with cutting-edge frontier models (Gemini 2.5/Claude 3.7):
  - Average tokens per Full Product Generation: ~18,000 input tokens + ~4,500 output tokens.
  - Blended API Cost: **~$0.045 per generation**.
- **User Charge via Credits**:
  - 20 credits on the Starter plan ($0.20 per credit) = **$4.00 nominal value**.
  - On the highest-volume pack ($0.033 per credit) = **$0.66 nominal value**.
- **Gross Margin**:
  - Starter Plan Margin: `($4.00 - $0.045) / $4.00` = **98.8% gross margin**.
  - High-Volume Pack Margin: `($0.66 - $0.045) / $0.66` = **93.1% gross margin**.
  - Factoring in static hosting, edge CDN transfer, and database storage overhead ($0.15/site/month):
  - **Overall Platform Gross Margin stays robustly between 82% and 89%**.
