import { useState, useMemo } from "react";
import { Search, FolderGit2, Sparkles, Filter, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  return (
    <section 
      id="projects" 
      className="py-24 px-4 md:px-8 xl:px-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500"
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
            <div className="space-y-1">
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
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-slate-50/40 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 hover:bg-white dark:hover:bg-slate-900/[0.15] hover:border-slate-900 dark:hover:border-white hover:shadow-2xl transition-all duration-350"
              >
                {/* Decorative layout top gradient bar */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                <div className="space-y-5">
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
                    <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-sans font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology tokens representation badges style */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5 select-none text-left">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 shadow-3xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact outline highlight bar */}
                <div className="mt-6 pt-5 border-t border-slate-205/60 dark:border-slate-900 flex items-center justify-between gap-4">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 font-bold select-none">
                      <Sparkles size={11} className="text-amber-500 shrink-0" />
                      <span>BUSINESS IMPACT DELIVERED</span>
                    </span>
                    <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
                      {project.impact}
                    </span>
                  </div>
                  
                  <div className="shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-605 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-3xl border border-dashed border-slate-200 dark:border-slate-850 max-w-md mx-auto space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 mx-auto">
              <FolderGit2 size={24} />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-350">No structural projects matching</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                We couldn't locate actions or items with those filters. Use the terminal console to upload new models dynamically!
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
