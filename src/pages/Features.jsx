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
  MessageSquare,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import PhoneFrame from '../components/PhoneFrame';
import { PrimaryButton } from '../components/ui/Button';
import {
  KnowledgeVaultVisual,
  PhoneXActionsVisual,
  FamilyAIVisual,
  AICloneVisual,
  BusinessBrainVisual,
  LifeInsightsVisual,
  EverywhereVisual,
  DigitalLegacyVisual,
} from '../components/visuals/FeatureVisuals';

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
              <div className="relative">
                {/* FLOATING CHIPS - Positioned relative to phone frame */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-8 md:-left-12 bg-white/95 backdrop-blur-sm border border-border-subtle rounded-full px-3.5 py-1.5 shadow-soft flex items-center gap-2 text-xs font-medium text-ink-primary z-30 whitespace-nowrap"
                >
                  <Calendar size={12} className="text-accent shrink-0" />
                  <span>Plan your day</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute top-1/2 -right-4 md:-right-8 bg-white/95 backdrop-blur-sm border border-border-subtle rounded-full px-3.5 py-1.5 shadow-soft flex items-center gap-2 text-xs font-medium text-ink-primary z-30 whitespace-nowrap"
                >
                  <Sparkles size={12} className="text-accent-warm shrink-0" />
                  <span>Remembers you</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                  className="absolute bottom-8 -left-6 md:-left-10 bg-white/95 backdrop-blur-sm border border-border-subtle rounded-full px-3.5 py-1.5 shadow-soft flex items-center gap-2 text-xs font-medium text-ink-primary z-30 whitespace-nowrap"
                >
                  <Mic size={12} className="text-accent shrink-0 animate-pulse" />
                  <span>Search with voice</span>
                </motion.div>

                <PhoneFrame>
                  <div className="flex-1 p-3.5 pt-10 pb-3 flex flex-col justify-between bg-[#FAFAF7] overflow-hidden select-none">
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-1">
                      <div
                        className="w-7 h-7 rounded-full bg-white border border-border-subtle shadow-soft flex items-center justify-center text-ink-primary"
                        aria-label="Back"
                      >
                        <ChevronLeft size={14} />
                      </div>
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
                            { angle: 0, color: '#8B5CF6', size: 3 },
                            { angle: 30, color: '#38BDF8', size: 2.5 },
                            { angle: 60, color: '#F43F5E', size: 3 },
                            { angle: 90, color: '#A78BFA', size: 2 },
                            { angle: 120, color: '#FBCFE8', size: 2.5 },
                            { angle: 150, color: '#38BDF8', size: 3 },
                            { angle: 180, color: '#8B5CF6', size: 2.5 },
                            { angle: 210, color: '#F43F5E', size: 2 },
                            { angle: 240, color: '#A78BFA', size: 3 },
                            { angle: 270, color: '#38BDF8', size: 2.5 },
                            { angle: 300, color: '#FBCFE8', size: 3 },
                            { angle: 330, color: '#8B5CF6', size: 2 },
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
                                  ease: 'easeInOut',
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
                            '0 12px 35px -8px rgba(91, 79, 233, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.7)',
                            '0 16px 45px -5px rgba(124, 226, 254, 0.55), inset 0 2px 14px rgba(255, 255, 255, 0.9)',
                            '0 12px 35px -8px rgba(91, 79, 233, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.7)',
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative w-28 h-28 rounded-full flex items-center justify-center overflow-hidden border border-white/70 shadow-lg"
                        style={{
                          background:
                            'radial-gradient(circle at 35% 30%, #BAE6FD 0%, #DDD6FE 38%, #FBCFE8 70%, #FED7AA 100%)',
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
                                ease: 'easeInOut',
                                delay: i * 0.04,
                              }}
                              className="w-[2px] rounded-full bg-gradient-to-t from-accent to-[#7CE2FE]"
                            />
                          )
                        )}
                      </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex items-center justify-center gap-4 pt-2 pb-1">
                      {/* Left Mic button */}
                      <div
                        className="w-9 h-9 rounded-full bg-white border border-border-subtle shadow-soft flex items-center justify-center text-ink-primary"
                        aria-label="Microphone"
                      >
                        <Mic size={14} />
                      </div>

                      {/* Center Holographic Chat button */}
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-medium border border-white/80"
                        style={{
                          background:
                            'radial-gradient(circle at 30% 30%, #7CE2FE 0%, #A78BFA 50%, #F472B6 100%)',
                        }}
                        aria-label="Chat"
                      >
                        <MessageSquare size={16} className="text-white drop-shadow-sm" />
                      </div>

                      {/* Right Close button */}
                      <div
                        className="w-9 h-9 rounded-full bg-white border border-border-subtle shadow-soft flex items-center justify-center text-ink-primary"
                        aria-label="Close"
                      >
                        <X size={14} />
                      </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
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

      {/* SECTION G.2: Advanced Intelligence Architecture Grid */}
      <section className="py-20 md:py-28 bg-[#0D0D10] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] font-mono uppercase tracking-widest text-apple-blue font-semibold mb-3">
              Feature Architecture
            </p>
            <h2 className="text-display-md font-semibold text-white tracking-tight leading-[1.08]">
              Engineered for privacy.<br />
              Trained for everything else.
            </h2>
            <p className="mt-4 text-[15px] text-white/60 leading-relaxed">
              Every system is built on on-device neural processing, keeping your data locked in your private vault while assisting across every screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {/* 1. Knowledge Vault */}
            <div className="bg-gradient-to-b from-[#2A080C] to-[#120305] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-red-300/70 tracking-wider">Vault</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">Knowledge Vault</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Search across documents, media, and notes with semantic retrieval.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <KnowledgeVaultVisual />
              </div>
            </div>

            {/* 2. Actions */}
            <div className="bg-gradient-to-b from-[#0A0E2A] to-[#040614] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-sky-300/70 tracking-wider">Automation</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">PhoneX Actions</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Send messages, compose emails, and plan travel autonomously.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <PhoneXActionsVisual />
              </div>
            </div>

            {/* 3. Family AI */}
            <div className="bg-gradient-to-b from-[#1E0A24] to-[#0B030E] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-purple-300/70 tracking-wider">Circle</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">Family AI</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Shared generational memories and milestone reminders for loved ones.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <FamilyAIVisual />
              </div>
            </div>

            {/* 4. AI Clone */}
            <div className="bg-gradient-to-b from-[#120826] to-[#05020D] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-violet-300/70 tracking-wider">Neural</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">AI Clone</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Adapts tone, decision criteria, and preserves voice personality.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <AICloneVisual />
              </div>
            </div>

            {/* 5. Business Brain */}
            <div className="bg-gradient-to-b from-[#1C2026] to-[#0A0C0E] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-slate-300/70 tracking-wider">Enterprise</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">Business Brain</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Company documentation, meeting transcripts, and decision queries.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <BusinessBrainVisual />
              </div>
            </div>

            {/* 6. Life Insights */}
            <div className="bg-gradient-to-b from-[#06201B] to-[#020D0A] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-emerald-300/70 tracking-wider">Biometrics</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">Life Insights</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Quantified focus, sleep rhythms, and continuous habit consistency.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <LifeInsightsVisual />
              </div>
            </div>

            {/* 7. Everywhere */}
            <div className="bg-gradient-to-b from-[#222226] to-[#0D0D0E] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-cyan-300/70 tracking-wider">Ecosystem</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">Everywhere</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Real-time encrypted sync between phone, tablet, and desktop.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <EverywhereVisual />
              </div>
            </div>

            {/* 8. Digital Legacy */}
            <div className="bg-gradient-to-b from-[#24170A] to-[#0E0B04] rounded-apple-card p-5 flex flex-col justify-between border border-white/10 shadow-lg min-h-[360px]">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase text-amber-300/70 tracking-wider">Archival</p>
                <h3 className="text-[18px] font-semibold text-white mt-1">Digital Legacy</h3>
                <p className="text-[12px] text-white/60 mt-1 leading-snug">
                  Preserve your timeline, memories, and voice stories forever.
                </p>
              </div>
              <div className="h-[210px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-xl overflow-hidden">
                <DigitalLegacyVisual />
              </div>
            </div>
          </div>
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
