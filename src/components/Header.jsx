"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section for nav highlights
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'blog', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        isScrolled 
          ? 'top-0 md:top-4 px-0 md:px-4' 
          : 'top-0 px-0'
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? 'max-w-6xl md:rounded-full glass-navbar border border-teal-500/20 shadow-2xl shadow-teal-950/20 py-2.5 px-6' 
            : 'max-w-7xl bg-transparent border-b border-transparent py-4 px-4 sm:px-6 lg:px-8'
        } flex items-center justify-between`}
      >
        {/* Logo and SRE Status Badge */}
        <div className="flex items-center gap-4">
          <a 
            href="/" 
            className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-all group font-display"
          >
            <Terminal size={18} className="text-teal-600 dark:text-teal-400 group-hover:rotate-12 transition-transform" />
            <span>&lt;Shubham<span className="text-teal-600 dark:text-teal-400">.DevOps</span>/&gt;</span>
          </a>
          
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">SYSTEM: OPERATIONAL</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-600 dark:text-slate-400">LATENCY: 12ms</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-black/5 dark:hover:bg-white/5 ${
                  isActive 
                    ? 'text-teal-600 dark:text-teal-400 shadow-inner' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-teal-600/10 hover:bg-teal-600 hover:text-white dark:hover:text-slate-950 text-teal-700 dark:text-teal-400 border border-teal-600/30 dark:border-teal-500/30 rounded-full transition-all duration-300 font-medium px-5"
          >
            Connect
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl glass-card border border-teal-500/20 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-teal-500/10 text-teal-400 border-l-4 border-teal-400' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 bg-teal-400 rounded-full"></span>}
                </a>
              );
            })}
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold"
            >
              Get In Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;