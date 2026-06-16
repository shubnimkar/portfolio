"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Cpu, Award, FileCode, FolderOpen, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { projects } from '../mock';

const projectConfigs = {
  1: {
    filename: "gitea-migrate.js",
    language: "javascript",
    code: `// Playwright browser automation for Phabricator -> Gitea migration
const { chromium } = require('playwright');
const axios = require('axios');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Phase 1: Scrape Phabricator project task associations
  console.log('Logging in to Phabricator...');
  await page.goto('https://phabricator.internal/login/');
  await page.fill('#username', process.env.PHAB_USER);
  await page.fill('#password', process.env.PHAB_PASS);
  await page.click('#submit-btn');

  // Scraping tasks data...
  const tasks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.phui-object-item')).map(item => ({
      title: item.querySelector('.phui-link').innerText,
      status: item.querySelector('.status-badge').innerText,
      assignee: item.querySelector('.user-link')?.innerText
    }));
  });

  // Phase 2: Create Gitea repositories & replicate task boards
  for (const task of tasks) {
    await axios.post('https://gitea.internal/api/v1/repos/devops/migration/issues', {
      title: task.title,
      body: \`Migrated from Phabricator. Original status: \${task.status}\`,
      assignees: [task.assignee || 'unassigned']
    }, {
      headers: { 'Authorization': \`token \${process.env.GITEA_TOKEN}\` }
    });
  }
  
  await browser.close();
  console.log('Migration completed with zero data loss.');
})();`
  },
  2: {
    filename: "docker-compose.yml",
    language: "yaml",
    code: `# Production Docker-Compose for Internal Developer Platform
version: '3.8'

services:
  idp-dashboard:
    build:
      context: ./dashboard
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - MONGO_URI=mongodb+srv://admin:\${DB_PASS}@cluster0.mongodb.net/idp
      - LLM_API_KEY=\${LLM_KEY}
    restart: always
    depends_on:
      - db-cache

  db-cache:
    image: redis:7-alpine
    command: redis-server --requirepass \${REDIS_PASS}
    volumes:
      - redis_data:/data
    restart: always

  reverse-proxy:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro
    restart: always

volumes:
  redis_data:`
  },
  3: {
    filename: "lambda_handler.py",
    language: "python",
    code: `# AWS Lambda wrapper for Receipt OCR & Amazon Bedrock
import json
import boto3
import os

bedrock_client = boto3.client(service_name="bedrock-runtime", region_name="us-east-1")
textract_client = boto3.client("textract")

def handler(event, context):
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']
    
    # Run AWS Textract OCR to extract receipt logs
    response = textract_client.detect_document_text(
        Document={"S3Object": {"Bucket": bucket, "Name": key}}
    )
    
    extracted_text = ""
    for item in response["Blocks"]:
        if item["BlockType"] == "LINE":
            extracted_text += item["Text"] + "\\n"
            
    # Invoke Amazon Bedrock (Claude 3 Haiku) to predict cashflows
    prompt = f"Analyze receipt parameters and predict financial statements:\\n{extracted_text}"
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 500,
        "messages": [{"role": "user", "content": prompt}]
    })
    
    bedrock_response = bedrock_client.invoke_model(
        modelId="anthropic.claude-3-haiku-20240307-v1:0",
        contentType="application/json",
        accept="application/json",
        body=body
    )
    
    result = json.loads(bedrock_response.get("body").read())
    return {
        "statusCode": 200,
        "body": json.dumps({"prediction": result["content"][0]["text"]})
    }`
  },
  4: {
    filename: "backup-verify.sh",
    language: "bash",
    code: `#!/bin/bash
# MongoDB Atlas Backup Validation & Replication Lag verification
set -euo pipefail

BACKUP_DIR="/volume1/nas/db_backups"
LOG_FILE="/var/log/db_backup_verify.log"
ALERT_WEBHOOK="https://grafana.internal/api/alerts"

echo "[$(date)] Initiating database verification sequence..." >> "$LOG_FILE"

# Step 1: Check replication lag status
LAG_STATUS=$(mongosh --quiet --eval "rs.printSecondaryReplicationInfo()" | grep -oE "is [0-9]+ hours? behind") || true

if [[ -n "$LAG_STATUS" ]]; then
  LAG_HOURS=$(echo "$LAG_STATUS" | awk '{print $2}')
  if [ "$LAG_HOURS" -gt 1 ]; then
    echo "[ALERT] Replication lag exceeded 1 hour limit! Lag is $LAG_HOURS hrs."
    curl -X POST -H "Content-Type: application/json" -d '{"alert":"ReplicationLag","lag":'"$LAG_HOURS"'}' "$ALERT_WEBHOOK"
  fi
fi

# Step 2: Validate daily snapshot files are present in NAS storage
TODAY_SNAP="atlas_snap_$(date +%Y-%m-%d).tar.gz"

if [ ! -f "$BACKUP_DIR/$TODAY_SNAP" ]; then
  echo "[CRITICAL] Daily database backup snapshot $TODAY_SNAP is missing!" >> "$LOG_FILE"
  exit 1
fi

echo "[SUCCESS] Verify check completed. Local database status stable." >> "$LOG_FILE"`
  }
};

