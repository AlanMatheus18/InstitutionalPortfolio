import { Result } from "../components/Result";

export default function ResultsSection() {
  return (
    <section className="py-20 bg-dental-light" id="resultados">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Resultados Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as transformações incríveis que já realizamos. Cada sorriso conta uma história de sucesso.
          </p>
        </div>

       <div className="flex justify-center">
<div className="w-full sm:w-[60%] h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
    <Result />
  </div>
</div>

        <div className="text-center mt-12">
          <button
            className="inline-block bg-[#25D366] text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Agende uma Avaliação Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
