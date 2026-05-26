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
    <section className="relative min-h-screen flex flex-col hero-glow overflow-hidden pt-16">
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
              {/* ── Orbit ring (rotates, 440×440, centered) ── */}
              <div
                className="orbit-ring absolute z-20"
                style={{ width: 440, height: 440, top: "50%", left: "50%", marginTop: -220, marginLeft: -220 }}
              >
                {/* Card positions: 5 providers evenly at 72° intervals, r=195px from center(220,220) */}
                {/* Angles: -90°, -18°, 54°, 126°, 198° */}

                {/* Anthropic "AI\" — top (-90°): x=220, y=25 */}
                <div style={{ position: "absolute", left: 220, top: 25 }}>
                  <div className="orbit-card bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center" style={{ width: 88, height: 80 }}>
                    <span style={{ fontSize: 26, fontWeight: 900, color: "#1a1a1a", fontFamily: "Georgia, 'Times New Roman', serif", letterSpacing: "-1px" }}>AI\</span>
                  </div>
                </div>

                {/* OpenAI wheel — upper-right (-18°): x=405, y=159 */}
                <div style={{ position: "absolute", left: 405, top: 159 }}>
                  <div className="orbit-card bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center" style={{ width: 86, height: 78 }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="17" stroke="#111" strokeWidth="1.8" fill="none"/>
                      {/* 8 spokes */}
                      <line x1="20" y1="3" x2="20" y2="37" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                      <line x1="3" y1="20" x2="37" y2="20" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                      <line x1="7.97" y1="7.97" x2="32.03" y2="32.03" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                      <line x1="32.03" y1="7.97" x2="7.97" y2="32.03" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                      <circle cx="20" cy="20" r="3" fill="#111"/>
                    </svg>
                  </div>
                </div>

                {/* Mistral — lower-right (54°): x=335, y=378 */}
                <div style={{ position: "absolute", left: 335, top: 378 }}>
                  <div className="orbit-card bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center gap-3 px-4" style={{ width: 152, height: 72 }}>
                    <div className="grid grid-cols-2 gap-[4px] shrink-0">
                      <div style={{ width: 13, height: 13, background: "#FF7000" }} />
                      <div style={{ width: 13, height: 13, background: "#1a1a1a" }} />
                      <div style={{ width: 13, height: 13, background: "#1a1a1a" }} />
                      <div style={{ width: 13, height: 13, background: "#FF7000" }} />
                    </div>
                    <div className="leading-snug">
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.02em" }}>MISTRAL</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.02em" }}>AI_</div>
                    </div>
                  </div>
                </div>

                {/* Google G — lower-left (126°): x=105, y=378 */}
                <div style={{ position: "absolute", left: 105, top: 378 }}>
                  <div className="orbit-card bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center" style={{ width: 86, height: 80 }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M38 20.4c0-1.3-.1-2.5-.3-3.7H20v7.1h10.1c-.4 2.2-1.8 4-3.8 5.3v4.4h6.1C35.6 30.2 38 25.7 38 20.4z" fill="#4285F4"/>
                      <path d="M20 39c5.1 0 9.4-1.7 12.5-4.5l-6.1-4.4c-1.7 1.1-3.8 1.8-6.4 1.8-4.9 0-9-3.3-10.5-7.7H3.3v4.5C6.4 34.9 12.7 39 20 39z" fill="#34A853"/>
                      <path d="M9.5 24.2c-.4-1.1-.6-2.2-.6-3.4s.2-2.3.6-3.4v-4.5H3.3A18.7 18.7 0 0 0 1 20c0 3 .7 5.9 2.3 8.4l6.2-4.2z" fill="#FBBC05"/>
                      <path d="M20 9c2.7 0 5.1.9 7 2.7l5.2-5.2C28.9 3.5 24.8 2 20 2 12.7 2 6.4 6.1 3.3 12.1l6.2 4.5C11 12.3 15.1 9 20 9z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Perplexity mountain — upper-left (198°): x=35, y=159 */}
                <div style={{ position: "absolute", left: 35, top: 159 }}>
                  <div className="orbit-card bg-white rounded-2xl shadow-lg border border-[#ede9e0] flex items-center justify-center" style={{ width: 90, height: 82 }}>
                    <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
                      {/* Double mountain peaks */}
                      <path d="M4 30 L18 8 L32 30" stroke="#3B82F6" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M22 30 L36 10 L50 30" stroke="#3B82F6" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── Gold dot ── */}
              <div className="absolute w-3 h-3 rounded-full bg-[#c9922a] z-10" style={{ top: "18%", left: "26%" }} />

              {/* ── Blue 4-point star ── */}
              <div className="absolute z-10" style={{ top: "47%", left: "13%" }}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path d="M17 1L19.3 14.7L33 17L19.3 19.3L17 33L14.7 19.3L1 17L14.7 14.7Z" fill="#4BB8D4"/>
                </svg>
              </div>

              {/* ── 3D Platform (centered, does NOT rotate) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="relative z-10"
                style={{ perspective: "700px" }}
              >
                <div style={{ transform: "rotateX(18deg) rotateY(-16deg)", transformStyle: "preserve-3d", position: "relative", width: 240, height: 240 }}>
                  {/* Layer 3 – deepest shadow */}
                  <div className="absolute rounded-[30px]" style={{ inset: 0, top: 26, left: 26, background: "#d4b870", opacity: 0.45, transform: "translateZ(-20px)" }} />
                  {/* Layer 2 – middle */}
                  <div className="absolute rounded-[30px]" style={{ inset: 0, top: 13, left: 13, background: "linear-gradient(135deg, #f5e6b8, #ead5a0)", boxShadow: "0 4px 24px rgba(201,146,42,0.18)", transform: "translateZ(-10px)" }} />
                  {/* Layer 1 – top card */}
                  <div
                    className="absolute rounded-[30px] flex items-center justify-center"
                    style={{
                      inset: 0, top: 0, left: 0,
                      background: "linear-gradient(145deg, #ffffff 0%, #fdf8f0 60%, #f5e9d5 100%)",
                      boxShadow: "0 0 0 1.5px rgba(201,146,42,0.35), 0 8px 32px rgba(201,146,42,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                      transform: "translateZ(0px)"
                    }}
                  >
                    {/* Bridge SVG */}
                    <svg viewBox="0 0 110 85" fill="none" width="130" height="100">
                      <rect x="27" y="26" width="8" height="34" rx="3" fill="#b8832a"/>
                      <rect x="28.5" y="18" width="5" height="10" rx="2" fill="#c9922a"/>
                      <rect x="75" y="26" width="8" height="34" rx="3" fill="#b8832a"/>
                      <rect x="76.5" y="18" width="5" height="10" rx="2" fill="#c9922a"/>
                      <path d="M18 58 Q55 16 92 58" stroke="#c9922a" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
                      <line x1="34" y1="35" x2="34" y2="57" stroke="#c9922a" strokeWidth="1.4"/>
                      <line x1="46" y1="26" x2="46" y2="57" stroke="#c9922a" strokeWidth="1.4"/>
                      <line x1="64" y1="26" x2="64" y2="57" stroke="#c9922a" strokeWidth="1.4"/>
                      <line x1="76" y1="35" x2="76" y2="57" stroke="#c9922a" strokeWidth="1.4"/>
                      <rect x="14" y="56" width="82" height="5.5" rx="2.5" fill="#c9922a" opacity="0.75"/>
                      <rect x="12" y="63" width="86" height="11" rx="5.5" fill="#4BB8D4" opacity="0.9"/>
                      <rect x="20" y="66" width="18" height="3" rx="1.5" fill="white" opacity="0.35"/>
                      <rect x="54" y="66" width="12" height="3" rx="1.5" fill="white" opacity="0.35"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
