import { Building } from "lucide-react";
import dlrLogo from "@/assets/dlr-logo.png";
import similogo from "@/assets/d6745ba9-3990-4785-85ad-014fa452dfbd.png";
import fortisslogo from "@/assets/cb38a9cf-e454-4f99-9007-7e351b8f4365.png";
import gainLogo from "@/assets/gAIn_Logo_RGB.png";
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
      challenge: "Anomaly detection on neuromorphic hardware with the ESA anomaly dataset."
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
                className="block mb-6 hover:opacity-80 transition-opacity duration-300 flex justify-center"
              >
                <div className="w-32 h-24 bg-white rounded-lg flex items-center justify-center border border-gray-100">
                  {challenge.logo ? (
                    <img 
                      src={challenge.logo} 
                      alt={`${challenge.company} logo`}
                      className="max-w-28 max-h-20 object-contain"
                    />
                  ) : (
                    <Building className="w-16 h-16 text-primary" />
                  )}
                </div>
              </a>

              {/* Company Name */}
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
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
              <p className="text-muted-foreground leading-relaxed text-center">
                {challenge.challenge}
              </p>
            </div>
          ))}
        </div>

        {/* Sponsors Section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Sponsors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Supporting organizations making this neuromorphic computing event possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                company: "Next generation AI computing",
                logo: gainLogo,
                website: "https://www.futurecomputing.ai/"
              },
              {
                company: "Strategic Alliance for Neuromorphic Computing and Engineering",
                logo: null,
                website: "https://www.itwm.fraunhofer.de/en/departments/hpc/data-analysis-and-machine-learning/neuromorphic-computing-alliance-stance-en.html",
                displayText: ">>STANCE<<"
              }
            ].map((sponsor, index) => (
              <div key={index} className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                {/* Logo */}
                <a 
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6 hover:opacity-80 transition-opacity duration-300 flex justify-center"
                >
                  <div className="w-32 h-24 bg-white rounded-lg flex items-center justify-center border border-gray-100">
                    {sponsor.logo ? (
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.company} logo`}
                        className="max-w-28 max-h-20 object-contain"
                      />
                    ) : sponsor.displayText ? (
                      <span className="text-lg font-bold text-primary">
                        {sponsor.displayText}
                      </span>
                    ) : (
                      <Building className="w-16 h-16 text-primary" />
                    )}
                  </div>
                </a>

                {/* Company Name */}
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  <a 
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {sponsor.company}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChallengesSection;