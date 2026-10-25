import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Calendar,
  Sparkles,
  MessageCircle,
  MessageSquare,
  CheckCircle2,
  Activity,
  CheckSquare,
  Lock,
  ChevronLeft,
  X,
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./ui/Button";

export function Hero() {
  const [activeUI, setActiveUI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUI((prev) => (prev + 1) % 4); // 4 UI states including Voice Search
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-72px)] min-h-[600px] max-h-[900px] mt-[72px] flex items-center overflow-hidden bg-bg-primary">
      {/* Subtle atmospheric gradient blobs with smooth fade-out to seamless background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
        }}
      >
        <div className="absolute top-10 -right-40 w-[600px] h-[600px] rounded-full bg-accent-soft opacity-60 blur-[120px]" />
        <div className="absolute top-36 -left-40 w-[500px] h-[500px] rounded-full bg-[#FFE8E0] opacity-50 blur-[120px]" />
      </div>

      {/* Seamless bottom fade overlay to merge with second screen */}
      <div className="absolute inset-x-0 bottom-0 h-44 md:h-56 bg-gradient-to-b from-transparent via-bg-primary/70 to-bg-primary pointer-events-none z-[2]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column — Content (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7">
            {/* Small label row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="mono-label text-ink-secondary">Introducing PhoneX · v1.0</span>
            </motion.div>

            {/* Main headline — Mix serif + sans-serif + italic */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-display-lg font-serif font-normal text-ink-primary leading-[0.95] tracking-tight"
            >
              Your <span className="serif-italic text-accent">everyday</span> life,
              <br />
              made effortless
              <br />
              by AI.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base md:text-lg text-ink-secondary max-w-[480px] leading-relaxed font-sans"
            >
              PhoneX is your personal AI companion — remembers what matters, organizes your day, and
              helps you understand your own life a little better.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="/get-started">
                <PrimaryButton>Join Early Access</PrimaryButton>
              </a>
              <SecondaryButton onClick={() => handleScrollTo("showcase")}>
                See how it works
              </SecondaryButton>
            </motion.div>

            {/* Trust row with details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex items-center gap-6 text-sm text-ink-muted"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-ink-muted" />
                <span>Private by design</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-ink-muted/40" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Free to start</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Phone Mockup (col-span-12 lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end w-full">
            {/* Soft glow behind phone with fade mask */}
            <div
              className="absolute inset-0 bg-accent/15 blur-[60px] rounded-full scale-90 pointer-events-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Phone Outer Frame */}
              <div
                className="relative h-[72vh] sm:h-[78vh] max-h-[620px] aspect-[9/19.5] rounded-[2.6rem] p-[3.5px] bg-slate-900 shadow-phone transition-all"
                style={{
                  background: "linear-gradient(145deg, #2d2d30 0%, #1a1a1c 50%, #0d0d0e 100%)",
                  boxShadow:
                    "0 30px 70px -15px rgba(91, 79, 233, 0.22), 0 15px 35px -10px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Inner Screen Container */}
                <div className="w-full h-full rounded-[2.45rem] bg-black overflow-hidden relative">
                  {/* Dynamic Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[84px] h-[20px] bg-black rounded-full z-30 flex items-center justify-end px-2 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#111] border border-[#222]" />
                  </div>

                  {/* Screen Content Container */}
                  <div className="w-full h-full relative rounded-[2.45rem] overflow-hidden bg-[#FAFAF7]">
                    <AnimatePresence>
                      <motion.div
                        key={activeUI}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-[#FAFAF7] flex flex-col"
                      >
                        {/* --- STATE 0: DASHBOARD --- */}
                        {activeUI === 0 && (
                          <div className="flex-1 p-3.5 pt-11 pb-16 flex flex-col justify-between overflow-hidden">
                            <div>
                              {/* Header */}
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center font-medium text-xs shrink-0 shadow-sm">
                                  A
                                </div>
                                <div>
                                  <p className="text-[11px] font-semibold text-ink-primary leading-tight">
                                    Akshit
                                  </p>
                                  <p className="text-[8px] text-ink-muted">Your AI Companion</p>
                                </div>
                                <div className="ml-auto w-6 h-6 rounded-full bg-white border border-border-subtle flex items-center justify-center shadow-soft">
                                  <Sparkles size={11} className="text-accent" />
                                </div>
                              </div>

                              {/* Main Action Banner */}
                              <div className="bg-gradient-to-br from-accent/15 via-[#E5E9FF] to-[#FFEBE5] p-3 rounded-2xl border border-white/80 shadow-soft mb-3">
                                <p className="text-[12px] font-serif text-ink-primary mb-2">
                                  How can I help you?
                                </p>
                                <div className="grid grid-cols-2 gap-1.5">
                                  <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-xl flex gap-1.5 items-center text-[9px] font-medium text-ink-primary shadow-xs">
                                    <Calendar size={11} className="text-accent shrink-0" />
                                    <span className="truncate">Plan my day</span>
                                  </div>
                                  <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-xl flex gap-1.5 items-center text-[9px] font-medium text-ink-primary shadow-xs">
                                    <Sparkles size={11} className="text-accent-warm shrink-0" />
                                    <span className="truncate">Remember...</span>
                                  </div>
                                  <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-xl flex gap-1.5 items-center text-[9px] font-medium text-ink-primary col-span-2 shadow-xs">
                                    <Activity size={11} className="text-emerald-500 shrink-0" />
                                    <span className="truncate">Track health & focus</span>
                                  </div>
                                </div>
                              </div>

                              {/* Summary Cards */}
                              <div>
                                <p className="text-[10px] font-semibold text-ink-primary mb-1.5">
                                  Today's summary
                                </p>
                                <div className="flex gap-2">
                                  <div className="flex-1 bg-white p-2.5 rounded-2xl shadow-soft border border-border-subtle">
                                    <CheckSquare size={13} className="text-accent mb-1" />
                                    <p className="text-[13px] font-bold text-ink-primary leading-tight">
                                      8/10
                                    </p>
                                    <p className="text-[8px] text-ink-muted mt-0.5">Tasks done</p>
                                  </div>
                                  <div className="flex-1 bg-[#FFF5F3] p-2.5 rounded-2xl shadow-soft border border-border-subtle">
                                    <Activity size={13} className="text-accent-warm mb-1" />
                                    <p className="text-[13px] font-bold text-ink-primary leading-tight">
                                      6.4 km
                                    </p>
                                    <p className="text-[8px] text-ink-muted mt-0.5">Walked today</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* --- STATE 1: SMART TASKS --- */}
                        {activeUI === 1 && (
                          <div className="flex-1 bg-white p-3.5 pt-11 pb-16 flex flex-col justify-between overflow-hidden">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-[15px] font-serif text-ink-primary">
                                  Today's Tasks
                                </p>
                                <span className="text-[9px] mono-label text-ink-muted">8 OF 10</span>
                              </div>
                              <div className="w-full bg-bg-secondary h-1.5 rounded-full mb-3.5 overflow-hidden">
                                <div className="w-[80%] h-full bg-accent rounded-full" />
                              </div>

                              <div className="flex flex-col gap-2">
                                <div className="flex items-start gap-2.5 p-1.5 rounded-xl">
                                  <div className="mt-0.5 shrink-0">
                                    <CheckCircle2
                                      size={15}
                                      className="text-emerald-500 fill-emerald-50"
                                    />
                                  </div>
                                  <div className="border-b border-border-subtle pb-2 flex-1">
                                    <p className="text-[11px] font-medium text-ink-secondary line-through">
                                      Morning Workout
                                    </p>
                                    <p className="text-[8px] text-ink-muted">Completed at 7:15 AM</p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2.5 p-1.5 rounded-xl">
                                  <div className="mt-0.5 shrink-0">
                                    <CheckCircle2
                                      size={15}
                                      className="text-emerald-500 fill-emerald-50"
                                    />
                                  </div>
                                  <div className="border-b border-border-subtle pb-2 flex-1">
                                    <p className="text-[11px] font-medium text-ink-secondary line-through">
                                      Reply to Sarah
                                    </p>
                                    <p className="text-[8px] text-ink-muted">Completed at 9:30 AM</p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2 bg-accent-soft/60 p-2 rounded-xl border border-accent/15">
                                  <div className="mt-0.5 w-3.5 h-3.5 rounded-full border-2 border-accent shrink-0" />
                                  <div className="flex-1">
                                    <p className="text-[11px] font-semibold text-ink-primary">
                                      Design Dashboard
                                    </p>
                                    <span className="inline-block text-[8px] text-accent mt-1 bg-white px-1.5 py-0.5 rounded-full font-medium border border-accent/20">
                                      High Priority · 25 min left
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* --- STATE 2: AI CHAT --- */}
                        {activeUI === 2 && (
                          <div className="flex-1 p-3.5 pt-11 pb-16 flex flex-col justify-between bg-[#F8F9FA] overflow-hidden">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent-warm shadow-sm flex items-center justify-center text-white text-[9px] font-serif font-bold shrink-0">
                                  P
                                </div>
                                <p className="text-[10px] font-semibold text-ink-primary">
                                  PhoneX AI
                                </p>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1" />
                              </div>

                              <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-soft max-w-[90%] border border-border-subtle">
                                <p className="text-[10px] text-ink-primary leading-relaxed">
                                  Good morning, Akshit! You have 3 tasks today, and your 2pm meeting
                                  prep is ready.
                                </p>
                              </div>

                              <div className="bg-accent text-white rounded-2xl rounded-tr-sm p-2.5 ml-auto max-w-[80%] shadow-medium">
                                <p className="text-[10px] leading-relaxed">
                                  What should I focus on first?
                                </p>
                              </div>

                              <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-soft max-w-[95%] border border-border-subtle">
                                <p className="text-[10px] text-ink-primary leading-relaxed mb-1.5">
                                  Start with the design review — you mentioned it's time-sensitive.
                                </p>
                                <div className="bg-[#F4F5F7] rounded-lg p-1.5 border border-border-subtle flex items-center gap-2">
                                  <div className="w-5 h-5 bg-accent-soft text-accent rounded flex items-center justify-center shrink-0">
                                    <Calendar size={10} />
                                  </div>
                                  <div>
                                    <p className="text-[9px] font-semibold text-ink-primary">
                                      Design Review
                                    </p>
                                    <p className="text-[8px] text-ink-muted">Today · 10:00 AM</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* --- STATE 3: VOICE SEARCH (phonex6.jpg) --- */}
                        {activeUI === 3 && (
                          <div className="flex-1 p-3.5 pt-10 pb-3 flex flex-col justify-between bg-[#FAFAF7] overflow-hidden select-none">
                            {/* Top Header matching phonex6.jpg */}
                            <div className="flex items-center justify-between mb-1">
                              <button
                                type="button"
                                onClick={() => setActiveUI(0)}
                                className="w-7 h-7 rounded-full bg-white border border-border-subtle shadow-soft flex items-center justify-center text-ink-primary hover:bg-bg-secondary active:scale-95 transition-all cursor-pointer"
                                aria-label="Back to dashboard"
                              >
                                <ChevronLeft size={14} />
                              </button>
                              <span className="text-[12px] font-semibold text-ink-primary tracking-tight">
                                PhoneX
                              </span>
                              <div className="w-7 h-7" />
                            </div>

                            {/* Center Glowing Iridescent Orb & Constellation Ring */}
                            <div className="relative my-auto flex items-center justify-center py-2">
                              {/* Subtle multi-hue atmospheric glow */}
                              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-accent/25 via-[#7CE2FE]/30 to-[#FDBA74]/25 blur-2xl animate-pulse pointer-events-none" />

                              {/* Constellation Particle Dots Ring */}
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="relative w-[136px] h-[136px] flex items-center justify-center">
                                  {[
                                    { angle: 0, color: "#8B5CF6", size: 3 },
                                    { angle: 30, color: "#38BDF8", size: 2.5 },
                                    { angle: 60, color: "#F43F5E", size: 3 },
                                    { angle: 90, color: "#A78BFA", size: 2 },
                                    { angle: 120, color: "#FBCFE8", size: 2.5 },
                                    { angle: 150, color: "#38BDF8", size: 3 },
                                    { angle: 180, color: "#8B5CF6", size: 2.5 },
                                    { angle: 210, color: "#F43F5E", size: 2 },
                                    { angle: 240, color: "#A78BFA", size: 3 },
                                    { angle: 270, color: "#38BDF8", size: 2.5 },
                                    { angle: 300, color: "#FBCFE8", size: 3 },
                                    { angle: 330, color: "#8B5CF6", size: 2 },
                                  ].map((dot, idx) => {
                                    const rad = (dot.angle * Math.PI) / 180;
                                    const r = 62;
                                    const x = Math.cos(rad) * r;
                                    const y = Math.sin(rad) * r;
                                    return (
                                      <motion.span
                                        key={idx}
                                        animate={{
                                          scale: [1, 1.4, 1],
                                          opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                          duration: 2.5,
                                          repeat: Infinity,
                                          delay: idx * 0.15,
                                          ease: "easeInOut",
                                        }}
                                        className="absolute rounded-full"
                                        style={{
                                          transform: `translate(${x}px, ${y}px)`,
                                          width: `${dot.size}px`,
                                          height: `${dot.size}px`,
                                          backgroundColor: dot.color,
                                          boxShadow: `0 0 5px ${dot.color}`,
                                        }}
                                      />
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Holographic Glowing Orb */}
                              <motion.div
                                animate={{
                                  scale: [1, 1.04, 1],
                                  boxShadow: [
                                    "0 12px 35px -8px rgba(91, 79, 233, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.7)",
                                    "0 16px 45px -5px rgba(124, 226, 254, 0.55), inset 0 2px 14px rgba(255, 255, 255, 0.9)",
                                    "0 12px 35px -8px rgba(91, 79, 233, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.7)",
                                  ],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-28 h-28 rounded-full flex items-center justify-center overflow-hidden border border-white/70 shadow-lg"
                                style={{
                                  background:
                                    "radial-gradient(circle at 35% 30%, #BAE6FD 0%, #DDD6FE 38%, #FBCFE8 70%, #FED7AA 100%)",
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-black/5 pointer-events-none" />
                                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                                  <Mic className="w-6 h-6 text-white drop-shadow-md" strokeWidth={2.4} />
                                </div>
                              </motion.div>
                            </div>

                            {/* "Listening..." Title & Dynamic Audio Waveform */}
                            <div className="text-center my-1">
                              <p className="text-[15px] font-bold text-ink-primary tracking-tight">
                                Listening...
                              </p>
                              <p className="text-[9px] text-ink-muted mt-0.5">
                                "What's on my schedule today?"
                              </p>

                              {/* Equalizer Waveform bars */}
                              <div className="flex items-center justify-center gap-[2.5px] h-6 mt-2">
                                {[8, 14, 10, 20, 12, 22, 16, 24, 11, 20, 15, 22, 13, 19, 9, 21, 14, 18, 10, 16].map(
                                  (h, i) => (
                                    <motion.span
                                      key={i}
                                      animate={{
                                        height: [
                                          `${Math.max(3, h * 0.3)}px`,
                                          `${h}px`,
                                          `${Math.max(3, h * 0.35)}px`,
                                        ],
                                      }}
                                      transition={{
                                        duration: 0.7 + (i % 4) * 0.12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.04,
                                      }}
                                      className="w-[2px] rounded-full bg-gradient-to-t from-accent to-[#7CE2FE]"
                                    />
                                  )
                                )}
                              </div>
                            </div>

                            {/* Bottom Controls matching phonex6.jpg */}
                            <div className="flex items-center justify-center gap-4 pt-2 pb-1">
                              {/* Left Mic button */}
                              <button
                                type="button"
                                className="w-9 h-9 rounded-full bg-white border border-border-subtle shadow-soft flex items-center justify-center text-ink-primary hover:bg-bg-secondary active:scale-95 transition-all cursor-pointer"
                                aria-label="Microphone active"
                              >
                                <Mic size={14} />
                              </button>

                              {/* Center Holographic Chat button */}
                              <button
                                type="button"
                                onClick={() => setActiveUI(2)}
                                className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-medium hover:scale-105 active:scale-95 transition-all border border-white/80 cursor-pointer"
                                style={{
                                  background:
                                    "radial-gradient(circle at 30% 30%, #7CE2FE 0%, #A78BFA 50%, #F472B6 100%)",
                                }}
                                aria-label="Switch to Chat"
                              >
                                <MessageSquare size={16} className="text-white drop-shadow-sm" />
                              </button>

                              {/* Right Close button */}
                              <button
                                type="button"
                                onClick={() => setActiveUI(0)}
                                className="w-9 h-9 rounded-full bg-white border border-border-subtle shadow-soft flex items-center justify-center text-ink-primary hover:bg-bg-secondary active:scale-95 transition-all cursor-pointer"
                                aria-label="Close voice"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom Voice Input Bar (Shown in states 0, 1, 2; clicking activates Voice Search) */}
                    {activeUI !== 3 && (
                      <button
                        type="button"
                        onClick={() => setActiveUI(3)}
                        className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-full shadow-medium p-1 pl-3.5 flex items-center gap-2 border border-border-subtle/80 z-20 cursor-pointer hover:bg-white active:scale-[0.98] transition-all text-left group"
                        aria-label="Search with voice"
                      >
                        <span className="text-[10px] text-ink-muted flex-1 font-medium group-hover:text-ink-secondary transition-colors">
                          Just talk to it...
                        </span>
                        <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shadow-soft shrink-0 group-hover:scale-105 transition-transform">
                          <Mic className="w-3.5 h-3.5 text-white" />
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Active UI Indicators (4 Dots: Dashboard, Tasks, Chat, Voice Search) */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {[
                  { id: 0, label: "Dashboard" },
                  { id: 1, label: "Tasks" },
                  { id: 2, label: "Chat" },
                  { id: 3, label: "Voice Search" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveUI(item.id)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeUI === item.id
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-ink-muted/30 hover:bg-ink-muted/50"
                      }`}
                    aria-label={`Show ${item.label}`}
                  />
                ))}
              </div>

              {/* FLOATING CHIPS - Positioned relative to scaled frame */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-8 md:-left-12 bg-white/95 backdrop-blur-sm border border-border-subtle rounded-full px-3.5 py-1.5 shadow-soft flex items-center gap-2 text-xs font-medium text-ink-primary z-30 whitespace-nowrap"
              >
                <Calendar size={12} className="text-accent shrink-0" />
                <span>Plan your day</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-1/2 -right-4 md:-right-8 bg-white/95 backdrop-blur-sm border border-border-subtle rounded-full px-3.5 py-1.5 shadow-soft flex items-center gap-2 text-xs font-medium text-ink-primary z-30 whitespace-nowrap"
              >
                <Sparkles size={12} className="text-accent-warm shrink-0" />
                <span>Remembers you</span>
              </motion.div>

              <motion.button
                type="button"
                onClick={() => setActiveUI(3)}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                className="absolute bottom-8 -left-6 md:-left-10 bg-white/95 backdrop-blur-sm border border-border-subtle rounded-full px-3.5 py-1.5 shadow-soft flex items-center gap-2 text-xs font-medium text-ink-primary z-30 whitespace-nowrap cursor-pointer hover:border-accent/40 hover:shadow-medium active:scale-95 transition-all"
                aria-label="Activate voice search"
              >
                <Mic size={12} className="text-accent shrink-0 animate-pulse" />
                <span>Search with voice</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
