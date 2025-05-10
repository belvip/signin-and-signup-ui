/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
        colors: {
        customRed: '#ac1e23',
        customRed: "rgba(172, 30, 35, 1)",
        btnColor: "#0172F4",
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}" 
// ];
// export const theme = {
//   extend: {
//     fontFamily: {
//       inter: ['Inter', 'sans-serif'],
//       poppins: ['Poppins', 'sans-serif'],
//       raleway: ['Raleway', 'sans-serif'],
//     },
//   },
// };
// export const plugins = [];
