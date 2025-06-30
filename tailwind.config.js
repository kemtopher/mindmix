/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.liquid',
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00E5A0', // Neuro Mint
        secondary: '#7FFFD4', // Aquamarine
        dark: '#0B0B0B', // Ultra-dark black
        darker: '#181818', // Deep charcoal
        darkest: '#1F1F1F', // Deeper charcoal
        light: '#E0E0E0', // Light gray for body text
        white: '#FFFFFF', // Pure white for headers
        cta: '#FF4D00', // Bright orange for CTAs
        citrus: '#FFA500', // Citrus Ice flavor
        mint: '#7FFFD4', // Lemon Mint flavor
        blue: '#009BFF', // Blue Surge flavor
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Applies to all breakpoints
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(0, 229, 160, 0.3)',
        'glow-hover': '0 0 25px rgba(0, 229, 160, 0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 8s linear infinite',
        'brain-fill': 'brain-fill 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'brain-fill': {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neuron-pattern':
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzAgTDYwIDMwIE01NSAxNSBMMzAgMzAgTDI1IDEwIEwzMCAzMCBMMTUgMjUgTDMwIDMwIEw1IDU1IEwzMCAzMCBMMTUgNDUiIHN0cm9rZT0icmdiYSgwLCAyMjksIDE2MCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')",
      },
    },
  },
  plugins: [],
};
