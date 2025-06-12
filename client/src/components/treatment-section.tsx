import { Zap, Smile, Eye, Gem, Star, Sparkles } from "lucide-react";

const treatments = [
  {
    icon: Zap,
    title: "Implantes",
    description: "Recupere a função e estética dos seus dentes com implantes de última geração e técnicas minimamente invasivas."
  },
  {
    icon: Smile,
    title: "Ortodontia", 
    description: "Alinhe seu sorriso com aparelhos ortodônticos tradicionais ou estéticos, adequados para todas as idades."
  },
  {
    icon: Eye,
    title: "Invisalign",
    description: "Ortodontia invisível e removível para corrigir seu sorriso de forma discreta e confortável."
  },
  {
    icon: Gem,
    title: "Lentes de Contato Dental",
    description: "Transformação completa do sorriso com lâminas ultrafinas de porcelana para um resultado natural e duradouro."
  },
  {
    icon: Star,
    title: "Clareamento",
    description: "Dentes mais brancos e brilhantes com técnicas seguras de clareamento dental profissional."
  },
  {
    icon: Sparkles,
    title: "Botox",
    description: "Harmonização facial com aplicação de botox para suavizar rugas e realçar a beleza do seu sorriso."
  }
];

export default function TreatmentSection() {
  return (
    <section className="py-20 bg-white" id="tratamentos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dental-primary mb-4">
            Nossos Tratamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos os mais modernos tratamentos odontológicos para garantir sua saúde bucal e o sorriso dos seus sonhos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll group">
                <div className="p-8 text-center">
                  <div className="bg-dental-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:bg-dental-secondary/20 transition-colors duration-300 flex items-center justify-center">
                    <IconComponent className="text-3xl text-dental-secondary" size={32} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-dental-primary mb-4">{treatment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
