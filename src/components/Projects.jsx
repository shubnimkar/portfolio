"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Cpu, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { projects } from '../mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Practical architectures designed for zero-downtime, scalable growth, and cost-efficient cloud resource management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden glass-card border-slate-800/80 hover:border-teal-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-950/20 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Cover */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Tech Badges overlaid in a row */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[90%]">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} className="bg-slate-950/80 backdrop-blur-md text-teal-400 border-teal-500/20 text-[10px] py-1 px-2.5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge className="bg-slate-950/80 backdrop-blur-md text-slate-300 border-slate-800 text-[10px] py-1 px-2">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Dark vignette gradient for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Highlights overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded">
                    🚀 DevOps Solution
                  </span>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Primary Metric Preview */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="p-3 bg-slate-950/30 rounded-xl border border-slate-800/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                      <TrendingUp size={16} />
                    </div>
                    <span className="text-xs text-slate-300 font-medium line-clamp-1">
                      {project.metrics[0]}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500">
                    ID: 0{project.id} // SECURE
                  </span>
                  <span className="text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details & Configs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Spec Sheet Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-slate-950/98 border border-slate-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-0">
          {selectedProject && (
            <>
              {/* Header Visual Bar */}
              <div className="h-2 bg-gradient-to-r from-teal-400 to-indigo-500"></div>
              
              <div className="p-6 sm:p-8 space-y-6">
                <DialogHeader className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 font-mono text-xs px-2.5">
                      Spec Sheet
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">build.status: stable</span>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-slate-400 text-sm leading-relaxed pt-1">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Banner Image */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                </div>

                {/* Info Spec Sheets Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Left Column: Project overview */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <Cpu size={16} className="text-teal-400" />
                      Infrastructure Specs
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Right Column: Performance KPIs */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <Award size={16} className="text-indigo-400" />
                      Operational KPIs
                    </h4>
                    <ul className="space-y-2.5 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                      {selectedProject.metrics.map((metric, index) => (
                        <li key={index} className="flex items-start text-slate-300 text-xs sm:text-sm">
                          <span className="text-teal-400 mr-2 flex-shrink-0 font-bold">✓</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Stack Tags */}
                <div className="space-y-2.5 pt-4 border-t border-slate-900">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">
                    Deployed Stack & Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-800 text-xs font-medium py-1 px-2.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-900">
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      className="border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/5 flex-1"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="mr-2" size={16} />
                      Source Repository
                    </Button>
                  )}
                  {selectedProject.demoUrl && (
                    <Button
                      className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold flex-1"
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Deployment
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;