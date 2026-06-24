import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const header = document.querySelector('nav');
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
      const scrollPosition = window.scrollY + headerHeight + 40;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    setMobileMenuOpen(false);
    const header = document.querySelector('nav');
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
    const margin = 24;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - margin;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator fixed top-0 left-0 h-1 bg-gradient-primary z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`
        }}
      />
      
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold gradient-text animate-float">
              Portfolio
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link text-sm lg:text-base text-foreground hover:text-primary transition-colors capitalize ${
                    activeSection === section ? 'active' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="bg-primary/10 hover:bg-primary/10"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[300px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    {['home', 'about', 'projects', 'contact'].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`text-left text-lg font-medium capitalize transition-colors ${
                          activeSection === section 
                            ? 'text-primary border-l-4 border-primary pl-4' 
                            : 'text-foreground hover:text-primary pl-4'
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;