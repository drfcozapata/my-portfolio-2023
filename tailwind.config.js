module.exports = {
	content: ['./**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: '580px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1366px',
			'3xl': '1440px',
			'4xl': '1880px',
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		require('@tailwindcss/forms'),
	],
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
		// darkTheme: 'dark',
	},
};
