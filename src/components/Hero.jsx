import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  CheckSquare,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { AppleLink } from './ui/Button';

export function Hero() {
  const [activeUI, setActiveUI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveUI((p) => (p + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white">
      {/* Top: Headline area */}
      <div className="max-w-[1024px] mx-auto px-5 md:px-6 pt-10 md:pt-16 pb-10 text-center">
        <h1 className="text-apple-hero text-apple-text tracking-tight font-semibold">
          PhoneX.
        </h1>
        <p className="mt-2 text-apple-headline text-apple-text font-semibold tracking-tight">
          Hello, companion.
        </p>

        {/* CTAs row - Apple style */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="/#explore"
            className="bg-apple-blue hover:bg-apple-blue-hover text-white text-[17px] font-normal px-5 py-2 rounded-apple-btn transition-colors"
          >
            Learn more
          </a>
          <AppleLink href="/get-started" className="text-[17px]">
            Get PhoneX
          </AppleLink>
        </div>
      </div>

      {/* Phone showcase in gray card */}
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        <div className="bg-apple-gray rounded-apple-card px-6 py-14 md:py-20 flex items-center justify-center relative overflow-hidden">
          {/* Phone mockup centered */}
          <PhoneFrame>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUI}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 w-full h-full bg-white flex flex-col"
              >
                {/* --- STATE 0: DASHBOARD --- */}
                {activeUI === 0 && (
                  <div className="flex-1 p-3.5 pt-11 flex flex-col gap-3 overflow-hidden bg-[#FAFAF7]">
                    {/* Header - Compact */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-apple-blue text-white flex items-center justify-center font-medium text-[10px]">
                        A
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-apple-text leading-tight truncate">
                          Akshit
                        </p>
                        <p className="text-[8px] text-apple-text-2">Your AI Companion</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white border border-apple-border flex items-center justify-center shadow-sm flex-shrink-0">
                        <Sparkles size={10} className="text-apple-blue" />
                      </div>
                    </div>

                    {/* Main Action Banner */}
                    <div className="bg-white p-3 rounded-xl border border-apple-border shadow-sm">
                      <p className="text-[12px] font-semibold text-apple-text mb-2 leading-tight">
                        How can I help you?
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-apple-gray p-1.5 rounded-lg flex gap-1 items-center text-[8px] font-medium text-apple-text">
                          <Calendar size={9} className="text-apple-blue" /> Plan my day
                        </div>
                        <div className="bg-apple-gray p-1.5 rounded-lg flex gap-1 items-center text-[8px] font-medium text-apple-text">
                          <Sparkles size={9} className="text-apple-blue" /> Remember
                        </div>
                        <div className="bg-apple-gray p-1.5 rounded-lg flex gap-1 items-center text-[8px] font-medium text-apple-text col-span-2">
                          <Activity size={9} className="text-apple-blue" /> Track health & focus
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="flex-1 min-h-0">
                      <p className="text-[10px] font-semibold text-apple-text mb-1.5">
                        Today's summary
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-apple-border">
                          <CheckSquare size={11} className="text-apple-blue mb-1" />
                          <p className="text-[12px] font-bold text-apple-text leading-tight">
                            8/10
                          </p>
                          <p className="text-[8px] text-apple-text-2">Tasks done</p>
                        </div>
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-apple-border">
                          <Activity size={11} className="text-apple-blue mb-1" />
                          <p className="text-[12px] font-bold text-apple-text leading-tight">
                            6.4 km
                          </p>
                          <p className="text-[8px] text-apple-text-2">Walked today</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- STATE 1: SMART TASKS --- */}
                {activeUI === 1 && (
                  <div className="flex-1 bg-white p-3.5 pt-11 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[14px] font-semibold text-apple-text">
                          Today's Tasks
                        </p>
                        <span className="text-[9px] text-apple-text-2 font-medium">8 OF 10</span>
                      </div>
                      <div className="w-full bg-apple-gray h-1.5 rounded-full mb-3.5 overflow-hidden">
                        <div className="w-[80%] h-full bg-apple-blue rounded-full" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-2.5 p-1.5 rounded-xl">
                          <div className="mt-0.5 shrink-0">
                            <CheckCircle2
                              size={15}
                              className="text-emerald-500 fill-emerald-50"
                            />
                          </div>
                          <div className="border-b border-apple-border/70 pb-2 flex-1">
                            <p className="text-[11px] font-medium text-apple-text-2 line-through">
                              Morning Workout
                            </p>
                            <p className="text-[8px] text-apple-text-2">Completed at 7:15 AM</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-1.5 rounded-xl">
                          <div className="mt-0.5 shrink-0">
                            <CheckCircle2
                              size={15}
                              className="text-emerald-500 fill-emerald-50"
                            />
                          </div>
                          <div className="border-b border-apple-border/70 pb-2 flex-1">
                            <p className="text-[11px] font-medium text-apple-text-2 line-through">
                              Reply to Sarah
                            </p>
                            <p className="text-[8px] text-apple-text-2">Completed at 9:30 AM</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 bg-apple-gray p-2 rounded-xl border border-apple-border">
                          <div className="mt-0.5 w-3.5 h-3.5 rounded-full border-2 border-apple-blue shrink-0" />
                          <div className="flex-1">
                            <p className="text-[11px] font-semibold text-apple-text">
                              Design Dashboard
                            </p>
                            <span className="inline-block text-[8px] text-apple-blue mt-1 bg-white px-1.5 py-0.5 rounded-full font-medium border border-apple-border">
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
                  <div className="flex-1 p-3.5 pt-11 flex flex-col justify-between bg-apple-gray-2 overflow-hidden">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-apple-blue shadow-sm flex items-center justify-center text-white text-[9px] font-semibold shrink-0">
                          P
                        </div>
                        <p className="text-[10px] font-semibold text-apple-text">
                          PhoneX AI
                        </p>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1" />
                      </div>

                      <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-sm max-w-[90%] border border-apple-border">
                        <p className="text-[10px] text-apple-text leading-relaxed">
                          Good morning, Akshit! You have 3 tasks today, and your 2pm meeting
                          prep is ready.
                        </p>
                      </div>

                      <div className="bg-apple-blue text-white rounded-2xl rounded-tr-sm p-2.5 ml-auto max-w-[80%] shadow-sm">
                        <p className="text-[10px] leading-relaxed">
                          What should I focus on first?
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-sm max-w-[95%] border border-apple-border">
                        <p className="text-[10px] text-apple-text leading-relaxed mb-1.5">
                          Start with the design review — you mentioned it's time-sensitive.
                        </p>
                        <div className="bg-apple-gray rounded-lg p-1.5 border border-apple-border flex items-center gap-2">
                          <div className="w-5 h-5 bg-white text-apple-blue rounded flex items-center justify-center shrink-0">
                            <Calendar size={10} />
                          </div>
                          <div>
                            <p className="text-[9px] font-semibold text-apple-text">
                              Design Review
                            </p>
                            <p className="text-[8px] text-apple-text-2">Today · 10:00 AM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </PhoneFrame>

          {/* Pagination dots at bottom (Apple style) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveUI(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeUI === idx ? 'bg-apple-text' : 'bg-apple-text/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
