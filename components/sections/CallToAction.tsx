import AnimatedSection from "@/components/ui/AnimatedSection";
import { GetStartedButton } from "@/components/ui/Button";
import { config } from "@/lib/config";

export default function CallToAction() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-[#c9922a]/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] mb-5 leading-tight">
            Ready to build at
            <br />
            <span className="text-[#c9922a]">the frontier?</span>
          </h2>
          <p className="text-[#666] text-lg mb-10 max-w-lg mx-auto">
            Join founders who move fast, ship with conviction, and build on
            infrastructure made for those who shape markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GetStartedButton size="lg" />
            <a
              href={`mailto:${config.contactEmail}`}
              className="text-sm text-[#666] hover:text-[#c9922a] transition-colors underline underline-offset-4"
            >
              Talk to the team
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
