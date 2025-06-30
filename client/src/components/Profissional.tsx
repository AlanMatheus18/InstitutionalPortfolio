import React from "react";
import Doutora from "../../src/assets/imgs/DoutoraJuliana.jpg";

const Profissional = () => {
  return (
    <>
      <div className="sobre bg-[#F4F4F4] gap-[8px] text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden">
        <div>
          <h2 className="text-[25px] font-montserrat font-bold text-dental-primary mt-6 mb-3 ml-3 md:ml-0">
            Dr. Juliana Leite
          </h2>
          <p className="text-xl md:text-xl mb-8 ml-3 md:ml-0 text-gray-600 max-w-2xl leading-relaxed ">
            Especialista em Lentes De Contato
          </p>

          <div className="btn">
            <a
              href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
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
            src={Doutora}
            alt=""
            className="img h-[400px] w-[400px]  rounded-xl overflow-hidden "
          />
        </div>
      </div>
    </>
  );
};

export default Profissional;
