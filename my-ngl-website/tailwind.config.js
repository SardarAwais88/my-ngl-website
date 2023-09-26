// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }



// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   // theme: {
//   //   extend: {
//   //     colors: {
//   //       customBlue: '#1F73A4', customOrange:'#FF7D64' ,customA:'#ACACAC',customYellow:"#E6E3E6"
//   //       ,customN:'#62B1DD' // Define your custom color here
//   //     }
//   //   }
//   // },
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     colors: {
//       'blue': '#1fb6ff',
//       'purple': '#7e5bef',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'yellow': '#ffc82c',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     nexaextra:['Nexa-ExtraLight'],
//     nexaheavy:['Nexa-Heavy'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       },
//       fontFamily:{
//         nexaextra:['Nexa-ExtraLight'],
//         nexaheavy:['Nexa-Heavy']
//     }
//   }

//   // variants: {},
//   // plugins: [],
// }
// }
// import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        nexaextra:['Nexa-ExtraLight'],
        nexaheavy:['Nexa-Heavy']
      },
      colors: {
        customBlue: '#00284b', customgray:'#e0e5e9', customgay :'#ffffff' ,flwhite:'#ffffff' ,bkred:'#fb4655'// You can choose any name you like
      },
    },
  },
  plugins: [],
}
export default config
