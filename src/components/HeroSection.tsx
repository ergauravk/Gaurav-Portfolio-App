'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface StatItem {
  value: string;
  label: string;
  accent?: boolean;
}

const stats: StatItem[] = [
  { value: 'Java', label: 'Backend Core', accent: true },
  { value: '3', label: 'Live Projects' },
  { value: '7.8', label: 'CGPA', accent: true },
  { value: '3', label: 'DB Technologies' },
];

const resumeHref = '/assets/Gaurav%20Kumar%20Resume.pdf';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Gaurav Kumar';
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    let index = 0;

    const type = () => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index += 1;
        typingRef.current = setTimeout(type, 75);
      }
    };

    const startDelay = setTimeout(type, 500);

    return () => {
      clearTimeout(startDelay);
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="grid gap-5 py-2 pb-6 grid-cols-1 lg:grid-cols-[1.35fr_0.85fr]">
      <div className="flex flex-col gap-4">
        <div
          className={`glass-card gradient-border rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="section-label">Software Developer</span>
            <span
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.25)',
                color: '#f59e0b',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
              Open to opportunities
            </span>
          </div>

          <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(2.4rem, 8vw, 5.2rem)' }}>
            <span className="text-gradient">{typedText}</span>
            <span
              className="inline-block w-[3px] h-[0.85em] bg-[#f59e0b] ml-1 align-middle"
              style={{
                display: typedText.length < fullText.length ? 'inline-block' : 'none',
                animation: 'pulse 1s ease-in-out infinite',
              }}
            />
          </h1>

          <p
            className={`text-[#a89880] leading-[1.75] transition-all duration-700 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.7s', fontSize: '1rem' }}
          >
            Enthusiastic Java Developer with a strong foundation in Java, Hibernate, JDBC, Servlets, and React.
            Passionate about building efficient applications and scalable backend systems.
          </p>

          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              download
              className="btn-primary rounded-xl px-5 py-3 font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              View Resume
            </a>
            <a
              href="#projects"
              className="btn-secondary rounded-xl px-5 py-3 font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              Explore Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`glass-card gradient-border rounded-2xl px-5 py-4 flex flex-wrap gap-x-4 gap-y-2 items-center transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1.1s' }}
        >
          {[
            { label: 'ergauravkumar2005@gmail.com', href: 'mailto:ergauravkumar2005@gmail.com' },
            { label: '+91-6206472920', href: 'tel:+916206472920' },
            { label: 'GitHub', href: 'https://github.com/ergauravk' },
            { label: 'LinkedIn', href: 'http://www.linkedin.com/in/gaurav-kumar-01b6a8234' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="link-underline text-[#a89880] hover:text-[#f5f0e8] transition-colors duration-200 text-xs sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
        style={{ transitionDelay: '0.25s' }}
      >
        <div className="glass-card gradient-border rounded-2xl p-6 flex flex-col items-center gap-4 bento-glow">
          <div className="relative" style={{ width: 'min(180px, 55%)' }}>
            <div className="avatar-ring-gradient rounded-full p-[3px] avatar-glow">
              <div className="rounded-full overflow-hidden bg-[#161310]" style={{ aspectRatio: '1/1' }}>
                <img
                  src="/assets/images/pic.jpeg"
                  alt="Gaurav Kumar portrait"
                  loading="eager"
                  decoding="async"
                  className="object-cover object-top w-full h-full block"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="absolute w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80"
                style={{ animation: 'orbit 4s linear infinite', top: '8%', left: '50%' }}
              />
              <div
                className="absolute w-2 h-2 rounded-full bg-[#fb923c] opacity-70"
                style={{ animation: 'orbit 7s linear infinite reverse', bottom: '12%', right: '8%' }}
              />
            </div>
          </div>

          <div
            className="w-full rounded-xl px-4 py-3 text-center"
            style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.15)' }}
          >
            <span className="text-[#a89880] text-xs block mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              focused stack
            </span>
            <strong className="text-[#f5f0e8] text-base tracking-tight">Java · Python · React</strong>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <article
              key={i}
              className={`glass-card gradient-border rounded-2xl p-4 sm:p-5 bento-glow transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${0.5 + i * 0.1}s` }}
            >
              <strong
                className="block text-[1.4rem] sm:text-[1.7rem] font-bold leading-none mb-1"
                style={{ color: stat.accent ? '#f59e0b' : '#f5f0e8' }}
              >
                {stat.value}
              </strong>
              <span className="text-[#a89880] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {stat.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
