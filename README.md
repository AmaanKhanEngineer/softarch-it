# SoftArch IT — Portfolio & Services

> Professional portfolio & digital agency website for **Amaan Khan** showcasing UI/UX Design, Website & App Development, Digital Marketing, Software Testing, and BPO services.

---

## 🌟 Features

- **Modern Glassmorphic UI**: Neon glowing accents, animated aurora gradient backdrops, floating particle dots, and glass cards.
- **Dynamic Hero Section**: Interactive typewriter animation ("*Crafting Digital Solutions with Passion & Precision*") with pulsing cursor, ambient blur orbs, and quick action CTAs.
- **About Me**: Showcases Amaan Khan's engineering background at MH Saboo Siddik College of Engineering (IoT, Cyber Security, Blockchain), technical skills tags, and specializations.
- **Services Portfolio**: Detailed service breakdown with Unsplash visual cards, badges, and key feature checklists:
  1. UI/UX Design
  2. Website & App Development
  3. Digital Marketing
  4. Software Testing
  5. BPO Services
- **Full Contact Integration**:
  - Direct Email: `amaankhan.engr@gmail.com`
  - Direct Phone: `+91 7400378861`
  - 1-Click WhatsApp Chat
  - Interactive Contact Form wired with EmailJS for live email delivery.
- **Mobile Responsive**: Seamless experience across mobile, tablet, and desktop viewports with a glass slide-out drawer menu.

---

## 🚀 Quick Start & Local Preview

### 1. Instant Preview (Zero Dependencies)
Run the built-in server with Python:

```bash
python3 serve.py
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser!

### 2. Development Mode (Vite + React)
To develop and modify components:

```bash
npm install
npm run dev
```

### 3. Production Build
To create an optimized production build:

```bash
npm run build
```

---

## 📁 Project Structure

```
softarch-it/
├── dist/                      # Standalone production distribution
│   ├── assets/
│   │   ├── hero-background.jpg
│   │   ├── index.css
│   │   └── index.js
│   └── index.html
├── public/                    # Static public assets
│   └── assets/
│       └── hero-background.jpg
├── src/                       # Modular React + TypeScript Source Code
│   ├── components/
│   │   ├── ui/                # Reusable UI primitives (Button, Card, Input, Textarea)
│   │   ├── Navbar.tsx         # Fixed glass navbar with mobile drawer
│   │   ├── Hero.tsx           # Hero section with typewriter effect
│   │   ├── About.tsx          # About Amaan Khan & technical skills
│   │   ├── Services.tsx       # 5 Core service offering cards
│   │   ├── Contact.tsx        # Contact info + EmailJS message form
│   │   └── Footer.tsx         # Multi-column footer
│   ├── App.tsx                # Main App container
│   ├── index.css              # Custom styling, animations & Tailwind
│   └── main.tsx               # React 18 DOM mount
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── serve.py                   # Local web server with SPA fallback
└── README.md
```

---

## 📬 Contact Information

- **Founder**: Amaan Khan
- **Email**: [amaankhan.engr@gmail.com](mailto:amaankhan.engr@gmail.com)
- **Phone / WhatsApp**: [+91 7400378861](https://wa.me/917400378861)
- **Website Reference**: [https://softarch-it.lovable.app/](https://softarch-it.lovable.app/)
