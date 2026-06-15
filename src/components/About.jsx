import React from 'react';
import { Code2, Server, Cloud, GitBranch } from 'lucide-react';
import { profileData } from '../mock';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Expert in designing and managing multi-cloud infrastructure across AWS, Azure, and GCP'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Proficient in Kubernetes, Docker, and building scalable containerized applications'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Automation',
      description: 'Specialized in building robust pipelines with Jenkins, GitLab CI, and GitHub Actions'
    },
    {
      icon: Code2,
      title: 'Infrastructure as Code',
      description: 'Extensive experience with Terraform, Ansible, and automated infrastructure provisioning'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {profileData.bio}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I thrive on solving complex infrastructure challenges and optimizing deployment workflows. 
              My approach combines technical expertise with a deep understanding of business needs to deliver 
              solutions that drive efficiency and reliability.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not automating deployments or optimizing cloud costs, you can find me contributing 
              to open-source projects, writing technical blogs, or experimenting with emerging DevOps technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-500 transition-all hover:shadow-lg hover:shadow-teal-500/10"
                >
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-teal-400" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;