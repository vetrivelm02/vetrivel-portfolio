import { useState, useEffect } from "react";
import { Terminal, Sun, Moon, Lock, Unlock, Eye, FileText, Monitor, ChevronDown } from "lucide-react";

interface NavbarProps {
  onAdminToggle: () => void;
  isAdminMode: boolean;
  onViewAsVisitor: () => void;
  onOpenResume?: () => void;
}

export default function Navbar({ onAdminToggle, isAdminMode, onViewAsVisitor, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  type ThemeMode = "light" | "dark" | "system";
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("vetrivel_portfolio_theme_mode") as ThemeMode;
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
    const oldTheme = localStorage.getItem("vetrivel_portfolio_theme");
    if (oldTheme) {
      return oldTheme === "dark" ? "dark" : "light";
    }
    return "system";
  });

  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    const applyTheme = () => {
      let isDarkActive = false;
      if (themeMode === "system") {
        isDarkActive = window.matchMedia("(prefers-color-scheme: dark)").matches;
      } else {
        isDarkActive = themeMode === "dark";
      }

      if (isDarkActive) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
      }
    };

    applyTheme();
    localStorage.setItem("vetrivel_portfolio_theme_mode", themeMode);

    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme();
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [themeMode]);

  return (
    <nav
      id="portfolio-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center justify-between px-4 md:px-8 lg:px-12 border-b ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200/65 dark:border-slate-850/60 shadow-xs"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Brand logo */}
      <div className="flex items-center gap-3">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 text-[11px] font-mono font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
            VM
          </div>
          <span className="font-sans font-extrabold text-sm tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
            vetrivel<span className="text-zinc-400 font-normal">.arch</span>
          </span>
        </a>
      </div>

      {/* Center Nav Anchors */}
      <div className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-900/40 p-1 rounded-xl border border-slate-200/30 dark:border-slate-800/20 shadow-4xs select-none">
        <a
          href="#home"
          className="px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider font-bold uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
        >
          story
        </a>
        <a
          href="#projects"
          className="px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider font-bold uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
        >
          showcase
        </a>
        <a
          href="#reflections"
          className="px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider font-bold uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
        >
          reflections
        </a>
        <a
          href="#contact"
          className="px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider font-bold uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
        >
          contact
        </a>
      </div>

      {/* Right Controls Area */}
      <div className="flex items-center gap-3">
        {/* Availability Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold tracking-wider select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR CORPS
        </div>

        {/* Generate / Export CV indicator button */}
        {onOpenResume && (
          <button
            onClick={onOpenResume}
            id="resumeBtn"
            title="Generate & Export CV"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-205 dark:border-slate-800 hover:border-slate-800 dark:hover:border-white bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-350 text-[10.5px] font-mono font-bold tracking-wider uppercase transition-all duration-350 cursor-pointer shadow-3xs"
          >
            <FileText size={13} className="shrink-0" />
            <span className="hidden sm:inline">Export CV</span>
          </button>
        )}

        {/* Dark/Light mode theme selector dropdown */}
        <div className="relative" id="theme-switcher-wrapper select-none">
          <button
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            id="theme-toggle-btn"
            title="Toggle theme mode"
            className="h-8 px-2.5 rounded-xl flex items-center gap-1.5 border border-slate-200 dark:border-slate-805 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200 text-xs font-mono cursor-pointer"
          >
            {themeMode === "light" && <Sun size={13} className="text-amber-500 animate-spin duration-3000" />}
            {themeMode === "dark" && <Moon size={13} className="text-indigo-400" />}
            {themeMode === "system" && <Monitor size={13} className="text-emerald-400" />}
            <span className="uppercase text-[9.5px] tracking-widest hidden sm:inline font-bold">{themeMode}</span>
            <ChevronDown size={11} className={`opacity-60 transition-transform duration-200 md:block hidden ${isThemeMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {isThemeMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-45 cursor-default" 
                onClick={() => setIsThemeMenuOpen(false)} 
              />
              <div 
                id="theme-menu-dropdown"
                className="absolute right-0 mt-2 w-32 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1.5 shadow-2xl font-mono text-[10px] z-50 space-y-0.5 text-left"
              >
                <button
                  onClick={() => {
                    setThemeMode("light");
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer font-bold ${
                    themeMode === "light"
                      ? "bg-slate-100 text-slate-950 dark:text-sky-350"
                      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  <Sun size={12} className="text-amber-500" />
                  <span>Light</span>
                </button>

                <button
                  onClick={() => {
                    setThemeMode("dark");
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer font-bold ${
                    themeMode === "dark"
                      ? "bg-slate-800 text-slate-100"
                      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  <Moon size={12} className="text-indigo-400" />
                  <span>Dark</span>
                </button>

                <button
                  onClick={() => {
                    setThemeMode("system");
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer font-bold ${
                    themeMode === "system"
                      ? "bg-slate-100 dark:bg-slate-905 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white"
                      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  <Monitor size={12} className="text-emerald-400" />
                  <span>System</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Administration Console Quick Launcher */}
        {isAdminMode ? (
          <button
            onClick={onViewAsVisitor}
            id="visitor-view-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-505 text-[10.5px] font-mono font-bold tracking-wider transition-all duration-200 shadow-4xs"
          >
            <Eye size={12} />
            <span className="hidden sm:inline">Visitor</span>
          </button>
        ) : (
          <button
            onClick={onAdminToggle}
            id="admin-dashboard-toggle-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-905 text-[10.5px] font-mono font-bold tracking-wider transition-all duration-200 shadow-4xs"
          >
            <Lock size={12} className="opacity-60" />
            <span className="hidden sm:inline">Console</span>
          </button>
        )}
      </div>
    </nav>
  );
}
