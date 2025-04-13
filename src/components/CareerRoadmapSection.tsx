
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Compass, Target, TimerIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CareerRoadmapSection = () => {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-white to-softPurple/20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Personalized Career Roadmaps</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Build a clear, step-by-step plan to achieve your career goals with personalized guidance.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="shrink-0">
                        <Link to="/career">
                            Create Your Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="relative mb-16">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full" />

                    <div className="grid grid-cols-1 gap-12">
                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                            <Card className="max-w-md mx-auto md:ml-auto md:mr-[calc(50%+2rem)] shadow-sm">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between">
                                        <div className="bg-softBlue p-2 rounded-full">
                                            <Target className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
                                            <TimerIcon className="inline-block h-3 w-3 mr-1" /> Month 1-2
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl mt-3">Build Foundational Skills</CardTitle>
                                    <CardDescription>Master the essential skills required for your target role</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                1
                                            </span>
                                            <span>Complete Front-end Fundamentals course</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                2
                                            </span>
                                            <span>Complete JavaScript Fundamentals course</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                3
                                            </span>
                                            <span>Build 2 small projects for your portfolio</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                            <Card className="max-w-md mx-auto md:mr-auto md:ml-[calc(50%+2rem)] shadow-sm">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between">
                                        <div className="bg-softGreen p-2 rounded-full">
                                            <Compass className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
                                            <TimerIcon className="inline-block h-3 w-3 mr-1" /> Month 3-4
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl mt-3">Advance Technical Skills</CardTitle>
                                    <CardDescription>Deepen your knowledge and practice with real-world applications</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                1
                                            </span>
                                            <span>Learn React.JS framework</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                2
                                            </span>
                                            <span>Complete front-end developer certification</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                3
                                            </span>
                                            <span>Join coding communities and network with peers</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                            <Card className="max-w-md mx-auto md:ml-auto md:mr-[calc(50%+2rem)] shadow-sm">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between">
                                        <div className="bg-softYellow p-2 rounded-full">
                                            <Target className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
                                            <TimerIcon className="inline-block h-3 w-3 mr-1" /> Month 5-6
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl mt-3">Job Ready Preparation</CardTitle>
                                    <CardDescription>Prepare your application materials and interview skills</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                1
                                            </span>
                                            <span>Create professional resume with our AI assistant</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                2
                                            </span>
                                            <span>Practice technical interviews with our simulator</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                                                3
                                            </span>
                                            <span>Apply to 10 targeted junior developer positions</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white rounded-lg border shadow-sm p-8 max-w-2xl text-center">
                        <h3 className="text-xl font-semibold mb-3">Ready to map your career journey?</h3>
                        <p className="text-muted-foreground mb-6">
                            Our AI creates personalized career roadmaps based on your current skills,
                            experience level, and career aspirations.
                        </p>
                        <Button asChild size="lg">
                            <Link to="/career/create">
                                Create Your Personalized Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerRoadmapSection;
