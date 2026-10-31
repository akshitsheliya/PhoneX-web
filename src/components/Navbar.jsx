import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/80 backdrop-blur-xl '
            : 'bg-white/60 backdrop-blur'
          }`}
      >
        <div className="max-w-[1024px] mx-auto px-5 md:px-6 h-[44px] flex items-center justify-between">
          {/* Logo - minimal, Apple style */}
          <a href="/" className="text-apple-text text-[21px] font-medium tracking-tight">
            PhoneX
          </a>

          {/* Center nav links - small, light weight */}
          <div className="hidden md:flex items-center gap-9">
            <a
              href="/features"
              className="text-apple-text text-[12px] font-normal opacity-80 hover:opacity-100 transition-opacity"
            >
              Features
            </a>
            <a
              href="/#showcase"
              className="text-apple-text text-[12px] font-normal opacity-80 hover:opacity-100 transition-opacity"
            >
              How it works
            </a>
            <a
              href="/#privacy"
              className="text-apple-text text-[12px] font-normal opacity-80 hover:opacity-100 transition-opacity"
            >
              Privacy
            </a>
            <a
              href="/app"
              className="text-apple-text text-[12px] font-normal opacity-80 hover:opacity-100 transition-opacity"
            >
              Open App
            </a>
          </div>

          {/* Right - Get Button (small blue pill) */}
          <a
            href="/get-started"
            className="hidden md:inline-flex bg-apple-blue hover:bg-apple-blue-hover text-white text-[12px] font-normal px-3.5 py-1 rounded-apple-btn transition-colors"
          >
            Get PhoneX
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-apple-text p-1 cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="flex justify-end p-5">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-apple-text p-1 cursor-pointer"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-start px-8 gap-5 pt-10">
              {[
                { name: 'Features', href: '/features' },
                { name: 'How it works', href: '/#showcase' },
                { name: 'Privacy', href: '/#privacy' },
                { name: 'Open App', href: '/app' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-apple-text text-2xl font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="bg-apple-blue text-white px-6 py-3 rounded-apple-btn mt-6 inline-block text-center"
              >
                Get PhoneX
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
