import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Sparkles, Target, Clock, BookOpen, Check } from "lucide-react";

export function SeeInAction() {
  const [active, setActive] = useState(0);

  const categories = [
    {
      label: "Planning",
      headline: "Organize your week with effortless intelligence",
      description:
        "PhoneX maps your commitments, protects your deep-work windows, and calculates travel buffers before you even have to think about them.",
      preview: (
        <div className="bg-bg-primary rounded-2xl p-6 border border-border-subtle shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-border-subtle/80 pb-3">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-accent" />
              <span className="mono-label text-[11px] text-ink-primary font-medium">
                Schedule Optimization
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full font-medium">
              Focus Score 94%
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border border-border-subtle/60 shadow-sm space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-ink-primary">9:00 AM – 11:30 AM</span>
              <span className="text-[10px] text-accent font-semibold bg-accent-soft px-2 py-0.5 rounded">
                Deep Work Block
              </span>
            </div>
            <p className="text-xs text-ink-secondary">
              Product Architecture & Design Review · Do Not Disturb Enabled
            </p>
          </div>

          <div className="bg-accent-soft/70 rounded-xl p-3 border border-accent/15 flex items-center gap-2.5 text-xs text-ink-secondary">
            <Sparkles size={14} className="text-accent shrink-0" />
            <span>Auto-added 15-minute buffer before Client Sync based on travel time.</span>
          </div>
        </div>
      ),
    },
    {
      label: "Conversations",
      headline: "Talk naturally, get real context",
      description:
        "Ask questions the way you think them. PhoneX remembers past discussions, personal preferences, and details across apps.",
      preview: (
        <div className="bg-bg-primary rounded-2xl p-6 border border-border-subtle shadow-soft space-y-3.5">
          <div className="flex items-center justify-between border-b border-border-subtle/80 pb-3">
            <div className="flex items-center gap-2">
              <MessageSquare size={15} className="text-accent" />
              <span className="mono-label text-[11px] text-ink-primary font-medium">
                Context-Aware Dialogue
              </span>
            </div>
            <span className="text-[10px] text-ink-muted">Voice Sync</span>
          </div>

          <div className="flex justify-end">
            <div className="bg-ink-primary text-bg-primary rounded-2xl rounded-tr-sm p-3.5 max-w-[85%] text-xs leading-relaxed shadow-sm">
              "I’m meeting Elena next week in Austin. What was that book she recommended during our last call?"
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white border border-border-subtle rounded-2xl rounded-tl-sm p-3.5 max-w-[90%] text-xs text-ink-secondary leading-relaxed space-y-1.5 shadow-soft">
              <div className="flex items-center gap-1.5 text-accent text-[11px] font-semibold">
                <Sparkles size={12} />
                <span>Found in Voice Notes (Sept 18)</span>
              </div>
              <p className="text-ink-primary">
                Elena recommended <em className="font-serif text-sm text-accent">"The Design of Everyday Things"</em> and mentioned her favorite coffee spot in Austin is <strong className="font-medium text-ink-primary">Houndstooth Coffee</strong>.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Memories",
      headline: "Never lose the moments and notes that matter",
      description:
        "From gift preferences mentioned in passing to milestone celebrations, PhoneX notes the little things so you don't have to carry mental load.",
      preview: (
        <div className="bg-bg-primary rounded-2xl p-6 border border-border-subtle shadow-soft space-y-3.5">
          <div className="flex items-center justify-between border-b border-border-subtle/80 pb-3">
            <div className="flex items-center gap-2">
              <BookOpen size={15} className="text-accent" />
              <span className="mono-label text-[11px] text-ink-primary font-medium">
                Personal Knowledge & Recall
              </span>
            </div>
            <span className="text-[10px] text-ink-muted">Auto-Logged</span>
          </div>

          <div className="bg-white rounded-xl p-4 border border-border-subtle shadow-sm space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-ink-primary">
                David’s Birthday Gift Preference
              </span>
              <span className="text-[10px] bg-bg-secondary text-ink-secondary px-2 py-0.5 rounded-full border border-border-subtle font-medium">
                Family
              </span>
            </div>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Mentioned during dinner: Looking for Japanese chef knives with cherrywood handles.
            </p>
            <div className="text-[11px] text-accent flex items-center gap-1.5 pt-1">
              <Clock size={12} />
              <span>Linked to reminder: 2 weeks before Nov 14th</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Goals",
      headline: "Track progress and build momentum gently",
      description:
        "Set personal goals that adapt to your rhythm. PhoneX breaks large targets into achievable daily steps and celebrates your consistency.",
      preview: (
        <div className="bg-bg-primary rounded-2xl p-6 border border-border-subtle shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-border-subtle/80 pb-3">
            <div className="flex items-center gap-2">
              <Target size={15} className="text-accent" />
              <span className="mono-label text-[11px] text-ink-primary font-medium">
                Adaptive Goal Progression
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full font-medium">
              On Track
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border border-border-subtle shadow-sm space-y-3">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-ink-primary">Complete Design System Launch</span>
              <span className="text-accent font-semibold">78%</span>
            </div>
            <div className="w-full bg-bg-secondary rounded-full h-2 overflow-hidden border border-border-subtle">
              <div className="bg-accent h-2 rounded-full w-[78%]" />
            </div>
            <p className="text-xs text-ink-secondary leading-relaxed">
              PhoneX handled 6 schedule optimizations this week, saving 4.5 hours of focus time.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="see-in-action" className="relative w-full bg-bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="mono-label text-ink-muted mb-4">(04) See it in Action</p>
            <h2 className="text-display-lg font-serif font-normal text-ink-primary leading-[1.05] tracking-tight">
              Real moments.
              <br />
              <span className="serif-italic text-accent">Real help.</span>
            </h2>
          </div>
          <a
            href="/features"
            className="group inline-flex items-center gap-2 text-ink-primary font-medium hover:gap-3 transition-all text-base"
          >
            <span>Explore all features</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* 4 Category Tabs — Horizontal pills */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-white rounded-full border border-border-subtle shadow-soft w-fit">
          {categories.map((cat, idx) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActive(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                active === idx
                  ? "bg-ink-primary text-bg-primary shadow-sm"
                  : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Preview area — Large card */}
        <div className="bg-white rounded-3xl border border-border-subtle shadow-medium p-8 md:p-12 min-h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <p className="mono-label text-accent mb-3 font-semibold">
                  {categories[active].label.toUpperCase()}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-normal text-ink-primary mb-4 leading-tight tracking-tight">
                  {categories[active].headline}
                </h3>
                <p className="text-ink-secondary leading-relaxed font-sans text-base md:text-lg">
                  {categories[active].description}
                </p>
              </div>
              <div className="relative">{categories[active].preview}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default SeeInAction;
