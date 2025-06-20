import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import faceta from "../../src/assets/imgs/facetas-porcelana.jpg";
import facetaMobile from "../../src/assets/imgs/Fundoin.webp"; // você deve ter uma versão otimizada

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState(faceta);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(facetaMobile);
      } else {
        setBackgroundImage(faceta);
      }
    };

    handleResize(); // aplica na montagem
    window.addEventListener("resize", handleResize); // escuta mudanças

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="bg-[#290e49] bg-no-repeat bg-center bg-cover text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden"
      id="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[#290e49] md:bg-black md:bg-opacity-40 bg-opacity-80 md:backdrop-blur-[5px] backdrop-blur-[7px] w-full h-full absolute top-0 left-0"></div>

      <div className="container mt-[20px] md:mt-[0px] md:mb-[-20px] px-20 relative z-10 w-2px">
        <h1 className="text-4xl font-montserrat font-bold mb-6 leading-tight">
          Transforme Seu Sorriso com Facetas Dentárias de Alta Estética
        </h1>
        <p className="text-xl md:text-xl mb-8 text-gray-100 max-w-2xl leading-relaxed">
          Descubra como alcançar dentes brancos, alinhados e com aparência natural em poucas sessões com nossos especialistas.
        </p>
        <div className="flex justify-center md:justify-start items-center">
          <a
            href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%C2%A0seu%C2%A0site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onClick={scrollToForm}
              className="inline-block bg-[#0f8516] text-white w-[330px] font-montserrat font-bold py-4 px-8 rounded-full text-[15px] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Agende uma Avaliação Gratuita
            </button>
          </a>
        </div>
      </div>

      <div className="md:w-[800px] h-[600px] scale-[0.90]" id="formulario">
        <iframe
          className="mt-[-80px] md:mt-[-80px]"
          src="https://forms.kommo.com/rwvxtrv"
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
