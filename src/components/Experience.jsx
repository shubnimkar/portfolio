"use client";

import React from 'react';
import { Briefcase, MapPin, Calendar, CheckSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/40 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Work History</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-2xl mx-auto">
            Professional journey scaling infrastructures, tuning performance, and establishing stable operational practices.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line with Gradient Glow */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 via-indigo-500 to-slate-900 shadow-[0_0_10px_rgba(20,184,166,0.1)]"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Pulsing Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 justify-center items-center z-10">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400/20 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-600 dark:bg-teal-400 border-2 border-slate-100 dark:border-slate-950"></span>
                </div>

                {/* Content block representing 50% width on md+ */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="rounded-2xl glass-card border-slate-200 dark:border-slate-800/80 p-6 shadow-xl transition-all duration-300 hover:border-teal-500/20 hover:shadow-2xl hover:shadow-teal-950/10 group relative">
                    
                    {/* Glowing highlight strip on top-left */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-500 to-indigo-500 rounded-l-2xl opacity-80"></div>
                    
                    <div className="pl-3 space-y-4">
                      {/* Job title and Meta info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-900">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                            <Briefcase size={20} />
                          </div>
                          <div>
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-display">{job.title}</h3>
                            <p className="text-teal-700 dark:text-teal-400 text-sm font-semibold">{job.company}</p>
                          </div>
                        </div>

                        {/* KPI Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {job.id === 1 ? (
                            <>
                              <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md select-none">
                                AWS COST: -68%
                              </span>
                              <span className="text-[9px] font-mono font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-md select-none">
                                PIPELINE SPEED: +60%
                              </span>
                            </>
                          ) : (
                            <span className="text-[9px] font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md select-none">
                              OPS EFFICIENCY
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Period & Location badges */}
                      <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950/40 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-900">
                          <Calendar size={13} className="text-indigo-600 dark:text-indigo-400" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950/40 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-900">
                          <MapPin size={13} className="text-indigo-600 dark:text-indigo-400" />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      {/* Brief description */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
                        {job.description}
                      </p>

                      {/* Responsibilities lists */}
                      <div className="space-y-2.5 pt-2">
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold">
                          Core Contributions
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, i) => (
                            <li 
                              key={i} 
                              className="flex items-start text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed group/item transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-200"
                            >
                              <span className="text-teal-600 dark:text-teal-400 mr-2.5 mt-1 text-[10px] font-bold select-none group-hover/item:scale-125 transition-transform">▹</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;