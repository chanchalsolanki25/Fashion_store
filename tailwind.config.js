/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vsm': '355px', //custum created
      'sm': '640px',	//@media  and(min - width: 640px) { ... }
      'md': '770px',	//@media  and(min - width: 768px) { ... }
      'lg': '1040px',	//@media  and(min - width: 1024px) { ... }
      'xlg': '1260', //custum created
      'xl': '1280px',	//@media  and(min - width: 1280px) { ... }
      '2xl': '1536px',//@media  and(min - width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
