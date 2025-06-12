const structureImages = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Recepção moderna da clínica odontológica",
    title: "Recepção Acolhedora",
    description: "Ambiente elegante e confortável para receber nossos pacientes com todo o carinho e atenção que merecem."
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Consultório odontológico moderno com equipamentos de última geração",
    title: "Consultórios Modernos", 
    description: "Equipamentos de última geração e tecnologia avançada para garantir tratamentos precisos e confortáveis."
  },
  {
    src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Equipamentos odontológicos de alta tecnologia",
    title: "Tecnologia Avançada",
    description: "Investimos constantemente em tecnologia para oferecer os melhores resultados com máximo conforto e segurança."
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Sala de espera confortável da clínica odontológica",
    title: "Ambiente Relaxante",
    description: "Espaços pensados para proporcionar tranquilidade e bem-estar durante toda sua experiência em nossa clínica."
  }
];

export default function StructureSection() {
  return (
    <section className="py-20 bg-white" id="estrutura">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Nossa Estrutura
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ambiente confortável e moderno para seu atendimento, com tecnologia de ponta e equipe especializada.
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
      </div>
    </section>
  );
}
