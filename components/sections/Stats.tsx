"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { config } from "@/lib/config";

function CountUp({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
    const hasPlus = target.includes("+");
    const hasPercent = target.includes("%");
    const hasComma = target.includes(",");

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
      const rounded = Math.round(current);
      const formatted = hasComma
        ? rounded.toLocaleString()
        : numericPart % 1 === 0
        ? rounded.toString()
        : current.toFixed(1);
      setDisplay(`${formatted}${hasPlus ? "+" : ""}${hasPercent ? "%" : ""}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{display || target}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 border-y border-[#e8e2d9] bg-[#f2ede7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {config.stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9922a] mb-2 tabular-nums">
                <CountUp target={stat.value} />
              </div>
              <div className="text-sm text-[#888] tracking-wide uppercase font-medium">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
