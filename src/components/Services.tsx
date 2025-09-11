import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Database, 
  FileText, 
  PieChart, 
  TrendingUp, 
  Monitor,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Dashboards Interactivos",
      description: "Diseño y desarrollo de tableros de control personalizados con visualizaciones dinámicas para monitorear KPIs en tiempo real.",
      features: ["Power BI", "Tableau", "Excel Avanzado", "Visualización en tiempo real"]
    },
    {
      icon: Database,
      title: "Análisis de Datos",
      description: "Análisis profundo de grandes volúmenes de datos para identificar patrones, tendencias y oportunidades de negocio.",
      features: ["Limpieza de datos", "Análisis estadístico", "Modelado predictivo", "Segmentación"]
    },
    {
      icon: FileText,
      title: "Reportes Ejecutivos",
      description: "Informes profesionales con insights clave, recomendaciones estratégicas y presentaciones impactantes para la toma de decisiones.",
      features: ["Informes automatizados", "Presentaciones ejecutivas", "KPIs personalizados", "Análisis de tendencias"]
    },
    {
      icon: PieChart,
      title: "Visualización Avanzada",
      description: "Transformo datos complejos en gráficos claros y comprensibles que comunican efectivamente los resultados del análisis.",
      features: ["Gráficos interactivos", "Mapas de calor", "Storytelling con datos", "Diseño visual"]
    },
    {
      icon: TrendingUp,
      title: "Análisis Predictivo",
      description: "Modelos estadísticos y machine learning para predecir comportamientos futuros y optimizar la planificación estratégica.",
      features: ["Forecasting", "Análisis de correlación", "Modelos de regresión", "Análisis de series temporales"]
    },
    {
      icon: Monitor,
      title: "Consultoría en BI",
      description: "Asesoramiento completo en Business Intelligence para implementar soluciones de datos que escalen con tu negocio.",
      features: ["Estrategia de datos", "Arquitectura BI", "Capacitación", "Optimización de procesos"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Mis Servicios de{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Análisis de Datos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrezco soluciones completas de análisis de datos, desde la recopilación y limpieza 
            hasta la visualización y presentación de insights accionables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 bg-gradient-to-br from-white to-orange-50/30"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-dark-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Ver Todos los Servicios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;