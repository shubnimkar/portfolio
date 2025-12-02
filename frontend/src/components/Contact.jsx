import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { profileData } from '../mock';

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

    // Simulate form submission (will be connected to backend)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profileData.email,
      link: `mailto:${profileData.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profileData.phone,
      link: `tel:${profileData.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profileData.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps strategies? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-teal-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-slate-400 text-sm mb-1">{info.label}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-teal-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-3">Response Time</h3>
                <p className="text-slate-400 text-sm">
                  I typically respond within 24-48 hours. For urgent matters, please reach out via phone.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;