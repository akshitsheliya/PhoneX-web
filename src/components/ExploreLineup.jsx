import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppleLink } from './ui/Button';
import { motion } from 'framer-motion';
import {
  ChatCardVisual,
  MemoryCardVisual,
  TasksCardVisual,
  InsightsCardVisual,
} from './visuals/LightFeatureVisuals';

export function ExploreLineup() {
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
    // Calculate card width dynamically from first child + gap
    const firstCard = el.querySelector('[data-slider-card]');
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const products = [
    {
      badge: null,
      title: 'Chat',
      description: 'Talk to PhoneX naturally. Ask questions, think out loud, get answers.',
      bgGradient: 'from-[#E8F0FF] to-[#D4E4FF]',
      Visual: ChatCardVisual,
    },
    {
      badge: 'New',
      title: 'Memory',
      description: 'Remembers people, places, and moments that matter to you.',
      bgGradient: 'from-[#FFF0E8] to-[#FFE0D4]',
      Visual: MemoryCardVisual,
    },
    {
      badge: null,
      title: 'Tasks',
      description: 'Smart task management that adapts to your real schedule.',
      bgGradient: 'from-[#E8FFE8] to-[#D4FFD4]',
      Visual: TasksCardVisual,
    },
    {
      badge: null,
      title: 'Insights',
      description: 'Patterns from your week, shown in a way easy to act on.',
      bgGradient: 'from-[#F0E8FF] to-[#E0D4FF]',
      Visual: InsightsCardVisual,
    },
  ];

  return (
    <section id="showcase" className="w-full overflow-hidden py-16 md:py-24 bg-white">
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 mb-8 md:mb-12 flex items-end justify-between">
        <h2 className="text-apple-headline text-apple-text tracking-tight font-semibold">
          Explore PhoneX.
        </h2>
        <AppleLink href="/features">Compare all features</AppleLink>
      </div>

      {/* Horizontal edge-to-edge scrollable track */}
      <div
        ref={sliderRef}
        className="w-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 md:px-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:px-[calc(max(3rem,(100vw-1280px)/2+5rem))] scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:scroll-pl-[calc(max(3rem,(100vw-1280px)/2+5rem))] gap-4 md:gap-6 pt-4 pb-6"
      >
        {products.map((product, idx) => (
          <div
            key={idx}
            data-slider-card
            className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start bg-white flex flex-col"
          >
            {/* Rich Micro-UI visual container with soft pastel background */}
            <div
              className={`aspect-square rounded-apple-card bg-gradient-to-br ${product.bgGradient} p-3.5 flex flex-col justify-between mb-5 relative overflow-hidden shadow-xs border border-white/60`}
            >
              {/* Micro-UI Component */}
              <div className="w-full h-full relative">
                <product.Visual />
              </div>

              {/* Pagination dots (3-dot indicator) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20 pointer-events-none">
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    className={`w-1 h-1 rounded-full ${
                      d === 0 ? 'bg-apple-text' : 'bg-apple-text/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* "New" badge */}
            {product.badge && (
              <p className="text-[13px] text-[#BF4800] font-normal mb-1 text-center">
                {product.badge}
              </p>
            )}

            {/* Title */}
            <h3 className="text-[21px] font-semibold text-apple-text text-center mb-2">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] text-apple-text leading-[1.4] text-center px-2">
              {product.description}
            </p>
          </div>
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

export default ExploreLineup;
