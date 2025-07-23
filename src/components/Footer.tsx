import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkillMesh
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              The future of freelance teamwork. Hire smarter, work better with one-click team building.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="ghost" size="sm">
                Blog
              </Button>
              <Button variant="ghost" size="sm">
                Careers
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Clients</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">How to Hire</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Talent Marketplace</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Project Catalog</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Enterprise</a></div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Talent</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">How to Find Work</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Direct Contracts</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Find Team Members</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">Help & Support</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Community</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Trust & Safety</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Developer API</a></div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 SkillMesh. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;