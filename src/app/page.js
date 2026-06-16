import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden selection:bg-teal-500/30 selection:text-teal-200">
      {/* Dynamic Background Mesh & Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-[10%] -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-teal-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-float-slow"></div>
        <div className="absolute top-[40%] -right-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[140px] animate-float-medium"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[110px] animate-float-slow" style={{ animationDelay: '-5s' }}></div>
        
        {/* Subtle Tech Grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-[0.35]"></div>
        <div className="absolute inset-0 tech-dots opacity-[0.15]"></div>
        
        {/* Vignette to fade elements cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/30 to-[#030712]"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

