import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="portafolio">
          <Portfolio />
        </section>
        <section id="habilidades">
          <Skills />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">DA</span>
                </div>
                <div>
                  <div className="font-bold">Data Analyst</div>
                  <div className="text-xs text-orange-400">Freelancer Profesional</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando datos en decisiones estratégicas para impulsar 
                el crecimiento de tu negocio.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Dashboards Interactivos</li>
                <li>Análisis de Datos</li>
                <li>Reportes Ejecutivos</li>
                <li>Consultoría BI</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>analista@tuemail.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Disponible 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Data Analyst Freelancer. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
