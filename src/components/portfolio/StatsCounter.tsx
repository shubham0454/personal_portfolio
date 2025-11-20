import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FolderKanban, Cpu, GitCommit, CloudUpload } from 'lucide-react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    technologies: 0,
    commits: 0,
    deployments: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    projects: 10,
    technologies: 15,
    commits: 500,
    deployments: 10
  };

  const stats = [
    {
      icon: FolderKanban,
      label: 'Projects Built',
      value: counts.projects,
      suffix: '+',
      color: 'text-primary'
    },
    {
      icon: Cpu,
      label: 'Core Technologies',
      value: counts.technologies,
      suffix: '+',
      color: 'text-secondary'
    },
    {
      icon: GitCommit,
      label: 'Git/GitHub Commits',
      value: counts.commits,
      suffix: '+',
      color: 'text-accent'
    },
    {
      icon: CloudUpload,
      label: 'Apps Deployed',
      value: counts.deployments,
      suffix: '+',
      color: 'text-primary'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervals[Object.keys(finalCounts).indexOf(key)]);
        }
        
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Some <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl px-4">
            A glimpse into my journey as a developer
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center border border-border bg-card hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-4 sm:p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-muted mb-3 sm:mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground ${isVisible ? 'animate-count-up' : ''}`}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;