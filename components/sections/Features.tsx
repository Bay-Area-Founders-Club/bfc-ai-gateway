import AnimatedSection from "@/components/ui/AnimatedSection";
import { config } from "@/lib/config";

const icons: Record<string, React.ReactNode> = {
  gateway: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="6" height="10" rx="1.5" stroke="#c9922a" strokeWidth="1.5" />
      <rect x="9" y="4" width="6" height="16" rx="1.5" stroke="#c9922a" strokeWidth="1.5" />
      <rect x="16" y="7" width="6" height="10" rx="1.5" stroke="#c9922a" strokeWidth="1.5" />
      <path d="M8 12h1M15 12h1" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  routing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l3-6 4 12 3-6h4" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  failover: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L12 6M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="#c9922a" strokeWidth="1.5" />
    </svg>
  ),
  network: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2.5" stroke="#c9922a" strokeWidth="1.5" />
      <circle cx="5" cy="19" r="2.5" stroke="#c9922a" strokeWidth="1.5" />
      <circle cx="19" cy="19" r="2.5" stroke="#c9922a" strokeWidth="1.5" />
      <path d="M12 7.5v3L5 16.5M12 7.5v3L19 16.5" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase mb-3">
            Platform
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-[#666] max-w-xl mx-auto">
            A focused set of capabilities designed for teams that move fast and
            need their AI infrastructure to keep up.
          </p>
        </AnimatedSection>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {config.features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="gradient-border p-7 h-full group hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#c9922a]/10 border border-[#c9922a]/20 flex items-center justify-center mb-5 group-hover:bg-[#c9922a]/15 group-hover:border-[#c9922a]/35 transition-all duration-300">
                  {icons[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#777] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
