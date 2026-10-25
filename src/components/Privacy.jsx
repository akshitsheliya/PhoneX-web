import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";

export function Privacy() {
  return (
    <section id="privacy" className="relative w-full bg-bg-primary py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center"
        >
          {/* Minimal Lock Icon Card */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-white border border-border-subtle shadow-soft flex items-center justify-center">
            <Lock size={24} className="text-accent" strokeWidth={1.5} />
          </div>

          {/* Section Eyebrow */}
          <p className="mono-label text-ink-muted mb-4">(07) Privacy</p>

          {/* Heading */}
          <h2 className="text-display-md font-serif font-normal text-ink-primary leading-tight tracking-tight">
            Your AI should <span className="serif-italic text-accent">respect you</span> — not surveil you.
          </h2>

          {/* Honest Body Copy */}
          <p className="mt-6 text-lg text-ink-secondary leading-relaxed font-sans">
            Your memories, your conversations, your data. PhoneX is designed with privacy as a first principle, not an afterthought.
          </p>

          {/* Privacy Policy Link */}
          <a
            href="/privacy-policy"
            className="group inline-flex items-center gap-2 mt-8 text-ink-primary font-medium border-b border-ink-primary/30 pb-1 hover:border-ink-primary transition-colors text-sm"
          >
            <span>Read our Privacy Policy</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Privacy;
