module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('/img/banner-1.jpg')",
      },
      fontFamily: {
        kanit: ["Kanit"],
        athiti: ["Athiti"],
      },
    },
  },
  plugins: [],
};
