import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Network, Lightbulb } from "lucide-react";

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
      icon: Lightbulb,
      title: "Innovation Challenge",
      description: "Push the boundaries of AI efficiency and create solutions for edge computing and robotics."
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

        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                What is Neuromorphic Computing?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Neuromorphic computing is a revolutionary approach that designs computer 
                architectures to mimic the neural structure and operation of the human brain. 
                This paradigm enables unprecedented energy efficiency and real-time processing capabilities.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neural-secondary rounded-full mr-3" />
                  Event-driven, asynchronous processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neural-secondary rounded-full mr-3" />
                  Ultra-low power consumption
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neural-secondary rounded-full mr-3" />
                  Adaptive learning and plasticity
                </li>
              </ul>
            </div>
            <div className="bg-gradient-neural/10 rounded-xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-neural-primary mb-2">1000x</div>
                <div className="text-muted-foreground mb-6">More energy efficient than traditional processors</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-neural-surface/50 rounded-lg p-3">
                    <div className="font-semibold text-foreground">Traditional AI</div>
                    <div className="text-muted-foreground">Batch processing</div>
                  </div>
                  <div className="bg-neural-surface/50 rounded-lg p-3">
                    <div className="font-semibold text-foreground">Neuromorphic</div>
                    <div className="text-muted-foreground">Real-time events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;