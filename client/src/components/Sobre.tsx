import React from "react";
import invisa from "../../src/assets/imgs/Aparelhoinvisa.jpg";

const Sobre = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 px-6 py-12">
     
      <div className="flex flex-col items-start w-full md:w-1/2">
        <h2 className="text-[25px] font-montserrat font-bold text-dental-primary mt-2 mb-3">
          O que é Invisalign?
        </h2>
        <img
          src={invisa}
          alt="Aparelho Invisalign"
          className="block sm:hidden mb-4 w-full h-[300px] max-w-[400px] rounded-xl"
        />
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Os alinhadores Invisalign são feitos sob medida para cada paciente, garantindo conforto e
          encaixe perfeito. Diferente dos aparelhos fixos, eles são transparentes, removíveis e discretos.
          Devem ser usados de 20 a 22 horas por dia e trocados, em média, a cada 7 a 10 dias, conforme
          orientação do ortodontista. O tratamento é planejado digitalmente e promove movimentações dentárias
          precisas, com mais conforto e menos visitas ao consultório.
        </p>
        <a
          href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%C2%A0seu%C2%A0site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#0f8516] text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
            Agende uma Avaliação Gratuita
          </button>
        </a>
      </div>

      
      <div className="hidden sm:flex justify-center items-center md:w-1/2">
        <img
          src={invisa}
          alt="Aparelho Invisalign"
          className="h-[400px] w-[500px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Sobre;
