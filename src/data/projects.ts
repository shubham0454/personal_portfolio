import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart,
  SunMedium,
  Stethoscope,
  Building2,
  Fish,
  Home,
  Mail,
  Radio,
  Droplet,
} from "lucide-react";

// Import project images
import bigtokriImg from "@/assets/projects/bigtokri.webp";
import indianSolarImg from "@/assets/projects/indian_solar_ews_backend.webp";
import wardenSurgicalImg from "@/assets/projects/Warden Surgical.webp";
import aaeshkaImg from "@/assets/projects/aaeshka.webp";
import agromarineImg from "@/assets/projects/Agromarine-marketing-services.webp";
import krishDevelopersImg from "@/assets/projects/krish-developer.webp";
import gandhiPropertiesImg from "@/assets/projects/Gandhi-Properties.webp";
import sourcewellImg from "@/assets/projects/Sourcewell.webp";
import podcastCenterImg from "@/assets/projects/podcast-Center.webp";
// TODO: Add actual Aksheyaganga project image
// import aksheyagangaImg from "@/assets/projects/aksheyaganga.png";
import aksheyagangaImg from "@/assets/projects/aksheyaganga-milk-collection.webp"; // Temporary placeholder

export type ProjectLink = {
  label: string;
  url: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type ProjectMetric = {
  label: string;
  value: string;
  description: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  headline: string;
  role: string;
  client: string;
  duration: string;
  year: string;
  icon: LucideIcon;
  gradient: string;
  summary: string;
  focusAreas: string[];
  outcomes: string[];
  techStack: string[];
  heroImage: string;
  gallery: ProjectGalleryItem[];
  metrics: ProjectMetric[];
  challenge: string;
  solution: string;
  impact: string;
  insights: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "bigtokri",
    title: "BigTokri – B2B & B2C E-Commerce Platform",
    headline: "A unified shopping platform for wholesalers and retail customers with dynamic pricing and comprehensive admin management.",
    role: "Frontend Developer",
    client: "BigTokri",
    duration: "2025",
    year: "2025",
    icon: ShoppingCart,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    summary:
      "Developed the full Angular 19 frontend for both customer website and admin dashboard. Built dynamic price display based on B2B/B2C user type, integrated Swagger APIs for product management, and created comprehensive admin panel for product and pricing management.",
    focusAreas: [
      "Angular 19 frontend development for customer and admin interfaces",
      "Dynamic pricing system based on B2B/B2C user type",
      "Product units support: Kg, Piece, Pack, Bunch",
      "Complete admin panel: add/update products, pricing, categories",
      "Swagger API integration for product management",
    ],
    outcomes: [
      "Unified platform serving both B2B and B2C customers",
      "Streamlined product management through admin dashboard",
      "Flexible pricing system supporting multiple user types",
      "Hosted on DigitalOcean for reliable performance",
    ],
    techStack: [
      "Angular 19",
      "TypeScript",
      "Bootstrap",
      "Swiper.js",
      "HTML/CSS",
      "Swagger",
      "DigitalOcean",
    ],
    heroImage: bigtokriImg,
    gallery: [
      {
        src: bigtokriImg,
        alt: "BigTokri E-Commerce Platform",
        caption: "B2B & B2C unified shopping platform with dynamic pricing.",
      },
    ],
    metrics: [
      { label: "User Types", value: "B2B & B2C", description: "Dynamic pricing based on user type." },
      { label: "Product Units", value: "4 Types", description: "Kg, Piece, Pack, Bunch support." },
      { label: "Framework", value: "Angular 19", description: "Latest Angular version with modern features." },
    ],
    challenge:
      "Creating a unified platform that serves both B2B wholesalers and B2C retail customers with different pricing structures and product management needs.",
    solution:
      "Built a flexible Angular 19 application with role-based pricing display, comprehensive admin dashboard, and Swagger API integration for seamless product management.",
    impact:
      "Enabled the business to serve both customer segments from a single platform, reducing operational complexity and improving user experience.",
    insights: [
      "Dynamic pricing based on user type significantly improved conversion rates.",
      "Comprehensive admin panel reduced manual work and improved efficiency.",
      "Swagger API integration ensured reliable data flow between frontend and backend.",
    ],
    links: [
      {
        label: "Website",
        url: "https://bigtokri.in",
        variant: "primary",
      },
      // {
      //   label: "Figma",
      //   url: "https://www.figma.com/proto/VeGb3WZKm1PUp69xMPPgQE/BT-Web-UI?page-id=0%3A1&node-id=1-207&node-type=frame&viewport=773%2C-191%2C0.36&t=4ZcTvOBMbyKGjYpu-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=190%3A211",
      //   variant: "secondary",
      // },
    ],
  },
  {
    id: "indian-solar-ews",
    title: "Indian Solar EWS – Solar Employee Work Tracking Backend",
    headline: "Backend system for mobile app tracking solar installation employees' duty status, tasks, and expenses.",
    role: "Backend Developer",
    client: "Indian Solar EWS",
    duration: "2025",
    year: "2025",
    icon: SunMedium,
    gradient: "from-teal-500 via-cyan-500 to-blue-500",
    summary:
      "Built the entire backend powering a mobile app used by solar installation employees. Implemented employee duty status tracking, task management, expense submission & approval system, and company details management.",
    focusAreas: [
      "Employee duty status (On-duty / Off-duty) tracking",
      "Task updates (Completed / In-progress / Pending)",
      "Expense submission & approval system",
      "Company details management",
      "Secure, scalable backend architecture",
    ],
    outcomes: [
      "Real-time employee status tracking for field operations",
      "Streamlined expense management with approval workflow",
      "Comprehensive task tracking system",
      "Scalable backend architecture on AWS infrastructure",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Knex.js",
      "PostgreSQL",
      "Swagger",
      "Postman",
      "AWS EC2",
      "Amazon RDS (PostgreSQL)",
      "AWS S3 Bucket",
    ],
    heroImage: indianSolarImg,
    gallery: [
      {
        src: indianSolarImg,
        alt: "Indian Solar EWS Backend",
        caption: "Backend system for solar employee work tracking mobile app.",
      },
    ],
    metrics: [
      { label: "AWS Services", value: "3", description: "EC2, RDS PostgreSQL, S3 Bucket." },
      { label: "Features", value: "4 Core", description: "Duty status, tasks, expenses, company management." },
      { label: "Database", value: "PostgreSQL", description: "Managed on Amazon RDS." },
    ],
    challenge:
      "Building a robust backend system to track field employees' work status, manage tasks, and handle expense approvals for a mobile application.",
    solution:
      "Developed a secure Node.js/Express backend with PostgreSQL database, implementing comprehensive APIs for employee tracking, task management, and expense workflows, hosted on AWS infrastructure.",
    impact:
      "Enabled efficient tracking of solar installation employees, streamlined expense management, and provided real-time visibility into field operations.",
    insights: [
      "AWS RDS PostgreSQL provided reliable database management with minimal overhead.",
      "S3 bucket storage enabled efficient media and document handling.",
      "Swagger documentation improved API integration and testing efficiency.",
    ],
    links: [],
  },
  {
    id: "warden-surgical",
    title: "Warden Surgical – Medical Instruments Website + Admin + Backend",
    headline: "Complete system for a company supplying 1500+ hospital instruments with quotation generation and category-based filtering.",
    role: "Full-Stack Developer",
    client: "Warden Surgical",
    duration: "2025 – Ongoing",
    year: "2025",
    icon: Stethoscope,
    gradient: "from-red-500 via-pink-500 to-rose-500",
    summary:
      "Developed a complete system including website, admin panel, and backend for a medical instruments supplier. Built quotation generation system, product management with 1500+ items, and category-based filtering across 4 main categories.",
    focusAreas: [
      "Website with HTML, CSS, JavaScript, PHP",
      "Admin panel with Angular + Bootstrap",
      "Quotation generation system",
      "Product management (1500+ instruments)",
      "Category-based filtering (4 main categories)",
      "Backend with Node.js, Express, Knex.js, PostgreSQL",
    ],
    outcomes: [
      "Complete system serving 1500+ medical instruments",
      "Efficient quotation generation through admin panel",
      "Organized product catalog with category filtering",
      "Scalable backend infrastructure on AWS",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Angular",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Knex.js",
      "PostgreSQL",
      "Swagger",
      "AWS EC2",
      "Amazon RDS (PostgreSQL)",
      "AWS S3 Bucket",
    ],
    heroImage: wardenSurgicalImg,
    gallery: [
      {
        src: wardenSurgicalImg,
        alt: "Warden Surgical Medical Instruments",
        caption: "Complete system for medical instruments supplier with 1500+ products.",
      },
    ],
    metrics: [
      { label: "Products", value: "1500+", description: "Medical instruments in catalog." },
      { label: "Categories", value: "4 Main", description: "Cardiology, Furniture, Equipment, Ware." },
      { label: "AWS Services", value: "3", description: "EC2, RDS PostgreSQL, S3 for images." },
    ],
    challenge:
      "Creating a comprehensive system to manage and showcase 1500+ medical instruments across multiple categories, with efficient quotation generation and product management.",
    solution:
      "Built a three-tier system: static website for customers, Angular admin panel for management, and Node.js backend with PostgreSQL database, all hosted on AWS with S3 for product image storage.",
    impact:
      "Streamlined operations for medical instrument supplier, enabling efficient product management, quotation generation, and customer engagement through organized product catalog.",
    insights: [
      "Category-based organization improved product discoverability.",
      "AWS S3 bucket storage efficiently handled 1500+ product images.",
      "Admin panel with Angular provided intuitive management interface.",
    ],
    links: [
      {
        label: "Website",
        url: "https://wardensurgical.com/index",
        variant: "primary",
      },
    ],
  },
  {
    id: "aaeshka",
    title: "Aaeshka – Real Estate Flat Selling Website",
    headline: "Static website showcasing floor plans, amenities, and completed/ongoing projects for a real estate builder.",
    role: "Frontend Developer",
    client: "Aaeshka",
    duration: "2025",
    year: "2025",
    icon: Building2,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    summary:
      "Built a static website for a real estate builder showcasing floor plans, amenities, completed and ongoing projects. Includes project selection with detailed information display.",
    focusAreas: [
      "Static website with HTML, CSS, JavaScript, Bootstrap",
      "PHP contact form integration",
      "Floor plans and amenities showcase",
      "Project categorization (completed/ongoing)",
      "Detailed project information pages",
    ],
    outcomes: [
      "Professional real estate website",
      "Clear project showcase with floor plans",
      "Easy contact form integration",
      "Responsive design for all devices",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "cPanel",
      "Namecheap",
    ],
    heroImage: aaeshkaImg,
    gallery: [
      {
        src: aaeshkaImg,
        alt: "Aaeshka Real Estate Website",
        caption: "Real estate flat selling website with project showcase.",
      },
    ],
    metrics: [
      { label: "Project Types", value: "2", description: "Completed and ongoing projects." },
      { label: "Hosting", value: "cPanel", description: "Hosted on Namecheap cPanel." },
      { label: "Framework", value: "Bootstrap", description: "Responsive design framework." },
    ],
    challenge:
      "Creating an attractive, informative website that effectively showcases real estate projects, floor plans, and amenities to potential buyers.",
    solution:
      "Developed a clean, responsive static website with Bootstrap, featuring organized project sections, detailed floor plans, and easy-to-use contact forms.",
    impact:
      "Enabled the real estate builder to effectively showcase their projects online, improving customer engagement and lead generation.",
    insights: [
      "Clear project categorization helped visitors find relevant information quickly.",
      "Floor plan integration improved customer understanding of available units.",
      "Simple contact form streamlined lead capture process.",
    ],
    links: [
      {
        label: "Website",
        url: "https://aaeshka.com",
        variant: "primary",
      },
    ],
  },
  {
    id: "agromarine",
    title: "Agromarine Marketing Services – Global Seafood Export Website",
    headline: "Website showcasing sea shrimps, cephalopods, premium fish, export certifications, and 19+ years of industry experience.",
    role: "Frontend Developer",
    client: "Agromarine Marketing Services",
    duration: "2025",
    year: "2025",
    icon: Fish,
    gradient: "from-cyan-500 via-blue-500 to-teal-500",
    summary:
      "Built a static website for a global seafood export company showcasing sea shrimps, cephalopods, premium fish, export certifications, and highlighting 19+ years of industry experience.",
    focusAreas: [
      "Product showcase: Sea shrimps, Cephalopods, Premium fish",
      "Export certifications display",
      "Industry experience highlighting (19+ years)",
      "Global sourcing information (India, Bangladesh, Vietnam)",
      "Quality compliance standards (HACCP & BRC)",
    ],
    outcomes: [
      "Professional seafood export website",
      "Comprehensive product catalog",
      "Trust-building through certifications and experience",
      "Global market presence",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Hostinger",
    ],
    heroImage: agromarineImg,
    gallery: [
      {
        src: agromarineImg,
        alt: "Agromarine Marketing Services",
        caption: "Global seafood export website with product showcase.",
      },
    ],
    metrics: [
      { label: "Experience", value: "19+ Years", description: "Industry expertise and reliability." },
      { label: "Product Types", value: "3 Main", description: "Shrimps, Cephalopods, Premium Fish." },
      { label: "Sourcing", value: "3 Countries", description: "India, Bangladesh, Vietnam." },
    ],
    challenge:
      "Creating a professional website that effectively showcases seafood products, export capabilities, and builds trust through certifications and industry experience.",
    solution:
      "Developed a comprehensive static website highlighting products, certifications, global sourcing capabilities, and 19+ years of industry experience with clean, professional design.",
    impact:
      "Established strong online presence for seafood export business, showcasing products and certifications to global importers, improving business credibility and lead generation.",
    insights: [
      "Certification display significantly improved trust and credibility.",
      "Product categorization helped visitors understand offerings clearly.",
      "Experience highlighting reinforced company reliability.",
    ],
    links: [
      {
        label: "Website",
        url: "https://dentalecura.in/skyline/Agromarine%20marketing%20services/index.html",
        variant: "primary",
      },
    ],
  },
  {
    id: "krish-developers",
    title: "Krish Developers – Real Estate Website",
    headline: "Real estate builder website showcasing ongoing, future, and completed projects with comprehensive project details.",
    role: "Frontend Developer",
    client: "Krish Developers",
    duration: "2025",
    year: "2025",
    icon: Home,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    summary:
      "Built a comprehensive real estate website for a builder showcasing ongoing, future, and completed projects. Includes all necessary services and project information.",
    focusAreas: [
      "Project categorization (ongoing, future, completed)",
      "Comprehensive project details",
      "Service information display",
      "Responsive design for all devices",
      "Contact form integration",
    ],
    outcomes: [
      "Complete real estate website",
      "Organized project showcase",
      "Easy navigation and information access",
      "Professional online presence",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "cPanel",
      "Nameserver",
    ],
    heroImage: krishDevelopersImg,
    gallery: [
      {
        src: krishDevelopersImg,
        alt: "Krish Developers Real Estate",
        caption: "Real estate builder website with project showcase.",
      },
    ],
    metrics: [
      { label: "Project Types", value: "3", description: "Ongoing, future, and completed projects." },
      { label: "Hosting", value: "cPanel", description: "Hosted on cPanel/Nameserver." },
      { label: "Status", value: "Complete", description: "Fully functional website." },
    ],
    challenge:
      "Creating a comprehensive real estate website that effectively showcases all project types and provides easy access to project information for potential buyers.",
    solution:
      "Developed a well-organized static website with clear project categorization, detailed project information, and responsive design for optimal user experience across all devices.",
    impact:
      "Enabled the real estate builder to effectively showcase their portfolio online, improving customer engagement and facilitating project inquiries.",
    insights: [
      "Clear project categorization improved user navigation.",
      "Comprehensive project details helped visitors make informed decisions.",
      "Responsive design ensured accessibility across all devices.",
    ],
    links: [
      {
        label: "Website",
        url: "https://krishdevelopers.in/",
        variant: "primary",
      },
    ],
  },
  {
    id: "gandhi-properties",
    title: "Gandhi Properties – Real Estate Builder Website",
    headline: "Figma-to-code conversion of a real estate builder website with multiple pages including home, about, media, blogs, and contact.",
    role: "Frontend Developer",
    client: "Gandhi Properties",
    duration: "2025 – Ongoing",
    year: "2025",
    icon: Building2,
    gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
    summary:
      "Converted full Figma design into responsive website for a real estate builder. Includes multiple pages: Home, About, Media & News, Gandhi Empire, Blogs, Contact, and Sitemap.",
    focusAreas: [
      "Figma design to code conversion",
      "Multiple page development",
      "Responsive design implementation",
      "Image and media integration",
      "Blog section development",
    ],
    outcomes: [
      "Pixel-perfect Figma conversion",
      "Multi-page website with comprehensive content",
      "Responsive design for all devices",
      "Ongoing project with major modules completed",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Hostinger",
    ],
    heroImage: gandhiPropertiesImg,
    gallery: [
      {
        src: gandhiPropertiesImg,
        alt: "Gandhi Properties Real Estate",
        caption: "Real estate builder website converted from Figma design.",
      },
    ],
    metrics: [
      { label: "Pages", value: "7+", description: "Home, About, Media, Empire, Blogs, Contact, Sitemap." },
      { label: "Hosting", value: "Hostinger", description: "Hosted on Hostinger platform." },
      { label: "Status", value: "Ongoing", description: "Major modules completed." },
    ],
    challenge:
      "Converting a detailed Figma design into a fully functional, responsive website with multiple pages while maintaining design fidelity and ensuring optimal user experience.",
    solution:
      "Meticulously converted Figma designs to code, implementing responsive layouts, integrating all pages, and ensuring consistent design language across the entire website.",
    impact:
      "Delivered a professional real estate website that accurately represents the brand, improves online presence, and facilitates customer engagement through multiple content sections.",
    insights: [
      "Pixel-perfect Figma conversion required attention to detail.",
      "Multi-page structure improved content organization.",
      "Responsive design ensured accessibility across all devices.",
    ],
    links: [
      {
        label: "Website",
        url: "https://test.dentalecura.in/",
        variant: "primary",
      },
      // {
      //   label: "Figma",
      //   url: "https://www.figma.com/proto/XUvxc9RUfH72BvggAd0Sa2/Gandhi-Properties?node-id=370-66&t=hDeYvFZgbaI3em2u-1&scaling=scale-down-width&content-scaling=fixed&page-id=84%3A2",
      //   variant: "secondary",
      // },
    ],
  },
  {
    id: "sourcewell",
    title: "Sourcewell – HTML Email Template",
    headline: "Custom email banner with clickable product links and active logo redirection designed for marketing mailers.",
    role: "Frontend Developer",
    client: "Sourcewell",
    duration: "2025",
    year: "2025",
    icon: Mail,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    summary:
      "Created custom email banner using HTML, CSS, and JavaScript. Designed clickable product links and active logo redirection for marketing mailers.",
    focusAreas: [
      "HTML email template development",
      "Clickable product links",
      "Active logo redirection",
      "Email-compatible CSS styling",
      "Marketing mailer optimization",
    ],
    outcomes: [
      "Professional email template",
      "Functional clickable elements",
      "Brand-consistent design",
      "Marketing-ready template",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    heroImage: sourcewellImg,
    gallery: [
      {
        src: sourcewellImg,
        alt: "Sourcewell Email Template",
        caption: "Custom HTML email template with clickable elements.",
      },
    ],
    metrics: [
      { label: "Template Type", value: "Email", description: "HTML email banner template." },
      { label: "Features", value: "2", description: "Product links and logo redirection." },
      { label: "Purpose", value: "Marketing", description: "Designed for marketing mailers." },
    ],
    challenge:
      "Creating an email template that works across different email clients while maintaining clickable functionality and brand consistency.",
    solution:
      "Developed a custom HTML email template with email-compatible CSS, ensuring clickable product links and logo redirection work reliably across major email clients.",
    impact:
      "Enabled effective email marketing campaigns with professional, functional templates that drive engagement through clickable product links.",
    insights: [
      "Email-compatible CSS is crucial for cross-client compatibility.",
      "Clickable elements significantly improve email engagement.",
      "Simple, focused design works best for email templates.",
    ],
    links: [],
  },
  {
    id: "podcast-center",
    title: "PodcastCenter – Creative Podcast Production Website",
    headline: "Creative podcast production website with animations, transitions, and Calendly integration for meeting scheduling.",
    role: "Frontend Developer",
    client: "PodcastCenter",
    duration: "2025 – Ongoing",
    year: "2025",
    icon: Radio,
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    summary:
      "Built a creative podcast production website using React and Tailwind CSS. Added animations and transitions for premium feel, integrated Calendly for meeting scheduling, and showcased services including podcast production, video editing, YouTube thumbnails, and website development.",
    focusAreas: [
      "React frontend development",
      "Tailwind CSS styling",
      "Animations and transitions",
      "Calendly integration for scheduling",
      "Service showcase (podcast, video editing, YouTube management, web development)",
      "Responsive design for all screens",
    ],
    outcomes: [
      "Creative, animated website",
      "Integrated meeting scheduling",
      "Comprehensive service showcase",
      "Responsive across all devices",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Calendly",
      "Netlify",
    ],
    heroImage: podcastCenterImg,
    gallery: [
      {
        src: podcastCenterImg,
        alt: "PodcastCenter Website",
        caption: "Creative podcast production website with animations and Calendly integration.",
      },
    ],
    metrics: [
      { label: "Services", value: "5", description: "Podcast, video editing, thumbnails, YouTube, web dev." },
      { label: "Hosting", value: "Netlify", description: "Hosted on Netlify platform." },
      { label: "Status", value: "Ongoing", description: "UI improvements pending." },
    ],
    challenge:
      "Creating a creative, engaging website that effectively showcases podcast production services while maintaining professional appearance and integrating scheduling functionality.",
    solution:
      "Developed a React-based website with Tailwind CSS, implementing smooth animations and transitions, and integrating Calendly for seamless meeting scheduling.",
    impact:
      "Established strong online presence for podcast production company, enabling easy client engagement through integrated scheduling and comprehensive service showcase.",
    insights: [
      "Animations and transitions significantly improved user engagement.",
      "Calendly integration streamlined client meeting scheduling.",
      "React and Tailwind CSS enabled rapid development with modern UI.",
    ],
    links: [
      {
        label: "Website",
        url: "https://podcastcenter.netlify.app/",
        variant: "primary",
      },
    ],
  },
  {
    id: "aksheyaganga-milk-collection",
    title: "Aksheyaganga Milk Collection – Dairy Management System",
    headline: "Complete milk collection management system with mobile app, admin panel, and backend for tracking cow and buffalo milk collection, pricing, and distribution.",
    role: "Full-Stack Developer",
    client: "Aksheyaganga",
    duration: "2025 – Ongoing",
    year: "2025",
    icon: Droplet,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    summary:
      "Developing a comprehensive milk collection management system with Flutter mobile app (iOS & Android), Angular admin panel, and Node.js backend. Tracks milk collection from multiple centers, manages cow and buffalo milk separately, calculates pricing based on fat content and liters, and enables cross-checking between collection locations and main center.",
    focusAreas: [
      "Flutter mobile app for iOS and Android (milk givers and collectors)",
      "Angular admin panel for comprehensive management",
      "Node.js/Express.js backend with Knex.js and PostgreSQL",
      "Milk collection tracking (cow and buffalo milk separately)",
      "Price calculation based on fat content and liters",
      "Multi-location collection management (5 locations per collector)",
      "Milk center management (5 cow milk cans, 4 buffalo milk cans per center)",
      "Cross-checking system between collection locations and main center",
      "Three user roles: Milk Giver, Collector, Admin",
      "AWS hosting for app, admin panel, and backend",
    ],
    outcomes: [
      "Streamlined milk collection process with digital tracking",
      "Accurate pricing calculation based on fat content and quantity",
      "Multi-location collection management for efficient operations",
      "Real-time data synchronization between mobile app and backend",
      "Comprehensive admin dashboard for monitoring and management",
      "Cross-verification system ensuring data accuracy",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "iOS",
      "Android",
      "Node.js",
      "Express.js",
      "Knex.js",
      "PostgreSQL",
      "Angular",
      "TypeScript",
      "Swagger",
      "Postman",
      "AWS EC2",
      "Amazon RDS (PostgreSQL)",
      "AWS S3 Bucket",
      "AWS Amplify",
    ],
    heroImage: aksheyagangaImg,
    gallery: [
      {
        src: aksheyagangaImg,
        alt: "Aksheyaganga Milk Collection System",
        caption: "Complete milk collection management system with mobile app, admin panel, and backend.",
      },
    ],
    metrics: [
      { label: "User Roles", value: "3 Types", description: "Milk Giver, Collector, Admin." },
      { label: "Milk Types", value: "2", description: "Cow milk and Buffalo milk." },
      { label: "Collection Locations", value: "5 per Collector", description: "Multiple location support." },
      { label: "Status", value: "Ongoing", description: "Project in active development." },
    ],
    challenge:
      "Building a comprehensive system to track milk collection from multiple centers, manage different milk types (cow and buffalo), calculate accurate pricing based on fat content and quantity, and enable efficient cross-checking between collection points and main center.",
    solution:
      "Developed a three-tier system: Flutter mobile app for field operations (milk givers and collectors), Angular admin panel for management, and Node.js backend with PostgreSQL database. Implemented multi-location tracking, fat-based pricing calculation, and cross-verification system. Hosted all components on AWS infrastructure.",
    impact:
      "Digitized milk collection operations, enabling accurate tracking, transparent pricing, and efficient management across multiple collection centers. Improved operational efficiency and data accuracy through real-time synchronization and cross-verification.",
    insights: [
      "Separate tracking for cow and buffalo milk improved data accuracy and pricing calculations.",
      "Multi-location support enabled collectors to efficiently manage multiple collection points.",
      "Fat-based pricing calculation ensured fair compensation for milk givers.",
      "Cross-checking system between locations and main center reduced discrepancies.",
      "AWS infrastructure provided scalable and reliable hosting for all components.",
    ],
    links: [],
  },
];

export const projectMap = projects.reduce<Record<string, Project>>((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {});
