/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "index.js"],
	theme: {
		extend: {
			fontFamily: {
				IBM: ["IBM Plex Sans", "sans-serif"],
			},
			maxWidth: {
				"8xl": "90rem",
			},
			colors: {
				"custom-cyan-1": "#abf0ff",
				"custom-cyan-2": "#57e1ff",
				"custom-indigo-1": "#6a54ff",
				"custom-indigo-2": "#5e47ff",
				"custom-green": "#35ff9e",
				"custom-gray-0": "#E7F7F8",
				"custom-gray-1": "#e8f7f7",
				"custom-gray-2": "#eaf0f0",
				"custom-gray-3": "#d9d9d9",
				"custom-gray-4": "#a6adbd",
				"custom-gray-5": "#6173a1",
				"custom-gray-6": "#424f70",
				"custom-purple-1": "#4a3bb3",
				"custom-purple-2": "#211a4f",
				"custom-purple-3": "#030817",
				"custom-purple-4": "#201A4F",

			},
		},
	},
	plugins: [],
};
