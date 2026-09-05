import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Crafting Digital Solutions with Passion & Precision";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/assets/hero-background.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      <div className="absolute inset-0 aurora-bg pointer-events-none" />
      
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]" />
      </div>

      {/* Floating Particle Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${(i * 19) % 98}%`,
              top: `${(i * 23) % 95}%`,
              animationDelay: `${(i * 0.4) % 5}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins font-bold text-foreground leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-teal bg-clip-text text-transparent text-shimmer">
                SoftArch IT
              </span>
            </h1>

            {/* Typewriter Display */}
            <div className="min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-poppins leading-relaxed font-medium">
                {displayText}
                <span className="animate-pulse ml-1 text-primary">|</span>
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto font-poppins opacity-85 leading-relaxed">
              Transforming ideas into powerful digital experiences through innovative design, robust development, and cutting-edge digital marketing strategies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() => scrollTo("services")}
                className="btn-professional btn-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-poppins font-medium touch-target cursor-pointer"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-outline-professional px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-poppins font-medium touch-target cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/15 rounded-full filter blur-3xl animate-float opacity-60" />
        <div
          className="absolute bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-accent-purple/15 rounded-full filter blur-3xl animate-float opacity-60"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-accent-teal/15 rounded-full filter blur-3xl animate-float opacity-40 hidden sm:block"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </section>
  );
};
