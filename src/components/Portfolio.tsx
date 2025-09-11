import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  FileText, 
  Play, 
  Download,
  BarChart3,
  PieChart,
  TrendingUp
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Análisis de Servicios de Baterías",
      description: "Dashboard completo para monitoreo de servicios de baterías con análisis de temperatura, demanda y KPIs operacionales.",
      type: "Dashboard",
      icon: BarChart3,
      tags: ["Power BI", "Análisis Predictivo", "KPIs"],
      mediaType: "image",
      results: ["Reducción 20% en fallas", "Optimización de rutas", "ROI del 250%"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Proyecto Comercial - Ventas",
      description: "Análisis completo de canales de venta con evaluación de rendimiento y recomendaciones estratégicas.",
      type: "Reporte Ejecutivo",
      icon: TrendingUp,
      tags: ["Excel", "Análisis de Ventas", "Forecasting"],
      mediaType: "pdf",
      results: ["$122,000 en ventas analizadas", "12.5% crecimiento", "Identificación canal emergente"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Dashboard Electoral - Afiliados",
      description: "Sistema de análisis político con visualización de afiliados por comuna y tendencias de crecimiento.",
      type: "Dashboard Interactivo",
      icon: PieChart,
      tags: ["Tableau", "Análisis Geográfico", "Segmentación"],
      mediaType: "video",
      results: ["2,516 afiliados analizados", "Mayor penetración Comuna 1 y 2", "4.2% crecimiento mensual"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Industria de Videojuegos - Ventas",
      description: "Análisis histórico de ventas por categoría, región y plataforma con insights para decisiones comerciales.",
      type: "Business Intelligence",
      icon: BarChart3,
      tags: ["Python", "Data Mining", "Visualización"],
      mediaType: "image",
      results: ["8,815.58M en ventas totales", "Identificación tendencias regionales", "Análisis por género y plataforma"],
      color: "from-green-500 to-green-600"
    }
  ];

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getMediaButton = (type: string) => {
    switch (type) {
      case 'video':
        return "Ver Video";
      case 'pdf':
        return "Descargar PDF";
      default:
        return "Ver Proyecto";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Mi{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Portafolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ejemplos reales de proyectos de análisis de datos que han generado valor 
            e impacto medible para mis clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-orange-100 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-dark-900 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-900 mb-3">Resultados Clave:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="orange" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    {getMediaButton(project.mediaType)}
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">
                      {getMediaIcon(project.mediaType)}
                    </span>
                  </Button>
                  {project.mediaType === 'pdf' && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Ver Portafolio Completo
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;