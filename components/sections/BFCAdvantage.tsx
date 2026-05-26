import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

const advantages = [
  {
    bfc: "BFC ecosystem credits & perks for members",
    generic: "Standard pricing only",
  },
  {
    bfc: "Access to the BFC founder & investor network",
    generic: "No community layer",
  },
  {
    bfc: "Curated model recommendations from operators",
    generic: "DIY model selection",
  },
  {
    bfc: "Priority support via BFC channels",
    generic: "Ticket-based support queue",
  },
];

const pillars = [
  {
    title: "Signal, not noise",
    body: "You don't need more theory. BFC Gateway surfaces the right models for your use case — curated by founders who've shipped with them.",
  },
  {
    title: "The right room",
    body: "100,000+ founders, 5000+ enterprises, 1,000+ VCs, 173 countries. When you build on BFC infrastructure, you're already in the room that shapes what's next.",
  },
  {
    title: "Speed and execution",
    body: "We keep our client roster intentionally focused so every partnership gets speed, focus, and real execution — not a support ticket.",
  },
];

export default function BFCAdvantage() {
  return (
    <section id="advantage" className="py-24 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase mb-3">
            BFC Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Not just infrastructure.
            <br />
            <span className="text-[#c9922a]">An unfair advantage.</span>
          </h2>
          <p className="text-[#777] max-w-2xl mx-auto">
            BFC AI Gateway is built by founders, for founders. You get more than
            an API — you get access to the network, the signal, and the room
            that shapes what&apos;s next.
          </p>
        </AnimatedSection>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <div className="relative p-7 rounded-xl border border-[#e8e2d9] bg-white h-full shadow-sm">
                <div className="w-8 h-px bg-[#c9922a] mb-5" />
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">{pillar.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Comparison table */}
        <AnimatedSection>
          <div className="rounded-2xl border border-[#e8e2d9] overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-2 bg-[#f2ede7]">
              <div className="px-6 py-4 flex items-center gap-3 border-r border-[#e8e2d9]">
                <Image
                  src="/bfc_logo_c.png"
                  alt="BFC AI Gateway"
                  width={100}
                  height={26}
                  className="h-5 w-auto"
                />
                <span className="text-xs font-semibold text-[#c9922a] tracking-wide uppercase">
                  AI Gateway
                </span>
              </div>
              <div className="px-6 py-4 flex items-center">
                <span className="text-xs font-semibold text-[#aaa] tracking-wide uppercase">
                  Generic API Aggregators
                </span>
              </div>
            </div>

            {/* Rows */}
            {advantages.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#faf8f5]"
                }`}
              >
                <div className="px-6 py-4 flex items-start gap-3 border-r border-[#f0ebe3]">
                  <svg
                    className="shrink-0 mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="7" stroke="#c9922a" strokeWidth="1.2" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="#c9922a"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-[#1a1a1a]">{row.bfc}</span>
                </div>
                <div className="px-6 py-4 flex items-start gap-3">
                  <svg
                    className="shrink-0 mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="7" stroke="#ddd" strokeWidth="1.2" />
                    <path
                      d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                      stroke="#ccc"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-[#aaa]">{row.generic}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
