import { Plus } from 'lucide-react';
import { AppleLink } from './ui/Button';

export function WhyPhoneX() {
  const reasons = [
    {
      eyebrow: 'Privacy First',
      title: 'Your data stays yours.',
      description: 'PhoneX is designed with privacy at its core. Your memories and conversations are protected.',
      visual: '🔒',
    },
    {
      eyebrow: 'Always Learning',
      title: 'Smarter every day.',
      description: 'The more you use PhoneX, the better it understands your routines and preferences.',
      visual: '✨',
    },
    {
      eyebrow: 'Setup',
      title: 'Ready in minutes.',
      description: 'Simple onboarding gets you started quickly. No complex configuration needed.',
      visual: '⚡',
    },
    {
      eyebrow: 'Always There',
      title: 'Across all your devices.',
      description: 'Your PhoneX companion works seamlessly on iOS, Android, and web.',
      visual: '📱',
    },
    {
      eyebrow: 'Human Support',
      title: 'Real people, real help.',
      description: 'Need help? Talk to our support team anytime, through chat or email.',
      visual: '💬',
    },
  ];

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-white">
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 mb-8 md:mb-12 flex items-end justify-between">
        <h2 className="text-apple-headline text-apple-text max-w-md leading-[1.1] tracking-tight font-semibold">
          Why PhoneX is<br />built for you.
        </h2>
        <AppleLink href="/features">Learn more</AppleLink>
      </div>

      {/* Horizontal edge-to-edge scrollable track */}
      <div className="w-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 md:px-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:px-[calc(max(3rem,(100vw-1280px)/2+5rem))] scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:scroll-pl-[calc(max(3rem,(100vw-1280px)/2+5rem))] gap-4 md:gap-6 pb-4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="relative w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start bg-apple-gray rounded-apple-card p-6 md:p-8 flex flex-col aspect-[3/4] justify-between shadow-xs"
          >
            <div>
              <p className="text-[12px] text-apple-text-2 font-normal mb-2">{reason.eyebrow}</p>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-apple-text leading-[1.2] mb-3 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-[14px] text-apple-text-2 leading-[1.4]">
                {reason.description}
              </p>
            </div>

            <div className="mt-auto pt-4 flex items-end justify-between">
              <span className="text-4xl opacity-75 select-none">{reason.visual}</span>
              <button
                type="button"
                aria-label={`Details on ${reason.title}`}
                className="w-7 h-7 rounded-full bg-apple-text/10 hover:bg-apple-text/20 flex items-center justify-center transition-all cursor-pointer"
              >
                <Plus size={14} className="text-apple-text" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyPhoneX;

