import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
  {
    label: "Lower than OpenRouter",
    value: "20%+",
    sub: "Maximum discount up to 80%",
  },
  {
    label: "Lower than fal.ai",
    value: "30%+",
    sub: "Maximum discount up to 70%",
  },
];

export default function PriceAdvantage() {
  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-10">
          <p className="text-base font-semibold text-[#c9922a] tracking-widest uppercase mb-3">
            Price Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
            Lower total model cost
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <AnimatedSection key={card.label} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-[#ede9e0] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative">
                <p className="text-base text-[#888] mb-3">{card.label}</p>
                <div className="text-7xl sm:text-[5.5rem] font-extrabold text-[#c9922a] leading-none mb-4">
                  {card.value}
                </div>
                <p className="text-base text-[#777] mb-6">{card.sub}</p>
                <div className="h-0.5 w-32 rounded-full bg-gradient-to-r from-[#c9922a] to-[#e8b86d]" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
