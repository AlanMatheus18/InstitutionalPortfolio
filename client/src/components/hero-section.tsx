import { ChevronDown } from "lucide-react";
import invisa from '../../src/assets/imgs/Invisalign.webp'

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#290e49] text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden" id="hero">
      <div className="container  px-20 relative z-10 w-2px">
        <img src={invisa} alt="" className="w-[230px] mb-[20px]" />
        <h1 className="text-4xl md:text-4xl font-montserrat font-bold mb-6 leading-tight">
          Sorria com <span className="text-dental-secondary">Confiança!</span>
        </h1>
        <p className="text-xl md:text-xl mb-8 text-gray-100 max-w-2xl leading-relaxed">
          O alinhador transparente que transforma seu sorriso sem comprometer sua rotina.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-block bg-dental-secondary hover:bg-blue-400 text-dental-primary font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
        >
          Agende uma Avaliação Gratuita
        </button>

      </div>

      <div className="md:w-[800px] h-[700px] bg-color[none] " id="formulario">
        <iframe
          src="https://forms.kommo.com/rwvmrrv"
          className="w-[500px] h-full mt-[-50px]"
          frameBorder="0"
          scrolling="no"
          
        ></iframe>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-dental-secondary text-2xl" />
      </div>

    </section>


  );
}
