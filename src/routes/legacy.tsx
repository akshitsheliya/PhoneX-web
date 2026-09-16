import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import {
  ChevronLeft, AudioLines, BookHeart, Image as ImageIcon, Film, Brain, Quote, Infinity as InfinityIcon,
  FileText, GraduationCap, Briefcase, HeartHandshake, Rocket, Trophy, Plane, Users,
  MessageCircle, Lightbulb, Sparkles, Award, Mail, ShieldCheck, UserRound,
} from "lucide-react";

export const Route = createFileRoute("/legacy")({
  head: () => ({
    meta: [
      { title: "Digital Legacy — PhoneX" },
      { name: "description", content: "Your voice, memories and stories — preserved for the people you love." },
    ],
  }),
  component: Legacy,
});

const overview = [
  { label: "Voice Preserved", sub: "4 hours", Icon: AudioLines, grad: "bg-gradient-rose" },
  { label: "Photos", sub: "3,210", Icon: ImageIcon, grad: "bg-gradient-peach" },
  { label: "Videos", sub: "82 clips", Icon: Film, grad: "bg-gradient-sky" },
  { label: "Documents", sub: "124 files", Icon: FileText, grad: "bg-gradient-lavender" },
  { label: "Memories", sub: "1,240 moments", Icon: BookHeart, grad: "bg-gradient-lavender" },
  { label: "Life Stories", sub: "37 recorded", Icon: Quote, grad: "bg-gradient-rose" },
  { label: "Knowledge Captured", sub: "Lifetime indexed", Icon: Brain, grad: "bg-gradient-sky" },
  { label: "Years Recorded", sub: "12 years", Icon: InfinityIcon, grad: "bg-gradient-peach" },
] as const;

const milestones = [
  { year: "2008", Icon: GraduationCap, label: "Education", note: "Graduated from Delhi University" },
  { year: "2012", Icon: Briefcase, label: "Career", note: "First job at a design studio" },
  { year: "2016", Icon: HeartHandshake, label: "Marriage", note: "Married Priya in Jaipur" },
  { year: "2019", Icon: Rocket, label: "Business", note: "Founded Aurora Labs" },
  { year: "2021", Icon: Trophy, label: "Achievement", note: "Design of the Year award" },
  { year: "2023", Icon: Plane, label: "Travel", note: "6-month Europe journey" },
  { year: "2025", Icon: Users, label: "Family", note: "Welcomed a new family member" },
];

const future = [
  { Icon: MessageCircle, label: "Voice Conversations" },
  { Icon: Brain, label: "Memory Recall" },
  { Icon: Lightbulb, label: "Life Lessons" },
  { Icon: Quote, label: "Stories" },
  { Icon: Sparkles, label: "Advice" },
  { Icon: Brain, label: "Knowledge Sharing" },
];

const vault = [
  { label: "Voice Archive", sub: "4h · growing", Icon: AudioLines, grad: "bg-gradient-rose" },
  { label: "Photo Archive", sub: "3,210 photos", Icon: ImageIcon, grad: "bg-gradient-peach" },
  { label: "Video Archive", sub: "82 clips", Icon: Film, grad: "bg-gradient-sky" },
  { label: "Personal Documents", sub: "124 files", Icon: FileText, grad: "bg-gradient-lavender" },
  { label: "Life Journal", sub: "Since 2020", Icon: BookHeart, grad: "bg-gradient-lavender" },
  { label: "Important Letters", sub: "24 letters", Icon: Mail, grad: "bg-gradient-sky" },
  { label: "Achievements", sub: "12 milestones", Icon: Trophy, grad: "bg-gradient-peach" },
  { label: "Certificates", sub: "8 documents", Icon: Award, grad: "bg-gradient-rose" },
];

const status = [
  { label: "Learning Progress", value: 82 },
  { label: "Memory Quality", value: 74 },
  { label: "Voice Clone", value: 61 },
  { label: "Preservation", value: 90 },
];

