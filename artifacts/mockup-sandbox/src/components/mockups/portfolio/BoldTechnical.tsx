import React, { useEffect, useState } from 'react';
import { Mail, Briefcase, Award, CheckCircle2, Terminal, Code2, Server, Database, Cloud, Network, ShieldCheck } from 'lucide-react';

const BoldTechnical = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      {/* Background Grid Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle radial gradients for depth */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-24">
        
        {/* Header / Hero */}
        <header className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Solution Architect opportunities
          </div>
          
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Vetrivel Muthusamy
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-mono flex items-center gap-3">
              <Terminal className="w-8 h-8 text-cyan-500" />
              <span>Solution Architect & Test Lead</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed border-l-2 border-cyan-500/50 pl-6 my-4">
            Building resilient systems and orchestrating massive scale in Telecom OSS/BSS. 
            I bridge the gap between complex network topologies and elegant software architecture.
          </p>

          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-mono text-sm font-semibold tracking-wider text-slate-950 uppercase transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-sm"
          >
            <span>Initialize Contact</span>
            <div className="absolute inset-0 border border-cyan-400 scale-[1.05] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-sm pointer-events-none" />
          </a>
        </header>

        {/* By the numbers strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-slate-800 py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          {[
            { value: "11+", label: "Years Experience" },
            { value: "40%", label: "Cycle Reduction" },
            { value: "630+", label: "Open APIs" },
            { value: "3", label: "Certifications" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 relative group">
              <div className="absolute -inset-4 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tighter relative z-10">
                {stat.value}
                <span className="text-cyan-500 text-3xl">_</span>
              </div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-semibold relative z-10">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Skills grid */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-mono">01. Tech_Stack</h3>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory 
              icon={<Network className="w-5 h-5" />}
              title="Telecom Domain"
              skills={[
                { name: "OSS/BSS Architecture", level: 95 },
                { name: "Network Topologies", level: 90 },
                { name: "TM Forum Standards", level: 95 },
                { name: "eTOM, TAM, SID", level: 85 }
              ]}
            />
            <SkillCategory 
              icon={<Server className="w-5 h-5" />}
              title="Backend & Integration"
              skills={[
                { name: "Java 21/17", level: 95 },
                { name: "Spring Boot 3.3", level: 90 },
                { name: "REST / Open APIs", level: 95 },
                { name: "Kafka Streams", level: 80 }
              ]}
            />
            <SkillCategory 
              icon={<Cloud className="w-5 h-5" />}
              title="Cloud & DevOps"
              skills={[
                { name: "Docker", level: 85 },
                { name: "Kubernetes (AWS EKS)", level: 80 },
                { name: "AWS Cloud", level: 85 },
                { name: "CI/CD Pipelines", level: 90 }
              ]}
            />
            <SkillCategory 
              icon={<Code2 className="w-5 h-5" />}
              title="Frontend Ecosystem"
              skills={[
                { name: "TypeScript", level: 80 },
                { name: "React 18/19", level: 85 },
                { name: "Tailwind CSS", level: 90 },
                { name: "UI Architecture", level: 80 }
              ]}
            />
            <SkillCategory 
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Quality Assurance"
              skills={[
                { name: "Test Architecture", level: 95 },
                { name: "Java Selenium Grid", level: 90 },
                { name: "Modular Frameworks", level: 95 },
                { name: "Performance Testing", level: 80 }
              ]}
            />
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-mono">02. Execution_Log</h3>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="relative border-l border-slate-800 ml-4 space-y-16 pb-8">
            <ExperienceItem 
              title="Solution Architect & Test Lead / Architect"
              company="Capgemini"
              period="Current Role"
              description="Leading architecture and testing strategies for enterprise-scale Telecom OSS/BSS transformations. Orchestrating cloud-native deployments and driving engineering excellence."
              highlights={[
                "Architected and implemented a modular Java Selenium Grid framework, resulting in a 40% reduction in regression cycle automation durations.",
                "Designed and integrated complex Network Topologies utilizing TM Forum standards, mapping over 630+ Open APIs.",
                "Spearheaded the migration to Java 21 and Spring Boot 3.3 for core microservices, improving throughput and reducing memory footprint.",
                "Managed containerized workloads across AWS EKS, establishing robust CI/CD pipelines and Kafka event streaming patterns."
              ]}
            />
            <ExperienceItem 
              title="Senior Telecom Engineer"
              company="Previous Roles"
              period="Over 11 Years"
              description="Progressive experience in the telecommunications sector focusing on system integration, NMS/EMS, and full-stack development."
              highlights={[
                "Deep expertise in eTOM, TAM, and SID frameworks.",
                "Built resilient RESTful services for high-volume telecommunication data.",
                "Developed scalable user interfaces using React and TypeScript for network monitoring dashboards."
              ]}
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-mono">03. Certifications</h3>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CertificationCard 
              title="Certified Scrum Product Owner"
              issuer="Scrum Alliance"
              icon="cspo"
            />
            <CertificationCard 
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              icon="aws"
            />
            <CertificationCard 
              title="Oracle Certified Web Component Developer"
              issuer="Oracle"
              icon="oracle"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-8 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
          <div className="p-8 md:p-12 border border-slate-800 bg-slate-900/50 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] group-hover:bg-cyan-500/10 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 font-mono">Ready to optimize your architecture?</h3>
                <p className="text-slate-400">Available for Solution Architect roles. Let's discuss your technical challenges.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a 
                  href="mailto:vetrivelm02@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-mono text-sm transition-colors rounded-sm border border-slate-700 hover:border-slate-500 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  vetrivelm02@gmail.com
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-mono text-sm transition-colors rounded-sm border border-cyan-500/30 w-full sm:w-auto"
                >
                  <Briefcase className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center font-mono text-xs text-slate-600 mt-12">
            <p>// {new Date().getFullYear()} VETRIVEL MUTHUSAMY. ALL SYSTEMS OPERATIONAL.</p>
          </div>
        </section>

      </div>
    </div>
  );
};

