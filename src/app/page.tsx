'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ThreeSceneBackground from '@/components/ThreeSceneBackground';


export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [mounted]);

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: `
          radial-gradient(ellipse at 80% 0%, rgba(245,158,11,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(251,146,60,0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(232,121,249,0.03) 0%, transparent 60%),
          #0e0c0a
        `,
        color: '#f5f0e8',
        fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif',
      }}
    >
      {/* 3D Background */}
      {mounted && <ThreeSceneBackground />}


      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)',
            top: '-250px',
            right: '-150px',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(251,146,60,0.05), transparent 70%)',
            bottom: '15%',
            left: '-150px',
            animation: 'float 13s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(232,121,249,0.04), transparent 70%)',
            top: '45%',
            left: '55%',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative z-10"
        style={{
          width: 'min(1180px, calc(100% - 32px))',
          margin: '0 auto',
          padding: '24px 0 56px',
        }}
      >
        <Navbar activeSection={activeSection} />

        <header className="py-3 pb-6">
          <HeroSection />
        </header>

        <main>
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
        boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
        color: '#0e0c0a',
      }}
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
