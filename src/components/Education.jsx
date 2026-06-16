"use client";

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { education } from '../mock';

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-2xl mx-auto">
            Academic foundations in systems administration, high-performance architectures, and systems engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl glass-card border-slate-200 dark:border-slate-800/80 hover:border-teal-500/20 hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 group flex items-start gap-4 relative overflow-hidden"
            >
              {/* Institutional Logo/Badge */}
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex-shrink-0 flex items-center justify-center p-0.5 group-hover:border-teal-500/30 transition-colors duration-300">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Course Info */}
              <div className="flex-1 space-y-2.5">
                <div className="space-y-0.5">
                  <h3 className="text-slate-900 dark:text-white text-base font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors font-display">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-700 dark:text-teal-400 text-sm font-semibold">{edu.institution}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar size={13} className="text-indigo-600 dark:text-indigo-400" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-900">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
