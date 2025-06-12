import { Facebook, Instagram, MessageCircle, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dental-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6">Odonto Cape</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformando sorrisos com excelência, tecnologia e cuidado humanizado. Sua saúde bucal é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-dental-secondary hover:bg-blue-400 text-dental-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-dental-secondary hover:bg-blue-400 text-dental-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5581999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-secondary hover:bg-blue-400 text-dental-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-6">Unidade Derby</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <MapPin className="text-dental-secondary mr-2" size={16} />
                Rua Example, 123 - Derby
              </p>
              <p className="flex items-center">
                <Phone className="text-dental-secondary mr-2" size={16} />
                (81) 3333-3333
              </p>
              <p className="flex items-center">
                <Clock className="text-dental-secondary mr-2" size={16} />
                Seg-Sex: 8h às 18h
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-6">Unidade Piedade</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <MapPin className="text-dental-secondary mr-2" size={16} />
                Rua Example, 456 - Piedade
              </p>
              <p className="flex items-center">
                <Phone className="text-dental-secondary mr-2" size={16} />
                (81) 4444-4444
              </p>
              <p className="flex items-center">
                <Clock className="text-dental-secondary mr-2" size={16} />
                Seg-Sex: 8h às 18h
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Odonto Cape Derby e Piedade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
