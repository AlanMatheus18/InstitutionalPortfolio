import React from 'react'
import implante from '../../src/assets/imgs/IMPLANTE.webp'

const Invisa = () => {
  return (
    <>
      <div className="sobre bg-[#F4F4F4] gap-[50px] text-white min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center relative overflow-hidden">
       <div>
        <h2 className="text-[25px] font-montserrat font-bold text-dental-primary mt-6 mb-3 ml-3 md:ml-0">O que são Implantes Dentários?</h2>
        <p className="text-xl md:text-xl mb-8 ml-3 md:ml-0 text-gray-600 max-w-2xl leading-relaxed ">
          Os <strong>implantes dentários</strong> são pequenas estruturas de titânio que substituem a raiz do dente perdido. 
      Eles são inseridos no osso maxilar ou mandibular e servem como base para próteses fixas, como coroas ou pontes. 
      Essa é a solução mais segura, moderna e duradoura para quem deseja recuperar dentes perdidos e voltar a sorrir com confiança.
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

      <div className=" p-[10px] h-[470px] w-[450px]  rounded-xl overflow-hidden ">
        <img src={implante} alt="" className="img h-[400px] w-full  rounded-xl overflow-hidden "/>
      </div>
      </div>
    </>
  )
}

export default Invisa
