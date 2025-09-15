import { Brain, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neural-deep border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-neural/10">
                <Brain className="w-6 h-6 text-neural-primary" />
              </div>
              <span className="ml-3 text-xl font-bold text-foreground">
                NeuroTum Hackathon
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Join the revolution in brain-inspired computing. Building the future 
              of AI with neuromorphic technologies that mirror biological efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/neuro.tum/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neural-primary transition-colors">
                Instagram
              </a>
              <a href="https://de.linkedin.com/company/neurotum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neural-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Event</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-neural-primary transition-colors">About</a></li>
              <li><a href="#logistics" className="hover:text-neural-primary transition-colors">Event Details</a></li>
              <li><a href="#challenges" className="hover:text-neural-primary transition-colors">Challenges</a></li>
              <li><a href="#application" className="hover:text-neural-primary transition-colors">Apply</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-neural-secondary" />
                <a href="mailto:neuromotion@neurotum.com" className="hover:text-neural-primary transition-colors">
                  neuromotion@neurotum.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-neural-secondary" />
                <span>TUM, Munich, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2024 NeuroTum. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neural-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neural-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neural-primary transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;