/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-mobile": "url('./assets/images/bg-pattern-intro-mobile.svg')",
				"hero-desktop": "url('./assets/images/bg-pattern-intro-desktop.svg')",
				"circles-pattern": "url('./assets/images/bg-pattern-circles.svg')",
			},
			animation: {
				slideup: "slideup 2s ease-in-out",
				slidedown: "slidedown 2s ease-in-out",
				slideleft: "slideleft 2s ease-in-out",
				slideright: "slideright 2s ease-in-out",
				wave: "wave 2.2s linear infinite",
				slowfade: "slowfade 3.2s ease-in-out",
			},
			keyframes: {
				slowfade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				slideup: {
					from: { opacity: 0, transform: "translateY(25%)" },
					to: { opacity: 1, transform: "none" },
				},
				slidedown: {
					from: { opacity: 0, transform: "translateY(-25%)" },
					to: { opacity: 1, transform: "none" },
				},
				slideleft: {
					from: { opacity: 0, transform: "translateX(-20px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
				slideright: {
					from: { opacity: 0, transform: "translateX(20px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
				wave: {
					"0%": { transform: "scale(0)" },
					"50%": { transform: "scale(1)" },
					"100%": { transform: "scale(0)" },
				},
			},
		},
		screens: {
			sl: "200px",
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
