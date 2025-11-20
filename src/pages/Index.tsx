import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import StatsCounter from '@/components/portfolio/StatsCounter';
import SkillsProgress from '@/components/portfolio/SkillsProgress';
import Testimonials from '@/components/portfolio/Testimonials';
import TechShowcase from '@/components/portfolio/TechShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <TechShowcase />
      <About />
      <StatsCounter />
      {/* <SkillsProgress /> */}
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
