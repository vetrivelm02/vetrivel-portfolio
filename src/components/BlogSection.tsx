import { useState, useMemo } from "react";
import { BookOpen, Search, Clock, Calendar, ChevronRight, X, ArrowRight } from "lucide-react";
import { BlogPost } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface BlogSectionProps {
  blogs: BlogPost[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const publishedBlogs = useMemo(() => {
    return blogs.filter((b) => b.status === "published");
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return publishedBlogs;
    const q = searchQuery.toLowerCase();
    return publishedBlogs.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.content.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [publishedBlogs, searchQuery]);

  const formattedDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return "June 2026";
    }
  };

  return (
    <section 
      id="reflections" 
      className="py-24 px-4 md:px-8 xl:px-16 bg-slate-50/50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 transition-colors duration-500 border-t border-b border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title Block with Premium Minimalist Styling */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2 select-none">
            <span className="h-[1px] w-6 bg-slate-350 dark:bg-slate-700" />
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
              SYSTEM MEMOIRS & CHRONICLES
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engineering Reflections
              </h2>
              <p className="text-sm md:text-base text-slate-505 dark:text-slate-400 max-w-lg">
                Technical logs, architectural deep dives, and system learnings accumulated over 11 years within bulk carrier infrastructures.
              </p>
            </div>

            {/* Indicator badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/15 border border-indigo-500/10 text-indigo-650 dark:text-indigo-405 text-xs font-mono font-medium self-start sm:self-auto select-none">
              <BookOpen size={13} className="text-indigo-550 dark:text-indigo-400" />
              <span>{filteredBlogs.length} Articles Live</span>
            </div>
          </div>
        </div>

        {/* Search Input bar */}
        <div className="relative max-w-md select-none">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-505" size={15} />
          <input
            type="text"
            id="blog-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search engineering papers, parameters or topics..."
            className="w-full pl-11 pr-4 py-2.5 text-xs rounded-xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-850 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
          />
        </div>

        {/* Dynamic blog list items */}
        {filteredBlogs.length > 0 ? (
          <div className="space-y-8 select-none">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 hover:bg-slate-50/50 dark:hover:bg-slate-900/10 hover:border-slate-900 dark:hover:border-white hover:shadow-xs transition-all duration-350 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  
                  {/* Category badge */}
                  <span className="inline-block px-3 py-1 rounded-xl text-[10px] font-mono uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-extrabold self-start sm:self-auto border border-indigo-500/10">
                    {post.category}
                  </span>

                  {/* Timestamp metadata */}
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} className="shrink-0" /> {formattedDate(post.createdAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="shrink-0" /> {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Text blocks */}
                <div className="space-y-2 text-left">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-250 tracking-tight leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-3xl">
                    {post.summary}
                  </p>
                </div>

                {/* Read item anchor row styling */}
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-black text-slate-450 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 pt-5 mt-4 border-t border-slate-100 dark:border-slate-850/60 transition-colors duration-250">
                  <span>DEPLOY COMPLETE MEMOIR</span>
                  <ChevronRight size={12} className="group-hover:translate-x-1.5 duration-200 text-indigo-550 dark:text-indigo-400" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-3xl border border-dashed border-slate-200 dark:border-slate-850 max-w-md mx-auto space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-slate-55 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 mx-auto">
              <BookOpen size={22} />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-350">No memoirs located</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                No matching reflections found. Adjust query strings to explore other system concepts.
              </p>
            </div>
          </div>
        )}

        {/* Modal layout for reading one full reflection */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-55 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-8 relative shadow-2xl">
                
                {/* Dismiss button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200 cursor-pointer"
                  title="Close Reflection"
                >
                  <X size={16} />
                </button>

                <div className="space-y-4 text-left">
                  <span className="inline-block px-3 py-1 rounded-xl text-[10px] font-mono uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-6 =00 dark:text-indigo-400 text-indigo-600 border border-indigo-500/10">
                    {selectedPost.category}
                  </span>

                  <h1 className="text-xl md:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight tracking-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-500 pt-1 border-b border-slate-100 dark:border-slate-900 pb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formattedDate(selectedPost.createdAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                {/* Analytical body prose styled highly cleanly */}
                <div className="prose dark:prose-invert prose-slate text-xs md:text-sm text-slate-650 dark:text-slate-300 leading-relaxed space-y-5 text-left font-sans">
                  {selectedPost.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("## ")) {
                      return (
                        <h2 key={i} className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-sans pt-3 tracking-tight border-b border-slate-100 dark:border-slate-900 pb-2">
                          {para.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (para.startsWith("### ")) {
                      return (
                        <h3 key={i} className="text-base font-bold text-slate-950 dark:text-white font-sans pt-2">
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (para.startsWith("* ")) {
                      return (
                        <ul key={i} className="list-disc pl-5 text-slate-605 dark:text-slate-400 space-y-2 text-xs md:text-sm my-3 font-medium">
                          {para.split("\n").map((line, li) => {
                            const lineClean = line.substring(2)
                              .replace(/\*\*(.*?)\*\*/g, "$1")
                              .replace(/\*(.*?)\*/g, "$1");
                            return <li key={li}>{lineClean}</li>;
                          })}
                        </ul>
                      );
                    }
                    
                    const formattedText = para
                      .replace(/\*\*(.*?)\*\*/g, "<strong class='text-slate-900 dark:text-white font-extrabold'>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em class='italic text-slate-800 dark:text-slate-200'>$1</em>");
                    return (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{ __html: formattedText }}
                        className="text-slate-600 dark:text-slate-300 leading-relaxed"
                      />
                    );
                  })}
                </div>

                {/* Dismiss control */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    DISMISS PAPER
                  </button>
                </div>

              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
