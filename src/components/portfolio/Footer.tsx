import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text">Shubham Kshirsagar</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Full-stack developer focused on performant web experiences, scalable APIs, and measurable business impact
              for modern startups and enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Let's Connect</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/shubham0454"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubhamkshirsagar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover-glow "
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ShubhamKshirsagar4045@gmail.com"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover-glow "
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm flex items-center justify-center sm:justify-start">
            © {currentYear} Shubham Kshirsagar.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;