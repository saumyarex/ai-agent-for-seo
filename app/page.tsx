import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ReframeSection from "@/components/sections/ReframeSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import VisionSection from "@/components/sections/VisionSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ReframeSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <VisionSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
