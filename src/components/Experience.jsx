import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional journey in DevOps and cloud infrastructure
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-950 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="bg-slate-900 border-slate-800 hover:border-teal-500 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                            <Briefcase className="text-teal-400" size={24} />
                          </div>
                          <div>
                            <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                            <p className="text-teal-400 font-semibold">{job.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{job.description}</p>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start text-slate-400 text-sm">
                            <span className="text-teal-400 mr-2 mt-1">▹</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
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