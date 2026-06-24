import { useRef, useState, useEffect } from 'react';

type LogoItem = {
  name: string;
  url: string;
  fallback?: string;
};

const BASE_TECH_LOGOS: LogoItem[] = [
  { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Knex.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knexjs/knexjs-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQL Server', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { 
    name: 'Hostinger', 
    url: 'https://assets.hostinger.com/images/logo-new-2023-ce0da1c6a5.svg',
    fallback: 'https://www.hostinger.com/favicon.ico'
  },
  { name: 'cPanel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cpanel/cpanel-original.svg' },
  { name: 'FileZilla', url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/FileZilla_logo.svg' },
  // { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  // { 
  //   name: 'Cursor', 
  //   url: 'https://raw.githubusercontent.com/getcursor/cursor/main/packages/desktop/static/icon.png',
  //   fallback: 'https://www.cursor.com/favicon.ico'
  // },
  // { 
  //   name: 'Claude', 
  //   url: 'https://www.anthropic.com/images/claude-logo.svg',
  //   fallback: 'https://claude.ai/favicon.ico'
  // },
  // { name: 'ChatGPT', url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  // { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

const duplicatedLogos = [...BASE_TECH_LOGOS, ...BASE_TECH_LOGOS];

const TechShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || isDragging || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId: number;
    let scrollPosition = scrollContainer.scrollLeft || 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!scrollContainer || isDragging || !autoScroll) return;
      
      scrollPosition += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoScroll, isDragging]);

  // Mouse drag handlers
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.getBoundingClientRect().left;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setTimeout(() => setAutoScroll(true), 2000);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setAutoScroll(false);
    const rect = scrollRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setAutoScroll(true), 2000);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setAutoScroll(false);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScroll(true), 2000);
  };

  return (
    <section className="bg-muted/40 py-16 md:py-20 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Technologies I Work With</h2>
          <p className="mt-4 text-muted-foreground">
            An overview of the tools and platforms I use for full-stack development, automation, and hosting.
          </p>
        </div>
      </div>
      <div className="relative w-full  mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-muted/80 via-muted/40 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-muted/80 via-muted/40 to-transparent z-10" />

          <div
            ref={scrollRef}
            className={`flex items-center gap-8 sm:gap-10 md:gap-12 overflow-x-auto scrollbar-hide w-full ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedLogos.map((logo, index) => {
              const imageKey = `${logo.name}-${index}`;
              const hasFailed = failedImages.has(imageKey);
              const imageSrc = hasFailed && logo.fallback ? logo.fallback : logo.url;
              
              return (
                <div
                  key={imageKey}
                  className="flex-shrink-0 flex flex-col items-center gap-3 w-28 sm:w-32 md:w-36 lg:w-40 text-center select-none"
                >
                  <div className="bg-background shadow-sm rounded-2xl p-4 md:p-5 lg:p-6 flex items-center justify-center h-24 md:h-28 lg:h-32 w-full border border-border/50 hover:border-primary/50 transition-colors">
                    <img
                      src={imageSrc}
                      alt={`${logo.name} logo`}
                      className="h-14 md:h-16 lg:h-18 w-auto object-contain max-w-full"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const currentSrc = target.src;
                        
                        // If we haven't tried the fallback yet, try it
                        if (!hasFailed && logo.fallback) {
                          // Check if current src matches the primary URL (accounting for full URL resolution)
                          const isPrimaryUrl = currentSrc.includes(logo.url.split('/').pop() || '') || 
                                               currentSrc === logo.url ||
                                               currentSrc.endsWith(logo.url);
                          
                          if (isPrimaryUrl) {
                            setFailedImages(prev => new Set(prev).add(imageKey));
                            // Force React to re-render with fallback
                            setTimeout(() => {
                              target.src = logo.fallback!;
                            }, 0);
                            return;
                          }
                        }
                        
                        // Both URLs failed, show text fallback
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('span')) {
                          const fallbackSpan = document.createElement('span');
                          fallbackSpan.className = 'text-3xl font-bold text-primary';
                          fallbackSpan.textContent = logo.name.charAt(0);
                          parent.appendChild(fallbackSpan);
                        }
                      }}
                    />
                  </div>
                  <span className="text-sm md:text-base lg:text-lg font-medium text-muted-foreground">{logo.name}</span>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default TechShowcase;

