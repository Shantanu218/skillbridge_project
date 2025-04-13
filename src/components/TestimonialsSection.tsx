
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "SkillBridge helped me identify the skills I was missing and find free courses to learn them. I found a job as a junior developer within 3 months!",
            name: "Maya J.",
            role: "Junior Web Developer",
            location: "Detroit, MI"
        },
        {
            quote: "The career roadmap gave me a clear path forward. I knew exactly what I needed to learn and in what order. This platform changes lives.",
            name: "Derek T.",
            role: "IT Support Specialist",
            location: "Houston, TX"
        },
        {
            quote: "As someone without a college degree, I struggled to find opportunities. This platform matched me with employers who value skills over credentials.",
            name: "Sophia L.",
            role: "Digital Marketing Associate",
            location: "Raleigh, NC"
        }
    ];

    return (
        <section className="w-full py-16 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Success Stories</h2>
                    <p className="text-muted-foreground">
                        Real stories from people who have transformed their careers with our platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary/40 mb-2" />
                                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-primary font-medium">{testimonial.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role} • {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
