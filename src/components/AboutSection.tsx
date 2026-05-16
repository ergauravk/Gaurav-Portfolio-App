'use client';

import { useRef, useEffect, useState } from 'react';

const highlights = [
  { icon: '⬡', text: 'Java backend development with JPA and Hibernate' },
  { icon: '⬡', text: 'RESTful API design with scalable architecture fundamentals' },
  { icon: '⬡', text: 'React-based frontend with responsive UI experience' },
  { icon: '⬡', text: 'Python and Django for web application development' },
];

export default function AboutSection() {
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
    <section ref={sectionRef} id="about" className="pt-20">
      {/* Section Heading */}
      <div
        className={`mb-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="section-label">About Me</span>
        <h2
          className="font-bold leading-[1.15] text-[#f5f0e8] mt-3 tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          Building backend logic &amp;{' '}
          <span className="text-gradient">polished frontend</span> experiences
        </h2>
      </div>
      {/* Bento Grid */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Bio Card */}
        <div
          className={`glass-card gradient-border bento-glow rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '0.15s' }}
        >
          {/* Decorative top bar */}
          <div className="flex gap-1.5 mb-6">
            <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(245,158,11,0.4)' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(245,158,11,0.2)' }} />
          </div>

          <p className="text-[#a89880] leading-[1.8] mb-5 text-[1rem] sm:text-[1.02rem]">
            I enjoy turning ideas into reliable digital products. My background includes Java backend development, MVC-based applications, database integration, and responsive frontend implementation with React.
          </p>
          <p className="text-[#a89880] leading-[1.8] text-[1rem] sm:text-[1.02rem]">
            I am a quick learner who enjoys collaborative environments, practical problem solving, and shipping applications that are efficient, maintainable, and useful.
          </p>

          {/* Inline stat row */}
          <div className="flex flex-wrap gap-5 mt-8 pt-6" style={{ borderTop: '1px solid rgba(245,158,11,0.1)' }}>
            {[
              { val: '1yr+', lbl: 'Training' },
              { val: 'Full Stack', lbl: 'Focus' },
              { val: '2025', lbl: 'Graduate' },
            ]?.map((s) => (
              <div key={s?.lbl}>
                <strong className="block text-[#f59e0b] text-lg font-bold">{s?.val}</strong>
                <span className="text-[#a89880] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s?.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid gap-3">
          {highlights?.map((item, i) => (
            <div
              key={i}
              className={`glass-card gradient-border bento-glow rounded-2xl px-5 py-4 flex items-start gap-4 transition-all duration-700 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <span
                className="text-[#f59e0b] text-lg flex-shrink-0 mt-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item?.icon}
              </span>
              <p className="text-[#a89880] leading-[1.7] text-sm m-0">{item?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
