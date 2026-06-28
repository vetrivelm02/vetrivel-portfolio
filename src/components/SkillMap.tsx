import React, { useState } from "react";
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell
} from "recharts";
import { 
  Layers, 
  Sliders, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Award, 
  Activity, 
  GitBranch, 
  Clock, 
  Terminal, 
  Network,
  Wrench,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkillItem {
  id: string;
  name: string;
  proficiency: number;
  years: number;
  description: string;
}

interface DomainSection {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: React.ReactNode;
  overallRating: number; // out of 100
  yearsOfExp: number;
  description: string;
  keyHighlight: string;
  skills: SkillItem[];
}

export default function SkillMap() {
  const [activeTab, setActiveTab] = useState<"radar" | "grid">("radar");
  const [selectedDomainId, setSelectedDomainId] = useState<string>("domain-telecom");

  // Multi-dimensional core data for Vetrivel Muthusamy
  const skillDomains: DomainSection[] = [
    {
      id: "domain-telecom",
      name: "Telecom OSS/BSS & Core Mediation",
      shortName: "Telecom Core",
      tagline: "SLA Audits, Subscription Orchestrations & billing systems core flow validations",
      icon: <Network className="text-blue-505 text-blue-500" size={18} />,
      overallRating: 96,
      yearsOfExp: 11,
      description: "Comprehensive alignment across subscriber life-cycles, CRM, invoicing pipelines, and physical fiber GPON systems, mapping operations seamlessly into core business architectures.",
      keyHighlight: "Audited multi-vendor integration structures for massive US/European carriers, completely eliminating monthly contract discrepancies.",
      skills: [
        { id: "tel-1", name: "SLA Billing Core", proficiency: 98, years: 11, description: "Rate plans, invoices, subscription state machines" },
        { id: "tel-2", name: "OSS/BSS Mediation", proficiency: 95, years: 10, description: "Aria middleware, Spring webflux mediation, SNMP maps" },
        { id: "tel-3", name: "Singleview Billing", proficiency: 90, years: 7, description: "Subscriber account schemas & core billing engine sync" },
        { id: "tel-4", name: "eTOM & TAM Codes", proficiency: 94, years: 9, description: "TM Forum Business Process conformance alignment" }
      ]
    },
    {
      id: "domain-backend",
      name: "Backend Development & REST Middleware",
      shortName: "Backend Services",
      tagline: "High-performance reactive microservices, schemas, & robust server-side structures",
      icon: <Database className="text-purple-500" size={18} />,
      overallRating: 88,
      yearsOfExp: 7,
      description: "Robust backbones using modern Java frameworks to parse high-velocity subscriber events and bridge operations with the persistent DB layers safely.",
      keyHighlight: "Designed custom Spring Boot REST middleware pipelines for mediation streams, decreasing parsing overheads during large concurrent bursts.",
      skills: [
        { id: "bak-1", name: "Java 21/17 Core", proficiency: 92, years: 7, description: "Multithreading, OOP standards, type-safety, stream APIs" },
        { id: "bak-2", name: "Spring Boot 3.3", proficiency: 89, years: 6, description: "Microservices, REST API endpoints, JPA repositories" },
        { id: "bak-3", name: "Kafka streams", proficiency: 85, years: 4, description: "Asynchronous pub/sub event channels, queue systems" },
        { id: "bak-4", name: "Relational Schemas", proficiency: 87, years: 7, description: "Advanced queries, indexing structures, data integrity" }
      ]
    },
    {
      id: "domain-automation",
      name: "QA Automation & Verification Frameworks",
      shortName: "Core Automation",
      tagline: "Scalable regression suits, custom frameworks, & parallel testing grids",
      icon: <Cpu className="text-emerald-500" size={18} />,
      overallRating: 98,
      yearsOfExp: 11,
      description: "Top-tier test checking logic using concurrent thread pools to reduce verification runtimes and provide active delivery status boards.",
      keyHighlight: "Overhauled legacy testing grids at Capgemini into a high-performance Selenium automation pool, speeding up continuous builds by 40%.",
      skills: [
        { id: "aut-1", name: "Selenium Grid", proficiency: 98, years: 11, description: "High-performance custom grid architectures, grid cluster node scaling" },
        { id: "aut-2", name: "Test Design Patterns", proficiency: 97, years: 11, description: "Page Object Models, modular suites, clean abstractions" },
        { id: "aut-3", name: "Performance Scripting", proficiency: 92, years: 8, description: "Outage simulations, SNMP trap overloading scripts" },
        { id: "aut-4", name: "Visual Analysis", proficiency: 95, years: 10, description: "Automated screen checks, deep-diff verification" }
      ]
    },
    {
      id: "domain-devops",
      name: "Infrastructure, DevOps & Cloud SRE",
      shortName: "DevOps & Cloud",
      tagline: "Containerization, deployment validation setups, & CI/CD automations",
      icon: <GitBranch className="text-indigo-500" size={18} />,
      overallRating: 85,
      yearsOfExp: 6,
      description: "Building resilient virtual pipelines to build, test, and host applications smoothly, mitigating cloud environment drift errors.",
      keyHighlight: "Engineered robust GitLab CI/CD pipelines to trigger automated regressions on every code merge, shortening cycle delays from days to minutes.",
      skills: [
        { id: "dev-1", name: "Docker containers", proficiency: 90, years: 6, description: "Modular server assemblies, reproducible multi-stage setups" },
        { id: "dev-2", name: "Kubernetes / EKS", proficiency: 82, years: 4, description: "Scalable cluster routing, container lifecycle parameters" },
        { id: "dev-3", name: "GitLab CI/CD", proficiency: 88, years: 5, description: "Automated regression builds, lint and compiling workflows" },
        { id: "dev-4", name: "Linux Bash/Shell", proficiency: 86, years: 8, description: "Environment bootstrap routines, server automation profiles" }
      ]
    },
    {
      id: "domain-leadership",
      name: "Agile, CSPO & Technical Leadership",
      shortName: "Agile & Product",
      tagline: "Certified Scrum Scrum Master & Product Owner frameworks with high-cadence team lead capability",
      icon: <Award className="text-slate-805 text-amber-500" size={18} />,
      overallRating: 92,
      yearsOfExp: 8,
      description: "Guiding diverse engineering squads using SCRUM sprints to convert client requirement sheets into clean, deployable architectural specifications.",
      keyHighlight: "CSPO certified team lead managing sprint grooming sessions, bridging physical network specialists with logical software development lines.",
      skills: [
        { id: "led-1", name: "Agile Product Sprints", proficiency: 94, years: 8, description: "Sprint planning, product backlogs grooming, sprint retrospectives" },
        { id: "led-2", name: "SLA Compliance Design", proficiency: 93, years: 10, description: "SLA audit requirements gathering, visual SLA monitor tools" },
        { id: "led-3", name: "Developer Mentorship", proficiency: 91, years: 8, description: "Code review standards, architecture design pattern workshops" },
        { id: "led-4", name: "Cross-Group Alignment", proficiency: 90, years: 9, description: "OSS network teams to full-stack system engineers communication" }
      ]
    }
  ];

  // Map data for the Radar visual model
  const radarChartData = skillDomains.map(domain => ({
    subject: domain.shortName,
    rating: domain.overallRating,
    years: domain.yearsOfExp * 8.5 // scalable visually
  }));

  const currentDomain = skillDomains.find(d => d.id === selectedDomainId) || skillDomains[0];

  // Specific bar chart detailing years and competency ratio of components
  const selectBarData = currentDomain.skills.map(s => ({
    name: s.name,
    proficiency: s.proficiency,
    years: s.years
  }));

  return (
    <section 
      id="skills-analytics-section" 
      className="py-24 px-4 md:px-8 xl:px-16 bg-white dark:bg-slate-950 text-slate-805 dark:text-slate-100 transition-colors duration-500 relative scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2 select-none">
            <span className="h-[1px] w-6 bg-slate-300 dark:bg-slate-700" />
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
              QUALIFICATION MATRIX
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Architect Spectrum: Competency Map
              </h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                An interactive map visualizing more than 11 active years of core carrier domain depth. Dive into key domains to analyze individual stack instruments and experience levels.
              </p>
            </div>

            {/* View Swapper Controls */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-205 dark:border-slate-850 w-fit shrink-0 select-none">
              <button
                id="skill-view-radar-btn"
                onClick={() => setActiveTab("radar")}
                className={`flex items-center gap-2 py-1.5 px-3.5 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "radar"
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                <Sliders size={12} className={activeTab === "radar" ? "text-blue-500" : ""} />
                <span>Radar Analyzer</span>
              </button>
              
              <button
                id="skill-view-matrix-btn"
                onClick={() => setActiveTab("grid")}
                className={`flex items-center gap-2 py-1.5 px-3.5 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "grid"
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                <Layers size={12} className={activeTab === "grid" ? "text-indigo-550" : ""} />
                <span>Competency Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        {activeTab === "radar" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Block: Radar Chart representation (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10 relative overflow-hidden shadow-2xs">
                
                {/* Engineering grid detail background decoration */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b13_1px,transparent_1px),linear-gradient(to_bottom,#1e293b13_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-850">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">
                      MULTIPORT TELEMETRY: MATURITY INDEX
                    </span>
                    <Terminal size={12} className="text-slate-400" />
                  </div>

                  {/* Recharts dynamic Radar */}
                  <div className="w-full h-[320px] mx-auto flex items-center justify-center font-mono text-[10px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarChartData}>
                        <PolarGrid stroke="#cbd5e1" strokeWidth={1} className="dark:stroke-slate-800 opacity-60" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: "#64748b", fontWeight: "bold", fontSize: 10, fontFamily: "monospace" }} 
                        />
                        <PolarRadiusAxis 
                          angle={30} 
                          domain={[0, 100]} 
                          tick={{ fill: "#94a3b8", fontSize: 8 }}
                          axisLine={false} 
                        />
                        <Radar
                          name="System Rating"
                          dataKey="rating"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.2}
                        />
                        <Radar
                          name="Scale Weight"
                          dataKey="years"
                          stroke="#818cf8"
                          fill="#818cf8"
                          fillOpacity={0.07}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Hot Vertices selectors */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                    {skillDomains.map(d => {
                      const isSelected = d.id === selectedDomainId;
                      return (
                        <button
                          key={d.id}
                          id={`radar-vertex-${d.id}`}
                          onClick={() => setSelectedDomainId(d.id)}
                          className={`px-2 py-2 rounded-xl text-[9.5px] font-mono font-bold tracking-tight border transition-all truncate text-center cursor-pointer ${
                            isSelected
                              ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-900 shadow-md scale-[1.02]"
                              : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-700"
                          }`}
                        >
                          {d.shortName}
                        </button>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Dynamic stats footer block info */}
              <div className="p-4 bg-amber-50/20 dark:bg-amber-500/[0.02] border border-amber-500/10 rounded-2xl flex items-start gap-3">
                <ShieldCheck size={16} className="text-amber-550 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-left leading-relaxed font-sans font-medium">
                  <strong>Telemetry Note:</strong> Blue vertex coordinates plot normalized multi-vendor proficiency indexes, whereas indigo values scale experience-years multiplier weights. Select a category button to drill into code profiles.
                </p>
              </div>
            </div>

            {/* Right Block: Domain Detailed report card wrapper with charts (lg:col-span-6) */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDomain.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  id={`domain-card-detail-${currentDomain.id}`}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 md:p-8 shadow-sm space-y-6 relative overflow-hidden text-left"
                >
                  {/* Visual Left Color Ribbon */}
                  <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-600" />

                  {/* Header metadata */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono uppercase bg-blue-500/10 text-blue-600 dark:text-sky-400 font-extrabold flex items-center gap-1.5 border border-blue-500/10">
                        {currentDomain.icon}
                        <span>{currentDomain.shortName} API Profile</span>
                      </span>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 dark:text-slate-505 select-none">
                        <Clock size={12} className="text-indigo-400" />
                        <span>{currentDomain.yearsOfExp} Active Years</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {currentDomain.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
                      {currentDomain.tagline}
                    </p>
                  </div>

                  {/* Dynamic Recharts horizontal Bar chart detailing stack values */}
                  <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-900">
                    <span className="block text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-550 uppercase font-black">
                      GRANULAR SKILL RATINGS & TENURE:
                    </span>
                    
                    <div className="w-full h-[180px] font-mono text-[9px] relative z-10 pt-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={selectBarData}
                          margin={{ top: 0, right: 10, left: -10, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" className="dark:stroke-slate-900" />
                          <XAxis type="number" domain={[0, 100]} hide />
                          <YAxis 
                            type="category" 
                            dataKey="name" 
                            width={110} 
                            tick={{ fill: "#64748b", fontWeight: "bold", fontSize: 9 }} 
                            axisLine={false} 
                            tickLine={false}
                          />
                          <Tooltip 
                            cursor={{ fill: "rgba(148, 163, 184, 0.05)" }}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const d = payload[0].payload;
                                return (
                                  <div className="bg-slate-900 text-white p-2.5 rounded-xl text-[10px] font-mono shadow-2xl border border-slate-800 space-y-1">
                                    <p className="font-sans font-bold text-blue-350">{d.name}</p>
                                    <p>Proficiency: <strong className="text-emerald-400">{d.proficiency}%</strong></p>
                                    <p>Tenure active: <strong className="text-indigo-300">{d.years} Years</strong></p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Bar dataKey="proficiency" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={12}>
                            {selectBarData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={index % 2 === 0 ? "#3b82f6" : "#6366f1"} 
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Core description */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-900">
                    <span className="block text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-550 uppercase font-bold">
                      CAPABILITY BRIEF:
                    </span>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-medium">
                      {currentDomain.description}
                    </p>
                  </div>

                  {/* Enterprise Real Highlight */}
                  <div className="p-4 rounded-2xl bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-500/10 space-y-1">
                    <span className="text-[9px] font-mono tracking-widest text-[#4f46e5] dark:text-sky-400 font-extrabold uppercase block select-none">
                      PROVEN ENTERPRISE DELIVERABLE
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans font-medium leading-relaxed">
                      {currentDomain.keyHighlight}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        ) : (
          /* High-fidelity full spectrum grid list for alternative representation */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {skillDomains.map(domain => (
              <div
                key={domain.id}
                id={`grid-cell-domain-${domain.id}`}
                className="p-6 rounded-3xl border border-slate-200 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-900/10 flex flex-col justify-between hover:border-slate-900 dark:hover:border-white transition-all duration-350 hover:shadow-2xs text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-205/65 dark:border-slate-850/60 select-none">
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono uppercase bg-slate-100 dark:bg-slate-900/60 text-slate-550 dark:text-slate-400 font-bold border border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5">
                      {domain.icon}
                      <span>{domain.shortName}</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {domain.yearsOfExp} Yrs
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug tracking-tight">
                      {domain.name.split(" & ")[0]}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
                      {domain.description}
                    </p>
                  </div>

                  {/* Horizontal skills block tags */}
                  <div className="space-y-2 pt-2">
                    <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest font-black select-none">
                      Active stack proficiency:
                    </span>
                    <div className="space-y-2">
                      {domain.skills.map(s => {
                        return (
                          <div key={s.id} className="space-y-1 text-[10.5px]">
                            <div className="flex items-center justify-between font-mono font-semibold text-slate-700 dark:text-slate-300">
                              <span>{s.name}</span>
                              <span className="text-blue-500 dark:text-sky-400">{s.proficiency}%</span>
                            </div>
                            <div className="w-full h-1 bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden select-none">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-550 via-indigo-500 to-sky-400 dark:from-sky-502 animate-pulse"
                                style={{ width: `${s.proficiency}%` }}
                              />
                            </div>
                            <p className="text-[9.5px] text-slate-400 dark:text-slate-500 leading-normal font-sans font-medium italic">
                              {s.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/50 dark:border-slate-850/60 select-none">
                  <div className="flex items-center gap-2 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                    <Activity size={12} className="animate-pulse" strokeWidth={2.5} />
                    <span>VERIFIED OPERATIONAL STABLE</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
