import React from "react";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border/50 text-foreground py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-accent-purple to-accent-teal bg-clip-text text-transparent mb-3 sm:mb-4 font-poppins">
              SoftArch IT
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md text-sm sm:text-base font-poppins">
              Transforming ideas into powerful digital experiences through innovative design, robust development, and meticulous testing. Let's build the future together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {(["home", "about", "services", "contact"] as const).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base font-poppins capitalize cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary font-poppins">
              Contact Info
            </h4>
            <div className="space-y-1.5 sm:space-y-2 text-muted-foreground">
              <p
                className="text-sm sm:text-base font-poppins hover:text-primary transition-colors cursor-pointer"
                onClick={() => (window.location.href = "mailto:amaankhan.engr@gmail.com")}
              >
                amaankhan.engr@gmail.com
              </p>
              <p
                className="text-sm sm:text-base font-poppins hover:text-primary transition-colors cursor-pointer"
                onClick={() => (window.location.href = "tel:+917400378861")}
              >
                +91 7400378861
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <p className="text-muted-foreground text-xs sm:text-sm font-poppins">
            © 2025 SoftArch IT. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm font-poppins">
            Designed & Developed by Amaan Khan
          </p>
        </div>
      </div>
    </footer>
  );
};
