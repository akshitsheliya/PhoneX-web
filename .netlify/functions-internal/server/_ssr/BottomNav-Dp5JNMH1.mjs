import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as useLocation, v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as Compass, G as Mic, S as Sparkles, st as House, u as User } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { n as PhonexAIOverlay } from "./PhoneFrame-BX0YUAy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BottomNav-Dp5JNMH1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BottomNav() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const t = useT();
	const [overlay, setOverlay] = (0, import_react.useState)(false);
	const holdTimer = (0, import_react.useRef)(null);
	const heldRef = (0, import_react.useRef)(false);
	const items = [
		{
			to: "/",
			icon: House,
			label: t("Home")
		},
		{
			to: "/activity",
			icon: Compass,
			label: t("Life")
		},
		{
			to: "/memories",
			icon: Sparkles,
			label: t("Memory")
		},
		{
			to: "/profile",
			icon: User,
			label: t("Profile")
		}
	];
	const startHold = () => {
		heldRef.current = false;
		if (holdTimer.current) window.clearTimeout(holdTimer.current);
		holdTimer.current = window.setTimeout(() => {
			heldRef.current = true;
			setOverlay(true);
		}, 450);
	};
	const endHold = () => {
		if (holdTimer.current) {
			window.clearTimeout(holdTimer.current);
			holdTimer.current = null;
		}
		if (!heldRef.current) navigate({ to: "/voice" });
		heldRef.current = false;
	};
	const cancelHold = () => {
		if (holdTimer.current) {
			window.clearTimeout(holdTimer.current);
			holdTimer.current = null;
		}
		heldRef.current = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute bottom-5 inset-x-0 z-40 flex justify-center pointer-events-none lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto relative flex items-center gap-1 px-3 py-2.5 rounded-full bg-nav shadow-nav",
			children: [
				items.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
					item,
					active: pathname === item.to
				}, item.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onPointerDown: startHold,
					onPointerUp: endHold,
					onPointerLeave: cancelHold,
					onPointerCancel: cancelHold,
					onContextMenu: (e) => e.preventDefault(),
					className: "relative mx-1 -mt-8 grid place-items-center w-16 h-16 rounded-full bg-gradient-ai shadow-orb animate-breathe ring-4 ring-nav select-none touch-none",
					"aria-label": t("Talk to PhoneX"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-ai opacity-50 animate-pulse-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
						className: "w-6 h-6 text-white relative z-10",
						strokeWidth: 2.4
					})]
				}),
				items.slice(2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
					item,
					active: pathname === item.to
				}, item.to))
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhonexAIOverlay, {
		open: overlay,
		onClose: () => setOverlay(false)
	})] });
}
function NavBtn({ item, active }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		className: `grid place-items-center w-11 h-11 rounded-full transition-all ${active ? "bg-white/15 text-nav-foreground" : "text-nav-foreground/55 hover:text-nav-foreground"}`,
		"aria-label": item.label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "w-[18px] h-[18px]",
			strokeWidth: 2.2
		})
	});
}
//#endregion
export { BottomNav as t };
