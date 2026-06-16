"use client";

import React from 'react';
import { Github, Linkedin, BookOpen, Mail, Heart, CheckCircle2 } from 'lucide-react';
import { profileData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: BookOpen, href: profileData.social.twitter, label: 'Medium Blog' },
    { icon: Mail, href: profileData.social.email, label: 'Email' }
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
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 mt-12 relative overflow-hidden">
      {/* Visual background divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white font-display">&lt;Shubham<span className="text-teal-400">.DevOps</span>/&gt;</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Designing reliable, automated, and cost-efficient cloud architectures. Always learning, building, and deploying.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-slate-200 text-xs font-mono uppercase tracking-widest font-semibold">Directory</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links & SRE Status */}
          <div className="space-y-4">
            <h4 className="text-slate-200 text-xs font-mono uppercase tracking-widest font-semibold">Status & Networks</h4>
            
            {/* Live Uptime Panel */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-400">All systems:</span>
              <span className="text-emerald-400 font-semibold uppercase">Operational</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Uptime: 99.99%</span>
            </div>

            <div className="flex gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/20 hover:bg-teal-950/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {currentYear} {profileData.name}. All permissions granted.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="text-teal-400 fill-teal-500/20" size={13} /> using Next.js & Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;