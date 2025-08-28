/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softMint: "#E3FCEB",
        palePink: "#F9E2EA",
        skyBlue: "#D0EBFD",
        lavenderTint: "#E7D4F5",
        whisperWhite: "#FCFCFC",
      },
    },
  },
  plugins: [],
};
