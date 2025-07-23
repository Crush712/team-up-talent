import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, CreditCard, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Match",
      description: "Browse our vetted developers and teams. Filter by skills, experience, and availability.",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Connect & Discuss",
      description: "Chat with potential hires. Discuss your project requirements and get proposals.",
      color: "text-green-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Set milestones and budgets. Pay securely through our platform with protection.",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Get Work Done",
      description: "Collaborate on your project. Track progress and communicate through our tools.",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Future of Freelance Teamwork
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            For startups, businesses & freelancers who want less stress and more results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-4 -translate-y-1/2"></div>
                  )}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Choose SkillMesh?</h3>
            <div className="space-y-4">
              {[
                "Smart AI matching connects you instantly",
                "Built-in collaboration tools for seamless work",
                "50% lower costs than traditional platforms",
                "One-click hiring with no messy chats"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8 border">
            <div className="text-center space-y-6">
              <h4 className="text-xl font-semibold">Ready to get started?</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">1 Click</div>
                  <div className="text-sm text-muted-foreground">To hire</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">50% Less</div>
                  <div className="text-sm text-muted-foreground">Costs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">No Fees</div>
                  <div className="text-sm text-muted-foreground">No chats</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                *No platform fees for the first project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;