/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '50%': '50%'
      },
      keyframes: {
        wiggle: {
          '0%': { color: 'purple'},
          '25%': {color: 'yellow'},
          '50%': { transform: 'translateY(-5px)', color: 'purple'},
          '75%': {color: 'yellow'},
          '100%': { transform: 'translateY(5px)', color: 'purple'}
        }
      },
      animation: {
        wiggle: 'wiggle 300ms ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
