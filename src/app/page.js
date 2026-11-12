"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Locations from "@/components/Locations";
import ChoosingSection from "@/components/ChoosingSection";
import Footer from "@/components/Footer";
import MenuProvider from "@/components/MenuContext";

export default function Home() {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <Locations />
        <ChoosingSection />
        <Footer />
      </MenuProvider>
    </div>
  );
}
