
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SkillsAnalysisSection = () => {
    // Sample skill data
    const skillsData = [
        { skill: "HTML", current: 70, target: 100, courses: 1, message: "Top 20%" },
        { skill: "CSS", current: 55, target: 100, courses: 5, message: "Top 45%" },
        { skill: "JavaScript", current: 40, target: 100, courses: 8, message: "Top 60%" },
        { skill: "Communication", current: 85, target: 100, courses: 4, message: "Top 10%" },
    ];

    return (
        <section className="w-full py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Skill Gap Analysis</h2>
                        <p className="text-muted-foreground max-w-2xl">
                        Identify the skills you need to develop to reach your career goals and get personalized learning recommendations.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="shrink-0">
                        <Link to="/skills">
                            Analyze Your Skills <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-lg border shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold flex items-center">
                                <LineChart className="mr-2 h-5 w-5 text-primary" />
                                Your Skill Analysis
                            </h3>
                            <Button variant="outline" size="sm">Update Skills</Button>
                        </div>

                        <div className="space-y-6">
                            {skillsData.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{skill.skill}</span>
                                        <span className="text-sm text-muted-foreground">
                                            {skill.current}/{skill.target} ({skill.message})
                                        </span>
                                    </div>
                                    <div className="relative pt-1">
                                        <Progress value={skill.current} className="h-2" />
                                        <div
                                            className="absolute h-4 w-0.5 bg-secondary top-0 rounded-full"
                                            style={{ left: `${skill.target}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-1">
                                        <span className="text-xs text-muted-foreground">Current Level</span>
                                        <span className="text-xs text-secondary font-medium">Target Level</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-white rounded-lg border shadow-sm p-6">
                            <h3 className="text-lg font-semibold mb-4">Recommended Courses</h3>
                            <p className="text-muted-foreground max-w-2xl mb-4">
                            Here are some courses we recommend based on your current skillset.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-softBlue rounded-lg">
                                    <div className="flex items-start">
                                        <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                        <div>
                                            <h4 className="font-medium text-sm">Front-end web development</h4>
                                            <p className="text-xs text-muted-foreground mt-1">Free • 27 hours • Beginner</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-softGreen rounded-lg">
                                    <div className="flex items-start">
                                        <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                        <div>
                                            <h4 className="font-medium text-sm">JavaScript Fundamentals</h4>
                                            <p className="text-xs text-muted-foreground mt-1">Free • 18 hours • Intermediate</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-softYellow rounded-lg">
                                    <div className="flex items-start">
                                        <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                        <div>
                                            <h4 className="font-medium text-sm">Effective Communication</h4>
                                            <p className="text-xs text-muted-foreground mt-1">Free • 9 hours • All levels</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button asChild variant="outline" className="w-full mt-4">
                                <Link to="/skills/courses">View All Courses</Link>
                            </Button>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">Skill Boost</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Complete your profile to get a detailed skill analysis and personalized upskilling plan.
                            </p>
                            <Button asChild>
                                <Link to="/profile/skills">Complete Your Profile</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsAnalysisSection;
