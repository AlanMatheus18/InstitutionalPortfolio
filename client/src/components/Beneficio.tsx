import tec from "../../src/assets/imgs/3D.jpg";
import indolor from "../../src/assets/imgs/INDOLOR.jpg";
import natural from "../../src/assets/imgs/NATURAL.jpg";
import equipe from "../../src/assets/imgs/EQUIPE.jpg";

const structureImages = [
  {
    src: tec,
    alt: "Tecnologia de Ponta",
    title: "Tecnologia de Ponta",
    description: "",
  },
  {
    src: indolor,
    alt: "Procedimento Indolor e Seguro",
    title: "Procedimento Indolor e Seguro",
    description: "",
  },
  {
    src: natural,
    alt: "Estética Natural",
    title: "Estética Natural",
    description: "",
  },
  {
    src: equipe,
    alt: "Equipe Especializada",
    title: "Equipe Especializada",
    description: "",
  },
];

export default function StructureSection() {
  return (
    <section className="py-20 bg-white" id="estrutura">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-3xl font-montserrat font-bold text-dental-primary mb-4">
            Por que escolher nossas facetas?
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
            href="https://dentalsante.aiatende.dev.br/conversions/whatsapp/wbhk?text=Ol%C3%A1,%20vim%20pelo%C2%A0seu%C2%A0site"
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
