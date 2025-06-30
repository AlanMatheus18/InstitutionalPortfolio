import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "558130940025";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta.";
  
  const handleWhatsAppClick = () => {
    const url = `https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contatar via WhatsApp"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
