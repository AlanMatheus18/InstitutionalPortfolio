import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Testimonials from "@/components/ui/Testimonials";

import perfil from "../assets/imgs/Perfil1.webp";
import perfil2 from "../assets/imgs/Perfil2.webp";
import perfil3 from "../assets/imgs/Perfil3.webp";
import perfil4 from "../assets/imgs/Perfil4.webp";
import perfil5 from "../assets/imgs/Perfil5.webp";

const carouselSlides = [


  
  <Testimonials
    name="Mikaline Valeria"
    comment="Clínica bem aconchegante, recepção organizada ótimos profissionais, equipe maravilhosa"
    imageUrl={perfil}
  />,
  <Testimonials
    name="Andrea Kattyllyn"
    comment="Excelentes profissionais"
    imageUrl={perfil2}
  />,
  <Testimonials
    name="Rubia Lima"
    comment="Ótimo atendimento, tudo muito lindo. Só vão"
    imageUrl={perfil3}
  />,
  <Testimonials
    name="Michel Jean Wanderley"
    comment="Atendimento diferenciado com muita qualidade e ambiente moderno e acolhedor"
    imageUrl={perfil4}
  />,
  <Testimonials
    name="Tatiana Mota"
    comment="Adorei conhecer a clínica, linda!
Amei a tarde, um momento para recarregar as energias e se renovar. Uma delicia!"
    imageUrl={perfil5}
  />,
 
];
export default function TestimonalsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselSlides.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const previousSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

 

  return (
    <section className="py-20 bg-dental-light" id="resultados">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Veja o que Nossos Pacientes Falam
          </h2>
        </div>

        {/* Carrossel responsivo (funciona em todas as telas) */}
        <div className="relative max-w-xl sm:max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((Component, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center items-center p-4 sm:p-6"
                >
                  <div className="w-full sm:w-[60%] max-h-full sm:max-h-96 rounded-2xl overflow-hidden">
                    {Component}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões esquerda/direita */}
          <button
            onClick={previousSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dental-primary rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dental-primary rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-dental-secondary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%C2%A0seu%C2%A0site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-block bg-[#0f8516] text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Agende uma Avaliação Gratuita
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
