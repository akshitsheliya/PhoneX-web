import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Check } from "lucide-react";
import { useLang, useT, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/language")({
  head: () => ({
    meta: [
      { title: "Language — PhoneX" },
      { name: "description", content: "Choose how PhoneX speaks with you." },
    ],
  }),
  component: LanguagePage,
});

const languages: { code: Lang; native: string }[] = [
  { code: "English", native: "English" },
  { code: "Hindi", native: "हिन्दी" },
  { code: "Gujarati", native: "ગુજરાતી" },
  { code: "Telugu", native: "తెలుగు" },
  { code: "Kannada", native: "ಕನ್ನಡ" },
  { code: "Arabic", native: "العربية" },
  { code: "Spanish", native: "Español" },
  { code: "French", native: "Français" },
  { code: "Chinese", native: "中文" },
  { code: "Japanese", native: "日本語" },
  { code: "German", native: "Deutsch" },
];

function LanguagePage() {
  const { lang, setLang } = useLang();
  const t = useT();
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/settings" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
          <p className="text-sm font-semibold">{t("Language")}</p>
          <span className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[26px] font-bold tracking-tight">{t("Language")}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t("Choose how PhoneX speaks with you")}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {languages.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                  active
                    ? "bg-gradient-lavender text-white shadow-soft"
                    : "bg-card border border-border/60"
                }`}
              >
                <span className="text-sm font-medium" data-native-text="true">{l.native}</span>
                {active && <Check className="w-4 h-4" strokeWidth={3} />}
              </button>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
