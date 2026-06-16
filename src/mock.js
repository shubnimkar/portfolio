// Actual data for Shubham Nimkar DevOps Portfolio

export const profileData = {
  name: "Shubham Nimkar",
  title: "DevOps & Platform Reliability Engineer",
  location: "Pune, India",
  email: "nimkarshubham23@gmail.com",
  phone: "+91-7768827507",
  bio: "DevOps Engineer with 3+ years of end-to-end ownership across CI/CD pipeline engineering, cloud infrastructure, site reliability, and platform automation. Sole DevOps owner at a fast-scaling SaaS startup — managing 10 AWS accounts, 16 Jenkins pipelines, 22+ database clusters, and a self-built Internal Developer Platform. Daily user of AI/LLM tools to accelerate debugging, log analysis, and system engineering decisions.",
  avatar: "https://avatars.githubusercontent.com/u/46809421?v=4",
  resumeUrl: "https://drive.google.com/file/d/19vmNXKnVBMO5HrglDDlefzqBtDYmQvxn/view?usp=sharing",
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
    items: ["AWS EC2", "AWS VPC", "AWS IAM", "AWS S3", "AWS RDS", "AWS CloudWatch", "AWS SES", "AWS Secrets Manager", "AWS Route53"]
  },
  {
    category: "Container & Orchestration",
    items: ["Docker", "Docker Compose", "Kubernetes", "k3s (on-prem)", "Minikube", "EKS (Upskilling)"]
  },
  {
    category: "CI/CD & DevOps Tools",
    items: ["Jenkins (Declarative Pipelines)", "GitHub Actions", "Git / GitHub / Gitea", "SonarQube Quality Gates", "Nginx Reverse Proxy", "PM2"]
  },
  {
    category: "Infrastructure & Configuration",
    items: ["Ansible Playbooks", "Terraform (Upskilling)", "Linux Administration", "System Hardening", "On-Premise Deployments", "VAPT Coordination"]
  },
  {
    category: "Databases & Storage",
    items: ["MongoDB Atlas", "PostgreSQL", "MySQL", "NAS Archival", "EBS Transfer"]
  },
  {
    category: "AI & Platform Engineering",
    items: ["LLM-Assisted Debugging", "Log Analysis (LLM-powered)", "AWS Bedrock", "Generative AI", "Browser Automation (Playwright)", "Python", "Bash"]
  },
  {
    category: "SRE & Practices",
    items: ["Prometheus & Grafana Alerting", "Uptime & SSL Monitoring", "RCA Incident Workflows", "SLA & KPI Tracking", "Disaster Recovery (RTO/RPO)"]
  },
  {
    category: "Enterprise Collaboration",
    items: ["EY Contractor Consulting", "Workspace to Office365 Migration", "Security Hardening", "Intern Mentoring", "Agile & Jira"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Phabricator → Gitea Migration Automation",
    description: "Engineered two-phase browser automation scripting to scrape project metadata and replay-create repositories, tasks, and users on Gitea with zero data loss.",
    longDescription: "Led the migration of an organization's entire project history and version control structure from Phabricator to Gitea. Solved a technical gap where native tooling lacked project-level metadata support. Phase 1 used Playwright to scrape task structures, assignees, and projects. Phase 2 replay-created all equivalent assets on Gitea via APIs, enabling a fully traceable migration.",
    technologies: ["Playwright", "Node.js", "Gitea API", "Automation Scripting", "Git"],
    metrics: [
      "Zero manual data re-entry required",
      "Traceable migration of repositories and task histories",
      "Full validation of branch refs and project linkages"
    ],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar",
    demoUrl: null
  },
  {
    id: 2,
    title: "Internal Developer Platform (IDP)",
    description: "Self-designed and built a secure operational dashboard with deployment tracking, uptime checks, SSL monitoring, and AI-assisted log analysis.",
    longDescription: "Self-initiated and architected an Internal Developer Platform (IDP) from scratch. The platform serves as a central hub for deployment tracking, server uptime monitoring, automated SSL certificate checks, and wiki modules. Features a self-hosted LLM-powered module for automated log analysis and debugging, backed by RBAC authentication.",
    technologies: ["Docker", "Python", "MongoDB Atlas", "AWS", "Generative AI", "RBAC"],
    metrics: [
      "Fully self-hosted and Dockerized deployment",
      "AI-assisted log analysis reduced MTTR significantly",
      "Secure role-based access control (RBAC) admin console"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar/Infracore",
    demoUrl: null
  },
  {
    id: 3,
    title: "AWS AI for Bharat Hackathon Prototype",
    description: "Built a small-business financial assistant utilizing Amazon Bedrock generative AI, serverless Lambda workflows, and OCR text processing.",
    longDescription: "Designed and submitted a qualifying prototype for the AWS AI for Bharat Hackathon (AWS & Hack2skill). Features a serverless application that analyzes small business cash flows, extracts receipt details using OCR, and provides generative financial predictions via Amazon Bedrock.",
    technologies: ["AWS Bedrock", "AWS Lambda", "Serverless Architecture", "OCR", "Generative AI"],
    metrics: [
      "Qualifying hackathon submission prototype",
      "Certificate ID: 2026H2S04AIFB-P03057",
      "Serverless OCR and cashflow prediction pipeline"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/shubnimkar/vyapar-AI",
    demoUrl: null
  },
  {
    id: 4,
    title: "MongoDB Atlas & System Reliability Automation",
    description: "Automated custom backup verification, replication lag checks, and spike detection alerts for 22+ distributed database clusters.",
    longDescription: "Designed a backup and monitoring pipeline. Automates backup verification by running regular restore tests on 14 Atlas clusters, writes logs to localized NAS archives, monitors replication lag, and alerts on database CPU spikes across 22+ active database clusters (including on-prem replica sets).",
    technologies: ["Shell Scripting", "Python", "NAS", "Cron Jobs", "Prometheus", "Grafana"],
    metrics: [
      "14 Atlas clusters backed up with validation",
      "Restore tests automated periodically",
      "Spike detection alerting established for 22+ clusters"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
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
    description: "Serving as sole DevOps owner at a fast-scaling SaaS startup, managing 10 AWS accounts, 16 Jenkins pipelines, and over 22 database clusters.",
    responsibilities: [
      "Designed and implemented 16 Jenkins Declarative Pipelines, reducing release lead times by 60% with zero manual intervention",
      "Standardized organization-wide pipeline conventions, branching strategies, and added SonarQube & container scanning checks",
      "Led Phabricator to Gitea platform migration by engineering a custom two-phase browser automation script via Playwright",
      "Managed 10 AWS accounts (3 internal + 7 client) covering EC2, IAM, VPC, RDS, S3, Secrets Manager, and CloudWatch supporting 30+ instances",
      "Optimized AWS cloud infrastructure spend by 68% (from ₹50-60K to ₹16-17K monthly) via reserved instances and rightsizing",
      "Designed and executed cross-account migrations and built hybrid cloud infrastructure moving select services on-premise",
      "Defined SRE targets (RPO ~24h, RTO <=1h) and built full observability stack with Prometheus, Grafana, and CloudWatch alerts",
      "Self-initiated and built a secure Dockerized Internal Developer Platform (IDP) featuring LLM-powered log analysis modules",
      "Served as an external tech contractor for EY (Ernst & Young) consulting on application deployment and infrastructure choices",
      "Onboarded and mentored junior interns, and led complete Google Workspace to Microsoft 365 migration for 35 users (1.5 TB data)"
    ]
  },
  {
    id: 2,
    title: "Operations Associate",
    company: "Awign",
    location: "India",
    period: "Feb 2021 - May 2022",
    description: "Managed operations, field coordination, and workflow execution.",
    responsibilities: [
      "Coordinated cross-functional workflows and managed field operations",
      "Developed process management standards and operational discipline that laid the groundwork for transition to automation-first engineering"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "PG-Diploma in HPC & Systems Administration",
    institution: "C-DAC Pune",
    period: "Mar 2023 – Aug 2023",
    details: "Specialized in High Performance Computing networks, Linux system architecture, cluster setup, and shell automation scripts.",
    logo: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    degree: "B.E. — Electronics & Communications",
    institution: "Sinhgad Institute, Pune",
    period: "2016 – 2020",
    details: "Foundation in microprocessor architectures, embedded operating systems, computing networks, and electronics engineering.",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS AI for Bharat Hackathon Participant",
    issuer: "AWS & Hack2skill",
    date: "June 2026",
    credentialId: "2026H2S04AIFB-P03057",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "Verified ID",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "AWS Compute",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "Verified ID",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "Verified ID",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    name: "Wow Awards (2x) for Infrastructure Contribution",
    issuer: "Waybeyond",
    date: "2024",
    credentialId: "High-impact infrastructure delivery",
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