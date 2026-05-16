'use client';

import { useRef, useEffect, useState } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  { title: 'Languages', skills: ['Java', 'Python'], color: '#f59e0b' },
  { title: 'Frontend', skills: ['ReactJS', 'HTML', 'Tailwind CSS'], color: '#fb923c' },
  { title: 'Tools', skills: ['VS Code', 'IntelliJ', 'Git', 'Maven', 'Postman'], color: '#e879f9' },
  { title: 'Databases', skills: ['MySQL', 'Oracle', 'MongoDB'], color: '#f59e0b' },
];

const allSkills = ['Java', 'Python', 'ReactJS','Django', 'HTML', 'Tailwind CSS', 'VS Code', 'IntelliJ', 'Git', 'Maven', 'Postman', 'MySQL', 'Oracle', 'MongoDB', 'Spring ', 'Hibernate', 'JDBC', 'Bootstrap', 'Django'];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="pt-20">
      {/* Heading */}
      <div
        className={`mb-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="section-label">Technical Skills</span>
        <h2
          className="font-bold leading-[1.15] text-[#f5f0e8] mt-3 tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          Technologies I use to{' '}
          <span className="text-gradient">design, build &amp; improve</span> applications
        </h2>
      </div>

      {/* Marquee strip */}
      <div
        className={`overflow-hidden mb-6 py-3 rounded-2xl transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'rgba(245,158,11,0.05)',
          border: '1px solid rgba(245,158,11,0.1)',
          transitionDelay: '0.1s',
        }}
      >
        <div className="marquee-track flex gap-6 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={i}
              className="text-sm font-medium px-4 py-1.5 rounded-full flex-shrink-0"
              style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.15)',
                color: i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fb923c' : '#a89880',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            className={`glass-card gradient-border bento-glow rounded-2xl p-6 sm:p-7 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-2 h-8 rounded-full flex-shrink-0"
                style={{ background: cat.color }}
              />
              <h3 className="font-bold text-[#f5f0e8] text-xl tracking-tight">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={skill}
                  className={`chip chip-hover cursor-default transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${0.25 + i * 0.1 + j * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
