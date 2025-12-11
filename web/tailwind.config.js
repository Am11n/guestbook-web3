/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing purple palette
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // New design tokens for FantomUI-inspired dark theme
        'bg-body': '#050015',
        'bg-surface': '#09001c',
        'accent-primary': '#e041ff',
        'accent-secondary': '#3b82f6',
        'text-primary': '#f9fafb',
        'text-muted': '#a1a1b5',
      }
    },
  },
  plugins: [],
}