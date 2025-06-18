import { ChevronDown } from "lucide-react";
import invisa from '../../src/assets/imgs/Banner2.png'

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#290e49] bg-no-repeat bg-center bg-cover text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden" id="hero"  style={{ backgroundImage: `url(${invisa})` }}>
      <div className="bg-transparent bg-opacity-90 backdrop-blur-[5px] w-[100%] h-[100%] top-0 left-0 absolute"></div>
      
      <div className="container md:mb-[-20px] px-20 relative z-10 w-2px">
        
        <h1 className="text-4xl text-4xl font-montserrat font-bold mb-6 leading-tight">
          Implantes Dentários com Resultados <span className="text-dental-secondary">Naturais</span> e <span className="text-dental-secondary">Duradouros</span>
        </h1>
        <p className="text-xl md:text-xl mb-8 text-gray-100 max-w-2xl leading-relaxed">
          Volte a sorrir com segurança e qualidade. Avaliação gratuita com especialistas!
        </p>
       <div className="flex justify-center md:justify-start items-center">
  <a
    href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%C2%A0seu%C2%A0site"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      onClick={scrollToForm}
      className="inline-block bg-[#25D366] text-white w-[330px] font-montserrat font-bold py-4 px-8 rounded-full text-[15px] transition-all duration-300 hover:scale-105 shadow-xl"
    >
      Agende uma Avaliação Gratuita
    </button>
  </a>
</div>
      </div>
      <div className="md:w-[800px] h-[600px] scale-[0.90]" id="formulario">
        <iframe
        className="mt-[-80px] md:mt-[-80px]"
          src="https://forms.kommo.com/rwvmrrv"
          width={500}
          height={650}
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
