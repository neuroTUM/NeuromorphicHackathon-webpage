import { Button } from "@/components/ui/enhanced-button";
import { Brain, Zap, Users } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={neuralHero} 
          alt="Neural network visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neural-deep/80 to-transparent" />
      </div>

      {/* Floating Neural Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neural-glow rounded-full animate-neural-pulse opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-full bg-gradient-card border border-primary/20 shadow-glow animate-float">
            <Brain className="w-12 h-12 text-neural-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
          Neuromorphic
          <br />
          <span className="text-4xl md:text-6xl">Hackathon</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Join the revolution in brain-inspired computing. Build the future of AI with 
          neuromorphic technologies that mirror the efficiency of biological neural networks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button variant="hero" size="xl" className="group">
            Apply Now
            <Zap className="ml-2 w-5 h-5 group-hover:animate-neural-pulse" />
          </Button>
          <Button variant="neural-outline" size="xl" asChild>
            <a href="https://www.fortiss.org/karriere/munich-neuromorphic-hackathon" target="_blank" rel="noopener noreferrer">
              Previous Editions
            </a>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 justify-center max-w-md mx-auto">
          {[
            { icon: Users, label: "Participants", value: "20" },
            { icon: Zap, label: "Duration", value: "5 Days" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-3 flex justify-center">
                <stat.icon className="w-8 h-8 text-neural-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;