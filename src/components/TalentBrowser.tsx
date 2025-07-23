import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Users, Clock, User } from "lucide-react";

const TalentBrowser = () => {
  const individuals = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      location: "San Francisco, CA",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      avatar: "SC",
      available: true,
      completedProjects: 89
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Mobile App Developer",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 75,
      location: "Austin, TX",
      skills: ["React Native", "iOS", "Android", "Firebase"],
      avatar: "MR",
      available: true,
      completedProjects: 67
    },
    {
      id: 3,
      name: "Elena Petrov",
      title: "DevOps Engineer",
      rating: 5.0,
      reviews: 156,
      hourlyRate: 95,
      location: "Berlin, Germany",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      avatar: "EP",
      available: false,
      completedProjects: 124
    }
  ];

  const teams = [
    {
      id: 1,
      name: "CodeCraft Studio",
      specialization: "Full-Stack Development",
      rating: 4.9,
      reviews: 45,
      teamSize: 8,
      location: "Remote",
      skills: ["React", "Python", "DevOps", "UI/UX"],
      avatar: "CC",
      available: true,
      completedProjects: 34
    },
    {
      id: 2,
      name: "Mobile Masters",
      specialization: "Mobile App Development",
      rating: 4.7,
      reviews: 32,
      teamSize: 6,
      location: "London, UK",
      skills: ["React Native", "Swift", "Kotlin", "Flutter"],
      avatar: "MM",
      available: true,
      completedProjects: 28
    }
  ];

  const IndividualCard = ({ developer }: { developer: typeof individuals[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {developer.avatar}
                </AvatarFallback>
              </Avatar>
              {developer.available && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{developer.name}</h3>
              <p className="text-muted-foreground text-sm">{developer.title}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{developer.rating}</span>
              <span className="text-muted-foreground text-sm">({developer.reviews})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{developer.location}</span>
          </div>
          <div className="font-semibold">${developer.hourlyRate}/hr</div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {developer.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{developer.completedProjects} projects completed</span>
          {developer.available ? (
            <span className="text-accent font-medium">Available now</span>
          ) : (
            <span className="text-destructive">Busy</span>
          )}
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button className="flex-1" size="sm">
            Hire Now
          </Button>
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const TeamCard = ({ team }: { team: typeof teams[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-secondary/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
                  {team.avatar}
                </AvatarFallback>
              </Avatar>
              {team.available && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{team.name}</h3>
              <p className="text-muted-foreground text-sm">{team.specialization}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{team.rating}</span>
              <span className="text-muted-foreground text-sm">({team.reviews})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{team.teamSize} members</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{team.location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {team.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{team.completedProjects} projects completed</span>
          {team.available ? (
            <span className="text-accent font-medium">Available now</span>
          ) : (
            <span className="text-destructive">Busy</span>
          )}
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button variant="secondary" className="flex-1" size="sm">
            Hire Team
          </Button>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="browse" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse Top Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect developer or team for your project. All talent is pre-vetted and ready to start.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex bg-background rounded-lg p-1 border">
            <Button variant="default" size="sm" className="rounded-md">
              Individual Developers
            </Button>
            <Button variant="ghost" size="sm" className="rounded-md">
              Development Teams
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          {/* Individual Developers */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-primary" />
              Individual Developers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {individuals.map((developer) => (
                <IndividualCard key={developer.id} developer={developer} />
              ))}
            </div>
          </div>

          {/* Development Teams */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-secondary" />
              Development Teams
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Talent
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentBrowser;