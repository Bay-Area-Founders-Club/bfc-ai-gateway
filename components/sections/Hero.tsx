"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    title: "100+ Frontier Models",
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col hero-glow overflow-hidden pt-16">
      <div className="flex-1 flex flex-col">
        {/* Main content */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">

            {/* LEFT: Text */}
            <div className="flex flex-col items-start">
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
                  Smart OpenRouter
                </motion.h1>
              </div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="text-base text-[#666] max-w-md leading-relaxed mb-8"
              >
                BFC AI Gateway gives you unified access to 100+ frontier AI models —
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
                      <div className="text-[12px] font-semibold text-[#1a1a1a] leading-tight whitespace-nowrap">{f.title}</div>
                      <div className="text-[11px] text-[#999] mt-0.5 whitespace-nowrap">{f.sub}</div>
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
              className="relative hidden lg:flex items-center justify-center"
            >
              <Image
                src="/hero-visual.png"
                alt="BFC AI Gateway visual"
                width={620}
                height={560}
                className="w-full max-w-[620px] object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