const access = [
  { Icon: Users, label: "Family Members", sub: "3 people" },
  { Icon: ShieldCheck, label: "Emergency Contact", sub: "1 person" },
  { Icon: UserRound, label: "Private Only", sub: "You" },
  { Icon: HeartHandshake, label: "Trusted Contacts", sub: "2 people" },
];

const suggestions = [
  "Record more voice memories from your childhood",
  "Add photos from your school and college years",
  "Write 3 life lessons you'd share with your kids",
  "Store important legal and family documents",
  "Update your family tree and relationships",
];

function Legacy() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Legacy</p>
          <div className="w-10" />
        </div>

        {/* Hero */}
        <div className="mt-6 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe">
              <InfinityIcon className="w-7 h-7" />
            </div>
            <h1 className="mt-4 text-[24px] font-bold tracking-tight">My Digital Legacy</h1>
            <p className="text-[12px] text-white/85 mt-2 max-w-[260px] leading-relaxed">
              Your experiences preserved for the generations who'll come after you.
            </p>
          </div>
        </div>

        {/* Overview */}
        <h2 className="mt-6 text-sm font-semibold">Legacy overview</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {overview.map((i) => (
            <div key={i.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className={`w-10 h-10 rounded-2xl ${i.grad} grid place-items-center text-white shadow-soft`}>
                <i.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{i.label}</p>
              <p className="text-[11px] text-muted-foreground">{i.sub}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="mt-7 text-sm font-semibold">Legacy timeline</h2>
        <div className="mt-3 rounded-3xl bg-card border border-border/60 shadow-soft p-4">
          <div className="relative">
            <div className="absolute left-[18px] top-1 bottom-1 w-px bg-border" />
            <ul className="space-y-4">
              {milestones.map((m) => (
                <li key={m.year} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-lavender grid place-items-center text-white shadow-soft shrink-0 relative z-10">
                    <m.Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{m.label}</p>
                      <span className="text-[10px] text-foreground/50">{m.year}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{m.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Future interaction */}
        <div className="mt-6 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <p className="relative text-sm font-semibold">Future interaction</p>
          <p className="relative text-[12px] text-white/85 mt-1 leading-relaxed">
            Your family will be able to interact with your AI in the future — to hear your voice, learn from your stories, and carry your values forward.
          </p>
          <div className="relative mt-4 grid grid-cols-2 gap-2">
            {future.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-xs bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">
                <f.Icon className="w-3.5 h-3.5" /> {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Vault */}
        <h2 className="mt-7 text-sm font-semibold">Legacy vault</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {vault.map((v) => (
            <div key={v.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className={`w-10 h-10 rounded-2xl ${v.grad} grid place-items-center text-white shadow-soft`}>
                <v.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{v.label}</p>
              <p className="text-[11px] text-muted-foreground">{v.sub}</p>
            </div>
          ))}
        </div>

        {/* AI Legacy Status */}
        <h2 className="mt-7 text-sm font-semibold">AI legacy status</h2>
        <div className="mt-3 rounded-3xl bg-card border border-border/60 shadow-soft p-4 space-y-3">
          {status.map((s) => (
            <div key={s.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="text-foreground/70">{s.label}</span>
                <span className="text-foreground/60">{s.value}%</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-gradient-ai rounded-full" style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Family access */}
        <h2 className="mt-7 text-sm font-semibold">Family access</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {access.map((a) => (
            <div key={a.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className="w-9 h-9 rounded-2xl bg-gradient-sky grid place-items-center text-white shadow-soft">
                <a.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{a.label}</p>
              <p className="text-[11px] text-muted-foreground">{a.sub}</p>
            </div>
          ))}
        </div>

        {/* AI suggestions */}
        <div className="mt-6 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> AI suggestions
          </div>
          <ul className="relative mt-3 space-y-2">
            {suggestions.map((s) => (
              <li key={s} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
