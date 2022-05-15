const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "hsl(212, 45%, 89%)",
        blue: {
          100: "hsl(220, 15%, 55%)",
          200: "hsl(218, 44%, 22%)",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif", ...fontFamily.sans],
      },
      fontSize: {
        base: "0.9375rem",
      },
    },
  },
  plugins: [],
};
