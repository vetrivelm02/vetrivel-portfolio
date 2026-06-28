import { useState, useMemo } from "react";
import { Search, FolderGit2, Sparkles, Filter, ExternalLink, ArrowUpRight, X, Layers, Cpu, Compass, BookOpen, AlertCircle, Code, Database, Terminal, CheckSquare, Wrench } from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import LazyImage from "./LazyImage";

// Production fallback assets representing live telecom nodes
const DEFAULT_PROJECT_IMAGES: Record<string, string> = {
  "proj-1": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", // Fiber nodes
  "proj-2": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // IDE code checks
  "proj-3": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Invoices flow charts
  "proj-4": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"  // Tech circuit matrix
};

// Helper for mapping dynamic styles & mini icons to stack technologies
function getTechBadgeConfig(tech: string) {
  const norm = tech.toLowerCase();
  
  if (norm.includes("java")) {
    return {
      colors: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 hover:bg-orange-500/20",
      icon: <Code size={11} className="text-orange-500 shrink-0" />
    };
  }
  if (norm.includes("selenium") || norm.includes("testng") || norm.includes("testing") || norm.includes("uat") || norm.includes("alm") || norm.includes("scenario")) {
    return {
      colors: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20",
      icon: <CheckSquare size={11} className="text-amber-500 shrink-0" />
    };
  }
  if (norm.includes("singleview") || norm.includes("billing") || norm.includes("revenue")) {
    return {
      colors: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
      icon: <Cpu size={11} className="text-purple-500 shrink-0" />
    };
  }
  if (norm.includes("sql") || norm.includes("database") || norm.includes("schema")) {
    return {
      colors: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
      icon: <Database size={11} className="text-emerald-500 shrink-0" />
    };
  }
  if (norm.includes("spring") || norm.includes("docker") || norm.includes("api") || norm.includes("mediation") || norm.includes("com")) {
    return {
      colors: "bg-blue-500/10 text-blue-700 dark:text-sky-400 border-blue-500/20 hover:bg-blue-500/20",
      icon: <Layers size={11} className="text-blue-500 shrink-0" />
    };
  }
  
  // Default fallback style
  return {
    colors: "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800 hover:bg-slate-200/40 dark:hover:bg-slate-800/40",
    icon: <Terminal size={11} className="text-slate-500 shrink-0" />
  };
}

interface ProjectDetailDeepDive {
  role: string;
  challenges: string[];
  granularStack: string[];
  metrics: string[];
}

