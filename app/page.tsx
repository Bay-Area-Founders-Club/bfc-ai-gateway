import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import ModelGrid from "@/components/sections/ModelGrid";
import BFCAdvantage from "@/components/sections/BFCAdvantage";
import CallToAction from "@/components/sections/CallToAction";
import TokenFactory from "@/components/sections/TokenFactory";

export default function Home() {
  return (
    <div className="bg-[#f9f7f4] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TokenFactory />
        <Stats />
        <Features />
        <ModelGrid />
        <BFCAdvantage />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
