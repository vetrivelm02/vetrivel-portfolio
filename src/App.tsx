import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight text-slate-900">
            Vetrivel Muthusamy
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-indigo-600 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white pt-20 pb-24 md:pt-32 md:pb-36 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                Available for Solution Architect Roles
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Vetrivel Muthusamy
              </h1>
              <h2 className="text-2xl text-slate-600 font-medium leading-relaxed">
                Solution Architect &amp; Test Lead <br className="hidden md:block" /> at Capgemini
              </h2>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              Architecting scalable backend solutions and leading quality automation in the Telecom OSS/BSS space. Bridging the gap between complex business requirements and robust, performant systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:vetrivelm02@gmail.com"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm"
                style={{ boxShadow: "0 1px 3px 0 rgba(79,70,229,0.2)" }}
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/vetrivelm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-indigo-600 font-medium border-2 border-indigo-100 hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800">
                <svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-semibold text-[15px]">
                  40% reduction in regression cycle time at Capgemini
                </span>
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="relative flex justify-center items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
            <svg viewBox="0 0 400 400" className="w-full h-auto max-w-md">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" />
                </marker>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              <rect x="50" y="40" width="300" height="80" rx="8" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
              <text x="200" y="70" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="bold">BSS (Business Support)</text>
              <rect x="70" y="85" width="120" height="24" rx="4" fill="#e0e7ff" />
              <text x="130" y="101" textAnchor="middle" fill="#4f46e5" fontSize="12" fontWeight="600">Billing &amp; CRM</text>
              <rect x="210" y="85" width="120" height="24" rx="4" fill="#e0e7ff" />
              <text x="270" y="101" textAnchor="middle" fill="#4f46e5" fontSize="12" fontWeight="600">Order Mgmt</text>

              <line x1="200" y1="120" x2="200" y2="160" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="100" y="160" width="200" height="50" rx="8" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4" />
              <text x="200" y="190" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="bold">API Mediation / Kafka</text>

              <line x1="200" y1="210" x2="200" y2="250" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="50" y="250" width="300" height="80" rx="8" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
              <text x="200" y="280" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="bold">OSS (Operations Support)</text>
              <rect x="70" y="295" width="120" height="24" rx="4" fill="#e0e7ff" />
              <text x="130" y="311" textAnchor="middle" fill="#4f46e5" fontSize="12" fontWeight="600">Topology</text>
              <rect x="210" y="295" width="120" height="24" rx="4" fill="#e0e7ff" />
              <text x="270" y="311" textAnchor="middle" fill="#4f46e5" fontSize="12" fontWeight="600">Fault Mgmt</text>

              <path d="M 50 350 L 350 350" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4" />
              <circle cx="100" cy="370" r="8" fill="#cbd5e1" />
              <circle cx="200" cy="370" r="8" fill="#cbd5e1" />
              <circle cx="300" cy="370" r="8" fill="#cbd5e1" />
              <line x1="100" y1="330" x2="100" y2="362" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="200" y1="330" x2="200" y2="362" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="300" y1="330" x2="300" y2="362" stroke="#cbd5e1" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Technical Expertise</h2>
            <p className="text-slate-500 mt-2 text-lg">Structured capabilities across the modern stack.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">

              <div className="grid md:grid-cols-[240px_1fr] gap-6 p-8 items-start hover:bg-slate-50/50 transition-colors">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Telecom OSS/BSS</h3>
                  <p className="text-sm text-slate-500 mt-1">Domain architecture</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Network Topology", "NMS/EMS", "eTOM", "TM Forum", "TAM, SID", "630+ APIs"].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-[240px_1fr] gap-6 p-8 items-start hover:bg-slate-50/50 transition-colors">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Backend &amp; Cloud</h3>
                  <p className="text-sm text-slate-500 mt-1">Core services &amp; infrastructure</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[["Java 21/17", true], ["Spring Boot 3.3", true], ["REST APIs", true], ["Kafka", false], ["Docker", false], ["Kubernetes (AWS EKS)", false]].map(([t, accent]) => (
                    <span key={t as string} className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${accent ? "bg-indigo-50 text-indigo-700 border-indigo-100" : "bg-slate-100 text-slate-700 border-slate-200"}`}>{t as string}</span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-[240px_1fr] gap-6 p-8 items-start hover:bg-slate-50/50 transition-colors">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Frontend &amp; Web</h3>
                  <p className="text-sm text-slate-500 mt-1">Client-side applications</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React 18/19", "Tailwind CSS"].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-[240px_1fr] gap-6 p-8 items-start hover:bg-slate-50/50 transition-colors">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Test Automation</h3>
                  <p className="text-sm text-slate-500 mt-1">Quality engineering</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[["Modular Frameworks", true], ["Java Selenium Grid", true], ["CI/CD Integration", false]].map(([t, accent]) => (
                    <span key={t as string} className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${accent ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-100 text-slate-700 border-slate-200"}`}>{t as string}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Experience &amp; Impact</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-slate-100 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-white border-4 border-indigo-600 shadow-sm" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Solution Architect &amp; Test Lead</h3>
                  <p className="text-lg text-indigo-600 font-medium mt-1">Capgemini</p>
                </div>
                <div className="text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-md text-sm self-start">
                  2012 — Present
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-3xl mb-8 text-lg">
                Spearheading the technical strategy and quality assurance for large-scale Telecom OSS/BSS transformations. Architected scalable testing frameworks and collaborated across distributed teams to deliver high-performance microservices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-4xl">
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-bold text-slate-900">11+ Years</div>
                  <div className="text-sm font-medium text-slate-500">Telecom OSS/BSS Domain</div>
                </div>
                <div className="flex flex-col gap-1 md:border-l md:border-slate-200 md:pl-6">
                  <div className="text-3xl font-bold text-indigo-600">40% Faster</div>
                  <div className="text-sm font-medium text-slate-500">Regression Cycles</div>
                </div>
                <div className="flex flex-col gap-1 md:border-l md:border-slate-200 md:pl-6">
                  <div className="text-3xl font-bold text-slate-900">630+ APIs</div>
                  <div className="text-sm font-medium text-slate-500">Tested &amp; Validated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftWidth: 4, borderLeftColor: "#f97316" }}>
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">Certified Scrum Product Owner (CSPO)</h3>
              <p className="text-sm text-slate-500 font-medium">Scrum Alliance</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftWidth: 4, borderLeftColor: "#f59e0b" }}>
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">AWS Certified Cloud Practitioner</h3>
              <p className="text-sm text-slate-500 font-medium">Amazon Web Services</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftWidth: 4, borderLeftColor: "#ef4444" }}>
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">Oracle Certified Web Component Developer</h3>
              <p className="text-sm text-slate-500 font-medium">Oracle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 py-24 text-slate-400 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Let's build something robust.</h2>
            <p className="text-slate-400 mb-8 max-w-sm mx-auto md:mx-0">Open to Solution Architect and Lead Engineering opportunities.</p>
            <a
              href="mailto:vetrivelm02@gmail.com"
              className="text-3xl md:text-4xl font-bold text-white hover:text-indigo-400 transition-colors inline-block pb-1 border-b-2 border-transparent hover:border-indigo-400"
            >
              vetrivelm02@gmail.com
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vetrivelm/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-white transition-colors border border-slate-700"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Vetrivel Muthusamy. All rights reserved.</p>
          <p>vetrivelm02@gmail.com</p>
        </div>
      </footer>

    </div>
  );
}
