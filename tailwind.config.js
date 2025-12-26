/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#000000',
        'bg-secondary': '#0a0a0a',
        'bg-tertiary': '#0f0f0f',
        'bg-elevated': '#1a1a1a',
        // Borders
        'border-subtle': '#1a1a1a',
        'border-default': '#222222',
        'border-medium': '#333333',
        'border-strong': '#444444',
        'border-emphasis': '#555555',
        // Text
        'text-primary': '#ffffff',
        'text-secondary': '#aaaaaa',
        'text-tertiary': '#888888',
        'text-muted': '#666666',
        'text-subtle': '#444444',
        // Accent
        'accent-blue': 'rgb(59 130 246)',
        'accent-purple': 'rgb(168 85 247)',
        'accent-green': 'rgb(34 197 94)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-custom': [0.22, 1, 0.36, 1],
      },
    },
  },
  plugins: [],
}
