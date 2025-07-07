import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
	theme: {
		tokens: {
			colors: {
				primary: {
					50: { value: '#faf5f5' },
					100: { value: '#f2e5e5' },
					200: { value: '#e8b4b8' },
					300: { value: '#d4a5a5' },
					400: { value: '#c49494' },
					500: { value: '#d4a5a5' },
					600: { value: '#b8908f' },
					700: { value: '#9c7b7a' },
					800: { value: '#806665' },
					900: { value: '#645150' },
				},
				secondary: {
					50: { value: '#fdfcfa' },
					100: { value: '#f9f6f2' },
					200: { value: '#f5e6d3' },
					300: { value: '#f1d6b4' },
					400: { value: '#edc695' },
					500: { value: '#f5e6d3' },
					600: { value: '#d4c5a8' },
					700: { value: '#b3a47d' },
					800: { value: '#928352' },
					900: { value: '#716227' },
				},
			},
			fonts: {
				heading: { value: "'Playfair Display', serif" },
				headingname: { value: "'Birthstone', cursive "},
				body: { value: "'Poppins', sans-serif" },
			},
		},
		semanticTokens: {
			colors: {
				bg: {
					canvas: { value: 'white' },
				},
				fg: {
					default: { value: 'gray.800' },
				},
			},
		},
	},
	globalCss: {
		body: {
			bg: 'bg.canvas',
			color: 'fg.default',
		},
	},
});

export const system = createSystem(defaultConfig, config);