// Sub-components

const SkillCategory = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: {name: string, level: number}[] }) => (
  <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-md hover:border-cyan-500/30 transition-colors duration-300">
    <div className="flex items-center gap-3 text-cyan-400 mb-6">
      {icon}
      <h4 className="font-mono font-semibold uppercase tracking-wide text-sm">{title}</h4>
    </div>
    <div className="space-y-4">
      {skills.map((skill, i) => (
        <div key={i} className="group">
          <div className="flex justify-between text-sm mb-1.5 font-mono">
            <span className="text-slate-300 group-hover:text-cyan-300 transition-colors">{skill.name}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full relative"
              style={{ width: `${skill.level}%` }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-r from-transparent to-white/30" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ title, company, period, description, highlights }: any) => (
  <div className="relative pl-8 group">
    {/* Timeline dot */}
    <div className="absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-full bg-slate-800 border-2 border-slate-950 group-hover:bg-cyan-500 group-hover:border-cyan-200 transition-colors duration-300 shadow-[0_0_0_4px_theme(colors.slate.950)]" />
    
    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <span className="text-cyan-500 font-mono text-sm hidden md:inline">@</span>
      <span className="text-lg text-slate-300 font-medium">{company}</span>
      <span className="text-slate-500 font-mono text-sm md:ml-auto block">{period}</span>
    </div>
    
    <p className="text-slate-400 mb-6 leading-relaxed max-w-4xl">
      {description}
    </p>
    
    <ul className="space-y-3">
      {highlights.map((highlight: string, i: number) => (
        <li key={i} className="flex gap-3 text-slate-300 items-start max-w-4xl group/item">
          <span className="text-cyan-500/50 mt-1 group-hover/item:text-cyan-400 transition-colors font-mono">▹</span>
          <span className="leading-relaxed group-hover/item:text-slate-200 transition-colors">{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CertificationCard = ({ title, issuer, icon }: { title: string, issuer: string, icon: string }) => (
  <div className="p-6 border border-slate-800 bg-slate-900/30 rounded-md hover:bg-slate-800/50 hover:border-violet-500/30 transition-all duration-300 group flex flex-col h-full">
    <Award className="w-8 h-8 text-violet-500/70 mb-4 group-hover:text-violet-400 transition-colors group-hover:scale-110 transform duration-300" />
    <h4 className="text-lg font-bold text-white mb-2 leading-snug">{title}</h4>
    <p className="text-slate-500 font-mono text-sm mt-auto uppercase tracking-wider">{issuer}</p>
  </div>
);

export default BoldTechnical;
