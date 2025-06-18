import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Testimonials from "@/components/ui/Testimonials";

const carouselSlides = [
  <Testimonials key="t1" />,
  <Testimonials key="t2" />,
  <Testimonials key="t3" />,
];


export default function ResultsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselSlides.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const previousSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-dental-light" id="resultados">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Resultados Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as transformações incríveis que já realizamos. Cada sorriso conta uma história de sucesso.
          </p>
        </div>

        {/* Carrossel para desktop */}
        <div className="relative max-w-6xl mx-auto hidden sm:block">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((Component, index) => (
                <div key={index} className="min-w-full flex justify-center items-center p-6">
                  <div className="w-[60%] max-h-96 rounded-2xl overflow-hidden shadow-xl">
                    {Component}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões esquerda/direita */}
          <button
            onClick={previousSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dental-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dental-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-dental-secondary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fallback mobile: slide fixo */}
        <div className="block sm:hidden space-y-8 mt-10">
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
            <Testimonials/>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="inline-block bg-[#25D366] text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Agende uma Avaliação Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
