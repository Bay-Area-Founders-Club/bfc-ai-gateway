import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    num: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="10" width="8" height="14" rx="2" stroke="#c9922a" strokeWidth="1.8" />
        <rect x="12" y="6" width="8" height="20" rx="2" stroke="#c9922a" strokeWidth="1.8" />
        <rect x="22" y="10" width="8" height="14" rx="2" stroke="#c9922a" strokeWidth="1.8" />
        <path d="M10 16h2M20 16h2" stroke="#c9922a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Unified API Gateway",
    description:
      "One endpoint for text, image, video, and audio. Every frontier model, zero integration overhead.",
    tag: "SIMPLE. POWERFUL. UNIFIED.",
  },
  {
    num: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16h4l4-8 5 16 4-8h7" stroke="#c9922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Smart Cost Routing",
    description:
      "Automatically routes to the most cost-effective model that meets your quality bar — no manual tuning.",
    tag: "SAVE MORE. WITHOUT SACRIFICING QUALITY.",
  },
  {
    num: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 8v9c0 6 5.3 11.6 12 13 6.7-1.4 12-7 12-13V8L16 3z" stroke="#c9922a" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 16l4 4 8-8" stroke="#c9922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Failover & Reliability",
    description:
      "If one provider goes down, we reroute instantly. Your product keeps running without interruption.",
    tag: "BUILT FOR RELIABILITY. ALWAYS ON.",
  },
  {
    num: "04",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="11" r="5" stroke="#c9922a" strokeWidth="1.8" />
        <path d="M6 28c0-4.4 3.6-8 8-8h1" stroke="#c9922a" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 20l1.5 3 3.5.5-2.5 2.4.6 3.5L22 27.8l-3.1 1.6.6-3.5L17 23.5l3.5-.5L22 20z" stroke="#c9922a" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "BFC Member Credits",
    description:
      "BFC ecosystem members get exclusive credits, priority access, and startup pricing unavailable elsewhere.",
    tag: "EXCLUSIVE BENEFITS. REAL ADVANTAGE.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center border border-[#c9922a]/40 rounded-full px-5 py-1.5 mb-7">
            <span className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase">
              Platform
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
            All{" "}
            <span className="text-[#c9922a]">in one</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-base">
            A focused set of capabilities designed for teams that move fast and
            need their AI infrastructure to keep up.
          </p>
        </AnimatedSection>

        {/* Feature cards 2x2 */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-[#ede9e0] p-7 h-full flex gap-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Icon circle */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#c9922a]/10 flex items-center justify-center mt-1">
                  {f.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  {/* Number badge */}
                  <div className="inline-flex items-center border border-[#c9922a]/35 rounded-lg px-2.5 py-0.5 w-fit mb-3">
                    <span className="text-xs font-semibold text-[#c9922a]">{f.num}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">{f.description}</p>

                  {/* Tag */}
                  <div className="mt-4 inline-flex items-center bg-[#fdf5e6] border border-[#e8d5a0] rounded-full px-3 py-1 w-fit">
                    <span className="text-[10px] font-semibold text-[#c9922a] tracking-widest">
                      {f.tag}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
