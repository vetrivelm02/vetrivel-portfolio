import React, { useState } from "react";
import { 
  Terminal,
  Activity,
  Sliders,
  ShieldCheck,
  AlertTriangle,
  Layers,
  Sparkles,
  CircuitBoard,
  Cpu,
  Bookmark,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LayerDetail {
  id: string;
  name: string;
  subtitle: string;
  status: "ACTIVE" | "VERIFIED" | "STABLE" | "OPTIMIZED";
  techStack: string[];
  description: string;
  failureCured: string;
  businessImpact: string;
  tnmStandard: string;
}

export default function InteractiveBlueprint() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer-2");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const layers: LayerDetail[] = [
    {
      id: "layer-1",
      name: "1. Southbound Mediation & Network Topology",
      subtitle: "Physical & Logical Network Resource Mapping (OSS Tier)",
      status: "VERIFIED",
      techStack: ["SNMP traps", "Wireshark", "Linux Bash / Shell", "Oracle Database", "Aria Middleware", "G-984 GPON"],
      description: "This structural base layer establishes synchronous and asynchronous interfaces over physical endpoints. Solves SNMP buffer lockups to prevent data drops during fiber-cut simulations.",
      failureCured: "SNMP trap-storm buffer overrides during massive fiber redundancy failures. Mitigated with custom throttling collectors.",
      businessImpact: "Achieved 100% telemetry validation uptime across multi-vendor networks.",
      tnmStandard: "TM Forum eTOM Resource Provisioning & G-984 physical protocol standards."
    },
    {
      id: "layer-2",
      name: "2. Mediation & REST Middleware Integration",
      subtitle: "Java 21, Spring Boot 3.3, SLA Audits & Mediation Queues",
      status: "OPTIMIZED",
      techStack: ["Java 21 / 17", "Spring Boot 3.3", "REST APIs", "Selenium Grid", "Docker & K8s", "SLA Monitors"],
      description: "The pipeline backbone mediator, mapping JSON messages into subscriber schemas and orchestrating asynchronous service state requests with spring-boot-starter-webflux integration.",
      failureCured: "Concurrency state lockups and async subscriber ordering race conditions. Resolved with rigorous custom stress-script validation.",
      businessImpact: "Reduced regression check automation durations by 40% with robust modular Java architectures at Capgemini.",
      tnmStandard: "RESTful OpenAPI compliant specifications with zero functional drag."
    },
    {
      id: "layer-3",
      name: "3. BSS Subscription, CRM & Billing Engine",
      subtitle: "Revenue Management & Subscriber Sync Systems",
      status: "STABLE",
      techStack: ["Singleview Billing Core", "Kafka Streams", "Aria Billing", "Amdocs Integration", "AWS EKS Pipelines"],
      description: "Sustains account state lifecycles, service state activations, invoice calculators, and subscription billing. Blocks data mismatch leakage between CRM contracts and backend billing queues.",
      failureCured: "Post-release subscription discrepancy leading to monthly contract leakage. Saved millions of leakage dollars.",
      businessImpact: "Ensured 100% leak-free subscriber account synchronization over 4 massive carrier rollouts.",
      tnmStandard: "TM Forum TAM & SID customer schema representation."
    },
    {
      id: "layer-4",
      name: "4. Unified SLA Control & Client Portal",
      subtitle: "Full-Stack Portal & Analytics Service Assurance",
      status: "ACTIVE",
      techStack: ["React 18+", "TypeScript", "Tailwind CSS", "Spring Boot 3.x", "CI/CD Gitlab Pipelines"],
      description: "The executive control deck rendering real-time metrics, system health logs, SLA compliance sheets, and administrative data toggles.",
      failureCured: "Lack of client SLA trace visibility. Engineered cloud-native interactive proof-of-concept portals for live status updates.",
      businessImpact: "Replaced slow manual compliance reports with live-refreshing digital blueprint interfaces.",
      tnmStandard: "W3C Accessibility (WCAG 2.1 AA) and modular component architecture."
    }
  ];

  const currentLayer = layers.find(l => l.id === selectedLayerId) || layers[1];

  return (
    <section 
      id="vision-section" 
      className="py-24 px-4 md:px-8 xl:px-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-t border-b border-slate-100 dark:border-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block with Premium Swiss Design */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2 select-none">
            <span className="h-[1px] w-6 bg-slate-350 dark:bg-slate-700" />
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
              SYSTEM SANDBOX PROTOTYPE
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Carrier Systems Interactive Blueprint
              </h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Explore an interactive schematic detailing complex Telecom architectures. Click on any section below to audit its layer details, tech stacks, and real outages Vetrivel prevented.
              </p>
            </div>
            
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-850 rounded-xl text-xs font-mono">
              <Terminal size={12} className="text-blue-500 dark:text-sky-400" />
              <span className="text-slate-500 dark:text-slate-400">SCHEMA CONTEXT: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Modular Playground Sandbox Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Grid: SVG Blueprint Schematic Card (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10 overflow-hidden shadow-sm">
              {/* Engineering Grid Underlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00d_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/50 dark:border-slate-850">
                  <span className="text-[10px] font-mono tracking-wider text-slate-405 text-slate-400">
                    DIAGRAM ARCHITECTURE MODEL
                  </span>
                  <Sliders size={13} className="text-slate-400" />
                </div>

                {/* 4 Block Architectural Towers */}
                <div className="space-y-4">
                  {layers.map((layer, index) => {
                    const isSelected = layer.id === selectedLayerId;
                    const isHovered = hoveredNode === layer.id;
                    
                    return (
                      <button
                        key={layer.id}
                        onClick={() => setSelectedLayerId(layer.id)}
                        onMouseEnter={() => setHoveredNode(layer.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 relative flex items-center justify-between cursor-pointer focus:outline-none ${
                          isSelected
                            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xl scale-[1.02]"
                            : "bg-white dark:bg-slate-950 border-slate-150 dark:border-slate-850 text-slate-850 dark:text-slate-100 hover:border-slate-400 dark:hover:border-slate-650"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Accent Circle counter */}
                          <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-mono font-bold transition-all ${
                            isSelected
                              ? "bg-blue-600 dark:bg-sky-500 text-white"
                              : "bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-500"
                          }`}>
                            0{index + 1}
                          </div>
                          
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold leading-tight">
                              {layer.name.replace(/^\d+\.\s*/, "")}
                            </h4>
                            <p className={`text-[10px] font-mono ${isSelected ? "text-slate-400 dark:text-slate-600" : "text-slate-450 dark:text-slate-400"}`}>
                              {layer.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Status label tag */}
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono tracking-wider font-semibold ${
                          isSelected 
                            ? "bg-emerald-500/20 text-emerald-300 dark:text-emerald-700 border border-emerald-500/30"
                            : "bg-slate-100 dark:bg-slate-900 text-slate-550 dark:text-slate-400"
                        }`}>
                          {layer.status}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom protocol status label */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-200/60 dark:border-slate-850/65">
                  <span className="flex items-center gap-1.5">
                    <Activity size={11} className="text-emerald-500 animate-pulse" /> Unified Telemetry Channels
                  </span>
                  <span>100% INTEROPERABLE</span>
                </div>
              </div>
            </div>

            {/* Quick architectural values showcase */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200/65 dark:border-slate-850 rounded-2xl text-center shadow-xs">
                <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">TMF CODES</span>
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-350 mt-1 block">eTOM & SID Compliant</span>
              </div>
              <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200/65 dark:border-slate-850 rounded-2xl text-center shadow-xs">
                <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest font-black text-blue-500 dark:text-sky-450">METHODOLOGY</span>
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-350 mt-1 block">CSPO Certified</span>
              </div>
              <div className="p-4 bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200/65 dark:border-slate-850 rounded-2xl text-center shadow-xs">
                <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">DOMAIN EXP</span>
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-350 mt-1 block">11+ Yrs OSS/BSS</span>
              </div>
            </div>
          </div>

          {/* Right Grid: Detailed Analytical Blueprint Report Card (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 md:p-8 shadow-md relative overflow-hidden space-y-6">
              
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400" />

              {/* Title Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-mono uppercase bg-blue-500/10 text-blue-600 dark:text-sky-400 font-bold tracking-wider flex items-center gap-1.5 border border-blue-500/20">
                    <ShieldCheck size={11} className="shrink-0" /> AUDIT STATUS: LAYER {currentLayer.id.replace("layer-", "")}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase font-bold text-slate-500">
                    VERDICT: STABLE
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {currentLayer.name}
                </h3>
              </div>

              {/* Verified technology badges */}
              <div className="space-y-2.5">
                <span className="block text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-black">
                  VERIFIED STACK INSTRUMENTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentLayer.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-350 rounded-lg shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Layer Explanation summary description */}
              <div className="space-y-2">
                <span className="block text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-black">
                  FUNCTIONAL SPECIFICATION STATEMENT:
                </span>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                  {currentLayer.description}
                </p>
              </div>

              {/* System outage check failure cured box */}
              <div className="p-4 rounded-2xl border border-rose-500/20 dark:border-rose-500/10 bg-rose-50/20 dark:bg-rose-500/[0.02] space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-bold">
                  <AlertTriangle size={13} className="shrink-0 text-rose-500" />
                  <span>Real-World System Challenge Mitigated</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-sans">
                  <strong className="text-slate-800 dark:text-slate-300">Outage Cured:</strong> {currentLayer.failureCured}
                </p>
              </div>

              {/* Delivered value indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100 dark:border-slate-900">
                <div className="space-y-1">
                  <span className="block text-[9px] font-mono tracking-widest text-slate-450 dark:text-slate-500 uppercase font-bold">
                    DELIVERED CLIENT VALUE
                  </span>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                    {currentLayer.businessImpact}
                  </p>
                </div>
                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-850 pt-3 sm:pt-0 sm:pl-5">
                  <span className="block text-[9px] font-mono tracking-widest text-slate-455 dark:text-slate-500 uppercase font-bold">
                    COMPLIANCE STANDARD
                  </span>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                    {currentLayer.tnmStandard}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
