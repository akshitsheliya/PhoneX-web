import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./ui/Button";

export function FinalCTA() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-bg-secondary py-24 md:py-32 overflow-hidden">
      {/* Background accent (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-soft rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow Label */}
          <p className="mono-label text-ink-muted mb-6">(08) Ready?</p>

          {/* Headline */}
          <h2 className="text-display-xl font-serif font-normal text-ink-primary leading-[0.95] tracking-tight">
            Make room for
            <br />
            <span className="serif-italic text-accent">what matters.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-8 text-xl text-ink-secondary max-w-lg mx-auto leading-relaxed font-sans">
            Download PhoneX and let your AI companion handle the rest.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/get-started" className="cursor-pointer">
              <PrimaryButton>Join Early Access</PrimaryButton>
            </a>
            <SecondaryButton onClick={() => handleScrollTo("showcase")}>
              See how it works
            </SecondaryButton>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-ink-muted font-sans">
            Free to start · No credit card required · Available soon on iOS & Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
