import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'on-secondary-fixed': '#151c27',
  			'inverse-on-surface': '#eff0fa',
  			'secondary-container': '#dce2f3',
  			'on-background': '#191b23',
  			outline: '#727785',
  			tertiary: '#924700',
  			'on-primary-fixed': '#001a42',
  			'on-secondary-container': '#5e6572',
  			'surface-container-high': '#e6e7f2',
  			secondary: '#585f6c',
  			'surface-tint': '#005ac2',
  			'surface-container': '#ecedf7',
  			'on-tertiary': '#ffffff',
  			'on-primary': '#ffffff',
  			'on-surface-variant': '#424754',
  			'tertiary-fixed': '#ffdcc6',
  			'on-error': '#ffffff',
  			'on-error-container': '#93000a',
  			'primary-container': '#2170e4',
  			'surface-container-lowest': '#ffffff',
  			'on-primary-fixed-variant': '#004395',
  			'secondary-fixed': '#dce2f3',
  			'primary-fixed-dim': '#adc6ff',
  			'surface-container-highest': '#e1e2ec',
  			'on-tertiary-fixed': '#311400',
  			'tertiary-container': '#b75b00',
  			'surface-container-low': '#f2f3fd',
  			primary: '#0058be',
  			'surface-variant': '#e1e2ec',
  			'on-tertiary-fixed-variant': '#723600',
  			'on-surface': '#191b23',
  			surface: '#f9f9ff',
  			'on-primary-container': '#fefcff',
  			error: '#ba1a1a',
  			'error-container': '#ffdad6',
  			'surface-bright': '#f9f9ff',
  			'inverse-surface': '#2e3038',
  			'primary-fixed': '#d8e2ff',
  			'on-tertiary-container': '#fffbff',
  			'inverse-primary': '#adc6ff',
  			background: '#f9f9ff',
  			'surface-dim': '#d8d9e3',
  			'on-secondary-fixed-variant': '#404754',
  			'outline-variant': '#c2c6d6',
  			'secondary-fixed-dim': '#c0c7d6',
  			'on-secondary': '#ffffff',
  			'tertiary-fixed-dim': '#ffb786',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        fontFamily: {
            "mono-data": ["JetBrains Mono"],
            "headline-lg": ["Inter"],
            "headline-md": ["Inter"],
            "body-strong": ["Inter"],
            "display": ["Inter"],
            "body-base": ["Inter"],
            "label-sm": ["Inter"]
        }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
