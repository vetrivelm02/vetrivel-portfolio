import React from 'react';
import { Mail, Linkedin, Briefcase, GraduationCap, Server, Layout, Cloud, CheckCircle, Smartphone } from 'lucide-react';

export function CleanProfessional() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Inter'] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight text-slate-900">
            Vetrivel Muthusamy
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('expertise')} className="hover:text-indigo-600 transition-colors">Expertise</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-indigo-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Solution Architect opportunities
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Solution Architect & <br className="hidden lg:block"/> Test Lead.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                11+ years engineering scalable enterprise systems and automated test architectures in the Telecom OSS/BSS domain.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="mailto:vetrivelm02@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow">
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden bg-slate-50 aspect-square md:aspect-[4/3] border border-slate-200 shadow-sm">
            <img 
              src="/__mockup/images/network-nodes.jpg" 
              alt="Abstract network nodes" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Expertise / Skills */}
      <section id="expertise" className="py-24 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Core Expertise</h2>
            <p className="text-slate-600 text-lg">
              A comprehensive technical foundation spanning architecture, backend development, modern frontend, and quality engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Domain */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Telecom OSS/BSS</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Network Topologies & NMS/EMS</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> TM Forum standards</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> eTOM, TAM, SID</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> 630+ Open APIs Integration</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Backend Systems</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Java 21 / 17</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Spring Boot 3.3</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> REST API Architecture</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Kafka Streams</li>
              </ul>
            </div>

            {/* Cloud */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Cloud & Infrastructure</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Docker Containerization</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Kubernetes Orchestration</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> AWS EKS Deployments</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> CI/CD Pipeline Integration</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Modern Frontend</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> TypeScript</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> React 18 / 19</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Tailwind CSS</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Responsive UI Design</li>
              </ul>
            </div>

            {/* QA */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Quality Assurance</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Modular Java Selenium Grid</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Framework Architecture</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Test Automation Strategies</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                Professional Experience
              </h2>
            </div>

            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-2.5 before:w-px before:bg-slate-200 space-y-12">
              <div className="relative">
                <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-white border-2 border-indigo-600 shadow-sm z-10"></div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-900">Solution Architect / Test Architect</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Capgemini</span>
                  </div>
                  <p className="text-indigo-600 font-medium">11+ Years Tenure</p>
                  <p className="text-slate-600 leading-relaxed">
                    Spearheaded architectural decisions and testing strategies for enterprise telecom solutions. Designed and implemented scalable backend services using Java, Spring Boot, and Kafka, deployed on AWS EKS infrastructure.
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mt-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Key Achievement</h4>
                    <p className="text-slate-700">
                      Successfully reduced regression cycle automation durations by <strong className="text-indigo-600 font-bold">40%</strong> through the design and implementation of a highly efficient, modular Java Selenium Grid framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
                Certifications
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 transition-all hover:border-indigo-300 hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-bold text-slate-700">CS</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Certified Scrum Product Owner (CSPO)</h4>
                  <p className="text-slate-500 text-xs mt-1">Scrum Alliance</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 transition-all hover:border-indigo-300 hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-bold text-slate-700">AW</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">AWS Certified Cloud Practitioner</h4>
                  <p className="text-slate-500 text-xs mt-1">Amazon Web Services</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 transition-all hover:border-indigo-300 hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-bold text-slate-700">OR</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Oracle OCWCD</h4>
                  <p className="text-slate-500 text-xs mt-1">Oracle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-20 px-6 mt-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Ready to connect?</h2>
            <p className="text-slate-400">Available for Solution Architect opportunities.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:vetrivelm02@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white transition-all text-slate-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all text-slate-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Vetrivel Muthusamy. All rights reserved.</p>
          <p>vetrivelm02@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default CleanProfessional;
