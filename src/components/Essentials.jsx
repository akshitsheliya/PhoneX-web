import { AppleLink } from './ui/Button';
import { Mic, Sparkles, Calendar, MapPin } from 'lucide-react';

export function Essentials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-apple-headline text-apple-text tracking-tight font-semibold">
            PhoneX essentials.
          </h2>
          <AppleLink href="/features">All features</AppleLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: PhoneX Voice */}
          <div className="bg-apple-gray rounded-apple-card p-10 flex flex-col items-center text-center aspect-square md:aspect-auto md:min-h-[480px] shadow-xs">
            <h3 className="text-[28px] font-semibold text-apple-text mb-3 tracking-tight">
              PhoneX Voice
            </h3>
            <p className="text-[15px] text-apple-text-2 leading-[1.47] max-w-xs mb-4">
              Talk to PhoneX naturally. Set reminders, ask questions, or just think out loud — it listens and remembers.
            </p>
            <AppleLink href="/features">Try it</AppleLink>

            {/* Visual at bottom: Voice waveform mockup */}
            <div className="mt-auto pt-8 w-full flex justify-center">
              <div className="w-full max-w-[280px] h-48 bg-white border border-apple-border/70 rounded-apple-card p-5 flex flex-col items-center justify-between shadow-xs">
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 text-apple-blue flex items-center justify-center">
                  <Mic size={18} />
                </div>
                <div className="flex items-center gap-1 h-8">
                  {[12, 24, 32, 18, 36, 26, 14, 30, 22, 16, 28, 20].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-apple-blue rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <p className="text-[11px] font-medium text-apple-text italic">
                  "Remind Mark about Friday's design review"
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: PhoneX Memory */}
          <div className="bg-apple-gray rounded-apple-card p-10 flex flex-col items-center text-center aspect-square md:aspect-auto md:min-h-[480px] shadow-xs">
            <h3 className="text-[28px] font-semibold text-apple-text mb-3 tracking-tight">
              PhoneX Memory
            </h3>
            <p className="text-[15px] text-apple-text-2 leading-[1.47] max-w-xs mb-4">
              Save moments, people, places and small details. PhoneX brings them back when they matter most.
            </p>
            <AppleLink href="/features">Explore</AppleLink>

            {/* Visual at bottom: Memory card mockup */}
            <div className="mt-auto pt-8 w-full flex justify-center">
              <div className="w-full max-w-[280px] h-48 bg-white border border-apple-border/70 rounded-apple-card p-5 flex flex-col justify-between text-left shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-apple-text-2 mb-2">
                    <span className="flex items-center gap-1 font-semibold text-apple-text">
                      <Sparkles size={11} className="text-apple-blue" />
                      Café Luna
                    </span>
                    <span>Oct 14</span>
                  </div>
                  <h4 className="text-[13px] font-semibold text-apple-text leading-tight mb-1">
                    Lunch with Sarah Chen
                  </h4>
                  <p className="text-[11px] text-apple-text-2 leading-snug">
                    Recommended checking out new interface prototypes and reading "Shape Up".
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-apple-border/50 text-[10px] text-apple-text-2">
                  <MapPin size={11} />
                  <span>Pinned to Memories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Essentials;

