import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutItems = [
  "Switching between 5+ apps daily to manage your life",
  "Forgetting important conversations and little personal details",
  "Tasks scattered across separate to-do tools and sticky notes",
  "AI that forgets everything after each chat session ends",
  "No personalization, no context, just generic answers",
];

const withItems = [
  "One unified, connected companion for your everyday life",
  "Remembers people, places, preferences, and moments",
  "Smart tasks that adapt to your schedule and natural energy",
  "An AI companion that genuinely grows with you over time",
  "Thoughtful suggestions grounded in your real life context",
];

export function Comparison() {
  return (
    <section id="comparison" className="relative w-full bg-bg-primary py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header (centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="mono-label text-ink-muted mb-4">(05) Why PhoneX</p>
          <h2 className="text-display-lg font-serif font-normal text-ink-primary leading-[1.05] tracking-tight">
            Your life is more than
            <br />
            <span className="serif-italic text-accent">a conversation.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-secondary font-sans leading-relaxed">
            Most AI apps give you a chat window. PhoneX gives you a connected life.
          </p>
        </motion.div>

        {/* Two columns comparison — Light theme redesign */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch"
        >
          {/* Without PhoneX */}
          <div className="bg-bg-secondary rounded-3xl p-8 md:p-10 border border-border-subtle flex flex-col justify-between">
            <div>
              <p className="mono-label text-ink-muted mb-6">Without PhoneX</p>
              <ul className="space-y-5">
                {withoutItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-ink-muted/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} className="text-ink-muted" strokeWidth={2.5} />
                    </div>
                    <span className="text-ink-secondary leading-relaxed font-sans text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With PhoneX */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-accent/20 shadow-medium relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-soft rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="relative">
              <p className="mono-label text-accent mb-6 font-medium">With PhoneX</p>
              <ul className="space-y-5">
                {withItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-ink-primary leading-relaxed font-medium font-sans text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline - redesigned */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16 text-2xl md:text-3xl font-serif font-normal text-ink-primary"
        >
          Less switching. <span className="serif-italic text-accent">More living.</span>
        </motion.p>
      </div>
    </section>
  );
}

export default Comparison;
