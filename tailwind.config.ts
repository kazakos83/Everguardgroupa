import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'navy-950': '#060D18',
          'navy-900': '#0D1B2E',
          'navy-800': '#112240',
          'navy-700': '#1A3156',
          gold:       '#C9A84C',
          'gold-dim': '#A07830',
          teal:       '#00D4B4',
          white:      '#FFFFFF',
          muted:      'rgba(255,255,255,0.6)',
          subtle:     'rgba(255,255,255,0.35)',
        },
      },
      fontFamily: {
        display: ['var(--font-geist-sans)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
