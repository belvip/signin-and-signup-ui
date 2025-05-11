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
        btnColor: "#0172F4",
        bgInput: "#F7FAFC",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
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
