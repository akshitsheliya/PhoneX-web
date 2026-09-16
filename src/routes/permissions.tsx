import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Phone, MessageSquare, Calendar, HeartPulse, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/permissions")({
  head: () => ({
    meta: [
      { title: "Permissions — PhoneX" },
      { name: "description", content: "Manage what PhoneX can access." },
    ],
  }),
  component: Permissions,
});

const permissions = [
  { Icon: Phone, label: "Phone access", sub: "Calls & contacts", on: true },
  { Icon: MessageSquare, label: "Messages", sub: "Send on your behalf", on: true },
  { Icon: Calendar, label: "Calendar", sub: "Read & create events", on: true },
  { Icon: HeartPulse, label: "Health data", sub: "Workouts & sleep", on: false },
  { Icon: MapPin, label: "Location", sub: "While using app", on: true },
];

function Permissions() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/settings" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
          <p className="text-sm font-semibold">Permissions</p>
          <span className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[26px] font-bold tracking-tight">Permissions</h1>
          <p className="text-sm text-muted-foreground mt-1">Choose what PhoneX can access</p>
        </div>

        <div className="mt-5 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60">
          {permissions.map((p) => (
            <Row key={p.label} {...p} />
          ))}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}

function Row({ Icon, label, sub, on: initial }: { Icon: typeof Phone; label: string; sub: string; on: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="w-9 h-9 rounded-xl bg-secondary grid place-items-center">
        <Icon className="w-4 h-4 text-foreground/70" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-gradient-ai" : "bg-border"}`}
      >
        <span className={`absolute top-0.5 ${on ? "left-[22px]" : "left-0.5"} w-5 h-5 rounded-full bg-white shadow-soft transition-all`} />
      </button>
    </div>
  );
}
