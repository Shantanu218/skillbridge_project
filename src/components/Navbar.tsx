
import { Button } from "@/components/ui/button";
import { Briefcase, Compass, GraduationCap, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <Compass className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl">SkillBridge</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/jobs" className="text-sm font-medium hover:text-primary transition-colors">
                        Find Jobs
                    </Link>
                    <Link to="/skills" className="text-sm font-medium hover:text-primary transition-colors">
                        Skill Analysis
                    </Link>
                    <Link to="/career" className="text-sm font-medium hover:text-primary transition-colors">
                        Career Map
                    </Link>
                    <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">
                        Resources
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button asChild variant="ghost" size="icon" className="rounded-full">
                        <Link to="/profile">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Link>
                    </Button>
                    <Button asChild className="hidden sm:inline-flex">
                        <Link to="/get-started">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
