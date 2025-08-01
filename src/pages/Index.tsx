import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TalentBrowser from "@/components/TalentBrowser";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TalentBrowser />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
