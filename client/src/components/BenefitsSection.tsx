import tec from "../../src/assets/imgs/branco.webp";
import indolor from "../../src/assets/imgs/rapidoseguro.webp";
import natural from "../../src/assets/imgs/removemanchas.webp";
import equipe from "../../src/assets/imgs/problemas.webp";
import { title } from "process";

const structureImages = [
  {
    src: tec,
    alt: "Sorriso Mais Branco",
    title: "Sorriso Mais Branco",
    description: "",
  },
  {
    src: indolor,
    alt: "Rápido e Seguro",
    title: "Rápido e Seguro",
    description: "",
  },
  {
    src: natural,
    alt: "Remove Manchas",
    title: "Remove Manchas",
    description: "",
  },
  {
    src: equipe,
    alt: "Ajuda a Detectar problemas nos dentes",
    title: "Ajuda a Detectar Problemas",
    description: "",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white" id="estrutura">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-3xl font-montserrat font-bold text-dental-primary mb-4">
            Por que Clarear os Dentes?
          </h2>
        </div>

        <div className="flex flex-wrap md:flex-nowrap  gap-12 max-w-6xl mx-auto justify-center">
          {structureImages.map((item, index) => (
            <div key={index} className="animate-on-scroll">
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-2xl shadow-xl w-50 md:w-80  h-60 object-cover"
              />
              <h3 className="text-center text-[15px] font-montserrat font-bold text-dental-primary mt-6 mb-3">
                {item.title}
              </h3>
              <p className="text-center text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-block bg-[#0f8516] text-white font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Agende uma Avaliação Gratuita
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
