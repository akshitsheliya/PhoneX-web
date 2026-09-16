import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Smartphone, Laptop, Watch, Car, Home as HomeIcon, Calendar, Mail, Target, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "PhoneX Everywhere — Ecosystem" },
      { name: "description", content: "Your AI companion across every device — phone, laptop, watch, car, home." },
    ],
  }),
  component: Ecosystem,
});

const devices = [
  { label: "Mobile", state: "Active", Icon: Smartphone, grad: "bg-gradient-lavender" },
  { label: "Laptop", state: "Synced", Icon: Laptop, grad: "bg-gradient-sky" },
  { label: "Watch", state: "Live", Icon: Watch, grad: "bg-gradient-rose" },
  { label: "Car", state: "Ready", Icon: Car, grad: "bg-gradient-peach" },
  { label: "Smart Home", state: "12 devices", Icon: HomeIcon, grad: "bg-gradient-lavender" },
] as const;

const actions = [
  { Icon: Calendar, text: "Check calendar — 4 events today" },
  { Icon: Mail, text: "Read emails — 2 need a reply" },
  { Icon: Target, text: "Track goals — workout & learning" },
];

function Ecosystem() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Ecosystem</p>
          <div className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[28px] font-bold tracking-tight">PhoneX<br/>Everywhere</h1>
          <p className="text-sm text-muted-foreground mt-1">One AI, across every device you own</p>
        </div>

        {/* Hero orb */}
        <div className="mt-5 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
          <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe">
              <div className="w-10 h-10 rounded-full bg-white/80" />
            </div>
            <p className="mt-3 text-sm font-medium">"PhoneX, manage my day"</p>
            <p className="text-[11px] text-white/80 mt-1">Active on 5 devices · synced now</p>
          </div>
        </div>

        <h2 className="mt-6 text-sm font-semibold">Connected devices</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {devices.map((d) => (
            <div key={d.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className={`w-10 h-10 rounded-2xl ${d.grad} grid place-items-center text-white shadow-soft`}>
                <d.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{d.label}</p>
              <p className="text-[11px] text-muted-foreground">{d.state}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-sm font-semibold inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-primary" /> AI actions in flight
        </h2>
        <div className="mt-3 space-y-2">
          {actions.map((a) => (
            <div key={a.text} className="rounded-2xl p-3.5 bg-card border border-border/60 shadow-soft flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-lavender-soft grid place-items-center">
                <a.Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
