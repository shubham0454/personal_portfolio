import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

import HeroHighlights from '@/components/portfolio/HeroHighlights';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Web Developer";

  useEffect(() => {
    // Reset on mount
    setDisplayText('');
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/25 dark:bg-primary/35 rounded-full blur-3xl animate-float hero-orbit"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/25 dark:bg-secondary/35 rounded-full blur-3xl animate-float hero-orbit-delayed"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up text-foreground leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">
              Shubham Kshirsagar
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 min-h-[2rem] sm:min-h-[2.5rem] font-mono flex items-center justify-center px-4">
            <span className="inline-block whitespace-nowrap">{displayText}</span>
            <span className="inline-block ml-1 animate-pulse text-primary">|</span>
          </div>
          
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 px-4 animate-slide-up leading-relaxed"
            style={{ animationDelay: '0.3s' }}
          >
           Motivated full-stack developer who turns concepts into fast, responsive web experiences and resilient backend systems. I deliver end-to-end product features with a focus on reliability and usability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 mt-8 sm:mt-12 px-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover-glow text-white border-0 px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="hover-glow px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 animate-slide-up px-4" style={{ animationDelay: '0.9s' }}>
            <a
              href="https://github.com/shubham0454"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-k-41b993236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ShubhamKshirsagar4045@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2">
              <Download className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;