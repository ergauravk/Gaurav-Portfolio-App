'use client';

import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const resumeHref = '/assets/Gaurav%20Resume.pdf';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`mb-10 rounded-2xl transition-all duration-500 ${
        scrolled ? 'glass-card' : 'bg-transparent border border-transparent'
      } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      style={{ transitionDelay: '0.1s' }}
    >
      <div className="flex justify-between items-center gap-5 py-3 px-5">
        {/* Brand */}
        <a
          href="#home"
          className="relative flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm flex-shrink-0 hover:scale-110 transition-transform duration-300 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
            color: '#0e0c0a',
            letterSpacing: '0.06em',
            boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
          }}
        >
          GK
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex flex-wrap justify-end gap-1">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive ? 'text-[#0e0c0a]' : 'text-[#a89880] hover:text-[#f5f0e8]'
                }`}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #f59e0b, #fb923c)' : 'transparent',
                  transitionDelay: `${i * 0.04}s`,
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            download
            className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-[#0e0c0a]"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-all duration-200 hover:bg-[rgba(245,158,11,0.1)]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300"
            style={{
              background: '#f59e0b',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300"
            style={{
              background: '#f59e0b',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300"
            style={{
              background: '#f59e0b',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive ? 'text-[#0e0c0a]' : 'text-[#a89880] hover:text-[#f5f0e8]'
                }`}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, #f59e0b, #fb923c)'
                    : 'rgba(245,158,11,0.05)',
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            download
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 text-[#0e0c0a]"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
