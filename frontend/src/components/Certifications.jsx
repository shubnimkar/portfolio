import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { certifications } from '../mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-all group"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-700 flex-shrink-0">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2 group-hover:text-teal-400 transition-colors">
                      {cert.name}
                    </CardTitle>
                    <p className="text-teal-400 text-sm font-medium">{cert.issuer}</p>
                  </div>
                  <Award className="text-slate-600 group-hover:text-teal-400 transition-colors" size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Issued: {cert.date}</p>
                    <p className="text-slate-500 text-xs font-mono">ID: {cert.credentialId}</p>
                  </div>
                  <Badge className="bg-teal-500/10 text-teal-300 border-teal-500/30 hover:bg-teal-500/20">
                    Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;