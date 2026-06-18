import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Network, 
  FileText,
  Activity,
  CheckCircle,
  TrendingUp,
  Workflow,
  Radio,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onExploreProjects: () => void;
  onExploreVision: () => void;
  onOpenResume?: () => void;
}

export default function Hero({ onExploreProjects, onExploreVision, onOpenResume }: HeroProps) {
  const [activeSegment, setActiveSegment] = useState<"mediation" | "billing" | "assurance">("mediation");
  const [latencyValue, setLatencyValue] = useState(4.2);
  const [processedCount, setProcessedCount] = useState(14820);
  const [isSyncing, setIsSyncing] = useState(true);

  // Small background heartbeat simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatencyValue(prev => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Math.max(2.1, Math.min(6.8, Number((prev + delta).toFixed(1))));
      });
      setProcessedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-[95vh] flex items-center pt-28 pb-20 px-4 md:px-8 xl:px-16 overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500"
    >
      {/* Background patterns: thin blueprint grids and glowing orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35 dark:opacity-[0.18] pointer-events-none" />
      
      {/* Soft light leaks */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[605px] rounded-full bg-blue-500/10 dark:bg-sky-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-950/20 blur-[130px] pointer-events-none" />

      {/* Decorative luxury hairline border pins */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-slate-200/50 dark:bg-slate-800/30 hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-slate-200/50 dark:bg-slate-800/30 hidden xl:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Premium copy & stats */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-medium tracking-normal select-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR SOLUTION ARCHITECT OPPORTUNITIES</span>
          </div>

          {/* Bold Display Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
              Vetrivel <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-300 dark:to-indigo-400">Muthusamy</span>
            </h1>
            <p className="text-lg md:text-xl font-mono text-slate-500 dark:text-sky-350/90 flex items-center gap-2 flex-wrap">
              <span>Test Lead & Architect</span>
              <span className="text-blue-500 dark:text-sky-500">/</span>
              <span className="text-slate-900 dark:text-white font-bold border-b border-blue-500 pb-0.5">Solution Architect</span>
            </p>
          </div>

          {/* Refined intro passage */}
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
            Leveraging <strong>11+ years</strong> of core telecom engineering custody across OSS/BSS, routing, and subscription structures. Dedicated to bridging complex business schemas into pristine, automated, and fault-tolerant cloud microservices. Fusing Java backend pipelines with React and CSPO agility to eliminate downtime and cost-impact leakage.
          </p>

          {/* Segment Highlight row: Quick Timeline Summary */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-900/10 backdrop-blur-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">CAREER BLUEPRINT FOCUS AREAS</span>
              <span className="text-[10px] font-mono text-blue-500 dark:text-sky-450">[ACTIVE EVOLUTION]</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850">
                <span className="block text-slate-400 text-[10px] font-mono">01 / CORE OSS</span>
                <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Network Topology</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">SNMP, NMS/EMS models</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850">
                <span className="block text-slate-400 text-[10px] font-mono">02 / CORE BSS</span>
                <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Singleview Billing</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">Rating, Invoicing, APIs</span>
              </div>
              <div className="p-3 bg-blue-50/50 dark:bg-blue-950/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <span className="block text-blue-600 dark:text-sky-400 text-[10px] font-mono">03 / TEAM LEAD</span>
                <span className="block text-xs font-bold text-blue-700 dark:text-sky-300 mt-1">Agile Architecture</span>
                <span className="block text-[10px] text-blue-600/70 dark:text-sky-400/70 mt-0.5">CSPO, Capgemini Lead</span>
              </div>
            </div>
          </div>

          {/* Action triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-slate-900 text-white hover:bg-slate-850 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-all duration-300 shadow-lg shadow-slate-900/10 dark:shadow-none flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={13} />
            </button>
            <button
              onClick={onExploreVision}
              className="px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-650 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-350 transition-all duration-300 cursor-pointer"
            >
              Architectural Mission
            </button>
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:bg-sky-400/5 dark:text-sky-350 border border-blue-500/20 dark:border-sky-400/15 hover:bg-blue-500 hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileText size={13} />
                <span>EXPORT CV</span>
              </button>
            )}
          </div>

          {/* Elite Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-100 dark:border-slate-900 mt-6">
            <div>
              <span className="block text-2xl font-extrabold text-blue-600 dark:text-sky-400 font-sans tracking-tight">11+ YRS</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">SYSTEM AUDITS</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-indigo-500 dark:text-indigo-400 font-sans tracking-tight">OSS/BSS</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">CORE TELECOM</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-sky-500 dark:text-sky-350 font-sans tracking-tight">EU & US</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">CARRIER GROUPS</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-emerald-500 dark:text-emerald-400 font-sans tracking-tight">-40%</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">REGRESSION BOOT</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Stunning interactive "Systems Orchestrator Sandbox" */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 p-6 shadow-2xl relative overflow-hidden space-y-6 backdrop-blur-md">
            
            {/* Top header styling for system sandbox */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-150 dark:border-slate-900">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-450 dark:text-slate-500 uppercase tracking-widest font-black">
                  carrier_stream.log
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-500/10 text-blue-600 dark:text-sky-400 font-black tracking-wider uppercase border border-blue-500/20">
                ACTIVE PIPELINE
              </span>
            </div>

            {/* Simulated Architecture Nodes Visualizer */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500">
                <span>SIMULATED SECTOR FLOWS</span>
                <span>TMF SID 21.0 APPROVED</span>
              </div>

              {/* Segment selectors */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850">
                <button
                  onClick={() => setActiveSegment("mediation")}
                  className={`py-1.5 rounded-lg text-[9.5px] font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSegment === "mediation"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-black"
                      : "text-slate-450 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  MEDIATION
                </button>
                <button
                  onClick={() => setActiveSegment("billing")}
                  className={`py-1.5 rounded-lg text-[9.5px] font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSegment === "billing"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-black"
                      : "text-slate-450 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  BILLING_DB
                </button>
                <button
                  onClick={() => setActiveSegment("assurance")}
                  className={`py-1.5 rounded-lg text-[9.5px] font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSegment === "assurance"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-black"
                      : "text-slate-450 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  ASSURANCE
                </button>
              </div>

              {/* Interactive pipeline graphics */}
              <div className="h-40 relative rounded-xl border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px]">
                
                {/* Thin technical lines */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-200 dark:bg-slate-800 border-dashed pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {activeSegment === "mediation" && (
                    <motion.div
                      key="mediation"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-3 relative z-10 h-full flex flex-col justify-between"
                    >
                      <div className="flex justify-between text-[11px] font-bold text-slate-800 dark:text-white font-sans">
                        <span>Mediation & Endpoint Checking</span>
                        <span className="text-emerald-500">Live Pool</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 rounded text-center">
                          <span className="block text-[8px] text-slate-450">ACTIVE ADAPTER</span>
                          <span className="text-[10px] font-bold font-mono">SNMP NMS</span>
                        </div>
                        <div className="p-2 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 rounded text-center">
                          <span className="block text-[8px] text-slate-450">MED. VALUE</span>
                          <span className="text-[10px] font-bold font-mono">100% OK</span>
                        </div>
                        <div className="p-2 border border-blue-500/20 bg-blue-500/5 rounded text-center">
                          <span className="block text-[8px] text-blue-500">FLOW SPEED</span>
                          <span className="text-[10px] font-bold font-mono text-blue-500">14ms latency</span>
                        </div>
                      </div>

                      <div className="text-[8.5px] text-slate-455 text-slate-400">
                        ❯ POLLING SOUTHBOUND COLLECTORS FOR TRAPS ON PORT 162
                      </div>
                    </motion.div>
                  )}

                  {activeSegment === "billing" && (
                    <motion.div
                      key="billing"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-3 relative z-10 h-full flex flex-col justify-between"
                    >
                      <div className="flex justify-between text-[11px] font-bold text-slate-800 dark:text-white font-sans">
                        <span>Singleview Invoicing & Rating DB</span>
                        <span className="text-blue-500 dark:text-sky-400">Stable Sync</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-2 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 rounded">
                          <span className="block text-[8px] text-slate-450">BILL DATA TAPE (BDT)</span>
                          <span className="text-[10.5px] font-bold font-mono">VZ450 module verified</span>
                        </div>
                        <div className="p-2 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 rounded">
                          <span className="block text-[8px] text-slate-450">DB TABLE INTEGRITY</span>
                          <span className="text-[10.5px] font-bold font-mono">DA & RT structures OK</span>
                        </div>
                      </div>

                      <div className="text-[8.5px] text-slate-400">
                        ❯ SECURE POSTPAID TARIFF REVENUE ASSURANCE: ZERO LEAKS
                      </div>
                    </motion.div>
                  )}

                  {activeSegment === "assurance" && (
                    <motion.div
                      key="assurance"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-3 relative z-10 h-full flex flex-col justify-between"
                    >
                      <div className="flex justify-between text-[11px] font-bold text-slate-800 dark:text-white font-sans">
                        <span>Service Level Agreement Audit</span>
                        <span className="text-emerald-500">Atomic</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded text-center">
                          <span className="block text-[8px] text-slate-450">SLA LIMIT</span>
                          <span className="text-[9.5px] font-bold">&lt;10ms peak</span>
                        </div>
                        <div className="p-1.5 border border-emerald-500/20 bg-emerald-500/5 rounded text-center">
                          <span className="block text-[8px] text-emerald-600">GPON ALARM</span>
                          <span className="text-[9.5px] font-bold text-emerald-600">SUPPRESSED</span>
                        </div>
                        <div className="p-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded text-center">
                          <span className="block text-[8px] text-slate-455">REG_CYC BOOT</span>
                          <span className="text-[9.5px] font-bold">-40% scale</span>
                        </div>
                      </div>

                      <div className="text-[8.5px] text-slate-400">
                        ❯ FAULT-TOLERANT ARCHITECTURE TELEMETRY PASSING SPECIFICATION RULES
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            {/* Bottom Realtime Streaming Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-150 dark:border-slate-900 text-xs font-mono">
              <div className="space-y-1">
                <span className="block text-[9px] text-slate-400 dark:text-slate-500">STREAMING LATENCY</span>
                <span className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1">
                  <Activity size={12} className="text-blue-500 animate-pulse" />
                  <span>{latencyValue} ms</span>
                </span>
              </div>
              <div className="space-y-1 text-right">
                <span className="block text-[9px] text-slate-400 dark:text-slate-500">TEST CASES PROCESSED</span>
                <span className="text-sm font-bold text-slate-800 dark:text-white">
                  {processedCount.toLocaleString()} OK
                </span>
              </div>
            </div>

            {/* Tech details metadata pins */}
            <div className="flex justify-between items-center text-[9px] text-slate-450 dark:text-slate-500 font-mono select-none pt-1">
              <span className="flex items-center gap-1"><Radio size={10} className="text-emerald-500" /> BENGALURU NODE_ONE</span>
              <span>ENGINE: TMF SID V21</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
