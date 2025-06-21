import { Result } from "./Result";
import img1 from "../../src/assets/imgs/antes-1.webp";
import img2 from "../../src/assets/imgs/depois-_1_.webp";

export default function ResultsSection() {

  const results = [
    {
      imgBefore: img1,
      imgAfter: img2
    },
     
    
  ];



  return (
    <section className="py-20 bg-dental-light" id="resultados">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Resultados Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as transformações incríveis que já realizamos. Cada sorriso
            conta uma história de sucesso.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
            <Result imgAntes={img1} imgDps={img2}/>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%20seu%20site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-block bg-[#0f8516] text-white w-[330px] font-montserrat font-bold py-4 px-8 rounded-full text-[15px] transition-all duration-300 hover:scale-105 shadow-xl">
              Agende uma Avaliação Gratuita
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
