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
