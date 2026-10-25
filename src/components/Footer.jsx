import { Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-bg-primary border-t border-border-subtle py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand - 2 cols */}
          <div className="col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-ink-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-bg-primary font-serif text-xl leading-none">P</span>
              </div>
              <span className="text-ink-primary font-medium text-lg tracking-tight">PhoneX</span>
            </a>
            <p className="text-ink-secondary max-w-xs leading-relaxed font-sans text-sm">
              Your personal AI companion — remembers what matters, organizes your day.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="mono-label text-ink-muted mb-4">Product</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/features" className="text-ink-primary hover:text-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#showcase" className="text-ink-primary hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/app" className="text-ink-primary hover:text-accent transition-colors">
                  Open App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mono-label text-ink-muted mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy" className="text-ink-primary hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-ink-primary hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mono-label text-ink-muted mb-4">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/get-started" className="text-ink-primary hover:text-accent transition-colors">
                  Get the App
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-ink-secondary hover:bg-ink-primary hover:text-bg-primary hover:border-ink-primary transition-all cursor-pointer"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="mailto:support@phonex.ai"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-ink-secondary hover:bg-ink-primary hover:text-bg-primary hover:border-ink-primary transition-all cursor-pointer"
                >
                  <Mail size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-muted font-sans">© 2026 PhoneX. All rights reserved.</p>
          <p className="text-sm text-ink-muted font-serif italic">Made with care for your everyday life.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
