import React, { useState, useEffect } from "react";
import { Award, Briefcase, ChevronUp, Github, Linkedin, Mail, Phone, ExternalLink, RefreshCw, Layers, ShieldCheck, MapPin, Zap } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumeModal from "./components/ResumeModal";
import InteractiveBlueprint from "./components/InteractiveBlueprint";
import Milestones from "./components/Milestones";
import SkillMap from "./components/SkillMap";
import AIChatbot from "./components/AIChatbot";
import ProjectGallery from "./components/ProjectGallery";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import AdminDashboard from "./components/AdminDashboard";
import { getProjects, getBlogs } from "./db/storage";
import { Project, BlogPost } from "./types";

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Dynamic local state variables
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailStr = "vetrivelm02@gmail.com";
    navigator.clipboard.writeText(emailStr)
      .then(() => {
        triggerToast("✓ Email copied to clipboard successfully!");
      })
      .catch(() => {
        triggerToast("⚠️ Copy failed. Email: vetrivelm02@gmail.com");
      });
  };

  // Synchronize data references on updates
  useEffect(() => {
    setProjects(getProjects());
    setBlogs(getBlogs());
  }, [refreshTrigger]);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleRefreshData = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500 font-sans antialiased">
      
      {/* Redesigned Premium Navbar */}
      <Navbar
        isAdminMode={isAdminMode}
        onAdminToggle={() => setIsAdminMode(true)}
        onViewAsVisitor={() => setIsAdminMode(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main content viewport block */}
      <main className="flex-grow pt-16">
        {isAdminMode ? (
          // Secure layout configuration console
          <div className="animate-fade-up max-w-7xl mx-auto py-10 px-4 md:px-8">
            <AdminDashboard onDataChanged={handleRefreshData} />
          </div>
        ) : (
          // High-Fidelity Professional Visitor Journey
          <div className="space-y-0">
            
            {/* 1. Fully polished landing hero section */}
            <Hero
              onExploreProjects={() => scrollToSection("projects")}
              onExploreVision={() => scrollToSection("vision-section")}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* 2. Professional career vertical timeline ("Why Solution Architect?") */}
            <section 
              id="vision-section" 
              className="py-24 px-4 md:px-8 xl:px-16 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-t border-slate-105 dark:border-slate-900 transition-colors duration-500"
            >
              <div className="max-w-4xl mx-auto space-y-16">
                
                {/* Section header block */}
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2 select-none">
                    <span className="h-[1px] w-6 bg-slate-400 dark:bg-slate-700" />
                    <span className="font-mono text-xs text-slate-404 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                      CAREER ALIGNMENT & MISSION
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Why Solution Architect?
                  </h2>
                  <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                    An elite architect doesn’t simply stack libraries; they understand customer domain needs, eliminate system drag, and map core technical logic into highly robust, zero-leakage production structures.
                  </p>
                </div>

                {/* Vertical high-fidelity blueprint line design */}
                <div className="space-y-12 relative border-l border-slate-200/80 dark:border-slate-850 pl-8 ml-4 select-none">
                  
                  {/* Step Segment 1 */}
                  <div className="relative group text-left">
                    {/* Visual node representation block */}
                    <div className="absolute -left-11 top-0 w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400 group-hover:border-slate-950 dark:group-hover:border-white transition-all duration-300">
                      1
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Phase 1: Domain Mastery & QA (2014 – 2021)
                      </h4>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Telecom OSS/BSS Explorer
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium max-w-2xl">
                        Acquired exhaustive depth tracking protocol validations across network topology structures. Conducted complex interface testing with direct accountability over SLA audit rules, rate plans, and Carrier invoicing frameworks.
                      </p>
                    </div>
                  </div>

                  {/* Step Segment 2 */}
                  <div className="relative group text-left">
                    <div className="absolute -left-11 top-0 w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400 group-hover:border-slate-950 dark:group-hover:border-white transition-all duration-300">
                      2
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 dark:text-slate-505">
                        Phase 2: Full-Stack Expansion
                      </h4>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Full-Stack Developer Fluency
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium max-w-2xl">
                        Invested deep personal cycles into modern enterprise toolsets—Java backend architectures (Spring Boot), Docker containers, relational schemas, RESTful mediators, and React. Expressly engineered to speak developers' languages natively.
                      </p>
                    </div>
                  </div>

                  {/* Step Segment 3 */}
                  <div className="relative group text-left">
                    <div className="absolute -left-11 top-0 w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400 group-hover:border-slate-950 dark:group-hover:border-white transition-all duration-300">
                      3
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 dark:text-slate-505">
                        Phase 3: Team Lead & Quality Architecture (2022 – Present)
                      </h4>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Test Architect & QA Lead @ Capgemini
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium max-w-2xl">
                        Driving high-performance Selenium frameworks across multi-million dollar client delivery channels. Translating business requirements directly into zero-downtime regression pipelines while maintaining pristine agile CSPO sprint speeds.
                      </p>
                    </div>
                  </div>

                  {/* Step Segment 4 */}
                  <div className="relative group text-left">
                    <div className="absolute -left-11 top-0 w-6 h-6 rounded-lg bg-slate-900 border border-slate-900 dark:bg-white dark:border-white flex items-center justify-center text-[10.5px] text-white dark:text-slate-900 font-extrabold shadow-sm">
                      ★
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-blue-600 dark:text-sky-400">
                        Target Role Destination
                      </h4>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Solution Architect (OSS/BSS Core Systems)
                      </h3>
                      <p className="text-xs md:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans font-medium max-w-2xl">
                        Synthesizing an organic combination of extensive domain analytics, deep full-stack microservices design capacity, carrier integration experience, and Scrum Team credentials to construct durable systems of the future.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* 3. Interactive Sandbox Segment */}
            <InteractiveBlueprint />

            {/* 4. Timeline analytics charts */}
            <Milestones />

            {/* 5. Interactive Skill Map component using Recharts */}
            <SkillMap />

            {/* 6. Project gallery block */}
            <ProjectGallery projects={projects} />

            {/* 6. Blog segment chronicles */}
            <BlogSection blogs={blogs} />

            {/* 7. Beautifully proportioned Contact module */}
            <ContactForm onMessageSubmitted={handleRefreshData} />

          </div>
        )}
      </main>

      {/* Redesigned Premium Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-850/65 py-12 px-4 md:px-8 lg:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left select-none">
          
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-500 font-bold leading-normal">
              VETRIVEL MUTHUSAMY
            </h4>
            <p className="text-[10px] md:text-[11px] text-slate-400 dark:text-slate-500 max-w-md">
              © 2026. Custom designed with meticulous attention to detail. Fast, accessible, and compliant.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-450 dark:text-slate-450">
            <button 
              onClick={handleCopyEmail}
              id="footer-copy-email-trigger"
              className="hover:text-slate-950 dark:hover:text-white text-slate-500 dark:text-slate-400 transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none outline-none font-mono font-bold uppercase tracking-wider text-[10.5px]"
              title="Click to copy email coordinate"
            >
              <Mail size={12} className="shrink-0 text-blue-500" />
              <span>Copy Email</span>
            </button>
            <span className="text-slate-200 dark:text-slate-800 md:block hidden">·</span>
            
            <a 
              href="https://linkedin.com/in/vetrivelm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-950 dark:hover:text-white text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10.5px]"
            >
              linkedin
            </a>
            <span className="text-slate-200 dark:text-slate-800 md:block hidden">·</span>

            <a 
              href="https://github.com/vetrivelm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-950 dark:hover:text-white text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10.5px]"
            >
              github
            </a>
            <span className="text-slate-200 dark:text-slate-800 md:block hidden">·</span>

            {/* Exp counter segment */}
            <span className="text-[9.5px] uppercase font-black text-slate-500 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 px-3 py-1.5 rounded-xl text-slate-400 dark:text-slate-400">
              <RefreshCw size={10} className="animate-spin duration-3000 text-emerald-500 shrink-0" />
              <span>11+ YRS QUALITY LEADERSHIP</span>
            </span>
          </div>

        </div>
      </footer>

      {/* Floating Clipboard Copy Alert Toast */}
      {toastMessage && (
        <div 
          id="clipboard-toast"
          className="fixed bottom-10 right-6 z-55 flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-800 dark:bg-white dark:border-slate-205 text-white dark:text-slate-900 text-xs font-mono rounded-xl shadow-2xl transition-all duration-300 animate-slide-in-right"
        >
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-sans font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Modern scroll top locator element button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Scroll to top"
          className="fixed bottom-6 right-8 w-11 h-11 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center hover:scale-105 shadow-xl transition-all duration-300 cursor-pointer z-45"
        >
          <ChevronUp size={16} />
        </button>
      )}

      {/* Floating Chatbot Integration Component */}
      <AIChatbot />

      {/* Customizable CV Modal container component */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
