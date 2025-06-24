import React from "react";

const TestimonialsVideo = () => {
  return (
    <>
      <div className="testimonials-container flex flex-wrap bg-white gap-[50px] p-[40px] relative ">
        <div>
          <h2 className="text-[25px] font-montserrat font-bold text-dental-primary mt-10 ">
            O que nossos pacientes dizem sobre nós
          </h2>

          <p className="text-xl md:text-xl mb-8 mt-5 ml-3 md:ml-0 text-gray-600 max-w-2xl leading-relaxed">
            Você sabia que é possível conquistar um sorriso alinhado
            sem precisar usar aparelhos metálicos? O Invisalign é a
            alternativa moderna, discreta e eficaz para quem busca corrigir
            os dentes sem abrir mão da estética e do conforto.
          </p>
          <p className="text-xl md:text-xl mb-8 mt-5 ml-3 md:ml-0 text-gray-600 max-w-2xl leading-relaxed">
            Neste vídeo, fica evidente a transformação de quem escolheu
            o Invisalign: mais do que alinhar os dentes, trata-se de recuperar
            a autoestima e mostrar ao mundo a sua melhor versão.
          </p>
        </div>

        <div className="testimonial video p-[10px] md:h-[370px] h-auto md:w-[450px] w-full rounded-xl overflow-hidden">
          <div className="aspect-w-9 aspect-h-16 w-full h-auto m-[10px]">
            <iframe
              className="w-full h-[350px] rounded-xl overflow-hidden"
              src="https://www.youtube.com/embed/b753Mwnmxs0"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Oi%2C%20vim%20pelo%20seu%20site%20Invisalign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-block bg-[#0f8516] text-white w-[330px] font-montserrat font-bold py-4 px-8 rounded-full text-[15px] transition-all duration-300 hover:scale-105 shadow-xl">
            Agende uma Avaliação Gratuita
          </button>
        </a>
      </div>
    </>
  );
};

export default TestimonialsVideo;
