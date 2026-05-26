import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TokenFactory() {
  return (
    <section className="py-16 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <AnimatedSection>
          <Image
            src="/token-factory.png"
            alt="Token Factory — One API. Infinite Possibilities."
            width={900}
            height={700}
            className="w-full max-w-[900px] object-contain"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
