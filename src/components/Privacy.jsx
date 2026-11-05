import { AppleLink, PrimaryButton } from './ui/Button';
import { Lock, ShieldCheck, HardDrive, EyeOff, KeyRound, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Privacy() {
  const highlights = [
    {
      icon: HardDrive,
      title: 'On-Device First Storage',
      desc: 'Your memories, voice notes, and conversations are encrypted and stored directly on your personal device hardware.',
    },
    {
      icon: EyeOff,
      title: 'Zero Third-Party Sharing',
      desc: 'We never sell, rent, or monetize your personal conversations or memory vault with advertisers or brokers.',
    },
    {
      icon: KeyRound,
      title: 'End-to-End Encryption',
      desc: 'Protected with AES-256 and secure cryptographic keys that only you control. Not even PhoneX engineers can read it.',
    },
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 bg-white border-t border-apple-border/40">
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        <div className="bg-gradient-to-b from-[#F5F5F7] to-[#EDEDF0] rounded-apple-card p-8 sm:p-12 md:p-16 text-center border border-apple-border/50 shadow-xs relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-apple-blue/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-apple-border/60 text-apple-text shadow-xs mb-6 text-[13px] font-medium">
            <ShieldCheck size={16} className="text-[#34C759]" strokeWidth={2.2} />
            <span>Private by Design</span>
          </div>

          <h2 className="text-apple-headline text-apple-text mb-4 max-w-2xl mx-auto leading-[1.1] tracking-tight font-semibold">
            Privacy. That's PhoneX.
          </h2>
          <p className="text-[17px] md:text-[19px] text-apple-text-2 leading-[1.47] max-w-2xl mx-auto mb-10">
            Speak confidently about your life, finances, dreams, and family. Your personal data is encrypted on your device and never shared with anyone outside.
          </p>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-black/[0.04] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-apple-gray flex items-center justify-center text-apple-text mb-4">
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-apple-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-apple-text-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/privacy"
              className="inline-flex items-center justify-center bg-apple-text text-white hover:bg-black text-[14px] font-medium px-6 py-2.5 rounded-apple-btn transition-colors shadow-xs"
            >
              Explore Privacy Architecture
            </a>
            <AppleLink href="/privacy">Read full Privacy Policy</AppleLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
