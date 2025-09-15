import { Building } from "lucide-react";
import dlrLogo from "@/assets/dlr-logo.png";

const HighlightTalksSection = () => {
  const speakers = [
    {
      company: "LMU",
      logo: null, // Will use Building icon as placeholder
      website: "https://www.lmu.de"
    },
    {
      company: "Simi GmbH",
      logo: "/lovable-uploads/d6745ba9-3990-4785-85ad-014fa452dfbd.png",
      website: "http://www.simi.com/de/home.html?type=rs%27A%3D0%27A%3D0%27A%3D0"
    },
    {
      company: "Fraunhofer",
      logo: null, // Will use Building icon as placeholder
      website: "https://www.fraunhofer.de"
    },
    {
      company: "fortiss",
      logo: "/lovable-uploads/cb38a9cf-e454-4f99-9007-7e351b8f4365.png",
      website: "https://www.fortiss.org"
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Highlight Talks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for inspiring talks from leading industry experts and research institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center group">
              <a 
                href={speaker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-32 h-24 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {speaker.logo ? (
                    <img 
                      src={speaker.logo} 
                      alt={`${speaker.company} logo`}
                      className="max-w-28 max-h-20 object-contain"
                    />
                  ) : (
                    <Building className="w-16 h-16 text-primary" />
                  )}
                </div>
              </a>
              
              <h3 className="text-lg font-semibold text-foreground text-center">
                <a 
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  {speaker.company}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightTalksSection;