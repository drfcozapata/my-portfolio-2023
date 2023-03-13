module.exports = {
	content: ['./**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		// themes: ['light', 'winter', 'dark', 'night'],
		themes: [
			{
				mytheme: {
					primary: '#eab308',
					secondary: '#94a3b8',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff',
					'base-200': '#0f172a',
				},
			},
			'light',
			'winter',
		],
		darkTheme: 'dark',
	},
};
