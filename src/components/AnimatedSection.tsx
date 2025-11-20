import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnimationType = "fade" | "slide" | "scale";

const animationClasses: Record<AnimationType, string> = {
  fade: "animate-fade-in",
  slide: "animate-slide-up",
  scale: "animate-scale-in",
};

const hiddenState: Record<AnimationType, string> = {
  fade: "opacity-0 translate-y-6",
  slide: "opacity-0 translate-y-8",
  scale: "opacity-0 scale-[0.96]",
};

const visibleState: Record<AnimationType, string> = {
  fade: "opacity-100 translate-y-0",
  slide: "opacity-100 translate-y-0",
  scale: "opacity-100 scale-100",
};

type AnimatedSectionProps = {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
};

const AnimatedSection = ({
  children,
  animation = "fade",
  delay = 0,
  className,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const style = isVisible && delay ? ({ animationDelay: `${delay}ms` } as const) : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "will-change-transform",
        isVisible ? visibleState[animation] : hiddenState[animation],
        isVisible && animationClasses[animation],
        isVisible && "pointer-events-auto",
        !isVisible && "pointer-events-none",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

