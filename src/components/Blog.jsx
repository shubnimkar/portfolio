"use client";

import React from 'react';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { blogPosts } from '../mock';

const Blog = () => {
  const handleReadMore = (post) => {
    if (post.url) {
      window.open(post.url, '_blank', 'noopener,noreferrer');
    } else {
      alert('This article will link to its full publication page.');
    }
  };

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/40 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Technical Writing</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Sharing guides, migration logs, and standard DevOps practices on Medium and technical publications.
          </p>
        </div>

        {/* Blog Posts Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl overflow-hidden glass-card border-slate-800/80 hover:border-teal-500/20 hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => handleReadMore(post)}
            >
              {/* Cover Image Frame */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550 ease-out"
                />
                
                {/* Topic category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-slate-950/90 backdrop-blur-md text-teal-400 border border-teal-500/20 text-[10px] font-semibold py-0.5 px-2.5">
                    {post.category}
                  </Badge>
                </div>

                {/* Medium branding badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-slate-950/90 backdrop-blur-md text-indigo-400 border border-indigo-500/20 text-[10px] font-mono py-0.5 px-2 flex items-center gap-1">
                    <BookOpen size={10} />
                    Medium
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
              </div>

              {/* Text detail metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2 font-display">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta details footer inside card */}
                <div className="space-y-3 pt-3 border-t border-slate-900">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-indigo-400" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-indigo-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/5 w-full flex items-center justify-between text-xs font-semibold py-1.5 px-2.5 h-auto rounded-lg group-hover/btn:bg-slate-900 border border-transparent hover:border-teal-500/10"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;