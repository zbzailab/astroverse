/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'media'
}
