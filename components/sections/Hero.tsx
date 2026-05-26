"use client";

import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/Button";
import { config } from "@/lib/config";

const miniFeatures = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="6" cy="6" r="2.5" stroke="#c9922a" strokeWidth="1.3" />
        <circle cx="12" cy="12" r="2.5" stroke="#c9922a" strokeWidth="1.3" />
        <path d="M9 6h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1" stroke="#c9922a" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "90+ Frontier Models",
    sub: "All in one place",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2l1.8 3.6L15 6.3l-3 2.9.7 4.1L9 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L9 2z" stroke="#c9922a" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    title: "Startup-Friendly Rates",
    sub: "Save more, build faster",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L3 5v5c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V5L9 2z" stroke="#c9922a" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M6.5 9l1.5 1.5 3-3" stroke="#c9922a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Backed by BFC Network",
    sub: "Trust. Support. Community.",
  },
];

/* Provider logo chips */
const providers = [
  {
    id: "openai",
    label: "OpenAI",
    pos: "top-[6%] right-[18%]",
    delay: 0,
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3a7.5 7.5 0 0 1 6.9 10.4 5.5 5.5 0 0 1-1.1 10.5 7.5 7.5 0 0 1-11.6 0A5.5 5.5 0 0 1 7.1 13.4 7.5 7.5 0 0 1 14 3z" stroke="#111" strokeWidth="1.4" fill="none" />
        <path d="M14 8v12M8.5 11l11 6M8.5 17l11-6" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "meta",
    label: "Meta",
    pos: "top-[28%] left-[4%]",
    delay: 0.15,
    logo: (
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
        <path d="M2 17C2 13 4 8 7 6c2-1.5 3.5 0 5 3l4-7c1.5-2.5 4-2.5 5.5 0L28 17" stroke="#0082FB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "anthropic",
    label: "Anthropic",
    pos: "top-[12%] right-[2%]",
    delay: 0.25,
    logo: (
      <span className="text-[17px] font-bold tracking-tight text-[#1a1a1a]">AI\</span>
    ),
  },
  {
    id: "mistral",
    label: "Mistral AI",
    pos: "top-[54%] right-[0%]",
    delay: 0.1,
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 bg-[#ff7000]" />
          <div className="w-2 h-2 bg-[#1a1a1a]" />
          <div className="w-2 h-2 bg-[#1a1a1a]" />
          <div className="w-2 h-2 bg-[#ff7000]" />
        </div>
        <span className="text-[11px] font-bold text-[#1a1a1a] leading-tight">MISTRAL<br/>AI_</span>
      </div>
    ),
  },
  {
    id: "google",
    label: "Google",
    pos: "bottom-[18%] right-[14%]",
    delay: 0.2,
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M26 14.3c0-.9-.1-1.8-.2-2.6H14v5h6.7c-.3 1.5-1.2 2.8-2.5 3.7v3h4c2.4-2.2 3.8-5.4 3.8-9.1z" fill="#4285F4" />
        <path d="M14 27c3.4 0 6.2-1.1 8.2-3l-4-3c-1.1.7-2.5 1.2-4.2 1.2-3.2 0-6-2.2-7-5.1H3v3.1C5 24.3 9.2 27 14 27z" fill="#34A853" />
        <path d="M7 17.1c-.3-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V9.4H3A13 13 0 0 0 1 14c0 2.1.5 4.1 2 5.8l4-2.7z" fill="#FBBC05" />
        <path d="M14 6.8c1.8 0 3.4.6 4.7 1.8l3.5-3.5C20.2 3.1 17.4 2 14 2 9.2 2 5 4.7 3 9.4l4 3.1c1-3 3.8-5.7 7-5.7z" fill="#EA4335" />
      </svg>
    ),
  },
];

