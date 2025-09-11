import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-dark-900">Data Analyst</div>
              <div className="text-xs text-orange-600">Freelancer</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-orange-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="orange" className="group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-dark-900" />
            ) : (
              <Menu className="w-6 h-6 text-dark-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100 bg-white">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-orange-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="orange" className="w-full mt-4">
                <Phone className="w-4 h-4" />
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;