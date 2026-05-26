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

            {/* RIGHT: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-[500px] hidden lg:flex items-center justify-center"
            >
              {/* ── Gold dot ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute w-3 h-3 rounded-full bg-[#c9922a] z-20"
                style={{ top: "22%", left: "28%" }}
              />

              {/* ── Blue 4-point star ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute z-20"
                style={{ top: "48%", left: "16%" }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 1 L20.5 15.5 L35 18 L20.5 20.5 L18 35 L15.5 20.5 L1 18 L15.5 15.5 Z" fill="#4BB8D4" />
                </svg>
              </motion.div>

              {/* ── OpenAI card (top center-right) ── */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center z-20"
                style={{ top: "4%", right: "22%", width: 88, height: 80 }}
              >
                {/* OpenAI asterisk logo */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 4v28M4 18h28M7.5 7.5l21 21M28.5 7.5l-21 21" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="16" stroke="#111" strokeWidth="1.5" fill="none" />
                </svg>
              </motion.div>

              {/* ── Anthropic card (top right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center z-20"
                style={{ top: "10%", right: "0%", width: 84, height: 76 }}
              >
                <span className="text-[22px] font-black tracking-tight text-[#1a1a1a]" style={{ fontFamily: "serif" }}>AI\</span>
              </motion.div>

              {/* ── Left card: Claude/Mountain ── */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center z-20"
                style={{ top: "30%", left: "4%", width: 90, height: 82 }}
              >
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none">
                  <path d="M4 26 Q14 4 22 10 Q30 16 40 4" stroke="#4488FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M4 26 L22 10 L40 4" stroke="#4488FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" opacity="0.3" fill="none" />
                </svg>
              </motion.div>

              {/* ── Mistral card (right middle) ── */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center gap-3 z-20 px-4"
                style={{ top: "55%", right: "0%", width: 148, height: 72 }}
              >
                <div className="grid grid-cols-2 gap-[3px] shrink-0">
                  <div className="w-[11px] h-[11px] bg-[#FF7000]" />
                  <div className="w-[11px] h-[11px] bg-[#1a1a1a]" />
                  <div className="w-[11px] h-[11px] bg-[#1a1a1a]" />
                  <div className="w-[11px] h-[11px] bg-[#FF7000]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[13px] font-bold text-[#1a1a1a] tracking-wide">MISTRAL</div>
                  <div className="text-[13px] font-bold text-[#1a1a1a] tracking-wide">AI_</div>
                </div>
              </motion.div>

              {/* ── Google card (bottom right) ── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center z-20"
                style={{ bottom: "10%", right: "16%", width: 88, height: 82 }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M38 20.4c0-1.3-.1-2.5-.3-3.7H20v7.1h10.1c-.4 2.2-1.8 4-3.8 5.3v4.4h6.1C35.6 30.2 38 25.7 38 20.4z" fill="#4285F4"/>
                  <path d="M20 39c5.1 0 9.4-1.7 12.5-4.5l-6.1-4.4c-1.7 1.1-3.8 1.8-6.4 1.8-4.9 0-9-3.3-10.5-7.7H3.3v4.5C6.4 34.9 12.7 39 20 39z" fill="#34A853"/>
                  <path d="M9.5 24.2c-.4-1.1-.6-2.2-.6-3.4s.2-2.3.6-3.4v-4.5H3.3A18.7 18.7 0 0 0 1 20c0 3 .7 5.9 2.3 8.4l6.2-4.2z" fill="#FBBC05"/>
                  <path d="M20 9c2.7 0 5.1.9 7 2.7l5.2-5.2C28.9 3.5 24.8 2 20 2 12.7 2 6.4 6.1 3.3 12.1l6.2 4.5C11 12.3 15.1 9 20 9z" fill="#EA4335"/>
                </svg>
              </motion.div>

              {/* ── Flat stacked platform ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="relative z-10"
                style={{ width: 260, height: 260 }}
              >
                {/* Layer 3 – deepest */}
                <div
                  className="absolute rounded-[32px] bg-[#dfc98a]"
                  style={{ inset: 0, top: 24, left: 24, opacity: 0.55 }}
                />
                {/* Layer 2 – middle */}
                <div
                  className="absolute rounded-[32px] bg-[#f0dfa8]"
                  style={{ inset: 0, top: 12, left: 12 }}
                />
                {/* Layer 1 – top card */}
                <div
                  className="absolute rounded-[32px] bg-gradient-to-br from-white to-[#fdf8f0] border border-[#e8d9b0]/60 shadow-xl flex items-center justify-center"
                  style={{ inset: 0, top: 0, left: 0 }}
                >
                  {/* Bridge SVG */}
                  <svg viewBox="0 0 120 90" fill="none" width="140" height="105">
                    {/* Left tower */}
                    <rect x="30" y="28" width="9" height="36" rx="3" fill="#b8832a" />
                    <rect x="31.5" y="20" width="6" height="10" rx="2" fill="#c9922a" />
                    {/* Right tower */}
                    <rect x="81" y="28" width="9" height="36" rx="3" fill="#b8832a" />
                    <rect x="82.5" y="20" width="6" height="10" rx="2" fill="#c9922a" />
                    {/* Main arch cable */}
                    <path d="M20 62 Q60 18 100 62" stroke="#c9922a" strokeWidth="3" fill="none" strokeLinecap="round" />
                    {/* Suspender cables */}
                    <line x1="38" y1="38" x2="38" y2="62" stroke="#c9922a" strokeWidth="1.5" />
                    <line x1="50" y1="29" x2="50" y2="62" stroke="#c9922a" strokeWidth="1.5" />
                    <line x1="70" y1="29" x2="70" y2="62" stroke="#c9922a" strokeWidth="1.5" />
                    <line x1="82" y1="38" x2="82" y2="62" stroke="#c9922a" strokeWidth="1.5" />
                    {/* Road deck */}
                    <rect x="16" y="60" width="88" height="6" rx="3" fill="#c9922a" opacity="0.7" />
                    {/* Water */}
                    <rect x="14" y="68" width="92" height="12" rx="6" fill="#4BB8D4" opacity="0.85" />
                    {/* Water shimmer */}
                    <rect x="22" y="71" width="20" height="3" rx="1.5" fill="white" opacity="0.3" />
                    <rect x="58" y="71" width="14" height="3" rx="1.5" fill="white" opacity="0.3" />
                  </svg>
                </div>
              </motion.div>
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
