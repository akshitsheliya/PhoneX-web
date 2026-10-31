import { AppleLink } from './ui/Button';
import { Lock } from 'lucide-react';

export function Privacy() {
  return (
    <section id="privacy" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-5 md:px-6">
        <div className="bg-apple-gray rounded-apple-card p-10 md:p-16 text-center shadow-xs">
          <Lock size={32} className="text-apple-text mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-apple-headline text-apple-text mb-4 max-w-xl mx-auto leading-[1.1] tracking-tight font-semibold">
            Privacy. That's PhoneX.
          </h2>
          <p className="text-[17px] text-apple-text-2 leading-[1.47] max-w-xl mx-auto mb-6">
            Your memories, conversations, and personal information are protected. PhoneX is designed with privacy as a first principle.
          </p>
          <AppleLink href="/privacy">Read our Privacy Policy</AppleLink>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
