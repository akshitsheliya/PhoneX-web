import { motion } from "framer-motion";

const timelineItems = [
  {
    time: "07:00 — Morning",
    title: "A gentle start to the day",
    description:
      "Weather, your schedule, and one small nudge toward whatever matters most today.",
  },
  {
    time: "11:00 — Midday",
    title: "Reminders that actually help",
    description:
      "A meeting in 30 minutes? Your notes are already open, and PhoneX reminded you to leave early.",
  },
  {
    time: "17:00 — Evening",
    title: "Space for yourself",
    description:
      "A free hour? PhoneX suggests something restorative based on how your day went.",
  },
  {
    time: "22:00 — Night",
    title: "A quiet reflection",
    description:
      "A short summary of your day, memories logged, tomorrow gently planned.",
  },
];

export function DayWithPhoneX() {
  return (
    <section id="timeline" className="relative w-full bg-bg-primary py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header (left-aligned, not centered) */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="mono-label text-ink-muted mb-4">(03) A Day in the Life</p>
          <h2 className="text-display-lg font-serif font-normal text-ink-primary leading-[1.05] tracking-tight">
            From sunrise to <span className="serif-italic text-accent">goodnight</span>.
          </h2>
          <p className="mt-6 text-lg text-ink-secondary leading-relaxed font-sans">
            PhoneX quietly works in the background, so your day feels less like a list and more like a
            flow.
          </p>
        </div>

        {/* Single-column stacked timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border-subtle" />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-16 md:pl-20 pb-16 last:pb-0"
            >
              {/* Dot on line */}
              <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-soft">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              {/* Time */}
              <p className="mono-label text-accent mb-2 font-medium">{item.time}</p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-ink-primary mb-3 leading-tight tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-ink-secondary leading-relaxed max-w-xl font-sans text-base md:text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DayWithPhoneX;
