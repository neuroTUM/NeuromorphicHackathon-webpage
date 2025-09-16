import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Network, Trophy } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Brain-Inspired Computing",
      description: "Explore neuromorphic processors that mimic biological neural networks for ultra-efficient computation."
    },
    {
      icon: Network,
      title: "Spike-Based Processing",
      description: "Work with event-driven architectures that process information asynchronously, just like neurons."
    },
    {
      icon: Trophy,
      title: "Prize",
      description: "All participants receive hackathon souvenirs, while the winning team gets a special prize from our sponsors."
    }
  ];

  return (
    <section className="py-24 px-6 bg-neural-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About the Hackathon
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Neuromorphic computing represents the next frontier in artificial intelligence. 
            By mimicking the brain's architecture and processing methods, we can create 
            incredibly efficient, adaptive, and powerful computing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <Card key={i} className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-neural group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-neural-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;