import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const SLIDE_INTERVAL = 5000;

const heroSlides = [
  {
    title: "Full-Stack Ownership",
    metric: "25+ end-to-end launches",
    description:
      "Translate business goals into thoughtful architecture, ship production-ready code, and iterate with measurable impact.",
    gradient: "from-primary/90 via-secondary/70 to-accent/80",
    badges: ["Angular & React", "Express.js APIs", "PostgreSQL & MongoDB"],
  },
  {
    title: "AI-Augmented Experiences",
    metric: "Generative copilots in prod",
    description:
      "Blend Gemini, Claude, and custom embeddings with human-in-the-loop guardrails to unlock productivity for hybrid teams.",
    gradient: "from-fuchsia-500/90 via-purple-500/70 to-sky-500/80",
    badges: ["Google Gemini", "Anthropic Claude", "Retrieval Pipelines"],
  },
  {
    title: "Cloud-Native Delivery",
    metric: "99.9% uptime SLOs",
    description:
      "Automate deployments, implement observability, and keep services resilient across AWS, cPanel, and edge platforms.",
    gradient: "from-emerald-500/90 via-cyan-500/70 to-blue-500/80",
    badges: ["AWS & Supabase", "CI/CD Pipelines", "Telemetry & Dashboards"],
  },
];

const HeroHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => heroSlides, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const handleNavigate = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
      if (direction === "next") return (prev + 1) % slides.length;
      return (prev - 1 + slides.length) % slides.length;
    });
  };

  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_35px_120px_-40px_rgba(99,102,241,0.55)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/80" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Key impact areas
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-3"
            >
              <h3 className="text-3xl font-bold text-foreground md:text-4xl">{slides[activeIndex].title}</h3>
              <p className="text-lg font-medium text-primary">{slides[activeIndex].metric}</p>
              <p className="text-base text-muted-foreground md:text-lg">{slides[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-2">
            {slides[activeIndex].badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:text-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex w-full max-w-lg flex-col items-center justify-center">
          <motion.div
            key={`visual-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-48 w-full"
          >
            <div
              className={cn(
                "relative h-full w-full rounded-[32px] bg-gradient-to-br",
                slides[activeIndex].gradient,
              )}
            >
              <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />
              <div className="absolute inset-x-6 inset-y-6 rounded-3xl border border-white/20 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Circle className="h-24 w-24 text-white/60" strokeWidth={0.6} />
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-between gap-6 w-full">
            <button
              type="button"
              onClick={() => handleNavigate("prev")}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition hover:border-primary/70 hover:text-primary"
              aria-label="Previous highlight"
            >
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            </button>
            <div className="flex flex-1 items-center justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-6 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60",
                  )}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNavigate("next")}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition hover:border-primary/70 hover:text-primary"
              aria-label="Next highlight"
            >
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        key={`progress-${activeIndex}`}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
      />
    </div>
  );
};

export default HeroHighlights;

