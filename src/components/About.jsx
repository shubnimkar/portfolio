"use client";

import React, { useState } from 'react';
import { GitBranch, Server, Cpu, Cloud, Activity, ChevronRight } from 'lucide-react';
import { profileData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  const [activeStage, setActiveStage] = useState(0);

  const pipelineStages = [
    {
      icon: GitBranch,
      title: 'Source',
      subtitle: 'Version Control',
      tools: ['Git', 'GitHub', 'GitLab'],
      description: 'Managing secure code repositories, structured branching workflows (GitFlow), pull requests, and automated trigger hooks for integration pipelines.',
      color: 'from-emerald-400 to-teal-500',
      shadowColor: 'rgba(16, 185, 129, 0.2)'
    },
    {
      icon: Server,
      title: 'Build',
      subtitle: 'Containerization',
      tools: ['Docker', 'Docker Compose', 'PM2', 'Hadoop', 'HPC'],
      description: 'Packaging applications into lightweight, isolated, multi-stage Docker containers. Setting up container registries and configuring supervisor processes.',
      color: 'from-blue-400 to-indigo-500',
      shadowColor: 'rgba(59, 130, 246, 0.2)'
    },
    {
      icon: Cpu,
      title: 'Test & CI',
      subtitle: 'Continuous Integration',
      tools: ['Jenkins', 'GitHub Actions', 'ESLint', 'Unit Testing'],
      description: 'Automating build pipelines that execute unit tests, security scans, code style audits, and package validation to guarantee production safety.',
      color: 'from-purple-400 to-pink-500',
      shadowColor: 'rgba(168, 85, 247, 0.2)'
    },
    {
      icon: Cloud,
      title: 'Deploy',
      subtitle: 'AWS & Web Hosting',
      tools: ['AWS EC2', 'AWS VPC', 'AWS S3', 'Nginx Reverse Proxy', 'Certbot SSL', 'Route53'],
      description: 'Architecting isolated network architectures (VPC/Subnets), managing secure IAM roles, routing with Route53, and configuring high-availability Nginx proxy servers.',
      color: 'from-amber-400 to-orange-500',
      shadowColor: 'rgba(245, 158, 11, 0.2)'
    },
    {
      icon: Activity,
      title: 'Monitor',
      subtitle: 'Observability & SRE',
      tools: ['AWS CloudWatch', 'Log Rotation', 'Cron Alerts', 'Bash Scripts'],
      description: 'Continuous monitoring of infrastructure health, setting up CloudWatch alarms, automations for log maintenance, and participating in rapid incident response cycles.',
      color: 'from-cyan-400 to-sky-500',
      shadowColor: 'rgba(34, 211, 238, 0.2)'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Bio & Journey Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-20">
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">
              My Engineering Philosophy
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I thrive on bridging the gap between software development and systems operations. With a focus on <strong>reliability</strong>, <strong>cost efficiency</strong>, and <strong>automation</strong>, I design infrastructure that allows developers to deploy with confidence and zero friction.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My hands-on experience at <span className="text-teal-400 font-semibold">Waybeyond</span> involves managing production clusters on AWS, automating deployments with Jenkins, and troubleshooting complex incidents. I believe in writing modular Infrastructure-as-Code and establishing robust monitoring to catch issues before they affect users.
            </p>
          </div>

          <div className="md:col-span-5 p-6 rounded-2xl glass-card border-slate-800">
            <h4 className="text-lg font-bold text-teal-400 mb-4 font-mono">
              shubham@waybeyond:~$ info
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-slate-400">
                <span className="text-indigo-400">Experience:</span> 2 Years (DevOps)
              </p>
              <p className="text-slate-400">
                <span className="text-indigo-400">Location:</span> Pune, India (Open to Remote)
              </p>
              <p className="text-slate-400">
                <span className="text-indigo-400">Primary Cloud:</span> AWS (EC2, VPC, S3, RDS)
              </p>
              <p className="text-slate-400">
                <span className="text-indigo-400">Core Tools:</span> Docker, Jenkins, Nginx
              </p>
              <p className="text-slate-400">
                <span className="text-indigo-400">Uptime:</span> 99.9% Personal Availability
              </p>
            </div>
          </div>
        </div>

        {/* Pipeline Title */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2 font-display">
            Interactive DevOps Lifecycle
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Click on any phase below to explore my workflow, automation processes, and technical stack.
          </p>
        </div>

        {/* Pipeline Flowchart Visualizer */}
        <div className="space-y-8">
          {/* Timeline Nodes */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 px-4 py-6 bg-slate-950/40 rounded-2xl border border-slate-800/80">
            {pipelineStages.map((stage, index) => {
              const StageIcon = stage.icon;
              const isSelected = activeStage === index;
              return (
                <React.Fragment key={index}>
                  {/* Stage Node */}
                  <button
                    onClick={() => setActiveStage(index)}
                    className={`group flex flex-col items-center p-3 rounded-xl transition-all duration-300 w-full md:w-36 text-center focus:outline-none ${
                      isSelected 
                        ? 'bg-slate-900 border border-teal-500/30 shadow-lg' 
                        : 'border border-transparent hover:bg-slate-900/40'
                    }`}
                    style={{
                      boxShadow: isSelected ? `0 4px 20px -5px ${stage.shadowColor}` : 'none'
                    }}
                  >
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${
                        isSelected 
                          ? `bg-gradient-to-br ${stage.color} text-slate-950 scale-110 shadow-md` 
                          : 'bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-slate-700'
                      }`}
                    >
                      <StageIcon size={22} />
                    </div>
                    <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                      isSelected ? 'text-teal-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {stage.title}
                    </span>
                    <span className="text-[10px] text-slate-500 hidden md:block">
                      {stage.subtitle}
                    </span>
                  </button>

                  {/* Connect Line (hidden on last item and mobile) */}
                  {index < pipelineStages.length - 1 && (
                    <div className="hidden md:flex items-center text-slate-700 flex-1 justify-center">
                      <ChevronRight size={18} className={`animate-pulse ${isSelected ? 'text-teal-400/50' : ''}`} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Selected Stage Detail Card */}
          <div className="transition-all duration-500">
            <Card className="bg-slate-900/60 border border-slate-800 shadow-xl overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${pipelineStages[activeStage].color}`}></div>
              <CardContent className="p-6 sm:p-8">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Detailed Description */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md">
                        Phase 0{activeStage + 1}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {pipelineStages[activeStage].title} Stage
                      </h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {pipelineStages[activeStage].description}
                    </p>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="md:col-span-4 p-5 bg-slate-950/40 rounded-xl border border-slate-800/80 space-y-3">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-500">
                      Tools & Technologies
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {pipelineStages[activeStage].tools.map((tool, idx) => (
                        <Badge 
                          key={idx} 
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 text-xs font-medium py-1 px-2.5"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;