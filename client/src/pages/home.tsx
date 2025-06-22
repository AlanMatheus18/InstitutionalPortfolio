import { useEffect } from "react";
import MainSection from "@/components/MainSection";
import Sobre from "@/components/Sobre";
import ResultsSection from "@/components/ResultsSection";
import StructureSection from "@/components/StructureSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonalsSection";
import TestimonialsVideo from "@/components/TestimonialsVideo";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

import BenefitsSection from "@/components/BenefitsSection";

export default function Home() {

  
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <MainSection />
      <ResultsSection />
      <TestimonialsVideo />
      <StructureSection />
      <Sobre />
      <BenefitsSection />
      <TestimonialsSection/>
      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
