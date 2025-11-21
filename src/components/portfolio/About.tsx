import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, BookOpen, Code, Briefcase, Palette, Server, Database, Wrench, Sparkles } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const experience = [
    {
      company: "Impact Digitech Solution Pvt. Ltd.",
      position: "Full-Stack Developer",
      duration: "Nov 2024 - Present",
      location: "Remote - Pune, Maharashtra, India",
      highlights: [
        "Engineered production-ready Angular features, focusing on reusable components, optimized rendering, and scalable UI patterns.",
        "Integrated Swagger-documented REST APIs, ensuring validated, error-handled, and efficient data communication in dashboards.",
        "Architected the Admin and Delivery Boy dashboards, implementing routing, guards, services, caching strategies, and component-driven development.",
        "Collaborated with cross-functional backend teams to refine API responses, resolve integration gaps, and enhance user workflows.",
        "Used GitLab for structured branching, merge requests, and CI alignment, ensuring smooth and conflict-free releases."
      ],
      skills: ["Angular", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "GitLab", "Swagger", "REST APIs"],
    },
    // {
    //   company: "BigTokri E-commerce Platform",
    //   position: "Frontend Engineer · B2B & B2C",
    //   duration: "2024",
    //   location: "Remote",
    //   highlights: [
    //     "Built a unified admin dashboard and storefront supporting both wholesale (B2B) and retail (B2C) customers.",
    //     "Implemented user-type aware UX with wholesale pricing logic, bulk order flows, and retail cart experiences.",
    //     "Integrated Swagger-documented REST APIs, live inventory updates, and GitLab-based collaboration practices.",
    //   ],
    //   skills: ["Angular", "Bootstrap", "Responsive Design", "GitLab", "UX Engineering"],
    // },
    // {
    //   company: "Indian Solar Panel EWS",
    //   position: "Backend Developer",
    //   duration: "2023",
    //   location: "Remote",
    //   highlights: [
    //     "Engineered Express.js and Knex.js services with PostgreSQL for a solar panel early warning system.",
    //     "Authored JWT-secured authentication, role-based permissions, and Swagger API documentation for clear integrations.",
    //     "Optimized schema design and query performance to keep telemetry ingestion and reporting responsive.",
    //   ],
    //   skills: ["Express.js", "Knex.js", "PostgreSQL", "Swagger", "JWT Auth"],
    // },
    // {
    //   company: "Freelance Web Projects",
    //   position: "Full-Stack Developer",
    //   duration: "2022 - 2024",
    //   location: "Remote",
    //   highlights: [
    //     "Delivered static and dynamic brochure sites with modern HTML, CSS, and JavaScript foundations.",
    //     "Handled hosting, deployment, and environment management via cPanel and shared hosting providers.",
    //   ],
    //   skills: ["HTML5", "CSS3", "JavaScript", "cPanel", "Deployment Automation"],
    // },
  ];

  const education = [
    {
      institution: "Dr. G.Y. Pathrikar College, MGM University",
      degree: "Bachelor of Computer Science",
      duration: "2021 - 2024",
      location: "Chhatrapati Sambhaji Nagar, Maharashtra, India",
      description:
        "Specialized in software engineering principles, relational databases, algorithms, and modern web development practices, emphasizing scalable and high-performance applications.",
      achievements: ["CGPA 7.95 / 10"],
    },
    {
      institution: "Kulbhushan Junior College",
      degree: "Higher Secondary Certificate (PCMB)",
      duration: "2019 - 2021",
      location: "Khandala (Vaijapur), Maharashtra, India",
      description:
        "Strengthened my foundation in science and problem-solving, which later supported my journey into software development.",
      achievements: ["Percentage 79%"],
    },
  ];

  const skills = {
    "Frontend": {
      icon: Palette,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    "Backend": {
      icon: Server,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      skills: ["Node.js", "Express.js", "Knex.js", "RESTful APIs", "Authentication"]
    },
    "Database": {
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: ["PostgreSQL", "MySQL", "Query Optimization"]
    },
    "DevOps & Tools": {
      icon: Wrench,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: ["Git", "GitHub", "GitLab", "Postman", "Swagger", "AWS", "cPanel", "Hostinger"]
    },
    "Key Competencies": {
      icon: Sparkles,
      color: "text-fuchsia-500",
      bgColor: "bg-fuchsia-500/10",
      borderColor: "border-fuchsia-500/20",
      skills: ["Responsive Design", "API Integration", "Debugging", "UI/UX Collaboration", "Version Control"]
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          I'm a full-stack developer who builds responsive frontends and stable backend systems. I enjoy creating real features that work smoothly, look good, and solve problems. From UI to API, I handle the full development process.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 glass text-xs sm:text-sm">
            <TabsTrigger value="education" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="animate-fade-in">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="glass hover-glow transition-all duration-500 animate-slide-up"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                        <h4 className="text-lg font-medium">{edu.institution}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <Badge 
                          key={achievement} 
                          variant="outline" 
                          className="hover-glow transition-all duration-300 hover:scale-105"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="animate-fade-in">
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="glass hover-glow transition-all duration-500 animate-slide-up group"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="transform transition-all duration-500 group-hover:translate-x-2">
                        <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-medium group-hover:text-foreground/90 transition-colors">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0 transform transition-all duration-500 group-hover:scale-105">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 group-hover:text-primary transition-colors" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 group-hover:text-primary transition-colors" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                      <ul className="space-y-3 text-muted-foreground mb-4">
                        {exp.highlights.map((highlight) => (
                          <li 
                            key={highlight} 
                            className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2 group/item"
                          >
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary/70 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                            <span className="group-hover/item:text-foreground transition-colors">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 bg-primary/10 border-primary/30 border text-primary hover:bg-primary/20 hover:border-primary/50 hover:text-primary font-medium px-4 py-2 text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, categoryData], categoryIndex) => {
                const IconComponent = categoryData.icon;
                const skillsList = categoryData.skills;
                return (
                  <Card 
                    key={category} 
                    className="glass hover-glow transition-all duration-500 animate-slide-up group border-2 border-primary/30 hover:border-primary/50 bg-background/95 backdrop-blur-sm"
                    style={{
                      animationDelay: `${categoryIndex * 150}ms`,
                      animationFillMode: 'both',
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300 shadow-md">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skillsList.map((skill, skillIndex) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="hover-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-muted/60 border-primary/40 border-2 text-foreground hover:bg-primary hover:border-primary hover:text-white font-medium px-4 py-2 text-sm shadow-sm"
                            style={{
                              animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`,
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;