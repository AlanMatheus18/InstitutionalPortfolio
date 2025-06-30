import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import bgimplante from "../../src/assets/imgs/BGImplantes.webp";
import bgOverlay from "../../src/assets/imgs/BGoverlay2.webp";
import logoimplante from "../../src/assets/imgs/DentalSant.webp";
import casal from "../../src/assets/imgs/implante-section.webp";

export default function MainSection() {
  const [backgroundImage, setBackgroundImage] = useState(bgimplante);

  const scrollToForm = () => {
    document
      .getElementById("formulario")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(bgOverlay);
      } else {
        setBackgroundImage(bgimplante);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="bg-[#290e49] bg-no-repeat bg-center bg-cover text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden"
      id="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[#290e49] md:bg-black md:bg-opacity-40 bg-opacity-60 md:backdrop-blur-[2px] backdrop-blur-[7px] w-full h-full absolute top-0 left-0"></div>

      <div className="container mt-[20px] md:mt-[0px] md:mb-[-20px] px-20 relative z-10 w-2px ">
        <img src={logoimplante} alt="" className="md:w-[258px] w-[200px]" />
        <h1 className="text-2xl md:text-4xl   font-montserrat font-bold mb-5 leading-tight">
          Implantes Dentários com Resultados{" "}
          <span className="text-dental-secondary font-bold">Naturais</span> e{" "}
          <span className=" text-dental-secondary font-bold">Duradouros</span>
        </h1>
        <p className="text-xl md:text-xl  mb-8 text-gray-100 max-w-2xl leading-relaxed">
          Volte a sorrir com segurança e qualidade. Avaliação gratuita com
          especialistas!
        </p>
        <div className="flex justify-center md:justify-start items-center">
          <a
            href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
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

      <div
        className="hidden md:block md:w-[800px] h-[600px] scale-[0.90]"
        id="formulario"
      >
        <iframe
          className="mt-[-80px] md:mt-[-80px]"
          src="https://forms.kommo.com/rwvxtrv"
          width={500}
          height={650}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>

      <div className="foto relative z-10 block sm:hidden w-full mt-[50px]">
        <img
          src={casal}
          alt="Imagem Invisalign"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-dental-secondary text-2xl" />
      </div>
    </section>
  );
}
