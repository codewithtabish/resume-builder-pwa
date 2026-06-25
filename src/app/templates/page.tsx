'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  previewColor: string;
}

const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional with bold accents',
    category: 'Professional',
    previewColor: 'bg-gradient-to-br from-blue-600 to-indigo-600',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout trusted by recruiters',
    category: 'Traditional',
    previewColor: 'bg-gradient-to-br from-slate-800 to-zinc-900',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with unique design',
    category: 'Creative',
    previewColor: 'bg-gradient-to-br from-purple-600 to-pink-600',
  },
];

// Super Realistic & Lengthy Preview Components
function TemplatePreview({ template }: { template: Template }) {
  const base = `w-full h-full max-w-[390px] rounded-2xl shadow-2xl overflow-hidden text-white ${template.previewColor} text-[9.5px] leading-tight`;

  switch (template.id) {
    case 'modern':
      return (
        <div className={`${base} p-6 flex flex-col h-full`}>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-white/30 pb-4">
            <div>
              <div className="text-3xl font-bold tracking-tighter">Alex Rivera</div>
              <div className="text-xl opacity-90">Senior Software Engineer</div>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">👤</div>
          </div>

          <div className="text-xs opacity-90 mt-3">San Francisco, CA • (555) 123-4567 • alex.rivera@email.com • linkedin.com/in/alexrivera</div>

          {/* Summary */}
          <div className="mt-5">
            <div className="uppercase text-[8px] tracking-widest opacity-75 mb-1">PROFESSIONAL SUMMARY</div>
            <div className="text-[9.5px] opacity-95">
              Passionate software engineer with 8+ years of experience building scalable web applications and leading high-performing teams. 
              Proven track record of delivering impactful solutions that drive business growth.
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6 flex-1">
            <div className="uppercase text-[8px] tracking-widest opacity-75 mb-2">EXPERIENCE</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-semibold">
                  <span>Senior Software Engineer</span>
                  <span>2023 – Present</span>
                </div>
                <div className="text-xs opacity-80">TechCorp • San Francisco</div>
                <ul className="text-[9px] mt-1 opacity-90 list-disc list-outside pl-4 space-y-0.5">
                  <li>Led a team of 12 engineers to rebuild the core platform serving 1.2M users</li>
                  <li>Reduced API latency by 65% through system optimization</li>
                  <li>Implemented CI/CD pipelines that improved deployment frequency by 400%</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-semibold">
                  <span>Software Engineer II</span>
                  <span>2021 – 2023</span>
                </div>
                <div className="text-xs opacity-80">InnovateLab • Remote</div>
                <ul className="text-[9px] mt-1 opacity-90 list-disc list-outside pl-4 space-y-0.5">
                  <li>Developed microservices architecture using Node.js and TypeScript</li>
                  <li>Mentored 5 junior developers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6 mt-4 pt-4 border-t border-white/30 text-[9px]">
            <div>
              <div className="uppercase opacity-75 mb-1">EDUCATION</div>
              <div>B.S. Computer Science</div>
              <div className="opacity-75">Stanford University • 2017</div>
            </div>
            <div>
              <div className="uppercase opacity-75 mb-1">SKILLS</div>
              <div>React • TypeScript • Next.js • Node.js • Python • AWS • PostgreSQL • Docker</div>
            </div>
          </div>
        </div>
      );

    case 'classic':
      return (
        <div className={`${base} font-serif p-7 flex flex-col h-full text-[9.3px]`}>
          <div className="text-center border-b-2 border-white/50 pb-4">
            <div className="text-3xl font-bold">ALEX RIVERA</div>
            <div className="mt-1">San Francisco, California • (555) 123-4567 • alex.rivera@email.com</div>
          </div>

          <div className="mt-5">
            <div className="uppercase tracking-widest text-[8px] opacity-75">PROFESSIONAL SUMMARY</div>
            <div className="mt-1 opacity-90">
              Accomplished software engineering professional with over eight years of experience in full-stack development, 
              system architecture, and team leadership.
            </div>
          </div>

          <div className="mt-6">
            <div className="uppercase tracking-widest text-[8px] opacity-75 mb-2">EXPERIENCE</div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">Senior Software Engineer</span>
                  <span>2023 – Present</span>
                </div>
                <div className="opacity-75">TechCorp, San Francisco</div>
                <div className="text-[9px] mt-1 opacity-90">
                  • Spearheaded development of customer-facing platform<br />
                  • Improved system performance by 70%<br />
                  • Mentored junior engineers
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">Software Engineer</span>
                  <span>2020 – 2023</span>
                </div>
                <div className="opacity-75">InnovateLab</div>
              </div>
            </div>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-8 text-[9px]">
            <div>
              <div className="uppercase opacity-75">EDUCATION</div>
              <div>Stanford University</div>
              <div className="opacity-75">B.S. Computer Science, 2017</div>
            </div>
            <div>
              <div className="uppercase opacity-75">SKILLS</div>
              <div>JavaScript, TypeScript, React, Node.js, Python, AWS, SQL, Git</div>
            </div>
          </div>
        </div>
      );

    case 'creative':
      return (
        <div className={`${base} p-6 relative h-full overflow-hidden`}>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          
          <div className="flex items-center gap-5 relative">
            <div className="w-20 h-20 bg-white/25 rounded-3xl -rotate-6 flex items-center justify-center text-5xl shadow-inner">👤</div>
            <div>
              <div className="text-4xl font-black tracking-[-2px]">ALEX RIVERA</div>
              <div className="text-pink-200 text-xl -mt-1">Creative Technologist & Engineer</div>
            </div>
          </div>

          <div className="mt-6 text-sm opacity-95 leading-snug">
            I design and build beautiful digital experiences that blend creativity with robust engineering.
          </div>

          <div className="mt-8">
            <div className="uppercase text-xs tracking-widest opacity-70 mb-3">Selected Experience</div>
            <div className="space-y-5 text-xs">
              <div className="bg-white/10 p-3 rounded-xl">
                <div className="font-medium">Senior Software Engineer — TechCorp (2023–Present)</div>
                <div className="opacity-80 mt-1">Led redesign of main product interface • Improved user engagement by 85%</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl">
                <div className="font-medium">Software Engineer — InnovateLab (2021–2023)</div>
                <div className="opacity-80 mt-1">Created award-winning interactive web experiences</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs opacity-80">
            <div>Stanford University • Class of 2017</div>
            <div>alex@rivera.studio</div>
          </div>
        </div>
      );

    default:
      return <div className={base}>Preview</div>;
  }
}

export default function TemplatesPage() {
  const handleSelectTemplate = (template: Template) => {
    console.log('Selected template:', template);
    alert(`Creating resume with "${template.name}" template...`);
  };

  const createBlank = () => alert('Creating blank resume...');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Choose a Template</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Pick a design and we'll build your resume instantly
            </p>
          </div>
          <Button onClick={createBlank} size="lg" className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Start Blank
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
              onClick={() => handleSelectTemplate(template)}
            >
              <CardContent className="p-0">
                <div className="h-115 bg-gray-100 flex items-center justify-center p-5">
                  <TemplatePreview template={template} />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-2xl">{template.name}</h3>
                      <p className="text-muted-foreground mt-1">{template.description}</p>
                    </div>
                    <Badge variant="secondary" className="mt-1">{template.category}</Badge>
                  </div>

                  <Button className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Use This Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}