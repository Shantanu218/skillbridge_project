
import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full border-t bg-muted/40 py-6">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <Compass className="h-5 w-5 text-primary" />
                        <span className="font-bold">SkillBridge</span>
                    </Link>
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Bridging the gap to better opportunities.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-8">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-medium text-sm">Platform</h4>
                        <div className="flex flex-col gap-1">
                            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                About Us
                            </Link>
                            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Contact
                            </Link>
                            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-medium text-sm">Resources</h4>
                        <div className="flex flex-col gap-1">
                            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Blog
                            </Link>
                            <Link to="/success-stories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Success Stories
                            </Link>
                            <Link to="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Partners
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-medium text-sm">Legal</h4>
                        <div className="flex flex-col gap-1">
                            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Privacy
                            </Link>
                            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-6 pt-4 border-t border-border/40">
                <p className="text-xs text-center text-muted-foreground">
                    © {new Date().getFullYear()} SkillBridge. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
