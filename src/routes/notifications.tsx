import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications — PhoneX" }, { name: "description", content: "Your AI-organized daily reminders and schedule." }] }),
  component: Notifications,
});

export const NOTIFS: Record<string, {
  title: string; time: string; date: string; priority: "high" | "med" | "low"; status: "today" | "tomorrow" | "upcoming" | "completed" | "missed"; desc: string;
}> = {
  "wake-up": { title: "Wake up", time: "6:00 AM", date: "Today", priority: "med", status: "completed", desc: "Gentle alarm · sunrise light" },
  "salary": { title: "Salary credited", time: "9:12 AM", date: "Today", priority: "low", status: "completed", desc: "Monthly salary deposited to your account" },
  "meeting": { title: "Design review", time: "2:00 PM", date: "Today", priority: "high", status: "today", desc: "Review v2.1 designs with Sarah and product team" },
  "gym": { title: "Gym session", time: "6:30 PM", date: "Today", priority: "med", status: "today", desc: "Strength training · legs day" },
  "medicine": { title: "Medicine reminder", time: "9:00 PM", date: "Today", priority: "high", status: "today", desc: "Vitamin D + multivitamin" },
  "date": { title: "Date night", time: "8:00 PM", date: "Tomorrow", priority: "high", status: "tomorrow", desc: "Dinner reservation at Nobu · dress smart casual" },
  "doctor": { title: "Doctor appointment", time: "11:00 AM", date: "Tomorrow", priority: "high", status: "tomorrow", desc: "Annual checkup with Dr. Mehta" },
  "shopping": { title: "Grocery shopping", time: "5:00 PM", date: "Tomorrow", priority: "low", status: "tomorrow", desc: "Weekly essentials + fresh produce" },
  "license": { title: "Driving license exam", time: "10:00 AM", date: "Mar 18", priority: "high", status: "upcoming", desc: "Bring documents + photo ID" },
  "birthday": { title: "Mom's birthday", time: "All day", date: "Mar 12", priority: "high", status: "upcoming", desc: "Call at 10 AM, gift already ordered" },
  "flight": { title: "Flight to Lisbon", time: "7:20 AM", date: "Mar 22", priority: "high", status: "upcoming", desc: "TAP Air · Terminal 1 · web check-in opens 48h prior" },
  "family": { title: "Family dinner", time: "7:00 PM", date: "Mar 15", priority: "med", status: "upcoming", desc: "At your parents' home" },
  "call-mom": { title: "Call Mom", time: "7:00 PM", date: "Yesterday", priority: "med", status: "missed", desc: "You missed this reminder" },
};

const sections: { key: string; title: string; ids: string[] }[] = [
  { key: "today", title: "Today", ids: ["wake-up", "salary", "meeting", "gym", "medicine"] },
  { key: "tomorrow", title: "Tomorrow", ids: ["doctor", "shopping", "date"] },
  { key: "upcoming", title: "Upcoming", ids: ["family", "license", "birthday", "flight"] },
  { key: "completed", title: "Completed", ids: ["wake-up", "salary"] },
  { key: "missed", title: "Missed", ids: ["call-mom"] },
];

const priorityDot: Record<string, string> = {
  high: "bg-rose-500", med: "bg-amber-400", low: "bg-emerald-400",
};

function Notifications() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Notifications</p>
          <div className="w-10" />
        </div>

        <div className="mt-6">
          <h1 className="text-[26px] font-bold tracking-tight">Your Day, Planned</h1>
          <p className="text-sm text-muted-foreground mt-1">AI-organized reminders and schedule</p>
        </div>

        <div className="mt-4 rounded-[24px] p-4 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> AI daily schedule
          </div>
          <p className="relative mt-2 text-sm">You have 3 important items today. Best focus block: 9–11 AM.</p>
        </div>

        {sections.map((s) => (
          <div key={s.key} className="mt-6">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{s.title}</p>
            <div className="mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60">
              {s.ids.map((id) => {
                const n = NOTIFS[id];
                return (
                  <Link key={s.key + id} to="/notifications/$id" params={{ id }} className="flex items-center gap-3 p-4">
                    <span className={`w-2 h-2 rounded-full ${priorityDot[n.priority]}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{n.title}</p>
                      <p className="text-[11px] text-muted-foreground">{n.date} · {n.time}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-foreground/40" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
