import {
  Mic,
  Calendar,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  Search,
  MoreHorizontal,
  Activity,
  Heart,
  DollarSign,
  BookOpen,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import PhoneFrame from '../components/PhoneFrame';
import { PrimaryButton } from '../components/ui/Button';

export default function Features() {
  return (
    <div className="w-full bg-bg-primary overflow-hidden">
      {/* SECTION A: Features Hero (Page Intro) */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Soft background gradient */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-soft rounded-full blur-[120px] opacity-40 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mono-label text-ink-muted mb-5">Features · Everything PhoneX can do</p>
            <h1 className="text-display-xl font-serif font-normal text-ink-primary leading-[0.95] tracking-tight">
              Small details that<br />
              <span className="serif-italic text-accent">quietly change</span> your day.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-secondary max-w-xl leading-relaxed">
              Each feature is designed to disappear into your routine — helpful when you need it, invisible when you don't.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: Feature 1 — A Companion You Can Talk To */}
      {/* Layout: Text LEFT, Phone RIGHT (standard) */}
      <section className="py-20 md:py-28 bg-bg-primary border-t border-border-subtle/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Text */}
            <div className="col-span-12 lg:col-span-6">
              <p className="mono-label text-ink-muted mb-4">(01) Somewhere to think out loud</p>
              <h2 className="text-display-md font-serif text-ink-primary leading-[1.05] mb-6">
                A companion you<br />can <span className="serif-italic text-accent">talk to</span>.
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-md">
                Ask PhoneX to plan something, remind you later, or simply help you make sense of a busy day. It answers in plain language and keeps the context of what you already told it.
              </p>
              <ul className="space-y-3">
                {['Natural conversation', 'Keeps context between chats', 'Turns a request into a plan'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Live Phone Mockup — AI Chat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-6 flex justify-center"
            >
              <PhoneFrame>
                <div className="flex-1 p-3.5 pt-11 flex flex-col gap-2 bg-[#F8F9FA]">
                  {/* Header */}
                  <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center">
                      <Sparkles size={11} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-ink-primary leading-tight">PhoneX</p>
                      <p className="text-[8px] text-emerald-500 font-medium">● online</p>
                    </div>
                  </div>
                  {/* Chat messages */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-soft max-w-[85%] border border-border-subtle">
                    <p className="text-[10px] text-ink-primary leading-relaxed">Hi Akshit, I'm here. What's on your mind today?</p>
                  </div>
                  <div className="bg-accent text-white rounded-2xl rounded-tr-sm p-2.5 ml-auto max-w-[80%] shadow-medium">
                    <p className="text-[10px] leading-relaxed">Remind me to call mom at 7pm — she loves voice messages.</p>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-soft max-w-[90%] border border-border-subtle">
                    <p className="text-[10px] text-ink-primary leading-relaxed">Done. I'll remind you at 7pm — and I'll keep her favourite topics nearby.</p>
                  </div>
                  {/* Input bar */}
                  <div className="mt-auto bg-white rounded-full border border-border-subtle p-1.5 pl-3 flex items-center gap-2 shadow-sm">
                    <span className="text-[10px] text-ink-muted flex-1">Message PhoneX...</span>
                    <Mic size={12} className="text-accent" />
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION C: Feature 2 — Tasks That Organise Themselves */}
      {/* Layout: Phone LEFT, Text RIGHT (reversed — breaks monotony) */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Live Phone Mockup — Tasks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-6 flex justify-center order-2 lg:order-1"
            >
              <PhoneFrame>
                <div className="flex-1 bg-white p-3.5 pt-11 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center">
                      <ChevronLeft size={12} className="text-ink-primary" />
                    </div>
                    <p className="text-[11px] font-semibold text-ink-primary">Tasks</p>
                    <div className="w-6" />
                  </div>
                  <p className="text-[16px] font-serif text-ink-primary mb-1">Today's Tasks</p>
                  <p className="text-[9px] text-ink-muted mb-3">8 of 10 completed · 80%</p>
                  <div className="w-full bg-bg-secondary h-1.5 rounded-full mb-4 overflow-hidden">
                    <div className="w-[80%] h-full bg-accent rounded-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'Morning Workout', time: '7:15 AM', done: true },
                      { label: 'Reply to Sarah', time: '9:30 AM', done: true },
                      { label: 'Review Design PRs', time: '10:45 AM', done: true },
                      { label: 'Read 20 Pages', time: '11:20 AM', done: true },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 bg-bg-secondary/50 p-2 rounded-lg border border-border-subtle/60">
                        <CheckCircle2 size={12} className="text-emerald-500 fill-emerald-50 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-medium text-ink-secondary line-through truncate">{t.label}</p>
                          <p className="text-[8px] text-ink-muted">Completed at {t.time}</p>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Right: Text */}
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
              <p className="mono-label text-ink-muted mb-4">(02) What should I do next?</p>
              <h2 className="text-display-md font-serif text-ink-primary leading-[1.05] mb-6">
                Tasks that organise<br /><span className="serif-italic text-accent">themselves</span>.
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-md">
                Add something in a sentence and PhoneX sorts out the timing, priority and grouping — so your list stays short and honest instead of endless.
              </p>
              <ul className="space-y-3">
                {['Add tasks in one line', 'Grouped by moment of day', 'Gentle, well-timed reminders'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION D: Feature 3 — Memories You Can Actually Find */}
      {/* Layout: Text LEFT, Phone RIGHT */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Text */}
            <div className="col-span-12 lg:col-span-6">
              <p className="mono-label text-ink-muted mb-4">(03) What was that thing again?</p>
              <h2 className="text-display-md font-serif text-ink-primary leading-[1.05] mb-6">
                Memories you can<br /><span className="serif-italic text-accent">actually find</span>.
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-md">
                Names, places, decisions, small details you meant to keep — PhoneX stores them the way you said them and brings them back when they matter.
              </p>
              <ul className="space-y-3">
                {['Save a detail in seconds', 'Search by what you remember', 'Resurfaces at the right moment'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Live Phone — Memory Timeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-6 flex justify-center"
            >
              <PhoneFrame>
                <div className="flex-1 bg-white p-3.5 pt-11 flex flex-col">
                  <div className="flex justify-end mb-2">
                    <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center">
                      <MoreHorizontal size={12} className="text-ink-primary" />
                    </div>
                  </div>
                  <p className="text-[16px] font-serif text-ink-primary leading-tight">Memory timeline</p>
                  <p className="text-[9px] text-ink-muted mb-3">Moments PhoneX is keeping for you</p>
                  {/* Search bar */}
                  <div className="bg-bg-secondary rounded-full px-3 py-1.5 flex items-center gap-2 mb-3">
                    <Search size={10} className="text-ink-muted" />
                    <span className="text-[9px] text-ink-muted">Search memories</span>
                  </div>
                  {/* Filter chips */}
                  <div className="flex gap-1.5 mb-3 overflow-hidden">
                    {['All', 'Personal', 'Family', 'Health'].map((f, i) => (
                      <div
                        key={f}
                        className={`px-2.5 py-0.5 rounded-full text-[8px] font-medium border ${i === 0
                            ? 'bg-ink-primary text-bg-primary border-ink-primary'
                            : 'bg-white text-ink-secondary border-border-subtle'
                          }`}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                  {/* Memory cards */}
                  <div className="flex flex-col gap-2">
                    <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-accent-warm/20 flex items-center justify-center">
                          <Heart size={10} className="text-accent-warm" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-semibold text-ink-primary">Mom's birthday</p>
                          <p className="text-[8px] text-ink-muted">March 12</p>
                        </div>
                      </div>
                      <p className="text-[9px] text-ink-secondary leading-snug">Don't forget to call her — she loves voice messages.</p>
                      <div className="mt-2 inline-block px-2 py-0.5 bg-accent-soft rounded-full text-[8px] text-accent font-medium">Important</div>
                    </div>
                    <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                          <Calendar size={10} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-semibold text-ink-primary">Café Luna with Sarah</p>
                          <p className="text-[8px] text-ink-muted">Oct 14</p>
                        </div>
                      </div>
                      <p className="text-[9px] text-ink-secondary leading-snug">Discussed design systems. She recommended "Shape Up".</p>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION E: Feature 4 — Insights About Your Week */}
      {/* Layout: Phone LEFT, Text RIGHT */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Live Phone — Insights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-6 flex justify-center order-2 lg:order-1"
            >
              <PhoneFrame>
                <div className="flex-1 bg-white p-3.5 pt-11 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center">
                      <ChevronLeft size={12} className="text-ink-primary" />
                    </div>
                    <p className="text-[11px] font-semibold text-ink-primary">Insights</p>
                    <div className="w-6" />
                  </div>
                  <p className="text-[16px] font-serif text-ink-primary leading-tight">Life Insights</p>
                  <p className="text-[9px] text-ink-muted mb-3">AI analyzing patterns across your life</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                      <div className="flex items-start justify-between mb-1">
                        <Activity size={12} className="text-accent" />
                        <span className="text-[8px] text-emerald-500 font-medium">+6%</span>
                      </div>
                      <p className="text-[8px] text-ink-muted">Productivity</p>
                      <p className="text-[14px] font-bold text-ink-primary">84%</p>
                    </div>
                    <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                      <div className="flex items-start justify-between mb-1">
                        <Heart size={12} className="text-accent-warm" />
                        <span className="text-[8px] text-ink-muted font-medium">stable</span>
                      </div>
                      <p className="text-[8px] text-ink-muted">Health</p>
                      <p className="text-[14px] font-bold text-ink-primary">Good</p>
                    </div>
                    <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                      <div className="flex items-start justify-between mb-1">
                        <DollarSign size={12} className="text-emerald-500" />
                        <span className="text-[8px] text-emerald-500 font-medium">+12%</span>
                      </div>
                      <p className="text-[8px] text-ink-muted">Finance</p>
                      <p className="text-[14px] font-bold text-ink-primary">$4,210</p>
                    </div>
                    <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                      <div className="flex items-start justify-between mb-1">
                        <BookOpen size={12} className="text-accent" />
                        <span className="text-[8px] text-emerald-500 font-medium">+2h</span>
                      </div>
                      <p className="text-[8px] text-ink-muted">Learning</p>
                      <p className="text-[14px] font-bold text-ink-primary">12h</p>
                    </div>
                  </div>
                  <div className="mt-2 bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle">
                    <div className="flex items-center gap-2">
                      <MapPin size={11} className="text-accent-warm" />
                      <div className="flex-1">
                        <p className="text-[8px] text-ink-muted">Travel · this year</p>
                        <p className="text-[12px] font-bold text-ink-primary">3 trips</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Right: Text */}
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
              <p className="mono-label text-ink-muted mb-4">(04) How is my life actually going?</p>
              <h2 className="text-display-md font-serif text-ink-primary leading-[1.05] mb-6">
                Insights about<br />your <span className="serif-italic text-accent">week</span>.
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-md">
                PhoneX quietly notices patterns in your days — energy, focus, routines — and shows them back in a way that is easy to read and act on.
              </p>
              <ul className="space-y-3">
                {['Weekly rhythm at a glance', 'Patterns, not raw numbers', 'Suggestions you can ignore'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION F: Feature 5 — Voice for hands-free moments */}
      {/* Layout: Text LEFT, Phone RIGHT */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Text */}
            <div className="col-span-12 lg:col-span-6">
              <p className="mono-label text-ink-muted mb-4">(05) When typing is not an option</p>
              <h2 className="text-display-md font-serif text-ink-primary leading-[1.05] mb-6">
                Voice for<br /><span className="serif-italic text-accent">hands-free moments</span>.
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-md">
                Walking, cooking, driving — speak to PhoneX and it captures the thought, sets the reminder or answers back without you touching the screen.
              </p>
              <ul className="space-y-3">
                {['Speak instead of typing', 'Quick capture on the move', 'Replies read aloud'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Live Phone — Voice Assistant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-6 flex justify-center"
            >
              <PhoneFrame>
                <div className="flex-1 bg-white p-3.5 pt-11 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border-subtle mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                          <Mic size={12} className="text-accent" />
                        </div>
                        <div>
                          <p className="mono-label text-accent font-semibold leading-tight">VOICE ASSISTANT</p>
                          <span className="text-[8px] text-emerald-500 font-medium">● Live</span>
                        </div>
                      </div>
                      <span className="text-[8px] bg-accent-soft text-accent px-2 py-0.5 rounded-full font-medium">Listening</span>
                    </div>

                    {/* Waveform */}
                    <div className="bg-[#FAF9F6] border border-border-subtle rounded-2xl p-4 flex flex-col items-center justify-center gap-3 mb-3">
                      <div className="flex items-end justify-center gap-1 h-14">
                        {[20, 35, 50, 30, 55, 40, 25, 45, 60, 35, 50, 30, 40].map((h, i) => (
                          <div
                            key={i}
                            className="w-1 bg-accent rounded-full"
                            style={{
                              height: `${h}px`,
                              animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite`,
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-[11px] text-ink-primary italic text-center font-serif">
                        "Remind Mark about Friday's presentation"
                      </p>
                    </div>

                    {/* Transcription / action card */}
                    <div className="bg-accent-soft rounded-xl p-2.5 border border-accent/20">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 size={12} className="text-accent" />
                        <p className="text-[9px] text-accent font-semibold">✓ Done</p>
                      </div>
                      <p className="text-[10px] text-ink-primary font-medium">Reminder set for Thursday 6pm.</p>
                      <p className="text-[8px] text-ink-muted mt-0.5">Notes saved to Work Project folder.</p>
                    </div>
                  </div>

                  {/* Bottom live voice status */}
                  <div className="bg-bg-secondary/60 rounded-full py-2 px-3 flex items-center justify-between">
                    <span className="text-[9px] text-ink-muted">Press to pause</span>
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shadow-sm">
                      <Mic size={10} className="text-white" />
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION G: Feature 6 — An AI shaped around you */}
      {/* Layout: Phone LEFT, Text RIGHT */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Live Phone — Personality & Clone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-6 flex justify-center order-2 lg:order-1"
            >
              <PhoneFrame>
                <div className="flex-1 bg-white p-3.5 pt-11 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-border-subtle mb-3">
                      <div>
                        <p className="text-[11px] font-semibold text-ink-primary">AI Personality</p>
                        <p className="text-[8px] text-ink-muted">Shaped around your rhythm</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold">
                        AI
                      </div>
                    </div>

                    {/* Tone selector */}
                    <p className="text-[9px] font-semibold text-ink-primary uppercase tracking-wider mb-1.5">Conversation Style</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-3">
                      <div className="bg-ink-primary text-white p-2 rounded-xl border border-ink-primary">
                        <p className="text-[10px] font-semibold">Thoughtful</p>
                        <p className="text-[8px] text-white/70">Concise & contextual</p>
                      </div>
                      <div className="bg-bg-secondary/60 p-2 rounded-xl border border-border-subtle">
                        <p className="text-[10px] font-semibold text-ink-primary">Casual</p>
                        <p className="text-[8px] text-ink-muted">Friendly & relaxed</p>
                      </div>
                    </div>

                    {/* Preferences Controls */}
                    <p className="text-[9px] font-semibold text-ink-primary uppercase tracking-wider mb-1.5">Adaptive Controls</p>
                    <div className="flex flex-col gap-2">
                      <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle flex items-center justify-between">
                        <div className="min-w-0 pr-2">
                          <p className="text-[10px] font-medium text-ink-primary leading-tight">Adaptive Learning</p>
                          <p className="text-[8px] text-ink-muted">Remembers workflow patterns</p>
                        </div>
                        <div className="w-7 h-4 bg-accent rounded-full p-0.5 flex items-center justify-end">
                          <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                        </div>
                      </div>

                      <div className="bg-bg-secondary/50 rounded-xl p-2.5 border border-border-subtle flex items-center justify-between">
                        <div className="min-w-0 pr-2">
                          <p className="text-[10px] font-medium text-ink-primary leading-tight">Private Vault Shield</p>
                          <p className="text-[8px] text-ink-muted">Strict local boundary</p>
                        </div>
                        <div className="w-7 h-4 bg-accent rounded-full p-0.5 flex items-center justify-end">
                          <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust footer card */}
                  <div className="bg-accent-soft/60 border border-accent/20 rounded-xl p-2.5 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={10} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold text-ink-primary leading-tight">100% On-Device Privacy</p>
                      <p className="text-[8px] text-ink-secondary">You decide what it keeps</p>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            {/* Right: Text */}
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
              <p className="mono-label text-ink-muted mb-4">(06) Why does it feel personal?</p>
              <h2 className="text-display-md font-serif text-ink-primary leading-[1.05] mb-6">
                An AI shaped<br /><span className="serif-italic text-accent">around you</span>.
              </h2>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-md">
                Tone, routines, priorities: PhoneX adapts to how you work rather than asking you to adapt to it. You stay in control of what it knows.
              </p>
              <ul className="space-y-3">
                {['Learns your preferences', 'Adjustable personality', 'You decide what it keeps'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION H: Final CTA (keep existing) */}
      <section className="py-28 md:py-36 bg-bg-primary text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto px-6"
        >
          <p className="mono-label text-ink-muted mb-4">Ready to try PhoneX?</p>
          <h2 className="text-display-lg font-serif text-ink-primary leading-[1.05] mb-6">
            See how it fits into<br />a <span className="serif-italic text-accent">normal day</span>.
          </h2>
          <p className="text-lg text-ink-secondary mb-10">
            Then start with your own companion.
          </p>
          <div className="flex justify-center">
            <Link to="/get-started">
              <PrimaryButton>Get PhoneX</PrimaryButton>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
