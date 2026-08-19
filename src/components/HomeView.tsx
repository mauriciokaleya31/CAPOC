import Hero from "./Hero";
import About from "./About";
import ContactForm from "./ContactForm";
import { useLanguage } from "../LanguageContext";

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-0" id="home-view-container">
      {/* 1. Cinematic Hero with full slideshow & interactive statistics */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Full Institutional Presentation & The 3 Pillars (Missão, Visão, Valores) + Integrated Sustainability */}
      <About />

      {/* 3. Official Contact & Partnership Form, Office Locations & Direct Lines */}
      <ContactForm />
    </div>
  );
}
