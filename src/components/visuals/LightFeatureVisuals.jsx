import { Sparkles, Check, Mic, Brain, Activity, Clock, Shield, Lock, Smartphone, Tablet, Watch } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * 1. ChatCardVisual (Light Blue)
 * Assistant bubble + User bubble + typing indicator + floating mic pill
 */
export function ChatCardVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none">
      {/* Micro Chat Bubbles */}
      <div className="space-y-2">
        {/* Assistant Bubble */}
        <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl rounded-tl-sm p-2.5 max-w-[85%] shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
          <p className="text-[11px] text-apple-text font-medium leading-snug">
            Hey, how can I help?
          </p>
        </div>

        {/* User Bubble */}
        <div className="bg-apple-blue text-white rounded-2xl rounded-tr-sm p-2.5 ml-auto max-w-[80%] shadow-[0_4px_16px_rgba(0,113,227,0.2)]">
          <p className="text-[11px] font-medium leading-snug">
            Summarize my week
          </p>
        </div>

        {/* Typing indicator bubble */}
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-xl rounded-tl-xs px-2.5 py-1.5 w-fit flex items-center gap-1 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-apple-blue/70 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-apple-blue/70 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-apple-blue/70 animate-bounce" />
        </div>
      </div>

      {/* Mic icon floating pill on bottom */}
      <div className="mt-auto bg-white/90 backdrop-blur-md rounded-full py-1.5 px-3 border border-white/60 shadow-[0_6px_20px_rgba(0,0,0,0.06)] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-apple-blue/15 text-apple-blue flex items-center justify-center">
            <Mic size={11} />
          </div>
          <span className="text-[10px] font-medium text-apple-text">Listening...</span>
        </div>
        {/* Soft audio wave bars */}
        <div className="flex items-center gap-0.5 h-3">
          <span className="w-0.5 h-1.5 bg-apple-blue rounded-full animate-pulse" />
          <span className="w-0.5 h-3 bg-apple-blue rounded-full animate-pulse [animation-delay:0.2s]" />
          <span className="w-0.5 h-2 bg-apple-blue rounded-full animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}

/**
 * 2. MemoryCardVisual (Light Peach)
 * Floating memory card: "Oct 14 · Café Luna" + "Sarah loved the prototype notes." + auto-remembered badge + avatar circles
 */
export function MemoryCardVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none">
      {/* Floating memory card */}
      <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-semibold text-apple-text-2 tracking-tight">
            Oct 14 · Café Luna
          </span>
          <span className="text-[8.5px] font-medium bg-emerald-500/15 text-emerald-700 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Sparkles size={8} /> Auto-remembered
          </span>
        </div>
        <p className="text-[11.5px] font-semibold text-apple-text leading-snug">
          "Sarah loved the prototype notes."
        </p>
      </div>

      {/* People linked row */}
      <div className="mt-auto bg-white/70 backdrop-blur-md rounded-2xl p-2.5 px-3 border border-white/50 shadow-xs flex items-center justify-between">
        {/* Avatar stack */}
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 border-2 border-white shadow-xs flex items-center justify-center text-[9px] font-bold text-white z-30">
            S
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 border-2 border-white shadow-xs -ml-2 flex items-center justify-center text-[9px] font-bold text-white z-20">
            A
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500 border-2 border-white shadow-xs -ml-2 flex items-center justify-center text-[9px] font-bold text-white z-10">
            M
          </div>
        </div>
        <span className="text-[9.5px] font-medium text-apple-text-2">
          + 2 moments linked
        </span>
      </div>
    </div>
  );
}

/**
 * 3. TasksCardVisual (Light Green)
 * Mini task list with 3 rows + circular progress ring "80% done today"
 */
