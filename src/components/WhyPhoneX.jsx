import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppleLink } from './ui/Button';
import { motion } from 'framer-motion';
import {
  PrivacyVisual,
  LearningVisual,
  SetupVisual,
  DevicesVisual,
  SupportVisual,
} from './visuals/LightFeatureVisuals';

export function WhyPhoneX() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const handleScroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const firstCard = el.querySelector('[data-slider-card]');
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const reasons = [
    {
      eyebrow: 'Privacy First',
      title: 'Your data stays yours.',
      description: 'PhoneX is designed with privacy at its core. Your memories and conversations are protected.',
      Visual: PrivacyVisual,
    },
    {
      eyebrow: 'Always Learning',
      title: 'Smarter every day.',
      description: 'The more you use PhoneX, the better it understands your routines and preferences.',
      Visual: LearningVisual,
    },
    {
      eyebrow: 'Setup',
      title: 'Ready in minutes.',
      description: 'Simple onboarding gets you started quickly. No complex configuration needed.',
      Visual: SetupVisual,
    },
    {
      eyebrow: 'Always There',
      title: 'Across your devices.',
      description: 'Your PhoneX companion works seamlessly on iOS, Android, macOS, and web.',
      Visual: DevicesVisual,
    },
    {
      eyebrow: 'Human Support',
      title: 'Real humans, real help.',
      description: 'Need help? Talk to our dedicated team anytime, through direct chat or email.',
      Visual: SupportVisual,
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
      <div
        ref={sliderRef}
        className="w-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 md:px-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:px-[calc(max(3rem,(100vw-1280px)/2+5rem))] scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:scroll-pl-[calc(max(3rem,(100vw-1280px)/2+5rem))] gap-4 md:gap-6 pt-4 pb-6"
      >
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            data-slider-card
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="group relative w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start bg-apple-gray hover:bg-white rounded-apple-card p-6 md:p-8 flex flex-col aspect-[3/4.2] justify-between shadow-xs hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-apple-border/40 hover:ring-1 hover:ring-black/5 transition-all duration-500 ease-out cursor-pointer"
          >
            {/* Top Text content */}
            <div>
              <p className="text-[12px] text-apple-text-2 font-normal mb-2 tracking-normal">{reason.eyebrow}</p>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-apple-text leading-[1.2] mb-3 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-[14px] text-apple-text-2 leading-[1.4]">
                {reason.description}
              </p>
            </div>

            {/* Bottom 50%: Refined Micro-Visual Illustration with subtle hover interaction */}
            <div className="mt-auto pt-4 flex flex-col items-center justify-center relative transition-transform duration-500 ease-out group-hover:scale-105">
              <reason.Visual />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slider Navigation Arrows (Apple style - right aligned below slider) */}
      <div className="mt-6 hidden md:flex justify-end gap-2 max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <button
          type="button"
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full bg-[#E8E8ED] text-black flex items-center justify-center transition-all ${
            canScrollLeft ? 'hover:bg-[#D8D8DD] cursor-pointer active:scale-95' : 'opacity-40 cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full bg-[#E8E8ED] text-black flex items-center justify-center transition-all ${
            canScrollRight ? 'hover:bg-[#D8D8DD] cursor-pointer active:scale-95' : 'opacity-40 cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}

export default WhyPhoneX;
