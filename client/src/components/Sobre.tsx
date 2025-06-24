import React from "react";
import invisa from "../../src/assets/imgs/Aparelhoinvisa.jpg";

const Sobre = () => {
  return (
    <>
      <div className="sobre bg-[#F4F4F4] gap-[8px] text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden">
        <div>
          <h2 className="text-[25px] font-montserrat font-bold text-dental-primary mt-6 mb-3 ml-3 md:ml-0">
            O que é Invisalign?
          </h2>
          <p className="text-xl md:text-xl mb-8 ml-3 md:ml-0 text-gray-600 max-w-2xl leading-relaxed ">
            O Invisalign é um tratamento ortodôntico com alinhadores transparentes,
            removíveis e discretos, feitos sob medida para cada paciente.
            São usado de 20 a 22 horas por dia e trocados a cada 7 a 10 dias, conforme orientação
            do ortodontista. O tratamento é planejado digitalmente, oferecendo mais conforto
            e menos visitas ao consultório.
          </p>

          <div className="btn">
            <a
              href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%C2%A0seu%C2%A0site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0f8516] text-white ml-6 md:ml-0 font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                Agende uma Avaliação Gratuita
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center p-[10px] h-auto md:h-[470px] w-auto  rounded-xl overflow-hidden ">
          <img
            src={invisa}
            alt="Aparelho Invisalign"
            className="img h-[300px] w-[500px]  rounded-xl overflow-hidden "
          />
        </div>
      </div>
    </>
  );
};

export default Sobre;
