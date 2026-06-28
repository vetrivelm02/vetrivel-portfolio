import React, { useState } from "react";
import { 
  X, 
  Download, 
  Printer, 
  Eye, 
  Check, 
  Sparkles, 
  Briefcase, 
  Award, 
  BookOpen, 
  Mail, 
  Linkedin, 
  Smartphone, 
  Globe, 
  SlidersHorizontal,
  ChevronDown,
  Info,
  Github
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Resume Customizer configuration states
  const [includeTimeline, setIncludeTimeline] = useState(true);
  const [includeCuredFailures, setIncludeCuredFailures] = useState(true);
  const [includeCertifications, setIncludeCertifications] = useState(true);
  const [printLayout, setPrintLayout] = useState<"standard" | "compact" | "modern">("modern");
  const [isExporting, setIsExporting] = useState(false);
  const [exportStep, setExportStep] = useState("");

  if (!isOpen) return null;

  // Custom high-precision simulated export flow triggering beautiful PDF layout printing
  const handleTriggerExportPDF = () => {
    setIsExporting(true);
    setExportStep("Resolving CSS standards (TM-Forum style)...");
    
    setTimeout(() => {
      setExportStep("Optimizing page layouts to single-page A4 format...");
    }, 400);

    setTimeout(() => {
      setExportStep("Pruning active UI controls...");
    }, 850);

    setTimeout(() => {
      setIsExporting(false);
      setExportStep("");
      
      // Trigger native browser print flow
      // It is standard practice to use `@media print` styles which we've embedded for pristine rendering
      window.print();
    }, 1200);
  };

  return (
    <div 
      id="resume-modal-container"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-sm animate-fade-in print:hidden"
    >
      <div 
        id="resume-backdrop-closer"
        className="absolute inset-0 cursor-default" 
        onClick={onClose} 
      />
      
      {/* Outer frame styling */}
      <div 
        id="resume-modal-body"
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-205 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[85vh] animate-scale-up"
      >
        
        {/* Left pane: Modular Customizer Dashboard (Architect console) */}
        <div className="w-full md:w-80 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-850 p-6 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-6">
            
            {/* Title block */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase font-black">Interactive Toolkit</span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">CV Customizer</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tune the underlying data schema directly. Tailor what recruiters see in the generated file.
              </p>
            </div>

            {/* Layout Configuration Options */}
            <div className="space-y-4">
              <span className="block text-[10px] font-mono tracking-wider text-slate-400 dark:text-slate-550 uppercase font-bold">
                Design Presets
              </span>

              <div className="grid grid-cols-3 gap-1 bg-slate-200/50 dark:bg-slate-900 p-1 rounded-lg border border-slate-300/30 dark:border-slate-800">
                <button
                  onClick={() => setPrintLayout("standard")}
                  className={`py-1.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    printLayout === "standard"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                  }`}
                >
                  Classic
                </button>
                <button
                  onClick={() => setPrintLayout("modern")}
                  className={`py-1.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    printLayout === "modern"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                  }`}
                >
                  Modern
                </button>
                <button
                  onClick={() => setPrintLayout("compact")}
                  className={`py-1.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    printLayout === "compact"
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                  }`}
                >
                  Dense
                </button>
              </div>
            </div>

            {/* Content Toggles */}
            <div className="space-y-3.5">
              <span className="block text-[10px] font-mono tracking-wider text-slate-400 dark:text-slate-550 uppercase font-bold">
                Document Structure
              </span>

              <div className="space-y-2.5">
                {/* Toggle 1: Chronological timeline */}
                <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 cursor-pointer hover:border-slate-300 dark:hover:border-slate-705 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-850 dark:text-slate-200">Career Phase Timeline</span>
                    <span className="text-[9.5px] text-slate-500">Enable vertical milestone line</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={includeTimeline} 
                    onChange={(e) => setIncludeTimeline(e.target.checked)}
                    className="w-3.5 h-3.5 accent-blue-600 rounded cursor-pointer"
                  />
                </label>

                {/* Toggle 2: Avoided Outages block */}
                <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 cursor-pointer hover:border-slate-300 dark:hover:border-slate-705 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-850 dark:text-slate-200">System Outages Overcome</span>
                    <span className="text-[9.5px] text-slate-500">Highly effective peer metrics</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={includeCuredFailures} 
                    onChange={(e) => setIncludeCuredFailures(e.target.checked)}
                    className="w-3.5 h-3.5 accent-blue-600 rounded cursor-pointer"
                  />
                </label>

                {/* Toggle 3: Agile CSPO Verification */}
                <label className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 cursor-pointer hover:border-slate-300 dark:hover:border-slate-705 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-850 dark:text-slate-200">CSPO Certification Block</span>
                    <span className="text-[9.5px] text-slate-500">Highlight product owner credentials</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={includeCertifications} 
                    onChange={(e) => setIncludeCertifications(e.target.checked)}
                    className="w-3.5 h-3.5 accent-blue-600 rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="flex gap-2 p-3 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-150 dark:border-blue-900/50 rounded-xl text-[10.5px] text-slate-600 dark:text-slate-400">
              <Info size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <p className="leading-normal">
                <strong>Pro-Tip:</strong> Set file destination to <strong>"Save as PDF"</strong> in the browser print console for a standard, pixel-perfect physical resume.
              </p>
            </div>

          </div>

          {/* Download Action Triggers */}
          <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800/60">
            {isExporting ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-blue-500 font-bold animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                  <span>PREPARING PDF DOWNLOAD ENGINE...</span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono italic">{exportStep}</p>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1 overflow-hidden">
                  <div className="bg-blue-500 h-full w-2/3 animate-scroll" />
                </div>
              </div>
            ) : (
              <button 
                onClick={handleTriggerExportPDF}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
              >
                <Printer size={13} />
                <span>EXPORT TO PDF / PRINT</span>
              </button>
            )}

            <button 
              onClick={onClose}
              className="w-full py-2 px-4 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg text-[10.5px] font-mono font-medium transition-all cursor-pointer uppercase text-center"
            >
              Close Preview
            </button>
          </div>
        </div>

        {/* Right pane: Living PDF Preview (Interactive Paper) */}
        <div className="flex-grow bg-slate-100 dark:bg-slate-950 p-4 md:p-8 overflow-y-auto flex justify-center items-start">
          
          {/* Virtual Sheet container */}
          <div 
            id="printable-cv-form"
            className={`w-full max-w-[210mm] min-h-[297mm] bg-white text-slate-900 border shadow-lg transition-all duration-300 flex flex-col justify-between ${
              printLayout === "compact" 
                ? "p-6 text-[11px] leading-snug space-y-3" 
                : printLayout === "standard"
                ? "p-8 md:p-10 text-[13px] leading-relaxed space-y-5 font-serif"
                : "p-8 md:p-10 text-[12px] leading-normal space-y-4.5 font-sans"
            }`}
            style={{
              fontFamily: printLayout === "standard" ? "'Georgia', serif" : "'Inter', sans-serif"
            }}
          >
            
            {/* Resume Content */}
            <div className="space-y-4">
              
              {/* Header section */}
              <div className="border-b-2 border-slate-950 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div className="space-y-1">
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950 uppercase">
                    Vetrivel Muthusamy
                  </h1>
                  <p className="font-mono text-xs text-blue-600 font-bold tracking-wider uppercase">
                    Solution Architect — Test Architect & Lead
                  </p>
                </div>

                {/* Metadata details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[10.5px] font-mono text-slate-650 shrink-0">
                  <span className="flex items-center gap-1"><Mail size={11} className="text-slate-500" /> vetrivelm02@gmail.com</span>
                  <span className="flex items-center gap-1"><Smartphone size={11} className="text-slate-500" /> (+91) 9916008877</span>
                  <span className="flex items-center gap-1"><Linkedin size={11} className="text-slate-500" /> linkedin.com/in/vetrivelm</span>
                  <span className="flex items-center gap-1"><Github size={11} className="text-slate-500" /> github.com/vetrivelm</span>
                  <span className="flex items-center gap-1"><Globe size={11} className="text-slate-500" /> Bengaluru, India</span>
                </div>
              </div>

              {/* Professional Profile */}
              <div className="space-y-1.5">
                <h3 className="text-[11px] font-mono font-black text-slate-950 uppercase tracking-widest border-b border-slate-201 pb-1">
                  Professional Blueprint Executive Summary
                </h3>
                <p className="text-slate-700 leading-relaxed text-xs">
                  A highly skilled software engineer specializing in designing, developing, and deploying high-quality software solutions. Proficient in software architecture, automation, and efficient coding practices, consistently enhancing operational efficiency and streamlining processes. Possesses a proven track record of delivering complex telecommunications projects on time while maintaining strong client communication. Expertise spans tool and application development, ensuring robust, scalable, and maintainable software products. Adept at bridging technical and client needs.
                </p>
              </div>

              {/* Core Skill Matrix Grid */}
              <div className="space-y-2">
                <h3 className="text-[11px] font-mono font-black text-slate-950 uppercase tracking-widest border-b border-slate-201 pb-1">
                  Validated Matrix Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                  <div className="space-y-1">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Systems & Telecom Core</span>
                    <p className="text-slate-700 text-xs">
                      Customer Provisioning, Rating, Billing, Invoicing (VZ450), Late Payments, Adjustments, Payments, Electronic Billing (EB), BDT (Bill Data Tape) Modules, Singleview Database structure.
                    </p>
                  </div>
                  <div className="space-y-1 border-t sm:border-y-0 sm:border-x border-slate-100 sm:px-3 pt-2 sm:pt-0">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">QA & Agility Credentials</span>
                    <p className="text-slate-700 text-xs">
                      QA bill run & revenue assurance, 3GPP2 CDMA and 3GPP 5G/4G/3G/2G system testing, LTE/5G NR protocol testing (L1/L2/L3), Selenium Grid, HP ALM, JIRA.
                    </p>
                  </div>
                  <div className="space-y-1 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Management & Roles</span>
                    <p className="text-slate-700 text-xs">
                      Project Management, Scrum Master, Business Analyst, SDLC/STLC processes, Agile Methodology, Agile Management, Certified Scrum Product Owner (CSPO).
                    </p>
                  </div>
                </div>
              </div>

              {/* System Pitfalls highlight */}
              {includeCuredFailures && (
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg space-y-1.5">
                  <div className="text-[10px] font-mono font-black text-slate-900 tracking-wider">
                    ★ CRITICAL ENTERPRISE OUTAGES DETECTED & RESOLVED BY VETRIVEL
                  </div>
                  <ul className="text-[11px] text-slate-700 space-y-1 list-disc pl-4">
                    <li>
                      <strong>Billing Leakage Blocked:</strong> Prevented massive post-release subscriber contract synchronization mismatches saving millions of potential leakage dollars.
                    </li>
                    <li>
                      <strong>SNMP Trap-Storm Intercept:</strong> Mitigated telemetry queue overflows under simulated network disaster traps using custom throttling validation rules.
                    </li>
                    <li>
                      <strong>Mediation Race Conditions cured:</strong> Untangled concurrent microservice request collisions by integrating rigorous integration frameworks.
                    </li>
                  </ul>
                </div>
              )}

              {/* Career Chronology Map */}
              <div className="space-y-2">
                <h3 className="text-[11px] font-mono font-black text-slate-950 uppercase tracking-widest border-b border-slate-201 pb-1">
                  Professional Experience Chronology
                </h3>

                <div className={`space-y-3.5 pt-1 ${includeTimeline ? "border-l border-slate-300 pl-4.5 ml-2" : ""}`}>
                  
                  {/* Capgemini Role */}
                  <div className="relative">
                    {includeTimeline && (
                      <div className="absolute -left-7 top-[5px] w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
                    )}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <h4 className="text-xs font-bold text-slate-950">Senior Professional 1</h4>
                        <p className="text-[11px] font-mono text-slate-500">Capgemini — Bengaluru, India</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase tracking-wider font-semibold">Jan 2022 — Present</span>
                    </div>
                    <ul className="list-disc pl-4 text-slate-700 text-[11.5px] mt-1.5 space-y-0.5">
                      <li>Expert testing with 3GPP2 CDMA & 3GPP 5G/4G/3G/2G carrier platforms. Support client teams for UAT activities and release management.</li>
                      <li>Received Outstanding Contribution in Delivery Award (Q2 2022) and Customer Delight Award (Q3 2022).</li>
                    </ul>
                  </div>

                  {/* Prodapt Role */}
                  <div className="relative">
                    {includeTimeline && (
                      <div className="absolute -left-7 top-[5px] w-2.5 h-2.5 rounded-full bg-slate-400 border border-white" />
                    )}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <h4 className="text-xs font-bold text-slate-950">Lead Engineer</h4>
                        <p className="text-[11px] font-mono text-slate-500">Prodapt Solutions</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase tracking-wider font-semibold">Jan 2021 — Jan 2022</span>
                    </div>
                    <ul className="list-disc pl-4 text-slate-700 text-[11.5px] mt-1.5 space-y-0.5">
                      <li>Designed end-to-end integration mapping over Singleview Billing System core modules, including customer provisioning, rating, invoicing, payments, collections, and bill-run operations.</li>
                    </ul>
                  </div>

                  {/* Cognizant Role */}
                  <div className="relative">
                    {includeTimeline && (
                      <div className="absolute -left-7 top-[5px] w-2.5 h-2.5 rounded-full bg-slate-400 border border-white" />
                    )}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <h4 className="text-xs font-bold text-slate-950">Project Associate</h4>
                        <p className="text-[11px] font-mono text-slate-500">Cognizant Technology Solutions India Ltd</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase tracking-wider font-semibold">Feb 2019 — Jan 2021</span>
                    </div>
                    <ul className="list-disc pl-4 text-slate-700 text-[11.5px] mt-1.5 space-y-0.5">
                      <li>Orchestrated system integration testing (SIT) between multiple core components of Singleview postpaid charging, resolving complex data flow errors.</li>
                    </ul>
                  </div>

                  {/* Tech Mahindra, Accenture & Gapbridge */}
                  <div className="relative">
                    {includeTimeline && (
                      <div className="absolute -left-7 top-[5px] w-2.5 h-2.5 rounded-full bg-slate-400 border border-white" />
                    )}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <h4 className="text-xs font-bold text-slate-950">E2E Test Specialist (Various Roles)</h4>
                        <p className="text-[11px] font-mono text-slate-500">Tech Mahindra | Accenture | Gapbridge Software</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase tracking-wider font-semibold font-bold">Nov 2014 — Feb 2019</span>
                    </div>
                    <ul className="list-disc pl-4 text-slate-700 text-[11.5px] mt-1.5 space-y-0.5">
                      <li>Led British Telecom customer ordering, employee discount e-commerce automations, and live interlock UAT testing operations.</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Education & credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-1">
                {/* Education section */}
                <div className="space-y-1.5">
                  <h3 className="text-[11px] font-mono font-black text-slate-950 uppercase tracking-widest border-b border-slate-201 pb-1">
                    Academic Background
                  </h3>
                  <div className="space-y-1">
                    <div>
                      <h4 className="text-xs font-bold text-slate-950">M.Sc in Science (MS)</h4>
                      <p className="text-[10.5px] text-slate-500 font-mono">Liverpool John Moores University (2022)</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-950">BCA (Bachelor of Computer Applications)</h4>
                      <p className="text-[10.5px] text-slate-500 font-mono">Bharathidasan University, Trichy (2012)</p>
                    </div>
                  </div>
                </div>

                {/* CSPO & certifications section */}
                {includeCertifications && (
                  <div className="space-y-1.5">
                    <h3 className="text-[11px] font-mono font-black text-slate-950 uppercase tracking-widest border-b border-slate-201 pb-1">
                      Industry Endorsements
                    </h3>
                    <ul className="text-xs text-slate-700 space-y-1 font-mono text-[10px]">
                      <li className="flex items-center gap-1.5 text-slate-900 font-bold">
                        <Award size={12} className="text-amber-500 shrink-0" /> Certified Scrum Product Owner (CSPO)
                      </li>
                      <li className="flex items-center gap-1.5 text-slate-600">
                        ✓ Quality Assurance Lead Method Standards (Capgemini)
                      </li>
                    </ul>
                  </div>
                )}
              </div>

            </div>

            {/* Print Only Footer */}
            <div className="text-center font-mono text-[9px] text-slate-400 pt-6 border-t border-slate-100 flex justify-between">
              <span>DESIGNED AND GENERATED DIRECTLY FROM THE SYSTEM</span>
              <span>vetrivel.arch/resume</span>
            </div>

          </div>
        </div>

      </div>

      {/* Tailwind Print Override Stylesheet integration injected direct for exact formats */}
      <style>{`
        @media print {
          /* Hide all outer components and force the sheet to render perfectly */
          body * {
            visibility: hidden !important;
          }
          #printable-cv-form, #printable-cv-form * {
            visibility: visible !important;
          }
          #printable-cv-form {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            color: black !important;
          }
          @page {
            size: A4;
            margin: 1.5cm;
          }
        }
      `}</style>
    </div>
  );
}
