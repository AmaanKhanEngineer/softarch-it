import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState<{
    type: "success" | "error" | "info";
    title: string;
    description: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello! I'm interested in your services and would like to discuss my project."
    );
    window.open(`https://wa.me/917400378861?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage({
        type: "error",
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
      });
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }

    setLoading(true);
    let delivered = false;

    // 1. Direct Delivery to amaankhan.engr@gmail.com via FormSubmit AJAX
    try {
      const fsRes = await fetch("https://formsubmit.co/ajax/amaankhan.engr@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
          _subject: `SoftArch IT: New Message from ${formData.name}`,
          _replyto: formData.email,
          _template: "table",
        }),
      });
      if (fsRes.ok) {
        delivered = true;
      }
    } catch (fsErr) {
      console.warn("FormSubmit delivery attempt:", fsErr);
    }

    // 2. Dual Send via EmailJS
    try {
      await emailjs.send(
        "service_j044owm",
        "template_xq49m8q",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
          to_name: "SoftArch IT",
          to_email: "amaankhan.engr@gmail.com",
          reply_to: formData.email,
        },
        "WfNsO8D1SENVi0-6l"
      );
      delivered = true;
    } catch (ejsErr) {
      console.warn("EmailJS attempt:", ejsErr);
    }

    // 3. Local Server Log if running serve.py
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch (e) {}

    if (delivered) {
      setToastMessage({
        type: "success",
        title: "Message sent successfully!",
        description: "Thank you for reaching out. Amaan Khan will get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      // Direct email client fallback if offline or blocked
      const subject = encodeURIComponent(`SoftArch IT Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:amaankhan.engr@gmail.com?subject=${subject}&body=${body}`;
      setToastMessage({
        type: "info",
        title: "Opening Email App...",
        description: "Please confirm sending the message directly to amaankhan.engr@gmail.com.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }

    setLoading(false);
    setTimeout(() => setToastMessage(null), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-card to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(192,95,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-foreground mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-teal bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 sm:mb-8 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-poppins px-4">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up max-w-md">
            <div
              className={`p-4 rounded-xl border backdrop-blur-xl shadow-2xl ${
                toastMessage.type === "success"
                  ? "bg-green-950/90 border-green-500/50 text-green-200"
                  : toastMessage.type === "info"
                  ? "bg-blue-950/90 border-blue-500/50 text-blue-200"
                  : "bg-red-950/90 border-red-500/50 text-red-200"
              }`}
            >
              <h4 className="font-semibold text-sm mb-1">{toastMessage.title}</h4>
              <p className="text-xs opacity-90">{toastMessage.description}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column: Direct Contacts */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="glass-card border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Item */}
                <div
                  className="flex items-center space-x-4 cursor-pointer hover:bg-primary/10 p-4 rounded-xl transition-all duration-300 group glass"
                  onClick={() => (window.location.href = "mailto:amaankhan.engr@gmail.com")}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:animate-glow">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-poppins">Email</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors font-poppins">
                      amaankhan.engr@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div
                  className="flex items-center space-x-4 cursor-pointer hover:bg-secondary/10 p-4 rounded-xl transition-all duration-300 group glass"
                  onClick={() => (window.location.href = "tel:+917400378861")}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-all duration-300 group-hover:animate-glow">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-poppins">Phone</h3>
                    <p className="text-muted-foreground hover:text-secondary transition-colors font-poppins">
                      +91 7400378861
                    </p>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div
                  className="flex items-center space-x-4 cursor-pointer hover:bg-accent/10 p-4 rounded-xl transition-all duration-300 group glass"
                  onClick={openWhatsApp}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:animate-glow">
                    <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-poppins">WhatsApp</h3>
                    <p className="text-muted-foreground hover:text-accent transition-colors font-poppins">
                      +91 7400378861 - Click to chat
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center space-x-4 p-4 rounded-xl glass">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-primary text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-poppins">Response Time</h3>
                    <p className="text-muted-foreground font-poppins">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote / Callout Card */}
            <div className="text-center lg:text-left glass-card p-6 rounded-2xl border border-border/40">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Let's connect and build something extraordinary!
              </h3>
              <p className="text-muted-foreground font-poppins leading-relaxed">
                Whether you have a project in mind, need technical consultation, or just want to say hello, I'm always excited to hear from fellow innovators.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="glass-card border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2 font-poppins">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full text-white bg-white/10 border-white/20 focus:border-primary placeholder:text-slate-400"
                    disabled={loading}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2 font-poppins">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full text-white bg-white/10 border-white/20 focus:border-primary placeholder:text-slate-400"
                    disabled={loading}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2 font-poppins">
                    Phone Number with Country Code
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 xxxxx xxxxx"
                    className="w-full text-white bg-white/10 border-white/20 focus:border-primary placeholder:text-slate-400"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2 font-poppins">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or how I can help you..."
                    className="w-full text-white bg-white/10 border-white/20 focus:border-primary placeholder:text-slate-400"
                    disabled={loading}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-professional py-3 sm:py-4 text-base sm:text-lg font-poppins font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 professional-shadow cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
