import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  HardDrive,
  EyeOff,
  KeyRound,
  FileKey,
  Database,
  Smartphone,
  Cpu,
  UserCheck,
  CheckCircle2,
  Trash2,
  Radio,
  FileCheck,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/_marketing/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Data Protection — PhoneX" },
      {
        name: "description",
        content:
          "How PhoneX protects your personal data, stores encrypted sensitive information on your device, and guarantees your data is never sold or shared with outside parties.",
      },
      { property: "og:title", content: "Privacy & Data Protection — PhoneX" },
      {
        property: "og:description",
        content:
          "Speak confidently. On-device encryption, hardware-isolated memory vaults, and zero outside sharing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const coreGuarantees = [
    {
      icon: HardDrive,
      badge: "On-Device First",
      title: "Encrypted & Stored on Your Device",
      description:
        "Your private thoughts, voice chats, journal entries, and memory vault reside in dedicated, sandboxed storage right on your device hardware.",
      points: [
        "Hardware-backed AES-256 local database encryption",
        "Biometric unlock (Face ID, Touch ID, Device PIN)",
        "Keys generated and stored in your device Secure Enclave",
      ],
    },
    {
      icon: EyeOff,
      badge: "Zero Outside Sharing",
      title: "Never Sold, Rented, or Shared",
      description:
        "We have zero ad-tech integrations, no data broker partnerships, and never trade your personal life context to monetize PhoneX.",
      points: [
        "No profiling or behavioural ad networks",
        "Your conversations are never fed to public foundation models",
        "Strict zero-knowledge architecture",
      ],
    },
    {
      icon: UserCheck,
      badge: "Speak Confidently",
      title: "Talk Freely About Your Real Life",
      description:
        "Whether you are brainstorming private business decisions, venting after a hard day, or discussing family finances, you are always in a closed room.",
      points: [
        "Ephemeral audio processing options",
        "Granular per-topic and per-memory privacy toggles",
        "1-click complete data export and permanent wipe",
      ],
    },
  ];

  const architecturalLayers = [
    {
      step: "01",
      title: "Input & Voice Capture",
      tag: "Mic & Keyboard Level",
      desc: "Audio is transcribed locally whenever possible. Voice streams are protected in transient memory buffers and destroyed immediately after processing.",
    },
    {
      step: "02",
      title: "Isolated AI Reasoning",
      tag: "Secure Processing Sandbox",
      desc: "When PhoneX processes requests, data is handled in an ephemeral runtime. Queries are anonymized and mathematically stripped of identity tags.",
    },
    {
      step: "03",
      title: "Local Vault Persistence",
      tag: "AES-256 At Rest",
      desc: "Retained memories are encrypted using keys derived from your personal device credentials. PhoneX servers hold no master decryption keys.",
    },
    {
      step: "04",
      title: "Synchronized Encryption",
      tag: "End-to-End Across Devices",
      desc: "Multi-device syncing is end-to-end encrypted. Even during transit through our relay servers, content looks like random noise.",
    },
  ];

  const faqs = [
    {
      q: "Can PhoneX or outside AI vendors read my private conversations?",
      a: "No. PhoneX uses end-to-end and on-device cryptographic encryption. Your memory vaults and spoken prompts are shielded. We do not inspect your chats and cannot hand them over in cleartext because we do not hold your private keys.",
    },
    {
      q: "Is my personal data used to train public AI models?",
      a: "Never. Your personal conversations, memories, family names, schedules, and private notes are strictly off-limits. They are never used to train global or multi-tenant models.",
    },
    {
      q: "What happens if I delete my data or account?",
      a: "You have 100% data sovereignty. In settings, you can delete individual memories, purge specific chat sessions, or initiate a full wipe. A full wipe destroys encryption keys immediately and scrubs all backups within 72 hours.",
    },
    {
      q: "Can I talk about sensitive health or financial topics?",
      a: "Yes. PhoneX was intentionally engineered so people could speak openly about life's most vulnerable moments. The on-device encryption model ensures your sensitive topics remain strictly between you and your phone.",
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFC] text-apple-text overflow-hidden selection:bg-apple-blue selection:text-white">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-apple-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1024px] mx-auto px-5 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-apple-text shadow-xs mb-6 text-[13px] font-medium">
              <ShieldCheck size={16} className="text-[#34C759]" strokeWidth={2.4} />
              <span>Uncompromised Privacy & Data Security</span>
            </div>

            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-apple-text leading-[1.05] tracking-tight mb-6">
              Your life belongs to you.<br />
              <span className="text-apple-text-2">Not advertisers. Not strangers.</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] md:text-[21px] text-apple-text-2 leading-[1.45] max-w-2xl mx-auto mb-10">
              PhoneX is built so you can speak your mind with complete confidence. Everything you share is encrypted, stored on your device, and never exposed to the outside world.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] text-apple-text-2">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-black/[0.06] shadow-2xs">
                <CheckCircle2 size={15} className="text-[#34C759]" />
                <span>On-Device Storage</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-black/[0.06] shadow-2xs">
                <CheckCircle2 size={15} className="text-[#34C759]" />
                <span>AES-256 Encryption</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-black/[0.06] shadow-2xs">
                <CheckCircle2 size={15} className="text-[#34C759]" />
                <span>Zero Outside Sharing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE 3 PILLARS SECTION */}
      <section className="py-12 md:py-20 bg-white border-y border-black/[0.05]">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-apple-text leading-tight mb-3">
              How PhoneX protects your personal world.
            </h2>
            <p className="text-[16px] text-apple-text-2">
              Three architectural safeguards engineered into the foundation of every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreGuarantees.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F5F5F7] rounded-apple-card p-7 md:p-8 flex flex-col justify-between border border-black/[0.04] hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-apple-text shadow-xs border border-black/[0.04]">
                      <item.icon size={22} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/[0.05] text-apple-text-2">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-semibold text-apple-text leading-snug mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-apple-text-2 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-black/[0.06]">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-[13px] text-apple-text flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENCE SECTION (TALK FREELY / SENSITIVE DATA) */}
      <section className="py-16 md:py-24 bg-[#FAFAFC]">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="bg-[#121217] text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background ambient gradient */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-apple-blue/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-3xl">
              <span className="text-[12px] font-mono tracking-wider uppercase text-blue-400 font-semibold mb-3 block">
                Total Confidence
              </span>
              <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.1] tracking-tight mb-6">
                Speak freely about anything.<br />
                Your private life never leaves this room.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/75 leading-relaxed mb-8 max-w-2xl">
                When you share worries about your job, your medical questions, relationship reflections, or confidential numbers — PhoneX treats every word as privileged. We believe an AI companion is only truly useful if you never have to filter what you say.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock size={16} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-white mb-1">Zero Outside Access</h4>
                    <p className="text-[12px] text-white/60 leading-normal">
                      No ad networks, no data brokers, and no hidden telemetry tracking your personal disclosures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Trash2 size={16} className="text-red-300" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-white mb-1">Total Erase Control</h4>
                    <p className="text-[12px] text-white/60 leading-normal">
                      Delete single moments or your entire history with one tap. Deletion is instantaneous and permanent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW ENCRYPTION & DATA FLOW WORKS */}
      <section className="py-16 md:py-24 bg-white border-t border-black/[0.05]">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[12px] font-medium text-apple-blue uppercase tracking-wider mb-2 block">
              Architecture & Security
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-apple-text leading-tight mb-3">
              How your sensitive information is encrypted.
            </h2>
            <p className="text-[16px] text-apple-text-2">
              From the millisecond you speak until memories are stored, protection is continuous and layered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {architecturalLayers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-7 border border-black/[0.04] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[20px] font-mono font-bold text-apple-text-2/40">
                      {layer.step}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-black/[0.04] text-apple-text">
                      {layer.tag}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-apple-text mb-2 tracking-tight">
                    {layer.title}
                  </h3>
                  <p className="text-[14px] text-apple-text-2 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Standards strip */}
          <div className="mt-8 bg-apple-gray rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-black/[0.04]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-apple-blue/10 text-apple-blue flex items-center justify-center shrink-0">
                <FileCheck size={20} />
              </div>
              <div>
                <p className="text-[14px] font-medium text-apple-text">Industry Gold Standards</p>
                <p className="text-[12px] text-apple-text-2">
                  Compliant with strict device security sandboxing, zero-knowledge sync, and transparent user controls.
                </p>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-apple-text bg-white px-3.5 py-1.5 rounded-full border border-black/[0.06] shrink-0">
              SOC2 & ISO 27001 Aligned
            </span>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-16 md:py-24 bg-[#FAFAFC] border-t border-black/[0.05]">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-apple-text leading-tight mb-3">
              Frequently asked questions about privacy.
            </h2>
            <p className="text-[16px] text-apple-text-2">
              Everything you need to know about how your data is handled.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.06] shadow-xs"
              >
                <h3 className="text-[17px] font-semibold text-apple-text mb-2.5 tracking-tight">
                  {faq.q}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-apple-text-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-white border-t border-black/[0.05] text-center">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-apple-text tracking-tight mb-4 leading-tight">
              Ready to experience truly private AI?
            </h2>
            <p className="text-[16px] text-apple-text-2 leading-relaxed mb-8">
              Start your companion today with the peace of mind that your life stays strictly yours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center bg-apple-blue hover:bg-apple-blue-hover text-white text-[15px] font-medium px-7 py-3 rounded-apple-btn transition-colors shadow-xs"
              >
                Get PhoneX Free
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center text-apple-blue hover:underline text-[15px] font-medium px-4 py-3"
              >
                Explore all features <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;
