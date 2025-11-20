import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Lightbulb,
  Quote,
  Sparkle,
  Target,
  Timer,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { projectMap } from "@/data/projects";

const GALLERY_INTERVAL = 6000;

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectMap[id] : undefined;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const gallery = useMemo(() => project?.gallery ?? [], [project?.gallery]);

  useEffect(() => {
    if (!gallery.length || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallery.length);
    }, GALLERY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [gallery.length, isPaused]);

  useEffect(() => {
    setActiveSlide(0);
  }, [gallery.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <Quote className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground">The project you are looking for is unavailable or has been archived.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <Button variant="ghost" className="hover-glow" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {project.links.map((link) => (
                  <Tooltip key={link.url}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={link.variant === "ghost" ? "ghost" : link.variant === "secondary" ? "secondary" : "outline"}
                        className={cn(
                          "gap-2",
                          link.variant === "primary" && "bg-gradient-primary text-white border-0 hover:opacity-90",
                          link.variant === "secondary" && "border-2 border-border bg-background text-foreground hover:border-primary hover:bg-muted/50 shadow-sm",
                        )}
                        asChild
                        size="sm"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight className="h-4 w-4" />
                          {link.label}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Opens in a new tab</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>
        </header>

        <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <div className="absolute inset-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover opacity-40"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-24">
            <div className="max-w-4xl space-y-4 md:space-y-6 animate-fade-in">
              <Badge variant="secondary" className="bg-background/70 backdrop-blur px-3 md:px-4 py-1 text-xs uppercase tracking-[0.3em]">
                {project.year} · {project.role}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">{project.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{project.headline}</p>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {project.metrics.map((metric) => (
                  <Card
                    key={metric.label}
                    className="group relative overflow-hidden border-2 border-border bg-background/80 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                  >
                    <CardContent className="relative space-y-2 p-4 md:p-6">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">{metric.label}</span>
                      <p className="text-xl md:text-2xl font-semibold text-foreground">{metric.value}</p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 transition group-hover:scale-125" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <main className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div className="space-y-12 md:space-y-16">
                <section className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    <Target className="h-3.5 w-3.5 text-primary" />
                    Overview
                  </div>
                  <div className="space-y-6 md:space-y-8 rounded-3xl border-2 border-border bg-background/70 p-6 md:p-8 shadow-[0_40px_120px_-60px_rgba(79,70,229,0.45)] backdrop-blur-xl">
                    <div className="space-y-3">
                      <h2 className="text-xl md:text-2xl font-semibold text-foreground">Problem Statement</h2>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border-2 border-border bg-background/80 p-4 md:p-6">
                        <h3 className="mb-2 text-base md:text-lg font-semibold text-foreground">Solution Approach</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="rounded-2xl border-2 border-border bg-background/80 p-4 md:p-6">
                        <h3 className="mb-2 text-base md:text-lg font-semibold text-foreground">Impact</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    <Sparkle className="h-3.5 w-3.5 text-primary" />
                    Outcomes
                  </div>
                  <div className="grid gap-4">
                    {project.outcomes && project.outcomes.length > 0 ? (
                      project.outcomes.map((outcome) => (
                        <Card key={outcome} className="border-2 border-border bg-background/80 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary">
                          <CardContent className="flex items-start gap-3 md:gap-4 p-4 md:p-6">
                            <CheckCircle2 className="mt-1 h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{outcome}</p>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <Card className="border-2 border-border bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <p className="text-sm text-muted-foreground">No outcomes specified.</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    <Lightbulb className="h-3.5 w-3.5 text-primary" />
                    Key Insights
                  </div>
                  <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                    {project.insights && project.insights.length > 0 ? (
                      project.insights.map((insight) => (
                        <Card key={insight} className="border-2 border-border bg-background/80 p-4 md:p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary">
                          <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
                        </Card>
                      ))
                    ) : (
                      <Card className="border-2 border-border bg-background/80 p-6 shadow-sm md:col-span-2">
                        <p className="text-sm text-muted-foreground">No insights specified.</p>
                      </Card>
                    )}
                  </div>
                </section>

                {/* {gallery.length > 0 && (
                  <section className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      <Timer className="h-3.5 w-3.5 text-primary" />
                      Project Gallery
                    </div>

                    <div
                      className="relative overflow-hidden rounded-3xl border-2 border-border bg-background/80"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <div className="relative aspect-video w-full">
                        <AnimatePresence initial={false} mode="wait">
                          <motion.div
                            key={gallery[activeSlide]?.src ?? activeSlide}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <img
                              src={gallery[activeSlide]?.src}
                              alt={gallery[activeSlide]?.alt}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                            {gallery[activeSlide]?.caption && (
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                                <p className="text-sm text-muted-foreground">{gallery[activeSlide]?.caption}</p>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {gallery.length > 1 && (
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                          <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background/80 text-muted-foreground transition hover:border-primary hover:text-primary"
                            onClick={() => setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length)}
                            aria-label="Previous slide"
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </button>
                          <div className="flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                            {gallery.map((item, index) => (
                              <button
                                key={item.src}
                                type="button"
                                onClick={() => setActiveSlide(index)}
                                className={cn(
                                  "h-1.5 w-6 rounded-full transition-all",
                                  index === activeSlide ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60",
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                              />
                            ))}
                          </div>
                          <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background/80 text-muted-foreground transition hover:border-primary hover:text-primary"
                            onClick={() => setActiveSlide((prev) => (prev + 1) % gallery.length)}
                            aria-label="Next slide"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </section>
                )} */}
              </div>

              <aside className="space-y-6 md:space-y-10">
                <Card className="border-2 border-border bg-background/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg font-semibold flex items-center gap-2">
                      <Building2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      Engagement Snapshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between py-1">
                      <span className="font-medium">Client</span>
                      <span className="font-semibold text-foreground">{project.client}</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="font-medium">Timeline</span>
                      <span className="font-semibold text-foreground">{project.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="font-medium">Focus Areas</span>
                      <span className="font-semibold text-foreground">{project.focusAreas.length}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-background/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg font-semibold flex items-center gap-2">
                      <Sparkle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      Focus Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.focusAreas && project.focusAreas.length > 0 ? (
                      project.focusAreas.map((focus) => (
                        <div key={focus} className="rounded-xl border-2 border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground leading-relaxed">
                          {focus}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No focus areas specified.</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-background/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg font-semibold flex items-center gap-2">
                      <Quote className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      Tooling & Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.techStack && project.techStack.length > 0 ? (
                      project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-2 border-border bg-background text-foreground px-3 py-1 text-xs hover:border-primary hover:bg-muted/50">
                          {tech}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No technologies specified.</p>
                    )}
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
};

export default ProjectDetail;
