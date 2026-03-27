/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
        inter: ["Inter", "sans-serif"],
        // Add Quantico here
        quantico: ["Quantico", "sans-serif"], 
      },
},
  },
  plugins: [],
}
