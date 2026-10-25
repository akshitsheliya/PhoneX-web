import { motion } from "framer-motion";
import { Brain, MessageCircle, CalendarDays } from "lucide-react";

export function WhatIsPhoneX() {
  const capabilities = [
    { icon: Brain, label: "Remembers context" },
    { icon: MessageCircle, label: "Chat & voice" },
    { icon: CalendarDays, label: "Organizes your day" },
  ];

  return (
    <section id="about" className="relative w-full bg-bg-primary py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6"
        >
          {/* Left Column: sticky label + section title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="mono-label text-ink-muted mb-4">(01) About</p>
              <h2 className="text-display-md font-serif font-normal text-ink-primary leading-tight tracking-tight">
                Not just
                <br />
                another app.
              </h2>
            </div>
          </div>

          {/* Right Column: main content */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 mt-8 lg:mt-0">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-serif font-normal text-ink-primary leading-snug">
                PhoneX is a <span className="serif-italic text-accent">second brain</span> — an AI
                companion that remembers people, understands your routines, and helps your days run a
                little smoother.
              </p>

              <p className="text-lg text-ink-secondary leading-relaxed max-w-[520px] font-sans">
                It combines an intelligent assistant, a personal memory system, a smart task manager,
                and a daily life organizer — all designed to grow more useful the more you use it.
              </p>

              {/* Three capability pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {capabilities.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white border border-border-subtle rounded-full px-5 py-2.5 shadow-soft hover:shadow-medium hover:border-border-default transition-all duration-300"
                  >
                    <Icon size={16} className="text-accent shrink-0" />
                    <span className="text-sm font-medium text-ink-primary">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIsPhoneX;
