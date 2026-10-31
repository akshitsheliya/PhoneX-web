import { Plus, Lock, Shield, Cpu, Sparkles, MessageCircle, Calendar } from 'lucide-react';

export function GetToKnow() {
  const cards = [
    {
      eyebrow: 'Design',
      title: 'Beautiful.\nDurable.\nDifferent by design.',
      bg: 'bg-apple-gray',
      textColor: 'text-apple-text',
      visual: 'phone-light',
    },
    {
      eyebrow: 'Smart Memory',
      title: 'Remember\nwhat matters.',
      bg: 'bg-[#3A1F1F]',
      textColor: 'text-white',
      visual: 'memory-dark',
    },
    {
      eyebrow: 'AI Companion',
      title: 'Fast that\nlasts.',
      bg: 'bg-[#000000]',
      textColor: 'text-white',
      visual: 'chip',
    },
    {
      eyebrow: 'PhoneX AI',
      title: 'Helpful in all\nthe right places.',
      bg: 'bg-[#111113]',
      textColor: 'text-white',
      visual: 'ai-notification',
    },
    {
      eyebrow: 'Privacy',
      title: 'Designed to\nrespect you.',
      bg: 'bg-apple-gray',
      textColor: 'text-apple-text',
      visual: 'privacy',
    },
  ];

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-white">
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 mb-8 md:mb-12 flex items-end justify-between">
        <h2 className="text-apple-headline text-apple-text tracking-tight font-semibold">
          Get to know PhoneX.
        </h2>
      </div>

      {/* Horizontal edge-to-edge scrollable track */}
      <div className="w-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 md:px-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:px-[calc(max(3rem,(100vw-1280px)/2+5rem))] scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:scroll-pl-[calc(max(3rem,(100vw-1280px)/2+5rem))] gap-4 md:gap-6 pb-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4.6] shrink-0 snap-start ${card.bg} rounded-apple-card p-6 md:p-8 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-sm`}
          >
            {/* Top: Eyebrow + Title */}
            <div className="relative z-10">
              <p className={`text-[14px] font-normal ${card.textColor} opacity-80 mb-2`}>
                {card.eyebrow}
              </p>
              <h3
                className={`text-[26px] md:text-[28px] font-semibold ${card.textColor} leading-[1.1] whitespace-pre-line tracking-tight`}
              >
                {card.title}
              </h3>
            </div>

            {/* Bottom: Custom UI Visual Mockup */}
            <div className="relative z-10 w-full mt-auto pt-6 flex items-end justify-center">
              {card.visual === 'phone-light' && (
                <div className="w-[180px] bg-white rounded-t-3xl border border-apple-border/80 p-3 pb-6 shadow-md flex flex-col items-center">
                  <div className="w-12 h-3 bg-black rounded-full mb-3" />
                  <div className="grid grid-cols-4 gap-2 w-full">
                    <div className="w-8 h-8 rounded-xl bg-apple-gray flex items-center justify-center text-apple-blue shadow-xs">
                      <MessageCircle size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-apple-gray flex items-center justify-center text-apple-text shadow-xs">
                      <Calendar size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-apple-gray flex items-center justify-center text-emerald-600 shadow-xs">
                      <Sparkles size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-apple-gray flex items-center justify-center text-rose-500 shadow-xs">
                      <Lock size={16} />
                    </div>
                  </div>
                </div>
              )}

              {card.visual === 'memory-dark' && (
                <div className="w-full max-w-[210px] bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg text-left">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] text-white/60">Oct 14 · Café Luna</span>
                  </div>
                  <p className="text-[12px] font-medium text-white leading-tight">
                    "Sarah loved the prototype notes."
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 text-[9px] bg-white/15 px-2 py-0.5 rounded-full text-white/90">
                    <Sparkles size={10} /> Auto-remembered
                  </div>
                </div>
              )}

              {card.visual === 'chip' && (
                <div className="w-[160px] h-[110px] rounded-2xl bg-gradient-to-b from-[#222] to-[#0A0A0A] border border-white/25 p-3 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_70%)]" />
                  <div className="flex items-center justify-between text-white/80">
                    <Cpu size={16} className="text-apple-blue" />
                    <span className="text-[9px] font-mono tracking-wider text-white/60">3nm</span>
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold tracking-tight text-white leading-none">
                      N1 Pro
                    </p>
                    <p className="text-[9px] text-white/50 tracking-wider uppercase mt-1">
                      Neural Engine
                    </p>
                  </div>
                </div>
              )}

              {card.visual === 'ai-notification' && (
                <div className="w-full max-w-[220px] bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-2.5 shadow-xl text-left">
                  <div className="flex items-center justify-between text-[10px] text-white/70 mb-1">
                    <span className="font-semibold text-white">PhoneX</span>
                    <span>now</span>
                  </div>
                  <p className="text-[11px] text-white font-medium leading-tight">
                    Meeting in 25 mins
                  </p>
                  <p className="text-[9.5px] text-white/70 leading-snug mt-0.5">
                    Traffic is clear. Leave by 2:15 PM.
                  </p>
                </div>
              )}

              {card.visual === 'privacy' && (
                <div className="w-full max-w-[190px] bg-white rounded-2xl border border-apple-border p-3 shadow-sm flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-full bg-apple-gray flex items-center justify-center text-apple-text shrink-0">
                    <Shield size={16} className="text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-apple-text truncate">
                      On-Device Encryption
                    </p>
                    <p className="text-[9px] text-apple-text-2 truncate">
                      Never leaves your phone
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Plus icon (Apple signature) */}
            <button
              type="button"
              className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-all cursor-pointer group-hover:scale-105"
              aria-label={`Learn more about ${card.eyebrow}`}
            >
              <Plus size={14} className="text-apple-text" strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GetToKnow;

