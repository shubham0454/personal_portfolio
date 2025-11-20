import { useEffect, useMemo, useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BarChart,
  Edit3,
  Globe,
  Headphones,
  Image,
  Info,
  Layers,
  Mic,
  Palette,
  Share2,
  Sparkles,
  TrendingUp,
  Video,
  Wand2,
  Youtube,
} from "lucide-react";

type ServiceDefinition = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  benefits: string[];
};

const services: ServiceDefinition[] = [
  {
    id: "podcast-production",
    title: "Podcast Production",
    description:
      "End-to-end podcast production from recording to publishing. We handle the entire production pipeline so you stay focused on storytelling.",
    icon: Mic,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    features: [
      "Professional studio-grade recording",
      "Multi-track editing and mixing",
      "Noise reduction and mastering",
      "Custom intros and outros",
      "Detailed show notes",
      "Multi-platform distribution",
    ],
    benefits: [
      "Studio-quality sound engineering",
      "Save 20+ hours per episode",
      "Consistent, polished delivery",
      "Presence across major podcast networks",
    ],
  },
  {
    id: "video-editing",
    title: "Professional Video Editing",
    description:
      "Transform raw footage into cinematic stories with precise editing, color grading, motion graphics, and broadcast-ready finishing.",
    icon: Video,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    features: [
      "4K / UHD editing workflows",
      "Color grading & correction",
      "Motion graphics & animation",
      "Sound design & mixing",
      "Dynamic transitions & effects",
      "Optimized exports for every channel",
    ],
    benefits: [
      "Cinematic-grade visuals",
      "Fast, reliable turnarounds",
      "Engaging storytelling",
      "Platform-ready deliverables",
    ],
  },
  {
    id: "youtube-thumbnail",
    title: "YouTube Thumbnail Design",
    description:
      "Custom thumbnails engineered to stop the scroll, reinforce your brand, and dramatically lift click-through rates.",
    icon: Image,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    features: [
      "Concept-driven thumbnail design",
      "Variant creation for A/B testing",
      "Brand-safe typography and colour",
      "High-impact focal treatments",
      "24-48 hour delivery windows",
      "Multiple aspect ratios and formats",
    ],
    benefits: [
      "Up to 3x higher CTR",
      "Design consistency across catalog",
      "Optimised for mobile and desktop",
      "Stand-out visuals for every upload",
    ],
  },
  {
    id: "youtube-management",
    title: "YouTube Management",
    description:
      "Full-service channel management covering optimization, scheduling, analytics, and community growth strategies.",
    icon: Youtube,
    gradient: "from-red-500 via-pink-500 to-rose-500",
    features: [
      "Channel audits & optimization",
      "SEO-rich titles & descriptions",
      "Content scheduling & publishing",
      "Analytics dashboards & reporting",
      "Community engagement support",
      "Growth experiments & insights",
    ],
    benefits: [
      "Subscriber and view growth",
      "Higher search discoverability",
      "Predictable posting cadence",
      "Data-led roadmap decisions",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Integrated digital marketing programs engineered to boost visibility, sustain engagement, and convert audiences.",
    icon: TrendingUp,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    features: [
      "Social media strategy & execution",
      "Content calendars & production",
      "SEO optimization sprints",
      "Lifecycle email campaigns",
      "Paid media management",
      "Performance analytics",
    ],
    benefits: [
      "Sharper brand visibility",
      "Qualified traffic lift",
      "Higher conversion pipelines",
      "ROI-driven campaign tracking",
    ],
  },
  {
    id: "website-developer",
    title: "Website Development",
    description:
      "Modern, responsive websites tailored to your brand with conversion-focused UX and performance best practices.",
    icon: Globe,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    features: [
      "Responsive, accessible UI design",
      "Custom development & integrations",
      "E-commerce ready solutions",
      "CMS setup and training",
      "Core web vitals optimization",
      "Technical SEO foundations",
    ],
    benefits: [
      "High-converting digital HQ",
      "Mobile-first experiences",
      "Lightning-fast performance",
      "Search-ready architecture",
    ],
  },
  {
    id: "meeting-recording",
    title: "Meeting Recording & Editing",
    description:
      "Capture and repurpose meetings, webinars, and live sessions with multi-angle production and polished edits.",
    icon: Headphones,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    features: [
      "4K multi-angle capture",
      "Studio-grade audio recording",
      "Live streaming support",
      "Post-production editing",
      "Automated transcripts & captions",
      "Secure cloud delivery",
    ],
    benefits: [
      "Broadcast-ready recordings",
      "Zero post-meeting hassle",
      "Multiple delivery formats",
      "Share-ready assets instantly",
    ],
  },
  {
    id: "content-distribution",
    title: "Content Distribution",
    description:
      "Multi-platform distribution to amplify your content footprint with smart repurposing and analytics-backed iteration.",
    icon: Share2,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    features: [
      "Channel-specific repackaging",
      "Automated posting cadences",
      "Audience-tailored copywriting",
      "Cross-platform analytics",
      "Content repurposing workflows",
      "Engagement moderation",
    ],
    benefits: [
      "Expanded audience reach",
      "Always-on brand presence",
      "Time-saving automation",
      "Single pane of metrics",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Content Creation Services",
  provider: {
    "@type": "Organization",
    name: "PodcastCenter",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Content Creation Services",
    itemListElement: services.slice(0, 3).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
  },
};

const Services = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
    serviceType: "",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [detailService, setDetailService] = useState<ServiceDefinition | null>(null);

  useEffect(() => {
    window.requestAnimationFrame(() => document.body.offsetHeight);
  }, []);

  const structuredDataJson = useMemo(() => JSON.stringify(structuredData), []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanks for reaching out! We'll connect within 24 hours.");
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      message: "",
      serviceType: "",
    });
    setIsFormOpen(false);
  };

  const handleGetStarted = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, serviceType: serviceTitle }));
    setIsFormOpen(true);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/70 to-background">
        <div className="hero-background relative pb-16 pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.2),transparent_70%)]" />
          <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
            <AnimatedSection animation="fade" className="mx-auto max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                <Wand2 className="h-4 w-4 text-primary" />
                Signature Content Studio
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Full-service{" "}
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
                  media production
                </span>{" "}
                crafted to grow your brand
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                From podcasts and video to multi-channel marketing, we orchestrate the entire lifecycle with clarity,
                pace, and measurable outcomes.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="xl" onClick={() => handleGetStarted("Full Service Consultation")}>
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/#contact">View Contact Options</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="space-y-24 py-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-28">
                  <AnimatedSection animation="fade" delay={index * 80}>
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                      <div className={cn("space-y-6", isEven ? "" : "lg:order-2")}>
                        <div
                          className={cn(
                            "flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg shadow-[rgba(76,29,149,0.25)]",
                            "bg-gradient-to-br",
                            service.gradient,
                          )}
                        >
                          <Icon className="h-9 w-9" />
                        </div>
                        <h2 className="text-3xl font-bold md:text-4xl">{service.title}</h2>
                        <p className="text-lg text-muted-foreground">{service.description}</p>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 rounded-xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground shadow-inner shadow-[rgba(0,0,0,0.05)]"
                            >
                              <BarChart className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-2xl bg-muted/70 p-6">
                          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-foreground">
                            <Sparkles className="h-4 w-4 text-accent" />
                            Key Benefits
                          </h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span
                                  className={cn(
                                    "mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br opacity-80",
                                    service.gradient,
                                  )}
                                />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                          <Dialog
                            open={detailService?.id === service.id}
                            onOpenChange={(open) => setDetailService(open ? service : null)}
                          >
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto"
                                onClick={() => setDetailService(service)}
                              >
                                <Info className="mr-2 h-5 w-5" />
                                More Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[520px]">
                              <DialogHeader>
                                <DialogTitle>{service.title}</DialogTitle>
                                <DialogDescription>{service.description}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                    <Layers className="h-4 w-4" />
                                    Service Features
                                  </h4>
                                  <ul className="space-y-2 text-sm">
                                    {service.features.map((feature) => (
                                      <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                                        <Edit3 className="mt-0.5 h-4 w-4 text-primary" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                    <Palette className="h-4 w-4" />
                                    Results You Can Expect
                                  </h4>
                                  <ul className="space-y-2 text-sm">
                                    {service.benefits.map((benefit) => (
                                      <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                                        <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                                        <span>{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="hero"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => handleGetStarted(service.title)}
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>

                      <Card
                        className={cn(
                          "relative overflow-hidden border-2 border-transparent bg-card/70 backdrop-blur-lg transition-all duration-500 hover:border-primary/60 hover:shadow-2xl",
                          isEven ? "" : "lg:order-1",
                        )}
                      >
                        <div
                          className={cn(
                            "pointer-events-none absolute inset-0 opacity-10",
                            "bg-gradient-to-br",
                            service.gradient,
                          )}
                        />
                        <CardContent className="relative z-10 space-y-6 p-10 text-center">
                          <div
                            className={cn(
                              "mx-auto flex h-32 w-32 items-center justify-center rounded-3xl text-white shadow-2xl",
                              "bg-gradient-to-br",
                              service.gradient,
                            )}
                          >
                            <Icon className="h-16 w-16" />
                          </div>
                          <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                          <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {service.features.slice(0, 3).map((feature) => (
                              <span
                                key={feature}
                                className={cn(
                                  "rounded-full px-3 py-1 text-xs font-medium text-white/90",
                                  "bg-gradient-to-br",
                                  service.gradient,
                                  "bg-clip-padding",
                                )}
                              >
                                {feature.split(" ")[0]}
                              </span>
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
        </div>

        <div className="relative overflow-hidden bg-muted py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection animation="scale" className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Ready to build your next flagship project?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us where you want to grow. We’ll reply with ideas, timelines, and a clear production plan within a
                day.
              </p>
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero" size="xl" className="mt-10">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[520px]">
                  <DialogHeader>
                    <DialogTitle>Get Started with Our Services</DialogTitle>
                    <DialogDescription>
                      Let us know what you have in mind. We’ll reach back within 24 hours with next steps.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleFormSubmit} className="mt-4 space-y-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={(event) => setFormData((prev) => ({ ...prev, mobile: event.target.value }))}
                      required
                    />
                    <Input
                      placeholder="Service of Interest"
                      value={formData.serviceType}
                      onChange={(event) => setFormData((prev) => ({ ...prev, serviceType: event.target.value }))}
                    />
                    <Textarea
                      rows={4}
                      placeholder="How can we help? Share context, goals, or sample links."
                      value={formData.message}
                      onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                      required
                    />
                    <Button type="submit" variant="hero" className="w-full">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
export { services };

