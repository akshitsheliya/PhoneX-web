import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import {
  ChevronLeft, Database, Zap, Users2, Brain, Briefcase, LineChart, Cpu, Infinity as InfinityIcon,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PhoneX" },
      { name: "description", content: "Everything PhoneX can do for you." },
    ],
  }),
  component: About,
});

const explore = [
  { to: "/vault", label: "Knowledge Vault", sub: "Recall your life", Icon: Database, grad: "bg-gradient-sky" },
  { to: "/actions", label: "PhoneX Actions", sub: "Agent automations", Icon: Zap, grad: "bg-gradient-peach" },
  { to: "/family", label: "Family AI", sub: "Memories & tree", Icon: Users2, grad: "bg-gradient-rose" },
  { to: "/clone", label: "My AI Clone", sub: "Learning you", Icon: Brain, grad: "bg-gradient-lavender" },
  { to: "/business", label: "Business Brain", sub: "Work knowledge", Icon: Briefcase, grad: "bg-gradient-sky" },
  { to: "/insights", label: "Life Insights", sub: "Analytics", Icon: LineChart, grad: "bg-gradient-peach" },
  { to: "/ecosystem", label: "PhoneX Everywhere", sub: "Devices", Icon: Cpu, grad: "bg-gradient-lavender" },
  { to: "/legacy", label: "Digital Legacy", sub: "For generations", Icon: InfinityIcon, grad: "bg-gradient-rose" },
] as const;

function About() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/profile" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
          <p className="text-sm font-semibold">About PhoneX</p>
          <span className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[26px] font-bold tracking-tight">Features of PhoneX</h1>
          <p className="text-sm text-muted-foreground mt-1">Your personal operating system</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="group rounded-3xl p-4 bg-card border border-border/60 shadow-soft hover:shadow-card transition"
            >
              <div className={`w-10 h-10 rounded-2xl ${e.grad} grid place-items-center text-white shadow-soft`}>
                <e.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold leading-tight">{e.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{e.sub}</p>
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
