
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const JobMatchingSection = () => {
    // Sample job recommendations
    const jobRecommendations = [
        {
            title: "Junior Web Developer",
            company: "TechGrowth Solutions",
            location: "Remote",
            matchScore: 92,
            skills: ["HTML", "CSS", "JavaScript", "React"],
            description: "Perfect for beginners with basic coding skills looking to grow in web development.",
            hourlyRate: 30
        },
        {
            title: "Customer Support Specialist",
            company: "Global Connect Services",
            location: "New York, NY",
            matchScore: 87,
            skills: ["Communication", "Problem Solving", "CRM Software"],
            description: "Great opportunity for those with strong people skills to build a career in customer service.",
            hourlyRate: 25
        },
        {
            title: "Digital Marketing Assistant",
            company: "Growth Spark Inc",
            location: "Remote / Chicago, IL",
            matchScore: 81,
            skills: ["Social Media", "Basic Analytics", "Content Creation"],
            description: "Entry-level position to learn digital marketing fundamentals with mentorship.",
            hourlyRate: 15
        }
    ];

    return (
        <section className="w-full py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">AI-Powered Job Matching</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Here are some job opportunities based on your resume, profile, current location, and industry.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="shrink-0">
                        <Link to="/jobs">
                            View More Jobs <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobRecommendations.map((job, index) => (
                        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                            <CardHeader className="pb-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl">{job.title}</CardTitle>
                                        <CardDescription className="mt-1">{job.company} • {job.location} <br /> ${job.hourlyRate}/hr</CardDescription>
                                    </div>
                                    <div className="bg-primary/10 text-primary font-medium rounded-full px-3 py-1 text-sm flex items-center">
                                        <TrendingUp className="mr-1 h-3.5 w-3.5" />
                                        {job.matchScore}% Match
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pb-4">
                                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {job.skills.map((skill, i) => (
                                        <span key={i} className="bg-accent/50 text-accent-foreground text-xs px-2.5 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="border-t pt-4 flex justify-between">
                                <Button variant="ghost" size="sm">Save</Button>
                                <Button size="sm">Apply Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-lg border shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-softPurple p-4 rounded-full shrink-0">
                        <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-2">Looking for something specific?</h3>
                        <p className="text-muted-foreground">
                            Create your profile to receive more accurate job matches, or search our job database directly.
                        </p>
                    </div>
                    <Button asChild className="shrink-0">
                        <Link to="/jobs/search">Search Jobs</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default JobMatchingSection;
