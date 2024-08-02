import easings from 'open-props/src/easing'
// @ts-expect-error tailwind v4 doesn't have a TS config. We'll be removing this shortly
import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
	theme: {
		extend: {
			/* 
				🐨 Transfer over the `screens`, `colors` and `fontFamily`
				theme extensions to the `src/styles/tailwind.css file
			*/
			screens: {
				sm: '520px',
				lg: '976px',
			},
			colors: {
				highlight: '#6202FF',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},

			/* 
				👨‍💼 Stop right there. Don't worry about the other 
				customisations for now — we'll do them later.
			*/
			fontSize: {
				'4.5xl': ['2.625rem', '1.15'],
				'5.5xl': ['3.375rem', '1'],
			},
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'slide-left': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				},
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'roll-reveal': `0.4s roll-reveal ${easings['--ease-spring-2']} backwards`,
				'fade-in': '0.4s fade-in ease-out backwards',
				'slide-top': '0.3s slide-top ease-out backwards',
				'slide-left': '0.3s slide-left ease-out backwards',
			},
		},
	},
	plugins: [],
} satisfies Config
