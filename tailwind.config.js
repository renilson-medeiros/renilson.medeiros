/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bege': {
        100: '#CAB99A',
        200: '#A09278'      
      },
      'gray': {
        50: '#EEEEEE',
        100:'#999999',
        200: '#63635E'
      },
      'white': {
        1 : '#FFFFFF',
        50: '#F4F4F4',
        100: '#F5F5F5',
        200: '#F6F6F6',
        300: '#F9FAFB',
        400: '#CECECE'
      },
      'black': {
        50: '#404040',
        100: '#292929',
        200: '#202020',
        300: '#000000'
      },
      'red': {
        50: '#FF0000',
        100: '#A02A2A',
        200: '#721919',
      },
      'green': {
        50: '#DBFFDB',
        100: '#4CAF50',
      }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'geist' : ['Geist Variable', 'mono']
      },

      keyframes: {
        'slide-top': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
        }
        },

        'fade-in': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
        }
        },

        'left': {
          '0%': {
            transform: 'translateX(-10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
        }
        },

        'marquee': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(calc(-100%))'
        }
        },
      },
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in': 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'left': 'left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'marquee': 'marquee 2s linear infinite'
      }
    },
  },
  plugins: [
    
  ],
}

