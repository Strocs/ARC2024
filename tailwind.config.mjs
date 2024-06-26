/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ee0175',
        secondary: '#f1f1f1',
        'accent-yellow': '#fcea0d',
        'accent-blue': '#1d70b7',
        'day-1': '#04bfb1',
        'day-2': '#662482',
        'day-3': '#8dba1f',
        'day-4': '#f29100',
        black: '#060012'
      },
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif', 'system-ui'],
        climate: ['Climate Crisis', 'sans-serif', 'system-ui']
      },
      backgroundImage: {
        'hero-image': "url('/images/hero-image.webp')",
        'snow-ball': "url('/images/snowflake-1.png')",
        'snow-star': "url('/images/snowflake-2.png')",
        texture: "url('/images/texture.svg')",
        'white-image': "url('/images/fondo-blanco.webp')"
      },
      keyframes: {
        snowflakes: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': {
            transform: 'scale(1.2) rotate(25deg)'
          }
        }
      },
      animation: {
        snowflakes: 'snowflakes 300ms steps(2,end) alternate infinite'
      },
      screens: {
        '1.5xl': '1440px',
        '2xl': '1542px',
        xxs: '384px'
      }
    }
  },
  plugins: []
}
