import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { blogPosts } from '../mock';

const Blog = () => {
  const handleReadMore = (post) => {
    if (post.url) {
      window.open(post.url, '_blank', 'noopener,noreferrer');
    } else {
      console.log('Reading post:', post.id);
      alert('Blog post details - will be connected to backend');
    }
  };

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sharing insights and learnings from the DevOps trenches
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-slate-900 border-slate-800 hover:border-teal-500 transition-all group overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-teal-500 text-white">{post.category}</Badge>
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-white text-lg group-hover:text-teal-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 p-0 group/btn"
                  onClick={() => handleReadMore(post)}
                >
                  Read More
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;