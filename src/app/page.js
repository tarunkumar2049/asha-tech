import ChoosingSection from "@/components/ChoosingSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
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
      <Locations />
      <ChoosingSection />
      <Footer />
    </div>
  );
}
