import React from "react";
import { Card, CardContent } from "./ui/Card";

export const About: React.FC = () => {
  const technicalSkills = [
    "Python",
    "Java",
    "JavaScript",
    "UI/UX Design",
    "Website & App Development",
    "Data Science",
    "Software Testing",
    "Time Management",
    "Smart Working",
    "Leadership",
  ];

  const specializations = [
    "IoT Development",
    "Cyber Security",
    "Blockchain Technology",
    "AI & Machine Learning",
    "Data Science",
    "Cloud Computing",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-card relative overflow-hidden">
      {/* Background conic gradient grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(192,95,255,0.1),transparent)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-foreground mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-teal bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* Bio Text */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up order-2 lg:order-1">
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 sm:space-y-6 font-poppins">
              <p>
                Hi, I'm{" "}
                <span className="font-semibold text-primary font-poppins">Amaan Khan</span>{" "}
                – a passionate developer currently in my 4th year BE of Computer Engineering at{" "}
                <span className="font-semibold text-secondary font-poppins">
                  MH Saboo Siddik College of Engineering
                </span>{" "}
                (specializing in IoT, Cyber Security & Blockchain Technology).
              </p>
              <p>
                I love turning ideas into digital solutions. Whether it's designing sleek user interfaces, building functional websites and mobile apps, creating effective digital marketing strategies, or ensuring software runs smoothly through testing — I focus on delivering quality with creativity and precision.
              </p>
            </div>
          </div>

          {/* Cards Column */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Technical Skills Card */}
            <Card className="glass-card border border-primary/20 hover:border-primary/40 p-4 sm:p-6 card-float animate-fade-in-up">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-foreground mb-3 sm:mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technicalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 glass border border-primary/30 text-primary rounded-lg text-xs sm:text-sm font-poppins font-medium hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations Card */}
            <Card className="glass-card border border-secondary/20 hover:border-secondary/40 p-4 sm:p-6 card-float animate-fade-in-up">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-foreground mb-3 sm:mb-4">
                  Specializations
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {specializations.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 glass rounded-lg">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground font-poppins font-medium">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="glass-card border border-accent/20 hover:border-accent/40 p-4 sm:p-6 card-float animate-fade-in-up">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-foreground mb-3 sm:mb-4">
                  Education
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 glass rounded-lg">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-1.5 sm:mt-2 animate-pulse flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base font-poppins font-medium text-foreground">
                        Computer Engineering
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm font-poppins">
                        MH Saboo Siddik College of Engineering
                      </p>
                      <p className="text-primary text-xs sm:text-sm font-poppins font-medium">
                        4th Year BE • Currently Pursuing
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
