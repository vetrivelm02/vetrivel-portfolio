import React, { useState, useEffect, useRef } from "react";
import { 
  MessageSquare, 
  Send, 
  Sparkles, 
  X, 
  RotateCcw, 
  Bot, 
  User, 
  CornerDownLeft, 
  Loader2 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const DEFAULT_SUGGESTIONS = [
  "Tell me about Vetrivel's telecom expertise",
  "How did he achieve a 40% regression decrease?",
  "What's his signature tech stack?",
  "Is Vetrivel Certified in AWS / Agile?"
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1); // start with a nice greeting unread
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Initialize with a warm professional greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Hello! I am **Vetriebot**, Vetrivel's dedicated AI Assistant. Ask me anything about his 11+ years of Telecom OSS/BSS, Solution Architecture, Test Leadership, certifications, or custom technical solutions!"
        }
      ]);
    }
  }, []);

  // Scroll to bottom on updates
  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Clear unread indicator when opened
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error("HTTP connection failed");
      }

      const data = await response.json();
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.text || "I processed your request but received an empty response. Let me know if I can detail other milestones!"
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      
      const isGitHubPages = window.location.hostname.includes("github.io");
      
      // Self-diagnose help for users context
      const errorMsg: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: isGitHubPages 
          ? "✨ **Vetriebot Notice**: Since this portfolio is currently running in static mode on **GitHub Pages**, my live AI brain is resting.\n\nTo connect directly with Vetrivel or explore opportunities, you can use these active channels:\n\n- 📧 **Email:** vetrivelm02@gmail.com\n- 📱 **Mobile:** (+91) 9916008877\n- 💼 **LinkedIn:** linkedin.com/in/vetrivelm\n- 📡 **GitHub:** github.com/vetrivelm\n\nAlternatively, feel free to explore all technical deep dives and project challenges in the interactive **Project Portfolio** section on this page!"
          : "⚠️ **System Offline Notice**: I couldn't reach the Gemini AI API proxy. \n\nPlease ensure your **GEMINI_API_KEY** is configured correctly in the **Settings > Secrets** panel in the bottom-left of the AI Studio workspace interface."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    if (window.confirm("Do you want to reset your conversation with Vetriebot?")) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Chat reset successfully. Ask me anything about Vetrivel's professional history, capgemini metrics, or systems expertise!"
        }
      ]);
    }
  };

  // Helper function to render text with clean bold syntax and line breaks
  const renderMessageContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Very basic markdown bold parser (**text**)
      const parts = line.split(/\*\*([\s\S]*?)\*\*/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (pIdx % 2 === 1) {
          return <strong key={pIdx} className="font-extrabold text-slate-900 dark:text-white">{part}</strong>;
        }
        return part;
      });

      return (
        <span key={idx} className="block min-h-[0.5rem] leading-relaxed">
          {renderedLine}
        </span>
      );
    });
  };

  return (
    <div id="ai-chatbot-root" className="fixed bottom-6 right-6 z-50">
      
      {/* Floating launcher trigger with tooltip indicator */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 15 }}
            className="relative"
          >
            {/* Unread dot count */}
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white font-mono text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-lg border border-white dark:border-slate-950">
                {unreadCount}
              </span>
            )}

            <button
              onClick={() => setIsOpen(true)}
              id="chatbot-launcher-trigger"
              className="group relative h-12 px-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-800 dark:border-slate-200 cursor-pointer overflow-hidden"
              title="Speak with Vetriebot AI"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-sky-500/0 to-indigo-600/10 group-hover:opacity-100 transition-opacity" />
              <div className="p-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/10 text-blue-400 dark:text-blue-500 animate-pulse">
                <Sparkles size={14} className="fill-current" />
              </div>
              <span className="text-xs font-mono font-bold tracking-tight pr-1">
                Ask Vetriebot AI
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Interactive Assistant panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 25, x: 10 }}
            className="absolute bottom-0 right-0 w-[360px] sm:w-[420px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[80vh] rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Top Branding Section */}
            <div className="px-5 py-4 bg-slate-900 text-white dark:bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 relative">
                  <Bot size={18} />
                  <span className="absolute bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-emerald-400 border border-slate-900" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-black tracking-tight flex items-center gap-1">
                    VETRIEBOT <Sparkles size={11} className="text-blue-400 fill-current" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">11+ Yrs Carrier OSS/BSS Specialist</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Reset dialogue */}
                <button
                  onClick={handleResetChat}
                  title="Wipe conversation memory"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw size={13} />
                </button>
                {/* Close modal */}
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat panel"
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Scrolling Chat history */}
            <div className="flex-grow overflow-y-auto px-5 py-6 space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
              
              {messages.map((m) => {
                const isBot = m.role === "assistant";
                return (
                  <div
                    key={m.id}
                    className={`flex gap-3 max-w-[85%] ${isBot ? "" : "ml-auto flex-row-reverse"}`}
                  >
                    {/* Role Avatar icon */}
                    <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 border text-xs ${
                      isBot 
                        ? "bg-blue-500/10 border-blue-500/20 text-blue-500 dark:text-sky-400" 
                        : "bg-slate-200 border-slate-300 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
                    }`}>
                      {isBot ? <Bot size={13} /> : <User size={13} />}
                    </div>

                    {/* Chat Bubble container */}
                    <div className={`rounded-2xl px-4 py-2.5 text-xs shadow-xs ${
                      isBot 
                        ? "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 text-slate-800 dark:text-slate-200 font-sans" 
                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono text-[11px]"
                    }`}>
                      {renderMessageContent(m.content)}
                    </div>
                  </div>
                );
              })}

              {/* Bot typing state animation */}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="h-7 w-7 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/20 text-blue-500 shrink-0">
                    <Loader2 size={13} className="animate-spin" />
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl px-4 py-3 shadow-xs">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      Thinking...
                    </span>
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Bottom context instructions & interactive suggest chips */}
            <div className="p-3 border-t border-slate-200/60 dark:border-slate-850/60 bg-white dark:bg-slate-950 space-y-3">
              
              {/* Context chips (only rendered if user hasn't asked anything or if it's initial stage) */}
              <div className="flex flex-wrap gap-1.5 px-1 py-0.5">
                {DEFAULT_SUGGESTIONS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(s)}
                    disabled={isTyping}
                    className="text-[10px] font-mono border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-blue-500 dark:hover:border-sky-500 hover:text-blue-600 dark:hover:text-sky-305 bg-slate-50/50 dark:bg-slate-900/40 px-2 py-1 rounded-lg transition-colors cursor-pointer text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Chat Send Input Box Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputVal);
                }}
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/80"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about Vetrivel's system deliveries..."
                  disabled={isTyping}
                  className="flex-grow outline-hidden bg-transparent border-none text-xs text-slate-800 dark:text-slate-100 font-sans focus:ring-0 mr-1 py-1"
                />
                
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="h-7 w-7 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer"
                >
                  <Send size={12} />
                </button>
              </form>

              {/* Simple Help Line */}
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 dark:text-slate-550 px-1 pt-0.5">
                <span>Powered by **Gemini 3.5 Flash**</span>
                <span className="flex items-center gap-0.5">
                  [Enter] to send <CornerDownLeft size={8} />
                </span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