/* Floating dot decoration */
const dots = [
  { pos: "top-[20%] left-[32%]", size: "w-2 h-2", delay: 0 },
  { pos: "top-[60%] left-[36%]", size: "w-1.5 h-1.5", delay: 0.3 },
  { pos: "top-[38%] right-[36%]", size: "w-1.5 h-1.5", delay: 0.5 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col hero-glow grid-pattern overflow-hidden pt-16">
      <div className="flex-1 flex flex-col">
        {/* Main content */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">

            {/* LEFT: Text */}
            <div className="flex flex-col items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 border border-[#c9922a]/30 bg-white/60 rounded-full px-4 py-1.5 mb-7"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#c9922a" strokeWidth="1.2" />
                  <path d="M7 4v3l2 1.5" stroke="#c9922a" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] font-semibold text-[#c9922a] tracking-wider uppercase">
                  A Bay Area Founders Club Product
                </span>
              </motion.div>

              {/* Headline */}
              <div className="mb-5">
                {["One API.", "Every AI Model."].map((word, i) => (
                  <motion.h1
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.18 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-[#1a1a1a]"
                  >
                    {word}
                  </motion.h1>
                ))}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-[#c9922a]"
                >
                  Built for Founders.
                </motion.h1>
              </div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="text-base text-[#666] max-w-md leading-relaxed mb-8"
              >
                BFC AI Gateway gives you unified access to 90+ frontier AI models —
                at startup-friendly rates, backed by the network only BFC can offer.
              </motion.p>

              {/* Mini features */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9 w-full max-w-lg"
              >
                {miniFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#c9922a]/10 flex items-center justify-center shrink-0 mt-0.5">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-[#1a1a1a] leading-tight">{f.title}</div>
                      <div className="text-[11px] text-[#999] mt-0.5">{f.sub}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.7 }}
                className="flex items-center gap-5"
              >
                <GetStartedButton size="md" />
                <a
                  href={config.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[#666] hover:text-[#1a1a1a] transition-colors font-medium"
                >
                  View Documentation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* RIGHT: 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-[480px] hidden lg:flex items-center justify-center"
            >
              {/* Floating provider chips */}
              {providers.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + p.delay }}
                  className={`absolute ${p.pos} bg-white rounded-2xl shadow-md border border-[#ede9e0] px-4 py-3 flex items-center justify-center z-20`}
                  style={{ minWidth: 64, minHeight: 56 }}
                >
                  {p.logo}
                </motion.div>
              ))}

              {/* Decorative dots */}
              {dots.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + d.delay }}
                  className={`absolute ${d.pos} ${d.size} rounded-full bg-[#c9922a] z-10`}
                />
              ))}

              {/* Blue star */}
              <motion.div
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute top-[45%] left-[22%] z-20"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2l2.2 11.8L30 16l-11.8 2.2L16 30l-2.2-11.8L2 16l11.8-2.2L16 2z" fill="#4BB8D4" />
                </svg>
              </motion.div>

              {/* 3D Platform */}
              <div className="relative z-10" style={{ perspective: "800px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  style={{ transform: "rotateX(18deg) rotateY(-8deg)" }}
                  className="relative"
                >
                  {/* Layer 3 – bottom shadow */}
                  <div
                    className="absolute rounded-[28px] bg-gradient-to-br from-[#f5e9c8] to-[#e8d4a0]"
                    style={{ width: 220, height: 220, top: 48, left: 24, opacity: 0.5 }}
                  />
                  {/* Layer 2 – middle */}
                  <div
                    className="absolute rounded-[24px] bg-gradient-to-br from-[#fdf3dc] to-[#f0deb0] border border-[#e0c070]/40 shadow-lg"
                    style={{ width: 210, height: 210, top: 24, left: 14 }}
                  />
                  {/* Layer 1 – top surface */}
                  <div
                    className="relative rounded-[22px] bg-gradient-to-br from-white via-[#fdf8f0] to-[#f5e9d0] border-2 border-[#c9922a]/25 shadow-xl flex items-center justify-center"
                    style={{ width: 200, height: 200 }}
                  >
                    {/* Bridge icon on top */}
                    <div className="flex items-center justify-center w-24 h-24">
                      <svg viewBox="0 0 80 60" fill="none" width="96" height="72">
                        {/* Water */}
                        <rect x="4" y="46" width="72" height="8" rx="4" fill="url(#water)" opacity="0.7" />
                        {/* Main cables */}
                        <path d="M10 42 Q40 10 70 42" stroke="#c9922a" strokeWidth="2" fill="none" />
                        {/* Left tower */}
                        <rect x="20" y="18" width="5" height="26" rx="1.5" fill="#c9922a" />
                        {/* Right tower */}
                        <rect x="55" y="18" width="5" height="26" rx="1.5" fill="#c9922a" />
                        {/* Vertical suspenders */}
                        {[27, 34, 46, 53].map((x, i) => (
                          <line key={i} x1={x} y1={30 + (i < 2 ? i * 2 : (3 - i) * 2)} x2={x} y2="44" stroke="#c9922a" strokeWidth="1.2" />
                        ))}
                        {/* Road */}
                        <rect x="8" y="42" width="64" height="4" rx="2" fill="#e8c87a" opacity="0.6" />
                        <defs>
                          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4BB8D4" />
                            <stop offset="100%" stopColor="#2a9bb5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* Subtle glow ring */}
                    <div className="absolute inset-0 rounded-[22px] ring-1 ring-[#c9922a]/20" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="border-t border-[#e8e2d9] bg-white/60 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-0 divide-x divide-[#e8e2d9]">
              {[
                { icon: "M3 7h6M3 11h6M13 5l2 2-2 2M13 9l2 2-2 2", label: "AI Models", value: "90+" },
                { icon: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 5a8 8 0 0 0-16 0", label: "Founders", value: "10,000+" },
                { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Uptime", value: "99.9%" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 px-10 py-4">
                  <div className="w-8 h-8 rounded-lg bg-[#c9922a]/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                      <path d={s.icon} stroke="#c9922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#1a1a1a] leading-none">{s.value}</div>
                    <div className="text-xs text-[#999] mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
