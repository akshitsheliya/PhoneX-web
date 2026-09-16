import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Building2, FileText, Users, Lightbulb, ListChecks, Sparkles } from "lucide-react";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business Brain — PhoneX" },
      { name: "description", content: "Your company's knowledge, decisions and SOPs — instantly searchable." },
    ],
  }),
  component: Business,
});

const cards = [
  { label: "Company knowledge", sub: "Wiki & briefs", Icon: Building2, grad: "bg-gradient-sky" },
  { label: "Documents", sub: "420 indexed", Icon: FileText, grad: "bg-gradient-lavender" },
  { label: "Meetings", sub: "58 transcripts", Icon: Users, grad: "bg-gradient-peach" },
  { label: "Decisions", sub: "Decision log", Icon: Lightbulb, grad: "bg-gradient-rose" },
  { label: "SOPs", sub: "32 playbooks", Icon: ListChecks, grad: "bg-gradient-sky" },
] as const;

const questions = [
  "Why was this decision made?",
  "How does the onboarding system work?",
  "Summarize last week's product meeting",
];

function Business() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Business</p>
          <div className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[28px] font-bold tracking-tight">Business Brain</h1>
          <p className="text-sm text-muted-foreground mt-1">Your company's second mind</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {cards.map((c) => (
            <div key={c.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className={`w-10 h-10 rounded-2xl ${c.grad} grid place-items-center text-white shadow-soft`}>
                <c.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{c.label}</p>
              <p className="text-[11px] text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> Ask your business
          </div>
          <ul className="relative mt-3 space-y-2">
            {questions.map((q) => (
              <li key={q} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">"{q}"</li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
