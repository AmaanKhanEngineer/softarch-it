import React, { useState } from "react";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full glass backdrop-blur-xl z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo("home")}>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold bg-gradient-to-r from-primary via-accent-purple to-accent-teal bg-clip-text text-transparent animate-glow">
              SoftArch IT
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {(["home", "about", "services", "contact"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-poppins font-medium transition-all hover:scale-105 relative group capitalize"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo("contact")}
              className="btn-neon font-poppins font-medium"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/10 transition-all"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass border-t border-primary/20 backdrop-blur-xl animate-slide-in-right">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {(["home", "about", "services", "contact"] as const).map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg font-poppins transition-all active:scale-95 capitalize"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 border-t border-primary/20">
              <Button
                onClick={() => scrollTo("contact")}
                className="btn-professional w-full font-poppins font-medium"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
