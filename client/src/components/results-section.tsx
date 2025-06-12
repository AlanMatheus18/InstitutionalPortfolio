import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    alt: "Resultado de clareamento dental antes e depois"
  },
  {
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600", 
    alt: "Resultado de implante dental antes e depois"
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    alt: "Resultado de ortodontia antes e depois"
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    alt: "Resultado de lentes de contato dental antes e depois"
  }
];

export default function ResultsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselImages.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
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
          
          <div className="flex justify-center mt-8 space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-dental-secondary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
