"use client";

import React from 'react';
import { Badge } from './ui/badge';
import { skills } from '../mock';
import { Cloud, Server, RefreshCw, Cpu, Database, Play, BarChart, Settings } from 'lucide-react';

const Skills = () => {
  // Map indices to styling themes (colors & icons) to differentiate categories visually
  const getCategoryTheme = (category) => {
    const name = category.toLowerCase();
    if (name.includes('cloud')) {
      return {
        icon: Cloud,
        accentClass: 'text-cyan-400',
        bgClass: 'bg-cyan-500/10',
        borderClass: 'hover:border-cyan-500/40',
        glowClass: 'hover:shadow-cyan-950/20'
      };
    }
    if (name.includes('container')) {
      return {
        icon: Server,
        accentClass: 'text-blue-400',
        bgClass: 'bg-blue-500/10',
        borderClass: 'hover:border-blue-500/40',
        glowClass: 'hover:shadow-blue-950/20'
      };
    }
    if (name.includes('ci/cd')) {
      return {
        icon: RefreshCw,
        accentClass: 'text-teal-400',
        bgClass: 'bg-teal-500/10',
        borderClass: 'hover:border-teal-500/40',
        glowClass: 'hover:shadow-teal-950/20'
      };
    }
    if (name.includes('infrastructure') || name.includes('system')) {
      return {
        icon: Cpu,
        accentClass: 'text-indigo-400',
        bgClass: 'bg-indigo-500/10',
        borderClass: 'hover:border-indigo-500/40',
        glowClass: 'hover:shadow-indigo-950/20'
      };
    }
    if (name.includes('database')) {
      return {
        icon: Database,
        accentClass: 'text-purple-400',
        bgClass: 'bg-purple-500/10',
        borderClass: 'hover:border-purple-500/40',
        glowClass: 'hover:shadow-purple-950/20'
      };
    }
    if (name.includes('automation') || name.includes('scripting')) {
      return {
        icon: Play,
        accentClass: 'text-amber-400',
        bgClass: 'bg-amber-500/10',
        borderClass: 'hover:border-amber-500/40',
        glowClass: 'hover:shadow-amber-950/20'
      };
    }
    if (name.includes('practices')) {
      return {
        icon: BarChart,
        accentClass: 'text-rose-400',
        bgClass: 'bg-rose-500/10',
        borderClass: 'hover:border-rose-500/40',
        glowClass: 'hover:shadow-rose-950/20'
      };
    }
    return {
      icon: Settings,
      accentClass: 'text-slate-400',
      bgClass: 'bg-slate-500/10',
      borderClass: 'hover:border-slate-500/40',
      glowClass: 'hover:shadow-slate-950/20'
    };
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/40 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Technical Stack</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            A specialized toolkit focused on cloud automation, pipeline speed, security, and high reliability systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const theme = getCategoryTheme(skillGroup.category);
            const IconComponent = theme.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl glass-card border-slate-800/80 transition-all duration-300 hover:shadow-xl ${theme.borderClass} ${theme.glowClass} flex flex-col justify-between group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${theme.bgClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className={`${theme.accentClass}`} size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white font-display">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skill Badge Items */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-slate-950/60 hover:bg-slate-900 text-slate-300 border-slate-800/80 hover:text-white hover:border-slate-700 transition-all duration-300 text-xs py-1.5 px-3 rounded-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;