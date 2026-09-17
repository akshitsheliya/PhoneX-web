import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ListChecks, Jt as Briefcase, Mt as Clock, Pt as CircleCheck, Qt as BookOpen, Y as MapPin, c as Users, jt as Coffee, wt as Dumbbell } from "../_libs/lucide-react.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-g_PHrWan.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BE51Wmct.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var DICT = {
	"Home": {
		Hindi: "होम",
		Arabic: "الرئيسية",
		Spanish: "Inicio",
		French: "Accueil",
		Chinese: "首页",
		Japanese: "ホーム",
		German: "Startseite"
	},
	"Life": {
		Hindi: "जीवन",
		Arabic: "الحياة",
		Spanish: "Vida",
		French: "Vie",
		Chinese: "生活",
		Japanese: "ライフ",
		German: "Leben"
	},
	"Memory": {
		Hindi: "यादें",
		Arabic: "الذكريات",
		Spanish: "Memoria",
		French: "Mémoire",
		Chinese: "记忆",
		Japanese: "メモリー",
		German: "Erinnerung"
	},
	"Profile": {
		Hindi: "प्रोफ़ाइल",
		Arabic: "الملف",
		Spanish: "Perfil",
		French: "Profil",
		Chinese: "个人",
		Japanese: "プロフィール",
		German: "Profil"
	},
	"Talk to PhoneX": {
		Hindi: "फ़ोनएक्स से बात करें",
		Arabic: "تحدث مع PhoneX",
		Spanish: "Habla con PhoneX",
		French: "Parler à PhoneX",
		Chinese: "与 PhoneX 对话",
		Japanese: "PhoneXと話す",
		German: "Mit PhoneX sprechen"
	},
	"Your AI life companion": {
		Hindi: "आपका एआई जीवन साथी",
		Arabic: "رفيقك الحياتي بالذكاء",
		Spanish: "Tu compañero de vida IA",
		French: "Votre compagnon de vie IA",
		Chinese: "您的AI生活伴侣",
		Japanese: "あなたのAIライフコンパニオン",
		German: "Dein KI-Lebensbegleiter"
	},
	"About PhoneX": {
		Hindi: "फ़ोनएक्स के बारे में",
		Arabic: "حول PhoneX",
		Spanish: "Acerca de PhoneX",
		French: "À propos de PhoneX",
		Chinese: "关于 PhoneX",
		Japanese: "PhoneXについて",
		German: "Über PhoneX"
	},
	"Subscription Details": {
		Hindi: "सदस्यता विवरण",
		Arabic: "تفاصيل الاشتراك",
		Spanish: "Detalles de suscripción",
		French: "Détails de l'abonnement",
		Chinese: "订阅详情",
		Japanese: "サブスクリプション詳細",
		German: "Abo-Details"
	},
	"PhoneX Personality": {
		Hindi: "फ़ोनएक्स व्यक्तित्व",
		Arabic: "شخصية PhoneX",
		Spanish: "Personalidad de PhoneX",
		French: "Personnalité PhoneX",
		Chinese: "PhoneX 性格",
		Japanese: "PhoneXパーソナリティ",
		German: "PhoneX Persönlichkeit"
	},
	"PhoneX learns from you privately. Conversations stay encrypted on-device.": {
		Hindi: "फ़ोनएक्स निजी तौर पर आपसे सीखता है। बातचीत डिवाइस पर एन्क्रिप्टेड रहती है।",
		Arabic: "يتعلم PhoneX منك بخصوصية. تبقى المحادثات مشفرة على الجهاز.",
		Spanish: "PhoneX aprende de ti en privado. Las conversaciones permanecen cifradas.",
		French: "PhoneX apprend de vous en privé. Les conversations restent chiffrées.",
		Chinese: "PhoneX 私密地向您学习。对话在设备上加密保存。",
		Japanese: "PhoneXは非公開で学びます。会話は端末で暗号化されます。",
		German: "PhoneX lernt privat. Gespräche bleiben verschlüsselt."
	},
	"Settings": {
		Hindi: "सेटिंग्स",
		Arabic: "الإعدادات",
		Spanish: "Ajustes",
		French: "Paramètres",
		Chinese: "设置",
		Japanese: "設定",
		German: "Einstellungen"
	},
	"Manage your PhoneX experience": {
		Hindi: "अपने फ़ोनएक्स अनुभव को प्रबंधित करें",
		Arabic: "أدر تجربة PhoneX",
		Spanish: "Gestiona tu experiencia PhoneX",
		French: "Gérez votre expérience PhoneX",
		Chinese: "管理您的 PhoneX 体验",
		Japanese: "PhoneX体験を管理",
		German: "Verwalte dein PhoneX-Erlebnis"
	},
	"Permissions": {
		Hindi: "अनुमतियाँ",
		Arabic: "الأذونات",
		Spanish: "Permisos",
		French: "Autorisations",
		Chinese: "权限",
		Japanese: "権限",
		German: "Berechtigungen"
	},
	"Access & privacy": {
		Hindi: "पहुँच और गोपनीयता",
		Arabic: "الوصول والخصوصية",
		Spanish: "Acceso y privacidad",
		French: "Accès et confidentialité",
		Chinese: "访问与隐私",
		Japanese: "アクセスとプライバシー",
		German: "Zugriff & Datenschutz"
	},
	"Language": {
		Hindi: "भाषा",
		Arabic: "اللغة",
		Spanish: "Idioma",
		French: "Langue",
		Chinese: "语言",
		Japanese: "言語",
		German: "Sprache"
	},
	"App & voice language": {
		Hindi: "ऐप और वॉइस भाषा",
		Arabic: "لغة التطبيق والصوت",
		Spanish: "Idioma de app y voz",
		French: "Langue app et voix",
		Chinese: "应用与语音语言",
		Japanese: "アプリと音声の言語",
		German: "App- & Sprachsprache"
	},
	"Logout": {
		Hindi: "लॉग आउट",
		Arabic: "تسجيل الخروج",
		Spanish: "Cerrar sesión",
		French: "Déconnexion",
		Chinese: "退出登录",
		Japanese: "ログアウト",
		German: "Abmelden"
	},
	"Choose how PhoneX speaks with you": {
		Hindi: "चुनें कि फ़ोनएक्स आपसे कैसे बात करे",
		Arabic: "اختر كيف يتحدث PhoneX معك",
		Spanish: "Elige cómo te habla PhoneX",
		French: "Choisissez comment PhoneX vous parle",
		Chinese: "选择 PhoneX 如何与您交谈",
		Japanese: "PhoneXの話し方を選択",
		German: "Wähle, wie PhoneX mit dir spricht"
	},
	"active": {
		Hindi: "सक्रिय",
		Arabic: "نشط",
		Spanish: "activo",
		French: "actif",
		Chinese: "在线",
		Japanese: "アクティブ",
		German: "aktiv"
	},
	"PhoneX Premium": {
		Hindi: "फ़ोनएक्स प्रीमियम",
		Arabic: "PhoneX بريميوم",
		Spanish: "PhoneX Premium",
		French: "PhoneX Premium",
		Chinese: "PhoneX 尊享",
		Japanese: "PhoneXプレミアム",
		German: "PhoneX Premium"
	},
	"Your AI companion is active": {
		Hindi: "आपका एआई साथी सक्रिय है",
		Arabic: "رفيقك الذكي نشط",
		Spanish: "Tu compañero IA está activo",
		French: "Votre compagnon IA est actif",
		Chinese: "您的 AI 伴侣已激活",
		Japanese: "AIコンパニオンが起動中",
		German: "Dein KI-Begleiter ist aktiv"
	},
	"How can I help you?": {
		Hindi: "मैं आपकी कैसे मदद कर सकता हूँ?",
		Arabic: "كيف يمكنني مساعدتك؟",
		Spanish: "¿Cómo puedo ayudarte?",
		French: "Comment puis-je vous aider ?",
		Chinese: "我能怎么帮您？",
		Japanese: "何をお手伝いしましょう？",
		German: "Wie kann ich helfen?"
	},
	"Plan my day": {
		Hindi: "मेरा दिन योजनाबद्ध करें",
		Arabic: "خطط ليومي",
		Spanish: "Planea mi día",
		French: "Planifier ma journée",
		Chinese: "规划我的一天",
		Japanese: "一日を計画",
		German: "Meinen Tag planen"
	},
	"Remember something": {
		Hindi: "कुछ याद रखें",
		Arabic: "تذكر شيئًا",
		Spanish: "Recuerda algo",
		French: "Se souvenir",
		Chinese: "记住某事",
		Japanese: "何かを記憶",
		German: "Etwas merken"
	},
	"Track my health": {
		Hindi: "मेरा स्वास्थ्य ट्रैक करें",
		Arabic: "تتبع صحتي",
		Spanish: "Rastrea mi salud",
		French: "Suivre ma santé",
		Chinese: "追踪健康",
		Japanese: "健康を記録",
		German: "Gesundheit verfolgen"
	},
	"Solve a problem": {
		Hindi: "समस्या हल करें",
		Arabic: "حل مشكلة",
		Spanish: "Resuelve un problema",
		French: "Résoudre un problème",
		Chinese: "解决问题",
		Japanese: "問題を解決",
		German: "Problem lösen"
	},
	"Talk": {
		Hindi: "बात करें",
		Arabic: "تحدث",
		Spanish: "Hablar",
		French: "Parler",
		Chinese: "对话",
		Japanese: "話す",
		German: "Sprechen"
	},
	"Chat": {
		Hindi: "चैट",
		Arabic: "محادثة",
		Spanish: "Chat",
		French: "Chat",
		Chinese: "聊天",
		Japanese: "チャット",
		German: "Chat"
	},
	"Today's life summary": {
		Hindi: "आज का जीवन सारांश",
		Arabic: "ملخص اليوم",
		Spanish: "Resumen de hoy",
		French: "Résumé du jour",
		Chinese: "今日生活摘要",
		Japanese: "今日のライフサマリー",
		German: "Tageszusammenfassung"
	},
	"80% productive": {
		Hindi: "80% उत्पादक",
		Arabic: "80% إنتاجية",
		Spanish: "80% productivo",
		French: "80% productif",
		Chinese: "80% 高效",
		Japanese: "80% 生産的",
		German: "80% produktiv"
	},
	"See all": {
		Hindi: "सभी देखें",
		Arabic: "عرض الكل",
		Spanish: "Ver todo",
		French: "Tout voir",
		Chinese: "查看全部",
		Japanese: "すべて表示",
		German: "Alle ansehen"
	},
	"Tasks": {
		Hindi: "कार्य",
		Arabic: "المهام",
		Spanish: "Tareas",
		French: "Tâches",
		Chinese: "任务",
		Japanese: "タスク",
		German: "Aufgaben"
	},
	"completed": {
		Hindi: "पूर्ण",
		Arabic: "مكتمل",
		Spanish: "completadas",
		French: "terminées",
		Chinese: "已完成",
		Japanese: "完了",
		German: "erledigt"
	},
	"Fitness": {
		Hindi: "फिटनेस",
		Arabic: "اللياقة",
		Spanish: "Fitness",
		French: "Fitness",
		Chinese: "健身",
		Japanese: "フィットネス",
		German: "Fitness"
	},
	"walked today": {
		Hindi: "आज चले",
		Arabic: "مشيت اليوم",
		Spanish: "hoy caminado",
		French: "marché aujourd'hui",
		Chinese: "今日步行",
		Japanese: "今日の歩行",
		German: "heute gelaufen"
	},
	"Mood": {
		Hindi: "मनोदशा",
		Arabic: "المزاج",
		Spanish: "Ánimo",
		French: "Humeur",
		Chinese: "心情",
		Japanese: "気分",
		German: "Stimmung"
	},
	"Calm": {
		Hindi: "शांत",
		Arabic: "هادئ",
		Spanish: "Tranquilo",
		French: "Calme",
		Chinese: "平静",
		Japanese: "穏やか",
		German: "Ruhig"
	},
	"balanced": {
		Hindi: "संतुलित",
		Arabic: "متوازن",
		Spanish: "equilibrado",
		French: "équilibré",
		Chinese: "平衡",
		Japanese: "バランス",
		German: "ausgeglichen"
	},
	"Memories": {
		Hindi: "यादें",
		Arabic: "الذكريات",
		Spanish: "Recuerdos",
		French: "Souvenirs",
		Chinese: "回忆",
		Japanese: "思い出",
		German: "Erinnerungen"
	},
	"3 saved": {
		Hindi: "3 सहेजे",
		Arabic: "3 محفوظة",
		Spanish: "3 guardados",
		French: "3 enregistrés",
		Chinese: "已保存 3 条",
		Japanese: "3件保存",
		German: "3 gespeichert"
	},
	"this week": {
		Hindi: "इस सप्ताह",
		Arabic: "هذا الأسبوع",
		Spanish: "esta semana",
		French: "cette semaine",
		Chinese: "本周",
		Japanese: "今週",
		German: "diese Woche"
	},
	"Next up · 11:30": {
		Hindi: "अगला · 11:30",
		Arabic: "التالي · 11:30",
		Spanish: "Siguiente · 11:30",
		French: "Suivant · 11:30",
		Chinese: "下一项 · 11:30",
		Japanese: "次 · 11:30",
		German: "Als Nächstes · 11:30"
	},
	"Open": {
		Hindi: "खोलें",
		Arabic: "افتح",
		Spanish: "Abrir",
		French: "Ouvrir",
		Chinese: "打开",
		Japanese: "開く",
		German: "Öffnen"
	},
	"Design review with Sarah & the product team": {
		Hindi: "सारा और प्रोडक्ट टीम के साथ डिज़ाइन समीक्षा",
		Arabic: "مراجعة تصميم مع سارة وفريق المنتج",
		Spanish: "Revisión de diseño con Sarah y el equipo",
		French: "Revue design avec Sarah et l'équipe produit",
		Chinese: "与 Sarah 及产品团队的设计评审",
		Japanese: "サラと製品チームとのデザインレビュー",
		German: "Design-Review mit Sarah & Produktteam"
	},
	"AI analyzing your life": {
		Hindi: "एआई आपके जीवन का विश्लेषण कर रहा है",
		Arabic: "الذكاء يحلل حياتك",
		Spanish: "IA analizando tu vida",
		French: "L'IA analyse votre vie",
		Chinese: "AI 正在分析您的生活",
		Japanese: "AIがあなたの生活を分析中",
		German: "KI analysiert dein Leben"
	},
	"Life Insights": {
		Hindi: "जीवन अंतर्दृष्टि",
		Arabic: "رؤى الحياة",
		Spanish: "Perspectivas de vida",
		French: "Aperçus de vie",
		Chinese: "生活洞察",
		Japanese: "ライフインサイト",
		German: "Lebens-Insights"
	},
	"Patterns, health, productivity & goals": {
		Hindi: "पैटर्न, स्वास्थ्य, उत्पादकता और लक्ष्य",
		Arabic: "الأنماط، الصحة، الإنتاجية والأهداف",
		Spanish: "Patrones, salud, productividad y metas",
		French: "Modèles, santé, productivité et objectifs",
		Chinese: "模式、健康、效率与目标",
		Japanese: "パターン、健康、生産性、目標",
		German: "Muster, Gesundheit, Produktivität & Ziele"
	},
	"Friday, January 17": {
		Hindi: "शुक्रवार, 17 जनवरी",
		Arabic: "الجمعة، 17 يناير",
		Spanish: "Viernes, 17 de enero",
		French: "Vendredi 17 janvier",
		Chinese: "1月17日 星期五",
		Japanese: "1月17日 金曜日",
		German: "Freitag, 17. Januar"
	},
	"Daily timeline": {
		Hindi: "दैनिक टाइमलाइन",
		Arabic: "الجدول اليومي",
		Spanish: "Cronología diaria",
		French: "Chronologie du jour",
		Chinese: "每日时间线",
		Japanese: "デイリータイムライン",
		German: "Tages-Zeitleiste"
	},
	"Goals": {
		Hindi: "लक्ष्य",
		Arabic: "الأهداف",
		Spanish: "Metas",
		French: "Objectifs",
		Chinese: "目标",
		Japanese: "目標",
		German: "Ziele"
	},
	"Smart suggestions": {
		Hindi: "स्मार्ट सुझाव",
		Arabic: "اقتراحات ذكية",
		Spanish: "Sugerencias",
		French: "Suggestions",
		Chinese: "智能建议",
		Japanese: "スマート提案",
		German: "Vorschläge"
	},
	"Complete your workout today": {
		Hindi: "आज अपना वर्कआउट पूरा करें",
		Arabic: "أكمل تمرينك اليوم",
		Spanish: "Completa tu ejercicio hoy",
		French: "Terminez votre séance aujourd'hui",
		Chinese: "今天完成锻炼",
		Japanese: "今日のワークアウトを完了",
		German: "Training heute abschließen"
	},
	"Review your weekly goals": {
		Hindi: "अपने साप्ताहिक लक्ष्य देखें",
		Arabic: "راجع أهدافك الأسبوعية",
		Spanish: "Revisa tus metas semanales",
		French: "Revoir vos objectifs de la semaine",
		Chinese: "回顾本周目标",
		Japanese: "週の目標を確認",
		German: "Wochenziele prüfen"
	},
	"Schedule family time on Sunday": {
		Hindi: "रविवार को परिवार का समय तय करें",
		Arabic: "خصص وقتًا للعائلة الأحد",
		Spanish: "Programa tiempo con la familia el domingo",
		French: "Planifier du temps en famille dimanche",
		Chinese: "周日安排家庭时间",
		Japanese: "日曜に家族の時間を計画",
		German: "Familienzeit am Sonntag planen"
	},
	"Career": {
		Hindi: "करियर",
		Arabic: "المهنة",
		Spanish: "Carrera",
		French: "Carrière",
		Chinese: "职业",
		Japanese: "キャリア",
		German: "Karriere"
	},
	"Learning": {
		Hindi: "सीखना",
		Arabic: "التعلم",
		Spanish: "Aprendizaje",
		French: "Apprentissage",
		Chinese: "学习",
		Japanese: "学習",
		German: "Lernen"
	},
	"Personal": {
		Hindi: "व्यक्तिगत",
		Arabic: "شخصي",
		Spanish: "Personal",
		French: "Personnel",
		Chinese: "个人",
		Japanese: "パーソナル",
		German: "Persönlich"
	},
	"Done": {
		Hindi: "पूर्ण",
		Arabic: "منجز",
		Spanish: "Hecho",
		French: "Fait",
		Chinese: "已完成",
		Japanese: "完了",
		German: "Fertig"
	},
	"Soon": {
		Hindi: "जल्द",
		Arabic: "قريبًا",
		Spanish: "Pronto",
		French: "Bientôt",
		Chinese: "即将",
		Japanese: "まもなく",
		German: "Bald"
	},
	"Upcoming": {
		Hindi: "आगामी",
		Arabic: "قادم",
		Spanish: "Próximo",
		French: "À venir",
		Chinese: "即将到来",
		Japanese: "予定",
		German: "Bevorstehend"
	},
	"Auto": {
		Hindi: "स्वतः",
		Arabic: "تلقائي",
		Spanish: "Auto",
		French: "Auto",
		Chinese: "自动",
		Japanese: "自動",
		German: "Auto"
	},
	"Memory timeline": {
		Hindi: "मेमोरी टाइमलाइन",
		Arabic: "خط الذكريات",
		Spanish: "Cronología de recuerdos",
		French: "Chronologie des souvenirs",
		Chinese: "记忆时间线",
		Japanese: "メモリータイムライン",
		German: "Erinnerungs-Zeitleiste"
	},
	"Moments PhoneX is keeping for you": {
		Hindi: "फ़ोनएक्स आपके लिए संजो रहा है",
		Arabic: "لحظات يحفظها PhoneX لك",
		Spanish: "Momentos que PhoneX guarda",
		French: "Moments que PhoneX garde pour vous",
		Chinese: "PhoneX 为您保存的时刻",
		Japanese: "PhoneXが保存する瞬間",
		German: "Momente, die PhoneX für dich bewahrt"
	},
	"All": {
		Hindi: "सभी",
		Arabic: "الكل",
		Spanish: "Todos",
		French: "Tous",
		Chinese: "全部",
		Japanese: "すべて",
		German: "Alle"
	},
	"Family": {
		Hindi: "परिवार",
		Arabic: "العائلة",
		Spanish: "Familia",
		French: "Famille",
		Chinese: "家庭",
		Japanese: "家族",
		German: "Familie"
	},
	"Health": {
		Hindi: "स्वास्थ्य",
		Arabic: "الصحة",
		Spanish: "Salud",
		French: "Santé",
		Chinese: "健康",
		Japanese: "健康",
		German: "Gesundheit"
	},
	"Travel": {
		Hindi: "यात्रा",
		Arabic: "السفر",
		Spanish: "Viajes",
		French: "Voyages",
		Chinese: "旅行",
		Japanese: "旅行",
		German: "Reisen"
	},
	"Ideas": {
		Hindi: "विचार",
		Arabic: "أفكار",
		Spanish: "Ideas",
		French: "Idées",
		Chinese: "想法",
		Japanese: "アイデア",
		German: "Ideen"
	},
	"Your PhoneX Dashboard": {
		Hindi: "आपका फ़ोनएक्स डैशबोर्ड",
		Arabic: "لوحة PhoneX الخاصة بك",
		Spanish: "Tu panel de PhoneX",
		French: "Votre tableau PhoneX",
		Chinese: "您的 PhoneX 面板",
		Japanese: "PhoneXダッシュボード",
		German: "Dein PhoneX-Dashboard"
	},
	"Everything your companion can do": {
		Hindi: "आपका साथी क्या-क्या कर सकता है",
		Arabic: "كل ما يستطيع رفيقك فعله",
		Spanish: "Todo lo que tu compañero puede hacer",
		French: "Tout ce que votre compagnon peut faire",
		Chinese: "您的伴侣可以做的一切",
		Japanese: "コンパニオンができるすべて",
		German: "Alles, was dein Begleiter kann"
	},
	"PhoneX features available": {
		Hindi: "फ़ोनएक्स सुविधाएँ",
		Arabic: "ميزات PhoneX المتاحة",
		Spanish: "Funciones disponibles",
		French: "Fonctionnalités disponibles",
		Chinese: "可用功能",
		Japanese: "利用可能な機能",
		German: "Verfügbare Funktionen"
	},
	"Personal growth": {
		Hindi: "व्यक्तिगत विकास",
		Arabic: "النمو الشخصي",
		Spanish: "Crecimiento personal",
		French: "Croissance personnelle",
		Chinese: "个人成长",
		Japanese: "パーソナル成長",
		German: "Persönliches Wachstum"
	},
	"On": {
		Hindi: "चालू",
		Arabic: "قيد التشغيل",
		Spanish: "Activo",
		French: "Activé",
		Chinese: "开启",
		Japanese: "オン",
		German: "An"
	},
	"Your data stays protected": {
		Hindi: "आपका डेटा सुरक्षित रहता है",
		Arabic: "بياناتك محمية",
		Spanish: "Tus datos están protegidos",
		French: "Vos données sont protégées",
		Chinese: "您的数据受保护",
		Japanese: "データは保護されています",
		German: "Deine Daten sind geschützt"
	},
	"Conversations are encrypted on-device. You decide what PhoneX remembers.": {
		Hindi: "बातचीत डिवाइस पर एन्क्रिप्टेड है। आप तय करते हैं फ़ोनएक्स क्या याद रखे।",
		Arabic: "المحادثات مشفرة على الجهاز. أنت تقرر ماذا يتذكر PhoneX.",
		Spanish: "Conversaciones cifradas en el dispositivo. Tú decides qué recuerda PhoneX.",
		French: "Conversations chiffrées sur l'appareil. Vous décidez de ce que PhoneX retient.",
		Chinese: "对话在设备上加密。您决定 PhoneX 记住什么。",
		Japanese: "会話は端末で暗号化。何を覚えるかはあなた次第。",
		German: "Gespräche sind auf dem Gerät verschlüsselt. Du entscheidest, was PhoneX behält."
	},
	"AI Assistant": {
		Hindi: "एआई सहायक",
		Arabic: "مساعد الذكاء",
		Spanish: "Asistente IA",
		French: "Assistant IA",
		Chinese: "AI 助手",
		Japanese: "AIアシスタント",
		German: "KI-Assistent"
	},
	"Always with you": {
		Hindi: "हमेशा आपके साथ",
		Arabic: "دائمًا معك",
		Spanish: "Siempre contigo",
		French: "Toujours avec vous",
		Chinese: "始终陪伴",
		Japanese: "いつも一緒に",
		German: "Immer bei dir"
	},
	"Personal Memory": {
		Hindi: "व्यक्तिगत स्मृति",
		Arabic: "الذاكرة الشخصية",
		Spanish: "Memoria personal",
		French: "Mémoire personnelle",
		Chinese: "个人记忆",
		Japanese: "パーソナルメモリー",
		German: "Persönliche Erinnerung"
	},
	"Remembers your life": {
		Hindi: "आपका जीवन याद रखता है",
		Arabic: "يتذكر حياتك",
		Spanish: "Recuerda tu vida",
		French: "Se souvient de votre vie",
		Chinese: "记住您的生活",
		Japanese: "あなたの生活を記憶",
		German: "Erinnert dein Leben"
	},
	"Voice Companion": {
		Hindi: "वॉइस साथी",
		Arabic: "رفيق صوتي",
		Spanish: "Compañero de voz",
		French: "Compagnon vocal",
		Chinese: "语音伴侣",
		Japanese: "音声コンパニオン",
		German: "Sprachbegleiter"
	},
	"Talk naturally": {
		Hindi: "स्वाभाविक रूप से बात करें",
		Arabic: "تحدث بطبيعية",
		Spanish: "Habla natural",
		French: "Parlez naturellement",
		Chinese: "自然对话",
		Japanese: "自然に話す",
		German: "Natürlich sprechen"
	},
	"Life Tracking": {
		Hindi: "जीवन ट्रैकिंग",
		Arabic: "تتبع الحياة",
		Spanish: "Seguimiento de vida",
		French: "Suivi de vie",
		Chinese: "生活追踪",
		Japanese: "ライフトラッキング",
		German: "Lebens-Tracking"
	},
	"Habits & wellbeing": {
		Hindi: "आदतें और भलाई",
		Arabic: "العادات والصحة",
		Spanish: "Hábitos y bienestar",
		French: "Habitudes et bien-être",
		Chinese: "习惯与健康",
		Japanese: "習慣とウェルビーイング",
		German: "Gewohnheiten & Wohlbefinden"
	},
	"Smart Recommendations": {
		Hindi: "स्मार्ट सिफ़ारिशें",
		Arabic: "توصيات ذكية",
		Spanish: "Recomendaciones",
		French: "Recommandations",
		Chinese: "智能推荐",
		Japanese: "スマート推奨",
		German: "Empfehlungen"
	},
	"Personalized for you": {
		Hindi: "आपके लिए वैयक्तिकृत",
		Arabic: "مخصص لك",
		Spanish: "Personalizado para ti",
		French: "Personnalisé pour vous",
		Chinese: "为您定制",
		Japanese: "あなた向けにカスタム",
		German: "Für dich personalisiert"
	},
	"Achievements": {
		Hindi: "उपलब्धियाँ",
		Arabic: "الإنجازات",
		Spanish: "Logros",
		French: "Réussites",
		Chinese: "成就",
		Japanese: "実績",
		German: "Erfolge"
	},
	"Daily progress": {
		Hindi: "दैनिक प्रगति",
		Arabic: "التقدم اليومي",
		Spanish: "Progreso diario",
		French: "Progrès quotidien",
		Chinese: "每日进度",
		Japanese: "毎日の進捗",
		German: "Tagesfortschritt"
	},
	"AI suggestions": {
		Hindi: "एआई सुझाव",
		Arabic: "اقتراحات الذكاء",
		Spanish: "Sugerencias IA",
		French: "Suggestions IA",
		Chinese: "AI 建议",
		Japanese: "AI提案",
		German: "KI-Vorschläge"
	},
	"5 active": {
		Hindi: "5 सक्रिय",
		Arabic: "5 نشط",
		Spanish: "5 activas",
		French: "5 actifs",
		Chinese: "5 项进行",
		Japanese: "5件アクティブ",
		German: "5 aktiv"
	},
	"12 earned": {
		Hindi: "12 अर्जित",
		Arabic: "12 مكتسب",
		Spanish: "12 obtenidos",
		French: "12 obtenus",
		Chinese: "已获 12",
		Japanese: "12件獲得",
		German: "12 erhalten"
	},
	"3 new": {
		Hindi: "3 नए",
		Arabic: "3 جديد",
		Spanish: "3 nuevas",
		French: "3 nouvelles",
		Chinese: "3 条新",
		Japanese: "3件新規",
		German: "3 neu"
	},
	"Listening…": {
		Hindi: "सुन रहा हूँ…",
		Arabic: "أستمع…",
		Spanish: "Escuchando…",
		French: "J'écoute…",
		Chinese: "正在聆听…",
		Japanese: "聞いています…",
		German: "Ich höre zu…"
	},
	"Hi Akshit, I'm here.": {
		Hindi: "नमस्ते अक्षित, मैं यहाँ हूँ।",
		Arabic: "مرحبًا أكشيت، أنا هنا.",
		Spanish: "Hola Akshit, estoy aquí.",
		French: "Salut Akshit, je suis là.",
		Chinese: "你好 Akshit，我在这里。",
		Japanese: "こんにちはAkshit、ここにいます。",
		German: "Hallo Akshit, ich bin da."
	},
	"Microphone": {
		Hindi: "माइक्रोफ़ोन",
		Arabic: "الميكروفون",
		Spanish: "Micrófono",
		French: "Microphone",
		Chinese: "麦克风",
		Japanese: "マイク",
		German: "Mikrofon"
	},
	"Stop": {
		Hindi: "रोकें",
		Arabic: "إيقاف",
		Spanish: "Detener",
		French: "Arrêter",
		Chinese: "停止",
		Japanese: "停止",
		German: "Stopp"
	}
};
for (const [key, value] of Object.entries({
	"Home": {
		Gujarati: "હોમ",
		Telugu: "హోమ్",
		Kannada: "ಹೋಮ್"
	},
	"Life": {
		Gujarati: "જીવન",
		Telugu: "జీవితం",
		Kannada: "ಜೀವನ"
	},
	"Memory": {
		Gujarati: "સ્મૃતિ",
		Telugu: "స్మృతి",
		Kannada: "ಸ್ಮರಣೆ"
	},
	"Profile": {
		Gujarati: "પ્રોફાઇલ",
		Telugu: "ప్రొఫైల్",
		Kannada: "ಪ್ರೊಫೈಲ್"
	},
	"Talk to PhoneX": {
		Gujarati: "PhoneX સાથે વાત કરો",
		Telugu: "PhoneXతో మాట్లాడండి",
		Kannada: "PhoneX ಜೊತೆ ಮಾತನಾಡಿ"
	},
	"Your AI life companion": {
		Gujarati: "તમારો AI જીવન સાથી",
		Telugu: "మీ AI జీవన తోడు",
		Kannada: "ನಿಮ್ಮ AI ಜೀವನ ಸಂಗಾತಿ"
	},
	"About PhoneX": {
		Gujarati: "PhoneX વિશે",
		Telugu: "PhoneX గురించి",
		Kannada: "PhoneX ಬಗ್ಗೆ"
	},
	"Subscription Details": {
		Gujarati: "સબ્સ્ક્રિપ્શન વિગતો",
		Telugu: "సభ్యత్వ వివరాలు",
		Kannada: "ಚಂದಾದಾರಿಕೆ ವಿವರಗಳು"
	},
	"PhoneX Personality": {
		Gujarati: "PhoneX વ્યક્તિત્વ",
		Telugu: "PhoneX వ్యక్తిత్వం",
		Kannada: "PhoneX ವ್ಯಕ್ತಿತ್ವ"
	},
	"PhoneX learns from you privately. Conversations stay encrypted on-device.": {
		Gujarati: "PhoneX ખાનગી રીતે તમારી પાસેથી શીખે છે. વાતચીત ડિવાઇસ પર એન્ક્રિપ્ટેડ રહે છે.",
		Telugu: "PhoneX మీ నుంచే ప్రైవేట్‌గా నేర్చుకుంటుంది. సంభాషణలు పరికరంలోనే గుప్తీకరించబడతాయి.",
		Kannada: "PhoneX ನಿಮ್ಮಿಂದ ಖಾಸಗಿಯಾಗಿ ಕಲಿಯುತ್ತದೆ. ಸಂಭಾಷಣೆಗಳು ಸಾಧನದಲ್ಲೇ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿರುತ್ತವೆ."
	},
	"Settings": {
		Gujarati: "સેટિંગ્સ",
		Telugu: "సెట్టింగ్స్",
		Kannada: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು"
	},
	"Manage your PhoneX experience": {
		Gujarati: "તમારા PhoneX અનુભવને સંચાલિત કરો",
		Telugu: "మీ PhoneX అనుభవాన్ని నిర్వహించండి",
		Kannada: "ನಿಮ್ಮ PhoneX ಅನುಭವವನ್ನು ನಿರ್ವಹಿಸಿ"
	},
	"Permissions": {
		Gujarati: "પરવાનગીઓ",
		Telugu: "అనుమతులు",
		Kannada: "ಅನುಮತಿಗಳು"
	},
	"Access & privacy": {
		Gujarati: "ઍક્સેસ અને ગોપનીયતા",
		Telugu: "ప్రవేశం & గోప్యత",
		Kannada: "ಪ್ರವೇಶ ಮತ್ತು ಗೌಪ್ಯತೆ"
	},
	"Language": {
		Gujarati: "ભાષા",
		Telugu: "భాష",
		Kannada: "ಭಾಷೆ"
	},
	"App & voice language": {
		Gujarati: "ઍપ અને અવાજની ભાષા",
		Telugu: "యాప్ & వాయిస్ భాష",
		Kannada: "ಅ್ಯಪ್ ಮತ್ತು ಧ್ವನಿ ಭಾಷೆ"
	},
	"Logout": {
		Gujarati: "લૉગ આઉટ",
		Telugu: "లాగ్ అవుట్",
		Kannada: "ಲಾಗ್ ಔಟ್"
	},
	"Choose how PhoneX speaks with you": {
		Gujarati: "PhoneX તમારી સાથે કેવી રીતે બોલે તે પસંદ કરો",
		Telugu: "PhoneX మీతో ఎలా మాట్లాడాలో ఎంచుకోండి",
		Kannada: "PhoneX ನಿಮ್ಮೊಂದಿಗೆ ಹೇಗೆ ಮಾತನಾಡಬೇಕು ಆಯ್ಕೆಮಾಡಿ"
	},
	"active": {
		Gujarati: "સક્રિય",
		Telugu: "సక్రియం",
		Kannada: "ಸಕ್ರಿಯ"
	},
	"PhoneX Premium": {
		Gujarati: "PhoneX પ્રીમિયમ",
		Telugu: "PhoneX ప్రీమియం",
		Kannada: "PhoneX ಪ್ರೀಮಿಯಂ"
	},
	"Your AI companion is active": {
		Gujarati: "તમારો AI સાથી સક્રિય છે",
		Telugu: "మీ AI తోడు సక్రియంగా ఉంది",
		Kannada: "ನಿಮ್ಮ AI ಸಂಗಾತಿ ಸಕ್ರಿಯವಾಗಿದೆ"
	},
	"How can I help you?": {
		Gujarati: "હું તમને કેવી રીતે મદદ કરી શકું?",
		Telugu: "నేను మీకు ఎలా సహాయం చేయగలను?",
		Kannada: "ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?"
	},
	"Plan my day": {
		Gujarati: "મારો દિવસ આયોજન કરો",
		Telugu: "నా రోజును ప్లాన్ చేయండి",
		Kannada: "ನನ್ನ ದಿನವನ್ನು ಯೋಜಿಸಿ"
	},
	"Remember something": {
		Gujarati: "કંઈક યાદ રાખો",
		Telugu: "ఏదైనా గుర్తుంచుకోండి",
		Kannada: "ಏನನ್ನಾದರೂ ನೆನಪಿಡಿ"
	},
	"Track my health": {
		Gujarati: "મારું આરોગ્ય ટ્રૅક કરો",
		Telugu: "నా ఆరోగ్యాన్ని ట్రాక్ చేయండి",
		Kannada: "ನನ್ನ ಆರೋಗ್ಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"
	},
	"Solve a problem": {
		Gujarati: "સમસ્યા ઉકેલો",
		Telugu: "సమస్యను పరిష్కరించండి",
		Kannada: "ಸಮಸ್ಯೆ ಪರಿಹರಿಸಿ"
	},
	"Talk": {
		Gujarati: "વાત કરો",
		Telugu: "మాట్లాడు",
		Kannada: "ಮಾತನಾಡಿ"
	},
	"Chat": {
		Gujarati: "ચેટ",
		Telugu: "చాట్",
		Kannada: "ಚಾಟ್"
	},
	"Today's life summary": {
		Gujarati: "આજનું જીવન સારાંશ",
		Telugu: "నేటి జీవన సారాంశం",
		Kannada: "ಇಂದಿನ ಜೀವನ ಸಾರಾಂಶ"
	},
	"80% productive": {
		Gujarati: "80% ઉત્પાદક",
		Telugu: "80% ఉత్పాదకంగా",
		Kannada: "80% ಉತ್ಪಾದಕ"
	},
	"See all": {
		Gujarati: "બધું જુઓ",
		Telugu: "అన్నీ చూడండి",
		Kannada: "ಎಲ್ಲ ನೋಡಿ"
	},
	"Tasks": {
		Gujarati: "કાર્યો",
		Telugu: "పనులు",
		Kannada: "ಕೆಲಸಗಳು"
	},
	"completed": {
		Gujarati: "પૂર્ણ",
		Telugu: "పూర్తయ్యాయి",
		Kannada: "ಪೂರ್ಣಗೊಂಡಿವೆ"
	},
	"Fitness": {
		Gujarati: "ફિટનેસ",
		Telugu: "ఫిట్‌నెస్",
		Kannada: "ಫಿಟ್ನೆಸ್"
	},
	"walked today": {
		Gujarati: "આજે ચાલ્યા",
		Telugu: "ఈరోజు నడిచారు",
		Kannada: "ಇಂದು ನಡೆದದ್ದು"
	},
	"Mood": {
		Gujarati: "મૂડ",
		Telugu: "మనోభావం",
		Kannada: "ಮನಸ್ಥಿತಿ"
	},
	"Calm": {
		Gujarati: "શાંત",
		Telugu: "శాంతంగా",
		Kannada: "ಶಾಂತ"
	},
	"balanced": {
		Gujarati: "સંતુલિત",
		Telugu: "సమతుల్యం",
		Kannada: "ಸಮತೋಲಿತ"
	},
	"Memories": {
		Gujarati: "યાદો",
		Telugu: "జ్ఞాపకాలు",
		Kannada: "ನೆನಪುಗಳು"
	},
	"3 saved": {
		Gujarati: "3 સાચવ્યા",
		Telugu: "3 సేవ్ అయ్యాయి",
		Kannada: "3 ಉಳಿಸಲಾಗಿದೆ"
	},
	"this week": {
		Gujarati: "આ અઠવાડિયે",
		Telugu: "ఈ వారం",
		Kannada: "ಈ ವಾರ"
	},
	"Next up · 11:30": {
		Gujarati: "આગળ · 11:30",
		Telugu: "తర్వాత · 11:30",
		Kannada: "ಮುಂದೆ · 11:30"
	},
	"Open": {
		Gujarati: "ખોલો",
		Telugu: "తెరవండి",
		Kannada: "ತೆರೆಯಿರಿ"
	},
	"Design review with Sarah & the product team": {
		Gujarati: "સારા અને પ્રોડક્ટ ટીમ સાથે ડિઝાઇન સમીક્ષા",
		Telugu: "సారా మరియు ఉత్పత్తి బృందంతో డిజైన్ సమీక్ష",
		Kannada: "ಸಾರಾ ಮತ್ತು ಉತ್ಪನ್ನ ತಂಡದೊಂದಿಗೆ ವಿನ್ಯಾಸ ವಿಮರ್ಶೆ"
	},
	"AI analyzing your life": {
		Gujarati: "AI તમારા જીવનનું વિશ્લેષણ કરી રહ્યું છે",
		Telugu: "AI మీ జీవితాన్ని విశ్లేషిస్తోంది",
		Kannada: "AI ನಿಮ್ಮ ಜೀವನವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ"
	},
	"Life Insights": {
		Gujarati: "જીવન અંતર્દૃષ્ટિ",
		Telugu: "జీవన అంతర్దృష్టులు",
		Kannada: "ಜೀವನ ಒಳನೋಟಗಳು"
	},
	"Patterns, health, productivity & goals": {
		Gujarati: "પેટર્ન, આરોગ્ય, ઉત્પાદકતા અને લક્ષ્યો",
		Telugu: "నమూనాలు, ఆరోగ్యం, ఉత్పాదకత & లక్ష్యాలు",
		Kannada: "ಮಾದರಿಗಳು, ಆರೋಗ್ಯ, ಉತ್ಪಾದಕತೆ ಮತ್ತು ಗುರಿಗಳು"
	},
	"Friday, January 17": {
		Gujarati: "શુક્રવાર, 17 જાન્યુઆરી",
		Telugu: "శుక్రవారం, జనవరి 17",
		Kannada: "ಶುಕ್ರವಾರ, ಜನವರಿ 17"
	},
	"Daily timeline": {
		Gujarati: "દૈનિક સમયરેખા",
		Telugu: "రోజువారీ టైమ్‌లైన్",
		Kannada: "ದೈನಂದಿನ ಸಮಯರೇಖೆ"
	},
	"Goals": {
		Gujarati: "લક્ષ્યો",
		Telugu: "లక్ష్యాలు",
		Kannada: "ಗುರಿಗಳು"
	},
	"Smart suggestions": {
		Gujarati: "સ્માર્ટ સૂચનો",
		Telugu: "స్మార్ట్ సూచనలు",
		Kannada: "ಸ್ಮಾರ್ಟ್ ಸಲಹೆಗಳು"
	},
	"Complete your workout today": {
		Gujarati: "આજે તમારો વર્કઆઉટ પૂર્ણ કરો",
		Telugu: "ఈరోజు మీ వ్యాయామాన్ని పూర్తి చేయండి",
		Kannada: "ಇಂದು ನಿಮ್ಮ ವ್ಯಾಯಾಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ"
	},
	"Review your weekly goals": {
		Gujarati: "તમારા સાપ્તાહિક લક્ષ્યો સમીક્ષો",
		Telugu: "మీ వారపు లక్ష్యాలను సమీక్షించండి",
		Kannada: "ನಿಮ್ಮ ವಾರದ ಗುರಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ"
	},
	"Schedule family time on Sunday": {
		Gujarati: "રવિવારે પરિવાર સમય શેડ્યૂલ કરો",
		Telugu: "ఆదివారం కుటుంబ సమయాన్ని షెడ్యూల్ చేయండి",
		Kannada: "ಭಾನುವಾರ ಕುಟುಂಬ ಸಮಯ ನಿಗದಿ ಮಾಡಿ"
	},
	"Career": {
		Gujarati: "કારકિર્દી",
		Telugu: "వృత్తి",
		Kannada: "ವೃತ್ತಿ"
	},
	"Learning": {
		Gujarati: "શીખવું",
		Telugu: "అభ్యాసం",
		Kannada: "ಕಲಿಕೆ"
	},
	"Personal": {
		Gujarati: "વ્યક્તિગત",
		Telugu: "వ్యక్తిగత",
		Kannada: "ವೈಯಕ್ತಿಕ"
	},
	"Done": {
		Gujarati: "પૂર્ણ",
		Telugu: "పూర్తి",
		Kannada: "ಮುಗಿದಿದೆ"
	},
	"Soon": {
		Gujarati: "જલ્દી",
		Telugu: "త్వరలో",
		Kannada: "ಶೀಘ್ರದಲ್ಲೇ"
	},
	"Upcoming": {
		Gujarati: "આગામી",
		Telugu: "రాబోయే",
		Kannada: "ಮುಂಬರುವ"
	},
	"Auto": {
		Gujarati: "ઑટો",
		Telugu: "ఆటో",
		Kannada: "ಆಟೋ"
	},
	"Memory timeline": {
		Gujarati: "સ્મૃતિ સમયરેખા",
		Telugu: "స్మృతి టైమ్‌లైన్",
		Kannada: "ಸ್ಮರಣೆ ಸಮಯರೇಖೆ"
	},
	"Moments PhoneX is keeping for you": {
		Gujarati: "PhoneX તમારા માટે સાચવી રહેલા પળો",
		Telugu: "PhoneX మీ కోసం నిల్వ చేస్తున్న క్షణాలు",
		Kannada: "PhoneX ನಿಮಗಾಗಿ ಉಳಿಸುವ ಕ್ಷಣಗಳು"
	},
	"All": {
		Gujarati: "બધું",
		Telugu: "అన్నీ",
		Kannada: "ಎಲ್ಲ"
	},
	"Family": {
		Gujarati: "પરિવાર",
		Telugu: "కుటుంబం",
		Kannada: "ಕುಟುಂಬ"
	},
	"Health": {
		Gujarati: "આરોગ્ય",
		Telugu: "ఆరోగ్యం",
		Kannada: "ಆರೋಗ್ಯ"
	},
	"Travel": {
		Gujarati: "મુસાફરી",
		Telugu: "ప్రయాణం",
		Kannada: "ಪ್ರಯಾಣ"
	},
	"Ideas": {
		Gujarati: "વિચારો",
		Telugu: "ఆలోచనలు",
		Kannada: "ಆಲೋಚನೆಗಳು"
	},
	"Your PhoneX Dashboard": {
		Gujarati: "તમારું PhoneX ડૅશબોર્ડ",
		Telugu: "మీ PhoneX డ్యాష్‌బోర్డ్",
		Kannada: "ನಿಮ್ಮ PhoneX ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"
	},
	"Everything your companion can do": {
		Gujarati: "તમારો સાથી કરી શકે તેવી દરેક વસ્તુ",
		Telugu: "మీ తోడు చేయగల ప్రతిదీ",
		Kannada: "ನಿಮ್ಮ ಸಂಗಾತಿ ಮಾಡಬಹುದಾದ ಎಲ್ಲವೂ"
	},
	"PhoneX features available": {
		Gujarati: "PhoneX સુવિધાઓ ઉપલબ્ધ",
		Telugu: "PhoneX ఫీచర్లు అందుబాటులో",
		Kannada: "PhoneX ವೈಶಿಷ್ಟ್ಯಗಳು ಲಭ್ಯ"
	},
	"Personal growth": {
		Gujarati: "વ્યક્તિગત વૃદ્ધિ",
		Telugu: "వ్యక్తిగత వృద్ధి",
		Kannada: "ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆ"
	},
	"On": {
		Gujarati: "ચાલુ",
		Telugu: "ఆన్",
		Kannada: "ಆನ್"
	},
	"Your data stays protected": {
		Gujarati: "તમારો ડેટા સુરક્ષિત રહે છે",
		Telugu: "మీ డేటా రక్షితంగా ఉంటుంది",
		Kannada: "ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿರುತ್ತದೆ"
	},
	"Conversations are encrypted on-device. You decide what PhoneX remembers.": {
		Gujarati: "વાતચીત ડિવાઇસ પર એન્ક્રિપ્ટેડ છે. PhoneX શું યાદ રાખે તે તમે નક્કી કરો.",
		Telugu: "సంభాషణలు పరికరంలో గుప్తీకరించబడ్డాయి. PhoneX ఏమి గుర్తుంచుకోవాలో మీరు నిర్ణయిస్తారు.",
		Kannada: "ಸಂಭಾಷಣೆಗಳು ಸಾಧನದಲ್ಲೇ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿವೆ. PhoneX ಏನು ನೆನಪಿಡಬೇಕು ಎಂದು ನೀವು ತೀರ್ಮಾನಿಸುತ್ತೀರಿ."
	},
	"AI Assistant": {
		Gujarati: "AI સહાયક",
		Telugu: "AI సహాయకుడు",
		Kannada: "AI ಸಹಾಯಕ"
	},
	"Always with you": {
		Gujarati: "હંમેશા તમારી સાથે",
		Telugu: "ఎల్లప్పుడూ మీతో",
		Kannada: "ಯಾವಾಗಲೂ ನಿಮ್ಮೊಂದಿಗೆ"
	},
	"Personal Memory": {
		Gujarati: "વ્યક્તિગત સ્મૃતિ",
		Telugu: "వ్యక్తిగత స్మృతి",
		Kannada: "ವೈಯಕ್ತಿಕ ಸ್ಮರಣೆ"
	},
	"Remembers your life": {
		Gujarati: "તમારું જીવન યાદ રાખે છે",
		Telugu: "మీ జీవితాన్ని గుర్తుంచుకుంటుంది",
		Kannada: "ನಿಮ್ಮ ಜೀವನವನ್ನು ನೆನಪಿಡುತ್ತದೆ"
	},
	"Voice Companion": {
		Gujarati: "અવાજ સાથી",
		Telugu: "వాయిస్ తోడు",
		Kannada: "ಧ್ವನಿ ಸಂಗಾತಿ"
	},
	"Talk naturally": {
		Gujarati: "સ્વાભાવિક રીતે વાત કરો",
		Telugu: "సహజంగా మాట్లాడండి",
		Kannada: "ಸ್ವಾಭಾವಿಕವಾಗಿ ಮಾತನಾಡಿ"
	},
	"Life Tracking": {
		Gujarati: "જીવન ટ્રેકિંગ",
		Telugu: "జీవిత ట్రాకింగ్",
		Kannada: "ಜೀವನ ಟ್ರ್ಯಾಕಿಂಗ್"
	},
	"Habits & wellbeing": {
		Gujarati: "આદતો અને સુખાકારી",
		Telugu: "అలవాట్లు & శ్రేయస్సు",
		Kannada: "ಅಭ್ಯಾಸಗಳು ಮತ್ತು ಕ್ಷೇಮ"
	},
	"Smart Recommendations": {
		Gujarati: "સ્માર્ટ ભલામણો",
		Telugu: "స్మార్ట్ సిఫార్సులు",
		Kannada: "ಸ್ಮಾರ್ಟ್ ಶಿಫಾರಸುಗಳು"
	},
	"Personalized for you": {
		Gujarati: "તમારા માટે વ્યક્તિગત",
		Telugu: "మీ కోసం వ్యక్తిగతీకరించబడింది",
		Kannada: "ನಿಮಗಾಗಿ ವೈಯಕ್ತೀಕರಿಸಲಾಗಿದೆ"
	},
	"Achievements": {
		Gujarati: "સિદ્ધિઓ",
		Telugu: "సాధనలు",
		Kannada: "ಸಾಧನೆಗಳು"
	},
	"Daily progress": {
		Gujarati: "દૈનિક પ્રગતિ",
		Telugu: "రోజువారీ పురోగతి",
		Kannada: "ದೈನಂದಿನ ಪ್ರಗತಿ"
	},
	"AI suggestions": {
		Gujarati: "AI સૂચનો",
		Telugu: "AI సూచనలు",
		Kannada: "AI ಸಲಹೆಗಳು"
	},
	"5 active": {
		Gujarati: "5 સક્રિય",
		Telugu: "5 సక్రియం",
		Kannada: "5 ಸಕ್ರಿಯ"
	},
	"12 earned": {
		Gujarati: "12 મેળવ્યા",
		Telugu: "12 సంపాదించారు",
		Kannada: "12 ಗಳಿಸಲಾಗಿದೆ"
	},
	"3 new": {
		Gujarati: "3 નવા",
		Telugu: "3 కొత్తవి",
		Kannada: "3 ಹೊಸವು"
	},
	"Listening…": {
		Gujarati: "સાંભળી રહ્યો છું…",
		Telugu: "వింటున్నాను…",
		Kannada: "ಕೇಳುತ್ತಿದ್ದೇನೆ…"
	},
	"Hi Akshit, I'm here.": {
		Gujarati: "હાય અક્ષિત, હું અહીં છું.",
		Telugu: "హాయ్ అక్షిత్, నేను ఇక్కడ ఉన్నాను.",
		Kannada: "ಹಾಯ್ ಅಕ್ಷಿತ್, ನಾನು ಇಲ್ಲಿದ್ದೇನೆ."
	},
	"Microphone": {
		Gujarati: "માઇક્રોફોન",
		Telugu: "మైక్రోఫోన్",
		Kannada: "ಮೈಕ್ರೋಫೋನ್"
	},
	"Stop": {
		Gujarati: "રોકો",
		Telugu: "ఆపు",
		Kannada: "ನಿಲ್ಲಿಸಿ"
	},
	"Online": {
		Hindi: "ऑनलाइन",
		Gujarati: "ઑનલાઇન",
		Telugu: "ఆన్‌లైన్",
		Kannada: "ಆನ್‌ಲೈನ್",
		Arabic: "متصل",
		Spanish: "en línea",
		French: "en ligne",
		Chinese: "在线",
		Japanese: "オンライン",
		German: "online"
	},
	"online": {
		Hindi: "ऑनलाइन",
		Gujarati: "ઑનલાઇન",
		Telugu: "ఆన్‌లైన్",
		Kannada: "ಆನ್‌ಲೈನ್",
		Arabic: "متصل",
		Spanish: "en línea",
		French: "en ligne",
		Chinese: "在线",
		Japanese: "オンライン",
		German: "online"
	},
	"Message PhoneX…": {
		Hindi: "PhoneX को संदेश…",
		Gujarati: "PhoneX ને સંદેશ…",
		Telugu: "PhoneXకు సందేశం…",
		Kannada: "PhoneX ಗೆ ಸಂದೇಶ…",
		Arabic: "راسل PhoneX…",
		Spanish: "Mensaje a PhoneX…",
		French: "Message à PhoneX…",
		Chinese: "给 PhoneX 发消息…",
		Japanese: "PhoneXにメッセージ…",
		German: "PhoneX schreiben…"
	},
	"Got it. I've saved that for you.": {
		Hindi: "समझ गया। मैंने इसे आपके लिए सहेज लिया है।",
		Gujarati: "સમજાયું. મેં તે તમારા માટે સાચવી દીધું છે.",
		Telugu: "అర్థమైంది. దాన్ని మీ కోసం సేవ్ చేశాను.",
		Kannada: "ಅರ್ಥವಾಯಿತು. ಅದನ್ನು ನಿಮಗಾಗಿ ಉಳಿಸಿದ್ದೇನೆ.",
		Arabic: "تم. حفظت ذلك لك.",
		Spanish: "Entendido. Lo guardé para ti.",
		French: "Compris. Je l'ai enregistré pour vous.",
		Chinese: "收到。我已为您保存。",
		Japanese: "了解しました。保存しました。",
		German: "Verstanden. Ich habe es für dich gespeichert."
	},
	"Hi Akshit, I'm here. What's on your mind today?": {
		Hindi: "नमस्ते अक्षित, मैं यहाँ हूँ। आज आपके मन में क्या है?",
		Gujarati: "હાય અક્ષિત, હું અહીં છું. આજે તમારા મનમાં શું છે?",
		Telugu: "హాయ్ అక్షిత్, నేను ఇక్కడున్నాను. ఈరోజు మీ మనసులో ఏముంది?",
		Kannada: "ಹಾಯ್ ಅಕ್ಷಿತ್, ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ಇಂದು ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಏನು ಇದೆ?",
		Arabic: "مرحبًا أكشيت، أنا هنا. ما الذي يشغل بالك اليوم؟",
		Spanish: "Hola Akshit, estoy aquí. ¿Qué tienes en mente hoy?",
		French: "Salut Akshit, je suis là. Qu'avez-vous en tête aujourd'hui ?",
		Chinese: "你好 Akshit，我在。今天想聊什么？",
		Japanese: "こんにちはAkshit、ここにいます。今日は何を考えていますか？",
		German: "Hallo Akshit, ich bin da. Was beschäftigt dich heute?"
	},
	"Remind me to call Mom this evening.": {
		Hindi: "आज शाम माँ को कॉल करने की याद दिलाना।",
		Gujarati: "આજે સાંજે મમ્મીને કૉલ કરવાનું યાદ કરાવજો.",
		Telugu: "ఈ సాయంత్రం అమ్మకు కాల్ చేయమని గుర్తు చేయండి.",
		Kannada: "ಇಂದು ಸಂಜೆ ಅಮ್ಮಗೆ ಕರೆ ಮಾಡಲು ನೆನಪಿಸಿ.",
		Arabic: "ذكرني بالاتصال بأمي هذا المساء.",
		Spanish: "Recuérdame llamar a mamá esta tarde.",
		French: "Rappelle-moi d'appeler maman ce soir.",
		Chinese: "提醒我今晚给妈妈打电话。",
		Japanese: "今晩母に電話するようリマインドして。",
		German: "Erinnere mich daran, heute Abend Mama anzurufen."
	},
	"Done. I'll remind you at 7pm — and I'll keep her favourite topics nearby.": {
		Hindi: "हो गया। मैं आपको शाम 7 बजे याद दिलाऊँगा — और उनके पसंदीदा विषय पास रखूँगा।",
		Gujarati: "થઈ ગયું. હું તમને સાંજે 7 વાગ્યે યાદ કરાવીશ — અને તેમના મનપસંદ વિષયો નજીક રાખીશ.",
		Telugu: "పూర్తయింది. రాత్రి 7 గంటలకు గుర్తు చేస్తాను — ఆమెకు ఇష్టమైన విషయాలను దగ్గర ఉంచుతాను.",
		Kannada: "ಮುಗಿದಿದೆ. ಸಂಜೆ 7ಕ್ಕೆ ನೆನಪಿಸುತ್ತೇನೆ — ಅವಳಿಗೆ ಇಷ್ಟವಾದ ವಿಷಯಗಳನ್ನು ಸಿದ್ಧವಾಗಿಡುತ್ತೇನೆ.",
		Arabic: "تم. سأذكرك الساعة 7 مساءً — وسأبقي مواضيعها المفضلة قريبة.",
		Spanish: "Listo. Te recordaré a las 7 p. m. y tendré cerca sus temas favoritos.",
		French: "C'est fait. Je vous le rappellerai à 19 h — avec ses sujets préférés à portée.",
		Chinese: "完成。我会在晚上7点提醒您，并准备好她喜欢的话题。",
		Japanese: "完了。午後7時にリマインドし、彼女の好きな話題も用意しておきます。",
		German: "Erledigt. Ich erinnere dich um 19 Uhr und halte ihre Lieblingsthemen bereit."
	},
	"Knowledge Vault": {
		Hindi: "ज्ञान वॉल्ट",
		Gujarati: "જ્ઞાન વૉલ્ટ",
		Telugu: "జ్ఞాన వాల్ట్",
		Kannada: "ಜ್ಞಾನ ವಾಲ್ಟ್",
		Arabic: "خزنة المعرفة",
		Spanish: "Bóveda de conocimiento",
		French: "Coffre de connaissances",
		Chinese: "知识库",
		Japanese: "ナレッジ保管庫",
		German: "Wissens-Tresor"
	},
	"Recall your life": {
		Hindi: "अपना जीवन याद करें",
		Gujarati: "તમારું જીવન યાદ કરો",
		Telugu: "మీ జీవితాన్ని గుర్తు చేసుకోండి",
		Kannada: "ನಿಮ್ಮ ಜೀವನವನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳಿ",
		Arabic: "استرجع حياتك",
		Spanish: "Recuerda tu vida",
		French: "Rappelez votre vie",
		Chinese: "回顾你的生活",
		Japanese: "人生を思い出す",
		German: "Dein Leben abrufen"
	},
	"Features of PhoneX": {
		Hindi: "PhoneX की सुविधाएँ",
		Gujarati: "PhoneX સુવિધાઓ",
		Telugu: "PhoneX ఫీచర్లు",
		Kannada: "PhoneX ವೈಶಿಷ್ಟ್ಯಗಳು",
		Arabic: "ميزات PhoneX",
		Spanish: "Funciones de PhoneX",
		French: "Fonctionnalités de PhoneX",
		Chinese: "PhoneX 功能",
		Japanese: "PhoneXの機能",
		German: "PhoneX-Funktionen"
	},
	"Explore PhoneX": {
		Hindi: "PhoneX एक्सप्लोर करें",
		Gujarati: "PhoneX શોધો",
		Telugu: "PhoneXని అన్వేషించండి",
		Kannada: "PhoneX ಅನ್ವೇಷಿಸಿ",
		Arabic: "استكشف PhoneX",
		Spanish: "Explora PhoneX",
		French: "Explorer PhoneX",
		Chinese: "探索 PhoneX",
		Japanese: "PhoneXを探索",
		German: "PhoneX entdecken"
	},
	"Your personal operating system": {
		Hindi: "आपका व्यक्तिगत ऑपरेटिंग सिस्टम",
		Gujarati: "તમારી વ્યક્તિગત ઑપરેટિંગ સિસ્ટમ",
		Telugu: "మీ వ్యక్తిగత ఆపరేటింగ్ సిస్టమ్",
		Kannada: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್",
		Arabic: "نظامك الشخصي",
		Spanish: "Tu sistema operativo personal",
		French: "Votre système d'exploitation personnel",
		Chinese: "您的个人操作系统",
		Japanese: "あなた専用のOS",
		German: "Dein persönliches Betriebssystem"
	},
	"Agent automations": {
		Hindi: "एजेंट ऑटोमेशन",
		Gujarati: "એજન્ટ ઓટોમેશન",
		Telugu: "ఏజెంట్ ఆటోమేషన్లు",
		Kannada: "ಏಜೆಂಟ್ ಸ್ವಯಂಚಾಲನೆ",
		Arabic: "أتمتة الوكيل",
		Spanish: "Automatizaciones",
		French: "Automatisations",
		Chinese: "代理自动化",
		Japanese: "エージェント自動化",
		German: "Agent-Automationen"
	},
	"Family AI": {
		Hindi: "परिवार AI",
		Gujarati: "પરિવાર AI",
		Telugu: "కుటుంబ AI",
		Kannada: "ಕುಟುಂಬ AI",
		Arabic: "ذكاء العائلة",
		Spanish: "IA familiar",
		French: "IA familiale",
		Chinese: "家庭 AI",
		Japanese: "家族AI",
		German: "Familien-KI"
	},
	"My AI Clone": {
		Hindi: "मेरा AI क्लोन",
		Gujarati: "મારો AI ક્લોન",
		Telugu: "నా AI క్లోన్",
		Kannada: "ನನ್ನ AI ಕ್ಲೋನ್",
		Arabic: "نسختي الذكية",
		Spanish: "Mi clon IA",
		French: "Mon clone IA",
		Chinese: "我的 AI 克隆",
		Japanese: "私のAIクローン",
		German: "Mein KI-Klon"
	},
	"Business Brain": {
		Hindi: "बिज़नेस ब्रेन",
		Gujarati: "બિઝનેસ બ્રેઇન",
		Telugu: "బిజినెస్ బ్రెయిన్",
		Kannada: "ವ್ಯವಹಾರ ಮೆದುಳು",
		Arabic: "عقل الأعمال",
		Spanish: "Cerebro empresarial",
		French: "Cerveau business",
		Chinese: "商业大脑",
		Japanese: "ビジネスブレイン",
		German: "Business Brain"
	},
	"PhoneX Actions": {
		Hindi: "PhoneX क्रियाएँ",
		Gujarati: "PhoneX ક્રિયાઓ",
		Telugu: "PhoneX చర్యలు",
		Kannada: "PhoneX ಕ್ರಿಯೆಗಳು",
		Arabic: "إجراءات PhoneX",
		Spanish: "Acciones PhoneX",
		French: "Actions PhoneX",
		Chinese: "PhoneX 操作",
		Japanese: "PhoneXアクション",
		German: "PhoneX-Aktionen"
	},
	"PhoneX Everywhere": {
		Hindi: "हर जगह PhoneX",
		Gujarati: "દરેક જગ્યાએ PhoneX",
		Telugu: "ప్రతిచోటా PhoneX",
		Kannada: "ಎಲ್ಲೆಡೆ PhoneX",
		Arabic: "PhoneX في كل مكان",
		Spanish: "PhoneX en todas partes",
		French: "PhoneX partout",
		Chinese: "PhoneX 无处不在",
		Japanese: "どこでもPhoneX",
		German: "PhoneX überall"
	},
	"Digital Legacy": {
		Hindi: "डिजिटल विरासत",
		Gujarati: "ડિજિટલ વારસો",
		Telugu: "డిజిటల్ వారసత్వం",
		Kannada: "ಡಿಜಿಟಲ್ ಪರಂಪರೆ",
		Arabic: "الإرث الرقمي",
		Spanish: "Legado digital",
		French: "Héritage numérique",
		Chinese: "数字遗产",
		Japanese: "デジタルレガシー",
		German: "Digitales Vermächtnis"
	},
	"For generations": {
		Hindi: "पीढ़ियों के लिए",
		Gujarati: "પેઢીઓ માટે",
		Telugu: "తరాల కోసం",
		Kannada: "ತಲೆಮಾರುಗಳಿಗಾಗಿ",
		Arabic: "للأجيال",
		Spanish: "Para generaciones",
		French: "Pour les générations",
		Chinese: "留给世代",
		Japanese: "世代のために",
		German: "Für Generationen"
	},
	"Analytics": {
		Hindi: "विश्लेषण",
		Gujarati: "વિશ્લેષણ",
		Telugu: "విశ్లేషణ",
		Kannada: "ವಿಶ್ಲೇಷಣೆ",
		Arabic: "تحليلات",
		Spanish: "Analíticas",
		French: "Analyses",
		Chinese: "分析",
		Japanese: "分析",
		German: "Analysen"
	},
	"Devices": {
		Hindi: "डिवाइस",
		Gujarati: "ડિવાઇસ",
		Telugu: "పరికరాలు",
		Kannada: "ಸಾಧನಗಳು",
		Arabic: "الأجهزة",
		Spanish: "Dispositivos",
		French: "Appareils",
		Chinese: "设备",
		Japanese: "デバイス",
		German: "Geräte"
	},
	"Learning you": {
		Hindi: "आपको सीख रहा है",
		Gujarati: "તમને શીખી રહ્યું છે",
		Telugu: "మిమ్మల్ని నేర్చుకుంటోంది",
		Kannada: "ನಿಮ್ಮನ್ನು ಕಲಿಯುತ್ತಿದೆ",
		Arabic: "يتعلمك",
		Spanish: "Aprendiendo de ti",
		French: "Vous apprend",
		Chinese: "正在了解你",
		Japanese: "あなたを学習中",
		German: "Lernt dich"
	},
	"Work knowledge": {
		Hindi: "काम का ज्ञान",
		Gujarati: "કામનું જ્ઞાન",
		Telugu: "పని జ్ఞానం",
		Kannada: "ಕೆಲಸದ ಜ್ಞಾನ",
		Arabic: "معرفة العمل",
		Spanish: "Conocimiento laboral",
		French: "Savoir professionnel",
		Chinese: "工作知识",
		Japanese: "仕事の知識",
		German: "Arbeitswissen"
	},
	"Memories & tree": {
		Hindi: "यादें और वंश वृक्ष",
		Gujarati: "યાદો અને વૃક્ષ",
		Telugu: "జ్ఞాపకాలు & వంశవృక్షం",
		Kannada: "ನೆನಪುಗಳು ಮತ್ತು ವಂಶವೃಕ್ಷ",
		Arabic: "ذكريات وشجرة العائلة",
		Spanish: "Recuerdos y árbol",
		French: "Souvenirs et arbre",
		Chinese: "回忆与族谱",
		Japanese: "思い出と家系図",
		German: "Erinnerungen & Stammbaum"
	}
})) DICT[key] = {
	...DICT[key],
	...value
};
var RTL = ["Arabic"];
var LANG_CODE = {
	English: "en",
	Hindi: "hi",
	Gujarati: "gu",
	Telugu: "te",
	Kannada: "kn",
	Arabic: "ar",
	Spanish: "es",
	French: "fr",
	Chinese: "zh",
	Japanese: "ja",
	German: "de"
};
var textOriginals = /* @__PURE__ */ new WeakMap();
var attrOriginals = /* @__PURE__ */ new WeakMap();
var sortedKeys = null;
function getSortedKeys() {
	if (!sortedKeys) sortedKeys = Object.keys(DICT).sort((a, b) => b.length - a.length);
	return sortedKeys;
}
function translateValue(value, lang) {
	if (lang === "English") return value;
	const leading = value.match(/^\s*/)?.[0] ?? "";
	const trailing = value.match(/\s*$/)?.[0] ?? "";
	const core = value.trim();
	if (!core) return value;
	const exact = DICT[core.replace(/\s+/g, " ")]?.[lang];
	if (exact) return `${leading}${exact}${trailing}`;
	let translated = core;
	for (const key of getSortedKeys()) {
		const replacement = DICT[key]?.[lang];
		if (replacement && translated.includes(key)) translated = translated.split(key).join(replacement);
	}
	return `${leading}${translated}${trailing}`;
}
function hasTranslationValue(value, lang) {
	if (lang === "English") return false;
	const core = value.trim().replace(/\s+/g, " ");
	if (!core) return false;
	if (DICT[core]?.[lang]) return true;
	return getSortedKeys().some((key) => Boolean(DICT[key]?.[lang]) && core.includes(key));
}
function translateDom(lang) {
	if (typeof document === "undefined" || !document.body) return;
	const applyText = (node) => {
		const parent = node.parentElement;
		if (!parent || parent.closest("script, style, svg") || parent.dataset?.nativeText === "true") return;
		if (!textOriginals.has(node)) {
			if (lang !== "English" && !hasTranslationValue(node.data, lang)) return;
			textOriginals.set(node, node.data);
		}
		const next = translateValue(textOriginals.get(node) ?? node.data, lang);
		if (node.data !== next) node.data = next;
	};
	const applyAttrs = (el) => {
		if (el.closest("script, style, svg")) return;
		for (const attr of [
			"placeholder",
			"aria-label",
			"title"
		]) {
			const current = el.getAttribute(attr);
			if (!current) continue;
			let originals = attrOriginals.get(el);
			if (!originals) {
				originals = /* @__PURE__ */ new Map();
				attrOriginals.set(el, originals);
			}
			if (!originals.has(attr)) {
				if (lang !== "English" && !hasTranslationValue(current, lang)) continue;
				originals.set(attr, current);
			}
			const next = translateValue(originals.get(attr) ?? current, lang);
			if (current !== next) el.setAttribute(attr, next);
		}
	};
	const walk = (root) => {
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		let node = walker.nextNode();
		while (node) {
			applyText(node);
			node = walker.nextNode();
		}
		if (root instanceof Element) applyAttrs(root);
		root.querySelectorAll?.("[placeholder], [aria-label], [title]").forEach(applyAttrs);
	};
	walk(document.body);
}
var LangContext = (0, import_react.createContext)({
	lang: "English",
	setLang: () => {},
	t: (s) => s
});
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("English");
	(0, import_react.useEffect)(() => {
		const saved = typeof window !== "undefined" ? localStorage.getItem("phonex-lang") : null;
		if (saved) setLangState(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		document.documentElement.dir = RTL.includes(lang) ? "rtl" : "ltr";
		document.documentElement.lang = LANG_CODE[lang];
	}, [lang]);
	(0, import_react.useEffect)(() => {
		if (typeof MutationObserver === "undefined" || typeof document === "undefined") return;
		translateDom(lang);
		const observer = new MutationObserver((mutations) => {
			translateDom(lang);
			for (const mutation of mutations) mutation.addedNodes.forEach((node) => {
				if (node instanceof Element || node instanceof Text) translateDom(lang);
			});
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			characterData: true,
			attributes: true,
			attributeFilter: [
				"placeholder",
				"aria-label",
				"title"
			]
		});
		return () => observer.disconnect();
	}, [lang]);
	const setLang = (l) => {
		setLangState(l);
		if (typeof window !== "undefined") localStorage.setItem("phonex-lang", l);
	};
	const t = (s) => {
		if (lang === "English") return s;
		return DICT[s]?.[lang] ?? translateValue(s, lang);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
var useT = () => (0, import_react.useContext)(LangContext).t;
var useLang = () => (0, import_react.useContext)(LangContext);
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$35 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "PhoneX — Your everyday life, made easier by AI" },
			{
				name: "description",
				content: "PhoneX is your personal AI companion that helps you organize your day, remember what matters, stay on track, and understand your life better."
			},
			{
				name: "author",
				content: "PhoneX"
			},
			{
				property: "og:title",
				content: "PhoneX — Your everyday life, made easier by AI"
			},
			{
				property: "og:description",
				content: "PhoneX is your personal AI companion for everyday life."
			},
			{
				property: "og:site_name",
				content: "PhoneX"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$35.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$33 = () => import("../_marketing-D8bpkXFo.mjs");
var Route$34 = createFileRoute("/_marketing")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./about-BRcZTo1g.mjs");
var Route$33 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About PhoneX" }, {
		name: "description",
		content: "Everything PhoneX can do for you."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./actions-VVyIgJnU.mjs");
var Route$32 = createFileRoute("/actions")({
	head: () => ({ meta: [{ title: "PhoneX Actions — Agent" }, {
		name: "description",
		content: "Let PhoneX take action — messages, bookings, payments and more."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./activity-DgWNmbE5.mjs");
var Route$31 = createFileRoute("/activity")({
	head: () => ({ meta: [{ title: "My Life — PhoneX" }, {
		name: "description",
		content: "Your personal life operating system — timeline, goals, and AI suggestions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./app-CD5F_NWW.mjs");
var Route$30 = createFileRoute("/app")({
	head: () => ({ meta: [
		{ title: "PhoneX — Your AI Life Companion" },
		{
			name: "description",
			content: "PhoneX is your digital life companion — an AI that knows you, remembers you, and helps you every day."
		},
		{
			property: "og:title",
			content: "PhoneX — Your AI Life Companion"
		},
		{
			property: "og:description",
			content: "A premium AI companion that lives in your phone."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./business-Dppvsjxt.mjs");
var Route$29 = createFileRoute("/business")({
	head: () => ({ meta: [{ title: "Business Brain — PhoneX" }, {
		name: "description",
		content: "Your company's knowledge, decisions and SOPs — instantly searchable."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./chat-DH1C_ELQ.mjs");
var Route$28 = createFileRoute("/chat")({
	head: () => ({ meta: [{ title: "Chat with PhoneX" }, {
		name: "description",
		content: "Talk with your AI companion through text."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./clone-FO_8QhUm.mjs");
var Route$27 = createFileRoute("/clone")({
	head: () => ({ meta: [{ title: "My AI Clone — PhoneX" }, {
		name: "description",
		content: "Your evolving digital self — learning how you think."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./ecosystem-BTD5kfqe.mjs");
var Route$26 = createFileRoute("/ecosystem")({
	head: () => ({ meta: [{ title: "PhoneX Everywhere — Ecosystem" }, {
		name: "description",
		content: "Your AI companion across every device — phone, laptop, watch, car, home."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./family-OxR0_S54.mjs");
var Route$25 = createFileRoute("/family")({
	head: () => ({ meta: [{ title: "Family AI — PhoneX" }, {
		name: "description",
		content: "Family memories, tree, and stories preserved by PhoneX."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./fitness-CbhKO9US.mjs");
var Route$24 = createFileRoute("/fitness")({
	head: () => ({ meta: [{ title: "Fitness — PhoneX" }, {
		name: "description",
		content: "Steps, calories, distance and AI health insights."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./insights-Dbubc85o.mjs");
var Route$23 = createFileRoute("/insights")({
	head: () => ({ meta: [{ title: "Life Insights — PhoneX" }, {
		name: "description",
		content: "Analytics across your productivity, health, finance, learning and travel."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./language-B-zQ1cT0.mjs");
var Route$22 = createFileRoute("/language")({
	head: () => ({ meta: [{ title: "Language — PhoneX" }, {
		name: "description",
		content: "Choose how PhoneX speaks with you."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./legacy-DsyYVLzY.mjs");
var Route$21 = createFileRoute("/legacy")({
	head: () => ({ meta: [{ title: "Digital Legacy — PhoneX" }, {
		name: "description",
		content: "Your voice, memories and stories — preserved for the people you love."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./life-summary-pHX-4ytN.mjs");
var Route$20 = createFileRoute("/life-summary")({
	head: () => ({ meta: [{ title: "Life Summary — PhoneX" }, {
		name: "description",
		content: "All your life summary cards and analytics."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./memories-lfEe61fm.mjs");
var Route$19 = createFileRoute("/memories")({
	head: () => ({ meta: [{ title: "Memories — PhoneX" }, {
		name: "description",
		content: "PhoneX remembers the moments that matter to you."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./mood-BtJNdC_8.mjs");
var Route$18 = createFileRoute("/mood")({
	head: () => ({ meta: [{ title: "Mood — PhoneX" }, {
		name: "description",
		content: "Track your mood, journal and emotional insights."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./notifications-B_T2Cu9Z.mjs");
var Route$17 = createFileRoute("/notifications")({
	head: () => ({ meta: [{ title: "Notifications — PhoneX" }, {
		name: "description",
		content: "Your AI-organized daily reminders and schedule."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var NOTIFS = {
	"wake-up": {
		title: "Wake up",
		time: "6:00 AM",
		date: "Today",
		priority: "med",
		status: "completed",
		desc: "Gentle alarm · sunrise light"
	},
	"salary": {
		title: "Salary credited",
		time: "9:12 AM",
		date: "Today",
		priority: "low",
		status: "completed",
		desc: "Monthly salary deposited to your account"
	},
	"meeting": {
		title: "Design review",
		time: "2:00 PM",
		date: "Today",
		priority: "high",
		status: "today",
		desc: "Review v2.1 designs with Sarah and product team"
	},
	"gym": {
		title: "Gym session",
		time: "6:30 PM",
		date: "Today",
		priority: "med",
		status: "today",
		desc: "Strength training · legs day"
	},
	"medicine": {
		title: "Medicine reminder",
		time: "9:00 PM",
		date: "Today",
		priority: "high",
		status: "today",
		desc: "Vitamin D + multivitamin"
	},
	"date": {
		title: "Date night",
		time: "8:00 PM",
		date: "Tomorrow",
		priority: "high",
		status: "tomorrow",
		desc: "Dinner reservation at Nobu · dress smart casual"
	},
	"doctor": {
		title: "Doctor appointment",
		time: "11:00 AM",
		date: "Tomorrow",
		priority: "high",
		status: "tomorrow",
		desc: "Annual checkup with Dr. Mehta"
	},
	"shopping": {
		title: "Grocery shopping",
		time: "5:00 PM",
		date: "Tomorrow",
		priority: "low",
		status: "tomorrow",
		desc: "Weekly essentials + fresh produce"
	},
	"license": {
		title: "Driving license exam",
		time: "10:00 AM",
		date: "Mar 18",
		priority: "high",
		status: "upcoming",
		desc: "Bring documents + photo ID"
	},
	"birthday": {
		title: "Mom's birthday",
		time: "All day",
		date: "Mar 12",
		priority: "high",
		status: "upcoming",
		desc: "Call at 10 AM, gift already ordered"
	},
	"flight": {
		title: "Flight to Lisbon",
		time: "7:20 AM",
		date: "Mar 22",
		priority: "high",
		status: "upcoming",
		desc: "TAP Air · Terminal 1 · web check-in opens 48h prior"
	},
	"family": {
		title: "Family dinner",
		time: "7:00 PM",
		date: "Mar 15",
		priority: "med",
		status: "upcoming",
		desc: "At your parents' home"
	},
	"call-mom": {
		title: "Call Mom",
		time: "7:00 PM",
		date: "Yesterday",
		priority: "med",
		status: "missed",
		desc: "You missed this reminder"
	}
};
var $$splitComponentImporter$15 = () => import("./permissions-DNFVc2Ji.mjs");
var Route$16 = createFileRoute("/permissions")({
	head: () => ({ meta: [{ title: "Permissions — PhoneX" }, {
		name: "description",
		content: "Manage what PhoneX can access."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./personality-DE7ioGFc.mjs");
var Route$15 = createFileRoute("/personality")({
	head: () => ({ meta: [{ title: "PhoneX Personality" }, {
		name: "description",
		content: "Choose how your AI companion speaks to you."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./profile-Dn6ufKuv.mjs");
var Route$14 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — PhoneX" }, {
		name: "description",
		content: "Your PhoneX dashboard."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./settings-CDKzXwN4.mjs");
var Route$13 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — PhoneX" }, {
		name: "description",
		content: "Manage your PhoneX preferences."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./subscription-xb5AEJCz.mjs");
var Route$12 = createFileRoute("/subscription")({
	head: () => ({ meta: [{ title: "Subscription — PhoneX" }, {
		name: "description",
		content: "Choose your PhoneX plan."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./tasks-D8g_Y8OE.mjs");
var Route$11 = createFileRoute("/tasks")({
	head: () => ({ meta: [{ title: "Tasks — PhoneX" }, {
		name: "description",
		content: "Your tasks, completion & AI suggestions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./vault-BOT7Z2jE.mjs");
var Route$10 = createFileRoute("/vault")({
	head: () => ({ meta: [{ title: "Knowledge Vault — PhoneX" }, {
		name: "description",
		content: "Store every part of your personal knowledge with PhoneX."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./voice-BGvljXIX.mjs");
var Route$9 = createFileRoute("/voice")({
	head: () => ({ meta: [{ title: "Talking to PhoneX" }, {
		name: "description",
		content: "Voice conversation with your PhoneX AI companion."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("../_marketing.index-DrUvv9iZ.mjs");
var Route$8 = createFileRoute("/_marketing/")({
	head: () => ({
		meta: [
			{ title: "PhoneX — Your Personal AI Companion" },
			{
				name: "description",
				content: "PhoneX is a personal AI companion designed to help you plan, remember, stay organized, and understand your everyday life."
			},
			{
				property: "og:title",
				content: "PhoneX — Your Personal AI Companion"
			},
			{
				property: "og:description",
				content: "A personal AI companion for planning your day, remembering what matters, and understanding your life."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_marketing.features-BuWWkuyG.mjs");
var Route$7 = createFileRoute("/_marketing/features")({
	head: () => ({
		meta: [
			{ title: "Features — PhoneX personal AI companion" },
			{
				name: "description",
				content: "Memory, voice, tasks, insights and an AI that learns how you think — a closer look at what PhoneX does for your everyday life."
			},
			{
				property: "og:title",
				content: "Features — PhoneX personal AI companion"
			},
			{
				property: "og:description",
				content: "Explore the capabilities behind the PhoneX AI companion."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/features"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_marketing.get-started-FH_ew1yz.mjs");
var Route$6 = createFileRoute("/_marketing/get-started")({
	head: () => ({
		meta: [
			{ title: "Get started with PhoneX — your personal AI companion" },
			{
				name: "description",
				content: "See how PhoneX works in three simple steps and open the live PhoneX experience to try it for yourself."
			},
			{
				property: "og:title",
				content: "Get started with PhoneX"
			},
			{
				property: "og:description",
				content: "How PhoneX works, and how to start using it today."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/get-started"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_marketing.privacy-DB211uYu.mjs");
var Route$5 = createFileRoute("/_marketing/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy — PhoneX" },
			{
				name: "description",
				content: "How PhoneX approaches privacy, transparency, and user control while the product is being built."
			},
			{
				property: "og:title",
				content: "Privacy — PhoneX"
			},
			{
				property: "og:description",
				content: "PhoneX privacy principles: user control, transparency, and clear choices."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_marketing.terms-C3nIBnNt.mjs");
var Route$4 = createFileRoute("/_marketing/terms")({
	head: () => ({
		meta: [
			{ title: "Terms — PhoneX" },
			{
				name: "description",
				content: "The terms that apply to the PhoneX website and early access to the product."
			},
			{
				property: "og:title",
				content: "Terms — PhoneX"
			},
			{
				property: "og:description",
				content: "Terms for using the PhoneX website and early access."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./app.features-BOpOHtfE.mjs");
var Route$3 = createFileRoute("/app/features")({
	head: () => ({ meta: [{ title: "PhoneX AI Core" }, {
		name: "description",
		content: "Enter the PhoneX AI Operating System."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitNotFoundComponentImporter$1 = () => import("./notifications._id-DawRoki8.mjs");
var $$splitComponentImporter$1 = () => import("./notifications._id-gTXPkfwj.mjs");
var Route$2 = createFileRoute("/notifications/$id")({
	head: () => ({ meta: [{ title: "Reminder — PhoneX" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var data = {
	workout: {
		title: "Morning workout",
		subtitle: "Upper body · strength",
		badge: "Done",
		time: "07:00 · 45 min",
		Icon: Dumbbell,
		grad: "bg-gradient-rose",
		tone: "bg-rose-soft",
		progress: 100,
		sections: [{
			label: "Summary",
			Icon: CircleCheck,
			lines: ["Strength session focused on chest & arms.", "Energy: high · Form: clean"]
		}, {
			label: "Exercises",
			Icon: ListChecks,
			lines: [
				"Bench press · 4 × 8",
				"Push-ups · 3 × 15",
				"Bicep curls · 3 × 12",
				"Plank · 3 × 60s"
			]
		}]
	},
	meeting: {
		title: "Work meeting",
		subtitle: "Product sync",
		badge: "Soon",
		time: "10:00 · 1 hr",
		Icon: Briefcase,
		grad: "bg-gradient-sky",
		tone: "bg-sky-soft",
		sections: [{
			label: "Details",
			Icon: Clock,
			lines: ["Weekly product sync with design & engineering.", "Room: Pluto · Google Meet link ready"]
		}, {
			label: "Notes",
			Icon: ListChecks,
			lines: [
				"Review Q1 launch scope",
				"Sign-off on onboarding flow",
				"Assign next sprint owners"
			]
		}]
	},
	lunch: {
		title: "Lunch break",
		subtitle: "Bistrot 24",
		badge: "1h",
		time: "13:00 · 45 min",
		Icon: Coffee,
		grad: "bg-gradient-peach",
		tone: "bg-peach-soft",
		sections: [{
			label: "Food reminder",
			Icon: CircleCheck,
			lines: ["Light meal recommended after morning workout.", "Suggested: grilled chicken bowl + water"]
		}, {
			label: "Schedule",
			Icon: MapPin,
			lines: ["Bistrot 24 · 6 min walk", "Back in office by 13:45"]
		}]
	},
	learning: {
		title: "Learning session",
		subtitle: "Design systems",
		badge: "Auto",
		time: "16:00 · 30 min",
		Icon: BookOpen,
		grad: "bg-gradient-sky",
		tone: "bg-mint-soft",
		progress: 60,
		sections: [{
			label: "Today's focus",
			Icon: ListChecks,
			lines: ["Chapter 4: Tokens & theming", "Practice: build a color scale"]
		}, {
			label: "Progress",
			Icon: CircleCheck,
			lines: ["12 hr studied this month", "On track for monthly goal"]
		}]
	},
	family: {
		title: "Family time",
		subtitle: "Dinner at Mom's",
		badge: "Upcoming",
		time: "19:00 · 2 hr",
		Icon: Users,
		grad: "bg-gradient-lavender",
		tone: "bg-lavender-soft",
		sections: [{
			label: "Details",
			Icon: Clock,
			lines: ["Casual dinner with family.", "Bring: dessert · flowers"]
		}, {
			label: "Reminder",
			Icon: MapPin,
			lines: ["Mom's place · 18 min drive", "Leave by 18:40 to be on time"]
		}]
	}
};
var $$splitComponentImporter = () => import("./timeline._id-CABIPkg9.mjs");
var $$splitNotFoundComponentImporter = () => import("./timeline._id-DwgssPvf.mjs");
var $$splitErrorComponentImporter = () => import("./timeline._id-WFpZT24Y.mjs");
var Route$1 = createFileRoute("/timeline/$id")({
	head: ({ params }) => {
		const d = data[params.id];
		return { meta: [{ title: d ? `${d.title} — PhoneX` : "Timeline — PhoneX" }, {
			name: "description",
			content: d?.subtitle ?? "Timeline detail."
		}] };
	},
	loader: ({ params }) => {
		if (!data[params.id]) throw notFound();
		return null;
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var MarketingRoute = Route$34.update({
	id: "/_marketing",
	getParentRoute: () => Route$35
});
var AboutRoute = Route$33.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$35
});
var ActionsRoute = Route$32.update({
	id: "/actions",
	path: "/actions",
	getParentRoute: () => Route$35
});
var ActivityRoute = Route$31.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => Route$35
});
var AppRoute = Route$30.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$35
});
var BusinessRoute = Route$29.update({
	id: "/business",
	path: "/business",
	getParentRoute: () => Route$35
});
var ChatRoute = Route$28.update({
	id: "/chat",
	path: "/chat",
	getParentRoute: () => Route$35
});
var CloneRoute = Route$27.update({
	id: "/clone",
	path: "/clone",
	getParentRoute: () => Route$35
});
var EcosystemRoute = Route$26.update({
	id: "/ecosystem",
	path: "/ecosystem",
	getParentRoute: () => Route$35
});
var FamilyRoute = Route$25.update({
	id: "/family",
	path: "/family",
	getParentRoute: () => Route$35
});
var FitnessRoute = Route$24.update({
	id: "/fitness",
	path: "/fitness",
	getParentRoute: () => Route$35
});
var InsightsRoute = Route$23.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => Route$35
});
var LanguageRoute = Route$22.update({
	id: "/language",
	path: "/language",
	getParentRoute: () => Route$35
});
var LegacyRoute = Route$21.update({
	id: "/legacy",
	path: "/legacy",
	getParentRoute: () => Route$35
});
var LifeSummaryRoute = Route$20.update({
	id: "/life-summary",
	path: "/life-summary",
	getParentRoute: () => Route$35
});
var MemoriesRoute = Route$19.update({
	id: "/memories",
	path: "/memories",
	getParentRoute: () => Route$35
});
var MoodRoute = Route$18.update({
	id: "/mood",
	path: "/mood",
	getParentRoute: () => Route$35
});
var NotificationsRoute = Route$17.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => Route$35
});
var PermissionsRoute = Route$16.update({
	id: "/permissions",
	path: "/permissions",
	getParentRoute: () => Route$35
});
var PersonalityRoute = Route$15.update({
	id: "/personality",
	path: "/personality",
	getParentRoute: () => Route$35
});
var ProfileRoute = Route$14.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$35
});
var SettingsRoute = Route$13.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$35
});
var SubscriptionRoute = Route$12.update({
	id: "/subscription",
	path: "/subscription",
	getParentRoute: () => Route$35
});
var TasksRoute = Route$11.update({
	id: "/tasks",
	path: "/tasks",
	getParentRoute: () => Route$35
});
var VaultRoute = Route$10.update({
	id: "/vault",
	path: "/vault",
	getParentRoute: () => Route$35
});
var VoiceRoute = Route$9.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => Route$35
});
var MarketingIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => MarketingRoute
});
var MarketingFeaturesRoute = Route$7.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => MarketingRoute
});
var MarketingGetStartedRoute = Route$6.update({
	id: "/get-started",
	path: "/get-started",
	getParentRoute: () => MarketingRoute
});
var MarketingPrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => MarketingRoute
});
var MarketingTermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => MarketingRoute
});
var AppFeaturesRoute = Route$3.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => AppRoute
});
var NotificationsIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => NotificationsRoute
});
var TimelineIdRoute = Route$1.update({
	id: "/timeline/$id",
	path: "/timeline/$id",
	getParentRoute: () => Route$35
});
var MarketingRouteChildren = {
	MarketingFeaturesRoute,
	MarketingGetStartedRoute,
	MarketingPrivacyRoute,
	MarketingTermsRoute,
	MarketingIndexRoute
};
var MarketingRouteWithChildren = MarketingRoute._addFileChildren(MarketingRouteChildren);
var AppRouteChildren = { AppFeaturesRoute };
var AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
var NotificationsRouteChildren = { NotificationsIdRoute };
var rootRouteChildren = {
	MarketingRoute: MarketingRouteWithChildren,
	AboutRoute,
	ActionsRoute,
	ActivityRoute,
	AppRoute: AppRouteWithChildren,
	BusinessRoute,
	ChatRoute,
	CloneRoute,
	EcosystemRoute,
	FamilyRoute,
	FitnessRoute,
	InsightsRoute,
	LanguageRoute,
	LegacyRoute,
	LifeSummaryRoute,
	MemoriesRoute,
	MoodRoute,
	NotificationsRoute: NotificationsRoute._addFileChildren(NotificationsRouteChildren),
	PermissionsRoute,
	PersonalityRoute,
	ProfileRoute,
	SettingsRoute,
	SubscriptionRoute,
	TasksRoute,
	VaultRoute,
	VoiceRoute,
	TimelineIdRoute
};
var routeTree = Route$35._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: false,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { NOTIFS as a, Route$2 as i, Route$1 as n, useLang as o, data as r, useT as s, router_exports as t };
