const scrollToForm = () => {
  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
};

export default function LocationsSection() {
  return (
    <section className="py-20 bg-dental-light" id="localizacoes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-4xl font-montserrat font-bold text-dental-primary mb-4">
            Nossa Localização
          </h2>

        </div>

        <div className="gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
            <div className="p-8">
              <h3 className="text-3xl font-montserrat font-bold text-dental-primary mb-4">Piedade</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa unidade está localizada em Piedade, com fácil acesso e estacionamento disponível.
              </p>
              <div className="mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.279400929115!2d-34.9167938!3d-8.1745822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1afedba4ce5%3A0xd1768fbdcfa5addb!2sCl%C3%ADnica%20Odontol%C3%B3gica%20Dental%20Sant%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1750046514916!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  className="rounded-xl shadow-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
              <button
                onClick={scrollToForm}
                className="inline-block bg-dental-secondary hover:bg-blue-400 text-white font-montserrat font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Agendar nessa unidade
              </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
