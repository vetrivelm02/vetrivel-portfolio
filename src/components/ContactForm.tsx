import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, Linkedin, Github } from "lucide-react";
import { addMessage } from "../db/storage";

interface ContactFormProps {
  onMessageSubmitted: () => void;
}

export default function ContactForm({ onMessageSubmitted }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMsg("All input lines are required. Please check empty fields.");
      setIsSubmitting(false);
      return;
    }

    if (trimmedName.length > 100) {
      setStatus("error");
      setErrorMsg("Name string surpasses maximum acceptable length borders.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid active email address.");
      setIsSubmitting(false);
      return;
    }

    if (trimmedMessage.length > 2000) {
      setStatus("error");
      setErrorMsg("Message body surpasses standard storage constraints.");
      setIsSubmitting(false);
      return;
    }

    const sanitizedMessage = trimmedMessage
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");

    try {
      addMessage({
        name: trimmedName,
        email: trimmedEmail,
        message: sanitizedMessage
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      onMessageSubmitted();
    } catch (err) {
      setStatus("error");
      setErrorMsg("We experienced an error committing message stream. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 xl:px-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact Information & Social coordinates */}
        <div className="lg:col-span-5 space-y-8 text-left">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 select-none">
              <span className="h-[1px] w-6 bg-slate-300 dark:bg-slate-700" />
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                STREAM CHANNEL
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Open to Solution Architect roles, key advisory consultancies, or expert lead oversight on OSS/BSS carrier transformations worldwide.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Email link */}
            <a
              href="mailto:vetrivelm02@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-150 dark:border-slate-850 hover:border-slate-800 dark:hover:border-white transition-all duration-300 group shadow-3xs"
            >
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-500 dark:text-sky-400 flex items-center justify-center shadow-3xs">
                <Mail size={14} />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[9px] font-mono text-slate-400 tracking-wider font-bold">EMAIL COMPOSER</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-205 group-hover:text-blue-600 dark:group-hover:text-sky-400 font-mono transition-colors duration-250">
                  vetrivelm02@gmail.com
                </span>
              </div>
            </a>

            {/* Calling link */}
            <a
              href="tel:+919916008877"
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-150 dark:border-slate-850 hover:border-slate-800 dark:hover:border-white transition-all duration-300 group shadow-3xs"
            >
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shadow-3xs">
                <Phone size={14} />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[9px] font-mono text-slate-400 tracking-wider font-bold">VOIP CALL PATHS</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-205 group-hover:text-blue-600 dark:group-hover:text-sky-400 font-mono transition-colors duration-250">
                  +91 99160 08877
                </span>
              </div>
            </a>

            {/* Geographical coordinates info */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/10 border border-slate-150 dark:border-slate-850 shadow-3xs select-none">
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shadow-3xs">
                <MapPin size={14} />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[9px] font-mono text-slate-403 text-slate-400 tracking-wider font-bold">GEOPOSITION NODE</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Bengaluru, India (Remote Operations)
                </span>
              </div>
            </div>
          </div>

          {/* Social coordination links */}
          <div className="pt-4 space-y-3">
            <span className="block text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase font-black select-none">
              VERIFIED CHANNELS ONLY
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/vetrivelm"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:border-slate-900 dark:hover:border-white flex items-center justify-center shadow-3xs transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/vetrivelm"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repositories"
                className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:border-slate-900 dark:hover:border-white flex items-center justify-center shadow-3xs transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Transmission Form */}
        <div className="lg:col-span-7 bg-slate-50/40 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-850 p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5 text-left">
                <label className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-505 font-black">Full Name</label>
                <input
                  type="text"
                  required
                  id="contact-name-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 text-xs font-sans rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-950 dark:focus:ring-white transition-all duration-300 shadow-3xs"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-505 font-black">Email Coordinate</label>
                <input
                  type="email"
                  required
                  id="contact-email-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@domain.com"
                  className="w-full px-4 py-3 text-xs font-sans rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-950 dark:focus:ring-white transition-all duration-300 shadow-3xs"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="block text-[9px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-505 font-black">Message Summary</label>
              <textarea
                required
                rows={5}
                id="contact-message-input"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your carrier requirements, system inquiries, or opportunity specs..."
                className="w-full px-4 py-3 text-xs font-sans rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-950 dark:focus:ring-white transition-all duration-300 resize-none shadow-3xs"
              />
            </div>

            {/* Event notifications alerts */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-emerald-500/15 bg-emerald-501 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 animate-fade-up">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span className="text-xs font-medium font-sans text-left">
                  Success! Your secure message inquiry has been logged. Vetrivel will review within 24 hours.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 animate-fade-up">
                <AlertTriangle size={16} className="shrink-0 text-red-505 text-red-500" />
                <span className="text-xs font-medium font-sans text-left">
                  {errorMsg}
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              id="contact-submit-btn"
              className="w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-850 dark:hover:bg-slate-100 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? "TRANSMITTING TO PIPELINE..." : "SECURE TRANSMISSION"}</span>
              <Send size={12} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
