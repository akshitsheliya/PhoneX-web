import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, MessageSquare, Mail, Plane, Hotel, CalendarClock, Receipt, ShoppingCart, FileSignature } from "lucide-react";

export const Route = createFileRoute("/actions")({
  head: () => ({
    meta: [
      { title: "PhoneX Actions — Agent" },
      { name: "description", content: "Let PhoneX take action — messages, bookings, payments and more." },
    ],
  }),
  component: Actions,
});

const items = [
  { label: "Send messages", sub: "Reply on your behalf", Icon: MessageSquare, status: "Active", grad: "bg-gradient-sky" },
  { label: "Send emails", sub: "Drafted with your tone", Icon: Mail, status: "Active", grad: "bg-gradient-lavender" },
  { label: "Book flights", sub: "Compare & confirm", Icon: Plane, status: "Ready", grad: "bg-gradient-peach" },
  { label: "Book hotels", sub: "Find best stays", Icon: Hotel, status: "Ready", grad: "bg-gradient-rose" },
  { label: "Schedule meetings", sub: "Calendar coordinated", Icon: CalendarClock, status: "Active", grad: "bg-gradient-sky" },
  { label: "Pay bills", sub: "Recurring & one-off", Icon: Receipt, status: "Paused", grad: "bg-gradient-peach" },
  { label: "Order groceries", sub: "Restock weekly", Icon: ShoppingCart, status: "Ready", grad: "bg-gradient-lavender" },
  { label: "Fill forms", sub: "Auto-complete data", Icon: FileSignature, status: "Active", grad: "bg-gradient-rose" },
] as const;

function statusTone(s: string) {
  if (s === "Active") return "text-emerald-700 bg-emerald-100/70";
  if (s === "Paused") return "text-amber-700 bg-amber-100/70";
  return "text-foreground/60 bg-white/70";
}

function Actions() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Actions</p>
          <div className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[28px] font-bold tracking-tight">PhoneX Actions</h1>
          <p className="text-sm text-muted-foreground mt-1">Your AI agent, working for you</p>
        </div>

        <div className="mt-5 space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
          {items.map((it) => (
            <div key={it.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft flex items-center gap-3">
              <div className={`w-11 h-11 rounded-2xl ${it.grad} grid place-items-center text-white shadow-soft shrink-0`}>
                <it.Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{it.label}</p>
                <p className="text-[11px] text-muted-foreground">{it.sub}</p>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusTone(it.status)}`}>{it.status}</span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
