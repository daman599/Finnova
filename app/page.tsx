import Finances from "@/component/Finances";
import Footer from "@/component/Footer";
import Card from "@/component/Card";
import CardFeatures from "@/component/CardFeatures";
import FeaturesSection from "@/component/FeaturesSection";
import Crypto from "@/component/Crypto";
import Investment from "@/component/Investment";
import Hero from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import Buttons from "@/component/Buttons";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-2">
        <Navbar />
        <Buttons />
        <Hero />
        <Finances />
        <Card />
        <CardFeatures />
        <Investment />
        <Crypto />
        <FeaturesSection />
      </div>
      <Footer />
    </>
  );
}
