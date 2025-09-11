import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  FileText,
  MessageCircle,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Profesional",
      description: "Respuesta en menos de 24 horas",
      value: "analista@tuemail.com",
      action: "Enviar Email",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Phone,
      title: "Llamada Directa",
      description: "Horario comercial disponible",
      value: "+1 (555) 123-4567",
      action: "Llamar Ahora",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Red profesional y referencias",
      value: "linkedin.com/in/analista-datos",
      action: "Ver Perfil",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Comunicación instantánea",
      value: "+1 (555) 123-4567",
      action: "Chatear",
      color: "from-green-500 to-green-600"
    }
  ];

  const services = [
    "Dashboard en Power BI",
    "Análisis de datos completo",
    "Reporte ejecutivo",
    "Consultoría en BI",
    "Análisis predictivo",
    "Visualización personalizada"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Transformar
            </span>{" "}
            tus Datos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contacta conmigo para discutir tu proyecto de análisis de datos. 
            Ofrezco una consulta inicial gratuita para evaluar tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-orange-100 bg-gradient-to-br from-white to-orange-50/30">
            <CardHeader>
              <CardTitle className="text-2xl text-dark-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                Solicitar Cotización
              </CardTitle>
              <CardDescription>
                Cuéntame sobre tu proyecto y te proporcionaré una propuesta detallada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Nombre de la empresa" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="servicio">Servicio de Interés</Label>
                <select 
                  id="servicio" 
                  className="w-full p-3 border border-input rounded-md bg-background"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensaje">Descripción del Proyecto</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Cuéntame más sobre tu proyecto, objetivos y datos disponibles..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong>Consulta inicial gratuita</strong> - Evaluación de necesidades sin costo
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong>Propuesta en 48 horas</strong> - Cotización detallada y cronograma
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong>Garantía de satisfacción</strong> - Revisiones incluidas hasta tu aprobación
                  </div>
                </div>
              </div>

              <Button variant="hero" className="w-full group" size="lg">
                Enviar Solicitud
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Métodos de Contacto</h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-dark-900">{method.title}</h4>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                            <p className="text-sm text-orange-600 font-medium">{method.value}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-dark-900">Horarios de Atención</h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergencias</span>
                    <span className="font-medium text-orange-600">24/7 disponible</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100 bg-gradient-to-br from-white to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-dark-900">Recursos Disponibles</h4>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Descargar Portafolio (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Guía de Servicios (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;