/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}', './pages/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gold: '#D5966C',
        black: '#151515',
        gray: '#444444'
      }
    },
    backgroundImage: {
      map: 'url("/mobile/image-map@2x.png")'
    },
    fontSize: {
      xl: '6rem', // 96px
      l: '4.375rem', // 70px
      m: '3.75rem', // 60px
      s: '2.25rem', // 36px
      'body-m': '1.375rem', // 22px
      'body-s': '1.125rem' // 18px
    },
    lineHeight: {
      xl: '5.5rem', // 88px
      l: '4.375rem', // 70px
      m: '3.75rem', // 60px
      s: '2.25rem', // 36px
      'body-m': '2rem', // 32px
      'body-s': '1.75rem' // 28px
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      headings: ['Big Shoulders Display', 'sans-serif']
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
