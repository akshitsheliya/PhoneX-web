import {
  Home,
  Compass,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Mic,
  Brain,
  LineChart,
  Layers,
  Boxes,
  Lock,
  Hourglass,
  User,
  Settings,
  Heart,
  Smile,
  Bell,
  Users,
  Briefcase,
  Languages,
  Zap,
  CreditCard,
  Info,
  ShieldCheck,
  Clock,
} from "lucide-react";

export type NavItem = { to: string; label: string; icon: typeof Home };

export const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "Overview",
    items: [
      { to: "/app", label: "Home", icon: Home },
      { to: "/activity", label: "Life", icon: Compass },
      { to: "/tasks", label: "Tasks", icon: CheckCircle2 },
      { to: "/memories", label: "Memories", icon: Sparkles },
    ],
  },
  {
    label: "Companion",
    items: [
      { to: "/chat", label: "Chat", icon: MessageCircle },
      { to: "/voice", label: "Voice", icon: Mic },
      { to: "/clone", label: "AI Clone", icon: Brain },
      { to: "/insights", label: "Insights", icon: LineChart },
    ],
  },
  {
    label: "Ecosystem",
    items: [
      { to: "/app/features", label: "Features", icon: Layers },
      { to: "/ecosystem", label: "Ecosystem", icon: Boxes },
      { to: "/vault", label: "Vault", icon: Lock },
      { to: "/legacy", label: "Legacy", icon: Hourglass },
    ],
  },
];

export const bottomNavItems: NavItem[] = [
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
];

/** Page titles for the desktop header, keyed by pathname. */
export const pageMeta: Record<string, { title: string; icon: typeof Home }> = {
  "/app": { title: "Home", icon: Home },
  "/activity": { title: "Life Activity", icon: Compass },
  "/tasks": { title: "Tasks", icon: CheckCircle2 },
  "/memories": { title: "Memories", icon: Sparkles },
  "/chat": { title: "Chat with PhoneX", icon: MessageCircle },
  "/voice": { title: "Voice", icon: Mic },
  "/clone": { title: "AI Clone", icon: Brain },
  "/insights": { title: "Life Insights", icon: LineChart },
  "/app/features": { title: "Features", icon: Layers },
  "/ecosystem": { title: "Ecosystem", icon: Boxes },
  "/vault": { title: "Vault", icon: Lock },
  "/legacy": { title: "Legacy", icon: Hourglass },
  "/profile": { title: "Profile", icon: User },
  "/settings": { title: "Settings", icon: Settings },
  "/fitness": { title: "Fitness", icon: Heart },
  "/mood": { title: "Mood", icon: Smile },
  "/notifications": { title: "Notifications", icon: Bell },
  "/family": { title: "Family", icon: Users },
  "/business": { title: "Business", icon: Briefcase },
  "/language": { title: "Language", icon: Languages },
  "/actions": { title: "Quick Actions", icon: Zap },
  "/subscription": { title: "Subscription", icon: CreditCard },
  "/about": { title: "About PhoneX", icon: Info },
  "/permissions": { title: "Permissions", icon: ShieldCheck },
  "/personality": { title: "PhoneX Personality", icon: Heart },
  "/life-summary": { title: "Life Summary", icon: Clock },
};
