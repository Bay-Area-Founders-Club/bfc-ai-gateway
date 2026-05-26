export const config = {
  platformUrl: "https://dashboard.bafc.io",
  docsUrl: "https://doc.bafc.io/#en",
  bfcMainSite: "https://www.bayareafoundersclub.com",
  contactEmail: "gateway@bayareafoundersclub.com",
  stats: [
    { value: "80+", label: "AI Models" },
    { value: "40%", label: "Cost Reduction" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "100,000+", label: "BFC Founders" },
  ],
  features: [
    {
      icon: "gateway",
      title: "Unified API Gateway",
      description:
        "One endpoint for text, image, video, and audio. Every frontier model, zero integration overhead.",
    },
    {
      icon: "routing",
      title: "Smart Cost Routing",
      description:
        "Automatically routes to the most cost-effective model that meets your quality bar — no manual tuning.",
    },
    {
      icon: "failover",
      title: "Failover & Reliability",
      description:
        "If one provider goes down, we reroute instantly. Your product keeps running without interruption.",
    },
    {
      icon: "network",
      title: "BFC Member Credits",
      description:
        "BFC ecosystem members get exclusive credits, priority access, and startup pricing unavailable elsewhere.",
    },
  ],
  models: [
    { name: "OpenAI", filename: "openai" },
    { name: "Anthropic", filename: "anthropic" },
    { name: "Google", filename: "google" },
    { name: "Meta", filename: "meta" },
    { name: "Mistral", filename: "mistral" },
    { name: "Stability AI", filename: "stability" },
    { name: "Cohere", filename: "cohere" },
    { name: "xAI", filename: "xai" },
  ],
} as const;
