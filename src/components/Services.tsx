import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

export const Services: React.FC = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Modern and user-centric interfaces tailored to your brand and audience. I create designs that not only look beautiful but also provide intuitive user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Website & App Development",
      description:
        "Custom websites and mobile apps built with clean code, responsive design, and full functionality. From concept to deployment, I handle the entire development process.",
      features: [
        "Responsive Web Design",
        "Mobile Applications",
        "Full-Stack Development",
        "API Integration",
        "Performance Optimization",
      ],
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to boost your online presence and drive growth. From social media campaigns to SEO optimization, I help businesses reach their target audience effectively.",
      features: [
        "Social Media Marketing",
        "SEO Optimization",
        "Content Strategy",
        "Analytics & Reporting",
        "Brand Development",
      ],
      icon: "📱",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      gradient: "from-accent to-primary",
    },
    {
      title: "Software Testing",
      description:
        "End-to-end testing services to ensure performance, reliability, and bug-free experience. I help maintain code quality and user satisfaction through comprehensive testing strategies.",
      features: [
        "Automated Testing",
        "Manual Testing",
        "Performance Testing",
        "Security Testing",
        "Quality Assurance",
      ],
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      gradient: "from-primary to-accent",
    },
    {
      title: "BPO Services",
      description:
        "We offer reliable BPO services including customer support, tele-calling, data entry, and back-office solutions to help businesses scale efficiently.",
      features: [
        "Customer Support",
        "Tele-calling",
        "Data Entry",
        "Back-office Solutions",
        "Process Optimization",
      ],
      icon: "📞",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-foreground mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-teal bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 sm:mb-8 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-poppins px-4">
            Comprehensive digital solutions tailored to transform your ideas into powerful, user-friendly applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-professional group transition-all duration-500 animate-fade-in-up border-border/50 hover:border-primary/40 bg-card/60 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Banner Image & Icon */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-15 group-hover:opacity-30 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-2xl sm:text-3xl md:text-4xl bg-card/80 backdrop-blur-md p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300 border border-primary/20">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              {/* Description & Features */}
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-poppins">
                  {service.description}
                </p>

                <div className="space-y-2 sm:space-y-3 pt-2">
                  <h4 className="text-sm sm:text-base font-semibold text-primary font-poppins">
                    Key Features:
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start text-xs sm:text-sm text-muted-foreground font-poppins group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0 animate-pulse" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
