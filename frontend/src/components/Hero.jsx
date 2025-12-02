import React from 'react';
import { Github, Linkedin, Mail, FileDown, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../mock';

const Hero = () => {
  const handleDownloadResume = () => {
    if (profileData.resumeUrl) {
      window.open(profileData.resumeUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.log('Downloading resume...');
      alert('Resume download functionality - will be connected to backend');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-xl shadow-teal-500/20">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          {profileData.name}
        </h1>
        <p className="text-2xl sm:text-3xl text-teal-400 mb-6 font-medium">
          {profileData.title}
        </p>
        <p className="text-lg text-slate-400 mb-4">
          {profileData.location}
        </p>

        {/* Bio */}
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {profileData.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 transition-colors"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 transition-colors"
            onClick={handleDownloadResume}
          >
            <FileDown className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-teal-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-teal-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={profileData.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-teal-500 hover:text-white transition-colors"
            aria-label="Medium Blog"
          >
            <BookOpen size={20} />
          </a>
          <a
            href={profileData.social.email}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-teal-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;