import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevHire
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#browse" className="text-sm font-medium hover:text-primary transition-colors">
              Browse Talent
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#for-businesses" className="text-sm font-medium hover:text-primary transition-colors">
              For Businesses
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;