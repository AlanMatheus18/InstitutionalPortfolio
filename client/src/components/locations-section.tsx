const scrollToForm = () => {
  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
};

export default function LocationsSection() {
  return (
    <section className="py-20 bg-dental-light" id="localizacoes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Nossas Localizações
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Duas unidades estrategicamente localizadas para melhor atendê-lo com a mesma qualidade e excelência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
            <div className="p-8">
              <h3 className="text-3xl font-montserrat font-bold text-dental-primary mb-4">Unidade Derby</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa unidade principal localizada no coração de Derby, com fácil acesso e estacionamento disponível.
              </p>
              <div className="mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.123456789!2d-34.987654321!3d-8.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMjQuNCJTIDM0wrA1OSczMS40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="250" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
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
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
            <div className="p-8">
              <h3 className="text-3xl font-montserrat font-bold text-dental-primary mb-4">Unidade Piedade</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa segunda unidade em Piedade, oferecendo a mesma excelência em atendimento e tratamentos especializados.
              </p>
              <div className="mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.987654321!2d-34.876543210!3d-8.234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTQnMDQuNCJTIDM0wrA1MyczNS40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="250" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
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
