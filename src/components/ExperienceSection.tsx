'use client';

import { useRef, useEffect, useState } from 'react';

const experienceItems = [
  'Gained hands-on experience in web development and software solutions.',
  'Collaborated on real-time projects to improve technical and problem-solving skills.',
  'Contributed to application development using modern frameworks and tools.',
  'Worked with cross-functional teams to ship features and improve code quality using Git, Maven, and Postman.',
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="pt-20">
      {/* Heading */}
      <div
        className={`mb-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="section-label">Experience</span>
        <h2
          className="font-bold leading-[1.15] text-[#f5f0e8] mt-3 tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          Hands-on learning through{' '}
          <span className="text-gradient">real-time project</span> collaboration
        </h2>
      </div>
      {/* Experience Card */}
      <article
        className={`glass-card gradient-border bento-glow rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '0.15s' }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div>
            {/* Company badge */}
            <span
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full mb-3"
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.2)',
                color: '#f59e0b',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              CodeSquadz
            </span>
            <h3 className="font-bold text-[#f5f0e8] text-xl sm:text-2xl tracking-tight">
              Java Full Stack Trainee
            </h3>
          </div>

          <div className="sm:text-right">
            <span
              className="text-xs px-3 py-1.5 rounded-full inline-block"
              style={{
                background: 'rgba(251,146,60,0.08)',
                border: '1px solid rgba(251,146,60,0.2)',
                color: '#fb923c',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              July 2024 – June 2025
            </span>
            <span className="text-[#a89880] text-xs mt-2 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              1 year
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.3), transparent)' }} />

        {/* Items */}
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {experienceItems?.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                background: 'rgba(245,158,11,0.04)',
                border: '1px solid rgba(245,158,11,0.08)',
                transitionDelay: `${0.3 + i * 0.1}s`,
              }}
            >
              <span
                className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}
              >
                {i + 1}
              </span>
              <p className="text-[#a89880] leading-[1.7] text-sm m-0">{item}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
