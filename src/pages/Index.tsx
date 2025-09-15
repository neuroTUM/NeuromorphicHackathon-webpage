import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LogisticsSection from "@/components/sections/LogisticsSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ApplicationSection from "@/components/sections/ApplicationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="logistics">
          <LogisticsSection />
        </div>
        <div id="challenges">
          <ChallengesSection />
        </div>
        <div id="application">
          <ApplicationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
