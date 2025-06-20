import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import Invisa from "@/components/Invisa";
import ResultsSection from "@/components/results-section";
import StructureSection from "@/components/structure-section";
import LocationsSection from "@/components/locations-section";
import TestimonialsSection from "@/components/Testimonials-section";
import TestimonialsVideo from "@/components/TestimonialsVideo";

import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

import Beneficio from '@/components/Beneficio';

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
     
      <HeroSection />
      <ResultsSection />
      <TestimonialsVideo />
      <StructureSection />
      <Invisa/>
      <Beneficio/>
      
      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
