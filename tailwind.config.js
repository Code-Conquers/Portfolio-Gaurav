/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IbmplexMono: ["ibmplexMono", "sans-serif"],
        VarelaRound: ["VarelaRound", "sans-serif"],
        PoorStory: ["PoorStory", "sans-serif"],
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "45%" },
        },

      
      },
    },

  },
  plugins: [],
};
