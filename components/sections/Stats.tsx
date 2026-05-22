"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { config } from "@/lib/config";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
    const hasPlus = target.includes("+");
    const hasPercent = target.includes("%");

    if (isNaN(numericPart)) {
      setDisplay(target);
      return;
    }

    const duration = 1200;
    const steps = 40;
    const increment = numericPart / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, numericPart);
      const formatted =
        numericPart % 1 === 0
          ? Math.round(current).toLocaleString()
          : current.toFixed(1);
      setDisplay(`${formatted}${hasPlus ? "+" : ""}${hasPercent ? "%" : ""}${suffix}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target, suffix]);

  return <span ref={ref}>{display || target}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 border-y border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {config.stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9922a] mb-2 tabular-nums">
                <CountUp target={stat.value} />
              </div>
              <div className="text-sm text-[#666] tracking-wide uppercase font-medium">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
