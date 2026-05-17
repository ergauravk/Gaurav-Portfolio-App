'use client';

import { useRef, useEffect, useState } from 'react';

interface Project {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  accent: string;
}

const projects: Project[] = [
{
  title: 'Resume Analyzer',
  subtitle: 'Publishing workflow',
  link: 'https://resume-analyzer-git-main-ergauravkumar2005-5381s-projects.vercel.app/login',
  image: '/assets/images/resumeanalyzer.png',
  alt: 'Resume Analyzer demo screenshot showing resume analysis interface for resume evaluation and feedback',
  description: 'Built a AI powered platform for Resume analyze using OpenAI API, Django Framework, Python, React, Tailwind CSS-based interface.',
  tags: ['Python', 'Django','OpenAI API', 'React', 'Tailwind CSS'],
  accent: '#f59e0b'
},
{
  title: 'Tweet App',
  subtitle: 'Publishing workflow',
  link: 'https://github.com/ergauravk/Tweet-App.git',
  image: '/assets/images/tweet.png',
  alt: 'Tweet App demo screenshot showing tweet feed interface',
  description: 'Built a Tweet App using Python, Django, HTML, and Bootstrap.',
  tags: ['Python', 'Django','Bootstrap', 'React', ],
  accent: '#f59e0b'
},
{
  title: 'BloggingApp',
  subtitle: 'Publishing workflow',
  link: 'https://github.com/ergauravk/BloggingApp',
  image: '/assets/images/blog.png',
  alt: 'BloggingApp demo screenshot showing blog post listing page',
  description: 'Built a full-stack blogging platform using Spring Boot with MVC architecture, Hibernate (JPA), CRUD operations, and a responsive Bootstrap-based interface.',
  tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Bootstrap'],
  accent: '#f59e0b'
},
{
  title: 'Employee Management System',
  subtitle: 'Human resources platform',
  link: 'https://github.com/ergauravk/Employee-Management-System.git',
  image: '/assets/images/emp1.png',
  alt: 'Employee Management System demo screenshot showing employee directory interface',
  description: 'Developed a comprehensive employee management solution with user authentication, role-based access control, and real-time data synchronization.',
  tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  accent: '#8b5cf6'
},
{
  title: 'NewsWave',
  subtitle: 'News aggregation platform',
  link: 'https://github.com/ergauravk/NewsWave.git',
  image: '/assets/images/news.png',
  alt: 'NewsWave demo screenshot showing news feed interface',
  description: 'Implemented News API for posting news articles with full CRUD functionality and filtered.',
  tags: ['React', 'News API', 'TailwindCSS', 'JavaScript'],
  accent: '#fb923c'
},
{
  title: 'SecureVault',
  subtitle: 'Security dashboard',
  link: 'https://secure-vault-password-manager.netlify.app/',
  image: '/assets/images/vault.png',
  alt: 'SecureVault password manager app showing secure dashboard UI',
  description: 'Developed a responsive password management web app with secure local storage handling and an intuitive, modern UI.',
  tags: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
  accent: '#e879f9'
}];


export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isCoarsePointerRef = useRef(false);

  useEffect(() => {
    isCoarsePointerRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(pointer: coarse)').matches;
  }, []);


  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.unobserve(el);}},
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="pt-20">
      {/* Heading */}
      <div
        className={`mb-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }>
        <span className="section-label">Projects</span>
        <h2
          className="font-bold leading-[1.15] text-[#f5f0e8] mt-3 tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          Selected work showcasing{' '}
          <span className="text-gradient">backend, database &amp; frontend</span> skills
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) =>
        <article
          key={project.title}
          className={`glass-card gradient-border rounded-2xl overflow-hidden transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
          }
          style={{
            transitionDelay: `${0.1 + i * 0.15}s`,
            transform: hoveredIndex === i ? 'translateY(-8px)' : undefined,
            boxShadow:
            hoveredIndex === i ?
            `0 36px 80px rgba(0,0,0,0.65), 0 0 40px ${project.accent}22` :
            undefined,
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, opacity 0.7s ease',
            borderColor: hoveredIndex === i ? `${project.accent}33` : undefined
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            transitionDelay: `${0.1 + i * 0.15}s`,
            transform:
              hoveredIndex === i
                ? 'translateY(-8px) perspective(1000px) rotateX(2deg) rotateY(-2deg)'
                : undefined,
            boxShadow:
              hoveredIndex === i
                ? `0 36px 80px rgba(0,0,0,0.65), 0 0 40px ${project.accent}22`
                : undefined,
            transition:
              'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, opacity 0.7s ease',
            borderColor: hoveredIndex === i ? `${project.accent}33` : undefined,
          }}>

          
            {/* Image */}
            <div className="overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover block transition-transform duration-500"
                style={{ transform: hoveredIndex === i ? 'scale(1.06)' : 'scale(1)' }}
                loading="lazy"
                decoding="async"
              />
            
              {/* Overlay gradient */}
              <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(14,12,10,0.7) 0%, transparent 60%)' }} />
            
              {/* Featured badge */}
              <span
              className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: `${project.accent}22`,
                border: `1px solid ${project.accent}44`,
                color: project.accent,
                fontFamily: "'JetBrains Mono', monospace",
                backdropFilter: 'blur(8px)'
              }}>
                Featured
              </span>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-bold text-[#f5f0e8] text-lg sm:text-xl tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#a89880] text-sm mt-0.5">{project.subtitle}</p>
                </div>
                <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: `${project.accent}18`,
                  border: `1px solid ${project.accent}33`,
                  color: project.accent
                }}
                aria-label={`View ${project.title}`}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              <p className="text-[#a89880] leading-[1.7] text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) =>
              <span key={tag} className="chip chip-hover cursor-default text-xs">
                    {tag}
                  </span>
              )}
              </div>
            </div>
          </article>
        )}
      </div>
    </section>);
}