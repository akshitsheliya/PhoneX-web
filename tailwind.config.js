export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Apple's exact color system
        'apple-bg': '#FFFFFF',          // Pure white
        'apple-gray': '#F5F5F7',        // Card background (Apple's signature light gray)
        'apple-gray-2': '#FBFBFD',      // Section background
        'apple-text': '#1D1D1F',        // Primary text (not pure black)
        'apple-text-2': '#86868B',      // Secondary text
        'apple-blue': '#0071E3',        // Primary CTA blue
        'apple-blue-hover': '#0077ED',  // Hover blue
        'apple-border': '#D2D2D7',      // Subtle borders
        'apple-dark': '#000000',        // Pure black cards (feature cards)
      },
      fontFamily: {
        // Inter is closest free font to SF Pro Display
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Apple's exact typography scale
        'apple-hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '600' }],
        'apple-headline': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'apple-title': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.005em', fontWeight: '600' }],
        'apple-eyebrow': ['0.875rem', { lineHeight: '1.2', letterSpacing: '0', fontWeight: '400' }],
        'apple-body': ['1.0625rem', { lineHeight: '1.47', letterSpacing: '-0.003em', fontWeight: '400' }],
        'apple-caption': ['0.75rem', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '400' }],
      },
      borderRadius: {
        'apple-card': '18px',   // Apple's exact card radius
        'apple-btn': '980px',   // Pill buttons
        'apple-lg': '28px',
      },
    },
  },
}
