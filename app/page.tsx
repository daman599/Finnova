import Finances from "@/component/Finances";
import Footer from "@/component/Footer";
import Card from "@/component/Card";
import CardFeatures from "@/component/CardFeatures";
import FeaturesSection from "@/component/FeaturesSection";
import Crypto from "@/component/Crypto";
import Investment from "@/component/Investment";
import Hero from "@/component/HeroSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Finances />
      <Card />
      <CardFeatures />
      <Investment />
      <Crypto />
      <Footer />
    </>
  );
}
