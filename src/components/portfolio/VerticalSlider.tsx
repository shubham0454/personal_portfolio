import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VerticalSliderProps {
  items: Array<{
    id: string | number;
    content: React.ReactNode;
  }>;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  className?: string;
}

const VerticalSlider = ({
  items,
  autoPlay = false,
  interval = 5000,
  showControls = true,
  className,
}: VerticalSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused || items.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, items.length]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        'relative flex flex-row items-start gap-6',
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Dots - Left Side */}
      <div className="flex flex-col items-center gap-3 flex-shrink-0 pt-2">
        {showControls && (
          <button
            onClick={handlePrevious}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur-sm text-muted-foreground transition-all hover:border-primary/70 hover:text-primary hover:bg-background hover:shadow-lg"
            aria-label="Previous item"
          >
            <ChevronUp className="h-5 w-5 transition group-hover:-translate-y-0.5" />
          </button>
        )}

        <div className="flex flex-col items-center gap-2.5">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                'relative transition-all duration-300',
                'h-3 w-3 rounded-full',
                index === activeIndex
                  ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              )}
              aria-label={`Go to item ${index + 1}`}
            >
              {index === activeIndex && (
                <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              )}
            </button>
          ))}
        </div>

        {showControls && (
          <button
            onClick={handleNext}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur-sm text-muted-foreground transition-all hover:border-primary/70 hover:text-primary hover:bg-background hover:shadow-lg"
            aria-label="Next item"
          >
            <ChevronDown className="h-5 w-5 transition group-hover:translate-y-0.5" />
          </button>
        )}

        {/* Active Indicator Text */}
        <div className="text-xs text-muted-foreground font-medium mt-2">
          {activeIndex + 1} / {items.length}
        </div>
      </div>

      {/* Content Area - Right Side */}
      <div className="relative flex-1 w-full min-h-[400px]">
        <div className="absolute inset-0 overflow-hidden">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'absolute inset-0 transition-all duration-500 ease-in-out',
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : index < activeIndex
                  ? 'opacity-0 -translate-y-8'
                  : 'opacity-0 translate-y-8'
              )}
            >
              {item.content}
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        {autoPlay && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-linear"
              style={{
                width: `${((activeIndex + 1) / items.length) * 100}%`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalSlider;

