import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { config } from "@/lib/config";

const steps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="9" width="14" height="10" rx="2" stroke="#c9922a" strokeWidth="1.5" />
        <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="14" r="1.5" fill="#c9922a" />
      </svg>
    ),
    num: "1.",
    title: "Create",
    desc: "Generate your API token instantly.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 6h14M3 10h10M3 14h7" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="14" r="2.5" stroke="#c9922a" strokeWidth="1.5" />
      </svg>
    ),
    num: "2.",
    title: "Configure",
    desc: "Set permissions, rate limits, and budgets.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 10l3 3 3-3M10 13V4" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 15h12" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    num: "3.",
    title: "Connect",
    desc: "Integrate easily with our simple, unified API.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 4 3 4-7" stroke="#c9922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    num: "4.",
    title: "Scale",
    desc: "Ship faster and scale with reliability you can trust.",
  },
];

export default function TokenFactory() {
  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text */}
          <AnimatedSection className="flex flex-col">
            <div className="inline-flex items-center gap-2 mb-6">
              <Image
                src="/bfc_logo_c.png"
                alt="Bay Area Founders Club"
                width={100}
                height={26}
                className="h-5 w-auto opacity-70"
              />
              <span className="text-xs font-semibold text-[#aaa] tracking-widest uppercase">Bay Area Founders Club</span>
            </div>

            <h2 className="text-5xl font-extrabold leading-tight mb-3">
              <span className="text-[#1a1a1a]">Token </span>
              <span className="text-[#c9922a]">Factory</span>
            </h2>
            <p className="text-lg text-[#666] font-medium mb-4">One API. Infinite Possibilities.</p>
            <p className="text-sm text-[#888] leading-relaxed max-w-md mb-10">
              Create API tokens in seconds and power your AI apps with the best models,
              lowest cost, and enterprise-grade reliability.
            </p>

            <div className="flex flex-col gap-5">
              {steps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9922a]/10 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a1a]">
                      {step.num} <span>{step.title}</span>
                    </p>
                    <p className="text-sm text-[#888] mt-0.5">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 mt-10 w-px h-5 bg-[#c9922a]/20 hidden" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={config.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9922a] hover:bg-[#b8832a] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* RIGHT: Image */}
          <AnimatedSection delay={0.15} className="flex items-center justify-center">
            <Image
              src="/token-factory.png"
              alt="Token Factory — One API. Infinite Possibilities."
              width={680}
              height={560}
              className="w-full max-w-[620px] object-contain"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
