import { Button } from "@/components/ui/button";
import heroAnalyst from "@/assets/hero-analyst.jpg";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAnalyst}
          alt="Data Analyst Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-orange-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">Analista de Datos Freelancer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformo{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Datos
            </span>{" "}
            en{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Decisiones
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especialista en análisis de datos con experiencia en dashboards interactivos, 
            visualización avanzada y reportes ejecutivos que impulsan el crecimiento de tu negocio.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-sm text-gray-400">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-sm text-gray-400">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">24h</div>
              <div className="text-sm text-gray-400">Tiempo de Respuesta</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Ver Mi Portafolio
              <BarChart3 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="dark" size="lg" className="group">
              Contactar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;