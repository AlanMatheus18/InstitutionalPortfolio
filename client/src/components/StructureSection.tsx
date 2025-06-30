import rec from "../../src/assets/imgs/Recepcao.webp";
import consult from "../../src/assets/imgs/Itero.webp";
import relax from "../../src/assets/imgs/Relaxante.webp";
import tec from "../../src/assets/imgs/EstruturaGeral.webp";

const structureImages = [
  {
    src: rec,
    alt: "Recepção moderna da clínica odontológica",
    title: "Recepção Acolhedora",
    description:
      "Ambiente elegante e confortável para receber nossos pacientes com todo o carinho e atenção que merecem.",
  },
  {
    src: consult,
    alt: "Consultório odontológico moderno com equipamentos de última geração",
    title: "Consultórios Modernos",
    description:
      "Equipamentos de última geração e tecnologia avançada para garantir tratamentos precisos e confortáveis.",
  },
  {
    src: tec,
    alt: "Equipamentos odontológicos de alta tecnologia",
    title: "Tecnologia Avançada",
    description:
      "Investimos constantemente em tecnologia para oferecer os melhores resultados com máximo conforto e segurança.",
  },
  {
    src: relax,
    alt: "Sala de espera confortável da clínica odontológica",
    title: "Ambiente Relaxante",
    description:
      "Espaços pensados para proporcionar tranquilidade e bem-estar durante toda sua experiência em nossa clínica.",
  },
];

export default function StructureSection() {
  return (
    <section className="py-20 bg-white" id="estrutura">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-[40px] font-montserrat font-bold text-dental-primary mb-4">
            Nossa Estrutura
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
            Ambiente confortável e moderno para seu atendimento, com tecnologia
            de ponta e equipe especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {structureImages.map((item, index) => (
            <div key={index} className="animate-on-scroll">
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <h3 className="text-2xl font-montserrat font-bold text-dental-primary mt-6 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
            <button className="bg-[#0f8516] text-white ml-6 md:ml-0 font-montserrat font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Agende uma Avaliação Gratuita
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
