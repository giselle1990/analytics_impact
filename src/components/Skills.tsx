import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  BarChart3, 
  Code, 
  Palette,
  Brain,
  Target
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Herramientas de Análisis",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "Power BI", level: 95, description: "Dashboards avanzados y modelado de datos" },
        { name: "Tableau", level: 88, description: "Visualizaciones interactivas" },
        { name: "Excel Avanzado", level: 98, description: "Análisis complejo con VBA y Power Query" },
        { name: "Google Analytics", level: 85, description: "Análisis web y métricas digitales" }
      ]
    },
    {
      title: "Programación y Datos",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Python", level: 90, description: "Pandas, NumPy, Matplotlib, Seaborn" },
        { name: "R", level: 82, description: "Análisis estadístico y visualización" },
        { name: "SQL", level: 92, description: "Consultas complejas y optimización" },
        { name: "Machine Learning", level: 78, description: "Modelos predictivos y clasificación" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "MySQL", level: 88, description: "Administración y consultas avanzadas" },
        { name: "PostgreSQL", level: 85, description: "Análisis de datos complejos" },
        { name: "MongoDB", level: 75, description: "Datos no estructurados" },
        { name: "ETL Processes", level: 80, description: "Extracción, transformación y carga" }
      ]
    },
    {
      title: "Visualización y Diseño",
      icon: Palette,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Data Storytelling", level: 92, description: "Narrativas efectivas con datos" },
        { name: "UI/UX para Dashboards", level: 88, description: "Interfaces intuitivas" },
        { name: "Infografías", level: 85, description: "Comunicación visual impactante" },
        { name: "Presentaciones", level: 95, description: "Reportes ejecutivos profesionales" }
      ]
    },
    {
      title: "Análisis Estadístico",
      icon: Brain,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Estadística Descriptiva", level: 95, description: "Medidas de tendencia y dispersión" },
        { name: "Análisis Predictivo", level: 88, description: "Forecasting y series temporales" },
        { name: "A/B Testing", level: 82, description: "Experimentación y validación" },
        { name: "Análisis de Correlación", level: 90, description: "Relaciones entre variables" }
      ]
    },
    {
      title: "Business Intelligence",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      skills: [
        { name: "KPI Development", level: 98, description: "Definición de métricas clave" },
        { name: "Business Analytics", level: 92, description: "Insights estratégicos" },
        { name: "Data Governance", level: 85, description: "Calidad y consistencia de datos" },
        { name: "Consultoría BI", level: 88, description: "Estrategias de implementación" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-dark-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Mis{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dominio técnico y experiencia práctica en las principales herramientas 
            y metodologías del análisis de datos moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-100 bg-gradient-to-br from-white to-orange-50/20"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-dark-900">{skill.name}</span>
                        <span className="text-sm text-orange-600 font-semibold">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200"
                      />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-dark-900 mb-8">Certificaciones y Formación</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-orange-100 rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-dark-900 mb-2">Microsoft Power BI</h4>
              <p className="text-sm text-muted-foreground">Certificación Profesional</p>
            </div>
            <div className="bg-white border border-orange-100 rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-dark-900 mb-2">Data Science</h4>
              <p className="text-sm text-muted-foreground">Especialización Universitaria</p>
            </div>
            <div className="bg-white border border-orange-100 rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-dark-900 mb-2">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">Curso Avanzado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;