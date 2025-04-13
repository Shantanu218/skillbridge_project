
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Compass, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-softPurple via-white to-softBlue opacity-50 -z-10" />
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 md:space-y-10">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Unlock Your <span className="text-primary">Potential</span>, Transform Your Future
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            AI-powered career guidance that matches your skills to opportunities, closes learning gaps,
            and helps you build a path to a better career.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 min-w-[176px]">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/get-started">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-6">
            <Link to="/how-it-works">How It Works</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl pt-8 md:pt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/50 flex flex-col items-center text-center">
            <div className="bg-softBlue p-3 rounded-full mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Job Matching</h3>
            <p className="text-sm text-muted-foreground">Find opportunities that align with your skills and background.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/50 flex flex-col items-center text-center">
            <div className="bg-softGreen p-3 rounded-full mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Skill Development</h3>
            <p className="text-sm text-muted-foreground">Identify skill gaps and get personalized learning recommendations.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/50 flex flex-col items-center text-center">
            <div className="bg-softYellow p-3 rounded-full mb-4">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Career Roadmaps</h3>
            <p className="text-sm text-muted-foreground">Create step-by-step plans to reach your career goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
