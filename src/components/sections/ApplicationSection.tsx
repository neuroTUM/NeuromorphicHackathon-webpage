import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { CheckCircle, Users, Code, Trophy, FileText } from "lucide-react";

const ApplicationSection = () => {
  const requirements = [
    {
      icon: Users,
      title: "Team Formation",
      description: "Teams of 2-4 people. Individual participants will be matched during team formation."
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Programming experience in Python, C++, or similar. Background in AI/ML preferred."
    },
    {
      icon: FileText,
      title: "Application Materials",
      description: "CV/resume, and previous project examples (if available)."
    }
  ];

  const judging = [
    "Technical Innovation & Creativity",
    "Neuromorphic Computing Integration", 
    "Real-world Impact Potential",
    "Implementation Quality",
    "Presentation & Demo"
  ];

  const prizes = [
    { place: "1st Place", amount: "$20,000", description: "Grand Prize Winner" },
    { place: "2nd Place", amount: "$15,000", description: "Runner-up" },
    { place: "3rd Place", amount: "$10,000", description: "Third Place" },
    { place: "Best Innovation", amount: "$5,000", description: "Most Creative Solution" }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Application Guidelines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join the neuromorphic revolution? Here's everything you need to know to apply.
          </p>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {requirements.map((req, i) => (
            <Card key={i} className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <req.icon className="w-8 h-8 text-neural-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{req.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {req.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <Card className="bg-gradient-card border-primary/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Application Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Submit Application", desc: "Complete online form with required materials" },
                { step: "2", title: "Review Process", desc: "Applications reviewed by expert panel" },
                { step: "3", title: "Acceptance Notification", desc: "Successful applicants notified by October 25th, 2025" },
                { step: "4", title: "Event Confirmation", desc: "Confirm attendance and receive event details" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-neural flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        {/* Application CTA */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Apply?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Applications are now open! Don't miss your chance to be part of this groundbreaking event 
            and help shape the future of neuromorphic computing.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button variant="hero" size="xl" asChild>
              <a href="https://tally.so/r/wQGoB8" target="_blank" rel="noopener noreferrer">
                Submit Application
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="bg-neural-surface/30 rounded-lg p-4">
              <div className="font-semibold text-foreground mb-1">Application Deadline</div>
              <div className="text-neural-primary">October 20, 2025</div>
            </div>
            <div className="bg-neural-surface/30 rounded-lg p-4">
              <div className="font-semibold text-foreground mb-1">Notification Date</div>
              <div className="text-neural-primary">October 25, 2025</div>
            </div>
            <div className="bg-neural-surface/30 rounded-lg p-4">
              <div className="font-semibold text-foreground mb-1">Questions?</div>
              <div className="text-neural-primary">neuromotion@neurotum.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;