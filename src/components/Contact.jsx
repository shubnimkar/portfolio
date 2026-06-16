"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Terminal, ShieldAlert } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { profileData } from '../mock';

const ContactTerminal = () => {
  return (
    <div className="w-full font-mono text-xs sm:text-sm bg-slate-950/90 rounded-2xl border border-teal-500/20 shadow-2xl overflow-hidden">
      {/* Title Bar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        </div>
        <div className="text-slate-400 text-xs flex items-center gap-1.5">
          <Terminal size={12} className="text-teal-400" />
          ssh shubham@portfolio.dev
        </div>
        <div className="w-6"></div>
      </div>

      {/* Connection output screen */}
      <div className="p-5 sm:p-6 space-y-4 leading-relaxed text-slate-300">
        <div>
          <span className="text-teal-400">shubham@portfolio:~$</span> ssh client@shubham.dev -p 2222
        </div>
        <div className="text-slate-500">
          Connecting to shubham.dev (185.190.140.23:2222)...<br />
          Host authenticity verified. Exchanging SSH keys...<br />
          Connection established. Secure session active.
        </div>
        <div className="py-2 border-y border-slate-900 bg-slate-900/10 text-center text-teal-400 font-bold">
          *** SHUBHAM DEVOPS CONTROL CENTER ***
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-3">
            <span className="text-slate-500 flex-shrink-0 w-20">[EMAIL]</span>
            <a href={`mailto:${profileData.email}`} className="text-teal-300 hover:text-teal-400 hover:underline truncate">
              {profileData.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 flex-shrink-0 w-20">[PHONE]</span>
            <a href={`tel:${profileData.phone}`} className="text-teal-300 hover:text-teal-400 hover:underline">
              {profileData.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 flex-shrink-0 w-20">[LOCATION]</span>
            <span className="text-slate-300">{profileData.location}</span>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-900 flex items-center gap-2 text-slate-400">
          <ShieldAlert size={14} className="text-indigo-400 animate-pulse" />
          <span>Status: Idle & listening for secure messages...</span>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      toast({
        title: "Setup Required",
        description: "Please configure your NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment variables.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "DevOps Portfolio Contact Form"
        })
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error occurred",
        description: "Unable to send message. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Connect Console</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Establish a connection to discuss integration plans, infrastructure audits, or job opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* SSH Details Panel */}
          <div className="lg:col-span-2 space-y-6">
            <ContactTerminal />
            
            <div className="p-5 rounded-2xl glass-card border-slate-800/80 space-y-2">
              <h3 className="text-white text-sm font-bold font-display">Communication SLA</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Response SLA: <strong>24 hours</strong>.<br />
                All communication payloads are processed securely. I look forward to building together.
              </p>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border-slate-800/80 space-y-6">
              <h3 className="text-lg font-bold text-white font-display">Send a secure packet</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-slate-400">
                      Sender Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="bg-slate-950/60 border-slate-800 hover:border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-600 focus:ring-0 rounded-xl px-4 py-2.5 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-slate-400">
                      Reply Endpoint
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. email@company.com"
                      className="bg-slate-950/60 border-slate-800 hover:border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-600 focus:ring-0 rounded-xl px-4 py-2.5 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-slate-400">
                    Subject Header
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. DevOps System Deployment"
                    className="bg-slate-950/60 border-slate-800 hover:border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-600 focus:ring-0 rounded-xl px-4 py-2.5 transition-all duration-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-slate-400">
                    Message Body
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your architecture requirements, system specifications, or queries..."
                    rows={5}
                    className="bg-slate-950/60 border-slate-800 hover:border-slate-700 focus:border-teal-500 text-white placeholder:text-slate-600 focus:ring-0 rounded-xl p-4 transition-all duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-all duration-300 rounded-xl h-11"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Deploying Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Deploy Packet
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;