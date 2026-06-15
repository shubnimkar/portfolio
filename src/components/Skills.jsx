import React from 'react';
import { Badge } from './ui/badge';
import { skills } from '../mock';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building and managing modern cloud infrastructure
          </p>
        </div>

        <div className="grid gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-teal-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-slate-800 text-slate-200 hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500 border border-slate-700 px-4 py-2 text-sm transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;