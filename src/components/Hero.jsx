"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileDown, Terminal, CheckCircle2, AlertCircle, Play } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../mock';

const colorizeOutput = (text) => {
  if (text.startsWith('{')) {
    try {
      const parsed = JSON.parse(text);
      return (
        <span className="text-indigo-400 block font-normal">
          {'{'}
          {Object.entries(parsed).map(([key, val], idx, arr) => (
            <span key={key} className="block pl-4">
              <span className="text-indigo-400">"{key}"</span>: <span className="text-teal-300">"{val}"</span>
              {idx < arr.length - 1 ? ',' : ''}
            </span>
          ))}
          {'}'}
        </span>
      );
    } catch (e) {
      return text;
    }
  }

  const lines = text.split('\n');
  return lines.map((line, index) => {
    let coloredLine = <span className="text-slate-300">{line}</span>;
    if (line.includes('[OK]')) {
      const parts = line.split('[OK]');
      coloredLine = (
        <span>
          <span className="text-slate-300">{parts[0]}</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 py-0.5 rounded text-[10px]">OK</span>
        </span>
      );
    } else if (line.includes('Done')) {
      const parts = line.split('Done');
      coloredLine = (
        <span>
          <span className="text-slate-300">{parts[0]}</span>
          <span className="text-emerald-400 font-semibold">Done</span>
        </span>
      );
    } else if (line.includes('Apply complete!')) {
      coloredLine = <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded block">{line}</span>;
    } else if (line.includes('Container status:')) {
      const parts = line.split('Running');
      coloredLine = (
        <span>
          <span className="text-slate-300">{parts[0]}</span>
          <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-1 py-0.5 rounded">Running</span>
          <span className="text-slate-300">{parts[1]}</span>
        </span>
      );
    }
    return (
      <div key={index} className="py-0.5 text-slate-300">
        {coloredLine}
      </div>
    );
  });
};

