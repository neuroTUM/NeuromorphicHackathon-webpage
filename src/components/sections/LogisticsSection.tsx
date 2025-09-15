import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Wifi, Brain, Zap, Cpu } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const LogisticsSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  // Event dates  
  const eventDates = [
    new Date(2025, 10, 7),  // November 7 (Friday)
    new Date(2025, 10, 8),  // November 8 (Saturday)  
    new Date(2025, 10, 10), // November 10 (Monday)
    new Date(2025, 10, 11), // November 11 (Tuesday)
    new Date(2025, 10, 12), // November 12 (Wednesday)
  ];

  const isDayEvent = (date: Date) => {
    return eventDates.some(eventDate => 
      date.getDate() === eventDate.getDate() &&
      date.getMonth() === eventDate.getMonth() &&
      date.getFullYear() === eventDate.getFullYear()
    );
  };

  const isDayOff = (date: Date) => {
    const isNov9 = date.getDate() === 9 && date.getMonth() === 10 && date.getFullYear() === 2025;
    return isNov9;
  };
  const logistics = [
    {
      icon: Calendar,
      title: "Dates", 
      details: ["November 7-8, 10-12, 2025", "Friday-Saturday, Monday-Wednesday", "Sunday off for rest"]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Fortiss Headquarters", "Highlight Towers, Munich", "In-person event"]
    },
    {
      icon: Clock,
      title: "Schedule", 
      details: ["Friday: Expert talks & challenges", "Saturday: Hacking day", "Monday-Wednesday: Development & presentations"]
    },
    {
      icon: Wifi,
      title: "What's Provided",
      details: ["Neuromorphic hardware access", "Mentorship from experts", "Meals & refreshments"]
    }
  ];

  const schedule = {
    "Friday Nov 7": [
      { time: "09:00", event: "Doors Open", speaker: "fortiss" },
      { time: "09:30", event: "Welcome by fortiss and NeuroTUM", speaker: "Dr. Axel von Arnim, NeuroTUM" },
      { time: "10:15", event: "Welcome by Next Generation AI Computing", speaker: "LMU" },
      { time: "10:35", event: "Welcome by STANCE neuromorphic ecosystem", speaker: "Fraunhofer" },
      { time: "11:15", event: "Neuromorphic Computing for Industrial Use Cases", speaker: "Neumeier, Huber, Kannan (fortiss)" },
      { time: "12:00", event: "Industry Highlight Talk", speaker: "Simi GmbH (ZF-Gruppe)" },
      { time: "14:00", event: "Investigating Drone Detection from Aerial Platform", speaker: "DLR" },
      { time: "14:45", event: "Hackathon Topics & Pitch Presentation", speaker: "fortiss, NeuroTUM" },
      { time: "19:30", event: "Day End", speaker: "" }
    ],
    "Saturday Nov 8": [
      { time: "All Day", event: "Intensive Hacking & Development", speaker: "" }
    ],
    "Sunday Nov 9": [
      { time: "", event: "Rest Day", speaker: "" }
    ],
    "Monday Nov 10": [
      { time: "All Day", event: "Development & Testing", speaker: "" }
    ],
    "Tuesday Nov 11": [
      { time: "All Day", event: "Final Development & Testing", speaker: "" }
    ],
    "Wednesday Nov 12": [
      { time: "09:00", event: "Pitch Preparation", speaker: "" },
      { time: "13:30", event: "Team Presentations", speaker: "Group Representatives" },
      { time: "14:30", event: "Voting", speaker: "fortiss, NeuroTUM, Companies" },
      { time: "15:00", event: "Prize Nomination", speaker: "Dr. Axel von Arnim, NeuroTUM" },
      { time: "15:30", event: "Closing & Future Research Topics", speaker: "fortiss, BMW, DLR" },
      { time: "16:15", event: "End of Workshop", speaker: "" }
    ]
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Introduction to Neuromorphic Computing */}
        <div className="mb-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-neural mb-6">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What is Neuromorphic Computing?
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8">
                Neuromorphic computing represents a revolutionary approach to artificial intelligence that mimics 
                the structure and function of the human brain. Unlike traditional digital computers that process 
                information sequentially, neuromorphic systems process information in parallel, offering 
                unprecedented energy efficiency and real-time learning capabilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-neural-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-neural-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Energy Efficient</h4>
                  <p className="text-sm text-muted-foreground">Parallel processing mimics brain efficiency</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-neural-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-neural-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Real-time Learning</h4>
                  <p className="text-sm text-muted-foreground">Adaptive systems that learn continuously</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-neural-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Cpu className="w-6 h-6 text-neural-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">AI Revolution</h4>
                  <p className="text-sm text-muted-foreground">Transforming robotics and edge computing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Event Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about participating in the Neuromorphic Hackathon
          </p>
        </div>

        {/* Event Details List */}
        <Card className="bg-gradient-card border-primary/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Quick Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neural-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">When:</span>
                    <span className="text-muted-foreground ml-2">November 7-8, 10-12, 2025 (Friday-Saturday, Monday-Wednesday with Sunday off)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neural-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Where:</span>
                    <span className="text-muted-foreground ml-2">Fortiss Headquarters, Highlight Towers, Munich, Germany</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neural-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Challenges:</span>
                    <span className="text-muted-foreground ml-2">3 industry challenges from leading companies (more details soon...)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neural-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Participants:</span>
                    <span className="text-muted-foreground ml-2">20 selected participants</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neural-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Provided:</span>
                    <span className="text-muted-foreground ml-2">Neuromorphic hardware access, expert mentorship, and all meals & refreshments</span>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Event Calendar */}
        <Card className="bg-gradient-card border-primary/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Event Calendar
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Our unique 5-day schedule with Sunday rest day
            </p>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={new Date(2025, 10, 1)}
                className="pointer-events-auto"
                weekStartsOn={1}
                modifiers={{
                  eventDay: eventDates,
                  restDay: [new Date(2025, 10, 9)]
                }}
                modifiersStyles={{
                  eventDay: {
                    backgroundColor: 'hsl(var(--neural-primary))',
                    color: 'hsl(var(--primary-foreground))',
                    fontWeight: 'bold'
                  },
                  restDay: {
                    backgroundColor: 'hsl(var(--neural-secondary) / 0.3)',
                    color: 'hsl(var(--muted-foreground))',
                    textDecoration: 'line-through'
                  }
                }}
              />
              <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-neural-primary"></div>
                  <span className="text-muted-foreground">Event Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-neural-secondary/30"></div>
                  <span className="text-muted-foreground">Rest Day (Sunday)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Schedule */}
        <Card className="bg-gradient-card border-primary/10 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Detailed Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {Object.entries(schedule).map(([day, events]) => (
                <div key={day} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px bg-gradient-to-r from-neural-primary to-transparent flex-1"></div>
                    <h3 className="text-lg font-bold text-foreground bg-gradient-card px-4 py-2 rounded-full border border-primary/20">
                      {day}
                    </h3>
                    <div className="h-px bg-gradient-to-l from-neural-primary to-transparent flex-1"></div>
                  </div>
                  <div className="space-y-3">
                    {events.map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center gap-3 p-3 rounded-lg bg-neural-surface/20 border border-primary/5">
                        {item.time && (
                          <div className="flex-shrink-0 min-w-[80px]">
                            <div className="text-sm font-semibold text-neural-primary">
                              {item.time}
                            </div>
                          </div>
                        )}
                        <div className="flex-grow">
                          <h4 className="font-medium text-foreground">{item.event}</h4>
                           {item.speaker && day === "Friday Nov 7" && (
                             <p className="text-muted-foreground text-sm">
                               {item.speaker}
                             </p>
                           )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Location Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Venue</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neural-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Fortiss Headquarters</div>
                  <div className="text-muted-foreground">Highlight Towers</div>
                  <div className="text-muted-foreground">Munich, Germany</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-neural/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">In-Person Event:</strong> Join us at the innovative Fortiss headquarters 
                  in Munich's iconic Highlight Towers for an immersive hackathon experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-card rounded-xl p-8 border border-primary/10">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Getting There</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neural-secondary rounded-full mr-3" />
                U-Bahn: U6 to Nordfriedhof station
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neural-secondary rounded-full mr-3" />
                7 minutes walk from station
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neural-secondary rounded-full mr-3" />
                Parking available in building garage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;