const highlightCode = (code, language) => {
  const lines = code.split('\n');
  return lines.map((line, idx) => {
    // 1. Escape HTML
    let html = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const placeholders = [];
    let placeholderCounter = 0;

    const addPlaceholder = (content, className) => {
      const id = `___PLACEHOLDER_${placeholderCounter++}___`;
      placeholders.push({
        id,
        content: `<span class="${className}">${content}</span>`
      });
      return id;
    };

    // 2. Extract comments
    if (language === 'yaml') {
      html = html.replace(/(#.*)$/g, (match) => addPlaceholder(match, 'code-comment'));
    } else if (language === 'javascript' || language === 'python' || language === 'bash') {
      html = html.replace(/(\/\/.*|#.*)$/g, (match) => addPlaceholder(match, 'code-comment'));
    }

    // 3. Extract strings
    if (language === 'yaml') {
      html = html.replace(/(["'].*?["'])/g, (match) => addPlaceholder(match, 'code-string'));
    } else {
      html = html.replace(/(["'`].*?["'`])/g, (match) => addPlaceholder(match, 'code-string'));
    }

    // 4. Highlight syntax
    if (language === 'yaml') {
      html = html.replace(/^(\s*)([\w-]+:)/g, '$1<span class="code-keyword">$2</span>');
      html = html.replace(/(:\s+)(\d+)(?=\s|$)/g, '$1<span class="code-number">$2</span>');
    } else {
      const keywords = ['const', 'let', 'var', 'await', 'async', 'require', 'import', 'from', 'def', 'if', 'else', 'for', 'return', 'function', 'class', 'set', 'elif', 'then', 'fi', 'exit', 'echo'];
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b(${kw})\\b`, 'g');
        html = html.replace(regex, '<span class="code-keyword">$1</span>');
      });

      // Numbers
      html = html.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');

      // Functions
      html = html.replace(/(\b\w+)(?=\()/g, '<span class="code-function">$1</span>');
    }

    // 5. Restore placeholders
    placeholders.forEach(({ id, content }) => {
      html = html.replace(id, content);
    });

    return (
      <div 
        key={idx} 
        className="font-mono text-[11px] leading-relaxed py-0.5 whitespace-pre min-h-[16px]" 
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('specs');

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712]/50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-2xl mx-auto">
            Practical architectures designed for zero-downtime, scalable growth, and cost-efficient cloud resource management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden glass-card border-slate-200 dark:border-slate-800/80 hover:border-teal-600/30 dark:hover:border-teal-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-950/20 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Cover */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Tech Badges overlaid in a row */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[90%]">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} className="bg-slate-950/80 backdrop-blur-md text-teal-600 dark:text-teal-400 border-teal-500/20 text-[10px] py-1 px-2.5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge className="bg-slate-950/80 backdrop-blur-md text-slate-350 dark:text-slate-300 border-slate-800 text-[10px] py-1 px-2">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Dark vignette gradient for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Highlights overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-mono text-teal-700 dark:text-teal-400 bg-teal-600/10 dark:bg-teal-500/10 border border-teal-600/20 dark:border-teal-500/20 px-2 py-0.5 rounded">
                    🚀 DevOps Solution
                  </span>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Primary Metric Preview */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="p-3 bg-slate-100 dark:bg-slate-950/30 rounded-xl border border-slate-200 dark:border-slate-800/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-600/10 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                      <TrendingUp size={16} />
                    </div>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-1">
                      {project.metrics[0]}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500">
                    ID: 0{project.id} // SECURE
                  </span>
                  <span className="text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details & Configs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Spec Sheet Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => { if (!open) setActiveTab('specs'); setSelectedProject(null); }}>
        <DialogContent className="bg-slate-950/98 border border-slate-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-0">
          {selectedProject && (
            <>
              {/* Header Visual Bar */}
              <div className="h-2 bg-gradient-to-r from-teal-400 to-indigo-500"></div>
              
              <div className="p-6 sm:p-8 space-y-6">
                <DialogHeader className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 font-mono text-xs px-2.5">
                      Spec Sheet
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">build.status: stable</span>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-slate-400 text-sm leading-relaxed pt-1">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Tabs bar */}
                <div className="flex border-b border-slate-900 select-none">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all ${
                      activeTab === 'specs'
                        ? 'border-teal-400 text-teal-400 bg-teal-500/5'
                        : 'border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    🚀 Specs & KPIs
                  </button>
                  <button
                    onClick={() => setActiveTab('configs')}
                    className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all ${
                      activeTab === 'configs'
                        ? 'border-teal-400 text-teal-400 bg-teal-500/5'
                        : 'border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    📂 Config Explorer
                  </button>
                </div>

                {activeTab === 'specs' ? (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Banner Image */}
                    <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden border border-slate-800">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    </div>

                    {/* Info Spec Sheets Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Left Column: Project overview */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 flex items-center gap-2 font-bold">
                          <Cpu size={14} className="text-teal-600 dark:text-teal-400" />
                          Infrastructure Specs
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      {/* Right Column: Performance KPIs */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 flex items-center gap-2 font-bold">
                          <Award size={14} className="text-indigo-600 dark:text-indigo-400" />
                          Operational KPIs
                        </h4>
                        <ul className="space-y-2 bg-slate-100 dark:bg-slate-900/30 p-4 rounded-xl border border-slate-200 dark:border-slate-900/80">
                          {selectedProject.metrics.map((metric, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                              <span className="text-teal-600 dark:text-teal-400 mr-2.5 font-bold">✓</span>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-12 border border-slate-900 rounded-xl overflow-hidden bg-slate-950/60 animate-in fade-in duration-300">
                    {/* Folder tree column */}
                    <div className="md:col-span-4 bg-slate-950/90 border-r border-slate-900 p-4 select-none text-[10px] font-mono space-y-3">
                      <div className="text-slate-500 font-bold uppercase tracking-wider text-[8px] pb-1.5 border-b border-slate-900">
                        Workspace Directory
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <FolderOpen size={12} className="text-teal-400" />
                        <span>project_root</span>
                      </div>
                      <div className="pl-3 space-y-2.5">
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <FolderOpen size={12} className="text-slate-600" />
                          <span>config/</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <FolderOpen size={12} className="text-slate-600" />
                          <span>scripts/</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-teal-400 font-bold pl-2 border-l border-teal-500/30">
                          <FileCode size={12} className="text-teal-400" />
                          <span>{projectConfigs[selectedProject.id]?.filename}</span>
                        </div>
                      </div>
                    </div>

                    {/* Code editor file viewer column */}
                    <div className="md:col-span-8 bg-[#020205] flex flex-col justify-between">
                      {/* Editor title bar */}
                      <div className="bg-slate-900/60 px-4 py-2 border-b border-slate-900 flex items-center justify-between select-none text-[9px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <FileCode size={11} className="text-teal-400" />
                          <span>{projectConfigs[selectedProject.id]?.filename}</span>
                        </div>
                        <span>UTF-8</span>
                      </div>
                      {/* Editor screen */}
                      <div className="p-4 overflow-x-auto max-h-[280px] overflow-y-auto bg-[#020205] scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                        {highlightCode(
                           projectConfigs[selectedProject.id]?.code || '', 
                           projectConfigs[selectedProject.id]?.language || 'javascript'
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Technical Stack Tags */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-900">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">
                    Deployed Stack & Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-850 text-xs font-medium py-1 px-2.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-900">
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      className="border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/5 flex-1"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="mr-2" size={16} />
                      Source Repository
                    </Button>
                  )}
                  {selectedProject.demoUrl && (
                    <Button
                      className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold flex-1"
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Deployment
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;