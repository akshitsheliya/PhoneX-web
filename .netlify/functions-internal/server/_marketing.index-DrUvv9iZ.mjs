import { r as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as Container, o as cn, r as Eyebrow, t as CTALink } from "./_ssr/primitives-DGSZxQ5e.mjs";
import { $ as ListChecks, A as Search, At as Compass, F as Quote, G as Mic, Gt as CalendarCheck, L as Play, Lt as Check, Nt as Circle, Qt as BookOpen, Rt as ChartLine, S as Sparkles, Tt as DollarSign, V as Pause, W as Moon, Yt as Brain, Zt as Bookmark, an as Activity, dt as HeartPulse, in as ArrowRight, mt as Gift, o as VolumeX, q as MessageCircle, s as Volume2, t as Zap, v as Sun, vt as FingerprintPattern, zt as ChartColumn } from "./_libs/lucide-react.mjs";
import { i as useReveal, n as DeviceFrame, r as DeviceScreen, t as AppScreen } from "./_ssr/DeviceFrame-DkhGiBz3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_marketing.index-DrUvv9iZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PhoneX_presents_default = "/assets/PhoneX%20presents-7qBPI42C.mp4";
function HeroDeviceVideo({ className, glow = true }) {
	const videoRef = (0, import_react.useRef)(null);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(true);
	const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);
		const handleLoadedData = () => setIsLoaded(true);
		video.addEventListener("play", handlePlay);
		video.addEventListener("pause", handlePause);
		video.addEventListener("loadeddata", handleLoadedData);
		video.play().catch(() => {
			setIsPlaying(false);
		});
		return () => {
			video.removeEventListener("play", handlePlay);
			video.removeEventListener("pause", handlePause);
			video.removeEventListener("loadeddata", handleLoadedData);
		};
	}, []);
	const toggleMute = (e) => {
		e.stopPropagation();
		if (!videoRef.current) return;
		videoRef.current.muted = !videoRef.current.muted;
		setIsMuted(videoRef.current.muted);
	};
	const togglePlay = () => {
		if (!videoRef.current) return;
		if (videoRef.current.paused) videoRef.current.play();
		else videoRef.current.pause();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative mx-auto w-full", className),
		children: [glow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-device-glow pointer-events-none absolute -inset-10 -z-10 rounded-[50%] blur-3xl opacity-80" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "group relative mx-auto w-full max-w-[310px] sm:max-w-[325px] rounded-[3.2rem] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-[10px]  shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.14),0_15px_35px_-5px_oklch(0.65_0.18_280/0.25)] transition-transform duration-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: togglePlay,
				className: "relative w-full cursor-pointer overflow-hidden rounded-[2.5rem] bg-black shadow-inner aspect-[648/1280]",
				style: { aspectRatio: "648 / 1280" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute top-2.5 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black/80 backdrop-blur-md ring-1 ring-white/10 flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-neutral-900 ring-1 ring-white/10 mr-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-8 rounded-full bg-neutral-800" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						src: PhoneX_presents_default,
						autoPlay: true,
						loop: true,
						muted: isMuted,
						playsInline: true,
						preload: "auto",
						className: cn("h-full w-full object-cover transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-90")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.07]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-3 bottom-3 z-20 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: (e) => {
								e.stopPropagation();
								togglePlay();
							},
							className: "flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-all hover:scale-105 hover:bg-black/80",
							"aria-label": isPlaying ? "Pause video" : "Play video",
							children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 ml-0.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleMute,
							className: "flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-all hover:scale-105 hover:bg-black/80",
							"aria-label": isMuted ? "Unmute video" : "Mute video",
							children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3.5 w-3.5 text-white/80" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3.5 w-3.5 text-primary" })
						})]
					})
				]
			})
		})]
	});
}
var panelClass = "relative aspect-square w-full overflow-hidden rounded-[1.4rem] border border-border/70 bg-card p-4 shadow-soft sm:p-5";
var surfaceClass = "rounded-xl border border-border/70 bg-background/90 shadow-soft";
function ProductivityPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: panelClass,
		"aria-label": "PhoneX task dashboard preview",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-8 top-0 h-20 bg-lavender-soft blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-h-0 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-semibold leading-tight text-foreground",
						children: "Today's Tasks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] text-muted-foreground",
						children: "8 of 10 completed · 80%"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-7 items-center rounded-full bg-lavender-soft px-2.5 text-[9px] font-semibold text-primary",
						children: "On track"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 p-3 " + surfaceClass,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[9px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Completion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "80%"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 overflow-hidden rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-4/5 rounded-full bg-primary" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 text-[9px] font-semibold uppercase text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-primary" }), " Completed"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] text-muted-foreground",
						children: "4"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 min-h-0 flex-1 divide-y divide-border/70 overflow-hidden " + surfaceClass,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskRow, {
						title: "Morning Workout",
						detail: "Completed at 7:15 AM",
						done: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskRow, {
						title: "Reply to Sarah",
						detail: "Completed at 9:30 AM",
						done: true
					})]
				})
			]
		})]
	});
}
function TaskRow({ title, detail, done }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 items-center gap-2.5 px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint",
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3 w-3" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-[10px] font-medium text-foreground",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 truncate text-[8px] text-muted-foreground",
					children: detail
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-mint" })
		]
	});
}
function MemoryPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: panelClass,
		"aria-label": "PhoneX memory timeline preview",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-8 top-0 h-20 bg-peach-soft blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-h-0 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[15px] font-semibold leading-tight text-foreground",
					children: "Memory timeline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] text-muted-foreground",
					children: "Moments PhoneX is keeping for you"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex h-8 items-center gap-2 rounded-full border border-border/70 bg-background px-3 text-muted-foreground shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px]",
						children: "Search memories"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 flex gap-1.5 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-foreground px-2.5 py-1 text-[8px] font-medium text-background",
						children: "All"
					}), [
						"Personal",
						"Family",
						"Health"
					].map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border/70 bg-background px-2 py-1 text-[8px] text-muted-foreground",
						children: filter
					}, filter))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 min-h-0 flex-1 p-3.5 " + surfaceClass,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-semibold text-foreground",
									children: "Mom's birthday"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[8px] text-muted-foreground",
									children: "March 12"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[9px] leading-relaxed text-muted-foreground",
							children: "Don't forget to call her — she loves voice messages."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 inline-flex rounded-full bg-peach-soft px-2 py-1 text-[8px] font-medium text-muted-foreground",
							children: "Important"
						})
					]
				})
			]
		})]
	});
}
var insightItems = [
	{
		label: "Productivity",
		value: "84%",
		detail: "+6%",
		icon: Activity,
		tone: "bg-sky-soft text-sky"
	},
	{
		label: "Health",
		value: "Good",
		detail: "Stable",
		icon: HeartPulse,
		tone: "bg-rose-soft text-rose"
	},
	{
		label: "Finance",
		value: "$4,210",
		detail: "+12%",
		icon: DollarSign,
		tone: "bg-mint-soft text-mint"
	},
	{
		label: "Learning",
		value: "12h",
		detail: "+2h",
		icon: BookOpen,
		tone: "bg-lavender-soft text-primary"
	}
];
function InsightsPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: panelClass,
		"aria-label": "PhoneX life insights preview",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-8 top-0 h-20 bg-mint-soft blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-h-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[15px] font-semibold leading-tight text-foreground",
					children: "Life Insights"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] text-muted-foreground",
					children: "Patterns across your life"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2.5",
				children: insightItems.map(({ label, value, detail, icon: Icon, tone }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col justify-between p-3 " + surfaceClass,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 items-center justify-center rounded-full " + tone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-secondary px-1.5 py-0.5 text-[7px] font-medium text-muted-foreground",
							children: detail
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[8px] text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[11px] font-semibold text-foreground",
							children: value
						})]
					})]
				}, label))
			})]
		})]
	});
}
/**
* "What is PhoneX?" intro + the three core benefits, each tied to a real
* PhoneX product preview (Tasks, Memories, Insights).
*/
function WhatIsPhoneX() {
	const intro = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "what-is-phonex",
		tone: "tint",
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: intro.ref,
				className: cn("mkt-inview mx-auto max-w-[720px] text-center", intro.shown && "is-in"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.14em]",
						children: "What is PhoneX?"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mkt-h2 mkt-h2-strong mt-6 text-balance",
						children: [
							"More than an AI assistant.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" Built for everyday life."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-lead mx-auto mt-5 max-w-[560px]",
						children: "PhoneX brings the things you manage every day into one intelligent experience — helping you stay organized, remember what matters, and make better use of your time."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-14 grid max-w-[1100px] gap-6 md:mt-16 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefit, {
						index: "01",
						accent: "lavender",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-4 w-4" }),
						title: "Stay ahead of your day.",
						copy: "PhoneX helps you organize tasks, priorities, and everyday things that need your attention.",
						preview: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductivityPreview, {}),
						note: "Real PhoneX Tasks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefit, {
						index: "02",
						accent: "peach",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" }),
						title: "Remember what matters.",
						copy: "Save ideas, important moments, and things you want to come back to without letting them disappear.",
						preview: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryPreview, {}),
						note: "Real PhoneX Memories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefit, {
						index: "03",
						accent: "mint",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-4 w-4" }),
						title: "Understand your life better.",
						copy: "Discover useful patterns in your routines, productivity, goals, and everyday activities.",
						preview: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightsPreview, {}),
						note: "Real PhoneX Insights"
					})
				]
			})]
		})
	});
}
function Benefit({ index, accent, icon, title, copy, preview, note, className }) {
	const { ref, shown } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref,
		className: cn("mkt-inview mkt-benefit group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm", `mkt-accent-${accent}`, shown && "is-in", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-benefit-accent pointer-events-none absolute inset-x-0 top-0 h-px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-1 flex-col p-7 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mkt-benefit-index absolute -top-2 right-0 select-none text-[2.5rem] font-bold leading-none",
						children: index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mkt-benefit-chip inline-flex h-9 w-9 items-center justify-center rounded-xl",
						children: icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 max-w-[15ch] text-[1.25rem] font-semibold leading-[1.2] tracking-normal",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-body mt-3 max-w-[36ch]",
						children: copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[11px] font-medium uppercase tracking-[0.13em] text-muted-foreground/70",
						children: note
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-benefit-glow pointer-events-none absolute -inset-6 -z-10 rounded-[40%] blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mkt-benefit-window relative mx-auto w-full max-w-[300px] transition-transform duration-500 group-hover:-translate-y-1",
					children: preview
				})]
			})]
		})]
	});
}
var STAGES = [
	{
		key: "morning",
		time: "Morning",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }),
		tone: "morning",
		title: "Start your day with clarity.",
		copy: "See what matters, organize your priorities, and begin your day with a clear plan.",
		screen: "home",
		caption: "Let's plan your day.",
		moment: {
			from: "You",
			line: "What do I need to focus on today?"
		}
	},
	{
		key: "afternoon",
		time: "Afternoon",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }),
		tone: "afternoon",
		title: "Stay on track without keeping everything in your head.",
		copy: "Keep up with important tasks, save things you want to remember, and stay focused on what matters.",
		screen: "memories",
		caption: "Don't forget that idea.",
		moment: {
			from: "You",
			line: "Remember this idea for later."
		}
	},
	{
		key: "evening",
		time: "Evening",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }),
		tone: "evening",
		title: "Understand more about your day.",
		copy: "Reflect on what you accomplished, notice useful patterns, and see how your day came together.",
		screen: "insights",
		caption: "Here's how your day went.",
		moment: {
			from: "PhoneX",
			line: "You completed most of your priorities today."
		}
	}
];
/** "A day with PhoneX" — one connected story across morning, afternoon and evening. */
function DayWithPhoneX() {
	const intro = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "a-day-with-phonex",
		className: "mkt-day relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: intro.ref,
				className: cn("mkt-inview mx-auto max-w-[680px] text-center", intro.shown && "is-in"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.14em]",
						children: "A day with PhoneX"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mkt-h2 mt-6 text-balance",
						children: [
							"One companion.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" There when you need it."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-lead mx-auto mt-5 max-w-[540px]",
						children: "PhoneX fits naturally into your day — helping you plan, remember, stay on track, and reflect along the way."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-14 lg:mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-day-rail pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-16 lg:gap-20",
					children: STAGES.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageBlock, {
						stage,
						flip: i % 2 === 1,
						step: i + 1
					}, stage.key))
				})]
			})]
		})
	});
}
function StageBlock({ stage, flip, step }) {
	const reveal = useReveal(.15);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: reveal.ref,
		className: cn("mkt-inview mkt-stage relative", `mkt-stage-${stage.tone}`, reveal.shown && "is-in"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-stage-aura pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-stage-node absolute left-1/2 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full lg:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("max-w-[460px] lg:pt-2", flip ? "lg:order-2 lg:justify-self-start lg:pl-12" : "lg:order-1 lg:justify-self-end lg:pr-12"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mkt-stage-label inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em]",
							children: [stage.icon, stage.time]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mkt-stage-title mt-5 text-balance text-[1.6rem] font-semibold leading-[1.15] tracking-normal md:text-[2rem]",
							children: stage.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-body mt-4 max-w-[420px] text-[0.975rem]",
							children: stage.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mkt-stage-moment mt-7 max-w-[380px] rounded-2xl border px-4 py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mkt-stage-quote mt-0.5 h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-medium leading-snug text-foreground/85",
									children: stage.moment.line
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
									children: stage.moment.from
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-[12px] text-muted-foreground/80",
							children: [
								"Step ",
								step,
								" of 3"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex w-full justify-center", flip ? "lg:order-1 lg:justify-end lg:pr-12" : "lg:order-2 lg:justify-start lg:pl-12"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-[244px] pb-8 sm:max-w-[258px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-stage-glow pointer-events-none absolute inset-[-22%] -z-10 rounded-full blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceScreen, {
								screen: stage.screen,
								height: 844,
								glow: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mkt-stage-caption absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium shadow-soft backdrop-blur-md",
								children: stage.caption
							})
						]
					})
				})]
			})
		]
	});
}
var EXPERIENCES = [
	{
		key: "plan",
		tab: "Plan",
		icon: CalendarCheck,
		tone: "mkt-act-plan",
		title: "Plan your day without the mental clutter.",
		copy: "Turn everyday thoughts and priorities into a clearer plan with PhoneX.",
		screen: "tasks",
		label: "Daily priorities",
		moment: {
			from: "You",
			line: "What should I focus on today?"
		}
	},
	{
		key: "remember",
		tab: "Remember",
		icon: Bookmark,
		tone: "mkt-act-remember",
		title: "Keep what matters close.",
		copy: "Save ideas, important moments, and useful information so they don't get lost in everyday life.",
		screen: "memories",
		label: "Saved memory",
		moment: {
			from: "You",
			line: "Remember the restaurant Sarah recommended."
		}
	},
	{
		key: "talk",
		tab: "Talk",
		icon: MessageCircle,
		tone: "mkt-act-talk",
		title: "Just talk to PhoneX.",
		copy: "Ask questions, share thoughts, or get help naturally — without learning complicated commands.",
		screen: "voice",
		label: "AI companion",
		moment: {
			from: "You",
			line: "Help me organize tomorrow."
		}
	},
	{
		key: "understand",
		tab: "Understand",
		icon: ChartLine,
		tone: "mkt-act-understand",
		title: "See the patterns in your everyday life.",
		copy: "PhoneX can help you understand useful patterns across your routines, productivity, and daily activities.",
		screen: "insights",
		label: "Life insights",
		moment: {
			from: "PhoneX",
			line: "Here's how your week is coming together."
		}
	}
];
/** "See PhoneX in action" — interactive showcase of four real app experiences. */
function PhonexInAction() {
	const [active, setActive] = (0, import_react.useState)("plan");
	const [loaded, setLoaded] = (0, import_react.useState)(["plan"]);
	const intro = useReveal();
	const body = useReveal(.12);
	const current = EXPERIENCES.find((e) => e.key === active);
	const select = (key) => {
		setActive(key);
		setLoaded((prev) => prev.includes(key) ? prev : [...prev, key]);
	};
	const onTabKeyDown = (e, index) => {
		if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
		e.preventDefault();
		const next = (index + (e.key === "ArrowRight" ? 1 : EXPERIENCES.length - 1)) % EXPERIENCES.length;
		select(EXPERIENCES[next].key);
		document.getElementById(`mkt-act-tab-${EXPERIENCES[next].key}`)?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "see-phonex-in-action",
		className: "mkt-act relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: intro.ref,
				className: cn("mkt-inview mx-auto max-w-[680px] text-center", intro.shown && "is-in"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.14em]",
						children: "See PhoneX in action"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mkt-h2 mt-6 text-balance",
						children: "One app. Many ways to make life easier."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-lead mx-auto mt-5 max-w-[560px]",
						children: "Explore how PhoneX helps you plan, remember, talk, and understand — all from one personal AI companion."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: body.ref,
				className: cn("mkt-inview mx-auto mt-12 grid max-w-[980px] items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14", body.shown && "is-in", current.tone),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[520px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "tablist",
						"aria-label": "PhoneX experiences",
						className: "mkt-act-tabs -mx-6 flex snap-x gap-1.5 overflow-x-auto px-6 pb-1 scrollbar-none lg:mx-0 lg:px-0",
						children: EXPERIENCES.map((exp, i) => {
							const Icon = exp.icon;
							const isActive = exp.key === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: `mkt-act-tab-${exp.key}`,
								role: "tab",
								type: "button",
								"aria-selected": isActive,
								"aria-controls": "mkt-act-panel",
								tabIndex: isActive ? 0 : -1,
								onClick: () => select(exp.key),
								onKeyDown: (e) => onTabKeyDown(e, i),
								className: cn("mkt-act-tab shrink-0 snap-start inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", isActive ? "is-active font-semibold" : "border-transparent text-muted-foreground hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), exp.tab]
							}, exp.key);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "mkt-act-panel",
						role: "tabpanel",
						"aria-labelledby": `mkt-act-tab-${current.key}`,
						className: "mt-8 min-h-[240px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mkt-act-swap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-balance text-[1.55rem] font-semibold leading-[1.15] tracking-normal md:text-[2rem]",
									children: current.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mkt-body mt-4 max-w-[440px] text-[0.975rem]",
									children: current.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mkt-act-moment mt-7 max-w-[400px] rounded-2xl border px-4 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mkt-act-quote mt-0.5 h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] font-medium leading-snug text-foreground/85",
											children: current.moment.line
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
											children: current.moment.from
										})] })]
									})
								})
							]
						}, current.key)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full justify-center lg:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-[248px] sm:max-w-[260px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-act-glow pointer-events-none absolute inset-[-26%] -z-10 rounded-full blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative grid drop-shadow-[0_40px_60px_oklch(0.25_0.08_285/0.22)]",
								children: EXPERIENCES.map((exp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("col-start-1 row-start-1 transition-all duration-500 ease-out", exp.key === active ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-[0.985]"),
									"aria-hidden": exp.key !== active,
									children: loaded.includes(exp.key) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
										screen: exp.screen,
										height: 844
									}) : null
								}, exp.key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mkt-act-chip mkt-act-swap absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium shadow-soft backdrop-blur-md",
								children: current.label
							}, current.key)
						]
					})
				})]
			})]
		})
	});
}
var STORIES = [
	{
		id: "companion",
		index: "01",
		eyebrow: "AI Companion",
		icon: MessageCircle,
		title: "An AI that feels personal.",
		copy: "Talk naturally, ask questions, share thoughts, or get help with everyday decisions — without complicated commands.",
		screen: "chat",
		moment: {
			from: "You",
			line: "Help me plan tomorrow."
		},
		tone: "mkt-story-lavender",
		side: "right"
	},
	{
		id: "tasks",
		index: "02",
		eyebrow: "Smart Tasks",
		icon: ListChecks,
		title: "Turn thoughts into action.",
		copy: "Capture what needs to be done, keep priorities visible, and stay on top of the things that matter.",
		screen: "tasks",
		moment: {
			from: "You",
			line: "Remind me to call Mom tomorrow."
		},
		tone: "mkt-story-blue",
		tint: "mkt-story-tint-lavender",
		side: "left",
		kicker: "Thought → Task → Action"
	},
	{
		id: "memories",
		index: "03",
		eyebrow: "Personal Memories",
		icon: Bookmark,
		title: "Remember what matters.",
		copy: "Keep useful thoughts, ideas, moments, and information close so you can come back to them when you need them.",
		screen: "memories",
		moment: {
			from: "You",
			line: "Save this idea for later."
		},
		tone: "mkt-story-peach",
		side: "right",
		kicker: "Capture → Remember → Revisit"
	},
	{
		id: "voice",
		index: "04",
		eyebrow: "Voice Interaction",
		icon: Mic,
		title: "Sometimes, talking is easier.",
		copy: "Interact with PhoneX naturally using your voice when typing isn't the easiest way to communicate.",
		screen: "voice",
		moment: {
			from: "You",
			line: "What's next on my day?"
		},
		tone: "mkt-story-blue",
		tint: "mkt-story-tint-blue",
		side: "left",
		kicker: "Just talk."
	},
	{
		id: "insights",
		index: "05",
		eyebrow: "Life Insights",
		icon: ChartLine,
		title: "Understand your patterns.",
		copy: "See useful patterns across your routines, productivity, goals, and everyday activities.",
		screen: "insights",
		moment: {
			from: "You",
			line: "How productive was my week?"
		},
		tone: "mkt-story-mint",
		side: "left",
		kicker: "Manage your day. Then understand it."
	},
	{
		id: "clone",
		index: "06",
		eyebrow: "Personalized AI",
		icon: FingerprintPattern,
		title: "AI that becomes more personal over time.",
		copy: "PhoneX is designed to adapt around your preferences, context, and the way you interact with it.",
		screen: "clone",
		moment: {
			from: "PhoneX",
			line: "Personalized around you."
		},
		tone: "mkt-story-purple",
		tint: "mkt-story-tint-purple",
		side: "right",
		kicker: "Meet your AI Clone."
	}
];
function StoryBlock({ story, first }) {
	const { ref, shown } = useReveal(.14);
	const Icon = story.icon;
	const deviceLeft = story.side === "left";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("mkt-story mkt-inview relative py-14 md:py-16 lg:py-18", shown && "is-in", story.tone, story.tint),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			width: "wide",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mx-auto grid max-w-[960px] items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("max-w-[520px]", deviceLeft && "lg:order-2 lg:justify-self-end"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mkt-story-index text-[13px] font-medium tabular-nums tracking-[0.16em]",
								children: story.index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.14em]",
								children: story.eyebrow
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: cn("mkt-h2 mt-5 text-[clamp(1.5rem,1.1rem+1.1vw,2.05rem)] text-balance", first && "lg:text-balance"),
							children: story.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-lead mt-4 max-w-[460px]",
							children: story.copy
						}),
						story.kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-story-kicker mt-5 text-[13px] font-medium tracking-[0.02em]",
							children: story.kicker
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mkt-story-moment mt-7 inline-flex max-w-full items-start gap-3 rounded-2xl border px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mkt-story-from shrink-0 text-[11px] font-medium uppercase tracking-[0.12em]",
								children: story.moment.from
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 text-[14px] text-foreground/80",
								children: [
									"“",
									story.moment.line,
									"”"
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex justify-center", deviceLeft ? "lg:order-1" : ""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DeviceFrame, {
						className: "w-full max-w-[240px] sm:max-w-[252px]",
						glow: false,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-story-glow pointer-events-none absolute inset-[-24%] -z-10 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
							screen: story.screen,
							height: 844
						})]
					})
				})]
			})
		})
	});
}
/** Step 6 — detailed feature storytelling built around real PhoneX screens. */
function FeatureStories() {
	const intro = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "capabilities",
		size: "compact",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			width: "wide",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: intro.ref,
				className: cn("mkt-inview mx-auto max-w-[660px] text-center", intro.shown && "is-in"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.14em]",
						children: "Built around you"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mkt-h2 mt-6 text-balance",
						children: "Designed to be useful, not just impressive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-lead mx-auto mt-5 max-w-[540px]",
						children: "PhoneX brings practical AI into the moments where it can actually make your day easier."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: STORIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryBlock, {
				story: s,
				first: i === 0
			}, s.id))
		})]
	});
}
var CONCEPTS = [
	{
		key: "tasks",
		label: "Tasks",
		icon: ListChecks,
		tone: "mkt-why-blue",
		pos: "lg:left-0 lg:top-[6%]"
	},
	{
		key: "memories",
		label: "Memories",
		icon: Bookmark,
		tone: "mkt-why-peach",
		pos: "lg:right-0 lg:top-[6%]"
	},
	{
		key: "chat",
		label: "Conversations",
		icon: MessageCircle,
		tone: "mkt-why-lavender",
		pos: "lg:left-0 lg:bottom-[10%]"
	},
	{
		key: "insights",
		label: "Insights",
		icon: ChartLine,
		tone: "mkt-why-mint",
		pos: "lg:right-0 lg:bottom-[10%]"
	}
];
var DIFFERENTIATORS = [
	{
		index: "01",
		title: "Built around your everyday life.",
		copy: "PhoneX is designed around the things you actually do every day — not around a single task or conversation."
	},
	{
		index: "02",
		title: "One experience, not disconnected tools.",
		copy: "Your conversations, tasks, memories, and insights can live within one connected PhoneX experience."
	},
	{
		index: "03",
		title: "Becomes more personal over time.",
		copy: "PhoneX is designed to adapt around your preferences, context, and the way you use it."
	}
];
function ConceptChip({ label, Icon, tone, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mkt-why-chip inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium", tone, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mkt-why-chip-icon h-3.5 w-3.5",
			"aria-hidden": "true"
		}), label]
	});
}
/** Step 7 — Why PhoneX: scattered concepts converging into one experience. */
function WhyPhoneX() {
	const intro = useReveal();
	const diagram = useReveal(.12);
	const diffs = useReveal(.1);
	const compare = useReveal(.2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "why-phonex",
		className: "mkt-why relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: intro.ref,
					className: cn("mkt-inview mx-auto max-w-[680px] text-center", intro.shown && "is-in"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.14em]",
							children: "Why PhoneX"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mkt-h2 mt-6 text-balance",
							children: "Everything works better when it works together."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-lead mx-auto mt-5 max-w-[560px]",
							children: "PhoneX connects the everyday things you think about, remember, plan, and do into one personal experience."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: diagram.ref,
					className: cn("mkt-inview mt-12 lg:mt-14", diagram.shown && "is-in"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-[320px] flex-col items-center gap-2.5",
							children: [
								CONCEPTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptChip, {
									label: c.label,
									Icon: c.icon,
									tone: c.tone
								}, c.key)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mkt-why-rail h-10 w-px",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mkt-why-center text-[13px] font-semibold uppercase tracking-[0.14em]",
									children: "PhoneX"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 w-full max-w-[248px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DeviceFrame, {
										glow: false,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-why-glow pointer-events-none absolute inset-[-26%] -z-10 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
											screen: "home",
											height: 844
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mkt-body mt-4 text-center text-[13px]",
									children: "Different things in different places — brought into one connected experience."
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto hidden max-w-[1000px] lg:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "pointer-events-none absolute inset-0 h-full w-full",
								viewBox: "0 0 1000 620",
								preserveAspectRatio: "none",
								"aria-hidden": "true",
								children: [
									"M 190 96 C 330 150, 400 200, 470 270",
									"M 810 96 C 670 150, 600 200, 530 270",
									"M 190 528 C 330 470, 400 420, 470 356",
									"M 810 528 C 670 470, 600 420, 530 356"
								].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d,
									fill: "none",
									className: cn("mkt-why-line", diagram.shown && "is-in"),
									style: { animationDelay: `${.15 + i * .12}s` }
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid min-h-[560px] place-items-center",
								children: [CONCEPTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptChip, {
									label: c.label,
									Icon: c.icon,
									tone: c.tone,
									className: cn("absolute", c.pos)
								}, c.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-[250px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-why-glow pointer-events-none absolute inset-[-40%] -z-10 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceFrame, {
										glow: false,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
											screen: "home",
											height: 844
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mkt-body mt-2 text-center text-[13px]",
								children: "Different things in different places, brought into one connected PhoneX experience."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: diffs.ref,
					className: cn("mkt-inview mx-auto mt-16 max-w-[1000px] lg:mt-20", diffs.shown && "is-in"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12",
						children: DIFFERENTIATORS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "max-w-[320px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mkt-why-index text-[13px] font-medium tabular-nums tracking-[0.16em]",
									children: d.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mkt-h3 mt-3 text-[19px] text-balance",
									children: d.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mkt-body mt-2.5 text-[14px]",
									children: d.copy
								})
							]
						}, d.index))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: compare.ref,
					className: cn("mkt-inview mx-auto mt-16 max-w-[760px] text-center lg:mt-20", compare.shown && "is-in"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mkt-h3",
							children: "Less switching. More doing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mkt-why-compare rounded-3xl border p-6 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
									children: "Without PhoneX"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mkt-body mt-3 text-[15px] leading-relaxed",
									children: [
										"Think ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
										" Search ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
										" Switch app ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
										" Remember ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
										" Switch again"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mkt-why-compare mkt-why-compare-strong rounded-3xl border p-6 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mkt-why-center text-[11px] font-medium uppercase tracking-[0.14em]",
									children: "With PhoneX"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-[15px] font-medium leading-relaxed text-foreground",
									children: [
										"Think ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
										" PhoneX ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
										" Action"
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-body mt-10 text-[14px]",
							children: "Designed around the way you live."
						})
					]
				})
			]
		})
	});
}
function Sep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
		className: "mx-1.5 inline h-3.5 w-3.5 -translate-y-px text-muted-foreground/70",
		"aria-hidden": "true"
	});
}
var PRINCIPLES = [
	{
		index: "01",
		title: "You stay in control.",
		copy: "Your personal experience should remain yours, with clear controls over the information you choose to share and use."
	},
	{
		index: "02",
		title: "Privacy is part of the product.",
		copy: "Privacy should not feel like an afterthought. It is considered throughout the PhoneX experience."
	},
	{
		index: "03",
		title: "Clear about what matters.",
		copy: "PhoneX aims to make important choices and controls understandable, instead of hiding them behind complicated settings."
	}
];
/** Step 8 — Privacy / trust section. Calm, product-connected, no security clichés. */
function PrivacyTrust() {
	const intro = useReveal();
	const visual = useReveal(.12);
	const list = useReveal(.1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "privacy",
		className: "mkt-trust relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: intro.ref,
					className: cn("mkt-inview mx-auto max-w-[660px] text-center", intro.shown && "is-in"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.14em]",
							children: "Built with trust in mind"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mkt-h2 mt-6 text-balance",
							children: "Your personal AI should respect your privacy."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-lead mx-auto mt-5 max-w-[560px]",
							children: "PhoneX is being designed with privacy, transparency, and user control at the center of the experience."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: visual.ref,
					className: cn("mkt-inview mt-12 lg:mt-14", visual.shown && "is-in"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-[246px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DeviceFrame, {
							glow: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-trust-glow pointer-events-none absolute inset-[-30%] -z-10 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
								screen: "home",
								height: 844
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: list.ref,
					className: cn("mkt-inview mx-auto mt-14 grid max-w-[1000px] gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12", list.shown && "is-in"),
					children: PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[320px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mkt-trust-index text-[12px] font-semibold tracking-[0.18em]",
								children: p.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mkt-trust-rule mt-3 block h-px w-10",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mkt-h3 mt-4 text-[19px]",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mkt-body mt-2.5 text-[14px]",
								children: p.copy
							})
						]
					}, p.index))
				})
			]
		})
	});
}
/** Step 8 — Final conversion CTA. One dominant action, calm pastel environment. */
function FinalCTA() {
	const block = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "get-phonex",
		size: "compact",
		className: "mkt-cta relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mkt-cta-aura pointer-events-none absolute inset-x-0 top-0 -z-10 h-full",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: block.ref,
				className: cn("mkt-inview mx-auto max-w-[720px] text-center", block.shown && "is-in"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mkt-h2 text-balance",
						children: "Make your everyday life a little easier."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-lead mx-auto mt-5 max-w-[540px]",
						children: "Meet PhoneX — your personal AI companion for the things you think, plan, remember, and do every day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
							to: "/get-started",
							size: "lg",
							className: "w-full sm:w-auto",
							children: "Get PhoneX"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/features",
							className: "rounded-md px-1 py-1 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
							children: "Explore PhoneX"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mkt-body mt-6 text-[13px]",
						children: "Designed for everyday use."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mkt-cta-device relative mx-auto mt-12 w-full max-w-[236px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-cta-glow pointer-events-none absolute inset-[-34%] -z-10 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceFrame, {
					glow: false,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
						screen: "lifeSummary",
						height: 844
					})
				})]
			})]
		})]
	});
}
function MarketingHome() {
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant"
			});
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			size: "hero",
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				width: "wide",
				className: "grid items-center gap-14 lg:grid-cols-[minmax(0,50fr)_minmax(0,50fr)] lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mkt-reveal max-w-[560px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tracking-[0.14em] uppercase text-[11px]",
							children: "Meet PhoneX"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mkt-h1 mt-6 text-balance",
							children: [
								"Your everyday life,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" made easier by AI."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-lead mt-5 max-w-[480px]",
							children: "PhoneX is your personal AI companion that helps you organize your day, remember what matters, stay on track, and understand your life better."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
								to: "/get-started",
								size: "lg",
								children: "Get PhoneX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/features",
								hash: "how-it-works",
								className: "inline-flex h-13 items-center justify-center rounded-xl border border-border bg-card px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
								children: "See how it works"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-body mt-6 text-[13px]",
							children: "Private by design. Your day, your memories, your data."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mkt-reveal mkt-reveal-2 flex justify-center lg:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-[300px] sm:max-w-[325px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-hero-aura pointer-events-none absolute inset-[-28%] -z-10 rounded-full blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroDeviceVideo, { glow: false }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCallout, {
								className: "top-[12%] -left-6 mkt-reveal mkt-reveal-2 hidden md:flex lg:-left-[190px]",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-3.5 w-3.5 text-primary" }),
								label: "Plan your day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCallout, {
								className: "top-[46%] -right-6 mkt-reveal mkt-reveal-3 hidden md:flex lg:-left-[210px] lg:right-auto",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
								label: "Remember what matters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCallout, {
								className: "bottom-[14%] -left-4 mkt-reveal mkt-reveal-3 hidden lg:flex lg:-left-[180px]",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5 text-primary" }),
								label: "Understand your life"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatIsPhoneX, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayWithPhoneX, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhonexInAction, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureStories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyPhoneX, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyTrust, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
function HeroCallout({ className, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute z-10 items-center gap-2 rounded-full border border-border/70 bg-card/85 px-3.5 py-2 text-[13px] font-medium text-foreground/80 shadow-soft backdrop-blur-md ${className ?? ""}`,
		children: [icon, label]
	});
}
//#endregion
export { MarketingHome as component };
