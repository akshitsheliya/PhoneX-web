import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChevronLeft, Mic, Send, Sparkles, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat with PhoneX" },
      { name: "description", content: "Talk with your AI companion through text." },
    ],
  }),
  component: Chat,
});

type Msg = { from: "ai" | "me"; text: string };

const initial: Msg[] = [
  { from: "ai", text: "Hi Akshit, I'm here. What's on your mind today?" },
  { from: "me", text: "Remind me to call Mom this evening." },
  { from: "ai", text: "Done. I'll remind you at 7pm — and I'll keep her favourite topics nearby." },
];

const suggestions: string[] = [
  "Summarise my day",
  "Remind me to call Mom",
  "What should I focus on next?",
];

function Chat() {
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: "me", text }, { from: "ai", text: "Got it. I've saved that for you." }]);
    setText("");
  };

  return (
    <PhoneFrame>
      <div className="relative h-full flex flex-col px-5 pb-5 animate-fade-up lg:flex-row lg:gap-6 lg:px-0 lg:pb-0">
        <div className="relative flex h-full min-w-0 flex-1 flex-col lg:rounded-[28px] lg:border lg:border-border/60 lg:bg-card lg:p-5 lg:shadow-soft">
          {/* Header */}
          <div className="flex items-center justify-between pt-1 lg:pt-0">
            <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center lg:hidden">
              <ChevronLeft className="w-[18px] h-[18px]" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-ai grid place-items-center shadow-orb">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">PhoneX</p>
                <p className="text-[10px] text-primary">online</p>
              </div>
            </div>
            <Link
              to="/voice"
              aria-label="Voice"
              className="w-10 h-10 rounded-full bg-gradient-ai shadow-orb grid place-items-center lg:hidden"
            >
              <Mic className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Messages */}
          <div className="flex-1 mt-5 overflow-y-auto scrollbar-none space-y-2.5 lg:space-y-3 lg:pr-1">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[78%] text-sm px-4 py-2.5 rounded-2xl shadow-soft lg:max-w-[62%] lg:px-5 lg:py-3 ${
                    m.from === "me"
                      ? "bg-gradient-ai text-white rounded-br-md"
                      : "bg-card border border-border/60 text-foreground rounded-bl-md lg:bg-secondary/60"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Composer */}
          <div className="mt-4 flex items-center gap-2 bg-card border border-border/60 shadow-card rounded-full pl-2 pr-1.5 py-1.5 lg:shadow-soft">
            <button aria-label="Add" className="w-9 h-9 rounded-full bg-secondary grid place-items-center transition-colors hover:bg-accent">
              <Plus className="w-4 h-4 text-foreground/70" />
            </button>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Message PhoneX…"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            <Link to="/voice" aria-label="Voice input" className="w-9 h-9 rounded-full bg-secondary grid place-items-center transition-colors hover:bg-accent">
              <Mic className="w-4 h-4 text-foreground/70" />
            </Link>
            <button
              onClick={send}
              aria-label="Send"
              className="w-10 h-10 rounded-full bg-gradient-ai shadow-orb grid place-items-center transition-transform hover:scale-105"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop context panel */}
        <aside className="hidden lg:block lg:w-[320px] lg:shrink-0 lg:space-y-4">
          <div className="rounded-[28px] border border-border/60 bg-card p-5 shadow-soft">
            <p className="text-sm font-semibold">Suggestions</p>
            <div className="mt-3 space-y-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => setText(s)}
                  className="w-full rounded-2xl bg-secondary px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-border/60 bg-card p-5 shadow-soft">
            <p className="text-sm font-semibold">Continue elsewhere</p>
            <div className="mt-3 space-y-2">
              <Link to="/voice" className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-2.5 text-sm transition-colors hover:bg-accent">
                <Mic className="h-4 w-4 text-foreground/70" /> Talk with voice
              </Link>
              <Link to="/memories" className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-2.5 text-sm transition-colors hover:bg-accent">
                <Sparkles className="h-4 w-4 text-foreground/70" /> Saved memories
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </PhoneFrame>
  );
}
