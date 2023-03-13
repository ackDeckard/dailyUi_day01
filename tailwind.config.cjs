/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkDetails: "hsl(292, 100%, 28%)",
        infoColor: "hsl(0, 10%, 82%)",
        subtitleColor: "hsl(0, 0%, 56%)",
        backgroundAndButton: "hsl(0, 2%, 94%)",
        imageBackground: "hsl(0, 2%, 97%)",
        gradientInitial: "hsl(0, 0%, 92%)",
        gradientFinal: "hsl(0, 0%, 94%)",
        borderColor: "hsl(0, 5%, 85%)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(10deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        "gift-shake": "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
