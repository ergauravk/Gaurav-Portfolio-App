module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#0e0c0a',
        'bg-soft': '#161310',
        'panel': 'rgba(22,19,16,0.85)',
        'panel-border': 'rgba(251,191,36,0.15)',
        'text-main': '#f5f0e8',
        'text-muted': '#a89880',
        'accent': '#f59e0b',
        'accent2': '#fb923c',
        'accent3': '#e879f9',
        primary: {
          light: '#fcd34d',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
        secondary: {
          light: '#fed7aa',
          DEFAULT: '#fb923c',
          dark: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-14px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,158,11,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(245,158,11,0.5), 0 0 80px rgba(251,146,60,0.25)' },
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(70px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(70px) rotate(-360deg)' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        waveIn: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        tiltIn: {
          '0%': { opacity: '0', transform: 'perspective(600px) rotateX(12deg) translateY(30px)' },
          '100%': { opacity: '1', transform: 'perspective(600px) rotateX(0deg) translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-left': 'fadeInLeft 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
        'glow': 'glow 2.5s ease-in-out infinite',
        'wave-in': 'waveIn 0.8s ease-out forwards',
        'marquee': 'marquee 22s linear infinite',
        'pulse-ring': 'pulseRing 1.8s ease-out infinite',
        'tilt-in': 'tiltIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'orbit': 'orbit 5s linear infinite',
      },
      backdropBlur: {
        '14': '14px',
        '20': '20px',
      },
    },
  },
  plugins: [],
};
