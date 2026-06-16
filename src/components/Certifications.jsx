"use client";

import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { certifications } from '../mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Credentials & Awards</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-2xl mx-auto">
            Certifications and technical recognition validated by cloud providers and engineering firms.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl glass-card border-slate-200 dark:border-slate-800/80 hover:border-teal-500/20 hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 group flex items-start gap-4 relative overflow-hidden"
            >
              {/* Highlight strip for verified credentials */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full flex items-center justify-center border-l border-b border-slate-200 dark:border-slate-800/20">
                <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400/80 translate-x-1.5 -translate-y-1.5" />
              </div>

              {/* Logo / Badge Frame */}
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex-shrink-0 flex items-center justify-center p-0.5 group-hover:border-teal-500/30 transition-colors duration-300">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Credential Data details */}
              <div className="flex-1 space-y-2.5 pr-4">
                <div className="space-y-0.5">
                  <h3 className="text-slate-900 dark:text-white text-base font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors font-display line-clamp-1">
                    {cert.name}
                  </h3>
                  <p className="text-teal-700 dark:text-teal-400 text-sm font-semibold">{cert.issuer}</p>
                </div>
                
                {/* ID and verification label */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-900">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 space-y-0.5">
                    <div>ISSUED: {cert.date}</div>
                    <div className="truncate max-w-[160px]">ID: {cert.credentialId}</div>
                  </div>

                  <Badge className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-mono py-0.5 px-2 rounded-md flex items-center gap-1">
                    <CheckCircle2 size={10} />
                    Verified
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;