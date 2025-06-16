import discreta from '../../src/assets/imgs/Discreta.jpg'
import conforto from '../../src/assets/imgs/Conforto.jpg'
import escovar from '../../src/assets/imgs/Escovacao.jpg'
import resulrapido from '../../src/assets/imgs/Rapido.jpg'



const structureImages = [
  {
    src: discreta,
    alt: "Estética Discreta",
    title: "Estética Discreta",
    description: ""
  },
  {
    src: conforto,
    alt: "Conforto incomparável",
    title: "Conforto Incomparável", 
    description: ""
  },
  {
    src: escovar,
    alt: "Removível para comer e escovar",
    title: "Removível Para Comer e Escovar",
    description: ""
  },
  {
    src: resulrapido,
    alt: "Resultados rápidos",
    title: "Resultados Rápidos",
    description: ""
  }
];

export default function StructureSection() {
  return (
    <section className="py-20 bg-white" id="estrutura">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-3xl font-montserrat font-bold text-dental-primary mb-4">
            Por que Escolher Invisalign?
          </h2>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap  gap-12 max-w-6xl mx-auto">
          {structureImages.map((item, index) => (
            <div key={index} className="animate-on-scroll">
              <img 
                src={item.src} 
                alt={item.alt}
                className="rounded-2xl shadow-xl w-80 h-60 object-cover"
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
      </div>
    </section>
  );
}
