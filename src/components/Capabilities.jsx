import { motion } from "framer-motion";
import { Check, Mic, ArrowRight } from "lucide-react";

export function Capabilities() {
  const waveforms = [12, 20, 32, 16, 28, 24, 14, 22, 18, 26];

  return (
    <section id="capabilities" className="relative w-full bg-bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="mono-label text-ink-muted mb-4">(06) Thoughtful Capabilities</p>
          <h2 className="text-display-lg font-serif font-normal text-ink-primary leading-[1.05] tracking-tight">
            Designed for the
            <br />
            <span className="serif-italic text-accent">everyday</span>, not the extraordinary.
          </h2>
        </motion.div>

        {/* 3 Cards grid — Asymmetric 7-5-5-7 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 - Larger (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl border border-border-subtle shadow-soft overflow-hidden group hover:shadow-medium transition-shadow p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="mb-6">
              {/* Cropped UI preview - abstract memory card */}
              <div className="bg-bg-secondary rounded-2xl p-5 border border-border-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-warm shadow-sm flex items-center justify-center text-white text-xs font-serif font-bold">
                    P
                  </div>
                  <div>
                    <p className="text-xs mono-label text-ink-muted">MEMORY · OCT 14</p>
                    <p className="text-sm font-semibold text-ink-primary">Lunch with Sarah</p>
                  </div>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  She mentioned a new book on design systems — "Shape Up" by Ryan Singer.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-normal text-ink-primary mb-2 tracking-tight">
                Personal Memories
              </h3>
              <p className="text-ink-secondary leading-relaxed font-sans">
                PhoneX remembers the people, places, and conversations that matter — automatically, in
                context.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Smaller (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white rounded-3xl border border-border-subtle shadow-soft overflow-hidden p-8 md:p-10 flex flex-col justify-between group hover:shadow-medium transition-shadow"
          >
            <div className="mb-6">
              {/* Cropped UI - task list */}
              <div className="space-y-2">
                {[
                  { done: true, label: "Standup", time: "9:00 AM" },
                  { done: false, label: "Design Review", time: "2:00 PM", priority: true },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="bg-bg-secondary rounded-xl p-3 flex items-center gap-3 border border-border-subtle"
                  >
                    <div
                      className={`w-4 h-4 rounded border-2 ${
                        t.done ? "bg-accent border-accent" : "border-ink-muted/30"
                      } flex items-center justify-center shrink-0`}
                    >
                      {t.done && <Check size={10} className="text-white" strokeWidth={3} />}
                    </div>
                    <span
                      className={`text-sm flex-1 truncate ${
                        t.done ? "line-through text-ink-muted" : "text-ink-primary font-medium"
                      }`}
                    >
                      {t.label}
                    </span>
                    {t.priority && (
                      <span className="text-[10px] bg-accent-warm/15 text-accent-warm px-2 py-0.5 rounded-full font-semibold">
                        HIGH
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-normal text-ink-primary mb-2 tracking-tight">
                Smart Tasks
              </h3>
              <p className="text-ink-secondary leading-relaxed font-sans">
                Tasks that reorganize themselves around your real schedule.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Smaller (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white rounded-3xl border border-border-subtle shadow-soft overflow-hidden p-8 md:p-10 flex flex-col justify-between group hover:shadow-medium transition-shadow"
          >
            <div className="mb-6">
              {/* Cropped UI - voice interaction */}
              <div className="bg-bg-secondary rounded-2xl p-5 border border-border-subtle">
                <div className="flex items-center gap-2 mb-3">
                  <Mic size={14} className="text-accent" />
                  <p className="mono-label text-ink-muted">VOICE</p>
                </div>
                <div className="flex items-end gap-1 h-8 mb-3">
                  {waveforms.map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-accent rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-ink-primary italic">
                  "Remind me about Mark's presentation Friday"
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-normal text-ink-primary mb-2 tracking-tight">
                Voice & Assistance
              </h3>
              <p className="text-ink-secondary leading-relaxed font-sans">
                Talk naturally. PhoneX listens, understands, and remembers.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Larger CTA card (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-ink-primary rounded-3xl p-8 md:p-10 relative overflow-hidden flex items-center justify-between"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-normal text-bg-primary mb-4 leading-tight tracking-tight">
                Explore every
                <br />
                capability.
              </h3>
              <a
                href="/features"
                className="group inline-flex items-center gap-2 bg-bg-primary text-ink-primary font-medium px-5 py-2.5 rounded-full hover:gap-3 transition-all cursor-pointer shadow-sm text-sm"
              >
                <span>See all features</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent rounded-full blur-3xl opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
