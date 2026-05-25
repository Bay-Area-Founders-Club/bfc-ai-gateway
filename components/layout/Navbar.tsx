"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/Button";
import { config } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f7f4]/90 backdrop-blur-md border-b border-[#e8e2d9] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/bfc_logo_c.png"
            alt="Bay Area Founders Club"
            width={140}
            height={36}
            className="h-7 w-auto"
            priority
          />
          <span className="hidden sm:block text-[#ccc] text-xs font-medium tracking-widest uppercase pt-0.5">
            |
          </span>
          <span className="hidden sm:block text-[#aaa] text-xs font-semibold tracking-widest uppercase">
            AI Gateway
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
          >
            Features
          </a>
          <a
            href="#models"
            className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
          >
            Models
          </a>
          <a
            href="#advantage"
            className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
          >
            BFC Advantage
          </a>
          <a
            href={config.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
          >
            Docs
          </a>
        </nav>

        {/* CTA */}
        <GetStartedButton size="sm" />
      </div>
    </motion.header>
  );
}
