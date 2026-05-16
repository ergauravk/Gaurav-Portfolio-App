'use client';

import { useRef, useEffect, useState } from 'react';

export default function ContactSection() {
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
    <section ref={sectionRef} id="contact" className="pt-20 pb-8">
      {/* Heading */}
      <div
        className={`mb-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="section-label">Get In Touch</span>
        <h2
          className="font-bold leading-[1.15] text-[#f5f0e8] mt-3 tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          Let&apos;s build something{' '}
          <span className="text-gradient">great together</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Education Card */}
        <div
          className={`glass-card gradient-border bento-glow rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="section-label mb-4 block">Education</span>

          {/* Degree */}
          <h3 className="font-bold text-[#f5f0e8] text-lg sm:text-xl tracking-tight leading-tight mb-2">
            BTech, Computer Science &amp; Technology
          </h3>
          <p className="text-[#a89880] leading-[1.7] text-sm mb-5">
            Bhai Gurdas Institute of Engineering and Technology, Punjab
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-5 pt-5"
            style={{ borderTop: '1px solid rgba(245,158,11,0.1)' }}
          >
            {[
              { val: '2021–2025', lbl: 'Duration' },
              { val: '7.8', lbl: 'CGPA' },
              { val: 'B.Tech', lbl: 'Degree' },
            ]?.map((s) => (
              <div key={s?.lbl}>
                <strong className="block text-[#f59e0b] font-bold text-base">{s?.val}</strong>
                <span
                  className="text-[#a89880] text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s?.lbl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div
          className={`glass-card gradient-border bento-glow rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="section-label mb-4 block">Let&apos;s Connect</span>

          <h3 className="font-bold text-[#f5f0e8] text-lg sm:text-xl tracking-tight leading-tight mb-2">
            Interested in internships, full stack roles, and collaborative projects
          </h3>
          <p className="text-[#a89880] leading-[1.7] text-sm mb-6">
            If you&apos;re looking for a developer with backend strength and growing frontend confidence, feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ergauravkumar2005@gmail.com"
              className="btn-primary rounded-xl px-5 py-3 font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Me
            </a>
            <a
              href="https://github.com/ergauravk"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary rounded-xl px-5 py-3 font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      {/* Footer strip */}
      <div
        className={`mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          borderTop: '1px solid rgba(245,158,11,0.1)',
          transitionDelay: '0.4s',
        }}
      >
        <span className="text-[#a89880] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          © 2026 Gaurav Kumar
        </span>
        <div className="flex gap-4">
          {[
            { label: 'GitHub', href: 'https://github.com/ergauravk' },
            { label: 'LinkedIn', href: 'http://www.linkedin.com/in/gaurav-kumar-01b6a8234' },
            { label: 'Email', href: 'mailto:ergauravkumar2005@gmail.com' },
          ]?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              target={link?.href?.startsWith('http') ? '_blank' : undefined}
              rel={link?.href?.startsWith('http') ? 'noreferrer' : undefined}
              className="link-underline text-[#a89880] hover:text-[#f5f0e8] transition-colors duration-200 text-sm"
            >
              {link?.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
