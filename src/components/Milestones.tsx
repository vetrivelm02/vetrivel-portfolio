import React, { useState } from "react";
import { 
  History, 
  TrendingUp, 
  Activity, 
  TrendingDown, 
  Atom, 
  Cpu, 
  ArrowUpRight 
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

// Trajectory telemetry dataset
const growthTimelineData = [
  {
    year: "2014",
    stage: "Telecom Analyst",
    verifiedEndpoints: 15,
    automatedTestCases: 150,
    carrierSubscribersM: 2.5
  },
  {
    year: "2016",
    stage: "QA Lead",
    verifiedEndpoints: 45,
    automatedTestCases: 480,
    carrierSubscribersM: 10.0
  },
  {
    year: "2019",
    stage: "Lead QA Specialist",
    verifiedEndpoints: 90,
    automatedTestCases: 1250,
    carrierSubscribersM: 24.5
  },
  {
    year: "2022",
    stage: "Test Architect",
    verifiedEndpoints: 160,
    automatedTestCases: 2900,
    carrierSubscribersM: 52.0
  },
  {
    year: "2026",
    stage: "Solution Architect",
    verifiedEndpoints: 250,
    automatedTestCases: 4500,
    carrierSubscribersM: 85.0
  }
];

const efficiencyImpactData = [
  {
    metric: "Selenium Grid Automation",
    beforeSkill: 20,
    afterArchitect: 98,
    unit: "%"
  },
  {
    metric: "Script Run Velocity Speed",
    beforeSkill: 1, 
    afterArchitect: 6.5, 
    unit: "x"
  },
  {
    metric: "Integration Leakage Errors",
    beforeSkill: 35, 
    afterArchitect: 0.5, 
    unit: "%"
  },
  {
    metric: "SLA Cycles Releases",
    beforeSkill: 14, 
    afterArchitect: 1, 
    unit: "Days"
  }
];

export default function Milestones() {
  const [activeTab, setActiveTab] = useState<"growth" | "metrics">("growth");

  // Premium hover tooltip designs
  const CustomTimelineTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-2xl font-mono text-xs text-slate-800 dark:text-slate-100 max-w-[280px] space-y-2">
          <div className="text-blue-600 dark:text-sky-400 font-bold uppercase tracking-wider border-b border-slate-150 dark:border-slate-800 pb-1.5 font-sans">
            {data.stage} ({data.year})
          </div>
          <div className="space-y-1 text-[11px]">
            <p className="flex justify-between gap-4">
              <span className="text-slate-455 text-slate-500">OSS Nodes Verified:</span>
              <strong className="text-slate-900 dark:text-white font-sans">{data.verifiedEndpoints} endpoints</strong>
            </p>
            <p className="flex justify-between gap-4">
              <span className="text-slate-500">Automated Scripts:</span>
              <strong className="text-slate-900 dark:text-white font-sans">{data.automatedTestCases} items</strong>
            </p>
            <p className="flex justify-between gap-4">
              <span className="text-slate-500">Carrier subscribers M:</span>
              <strong className="text-slate-900 dark:text-white font-sans">{data.carrierSubscribersM}M subscribers</strong>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomImpactTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-2xl font-mono text-xs text-slate-800 dark:text-slate-100 max-w-[280px] space-y-2">
          <div className="text-blue-600 dark:text-sky-400 font-bold uppercase tracking-wider border-b border-slate-150 dark:border-slate-800 pb-1.5 leading-tight font-sans">
            {data.metric}
          </div>
          <div className="space-y-1 text-[11px]">
            <p className="flex justify-between gap-4">
              <span className="text-slate-500">Legacy Core:</span>
              <span className="text-slate-400 line-through font-sans">{data.beforeSkill}{data.unit}</span>
            </p>
            <p className="flex justify-between gap-4">
              <span className="text-slate-500">Optimized Stream:</span>
              <strong className="text-emerald-500 font-sans">{data.afterArchitect}{data.unit}</strong>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      id="milestones-analytics"
      className="py-24 px-4 md:px-8 xl:px-16 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Block with Premium typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 select-none">
              <span className="h-[1px] w-6 bg-slate-300 dark:bg-slate-755 bg-slate-400 dark:bg-slate-700" />
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                DELIVERY METRICS
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Decade of Proven Carrier Impact
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Analytical charts showcasing verified endpoint nodes, regression scaling, and optimized continuous integration release frequencies across European and US subscriber systems.
            </p>
          </div>

          {/* Toggle buttons styled cleanly */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-205 dark:border-slate-850 w-fit shrink-0 relative z-10">
            <button
              onClick={() => setActiveTab("growth")}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "growth"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
              }`}
            >
              <History size={13} className={activeTab === "growth" ? "text-blue-500 dark:text-sky-400" : ""} />
              <span>Timeline trajectory</span>
            </button>
            
            <button
              onClick={() => setActiveTab("metrics")}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "metrics"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
              }`}
            >
              <TrendingUp size={13} className={activeTab === "metrics" ? "text-emerald-500 animate-pulse" : ""} />
              <span>Project metrics</span>
            </button>
          </div>
        </div>

        {/* Dynamic Recharts Model wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Chart window */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 p-6 md:p-8 rounded-3xl shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-900 mb-6 font-mono text-[10px]">
              <span className="flex items-center gap-1.5 uppercase text-slate-400 tracking-wider font-bold">
                <Activity size={12} className="text-blue-500 dark:text-sky-400 animate-pulse" />
                <span>INTERACTIVE RECHARTS telemetry DISPLAY</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-black">
                STABLE ENGINE
              </span>
            </div>

            {/* Canvas scale stage */}
            <div className="w-full h-[320px] relative z-10 font-mono">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === "growth" ? (
                  <AreaChart
                    data={growthTimelineData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="colorEndpoints" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorTests" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-900" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fontSize: 10, fontFamily: "monospace" }} 
                      stroke="#94a3b8"
                      axisLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 10, fontFamily: "monospace" }} 
                      stroke="#94a3b8"
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTimelineTooltip />} />
                    <Legend 
                      verticalAlign="top" 
                      height={36} 
                      iconType="circle"
                      wrapperStyle={{ fontSize: "11px", fontFamily: "monospace" }}
                    />
                    <Area 
                      type="monotone" 
                      name="OSS Nodes Verified" 
                      dataKey="verifiedEndpoints" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorEndpoints)" 
                    />
                    <Area 
                      type="monotone" 
                      name="Automated Test Suites" 
                      dataKey="automatedTestCases" 
                      stroke="#6366f1" 
                      strokeWidth={1.5}
                      fillOpacity={1} 
                      fill="url(#colorTests)" 
                    />
                  </AreaChart>
                ) : (
                  <BarChart
                    data={efficiencyImpactData}
                    margin={{ top: 15, right: 10, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-900" />
                    <XAxis 
                      dataKey="metric" 
                      tick={{ fontSize: 9, fontFamily: "monospace", width: 140 }} 
                      stroke="#94a3b8" 
                      axisLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 10, fontFamily: "monospace" }} 
                      stroke="#94a3b8"
                      axisLine={false}
                    />
                    <Tooltip content={<CustomImpactTooltip />} />
                    <Legend 
                      verticalAlign="top" 
                      height={36} 
                      iconType="square"
                      wrapperStyle={{ fontSize: "11px", fontFamily: "monospace" }}
                    />
                    <Bar 
                      name="Legacy Process Baseline" 
                      dataKey="beforeSkill" 
                      fill="#94a3b8" 
                      radius={[4, 4, 0, 0]} 
                      maxBarSize={40}
                    />
                    <Bar 
                      name="Architect-Driven Target" 
                      dataKey="afterArchitect" 
                      fill="#10b981" 
                      radius={[4, 4, 0, 0]} 
                      maxBarSize={40}
                    />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
            
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-4 leading-normal font-medium max-w-xl">
              * Display parameters denote certified audit benchmarks tracked over 11 years of continuous career tenure serving European and US regional carriers.
            </p>
          </div>

          {/* Quick Info statistics widget column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Sync value card */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200/85 dark:border-slate-850 flex-grow flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest font-black uppercase text-indigo-550 dark:text-indigo-400">
                  SYSTEM REVENUE PROTECTION
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Securing Invoice & Order Sync
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  In bulk telecom subscription portfolios, even a 0.05% order mismatch results in thousands of leakage dollars per month. Strict contract validations completely eliminate leakage loops.
                </p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-300 flex items-center justify-center font-sans font-bold text-sm shrink-0">
                    $0l
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">
                      POST-RELEASE DRIFT
                    </span>
                    <span className="text-xs text-emerald-500 font-bold font-mono">
                      105% PREVENTED ON VZ WHOLESALE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regression speed card */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200/85 dark:border-slate-850 flex-grow flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest font-black uppercase text-emerald-500">
                  AUTOMATION VELOCITY
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Accelerated Automation Run cycles
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  Transitioning to highly modular Selenium architectures significantly optimizes deployment checks. High-performance grids run concurrent tests safely to fit deployment limits.
                </p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-sans font-extrabold text-sm shrink-0">
                    6.5x
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">
                      REGRESSION run rate
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      -40% run rate at Capgemini
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
