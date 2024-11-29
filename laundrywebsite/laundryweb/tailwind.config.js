 /** @type {import {'tailwind.css'}.Config};*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        Text: "#327094",
        orange: "#4784A8",
      },
    },
  },
  plugins: [],
};