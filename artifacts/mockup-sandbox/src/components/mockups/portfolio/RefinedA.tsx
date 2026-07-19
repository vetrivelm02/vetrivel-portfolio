import React from 'react';
import { Mail, Linkedin, CheckCircle2, ChevronRight, Briefcase, User, Terminal } from 'lucide-react';

export function RefinedA() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900 tracking-tight">Vetrivel Muthusamy</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-indigo-600 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Solution Architect opportunities
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-slate-500 tracking-wide mb-2">Vetrivel Muthusamy</h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Solution Architect & <br className="hidden md:block"/> Test Lead
              </h1>
            </div>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Specializing in Telecom OSS/BSS architecture, highly scalable REST APIs, and test automation. Building robust enterprise systems with modern Java, Spring Boot, and Kubernetes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="mailto:vetrivelm02@gmail.com" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors gap-2 shadow-sm shadow-indigo-200">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white text-slate-700 font-medium border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-[4/3] flex items-center justify-center shadow-sm">
            {/* Inline SVG Network Graphic */}
            <svg viewBox="0 0 400 300" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                </pattern>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#grid)" />
              
              <g stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4 4" fill="none">
                <path d="M100 80 L200 150 L320 100" />
                <path d="M200 150 L150 250" />
                <path d="M200 150 L280 220" />
                <path d="M100 80 L150 250" />
                <path d="M320 100 L280 220" />
              </g>
              
              <g fill="#f8fafc" stroke="#64748b" strokeWidth="3">
                <circle cx="100" cy="80" r="16" />
                <circle cx="200" cy="150" r="24" stroke="#4f46e5" strokeWidth="4" />
                <circle cx="320" cy="100" r="14" />
                <circle cx="150" cy="250" r="12" />
                <circle cx="280" cy="220" r="18" />
              </g>

              <g fill="#475569" className="text-xs font-mono">
                <text x="100" y="84" textAnchor="middle">API</text>
                <text x="200" y="154" textAnchor="middle" fill="#4f46e5" fontWeight="bold">K8s</text>
                <text x="320" y="104" textAnchor="middle">DB</text>
                <text x="150" y="254" textAnchor="middle">UI</text>
                <text x="280" y="224" textAnchor="middle">Msg</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tight">11+</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tight">40%</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Faster Cycles</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tight">630+</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Open APIs</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tight">3</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Certifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Expertise</h2>
            <p className="text-slate-600 max-w-2xl text-lg">Architecting scalable solutions and driving quality engineering in complex telecom environments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-500 p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Backend & APIs</h3>
              <ul className="space-y-3 mt-auto">
                {['Java 21/17', 'Spring Boot 3.3', 'REST APIs', 'Apache Kafka'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-500 p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Cloud & DevOps</h3>
              <ul className="space-y-3 mt-auto">
                {['Docker & Containers', 'Kubernetes (AWS EKS)', 'CI/CD Pipelines', 'AWS Ecosystem'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-500 p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Test Engineering</h3>
              <ul className="space-y-3 mt-auto">
                {['Selenium Grid', 'Modular Test Frameworks', '40% Cycle Reduction', 'Performance Testing'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience</h2>
            <p className="text-slate-600 max-w-2xl text-lg">Leading architecture and testing for enterprise-scale transformations.</p>
          </div>

          <div className="space-y-12">
            {/* Experience Item */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              <div className="md:grid md:grid-cols-4 gap-8 items-start relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] md:left-1/4 top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white md:-translate-x-1/2"></div>
                
                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right pr-12 pt-0.5">
                  <div className="text-lg font-bold text-slate-900">Capgemini</div>
                  <div className="text-slate-500 font-medium">Present</div>
                </div>
                
                <div className="md:col-span-3 bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">Solution Architect / Test Lead & Architect</h3>
                  <div className="text-indigo-600 font-medium mb-4 mt-1">Telecom OSS/BSS</div>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-3">
                      <ChevronRight className="w-5 h-5 shrink-0 text-indigo-400 mt-0.5" />
                      <span>Spearheaded the reduction of regression cycle automation by 40% through the implementation of a modular Java Selenium Grid framework.</span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-5 h-5 shrink-0 text-indigo-400 mt-0.5" />
                      <span>Led testing strategy and architecture for 630+ Open APIs, ensuring high reliability and performance across telecom services.</span>
                    </li>
                    <li className="flex gap-3">
                      <ChevronRight className="w-5 h-5 shrink-0 text-indigo-400 mt-0.5" />
                      <span>Architected scalable microservices using Java 17/21 and Spring Boot 3.3, deployed on AWS EKS clusters.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Earlier Experience placeholder */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              <div className="md:grid md:grid-cols-4 gap-8 items-start relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] md:left-1/4 top-1.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white md:-translate-x-1/2"></div>
                
                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right pr-12 pt-0.5">
                  <div className="text-lg font-bold text-slate-900">Previous Roles</div>
                  <div className="text-slate-500 font-medium">Past 11 Years</div>
                </div>
                
                <div className="md:col-span-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Senior Software Engineer & QA Lead</h3>
                  <p className="text-slate-600">
                    Extensive background progressing through engineering and testing leadership roles, consistently driving quality and architectural excellence in complex enterprise environments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications</h2>
            <p className="text-slate-600 text-lg">Industry-recognized credentials in Agile, Cloud, and Java.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-sm shadow-orange-200"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight mb-1">CSPO</h4>
                <div className="text-sm text-slate-500">Scrum Alliance</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-200"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight mb-1">AWS Certified</h4>
                <div className="text-sm text-slate-500">Cloud Practitioner</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-200"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight mb-1">Oracle OCWCD</h4>
                <div className="text-sm text-slate-500">Java Enterprise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to connect?</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              I'm always open to discussing new opportunities, architecture challenges, or how I can help your team build better systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:vetrivelm02@gmail.com" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors gap-3">
                <Mail className="w-5 h-5" />
                vetrivelm02@gmail.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-transparent text-white font-medium border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-colors gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <div className="font-bold text-2xl text-white tracking-tight mb-2">Vetrivel Muthusamy</div>
            <div className="text-slate-500 mb-6">Solution Architect & Test Lead</div>
            <div className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Vetrivel Muthusamy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
