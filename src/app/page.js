import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
    </div>
  );
}
