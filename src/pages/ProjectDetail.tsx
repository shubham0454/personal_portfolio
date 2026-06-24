import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  ExternalLink,
  GitBranch,
  Lightbulb,
  Quote,
  Sparkle,
  Sparkles,
  Target,
  User,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projectMap } from "@/data/projects";
import ThemeToggle from "@/components/portfolio/ThemeToggle";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectMap[id] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
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

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Sticky Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3">
          <Button variant="ghost" size="sm" className="hover-glow shrink-0" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>

          <div className="flex items-center gap-2.5 justify-end ml-auto">
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {project.links.filter(l => l.variant === "primary").slice(0, 2).map((link) => (
                  <Button
                    key={link.url}
                    size="sm"
                    className="bg-gradient-primary text-white border-0 hover:opacity-90 gap-1.5"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[500px] md:min-h-[580px]">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", project.gradient)} />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24">
          <div className="max-w-4xl space-y-4 sm:space-y-6 animate-fade-in">
            {/* Role + Year badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-background/70 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.25em]">
                {project.year}
              </Badge>
              <Badge variant="outline" className="bg-background/70 backdrop-blur px-3 py-1 text-xs">
                {project.role}
              </Badge>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-4">
              <div className={cn(
                "hidden sm:flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl text-white shadow-xl flex-shrink-0 bg-gradient-to-br mt-1",
                project.gradient,
              )}>
                <Icon className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mt-2 max-w-3xl">
                  {project.headline}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics cards */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
              {project.metrics.map((metric) => (
                <Card
                  key={metric.label}
                  className="group relative overflow-hidden border-2 border-border bg-background/80 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                >
                  <CardContent className="relative space-y-1 p-3 sm:p-5">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{metric.label}</span>
                    <p className="text-lg sm:text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
                    <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-primary/10 transition group-hover:scale-150" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <main className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">

            {/* ── Left Column ───────────────────────────────────── */}
            <div className="space-y-10 sm:space-y-14 min-w-0">

              {/* Summary */}
              <section className="space-y-4">
                <SectionLabel icon={<Sparkles className="h-3.5 w-3.5 text-primary" />} label="Project Summary" />
                <div className="rounded-2xl sm:rounded-3xl border-2 border-border bg-background/70 p-5 sm:p-8 shadow-[0_40px_120px_-60px_rgba(79,70,229,0.35)] backdrop-blur-xl">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </section>

              {/* Challenge / Solution / Impact */}
              <section className="space-y-4">
                <SectionLabel icon={<Target className="h-3.5 w-3.5 text-primary" />} label="Overview" />
                <div className="space-y-4 sm:space-y-5 rounded-2xl sm:rounded-3xl border-2 border-border bg-background/70 p-5 sm:p-8 shadow-[0_40px_120px_-60px_rgba(79,70,229,0.35)] backdrop-blur-xl">
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="inline-block h-5 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                      Problem Statement
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-3">{project.challenge}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl sm:rounded-2xl border-2 border-border bg-background/80 p-4 sm:p-6">
                      <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
                        <Zap className="h-4 w-4 text-accent" />
                        Solution Approach
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl border-2 border-border bg-background/80 p-4 sm:p-6">
                      <h3 className="mb-2 text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
                        <Sparkle className="h-4 w-4 text-accent" />
                        Impact
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Outcomes */}
              <section className="space-y-4">
                <SectionLabel icon={<CheckCircle2 className="h-3.5 w-3.5 text-primary" />} label="Outcomes & Results" />
                <div className="grid gap-3">
                  {project.outcomes && project.outcomes.length > 0 ? (
                    project.outcomes.map((outcome, i) => (
                      <Card
                        key={outcome}
                        className="border-2 border-border bg-background/80 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary"
                      >
                        <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
                          <div className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                            {i + 1}
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{outcome}</p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="border-2 border-border bg-background/80 p-5">
                      <p className="text-sm text-muted-foreground">No outcomes specified.</p>
                    </Card>
                  )}
                </div>
              </section>

              {/* Focus Areas */}
              <section className="space-y-4">
                <SectionLabel icon={<GitBranch className="h-3.5 w-3.5 text-primary" />} label="Focus Areas" />
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {project.focusAreas && project.focusAreas.length > 0 ? (
                    project.focusAreas.map((focus) => (
                      <div
                        key={focus}
                        className="flex items-start gap-3 rounded-xl border-2 border-border bg-background/70 px-4 py-3 text-xs sm:text-sm text-muted-foreground leading-relaxed transition hover:border-primary hover:bg-muted/30"
                      >
                        <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{focus}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No focus areas specified.</p>
                  )}
                </div>
              </section>

              {/* Key Insights */}
              <section className="space-y-4">
                <SectionLabel icon={<Lightbulb className="h-3.5 w-3.5 text-primary" />} label="Key Insights" />
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {project.insights && project.insights.length > 0 ? (
                    project.insights.map((insight, i) => (
                      <Card
                        key={insight}
                        className="border-2 border-border bg-background/80 transition hover:-translate-y-0.5 hover:border-primary"
                      >
                        <CardContent className="flex items-start gap-3 p-4 sm:p-5">
                          <span className={cn(
                            "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
                            "bg-gradient-to-br from-primary to-accent",
                          )}>
                            {i + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{insight}</p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="border-2 border-border bg-background/80 p-5 sm:col-span-2">
                      <p className="text-sm text-muted-foreground">No insights specified.</p>
                    </Card>
                  )}
                </div>
              </section>

              {/* Tech Stack */}
              <section className="space-y-4">
                <SectionLabel icon={<Code2 className="h-3.5 w-3.5 text-primary" />} label="Tech Stack" />
                <div className="rounded-2xl border-2 border-border bg-background/70 p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack && project.techStack.length > 0 ? (
                      project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-2 border-border bg-background text-foreground px-3 py-1.5 text-xs sm:text-sm hover:border-primary hover:bg-muted/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No technologies specified.</p>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* ── Sidebar ───────────────────────────────────────── */}
            <aside className="space-y-5 sm:space-y-6">
              <div className="lg:sticky lg:top-[72px] space-y-5 sm:space-y-6">
                {/* Engagement Snapshot */}
                <Card className="border-2 border-border bg-background shadow-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Engagement Snapshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <InfoRow label="Client" value={project.client} icon={<User className="h-3.5 w-3.5" />} />
                    <InfoRow label="Year" value={project.year} icon={<Calendar className="h-3.5 w-3.5" />} />
                    <InfoRow label="Role" value={project.role} icon={<GitBranch className="h-3.5 w-3.5" />} />
                    <InfoRow label="Focus Areas" value={`${project.focusAreas.length} areas`} icon={<Target className="h-3.5 w-3.5" />} />
                    <InfoRow label="Outcomes" value={`${project.outcomes.length} achieved`} icon={<CheckCircle2 className="h-3.5 w-3.5" />} />
                  </CardContent>

                  {/* All Links in sidebar */}
                  {project.links && project.links.length > 0 && (
                    <CardContent className="pt-0 space-y-2">
                      <div className="border-t border-border pt-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Project Links</p>
                        <div className="flex flex-col gap-2">
                          {project.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-2.5 text-xs sm:text-sm font-medium transition-all",
                                link.variant === "primary"
                                  ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                                  : "border-border bg-background text-foreground hover:border-primary hover:bg-muted/40",
                              )}
                            >
                              <span>{link.label}</span>
                              <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Project Image Preview */}
                <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg max-h-[280px]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
    {icon}
    {label}
  </div>
);

const InfoRow = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-2 py-1 border-b border-border/50 last:border-0">
    <span className="flex items-center gap-1.5 text-muted-foreground">
      {icon}
      {label}
    </span>
    <span className="font-semibold text-foreground text-right text-xs sm:text-sm max-w-[55%] leading-tight">{value}</span>
  </div>
);

export default ProjectDetail;