export function TasksCardVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none">
      {/* Task list rows */}
      <div className="space-y-1.5">
        {/* Task 1: Completed */}
        <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-xl p-2 px-2.5 shadow-xs flex items-center gap-2">
          <div className="w-4 h-4 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check size={10} strokeWidth={3} />
          </div>
          <span className="text-[10px] text-apple-text-2 line-through truncate font-medium">
            Review design feedback
          </span>
        </div>

        {/* Task 2: Active */}
        <div className="bg-white/90 backdrop-blur-md border border-white/70 rounded-xl p-2 px-2.5 shadow-xs flex items-center gap-2">
          <div className="w-4 h-4 rounded-md border border-apple-border flex items-center justify-center shrink-0 bg-white" />
          <span className="text-[10px] text-apple-text font-semibold truncate">
            Call Sarah at 3 PM
          </span>
        </div>

        {/* Task 3 */}
        <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-xl p-2 px-2.5 shadow-xs flex items-center gap-2">
          <div className="w-4 h-4 rounded-md border border-apple-border flex items-center justify-center shrink-0 bg-white" />
          <span className="text-[10px] text-apple-text-2 truncate font-medium">
            Send project update
          </span>
        </div>
      </div>

      {/* Bottom circular progress card */}
      <div className="mt-auto bg-white/85 backdrop-blur-md rounded-2xl p-2 px-3 border border-white/60 shadow-xs flex items-center justify-between">
        <span className="text-[10px] font-semibold text-apple-text">80% done today</span>
        {/* Mini SVG Progress Ring */}
        <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-black/10"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-500"
              strokeDasharray="80, 100"
              strokeWidth="4"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. InsightsCardVisual (Light Purple)
 * Mini analytics card: Weekly stat "Focus Time 38h" + green mini upward trending chart + 88% habit pill
 */
export function InsightsCardVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none">
      {/* Stat Card with Trending Chart */}
      <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-apple-text-2 font-medium">Focus Time</span>
          <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-500/15 px-1.5 py-0.5 rounded-full">
            +14%
          </span>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-[20px] font-bold text-apple-text tracking-tight leading-none">
            38h
          </p>
          {/* Mini Upward Trend SVG */}
          <div className="w-20 h-6">
            <svg viewBox="0 0 80 24" className="w-full h-full overflow-visible">
              <path
                d="M 0 18 Q 20 16 35 10 T 60 8 T 80 2"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="80" cy="2" r="2.5" fill="#10B981" />
            </svg>
          </div>
        </div>
      </div>

      {/* Habit Consistency Pill */}
      <div className="mt-auto bg-white/80 backdrop-blur-md rounded-2xl p-2 px-3 border border-white/50 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-600 flex items-center justify-center">
            <Activity size={11} />
          </div>
          <span className="text-[10px] font-semibold text-apple-text">88% consistent</span>
        </div>
        <span className="text-[9px] text-apple-text-2 font-mono">7-day streak</span>
      </div>
    </div>
  );
}

/**
 * ----------------------------------------------------------------------
 * WHY PHONEX SECTION - REFINED MICRO-VISUAL ILLUSTRATIONS (ANIMATED)
 * ----------------------------------------------------------------------
 */

/**
 * 1. PrivacyVisual
 * Floating frosted glass shield with continuously pulsing lock + expanding blue glow ring
 */
export function PrivacyVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center select-none">
      {/* Continuously expanding blue glow ring */}
      <motion.div
        animate={{
          scale: [1, 1.45, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-20 h-20 rounded-full bg-apple-blue/20 blur-xl pointer-events-none"
      />

      {/* Frosted Glass Shield container */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
        className="relative w-18 h-18 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-[0_10px_30px_rgba(0,113,227,0.15)] flex items-center justify-center p-3"
      >
        <Shield size={38} className="text-apple-blue/25 absolute" />
        
        {/* Lock icon with continuous gentle pulse (scale 1 -> 1.08 -> 1) */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-9 h-9 rounded-xl bg-apple-blue/15 text-apple-blue flex items-center justify-center shadow-xs z-10"
        >
          <Lock size={17} />
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * 2. LearningVisual
 * Soft gradient brain-shaped mesh orb rotating slowly (360° in 20s) with concentric pulsing rings
 */
export function LearningVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center select-none">
      {/* Concentric rings pulsing outward */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-24 h-24 rounded-full border border-purple-400/30 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.55, 1],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 3.5,
          delay: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-28 h-28 rounded-full border border-purple-300/20 pointer-events-none"
      />

      {/* Rotating Orb (360° in 20s linear infinite) */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center border border-white/90 shadow-[0_8px_25px_rgba(168,85,247,0.25)] cursor-pointer"
        style={{
          background: 'radial-gradient(circle at 35% 30%, #F3E8FF 0%, #D8B4FE 45%, #818CF8 100%)',
        }}
      >
        <Brain size={22} className="text-white drop-shadow-sm" />
      </motion.div>
    </div>
  );
}

/**
 * 3. SetupVisual
 * Horizontal 3-dot step tracker with sequentially filling dots and animated progress line
 */
export function SetupVisual() {
  return (
    <div className="w-full h-32 flex flex-col items-center justify-center select-none">
      {/* Step Tracker Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3.5 border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col items-center gap-2.5"
      >
        {/* Connected Step Dots with sequential animation loop */}
        <div className="flex items-center gap-2 relative">
          {/* Dot 1 */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              backgroundColor: ['#0071E3', '#0071E3', '#0071E3'],
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 1] }}
            className="w-4 h-4 rounded-full bg-apple-blue text-white flex items-center justify-center shadow-xs"
          >
            <Check size={9} strokeWidth={3} />
          </motion.div>

          {/* Line 1 */}
          <div className="w-6 h-0.5 bg-black/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ width: ['0%', '100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 1], ease: 'easeInOut' }}
              className="h-full bg-apple-blue rounded-full"
            />
          </div>

          {/* Dot 2 */}
          <motion.div
            animate={{
              scale: [1, 1, 1.15, 1],
              backgroundColor: ['#FFFFFF', '#0071E3', '#0071E3', '#FFFFFF'],
              color: ['#0071E3', '#FFFFFF', '#FFFFFF', '#0071E3'],
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.55, 1] }}
            className="w-4 h-4 rounded-full border-2 border-apple-blue bg-apple-blue text-white flex items-center justify-center shadow-xs"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>

          {/* Line 2 */}
          <div className="w-6 h-0.5 bg-black/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ width: ['0%', '0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.45, 0.8, 1], ease: 'easeInOut' }}
              className="h-full bg-apple-blue rounded-full"
            />
          </div>

          {/* Dot 3 */}
          <motion.div
            animate={{
              scale: [1, 1, 1, 1.15, 1],
              borderColor: ['#D2D2D7', '#D2D2D7', '#0071E3', '#0071E3', '#D2D2D7'],
            }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.8, 0.95, 1] }}
            className="w-4 h-4 rounded-full border-2 border-apple-border bg-white flex items-center justify-center"
          />
        </div>

        <span className="text-[10.5px] font-semibold text-apple-text tracking-tight">
          Step 2 of 3 · Ready in 60s
        </span>
      </motion.div>
    </div>
  );
}

/**
 * 4. DevicesVisual
 * 3 overlapping device silhouettes floating gently with staggered delays & pulsing sync ring
 */
export function DevicesVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center select-none">
      {/* Subtle sync glow ring pulsing between devices */}
      <motion.div
        animate={{
          scale: [0.95, 1.15, 0.95],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-24 h-24 rounded-full border border-apple-blue/35 pointer-events-none"
      />

      {/* Devices grouping with staggered vertical floating */}
      <div className="relative flex items-center justify-center gap-2.5 z-10">
        {/* Watch - floats with delay */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="w-7 h-11 rounded-lg bg-white/90 backdrop-blur-md border border-white/90 shadow-sm flex items-center justify-center text-apple-text-2"
        >
          <Watch size={13} />
        </motion.div>

        {/* Phone - center primary float */}
        <motion.div
          animate={{ y: [-2, 3, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-10 h-16 rounded-xl bg-white backdrop-blur-md border border-white shadow-md flex items-center justify-center text-apple-blue"
        >
          <Smartphone size={18} />
        </motion.div>

        {/* Tablet - floats with delay */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="w-13 h-17 rounded-xl bg-white/85 backdrop-blur-md border border-white/85 shadow-sm flex items-center justify-center text-apple-text-2"
        >
          <Tablet size={19} />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * 5. SupportVisual
 * 3 overlapping avatar circles with green online dot pulsing (scale 1 -> 1.3 -> 1) with green halo
 */
export function SupportVisual() {
  return (
    <div className="w-full h-32 flex items-center justify-center select-none">
      <div className="relative flex items-center">
        {/* Avatar 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 border-2 border-white shadow-md flex items-center justify-center text-white text-[13px] font-bold z-30"
        >
          P
          {/* Pulsing green online dot with halo */}
          <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center">
            {/* Halo ring */}
            <motion.span
              animate={{
                scale: [1, 2, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="absolute w-3.5 h-3.5 rounded-full bg-emerald-400 pointer-events-none"
            />
            {/* Green Dot */}
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs"
            />
          </div>
        </motion.div>

        {/* Avatar 2 */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-violet-400 to-fuchsia-500 border-2 border-white shadow-sm flex items-center justify-center text-white text-[12px] font-bold -ml-3.5 z-20">
          A
        </div>

        {/* Avatar 3 */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 border-2 border-white shadow-xs flex items-center justify-center text-white text-[11px] font-bold -ml-3.5 z-10">
          X
        </div>
      </div>
    </div>
  );
}
