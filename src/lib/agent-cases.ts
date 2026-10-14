export const researchDate = "14 October 2026";
export const agentCases = [
  {
    id: "felix", name: "Felix", owner: "Nat Eliason · The Masinov Company", category: "Products", initials: "F", color: "violet",
    headline: "Package the work. Sell the system.", mechanism: "Guides, agent configurations and a marketplace.", evidence: "Payment-linked revenue", result: "$275,645", resultLabel: "cumulative revenue shown by TrustMRR",
    finding: "The listed businesses have payment-linked revenue evidence. That supports sales, not an audited profit figure or a claim that the owner does no work.",
    lesson: "Start with a useful paid output. Turn repeated delivery into a reusable product.",
    caveat: "Snapshot, not a forecast. An established founder and audience helped distribution. Gross revenue does not establish take-home profit.",
    sources: [{ label: "Revenue evidence", url: "https://trustmrr.com/founder/FelixCraftAI" }, { label: "Operator interview", url: "https://mixergy.com/interviews/how-nat-eliasons-openclaw-earned-177417/" }, { label: "Original product", url: "https://felixcraft.ai/" }],
  },
  {
    id: "larry", name: "Larry", owner: "Oliver Henry", category: "Distribution", initials: "L", color: "blue",
    headline: "Give an existing product a growth loop.", mechanism: "App marketing through content and analytics.", evidence: "Operator / vendor reports", result: "Create → learn", resultLabel: "content, distribution and conversion feedback",
    finding: "Postiz describes an agent preparing app-marketing content and reading performance data. The revenue attribution is not independently audited here, so views are not counted as earnings.",
    lesson: "Connect content experiments to paid conversions, not just reach.", caveat: "Needs an actual product, distribution access and owner judgment. Vendor case studies are commercially interested evidence.",
    sources: [{ label: "Workflow case study", url: "https://postiz.com/blog/ai-builders-postiz-98k-month-millions-views" }, { label: "Creator interview", url: "https://www.youtube.com/watch?v=OV5eK91YY68" }],
  },
  {
    id: "xbow", name: "XBOW", owner: "XBOW security team", category: "Verified work", initials: "X", color: "amber",
    headline: "Make the result independently checkable.", mechanism: "Security findings in authorized bounty programs.", evidence: "Platform corroboration", result: "Validation first", resultLabel: "real findings, not a public profit statement",
    finding: "HackerOne corroborates XBOW’s US reputation ranking. XBOW describes validators and human review before submission. Neither ranking nor report volume establishes collected bounty profit.",
    lesson: "Build a verifier alongside the worker. A convincing output must survive a real check.", caveat: "A specialist team and infrastructure, not an easy side-income recipe. Testing requires explicit program authorization and permitted automation.",
    sources: [{ label: "HackerOne assessment", url: "https://www.hackerone.com/blog/ai-hackbots-security-testing-update" }, { label: "Technical account", url: "https://xbow.com/blog/top-1-how-xbow-did-it" }],
  },
  {
    id: "vend", name: "Claudius", owner: "Anthropic × Andon Labs · Project Vend", category: "Operations", initials: "C", color: "mint",
    headline: "Give the agent a business it can measure.", mechanism: "Inventory, pricing and sales in a real office shop.", evidence: "First-party experiment", result: "Loss → improvement", resultLabel: "real operations, with substantial human support",
    finding: "Phase one failed commercially. Phase two improved with better tools, cost visibility and procedures. Anthropic reports continued human support; an extra CEO agent was not clearly the reason for better results.",
    lesson: "Show actual costs. Set operating rules. Expand roles only when they solve a demonstrated bottleneck.", caveat: "A controlled research setting, not a general business-profit guarantee. Simulated Vending-Bench results are a separate category.",
    sources: [{ label: "Phase one", url: "https://www.anthropic.com/research/project-vend-1" }, { label: "Phase two", url: "https://www.anthropic.com/research/project-vend-2" }],
  },
] as const;
