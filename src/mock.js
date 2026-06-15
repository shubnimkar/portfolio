// Mock data for DevOps Portfolio

export const profileData = {
  name: "Shubham Nimkar",
  title: "DevOps Engineer",
  location: "Pune, India",
  email: "nimkarshubham23@gmail.com",
  phone: "+91-7768827507",
  bio: "DevOps Engineer with 2 years of hands-on experience designing scalable AWS infrastructure, automating CI/CD pipelines, and managing production-grade containerized environments. Focused on reliability, cost-efficient architecture, monitoring, and incident response.",
  avatar: "https://avatars.githubusercontent.com/u/46809421?v=4",
  resumeUrl: "https://customer-assets.emergentagent.com/job_1ed0b6ff-130e-4945-99df-6fd6ae3b2a30/artifacts/rdtha42w_Shubham_Nimkar_Devops_Engineer_Resume_December_2025.pdf",
  social: {
    github: "https://github.com/shubnimkar",
    linkedin: "https://www.linkedin.com/in/shubham-nimkar/",
    twitter: "https://medium.com/@shubnimkar",
    email: "mailto:nimkarshubham23@gmail.com"
  }
};

export const skills = [
  {
    category: "Cloud Platforms",
    items: ["AWS EC2", "AWS VPC", "AWS IAM", "AWS S3", "AWS RDS", "AWS CloudWatch"]
  },
  {
    category: "Container & Orchestration",
    items: ["Docker", "Docker Compose", "Kubernetes", "Minikube"]
  },
  {
    category: "CI/CD & DevOps Tools",
    items: ["Jenkins", "GitHub Actions", "Git", "Nginx", "PM2"]
  },
  {
    category: "Infrastructure & System Administration",
    items: ["Linux Administration", "System Hardening", "Networking", "On-Premise Deployments"]
  },
  {
    category: "Databases",
    items: ["MongoDB Atlas", "PostgreSQL", "MySQL"]
  },
  {
    category: "Automation & Scripting",
    items: ["Bash", "Python", "Cron Jobs", "Monitoring Scripts", "Log Rotation"]
  },
  {
    category: "DevOps Practices",
    items: ["Root Cause Analysis", "SRE Principles", "Agile", "Performance Optimization", "Incident Response"]
  },
  {
    category: "Additional Technologies",
    items: ["Hadoop", "HPC", "Supervisor", "Certbot SSL/TLS", "Docker Registry"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Production-Grade MERN Deployment on AWS",
    description: "Architected multi-service MERN deployment using Docker, Jenkins CI/CD, Nginx reverse proxy, and MongoDB Atlas with isolated staging/production workflows.",
    longDescription: "Built a complete production infrastructure for MERN stack applications on AWS. Implemented Docker multi-stage builds, Jenkins CI/CD pipelines reducing deployment time by 60%, Nginx reverse proxy with SSL/TLS, and managed 15+ containerized microservices with 99.9% uptime.",
    technologies: ["Docker", "Jenkins", "AWS", "Nginx", "MongoDB Atlas", "PM2"],
    metrics: [
      "60% reduction in deployment time",
      "99.9% uptime achieved",
      "20+ weekly zero-downtime releases"
    ],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar",
    demoUrl: null
  },
  {
    id: 2,
    title: "AWS Multi-Account Migration",
    description: "Executed seamless migration of 25+ production workloads across AWS accounts using AMIs, EBS snapshots, and automated DNS cutover.",
    longDescription: "Led a critical infrastructure migration project involving 25+ production workloads. Designed and executed a zero-downtime migration strategy using AWS AMIs, EBS snapshot mappings, automated DNS cutover, and comprehensive rollback procedures. Achieved zero data loss and maintained service availability throughout the migration.",
    technologies: ["AWS EC2", "AWS EBS", "AWS Route53", "Bash", "Python"],
    metrics: [
      "25+ workloads migrated",
      "Zero data loss achieved",
      "Zero downtime during migration"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar",
    demoUrl: null
  },
  {
    id: 3,
    title: "MongoDB Atlas Backup Automation",
    description: "Designed fully automated backup pipeline with NAS archival, encryption, retention policies, and validated 4-hour RTO in DR drills.",
    longDescription: "Implemented a comprehensive disaster recovery solution for MongoDB Atlas. Built automated backup pipelines with NAS archival, enforced encryption at rest and in transit, configured retention policies, and regularly tested disaster recovery procedures. Successfully validated 4-hour Recovery Time Objective in multiple DR drills.",
    technologies: ["MongoDB Atlas", "Bash", "Python", "AWS S3", "NAS", "Cron"],
    metrics: [
      "4-hour RTO validated",
      "100% backup success rate",
      "Automated daily backups with retention"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar",
    demoUrl: null
  },
  {
    id: 4,
    title: "On-Premise Infrastructure Deployment",
    description: "Built complete on-prem Dockerized stack with Nginx/SSL, NAS-based backup strategy, and hardened Linux environment for enterprise clients.",
    longDescription: "Delivered hardened on-premise infrastructure deployments for enterprise clients. Configured fully Dockerized services, implemented Nginx reverse proxy with SSL/TLS using Certbot, established NAS-based backup solutions, and applied comprehensive Linux system hardening. Ensured secure, reliable infrastructure meeting enterprise security standards.",
    technologies: ["Docker", "Nginx", "Certbot", "Linux", "NAS", "System Hardening"],
    metrics: [
      "Enterprise-grade security",
      "Fully automated deployments",
      "Zero security incidents"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar",
    demoUrl: null
  }
];

export const experience = [
  {
    id: 1,
    title: "DevOps Engineer",
    company: "Waybeyond",
    location: "Pune, India",
    period: "Feb 2024 - Present",
    description: "Building and managing production-grade AWS infrastructure and CI/CD pipelines for MERN stack applications.",
    responsibilities: [
      "Built end-to-end CI/CD pipelines using Jenkins, reducing deployment time by 60% and enabling 20+ weekly zero-downtime releases",
      "Deployed and managed 15+ containerized MERN microservices on AWS using Docker multi-stage builds, Docker Compose, and ECS-like patterns with 99.9% uptime",
      "Executed AWS multi-account migration for 25+ production workloads using AMIs, EBS snapshots, and DNS cutover with zero data loss",
      "Designed fully automated MongoDB Atlas backup pipeline with NAS archival, encryption, retention policies, and validated 4-hour RTO in DR drills",
      "Configured Nginx reverse proxy with SSL/TLS (Certbot), routing rules, and load balancing to handle high-traffic production workloads",
      "Automated cleanup, log rotation, system monitoring, and alerts using Bash/Python, cutting manual ops by 70%",
      "Led incident response & RCA for outages using CloudWatch metrics and logs, improving recovery speed and preventing recurrence",
      "Received 'Wow Awards' (2x) for high-impact infrastructure contributions"
    ]
  },
  {
    id: 2,
    title: "Operations Associate",
    company: "Awign",
    location: "Bangalore, India",
    period: "Feb 2021 - May 2022",
    description: "Managed operations and optimized workflows for a 300+ workforce.",
    responsibilities: [
      "Managed operations for 300+ workforce, implementing workflow optimizations improving efficiency by 35%",
      "Improved client satisfaction through SLA monitoring, performance tracking, and process redesign",
      "Coordinated cross-functional teams to ensure seamless project delivery",
      "Analyzed operational metrics and implemented data-driven improvements"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "Verified",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "AWS Compute",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "Verified",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "Verified",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "PG-Diploma in HPC & Systems Administration",
    issuer: "C-DAC Pune",
    date: "Aug 2023",
    credentialId: "Mar 2023 - Aug 2023",
    logo: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    name: "Wow Awards (2x)",
    issuer: "Waybeyond",
    date: "2024",
    credentialId: "High-impact contributions",
    logo: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "🚀 Deploying a MERN Stack App Using Docker & AWS Elastic Beanstalk",
    excerpt: "A comprehensive guide to deploying MERN applications using Docker containers and AWS Elastic Beanstalk for scalable, production-ready infrastructure.",
    date: "2024-08-01",
    readTime: "12 min read",
    category: "AWS & Docker",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    url: "https://medium.com/@shubnimkar/deploying-a-mern-stack-app-using-docker-aws-elastic-beanstalk-26ed303322d6"
  },
  {
    id: 2,
    title: "🚀 Blue-Green vs. Canary Deployment in Kubernetes",
    excerpt: "In-depth comparison of Blue-Green and Canary deployment strategies in Kubernetes to help you choose the right release strategy for your applications.",
    date: "2024-06-18",
    readTime: "10 min read",
    category: "Kubernetes",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
    url: "https://medium.com/@shubnimkar/blue-green-vs-canary-deployment-in-kubernetes-which-release-strategy-should-you-choose-0f7202f0e386"
  },
  {
    id: 3,
    title: "Mastering Nginx — Part 2: Caching, Security & Monitoring",
    excerpt: "Advanced Nginx configurations covering caching strategies, security hardening, and monitoring best practices for production environments.",
    date: "2024-03-18",
    readTime: "15 min read",
    category: "Nginx & Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    url: "https://medium.com/@shubnimkar/mastering-nginx-part-2-caching-security-monitoring-22170e2b2de9"
  },
  {
    id: 4,
    title: "Mastering Nginx — Part 1: Getting Started with Nginx",
    excerpt: "Complete beginner's guide to Nginx covering installation, basic configuration, reverse proxy setup, and load balancing fundamentals.",
    date: "2024-03-17",
    readTime: "12 min read",
    category: "Nginx",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    url: "https://medium.com/@shubnimkar/mastering-nginx-part-1-getting-started-with-nginx-92e37572cc92"
  },
  {
    id: 5,
    title: "Deploying PostgreSQL and PGAdmin Using Docker Compose",
    excerpt: "Step-by-step tutorial on deploying PostgreSQL database and PGAdmin web interface using Docker Compose for local development and testing.",
    date: "2024-07-18",
    readTime: "8 min read",
    category: "Docker & Databases",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    url: "https://medium.com/@shubnimkar/deploying-postgresql-and-pgadmin-using-docker-compose-c02c2f0fa8cf"
  },
  {
    id: 6,
    title: "Hands-On Kubernetes: Deploying a MongoDB and Express App on Minikube",
    excerpt: "Practical hands-on tutorial for deploying MongoDB and Express.js applications on Kubernetes using Minikube for local development.",
    date: "2024-06-11",
    readTime: "10 min read",
    category: "Kubernetes",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    url: "https://medium.com/@shubnimkar/hands-on-kubernetes-deploying-a-mongodb-and-express-app-on-minikube-6a11d536a8be"
  }
];