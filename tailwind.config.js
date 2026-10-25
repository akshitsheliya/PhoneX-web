export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF7',
          secondary: '#F2F0EA',
          card: '#FFFFFF',
        },
        ink: {
          primary: '#1A1A1A',
          secondary: '#5C5C5C',
          muted: '#9B9B96',
        },
        border: {
          subtle: '#E8E4DB',
          default: '#D9D4C7',
        },
        accent: {
          DEFAULT: '#5B4FE9',
          soft: '#EEEBFF',
          warm: '#FF6B4A',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'soft': '0 2px 20px -4px rgba(0, 0, 0, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)',
        'medium': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'phone': '0 30px 80px -20px rgba(91, 79, 233, 0.25), 0 20px 40px -10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
