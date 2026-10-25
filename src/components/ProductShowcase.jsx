import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, CheckCircle, Mic, Sparkles, Clock, Check, Calendar } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

const tabs = [
  {
    icon: Brain,
    title: "Personal Memories",
    description:
      "PhoneX remembers people, places, conversations, and the little moments that matter to you.",
  },
  {
    icon: CheckCircle,
    title: "Smart Tasks",
    description:
      "Intelligent task management that adapts to your schedule, energy, and priorities.",
  },
  {
    icon: Mic,
    title: "Voice & Chat",
    description:
      "Talk to PhoneX naturally. Ask questions, set reminders, or just chat about your day.",
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="showcase" className="relative w-full bg-bg-secondary py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <p className="mono-label text-ink-muted mb-3">(02) The Product</p>
          <h2 className="text-display-lg font-serif font-normal text-ink-primary max-w-3xl leading-[1.05] tracking-tight">
            Everything you need,
            <br />
            <span className="serif-italic text-accent">one tap</span> away.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Tabs (col-span-12 lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5 space-y-3">
            {tabs.map((tab, idx) => (
              <button
                key={tab.title}
                type="button"
                onClick={() => setActive(idx)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group cursor-pointer ${
                  active === idx
                    ? "bg-white shadow-medium border border-border-subtle"
                    : "bg-transparent border border-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                      active === idx ? "bg-accent text-white" : "bg-bg-primary text-ink-secondary"
                    }`}
                  >
                    <tab.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold mb-1 transition-colors ${
                        active === idx ? "text-ink-primary" : "text-ink-secondary"
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <AnimatePresence>
                      {active === idx && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="text-sm text-ink-secondary leading-relaxed overflow-hidden"
                        >
                          {tab.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Phone Preview (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7 relative flex justify-center items-center">
            {/* Soft ambient background glow */}
            <div className="absolute w-[320px] h-[320px] bg-accent/15 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative">
              <PhoneMockup className="w-[260px]">
                <AnimatePresence mode="wait">
                  {/* Tab 0: Personal Memories */}
                  {active === 0 && (
                    <motion.div
                      key="memories"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-border-subtle/70 pb-2">
                          <span className="mono-label text-[10px] text-accent font-semibold">
                            Memories
                          </span>
                          <span className="text-[10px] text-ink-muted">Today</span>
                        </div>

                        {/* Memory Card 1 */}
                        <div className="bg-white rounded-2xl p-3 border border-border-subtle/80 shadow-soft space-y-1.5">
                          <div className="h-20 w-full rounded-xl bg-gradient-to-tr from-accent-soft via-white to-[#FFE8E0] flex items-center justify-center text-accent">
                            <Calendar size={22} />
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-1">
                            <span>Café Luna</span>
                            <span>2:15 PM</span>
                          </div>
                          <h4 className="text-xs font-semibold text-ink-primary leading-tight">
                            Lunch with Sarah Chen
                          </h4>
                          <p className="text-[11px] text-ink-secondary leading-relaxed">
                            Recommended visiting modern art gallery on 5th and reviewing AI design tokens.
                          </p>
                        </div>

                        {/* Memory Card 2 snippet */}
                        <div className="bg-white/80 rounded-xl p-2.5 border border-border-subtle/60 flex items-center gap-2">
                          <Sparkles size={14} className="text-accent-warm shrink-0" />
                          <span className="text-[10px] text-ink-secondary truncate">
                            Elena recommended: "Design of Everyday Things"
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto pt-2 text-center">
                        <span className="text-[10px] text-ink-muted">
                          Auto-organized by PhoneX
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 1: Smart Tasks */}
                  {active === 1 && (
                    <motion.div
                      key="tasks"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-border-subtle/70 pb-2">
                          <span className="mono-label text-[10px] text-accent font-semibold">
                            Smart Tasks
                          </span>
                          <span className="text-[10px] text-accent-warm font-medium">3 Pending</span>
                        </div>

                        {/* Task 1 Completed */}
                        <div className="bg-white/70 rounded-xl p-2.5 border border-border-subtle/60 flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-md bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                            <Check size={11} className="text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] text-ink-muted line-through truncate">
                              Morning team standup
                            </p>
                            <span className="text-[9px] text-ink-muted">9:00 AM · Done</span>
                          </div>
                        </div>

                        {/* Task 2 Active */}
                        <div className="bg-white rounded-xl p-2.5 border border-accent/30 shadow-soft flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-md border border-border-default shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-[11px] font-semibold text-ink-primary truncate">
                                Review product roadmap
                              </p>
                              <span className="text-[8px] bg-accent-soft text-accent px-1.5 py-0.5 rounded font-medium">
                                High
                              </span>
                            </div>
                            <span className="text-[9px] text-accent flex items-center gap-1 mt-0.5">
                              <Clock size={10} /> 11:30 AM · Next up
                            </span>
                          </div>
                        </div>

                        {/* Task 3 Upcoming */}
                        <div className="bg-white rounded-xl p-2.5 border border-border-subtle/80 flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-md border border-border-default shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-medium text-ink-primary truncate">
                              Evening workout session
                            </p>
                            <span className="text-[9px] text-ink-muted flex items-center gap-1 mt-0.5">
                              <Clock size={10} /> 6:00 PM
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto bg-accent-soft/80 rounded-xl p-2 text-center border border-accent/15">
                        <span className="text-[10px] text-accent font-medium">
                          Schedule automatically optimized
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 2: Voice & Chat */}
                  {active === 2 && (
                    <motion.div
                      key="voice"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-border-subtle/70 pb-2">
                          <span className="mono-label text-[10px] text-accent font-semibold">
                            Assistant
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* AI bubble */}
                        <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-soft border border-border-subtle/60 max-w-[88%]">
                          <p className="text-[11px] text-ink-primary leading-snug">
                            How can I help with your afternoon schedule?
                          </p>
                        </div>

                        {/* User bubble */}
                        <div className="bg-accent text-white rounded-2xl rounded-tr-sm p-2.5 ml-auto max-w-[80%] shadow-sm">
                          <p className="text-[11px] leading-snug">
                            Move my 3pm sync and draft summary notes.
                          </p>
                        </div>

                        {/* AI Action response */}
                        <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-soft border border-border-subtle/60 max-w-[90%] space-y-1.5">
                          <div className="flex items-center gap-1 text-[10px] font-semibold text-accent">
                            <Sparkles size={11} /> Done
                          </div>
                          <p className="text-[11px] text-ink-primary leading-snug">
                            Moved to 4:30 PM. Prepared bullet summary in your notes.
                          </p>
                        </div>
                      </div>

                      {/* Bottom Waveform pill */}
                      <div className="mt-auto bg-white rounded-full p-1.5 pl-3 border border-border-subtle shadow-soft flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-3 bg-accent rounded-full animate-bounce" />
                          <span className="w-1 h-4 bg-accent rounded-full animate-pulse" />
                          <span className="w-1 h-2 bg-accent/60 rounded-full" />
                          <span className="w-1 h-5 bg-accent rounded-full animate-bounce" />
                          <span className="text-[10px] text-ink-muted ml-1.5">Listening...</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white">
                          <Mic size={13} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
