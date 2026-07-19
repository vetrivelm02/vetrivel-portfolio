import React from 'react';
import { Mail, ExternalLink, ArrowRight, Check } from 'lucide-react';

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=JetBrains+Mono:wght@100..800&display=swap');
  
  .font-sans-body {
    font-family: 'DM Sans', sans-serif;
  }
  .font-display-hero {
    font-family: 'Playfair Display', serif;
  }
  .font-mono-tag {
    font-family: 'JetBrains Mono', monospace;
  }
  
  html {
    scroll-behavior: smooth;
  }
`;

export default function MinimalDark() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans-body selection:bg-[#3b82f6] selection:text-white pb-24">
      <style>{fontStyles}</style>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 py-8 px-6 md:px-12 flex justify-between items-center z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <span className="font-display-hero text-2xl font-bold tracking-tight text-[#f5f5f5]">VM.</span>
        <div className="flex gap-8 text-sm font-mono-tag text-neutral-400 uppercase tracking-wider">
          <a href="#about" className="hover:text-[#f5f5f5] transition-colors">About</a>
          <a href="#expertise" className="hover:text-[#f5f5f5] transition-colors">Expertise</a>
          <a href="#experience" className="hover:text-[#f5f5f5] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[#f5f5f5] transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-48">
        {/* Hero Section */}
        <section id="about" className="mb-40">
          <div className="inline-flex items-center gap-3 px-0 py-1 text-[#3b82f6] text-sm font-mono-tag mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
            </span>
            AVAILABLE FOR SOLUTION ARCHITECT OPPORTUNITIES
          </div>
          
          <h1 className="font-display-hero text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] mb-16 font-medium text-[#f5f5f5]">
            Vetrivel <br className="hidden md:block" />
            <span className="text-neutral-600 italic">Muthusamy</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24">
            <div className="md:col-span-7 text-2xl md:text-4xl font-light text-neutral-300 leading-tight">
              Solution Architect & Test Lead at Capgemini. 
              Engineering scalable telecom systems and robust test architectures.
            </div>
            <div className="md:col-span-5 flex flex-col gap-8 text-neutral-400 text-lg">
              <p className="leading-relaxed">
                With over 11 years in Telecom OSS/BSS, I bridge the gap between complex network protocols and enterprise-grade backend systems. I specialize in Java ecosystems, cloud deployments, and modular automation.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-[#f5f5f5] hover:text-[#3b82f6] transition-colors w-fit group font-mono-tag uppercase text-sm tracking-widest mt-4"
              >
                Let's talk <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <hr className="border-neutral-900 mb-32" />

        {/* Expertise Section */}
        <section id="expertise" className="mb-40">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <h2 className="font-display-hero text-4xl md:text-5xl text-neutral-600 md:w-1/3 shrink-0 italic">Expertise</h2>
            
            <div className="flex-1 flex flex-col gap-16">
              <SkillGroup 
                title="Telecom OSS/BSS" 
                skills={['Network Topologies', 'NMS/EMS', 'TM Forum Standards', 'eTOM', 'TAM', 'SID', '630+ Open APIs']} 
              />
              <SkillGroup 
                title="Backend Architecture" 
                skills={['Java 21/17', 'Spring Boot 3.3', 'REST APIs', 'Kafka Streams', 'Microservices']} 
              />
              <SkillGroup 
                title="Cloud & DevOps" 
                skills={['Docker', 'Kubernetes', 'AWS EKS', 'CI/CD Pipelines']} 
              />
              <SkillGroup 
                title="Frontend" 
                skills={['TypeScript', 'React 18/19', 'Tailwind CSS']} 
              />
              <SkillGroup 
                title="Quality Assurance" 
                skills={['Test Architecture', 'Modular Java Selenium Grid', 'Regression Automation']} 
              />
            </div>
          </div>
        </section>

        <hr className="border-neutral-900 mb-32" />

        {/* Experience Section */}
        <section id="experience" className="mb-40">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <h2 className="font-display-hero text-4xl md:text-5xl text-neutral-600 md:w-1/3 shrink-0 italic">Experience</h2>
            
            <div className="flex-1 flex flex-col gap-24">
              <ExperienceItem 
                company="Capgemini"
                role="Solution Architect & Test Lead / Architect"
                date="Present"
                description="Leading architectural design and testing strategies for enterprise telecom solutions. Bridging business requirements with technical execution across full-stack and cloud deployments."
                achievements={[
                  "Reduced regression cycle automation durations by 40% by engineering a modular Java Selenium Grid framework.",
                  "Architected scalable backend solutions utilizing Java 21, Spring Boot 3.3, and Kafka Streams.",
                  "Integrated and aligned systems with TM Forum standards, managing 630+ Open APIs across the OSS/BSS landscape."
                ]}
              />
              <ExperienceItem 
                company="Previous Roles"
                role="Senior Engineer in Telecom OSS/BSS"
                date="11+ Years Total"
                description="Progressed through roles focused on network management systems, element management, and test automation within the telecommunications sector."
                achievements={[
                  "Built robust CI/CD pipelines and containerized applications using Docker and Kubernetes (AWS EKS).",
                  "Authored comprehensive test suites and test architectures, significantly improving code coverage and deployment confidence."
                ]}
              />
            </div>
          </div>
        </section>

        <hr className="border-neutral-900 mb-32" />

        {/* Certifications Section */}
        <section id="certifications" className="mb-40">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <h2 className="font-display-hero text-4xl md:text-5xl text-neutral-600 md:w-1/3 shrink-0 italic">Certifications</h2>
            
            <div className="flex-1 flex flex-col gap-8">
              <CertificationItem title="AWS Certified Cloud Practitioner" issuer="Amazon Web Services" />
              <CertificationItem title="CSPO (Certified Scrum Product Owner)" issuer="Scrum Alliance" />
              <CertificationItem title="Oracle OCWCD" issuer="Oracle" />
            </div>
          </div>
        </section>

        <hr className="border-neutral-900 mb-32" />

        {/* Contact Section */}
        <section id="contact" className="pt-12">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <h2 className="font-display-hero text-4xl md:text-5xl text-neutral-600 md:w-1/3 shrink-0 italic">Contact</h2>
            
            <div className="flex-1">
              <h3 className="font-display-hero text-5xl md:text-7xl text-[#f5f5f5] mb-12 leading-tight">
                Ready to architect <br className="hidden md:block" /> the next phase.
              </h3>
              
              <div className="flex flex-col gap-6">
                <a 
                  href="mailto:vetrivelm02@gmail.com" 
                  className="group flex items-center gap-4 text-2xl md:text-3xl font-light text-neutral-300 hover:text-[#3b82f6] transition-colors w-fit"
                >
                  vetrivelm02@gmail.com
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                
                <a 
                  href="#" 
                  className="group flex items-center gap-4 text-2xl md:text-3xl font-light text-neutral-300 hover:text-[#3b82f6] transition-colors w-fit"
                  onClick={(e) => e.preventDefault()}
                >
                  linkedin.com/in/vetrivelm
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-medium mb-6 text-[#f5f5f5]">{title}</h3>
      <div className="flex flex-wrap gap-x-0 gap-y-3">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="text-base font-mono-tag text-neutral-400 uppercase tracking-wide"
          >
            {skill}
            {index < skills.length - 1 && (
              <span className="text-neutral-800 mx-4 font-sans-body font-light">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ company, role, date, description, achievements }: { company: string, role: string, date: string, description: string, achievements: string[] }) {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
        <h3 className="text-3xl font-medium text-[#f5f5f5] group-hover:text-[#3b82f6] transition-colors">{role}</h3>
        <span className="font-mono-tag text-sm text-neutral-500 uppercase tracking-widest">{date}</span>
      </div>
      <h4 className="text-xl text-neutral-400 mb-6 font-display-hero italic">{company}</h4>
      <p className="text-neutral-300 leading-relaxed mb-8 text-lg max-w-3xl">{description}</p>
      
      <ul className="flex flex-col gap-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-4 text-neutral-400 max-w-3xl">
            <Check className="w-5 h-5 text-neutral-700 shrink-0 mt-1" />
            <span className="leading-relaxed text-base">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertificationItem({ title, issuer }: { title: string, issuer: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 py-4 border-b border-neutral-900 group">
      <h3 className="text-2xl font-light text-[#f5f5f5] group-hover:text-[#3b82f6] transition-colors">{title}</h3>
      <p className="font-mono-tag text-sm text-neutral-500 uppercase tracking-widest">{issuer}</p>
    </div>
  );
}
