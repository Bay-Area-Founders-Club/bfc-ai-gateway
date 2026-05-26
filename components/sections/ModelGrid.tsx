import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ModelGrid() {
  return (
    <section id="models" className="py-24 bg-[#f2ede7]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase mb-3">
            Supported Models
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Every frontier model, one endpoint
          </h2>
          <p className="text-[#777] max-w-xl mx-auto">
            From text and code to image, video, and audio generation — access
            the full stack of AI capabilities through a single unified API.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-[#e8e2d9] shadow-sm">
            <iframe
              src="https://dashboard.bafc.io/pricing"
              title="BFC AI Gateway Pricing"
              className="w-full"
              style={{ height: "700px", border: "none" }}
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
