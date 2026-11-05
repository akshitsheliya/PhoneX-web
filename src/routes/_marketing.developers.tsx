import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Cpu,
  Boxes,
  Key,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Webhook,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_marketing/developers")({
  head: () => ({
    meta: [
      { title: "Developers — Build with PhoneX" },
      {
        name: "description",
        content:
          "PhoneX Developer Platform: Integrate on-device AI memory, voice agents, and private APIs into your applications.",
      },
      { property: "og:title", content: "Developers — Build with PhoneX" },
      {
        property: "og:description",
        content:
          "Build on the privacy-first personal AI companion. SDKs, APIs, and tools for engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/developers" }],
  }),
  component: DevelopersPage,
});

function DevelopersPage() {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install @phonex/sdk";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const devFeatures = [
    {
      icon: Terminal,
      title: "PhoneX SDK & CLI",
      tag: "TypeScript & Python",
      desc: "Lightweight clients to interface with PhoneX intelligence, memory recall, and contextual prompts on-device or via secure relay.",
    },
    {
      icon: Layers,
      title: "Memory Vault API",
      tag: "Zero-Knowledge Query",
      desc: "Query user permissioned contextual memory without compromising their raw cryptographic keys or private identity.",
    },
    {
      icon: Webhook,
      title: "Custom Actions & Tools",
      tag: "Action Hooks",
      desc: "Extend PhoneX companion capabilities by connecting your webhooks, booking endpoints, and third-party productivity workflows.",
    },
    {
      icon: Shield,
      title: "Encrypted Sandboxing",
      tag: "Privacy By Default",
      desc: "All plugin extensions execute within strict permission sandboxes. Zero telemetry or data exfiltration permitted.",
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFC] text-apple-text overflow-hidden selection:bg-apple-blue selection:text-white">
      {/* HERO SECTION */}




      {/* PLATFORM FEATURES */}
      <section className="py-16 md:py-14 bg-[#FAFAFC]">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-apple-text leading-tight mb-3">
              Developer Capabilities
            </h2>
            <p className="text-[16px] text-apple-text-2">
              Everything required to extend and build intelligent companions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-black/[0.05] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-apple-gray flex items-center justify-center text-apple-text">
                      <feat.icon size={22} strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-apple-gray text-apple-text-2">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-[19px] font-semibold text-apple-text mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-[14px] text-apple-text-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER ACCESS / DOCS CTA */}
      <section className="py-20 md:py-28 bg-white border-t border-black/[0.05] text-center">
        <div className="max-w-[1024px] mx-auto px-5 md:px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-apple-text tracking-tight mb-4 leading-tight">
              Ready to start building?
            </h2>
            <p className="text-[16px] text-apple-text-2 leading-relaxed mb-8">
              Join our developer early access program and begin testing SDK integrations in your applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center bg-apple-text text-white hover:bg-black text-[15px] font-medium px-7 py-3 rounded-apple-btn transition-colors shadow-xs"
              >
                Request API Key
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center text-apple-blue hover:underline text-[15px] font-medium px-4 py-3"
              >
                View Documentation <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DevelopersPage;

