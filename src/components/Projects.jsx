"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { projects } from '../mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing real-world DevOps solutions that drive efficiency and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-all cursor-pointer group overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 p-0"
                >
                  View Details →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-teal-400">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-slate-400">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Project Overview</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                    <TrendingUp className="mr-2 text-teal-400" size={20} />
                    Key Metrics
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start text-slate-300">
                        <span className="text-teal-400 mr-2">•</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-teal-500/10 text-teal-300 border-teal-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      className="border-teal-500 text-teal-400 hover:bg-teal-500/10"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="mr-2" size={18} />
                      View Code
                    </Button>
                  )}
                  {selectedProject.demoUrl && (
                    <Button
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
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