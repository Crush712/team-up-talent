import { Button } from "@/components/ui/button";
import { Search, Users, User } from "lucide-react";
import heroImage from "@/assets/hero-freelance.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hire Top{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Developers
                </span>
                <br />
                & Dev Teams
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect with world-class freelance developers and complete development teams. 
                Scale your projects with the right talent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1 sm:flex-none">
                <User className="w-5 h-5" />
                Hire Individuals
              </Button>
              <Button variant="secondary" size="lg" className="flex-1 sm:flex-none">
                <Users className="w-5 h-5" />
                Hire Teams
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for developers, skills, or technologies..."
                className="w-full pl-12 pr-4 py-4 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">10K+</div>
                <div>Developers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">500+</div>
                <div>Teams</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">98%</div>
                <div>Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Developers collaborating" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-xs text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;