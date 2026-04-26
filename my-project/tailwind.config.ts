import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: '#00F5FF',
          'cyan-dim': '#00F5FF33',
          green: '#00E676',
          'green-dim': '#00E67633',
          orange: '#FF5C00',
          'orange-dim': '#FF5C0033',
          yellow: '#FFD600',
        },
        bg: {
          deep: '#0B0F14',
        },
        border: {
          subtle: '#1E2530',
        },
        font: {
          code: '#00F5FFCC',
          primary: '#FFFFFF',
          secondary: '#8B95A5',
          tertiary: '#4A5568',
        },
        surface: {
          card: '#161B2266',
          elevated: '#1A2030',
          solid: '#161B22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'pulse-dot': {
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