const TerminalMock = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { type: 'input', text: 'whoami' },
    { type: 'output', text: `${profileData.name} | ${profileData.title} | ${profileData.location}` },
    { type: 'input', text: 'cat bio.txt' },
    { type: 'output', text: profileData.bio },
    { type: 'input', text: 'terraform init && terraform apply -auto-approve' },
    { type: 'output', text: 'Initializing AWS Provider... [OK]\nCreating Virtual Private Cloud (VPC)... [OK]\nProvisioning ECS Fargate Clusters... [OK]\nConfiguring Route53 DNS & SSL... [OK]\nApply complete! Resources: 14 added, 0 destroyed.' },
    { type: 'input', text: 'docker-compose up -d --build' },
    { type: 'output', text: 'Building portfolio-frontend... Done\nBuilding portfolio-backend... Done\nStarting nginx-reverse-proxy... Done\nContainer status: Running [Uptime 99.99%]' },
    { type: 'input', text: 'curl -s https://api.shubham.dev/health' },
    { type: 'output', text: '{"status":"UP","database":"CONNECTED","redis":"HEALTHY","latency":"12ms"}' }
  ];

  useEffect(() => {
    if (currentStep >= steps.length) {
      const timer = setTimeout(() => {
        setTerminalLines([]);
        setCurrentStep(0);
      }, 5000);
      return () => clearTimeout(timer);
    }

    const currentItem = steps[currentStep];
    let timer;

    if (currentItem.type === 'input') {
      let charIndex = 0;
      let typedText = '';
      
      setTerminalLines(prev => [...prev, { type: 'input', text: '' }]);

      const type = () => {
        if (charIndex < currentItem.text.length) {
          typedText += currentItem.text[charIndex];
          setTerminalLines(prev => {
            const next = [...prev];
            next[next.length - 1] = { type: 'input', text: typedText };
            return next;
          });
          charIndex++;
          timer = setTimeout(type, 30);
        } else {
          timer = setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 300);
        }
      };
      
      timer = setTimeout(type, 150);
    } else {
      timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, { type: 'output', text: currentItem.text }]);
        setCurrentStep(prev => prev + 1);
      }, 250);
    }

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="w-full font-mono text-xs bg-slate-950/85 rounded-2xl border border-teal-500/20 shadow-2xl shadow-teal-500/5 overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
        </div>
        <div className="text-slate-400 text-xs flex items-center gap-1.5 font-medium select-none">
          <Terminal size={12} className="text-teal-400" />
          shubham@portfolio:~
        </div>
        <div className="w-12"></div>
      </div>

      {/* Terminal Content Screen */}
      <div className="p-4 sm:p-5 h-[340px] overflow-y-auto space-y-2.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        <div className="text-slate-500 text-[10px] border-b border-slate-900 pb-1.5 font-mono select-none">
          Last login: {new Date().toDateString()} on ttys001
        </div>
        
        {terminalLines.map((line, index) => (
          <div key={index} className="leading-relaxed whitespace-pre-wrap">
            {line.type === 'input' ? (
              <div className="flex items-start text-teal-400 font-semibold">
                <span className="text-slate-500 mr-2 flex-shrink-0 select-none">shubham@portfolio:~$</span>
                <span className="text-teal-300">{line.text}</span>
                {index === terminalLines.length - 1 && (
                  <span className="w-1.5 h-4 bg-teal-400 ml-1 inline-block animate-terminal-blink flex-shrink-0"></span>
                )}
              </div>
            ) : (
              <div className="text-slate-300 pl-3 border-l border-slate-800/80 bg-slate-900/10 py-0.5 font-normal">
                {colorizeOutput(line.text)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const handleDownloadResume = () => {
    if (profileData.resumeUrl) {
      window.open(profileData.resumeUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert('Resume download is currently processing. Please try again later.');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Content Grid */}
      <div className="relative max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Info Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            Open to DevOps & Platform Roles
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-400 dark:to-indigo-400">{profileData.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300 font-display">
              Building Scalable Cloud Infrastructure
            </h2>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {profileData.bio}
          </p>

          {/* Ops Dashboard Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { label: 'Cloud Savings', val: '68%', desc: 'AWS Rightsizing', color: 'from-amber-600 to-orange-700 dark:from-amber-400 dark:to-orange-500' },
              { label: 'Pipelines Configured', val: '16', desc: 'Jenkins & GHA', color: 'from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400' },
              { label: 'DB Clusters Managed', val: '22+', desc: 'Atlas, PG, MySQL', color: 'from-purple-600 to-pink-700 dark:from-purple-400 dark:to-pink-500' },
              { label: 'SRE Target Uptime', val: '99.99%', desc: 'RCA & SLA Tracks', color: 'from-cyan-600 to-sky-700 dark:from-cyan-400 dark:to-sky-500' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/60 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <span className={`text-2xl font-extrabold font-display bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {stat.val}
                </span>
                <div className="space-y-0.5 mt-2">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">{stat.label}</div>
                  <div className="text-[9px] text-slate-500 font-mono">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 text-slate-950 font-bold transition-all duration-300 rounded-xl"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-500/5 transition-all duration-300 rounded-xl"
              onClick={handleDownloadResume}
            >
              <FileDown className="mr-2" size={18} />
              Download Resume
            </Button>
          </div>

          {/* Social Connects */}
          <div className="flex items-center gap-3 pt-4">
            <span className="text-slate-500 text-xs font-mono uppercase tracking-widest mr-2 select-none">Connect:</span>
            {[
              { icon: Github, href: profileData.social.github, label: 'GitHub' },
              { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: profileData.social.email, label: 'Email' }
            ].map((soc, index) => {
              const Icon = soc.icon;
              return (
                <a
                  key={index}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-950/30 transition-all duration-300"
                  aria-label={soc.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Interactive Terminal Column */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <TerminalMock />
        </div>

      </div>
    </section>
  );
};

export default Hero;