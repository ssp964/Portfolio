/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'background': '0',
        'base': '1',
        'content': '10',
        'header': '20',
        'overlay': '30',
        'modal': '40',
        'popover': '50',
        'tooltip': '60',
        'loader': '100',
      },
      scale: {
        95: '0.95',
        110: '1.10',
      },
      backdropBlur: {
        sm: '4px',
      },
      transitionProperty: {
        'transform': 'transform',
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity',
        'scale': 'scale',
      }
    },
  },
  plugins: [],
}
