/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        arrow: 
        "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite ",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) ",
        
      },

      KeyframeEffect:{
        bounce: {
          from: {transform: "translateY(10px)"},
          to: {transform:"translateY(0)"}
        },
        slideUp:{
          from: {transform: "translateY(100%)"},
          to: {transform:"translateY(0)"}
        }
      }
    },
  },
  plugins: [],
}
