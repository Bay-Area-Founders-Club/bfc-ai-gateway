import AnimatedSection from "@/components/ui/AnimatedSection";

const points = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#c9922a" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#c9922a" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#c9922a" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "Production-Proven Infrastructure",
    body: "Built from our internal middleware and already battle-tested in production. Our core products serve tens of millions of MAU — performance and scaling are not theoretical.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#c9922a" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 3l1 2h2l-1.5 1.5.5 2L18 7.5 16 8.5l.5-2L15 5h2z" stroke="#c9922a" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    title: "19 Engineers. 10+ Years of Experience.",
    body: "A dedicated team of 19 engineers actively supports this product, backed by deep long-term relationships with every major model provider.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#c9922a" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="#c9922a" strokeWidth="1.6" />
        <path d="M7 14h2M11 14h6" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Direct Official API Access",
    body: "We connect directly to official model provider APIs — not reverse-engineered endpoints. That means full feature parity, competitive pricing, and none of the instability of third-party proxies.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#c9922a" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "Early Access to New Models",
    body: "Our existing provider partnerships give you early access to debut model releases — often before they're available through standard channels.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#c9922a" strokeWidth="1.6" />
        <path d="M12 7v5l3 3" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "3-Day Model Integration",
    body: "When a new model drops, we can usually have it live within 3 business days. You stay at the frontier without any effort on your end.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V7l-8-4z" stroke="#c9922a" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Security, Stability & Concurrency",
    body: "Direct provider integrations eliminate intermediary risk. Your data stays secure, requests stay stable, and concurrency scales with your actual needs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-6 4 4 4-8 4 4" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Elastic Capacity",
    body: "Capacity scales quickly based on your usage. Whether you're shipping an MVP or handling enterprise-level traffic, the infrastructure grows with you.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="#c9922a" strokeWidth="1.6" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="#c9922a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Full Feature Parity",
    body: "Many competitors sell limited reverse APIs with no access to advanced model features. We support every capability exactly as the original provider offers it — just at fair prices.",
  },
];

export default function WhyBFC() {
  return (
    <section className="py-24 bg-[#f2ede7]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase mb-3">
            Why BFC AI Gateway
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Built different. Proven at scale.
          </h2>
          <p className="text-[#777] max-w-2xl mx-auto">
            Not a reseller. Not a proxy. A production-grade AI gateway built on direct provider relationships, a dedicated engineering team, and infrastructure that already serves tens of millions of users.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-[#e8e2d9] p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#c9922a]/10 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold text-[#1a1a1a] mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs text-[#777] leading-relaxed">{p.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
