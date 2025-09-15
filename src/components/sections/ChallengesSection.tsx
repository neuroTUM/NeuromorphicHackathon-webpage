import { Building } from "lucide-react";
import dlrLogo from "@/assets/dlr-logo.png";
import similogo from "@/assets/d6745ba9-3990-4785-85ad-014fa452dfbd.png";
import fortisslogo from "@/assets/cb38a9cf-e454-4f99-9007-7e351b8f4365.png";
const ChallengesSection = () => {
  const challenges = [
    {
      company: "DLR",
      logo: dlrLogo,
      website: "https://www.dlr.de",
      challenge: "Drone detection and tracking with event-based dataset and real drone."
    },
    {
      company: "Simi GmbH", 
      logo: similogo,
      website: "http://www.simi.com/de/home.html?type=rs%27A%3D0%27A%3D0%27A%3D0",
      challenge: "Event-based person identification using dataset training and real-world testing."
    },
    {
      company: "fortiss",
      logo: fortisslogo,
      website: "https://www.fortiss.org",
      challenge: "Design real-time learning algorithms for edge computing applications."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Industry Challenges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three leading companies will present real-world challenges for participants to tackle 
            using neuromorphic computing technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              {/* Logo */}
              <a 
                href={challenge.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-100">
                  {challenge.logo ? (
                    <img 
                      src={challenge.logo} 
                      alt={`${challenge.company} logo`}
                      className="max-w-20 max-h-12 object-contain"
                    />
                  ) : (
                    <Building className="w-12 h-12 text-primary" />
                  )}
                </div>
              </a>

              {/* Company Name */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                <a 
                  href={challenge.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  {challenge.company}
                </a>
              </h3>

              {/* Challenge Description */}
              <p className="text-muted-foreground leading-relaxed">
                {challenge.challenge}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChallengesSection;