import {
  Search,
  FileText,
  Camera,
  Video,
  File,
  MessageSquare,
  Mail,
  Plane,
  Calendar,
  Heart,
  Cake,
  TrendingUp,
  Moon,
  Laptop,
  Tablet,
  Smartphone,
  Sparkles,
  FileSpreadsheet,
} from 'lucide-react';

/**
 * 1. KnowledgeVaultVisual
 * Deep Maroon gradient with search input & 2x2 colorful frosted tiles
 */
export function KnowledgeVaultVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      {/* Search Input Bar */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 px-3 border border-white/15 flex items-center gap-2 shadow-sm mb-3">
        <Search size={14} className="text-white/60 shrink-0" />
        <span className="text-[11px] text-white/60 font-normal truncate">
          Ask PhoneX anything...
        </span>
      </div>

      {/* 2x2 Grid of Colorful Frosted Tiles */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {/* Tile 1: Documents (Blue) */}
        <div className="bg-blue-500/15 backdrop-blur-md rounded-xl p-2.5 border border-blue-400/25 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]">
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <FileText size={13} />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white leading-tight">Documents</p>
            <p className="text-[9px] text-white/50 mt-0.5">124 files</p>
          </div>
        </div>

        {/* Tile 2: Photos (Pink) */}
        <div className="bg-pink-500/15 backdrop-blur-md rounded-xl p-2.5 border border-pink-400/25 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]">
          <div className="w-6 h-6 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
            <Camera size={13} />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white leading-tight">Photos</p>
            <p className="text-[9px] text-white/50 mt-0.5">3,210</p>
          </div>
        </div>

        {/* Tile 3: Videos (Orange) */}
        <div className="bg-amber-500/15 backdrop-blur-md rounded-xl p-2.5 border border-amber-400/25 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]">
          <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Video size={13} />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white leading-tight">Videos</p>
            <p className="text-[9px] text-white/50 mt-0.5">82</p>
          </div>
        </div>

        {/* Tile 4: PDFs (Purple) */}
        <div className="bg-purple-500/15 backdrop-blur-md rounded-xl p-2.5 border border-purple-400/25 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02]">
          <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <File size={13} />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white leading-tight">PDFs</p>
            <p className="text-[9px] text-white/50 mt-0.5">47</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. PhoneXActionsVisual
 * Midnight Blue gradient with vertical glassmorphic actionable rows
 */
export function PhoneXActionsVisual() {
  const actions = [
    {
      icon: MessageSquare,
      iconColor: 'text-sky-400',
      iconBg: 'bg-sky-500/20',
      title: 'Send messages',
      subtitle: 'Reply on your behalf',
      badge: 'Active',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
    },
    {
      icon: Mail,
      iconColor: 'text-indigo-400',
      iconBg: 'bg-indigo-500/20',
      title: 'Send emails',
      subtitle: 'Drafted with your tone',
      badge: 'Active',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
    },
    {
      icon: Plane,
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/20',
      title: 'Book flights',
      subtitle: 'Compare & confirm',
      badge: 'Ready',
      badgeClass: 'bg-white/10 text-white/70 border-white/20',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between gap-2 select-none">
      {actions.map((act, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 px-3 border border-white/15 flex items-center justify-between shadow-sm transition-transform duration-200 hover:scale-[1.01]"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`w-7 h-7 rounded-lg ${act.iconBg} ${act.iconColor} flex items-center justify-center shrink-0`}>
              <act.icon size={14} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-white leading-tight truncate">
                {act.title}
              </p>
              <p className="text-[9px] text-white/55 truncate leading-tight mt-0.5">
                {act.subtitle}
              </p>
            </div>
          </div>
          <span
            className={`text-[8.5px] font-medium px-2 py-0.5 rounded-full border ${act.badgeClass} shrink-0`}
          >
            {act.badge}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * 3. FamilyAIVisual
 * Deep Plum Purple gradient with timeline/tree cards & connected dates
 */
export function FamilyAIVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      {/* Top connected cards */}
      <div className="relative">
        {/* Subtle glowing connection line */}
        <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-purple-400/30 via-pink-400/60 to-purple-400/30 pointer-events-none" />

        <div className="grid grid-cols-2 gap-2 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 shadow-sm text-center">
            <p className="text-[9px] text-purple-300/80 font-mono uppercase tracking-wider">Moments</p>
            <p className="text-[15px] font-bold text-white tracking-tight mt-0.5">Timeline</p>
            <p className="text-[8.5px] text-white/50">120 captured</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 shadow-sm text-center">
            <p className="text-[9px] text-pink-300/80 font-mono uppercase tracking-wider">Heritage</p>
            <p className="text-[15px] font-bold text-white tracking-tight mt-0.5">Family Tree</p>
            <p className="text-[8.5px] text-white/50">4 generations</p>
          </div>
        </div>
      </div>

      {/* Bottom Important Dates list */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15 shadow-sm space-y-1.5 mt-2">
        <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-wider text-white/50 px-1">
          <span>Important Dates</span>
          <span>Upcoming</span>
        </div>

        {/* Date 1 */}
        <div className="bg-white/5 rounded-lg p-1.5 px-2 flex items-center justify-between border border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-5 h-5 rounded-md bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0">
              <Cake size={11} />
            </div>
            <span className="text-[10px] font-medium text-white truncate">Mom's birthday</span>
          </div>
          <span className="text-[9px] text-pink-300/90 font-mono shrink-0">Mar 12</span>
        </div>

        {/* Date 2 */}
        <div className="bg-white/5 rounded-lg p-1.5 px-2 flex items-center justify-between border border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0">
              <Heart size={11} />
            </div>
            <span className="text-[10px] font-medium text-white truncate">Parents' anniversary</span>
          </div>
          <span className="text-[9px] text-rose-300/90 font-mono shrink-0">Jul 04</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. AICloneVisual
 * Dark Violet / Obsidian gradient with holographic glowing orb & learning badges
 */
export function AICloneVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center select-none text-center">
      {/* Animated Glowing Orb */}
      <div className="relative my-auto flex items-center justify-center">
        {/* Pulse Ring */}
        <div className="absolute w-20 h-20 rounded-full bg-violet-500/30 blur-xl animate-pulse pointer-events-none" />
        <div className="absolute w-16 h-16 rounded-full border border-violet-400/40 animate-ping opacity-25 pointer-events-none" />

        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center border border-white/40 shadow-lg"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #C4B5FD 0%, #8B5CF6 45%, #EC4899 85%, #3B82F6 100%)',
            boxShadow: '0 0 24px rgba(167, 139, 250, 0.45)',
          }}
        >
          <Sparkles size={18} className="text-white drop-shadow-md" />
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 shadow-sm space-y-1.5 mt-2">
        <div className="flex items-center justify-between text-[9.5px]">
          <span className="text-white/80 font-medium">Learning progress</span>
          <span className="font-semibold text-violet-300 font-mono">72%</span>
        </div>
        <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-white/10">
          <div className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-400 rounded-full w-[72%]" />
        </div>

        {/* Trait badges below */}
        <div className="flex items-center justify-between gap-1.5 pt-1 text-[8px] font-mono">
          <span className="bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-md border border-violet-400/20 truncate">
            Personality: 72%
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-400/20 truncate">
            Voice clone: Ready
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. BusinessBrainVisual
 * Deep Slate / Charcoal gradient with corporate metrics & voice query pill
 */
export function BusinessBrainVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      {/* 2x2 Grid Tiles */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-sky-400 tracking-wider">Vault</span>
          <p className="text-[11px] font-semibold text-white leading-tight mt-1">Company Knowledge</p>
          <span className="text-[8.5px] text-white/50">Unified Hub</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-emerald-400 tracking-wider">Docs</span>
          <p className="text-[11px] font-semibold text-white leading-tight mt-1">Documents</p>
          <span className="text-[8.5px] text-white/50">420 files</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-violet-400 tracking-wider">Sync</span>
          <p className="text-[11px] font-semibold text-white leading-tight mt-1">Meetings</p>
          <span className="text-[8.5px] text-white/50">58 transcripts</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-amber-400 tracking-wider">Ops</span>
          <p className="text-[11px] font-semibold text-white leading-tight mt-1">SOPs & Manuals</p>
          <span className="text-[8.5px] text-white/50">32 indexed</span>
        </div>
      </div>

      {/* Floating Translucent Voice Pill */}
      <div className="bg-white/15 backdrop-blur-md rounded-xl p-2 px-3 border border-white/20 shadow-md flex items-center gap-2 mt-2.5">
        <div className="flex items-center gap-0.5 shrink-0">
          <span className="w-1 h-2 bg-apple-blue rounded-full animate-pulse" />
          <span className="w-1 h-3.5 bg-apple-blue rounded-full animate-bounce" />
          <span className="w-1 h-1.5 bg-apple-blue rounded-full" />
        </div>
        <p className="text-[10px] text-white/90 font-medium italic truncate">
          "Why was this decision made?"
        </p>
      </div>
    </div>
  );
}

/**
 * 6. LifeInsightsVisual
 * Dark Teal / Emerald gradient with focus time, sleep & habit ring
 */
export function LifeInsightsVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      <div className="grid grid-cols-2 gap-2">
        {/* Focus Time */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 shadow-sm">
          <div className="flex items-center justify-between text-emerald-400 mb-1">
            <span className="text-[8.5px] font-mono uppercase tracking-wider">Focus</span>
            <TrendingUp size={11} />
          </div>
          <p className="text-[17px] font-bold text-white tracking-tight leading-none">38h</p>
          <p className="text-[8.5px] text-emerald-400 font-medium mt-1">+14% this week</p>
        </div>

        {/* Sleep Quality */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15 shadow-sm">
          <div className="flex items-center justify-between text-teal-300 mb-1">
            <span className="text-[8.5px] font-mono uppercase tracking-wider">Sleep</span>
            <Moon size={11} />
          </div>
          <p className="text-[17px] font-bold text-white tracking-tight leading-none">8.2h</p>
          <p className="text-[8.5px] text-teal-300/80 font-medium mt-1">Deep & Restful</p>
        </div>
      </div>

      {/* Habit Consistency Ring & Progress */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 px-3 border border-white/15 shadow-sm flex items-center justify-between mt-2">
        <div>
          <p className="text-[11px] font-semibold text-white leading-tight">Habit Consistency</p>
          <p className="text-[8.5px] text-white/55 mt-0.5">Morning meditation & routine</p>
        </div>

        {/* Circular Progress Ring */}
        <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-white/15"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-400"
              strokeDasharray="88, 100"
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute text-[9.5px] font-bold text-white font-mono">88%</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 7. EverywhereVisual
 * Dark Metallic Gray gradient with overlapping Phone, Tablet, Laptop & glowing sync line
 */
export function EverywhereVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative select-none">
      {/* Overlapping Sleek Device Frames */}
      <div className="relative w-full max-w-[240px] h-[130px] flex items-center justify-center">
        {/* Laptop (Back) */}
        <div className="absolute -top-1 w-[160px] h-[95px] bg-[#1a1a1c] rounded-xl border border-white/20 p-1.5 shadow-xl flex flex-col items-center">
          <div className="w-full flex-1 bg-black/60 rounded-lg border border-white/10 flex items-center justify-center text-white/30">
            <Laptop size={18} className="text-cyan-400/70" />
          </div>
          <div className="w-16 h-1 bg-white/20 rounded-full mt-1" />
        </div>

        {/* Tablet (Left Foreground) */}
        <div className="absolute left-1 bottom-0 w-[80px] h-[75px] bg-[#242428] rounded-xl border border-white/30 p-1 shadow-2xl flex flex-col items-center z-10">
          <div className="w-full flex-1 bg-black/70 rounded-md border border-white/10 flex items-center justify-center text-cyan-300">
            <Tablet size={14} />
          </div>
          <div className="w-3 h-0.5 bg-white/40 rounded-full mt-0.5" />
        </div>

        {/* Phone (Right Foreground) */}
        <div className="absolute right-3 bottom-0 w-[55px] h-[85px] bg-[#2a2a30] rounded-xl border border-white/30 p-1 shadow-2xl flex flex-col items-center z-20">
          <div className="w-4 h-1 bg-black rounded-full mb-0.5" />
          <div className="w-full flex-1 bg-black/70 rounded-md border border-white/10 flex items-center justify-center text-cyan-300">
            <Smartphone size={13} />
          </div>
        </div>

        {/* Glowing Blue Sync Connection Line */}
        <div className="absolute bottom-6 left-8 right-10 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] z-25 pointer-events-none rounded-full" />
      </div>

      <div className="mt-1 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/15 text-[9px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Real-time Instant Sync Across Devices
      </div>
    </div>
  );
}

/**
 * 8. DigitalLegacyVisual
 * Deep Amber/Gold Dark gradient with glowing vertical timeline & milestone nodes
 */
export function DigitalLegacyVisual() {
  const milestones = [
    { year: '2008', event: 'Graduated DU' },
    { year: '2016', event: 'Married Priya' },
    { year: '2019', event: 'Founded Aurora Labs' },
    { year: '2023', event: '6-month Europe journey' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between relative select-none pl-1">
      {/* Vertical Timeline Path */}
      <div className="relative flex-1 flex flex-col justify-between py-1">
        {/* Glowing vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-amber-400/80 via-amber-300 to-amber-500/60 shadow-[0_0_8px_rgba(251,191,36,0.5)] rounded-full" />

        {milestones.map((m, idx) => (
          <div key={idx} className="relative flex items-center gap-2.5 z-10">
            {/* Glowing Node Dot */}
            <div className="w-6 h-6 rounded-full bg-[#1e1308] border border-amber-400/70 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>

            {/* Event pill */}
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-lg p-1.5 px-2.5 border border-white/15 flex items-center justify-between shadow-xs">
              <span className="text-[10px] font-medium text-white truncate">{m.event}</span>
              <span className="text-[8.5px] font-mono text-amber-300/90 ml-1.5 shrink-0 font-semibold">
                {m.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