const PROJECT_DEEP_DIVES: Record<string, ProjectDetailDeepDive> = {
  "proj-1": {
    role: "Senior Lead Telecom OSS/BSS Integration Engineer",
    challenges: [
      "Interfacing complex legacy Amdocs & singleview subscriber databases with external wholesale partner middleware channels.",
      "Validating massive billing transaction volumes in dynamic testing setups without causing state overlaps.",
      "Auditing multi-vendor customer agreements against specific custom invoicing rules to eliminate billing leaks."
    ],
    granularStack: [
      "CSG Singleview Billing Engine",
      "Spring Boot 3.3 Reactive Middleware",
      "Oracle Advanced SQL & PL/SQL Collections",
      "GitLab CI Pipeline Integrations",
      "JIRA Enterprise & HP QC"
    ],
    metrics: [
      "Eliminated 100% of major partner SLA contract discrepancies during wholesale mediation.",
      "Saved approx 12 hours of manual balance checking workloads per regression cycle."
    ]
  },
  "proj-2": {
    role: "Lead QA Automation Architect",
    challenges: [
      "Replacing slow sequential regression suites with high-performance concurrent grids while keeping configurations simple.",
      "Isolating synchronization issues arising from fragile third-party test environments to avoid false alarms.",
      "Automating image-based checks across responsive layouts to guarantee consistent alignment across resolutions."
    ],
    granularStack: [
      "Java 21 Core (Multithreaded APIs)",
      "Selenium Grid (Docker Cluster)",
      "TestNG & Maven profile structures",
      "Spring Boot 3 REST endpoints",
      "Linux Bash environment bootstrap scripts"
    ],
    metrics: [
      "Decreased complete regression test durations by 40% across major Capgemini systems.",
      "Guaranteed solid test stability checks, reducing false-positive test cases to less than 1%."
    ]
  },
  "proj-3": {
    role: "Billing and Revenue Assurance Specialist",
    challenges: [
      "Consolidating multiple international rate structures into a unified Singleview platform without service disruption.",
      "Crafting automated simulation models to audit diverse subscriber voucher usage across distinct geographic regions.",
      "Ensuring perfect database schema synchronization prior to launching high-value billing pipelines."
    ],
    granularStack: [
      "CSG International Billing Suite",
      "Relational Database Schema Design",
      "Aria Middleware Integration Layers",
      "Custom Linux Automation Scripts",
      "Atlassian Confluence Documentation Templates"
    ],
    metrics: [
      "Ensured zero post-release billing leaks or SLA breaks on wholesale operations.",
      "Managed safe balance migrations representing over $4M+ of active wholesale accounts."
    ]
  },
  "proj-4": {
    role: "Core Systems QA Manager & Principal Analyst",
    challenges: [
      "Formulating exhaustive end-to-end UAT scenarios for complex employee discount and retail order fulfillment rules.",
      "Resolving ordering request mismatches when upstream CRM records contained missing metadata fields.",
      "Maintaining high-cadence testing grids across multiple parallel system build versions."
    ],
    granularStack: [
      "HP ALM (Quality Center)",
      "Microsoft SQL Server Core Schema Audit",
      "SOAP / REST Web Service Mock Clients",
      "Transaction Log Analytical Parsers",
      "Selenium Cross-Browser Grids"
    ],
    metrics: [
      "Shipped multiple high-value retail releases with zero critical P1/P2 failures.",
      "Sustained 100% test planning compliance scores under strict BT group operational metrics."
    ]
  }
};

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const list = ["All"];
    projects.forEach((p) => {
      if (!list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.techs.some((t) => t.toLowerCase().includes(lowerQuery)) ||
        project.impact.toLowerCase().includes(lowerQuery);

      return matchesCategory && matchesSearch;
    });
  }, [projects, searchQuery, selectedCategory]);

  const activeDeepDive = selectedProjectForDetail 
    ? PROJECT_DEEP_DIVES[selectedProjectForDetail.id] 
    : null;

  return (
    <section 
      id="projects" 
      className="py-24 px-4 md:px-8 xl:px-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-550 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block with Premium Tone */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 select-none">
            <span className="h-[1px] w-6 bg-slate-300 dark:bg-slate-800" />
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
              PROJECT PORTFOLIO
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1 text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Architectural Artifacts & Initiatives
              </h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl">
                A highly refined selection of telecom OSS/BSS validation models, high-performance modular checking grids, and full-stack solutions led throughout my tenure.
              </p>
            </div>

            {/* Total count indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 text-xs font-mono font-medium">
              <FolderGit2 size={13} className="text-blue-500" />
              <span>{filteredProjects.length} System Initiatives</span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar (Search bar & Category buttons) */}
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-stretch">
          
          {/* Elegant Search inputs */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-550" size={15} />
            <input
              type="text"
              id="project-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search initiatives, technologies used, or business impacts..."
              className="w-full pl-11 pr-4 py-3 text-xs rounded-xl border border-slate-205 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all duration-300"
            />
          </div>

          {/* Category Filter badges selection flow */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide select-none">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1 shrink-0">
              <Filter size={11} /> Filters:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-normal transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md font-semibold"
                    : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-150 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project grid layout (Using motion fade checks) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-slate-50/40 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-855 hover:bg-white dark:hover:bg-slate-900/[0.15] hover:border-slate-900 dark:hover:border-white hover:shadow-2xl transition-all duration-350"
              >
                {/* Decorative layout top gradient bar */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                <div className="space-y-5">
                  {/* Lazy-loaded Project Image cover */}
                  <LazyImage
                    src={project.imageUrl || DEFAULT_PROJECT_IMAGES[project.id] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"}
                    alt={project.title}
                    placeholderHeight="h-44"
                    className="w-full h-44 object-cover"
                  />

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl text-[10px] font-mono uppercase tracking-wider font-extrabold bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/10 select-none">
                      {project.category}
                    </span>
                    <span className="text-xl px-2.5 py-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800 shadow-3xs select-none">
                      {project.icon || "📡"}
                    </span>
                  </div>

                  <div className="space-y-2 text-left">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-305 transition-colors duration-200 tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-sans font-medium h-12 overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology tokens representation badges style */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5 select-none text-left">
                    {project.techs.map((tech) => {
                      const config = getTechBadgeConfig(tech);
                      return (
                        <span
                          key={tech}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold tracking-tight shadow-3xs transition-all duration-200 ${config.colors}`}
                        >
                          {config.icon}
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Impact outline highlight bar */}
                <div className="mt-6 pt-5 border-t border-slate-205/60 dark:border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 text-left flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 font-bold select-none">
                      <Sparkles size={11} className="text-amber-500 shrink-0" />
                      <span>BUSINESS IMPACT DELIVERED</span>
                    </span>
                    <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
                      {project.impact}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProjectForDetail(project)}
                    className="no-print shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-blue-650 dark:hover:bg-blue-600 dark:hover:text-white text-[10px] font-mono font-bold uppercase transition-all duration-300 select-none cursor-pointer shadow-3xs hover:shadow-2xs active:scale-95"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-3xl border border-dashed border-slate-200 dark:border-slate-850 max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mx-auto text-slate-400">
              <Compass size={20} className="animate-spin" style={{ animationDuration: "10s" }} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-850 dark:text-white">No initiatives resolved</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">No projects match the active query. Try resetting filters.</p>
            </div>
          </div>
        )}

      </div>

      {/* DETAILED TECHNICAL DEEP-DIVE MODAL (With AnimatePresence) */}
      <AnimatePresence>
        {selectedProjectForDetail && activeDeepDive && (
          <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectForDetail(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
            >
              
              {/* Colored layout top accent anchor line */}
              <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400" />

              {/* Close Button absolute controller */}
              <button
                onClick={() => setSelectedProjectForDetail(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200/60 dark:border-slate-800 text-slate-405 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer z-20"
                aria-label="Close detail modal"
              >
                <X size={15} />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-left">
                
                {/* Header segment details */}
                <div className="space-y-3 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono uppercase bg-blue-500/10 text-blue-600 dark:text-sky-300 font-extrabold border border-blue-500/10">
                      {selectedProjectForDetail.category}
                    </span>
                    <span className="text-sm bg-slate-50 dark:bg-slate-900 px-2 rounded-lg border border-slate-150 dark:border-slate-850 select-none">{selectedProjectForDetail.icon}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {selectedProjectForDetail.title}
                  </h3>
                </div>

                {/* Cover visual representation placeholder */}
                <div className="relative h-48 md:h-60 rounded-2xl overflow-hidden border border-slate-205 dark:border-slate-850 select-none">
                  <img
                    src={selectedProjectForDetail.imageUrl || DEFAULT_PROJECT_IMAGES[selectedProjectForDetail.id] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"}
                    alt={selectedProjectForDetail.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white space-y-0.5">
                      <span className="text-[9px] font-mono text-blue-350 font-bold uppercase tracking-widest block">assigned role:</span>
                      <p className="text-xs md:text-sm font-bold font-sans">{activeDeepDive.role}</p>
                    </div>
                  </div>
                </div>

                {/* Multi-grid specifications */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  
                  {/* Left block information: Core Challenges (md:col-span-7) */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-900 select-none">
                      <AlertCircle size={14} className="text-amber-500" />
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 font-extrabold uppercase">Engineering Challenges</span>
                    </div>

                    <ul className="space-y-3">
                      {activeDeepDive.challenges.map((challenge, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="w-5 h-5 rounded-lg bg-orange-500/10 text-orange-500 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 select-none">
                            {i + 1}
                          </span>
                          <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-sans font-medium">
                            {challenge}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right block information: Granular Tech Stack & Outcome Metrics (md:col-span-5) */}
                  <div className="md:col-span-5 space-y-5">
                    
                    {/* Tech Stack items */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-900 select-none">
                        <Cpu size={14} className="text-blue-500" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 font-extrabold uppercase">Granular Stack Instruments</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 select-none font-mono">
                        {activeDeepDive.granularStack.map((techItem) => (
                          <span
                            key={techItem}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[9.5px] font-medium text-slate-655 dark:text-slate-400"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Performance metrics outputs */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-900 select-none">
                        <Sparkles size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 font-extrabold uppercase">Operational Yields</span>
                      </div>

                      <div className="space-y-2">
                        {activeDeepDive.metrics.map((m, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] border border-emerald-500/10">
                            <p className="text-[10.5px] font-sans font-medium hover:text-emerald-600 dark:hover:text-emerald-300 text-emerald-700 dark:text-emerald-450 leading-relaxed">
                              ✓ {m}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Bottom footer bar of Modal */}
              <div className="no-print p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900 flex justify-end gap-2 shrink-0 select-none">
                <button
                  onClick={() => setSelectedProjectForDetail(null)}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 pointer-events-auto cursor-pointer border border-slate-205 dark:border-slate-800 transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
