import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChevronLeft, Check, Clock, Calendar, Pencil, Trash2, Bell } from "lucide-react";
import { NOTIFS } from "./notifications";

export const Route = createFileRoute("/notifications/$id")({
  head: () => ({ meta: [{ title: "Reminder — PhoneX" }] }),
  component: NotifDetail,
  notFoundComponent: () => (
    <PhoneFrame>
      <div className="px-6 pt-10">
        <p className="text-sm">Reminder not found.</p>
        <Link to="/notifications" className="text-primary text-sm mt-2 inline-block">Back to notifications</Link>
      </div>
    </PhoneFrame>
  ),
});

const priorityLabel: Record<string, string> = { high: "High priority", med: "Medium", low: "Low" };
const priorityBg: Record<string, string> = {
  high: "bg-rose-soft text-rose-600", med: "bg-peach-soft text-amber-600", low: "bg-mint-soft text-emerald-600",
};

function NotifDetail() {
  const { id } = Route.useParams();
  const n = NOTIFS[id];
  if (!n) {
    return (
      <PhoneFrame>
        <div className="px-6 pt-10">
          <p className="text-sm">Reminder not found.</p>
          <Link to="/notifications" className="text-primary text-sm mt-2 inline-block">Back</Link>
        </div>
      </PhoneFrame>
    );
  }
  return (
    <PhoneFrame>
      <div className="px-6 pb-16 animate-fade-up">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/notifications" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Reminder</p>
          <div className="w-10" />
        </div>

        <div className="mt-6 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
          <div className="relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-md grid place-items-center">
            <Bell className="w-6 h-6" />
          </div>
          <h1 className="relative mt-4 text-[22px] font-bold tracking-tight">{n.title}</h1>
          <p className="relative text-[12px] text-white/85 mt-1">{n.date} · {n.time}</p>
        </div>

        <div className="mt-5 rounded-3xl bg-card border border-border/60 shadow-soft p-4 space-y-3">
          <Row label="Time" value={`${n.date}, ${n.time}`} />
          <Row label="Priority" value={priorityLabel[n.priority]} pill={priorityBg[n.priority]} />
          <Row label="Status" value={n.status.charAt(0).toUpperCase() + n.status.slice(1)} />
          <div>
            <p className="text-[11px] text-muted-foreground">Description</p>
            <p className="text-sm mt-1 leading-relaxed">{n.desc}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <ActionBtn Icon={Check} label="Mark complete" grad="bg-gradient-sky" />
          <ActionBtn Icon={Clock} label="Snooze" grad="bg-gradient-peach" />
          <ActionBtn Icon={Calendar} label="Reschedule" grad="bg-gradient-lavender" />
          <ActionBtn Icon={Pencil} label="Edit" grad="bg-gradient-rose" />
        </div>

        <button className="mt-4 w-full flex items-center justify-center gap-2 p-4 rounded-3xl bg-rose-soft text-rose-600 font-semibold text-sm shadow-soft">
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>
    </PhoneFrame>
  );
}

function Row({ label, value, pill }: { label: string; value: string; pill?: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      {pill ? (
        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${pill}`}>{value}</span>
      ) : (
        <p className="text-sm font-medium">{value}</p>
      )}
    </div>
  );
}

function ActionBtn({ Icon, label, grad }: { Icon: typeof Check; label: string; grad: string }) {
  return (
    <button className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft text-left">
      <div className={`w-9 h-9 rounded-2xl ${grad} grid place-items-center text-white shadow-soft`}>
        <Icon className="w-[18px] h-[18px]" />
      </div>
      <p className="mt-2 text-sm font-semibold">{label}</p>
    </button>
  );
}
