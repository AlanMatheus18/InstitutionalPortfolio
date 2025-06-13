import { ChevronDown } from "lucide-react";


export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-dental-primary text-white min-h-screen flex items-center relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-dental-primary opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dental-primary via-dental-primary/95 to-dental-primary/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
            Sorria com <span className="text-dental-secondary">Confiança!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed">
            Transforme seu sorriso com nossa equipe especializada. Tratamentos modernos e personalizados para você sorrir sem limites.
          </p>
          <button 
            onClick={scrollToForm}
            className="inline-block bg-dental-secondary hover:bg-blue-400 text-dental-primary font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Agende uma Avaliação
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-dental-secondary text-2xl" />
      </div>
      
    </section>
      

  );
}
