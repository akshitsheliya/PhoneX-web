import { useState, useRef, useEffect, useCallback } from 'react';
import { Plus, X, Sparkles, Shield, Cpu, MessageSquare, Mail, Plane, Users, Brain, Heart, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  KnowledgeVaultVisual,
  PhoneXActionsVisual,
  FamilyAIVisual,
  AICloneVisual,
  BusinessBrainVisual,
  LifeInsightsVisual,
  EverywhereVisual,
  DigitalLegacyVisual,
} from './visuals/FeatureVisuals';

// Export all 8 visual sub-components directly from GetToKnow as well
export {
  KnowledgeVaultVisual,
  PhoneXActionsVisual,
  FamilyAIVisual,
  AICloneVisual,
  BusinessBrainVisual,
  LifeInsightsVisual,
  EverywhereVisual,
  DigitalLegacyVisual,
};

export function GetToKnow() {
  const [activeModalCard, setActiveModalCard] = useState(null);
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

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalCard]);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalCard(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cards = [
    {
      id: 'vault',
      eyebrow: 'Knowledge Vault',
      title: 'Remember\nwhat matters.',
      bg: 'bg-gradient-to-b from-[#2A080C] to-[#120305]',
      textColor: 'text-white',
      VisualComponent: KnowledgeVaultVisual,
      modal: {
        eyebrow: 'Knowledge Vault',
        headline: 'Remember what matters.',
        intro: 'PhoneX safely stores your documents, photos, PDFs, and notes — creating an encrypted semantic index that is always instantly searchable with plain everyday speech.',
        sec1Title: 'Everything in one place.',
        sec1Body: 'Connect files from your local storage, drive, and everyday captures. PhoneX tags and connects topics so you never have to remember where you saved a recipe, receipt, or design brief.',
        sec2Title: 'Ask anything, anytime.',
        sec2Body: 'Just speak or type naturally. PhoneX understands semantic context, dates, and people, pulling up the exact paragraph, image snippet, or invoice right when you ask.',
        features: [
          { icon: Sparkles, label: 'Semantic Search', text: 'Locate files by concept, not filenames.' },
          { icon: Shield, label: 'Zero-Knowledge Vault', text: 'Encrypted on-device with hardware keys.' },
          { icon: Brain, label: 'Auto-Classification', text: 'Documents, photos & PDFs organized automatically.' },
        ],
      },
    },
    {
      id: 'actions',
      eyebrow: 'PhoneX Actions',
      title: 'Acts on your\nbehalf.',
      bg: 'bg-gradient-to-b from-[#0A0E2A] to-[#040614]',
      textColor: 'text-white',
      VisualComponent: PhoneXActionsVisual,
      modal: {
        eyebrow: 'PhoneX Actions',
        headline: 'Acts on your behalf.',
        intro: 'An autonomous on-device agent designed to handle messages, draft replies in your authentic voice, coordinate flights, and schedule meetings while leaving you in full command.',
        sec1Title: 'Communication with your cadence.',
        sec1Body: 'PhoneX studies how you interact with friends, team members, and clients. It can draft email replies, triage messaging queues, and highlight urgent inquiries.',
        sec2Title: 'Bookings and reservations, streamlined.',
        sec2Body: 'Say "Book a flight to London for the conference on Tuesday" and PhoneX analyzes options, checks your calendar for conflicts, and prepares confirmation in one tap.',
        features: [
          { icon: MessageSquare, label: 'Smart Reply', text: 'Pre-drafts conversations aligned to your tone.' },
          { icon: Mail, label: 'Email Concierge', text: 'Categorizes inboxes and drafts executive summaries.' },
          { icon: Plane, label: 'Travel Coordinator', text: 'Scans itinerary updates and manages boarding passes.' },
        ],
      },
    },
    {
      id: 'family',
      eyebrow: 'Family AI',
      title: 'Shared memory\nfor loved ones.',
      bg: 'bg-gradient-to-b from-[#1E0A24] to-[#0B030E]',
      textColor: 'text-white',
      VisualComponent: FamilyAIVisual,
      modal: {
        eyebrow: 'Family AI',
        headline: 'Shared memory for loved ones.',
        intro: 'A private circle of shared memories, lineage timelines, and generational milestones that helps families stay intimately connected across distances and years.',
        sec1Title: 'Never miss an anniversary or milestone.',
        sec1Body: 'PhoneX keeps track of birthdays, family traditions, school schedules, and meaningful reunions with intelligent suggestions for gifts and timely messages.',
        sec2Title: 'Preserving stories across generations.',
        sec2Body: 'Record grandparent voice stories, family recipes, and childhood photos in a shared vault that preserves heritage for generations to come.',
        features: [
          { icon: Users, label: 'Family Tree', text: 'Interactive relational tree with linked memories.' },
          { icon: Heart, label: 'Milestone Radar', text: 'Proactive reminders for anniversaries and birthdays.' },
          { icon: Sparkles, label: 'Heritage Vault', text: 'Encrypted heirloom archive for voice stories and letters.' },
        ],
      },
    },
    {
      id: 'clone',
      eyebrow: 'AI Clone',
      title: 'Shaped around\nyour rhythm.',
      bg: 'bg-gradient-to-b from-[#120826] to-[#05020D]',
      textColor: 'text-white',
      VisualComponent: AICloneVisual,
      modal: {
        eyebrow: 'My AI Clone',
        headline: 'Shaped around your rhythm.',
        intro: 'An evolving digital reflection that learns how you think, prioritize, write, and converse — giving you an on-demand thinking partner that feels uniquely yours.',
        sec1Title: 'Trained on your real priorities.',
        sec1Body: 'Rather than generic chatbot answers, your AI Clone understands your principles, decision patterns, and work cadence, offering advice attuned to your situation.',
        sec2Title: 'Voice cloning and authentic tone.',
        sec2Body: 'Synthesizes your personal speech patterns with emotional clarity, ready to read back notes, draft memos, or think out loud with you during long commutes.',
        features: [
          { icon: Brain, label: 'Adaptive Persona', text: 'Continuously fine-tunes to your habits.' },
          { icon: Sparkles, label: 'Neural Voice', text: 'Studio-quality personalized voice synthesis.' },
          { icon: Shield, label: 'Total Control', text: 'Inspect and purge memory parameters anytime.' },
        ],
      },
    },
    {
      id: 'business',
      eyebrow: 'Business Brain',
      title: 'Your company\nintelligence.',
      bg: 'bg-gradient-to-b from-[#1C2026] to-[#0A0C0E]',
      textColor: 'text-white',
      VisualComponent: BusinessBrainVisual,
      modal: {
        eyebrow: 'Business Brain',
        headline: 'Your company intelligence.',
        intro: 'A centralized institutional memory bank for your startup or enterprise — indexing meeting recordings, internal documentation, SOPs, and historical decisions.',
        sec1Title: 'Stop repeating decisions.',
        sec1Body: 'Ask "Why did we switch suppliers last November?" and PhoneX surfaces meeting transcripts, email chains, and contract clauses in seconds.',
        sec2Title: 'Autonomous onboarding & knowledge retrieval.',
        sec2Body: 'Empower new team members with instant answers derived from vetted company documentation without pulling senior engineers away from their desks.',
        features: [
          { icon: Brain, label: 'Decision Archival', text: 'Tracks the exact context behind key pivots.' },
          { icon: MessageSquare, label: 'Meeting Synthesis', text: 'Converts hour-long calls into actionable task trees.' },
          { icon: Shield, label: 'Role-Based Access', text: 'Strict on-device permissions and clearance levels.' },
        ],
      },
    },
    {
      id: 'insights',
      eyebrow: 'Life Insights',
      title: 'Notice patterns\nin your week.',
      bg: 'bg-gradient-to-b from-[#06201B] to-[#020D0A]',
      textColor: 'text-white',
      VisualComponent: LifeInsightsVisual,
      modal: {
        eyebrow: 'Life Insights',
        headline: 'Notice patterns in your week.',
        intro: 'Holistic weekly analytics that correlate your sleep patterns, deep focus blocks, screen fatigue, and habit routines to uncover what actually makes you productive.',
        sec1Title: 'Actionable wellness metrics.',
        sec1Body: 'Discover how late meetings impact your morning focus, or how evening walks improve your deep sleep metrics without needing dozens of fragmented health apps.',
        sec2Title: 'Calm habit reinforcement.',
        sec2Body: 'Visual streak rings and thoughtful nudges keep you accountable to your daily rituals with gentle guidance rather than annoying push notifications.',
        features: [
          { icon: Activity, label: 'Focus Correlation', text: 'Tracks deep work versus fragmentation.' },
          { icon: Sparkles, label: 'Sleep Rhythm', text: 'Identifies factors driving restorative rest.' },
          { icon: Brain, label: 'Habit Consistency', text: 'Gentle nudges to maintain healthy routines.' },
        ],
      },
    },
    {
      id: 'everywhere',
      eyebrow: 'Everywhere',
      title: 'Across all\nyour devices.',
      bg: 'bg-gradient-to-b from-[#222226] to-[#0D0D0E]',
      textColor: 'text-white',
      VisualComponent: EverywhereVisual,
      modal: {
        eyebrow: 'PhoneX Everywhere',
        headline: 'Across all your devices.',
        intro: 'Seamless encrypted state synchronization that follows you instantly across iPhone, iPad, Mac, and Apple Watch with zero friction and zero cloud lag.',
        sec1Title: 'Start on your wrist, finish on desktop.',
        sec1Body: 'Whisper a reminder into your watch while running, review it on your tablet over lunch, and organize it in a deep planning session on your Mac.',
        sec2Title: 'Instant local mesh synchronization.',
        sec2Body: 'Devices communicate directly over fast encrypted peer protocols, allowing offline updates that sync instantaneously the moment devices are in proximity.',
        features: [
          { icon: Cpu, label: 'Hardware Mesh', text: 'Direct peer-to-peer encrypted sync protocol.' },
          { icon: Sparkles, label: 'Zero Cloud Lag', text: 'Near-instantaneous state replication.' },
          { icon: Shield, label: 'Offline Resilient', text: 'Full companion capabilities without internet.' },
        ],
      },
    },
    {
      id: 'legacy',
      eyebrow: 'Digital Legacy',
      title: 'Your stories,\npreserved forever.',
      bg: 'bg-gradient-to-b from-[#24170A] to-[#0E0B04]',
      textColor: 'text-white',
      VisualComponent: DigitalLegacyVisual,
      modal: {
        eyebrow: 'Digital Legacy',
        headline: 'Your stories, preserved forever.',
        intro: 'A timeless biographical archive engineered to record your voice, milestones, life lessons, and values so your future family can hear and learn from you forever.',
        sec1Title: 'More than photos — your lived wisdom.',
        sec1Body: 'PhoneX prompts you with reflective weekly questions, documenting childhood memories, career turning points, and hard-earned values in your authentic voice.',
        sec2Title: 'Future interactive conversations.',
        sec2Body: 'Loved ones decades from now can ask questions and hear answers spoken in your voice, sharing your humor and philosophy across generations.',
        features: [
          { icon: Heart, label: 'Voice Preservation', text: 'Studio voice archival that never degrades.' },
          { icon: Sparkles, label: 'Milestone Journal', text: 'Chronological timeline of career and personal pivots.' },
          { icon: Shield, label: 'Perpetual Vault', text: 'Time-capsule release triggers for designated kin.' },
        ],
      },
    },
  ];

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-white relative">
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 mb-8 md:mb-12 flex items-end justify-between">
        <h2 className="text-apple-headline text-apple-text tracking-tight font-semibold">
          Get to know PhoneX.
        </h2>
      </div>

      {/* Horizontal edge-to-edge scrollable track (taller card aspect-ratio: aspect-[3/5.2] min-h-[480px] md:min-h-[560px]) */}
      <div
        ref={sliderRef}
        className="w-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 md:px-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:px-[calc(max(3rem,(100vw-1280px)/2+5rem))] scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-[calc(max(2.5rem,(100vw-1280px)/2+4rem))] lg:scroll-pl-[calc(max(3rem,(100vw-1280px)/2+5rem))] gap-4 md:gap-6 pt-4 pb-6"
      >
        {cards.map((card) => {
          const Visual = card.VisualComponent;
          return (
            <div
              key={card.id}
              data-slider-card
              onClick={() => setActiveModalCard(card)}
              className={`relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/5.2] min-h-[480px] md:min-h-[560px] shrink-0 snap-start ${card.bg} rounded-apple-card p-6 md:p-8 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-md border border-white/10 transition-all duration-500 ease-out hover:scale-[1.015] hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Top: Eyebrow + Title */}
              <div className="relative z-10">
                <p className={`text-[13px] md:text-[14px] font-normal ${card.textColor} opacity-75 mb-2 tracking-normal`}>
                  {card.eyebrow}
                </p>
                <h3
                  className={`text-[26px] md:text-[30px] font-semibold ${card.textColor} leading-[1.1] whitespace-pre-line tracking-tight`}
                >
                  {card.title}
                </h3>
              </div>

              {/* Bottom: Native Micro-UI Component (pinned to bottom with vertical breathing room) */}
              <div className="relative z-10 w-full mt-auto pt-8 flex items-end justify-center">
                <div className="w-full h-[220px] sm:h-[240px] md:h-[250px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col justify-between overflow-hidden">
                  <Visual />
                </div>
              </div>

              {/* Plus icon (Apple signature) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCard(card);
                }}
                className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer group-hover:scale-110 group-hover:bg-white z-20"
                aria-label={`Open details for ${card.eyebrow}`}
              >
                <Plus size={16} className="text-apple-text" strokeWidth={2.5} />
              </button>
            </div>
          );
        })}
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

      {/* ============================================================== */}
      {/* APPLE-STYLE POPUP MODAL (Scrolling Backdrop with Dynamic Size) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {activeModalCard && (
          <div
            onClick={() => setActiveModalCard(null)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xl overflow-y-auto px-4 py-12 md:py-16 flex justify-center items-start cursor-pointer"
          >
            {/* Modal Container: dynamic height based on content, click stopped inside */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] max-w-[980px] bg-white rounded-[28px] p-6 sm:p-10 md:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.35)] cursor-default my-auto"
            >
              {/* Sticky/Fixed Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalCard(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#E8E8ED] hover:bg-[#D8D8DD] text-black flex items-center justify-center shadow-xs transition-transform active:scale-95 cursor-pointer z-30"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              {/* Eyebrow Label */}
              <p className="text-[12px] font-mono uppercase tracking-widest text-apple-text-2 mb-3">
                {activeModalCard.modal.eyebrow}
              </p>

              {/* Hero Headline & Summary */}
              <div className="max-w-2xl mb-8">
                <h2 className="text-apple-headline text-apple-text tracking-tight font-semibold">
                  {activeModalCard.modal.headline}
                </h2>
                <p className="mt-4 text-[17px] text-apple-text-2 leading-[1.5]">
                  {activeModalCard.modal.intro}
                </p>
              </div>

              {/* Larger Centered Micro-UI Visual Block in soft gray card */}
              <div className="bg-apple-gray rounded-apple-card p-6 sm:p-10 flex flex-col items-center justify-center border border-apple-border/40 mb-10">
                <div className={`w-full max-w-[400px] h-[280px] ${activeModalCard.bg} rounded-2xl p-5 shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden`}>
                  <activeModalCard.VisualComponent />
                </div>
              </div>

              {/* Section 1 */}
              <div className="max-w-3xl space-y-2 mb-8">
                <h3 className="text-[22px] font-semibold text-apple-text tracking-tight">
                  {activeModalCard.modal.sec1Title}
                </h3>
                <p className="text-[16px] text-apple-text-2 leading-relaxed">
                  {activeModalCard.modal.sec1Body}
                </p>
              </div>

              {/* Section 2 */}
              <div className="max-w-3xl space-y-2 mb-8">
                <h3 className="text-[22px] font-semibold text-apple-text tracking-tight">
                  {activeModalCard.modal.sec2Title}
                </h3>
                <p className="text-[16px] text-apple-text-2 leading-relaxed">
                  {activeModalCard.modal.sec2Body}
                </p>
              </div>

              {/* Section 3: Mini Feature Grid */}
              {activeModalCard.modal.features && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-apple-border/50">
                  {activeModalCard.modal.features.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-apple-gray rounded-2xl p-5 border border-apple-border/40 space-y-2"
                    >
                      <div className="w-8 h-8 rounded-xl bg-apple-blue/10 text-apple-blue flex items-center justify-center">
                        <feat.icon size={16} />
                      </div>
                      <h4 className="text-[14px] font-semibold text-apple-text tracking-tight">
                        {feat.label}
                      </h4>
                      <p className="text-[12.5px] text-apple-text-2 leading-snug">
                        {feat.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GetToKnow;
