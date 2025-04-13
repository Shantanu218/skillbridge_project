
import CareerRoadmapSection from "@/components/CareerRoadmapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JobMatchingSection from "@/components/JobMatchingSection";
import Navbar from "@/components/Navbar";
import SkillsAnalysisSection from "@/components/SkillsAnalysisSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <JobMatchingSection />
        <SkillsAnalysisSection />
        <CareerRoadmapSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
