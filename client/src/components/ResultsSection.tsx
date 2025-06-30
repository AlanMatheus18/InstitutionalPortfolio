import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Result } from "./Result";
import img1 from "../../src/assets/imgs/antes-1.webp";
import img2 from "../../src/assets/imgs/depois-_1_.webp";


import img7 from "../../src/assets/imgs/Caso02Antes.jpg";
import img8 from "../../src/assets/imgs/Caso02Dps.jpg";

export default function ResultsSection() {
  const imagens = [
  { antes: img1, depois: img2 },
  
  { antes: img7, depois: img8 },
];

const resultSlides = imagens.map((img, index) => (
  <Result key={index} imgAntes={img.antes} imgDps={img.depois} />
));


  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = resultSlides.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const previousSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="py-20 bg-dental-light" id="resultados">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Resultados Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as transformações incríveis que já realizamos. Cada sorriso
            conta uma história de sucesso.
          </p>
        </div>

        {/* DESKTOP: GRADE DE RESULTADOS */}
        <div className="hidden sm:flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {resultSlides}
          </div>
        </div>

        {/* MOBILE: CARROSSEL */}
        <div className="block sm:hidden relative max-w-xl mx-auto mt-10">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {resultSlides.map((Component, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center items-center p-4"
                >
                  <div className="w-full max-h-full rounded-2xl overflow-hidden">
                    {Component}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <button
            onClick={previousSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dental-primary rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dental-primary rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {resultSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-dental-secondary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
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
