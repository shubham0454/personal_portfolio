import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const { featured, remaining } = useMemo(() => {
    const featureSlice = projects.slice(0, 4);
    const remainingSlice = projects.slice(4);
    return { featured: featureSlice, remaining: remainingSlice };
  }, []);

  const visibleProjects = showAll ? projects : featured;

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          A showcase of the work I've completed across different technologies.
          Built with care, clarity, and a focus on real results.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            const detailPath = `/project/${project.id}`;

            return (
              <div key={project.id} id={project.id} className="scroll-mt-20 sm:scroll-mt-28">
                <AnimatedSection animation="fade" delay={index * 80}>
                  <div className="grid items-start gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
                    <div className={cn("space-y-4 sm:space-y-6", isEven ? "" : "md:order-2")}>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <Badge variant="outline" className="w-max bg-muted/60 text-xs font-semibold uppercase tracking-wide">
                          {project.role}
                        </Badge>
                        <span className="text-xs sm:text-sm text-muted-foreground">{project.duration}</span>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={cn(
                            "flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl text-white shadow-lg flex-shrink-0",
                            "bg-gradient-to-br",
                            project.gradient,
                          )}
                        >
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">{project.title}</h3>
                          <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-1">{project.client}</p>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.summary}</p>

                      <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                        {project.focusAreas.map((focus) => (
                          <div
                            key={focus}
                            className="flex items-start gap-2 rounded-lg sm:rounded-xl bg-muted/60 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground shadow-inner shadow-[rgba(0,0,0,0.05)]"
                          >
                            <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl sm:rounded-2xl bg-muted/70 p-4 sm:p-6 shadow-[0_16px_50px_-30px_rgba(79,70,229,0.35)]">
                        <h4 className="mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground">
                          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                          Highlights & Outcomes
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                          {project.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                          <Link to={detailPath}>
                            Project Overview
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        {project.links.map((link) => (
                          <Button
                            key={link.url}
                            variant={link.variant === "ghost" ? "ghost" : link.variant === "secondary" ? "secondary" : "outline"}
                            size="lg"
                            className={cn(
                              "w-full sm:w-auto",
                              link.variant === "primary" && "bg-gradient-primary text-white border-0",
                              link.variant === "secondary" && "border-2 border-border bg-background text-foreground hover:border-primary hover:bg-muted/50 shadow-sm",
                            )}
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ArrowUpRight className="mr-2 h-5 w-5" />
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Card
                      className={cn(
                        "relative overflow-hidden border-2 border-border bg-card/80 backdrop-blur-lg transition-all duration-500 hover:border-primary hover:shadow-2xl flex flex-col",
                        isEven ? "" : "md:order-1",
                      )}
                    >
                      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-muted/20 rounded-t-lg overflow-hidden">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 bg-background border-t border-border/50">
                        <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-foreground">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.techStack.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="hover-glow text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-background text-foreground border-2 border-border hover:border-primary hover:bg-muted/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>

        {remaining.length > 0 && (
          <div className="mt-20 flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="lg"
              className="border border-input bg-background/70 backdrop-blur-md"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? (
                <>
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  View Fewer Projects
                </>
              ) : (
                <>
                  View {remaining.length} More Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
