import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PrimaryButton } from "./ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashClick = (e, targetId) => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? "bg-bg-primary/90 border-b border-border-subtle shadow-soft"
            : "bg-bg-primary/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Left — Logo */}
          <a href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-ink-primary flex items-center justify-center shadow-sm">
              <span className="text-bg-primary font-serif text-lg leading-none">P</span>
            </div>
            <span className="text-ink-primary font-medium text-[17px] tracking-tight">
              PhoneX
            </span>
          </a>

          {/* Center — Nav Links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="/features"
              className="text-ink-secondary hover:text-ink-primary text-[14px] font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="/#showcase"
              onClick={(e) => handleHashClick(e, "showcase")}
              className="text-ink-secondary hover:text-ink-primary text-[14px] font-medium transition-colors duration-200"
            >
              How it works
            </a>
            <a
              href="/#privacy"
              onClick={(e) => handleHashClick(e, "privacy")}
              className="text-ink-secondary hover:text-ink-primary text-[14px] font-medium transition-colors duration-200"
            >
              Privacy
            </a>
          </nav>

          {/* Right — CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a href="/get-started" className="hidden sm:inline-flex">
              <PrimaryButton className="!px-5 !py-2.5 !text-sm">
                Get PhoneX
              </PrimaryButton>
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex md:hidden p-2 rounded-lg text-ink-primary hover:text-accent transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-bg-primary flex flex-col justify-between p-6 md:hidden"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between h-[72px]">
              <a href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="w-8 h-8 rounded-lg bg-ink-primary flex items-center justify-center">
                  <span className="text-bg-primary font-serif text-lg leading-none">P</span>
                </div>
                <span className="text-ink-primary font-medium text-[17px] tracking-tight">
                  PhoneX
                </span>
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 text-ink-primary hover:text-accent transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Large Centered Nav Links */}
            <nav className="flex flex-col items-center justify-center gap-8 my-auto">
              <a
                href="/features"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-ink-primary hover:text-accent transition-colors"
              >
                Features
              </a>
              <a
                href="/#showcase"
                onClick={(e) => handleHashClick(e, "showcase")}
                className="text-3xl font-serif text-ink-primary hover:text-accent transition-colors"
              >
                How it works
              </a>
              <a
                href="/#privacy"
                onClick={(e) => handleHashClick(e, "privacy")}
                className="text-3xl font-serif text-ink-primary hover:text-accent transition-colors"
              >
                Privacy
              </a>
            </nav>

            {/* Mobile CTA */}
            <div className="pt-6 pb-8 flex flex-col items-center gap-4">
              <a href="/get-started" onClick={() => setIsOpen(false)} className="w-full max-w-xs text-center">
                <PrimaryButton className="w-full py-3.5 text-base justify-center">
                  Get PhoneX
                </PrimaryButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
