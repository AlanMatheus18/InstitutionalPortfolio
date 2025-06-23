import {
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import logo from "../../src/assets/imgs/DentalSant.webp";

export default function Footer() {
  return (
    <footer className="bg-[#000] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:flex md:justify-between gap-12 mb-12">
          {/* Bloco 1: Logo + texto + redes */}
          <div>
            <img
              className="text-2xl font-montserrat font-bold mb-6 text-left"
              src={logo}
              alt=""
            />
            <p className="text-gray-300 leading-relaxed mb-6 text-left">
              Transformando sorrisos com excelência, tecnologia e cuidado
              humanizado. <br />
              Sua saúde bucal é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dentalsanteodontologia"
                className="bg-dental-secondary hover:bg-blue-400 text-dental-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/dental_sante/"
                className="bg-dental-secondary hover:bg-blue-400 text-dental-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/558130940025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-secondary hover:bg-blue-400 text-dental-primary rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Bloco 2: Endereço */}
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-6 flex items-end">
              Clínica Piedade
            </h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-end">
                <MapPin className="text-dental-secondary mr-2" size={16} />
                Av. Bernardo Vieira de Melo, 2418 - Piedade
              </p>
              <p className="flex items-center">
                <Phone className="text-dental-secondary mr-2" size={16} />
                (81) 3094-0025
              </p>
              <p className="flex items-center">
                <Clock className="text-dental-secondary mr-2" size={16} />
                Seg-Sex: 8h às 18h <br />
                Sáb: 8h às 12h
              </p>
            </div>
          </div>

          <div className="block sm:hidden scale-[0.90]">
            <iframe
              className="w-full rounded-lg"
              src="https://forms.kommo.com/rwvxtrv"
              width={500}
              height={650}
              frameBorder="0"
              scrolling="no"
              title="Formulário de Avaliação"
            ></iframe>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Clínica Odontológica Dental Santé. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
