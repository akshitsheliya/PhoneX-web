import { Brain, CheckCircle, Mic, Activity } from 'lucide-react';
import { AppleBluePill, AppleLink } from './ui/Button';

export function ExploreLineup() {
  const products = [
    {
      badge: null,
      title: 'Chat',
      description: 'Talk to PhoneX naturally. Ask questions, think out loud, get answers.',
      bgGradient: 'from-[#E8F0FF] to-[#D4E4FF]',
      icon: Mic,
      preview: 'chat',
    },
    {
      badge: 'New',
      title: 'Memory',
      description: 'Remembers people, places, and moments that matter to you.',
      bgGradient: 'from-[#FFF0E8] to-[#FFE0D4]',
      icon: Brain,
      preview: 'memory',
    },
    {
      badge: null,
      title: 'Tasks',
      description: 'Smart task management that adapts to your real schedule.',
      bgGradient: 'from-[#E8FFE8] to-[#D4FFD4]',
      icon: CheckCircle,
      preview: 'tasks',
    },
    {
      badge: null,
      title: 'Insights',
      description: 'Patterns from your week, shown in a way easy to act on.',
      bgGradient: 'from-[#F0E8FF] to-[#E0D4FF]',
      icon: Activity,
      preview: 'insights',
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
      <div className="w-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 md:px-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:px-[calc(max(3rem,(100vw-1280px)/2+5rem))] scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:scroll-pl-[calc(max(3rem,(100vw-1280px)/2+5rem))] gap-4 md:gap-6 pb-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start bg-white flex flex-col"
          >
            {/* Image area with gradient */}
            <div
              className={`aspect-square rounded-apple-card bg-gradient-to-br ${product.bgGradient} flex items-center justify-center mb-5 relative overflow-hidden`}
            >
              <product.icon size={64} className="text-apple-text/80" strokeWidth={1.5} />
              {/* Pagination dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
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
            <p className="text-[14px] text-apple-text leading-[1.4] text-center mb-4 px-2">
              {product.description}
            </p>

            {/* Blue CTA pills */}
            <div className="flex items-center justify-center gap-3 mt-auto">
              <a href="/features">
                <AppleBluePill>Learn more</AppleBluePill>
              </a>
              <AppleLink href="/get-started">Try it</AppleLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreLineup;

