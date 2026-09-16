import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, FileText, Image as ImageIcon, Film, FileType, StickyNote, Sparkles } from "lucide-react";

export const Route = createFileRoute("/vault")({
  head: () => ({
    meta: [
      { title: "Knowledge Vault — PhoneX" },
      { name: "description", content: "Store every part of your personal knowledge with PhoneX." },
    ],
  }),
  component: Vault,
});

const cards = [
  { label: "Documents", count: "124 files", Icon: FileText, grad: "bg-gradient-sky", tone: "bg-sky-soft" },
  { label: "Photos", count: "3,210", Icon: ImageIcon, grad: "bg-gradient-rose", tone: "bg-rose-soft" },
  { label: "Videos", count: "82", Icon: Film, grad: "bg-gradient-peach", tone: "bg-peach-soft" },
  { label: "PDFs", count: "47", Icon: FileType, grad: "bg-gradient-lavender", tone: "bg-lavender-soft" },
  { label: "Notes", count: "215", Icon: StickyNote, grad: "bg-gradient-sky", tone: "bg-mint-soft" },
] as const;

const examples = [
  "What was my salary in 2022?",
  "Show my Goa trip photos",
  "What did I tell you about my startup?",
];

function Vault() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Vault</p>
          <div className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[28px] font-bold tracking-tight">Your Knowledge<br/>Vault</h1>
          <p className="text-sm text-muted-foreground mt-1">Everything PhoneX knows about your life</p>
        </div>

        {/* Ask PhoneX */}
        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-card border border-border/60 shadow-soft px-4 py-3">
          <input
            placeholder="Ask PhoneX anything…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Categories */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {cards.map((c) => (
            <div key={c.label} className={`rounded-3xl p-4 ${c.tone}`}>
              <div className={`w-10 h-10 rounded-2xl ${c.grad} grid place-items-center text-white shadow-soft`}>
                <c.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{c.label}</p>
              <p className="text-[11px] text-foreground/55">{c.count}</p>
            </div>
          ))}
        </div>

        {/* AI recall examples */}
        <div className="mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> Try asking
          </div>
          <ul className="relative mt-3 space-y-2">
            {examples.map((e) => (
              <li key={e} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">
                "{e}"
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
