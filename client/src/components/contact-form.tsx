import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertAppointment } from "@shared/schema";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      unit: "",
      treatment: "",
    },
  });

  const submitAppointment = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Sucesso!",
        description: data.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message || "Erro ao enviar pré-agendamento. Tente novamente.",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertAppointment) => {
    setIsSubmitting(true);
    submitAppointment.mutate(data);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 11) {
      return cleaned
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  return (
    <section className="py-20 bg-dental-primary text-white" id="formulario">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 animate-on-scroll">
          <h2 className="text-center text-4xl md:text-3xl font-montserrat font-bold mb-4">
              Pré-agende sua consulta
            </h2>
            <p className="text-center text-lg text-gray-100 pb-6">
              Entraremos em contato para confirmar sua consulta e esclarecer todas as suas dúvidas.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-montserrat font-semibold text-white">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Seu nome completo"
                            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-secondary transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage className="text-dental-secondary" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-montserrat font-semibold text-white">
                          Telefone/WhatsApp
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="(81) 99999-9999"
                            onChange={(e) => {
                              const formatted = formatPhone(e.target.value);
                              field.onChange(formatted);
                            }}
                            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-secondary transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage className="text-dental-secondary" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="treatment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-montserrat font-semibold text-white">
                        Tratamento de Interesse (Opcional)
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-dental-secondary transition-all duration-300">
                            <SelectValue placeholder="Selecione um tratamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="implantes">Implantes</SelectItem>
                          <SelectItem value="ortodontia">Ortodontia</SelectItem>
                          <SelectItem value="invisalign">Invisalign</SelectItem>
                          <SelectItem value="lentes">Lentes de Contato Dental</SelectItem>
                          <SelectItem value="clareamento">Clareamento</SelectItem>
                          <SelectItem value="botox">Botox</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-dental-secondary" />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dental-secondary hover:bg-blue-400 text-dental-primary font-montserrat font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Pré-Agendamento"}
                </Button>
              </form>
            </Form>
          </div>          
        </div>       
      </div>
    </section>
  );
}
