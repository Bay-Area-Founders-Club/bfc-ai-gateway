"use client";

import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/Button";
import { config } from "@/lib/config";

const words = ["One API.", "Every AI Model.", "Smart Open Router."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-glow grid-pattern overflow-hidden pt-16">
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c9922a]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-[#4bb8d4]/4 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-[#c9922a]/30 bg-[#c9922a]/8 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9922a] animate-pulse" />
          <span className="text-xs font-medium text-[#c9922a] tracking-wider uppercase">
            A Bay Area Founders Club Product
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6">
          {words.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <h1
                className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight ${
                  i === 2
                    ? "text-[#c9922a] glow-gold-text"
                    : "text-[#1a1a1a]"
                }`}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          BFC AI Gateway gives you unified access to 90+ frontier AI models —
          at startup-friendly rates, backed by the network only BFC can offer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GetStartedButton size="lg" />
          <a
            href={config.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888] hover:text-[#c9922a] transition-colors underline underline-offset-4"
          >
            View Documentation
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#bbb] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#c9922a]/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
