import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Locations from "@/components/Locations";
import ChoosingSection from "@/components/ChoosingSection";
import Footer from "@/components/Footer";

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
