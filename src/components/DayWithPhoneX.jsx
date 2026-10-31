import { useState } from 'react';
import { ChevronDown, Sun, Briefcase, Coffee, Moon, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';

export function DayWithPhoneX() {
  const [openIdx, setOpenIdx] = useState(0);

  const items = [
    {
      time: 'Morning · 7:00 AM',
      title: 'A gentle start',
      description:
        "PhoneX greets you with today's weather, your schedule, and one small nudge toward whatever matters most. No overwhelming notifications, just the right information at the right moment.",
      icon: Sun,
    },
    {
      time: 'Midday · 11:00 AM',
      title: 'Reminders that help',
      description:
        'A meeting in 30 minutes? Your notes are already open, and PhoneX reminded you to leave early. It knows traffic patterns, your prep habits, and gentle timing.',
      icon: Briefcase,
    },
    {
      time: 'Evening · 5:00 PM',
      title: 'Space for yourself',
      description:
        'A free hour? PhoneX suggests something restorative based on how your day went — a walk, a book, or just quiet time.',
      icon: Coffee,
    },
    {
      time: 'Night · 10:00 PM',
      title: 'Quiet reflection',
      description:
        'A short summary of your day, memories logged, and tomorrow gently planned. Sleep knowing nothing important was missed.',
      icon: Moon,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        <h2 className="text-apple-headline text-apple-text mb-10 tracking-tight font-semibold">
          A day with PhoneX.
        </h2>

        {/* Large card with accordion on left + visual on right */}
        <div className="bg-apple-gray rounded-apple-card p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Accordion */}
          <div>
            {items.map((item, idx) => (
              <div key={idx} className="border-b border-apple-border/70 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenIdx(idx)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                >
                  <div>
                    <p className="text-[12px] text-apple-text-2 mb-1">{item.time}</p>
                    <h3
                      className={`text-[21px] font-semibold tracking-tight transition-colors ${
                        openIdx === idx ? 'text-apple-text' : 'text-apple-text-2'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-apple-text-2 transition-transform duration-300 ${
                      openIdx === idx ? 'rotate-180 text-apple-text' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] text-apple-text-2 leading-relaxed pb-5">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Visual phone mockup changing based on openIdx */}
          <div className="flex justify-center">
            <PhoneFrame>
              <AnimatePresence mode="wait">
                <motion.div
                  key={openIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full bg-white flex flex-col p-4 pt-11 justify-between"
                >
                  {/* Slot 0: Morning */}
                  {openIdx === 0 && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-apple-border/70 mb-3">
                          <span className="text-[11px] font-semibold text-apple-text">Morning Brief</span>
                          <span className="text-[9px] text-apple-text-2">7:00 AM</span>
                        </div>
                        <div className="bg-apple-gray rounded-2xl p-3 mb-2.5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[12px] font-semibold text-apple-text">72° · Sunny</span>
                            <Sun size={14} className="text-amber-500" />
                          </div>
                          <p className="text-[10px] text-apple-text-2">Light breeze throughout the morning.</p>
                        </div>
                        <div className="bg-apple-blue/10 border border-apple-blue/20 rounded-2xl p-3">
                          <p className="text-[9px] text-apple-blue font-semibold uppercase tracking-wider mb-1">Gentle Nudge</p>
                          <p className="text-[11px] font-medium text-apple-text">20 mins quiet prep before 9am standup.</p>
                        </div>
                      </div>
                      <div className="bg-apple-gray rounded-xl p-2 text-center text-[10px] text-apple-text-2">
                        3 meetings today · First at 9:00 AM
                      </div>
                    </div>
                  )}

                  {/* Slot 1: Midday */}
                  {openIdx === 1 && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-apple-border/70 mb-3">
                          <span className="text-[11px] font-semibold text-apple-text">Smart Reminder</span>
                          <span className="text-[9px] text-apple-blue font-medium">In 30 mins</span>
                        </div>
                        <div className="bg-apple-gray rounded-2xl p-3 mb-2.5">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Calendar size={13} className="text-apple-blue" />
                            <p className="text-[12px] font-semibold text-apple-text">Product Sync</p>
                          </div>
                          <p className="text-[10px] text-apple-text-2">Meeting notes and design agenda opened on screen.</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-3">
                          <div className="flex items-center gap-1.5 text-emerald-800 font-medium text-[10px] mb-0.5">
                            <MapPin size={11} /> Traffic is clear
                          </div>
                          <p className="text-[10px] text-emerald-900 font-semibold">Leave in 8 minutes to arrive smoothly.</p>
                        </div>
                      </div>
                      <div className="bg-apple-blue text-white rounded-full py-1.5 text-center text-[10px] font-medium">
                        Open Meeting Notes
                      </div>
                    </div>
                  )}

                  {/* Slot 2: Evening */}
                  {openIdx === 2 && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-apple-border/70 mb-3">
                          <span className="text-[11px] font-semibold text-apple-text">Unwind & Restore</span>
                          <span className="text-[9px] text-apple-text-2">5:00 PM</span>
                        </div>
                        <div className="bg-apple-gray rounded-2xl p-3 mb-2.5">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[12px] font-semibold text-apple-text">Free hour ahead</p>
                            <Coffee size={13} className="text-apple-text-2" />
                          </div>
                          <p className="text-[10px] text-apple-text-2">Work wraps up for today. Recommended suggestion:</p>
                        </div>
                        <div className="bg-apple-gray rounded-2xl p-3 border border-apple-border">
                          <p className="text-[11px] font-semibold text-apple-text mb-1">30 min scenic park walk</p>
                          <p className="text-[10px] text-apple-text-2">2,400 steps remaining to hit daily baseline.</p>
                        </div>
                      </div>
                      <div className="bg-apple-gray rounded-xl p-2 text-center text-[10px] text-apple-text font-medium">
                        Quiet mode scheduled for 8 PM
                      </div>
                    </div>
                  )}

                  {/* Slot 3: Night */}
                  {openIdx === 3 && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-apple-border/70 mb-3">
                          <span className="text-[11px] font-semibold text-apple-text">Day Reflection</span>
                          <span className="text-[9px] text-apple-text-2">10:00 PM</span>
                        </div>
                        <div className="bg-apple-gray rounded-2xl p-3 mb-2.5">
                          <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                            <CheckCircle2 size={13} />
                            <span className="text-[11px] font-semibold text-apple-text">All 8 tasks completed</span>
                          </div>
                          <p className="text-[10px] text-apple-text-2">Deep focus score: 92%.</p>
                        </div>
                        <div className="bg-apple-gray rounded-2xl p-3 border border-apple-border">
                          <div className="flex items-center gap-1 text-apple-blue text-[10px] font-semibold mb-1">
                            <Sparkles size={11} /> 2 memories saved
                          </div>
                          <p className="text-[10px] text-apple-text-2">Tomorrow planned. Sleep well.</p>
                        </div>
                      </div>
                      <div className="bg-apple-text text-white rounded-full py-1.5 text-center text-[10px] font-medium">
                        Alarm set for 7:00 AM
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DayWithPhoneX;
