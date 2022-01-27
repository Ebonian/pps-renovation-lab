module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('/img/banner-1.jpg')",
        primary: "linear-gradient(104.04deg, #FFAF83 32.8%, #C26C2D 101.6%);",
      },
      fontFamily: {
        kanit: ["Kanit"],
        athiti: ["Athiti"],
        poppins: ["Poppins"],
      },
      colors: {
        gradient: {
          100: "#FFAF83",
          200: "#C26C2D",
        },
        background: {
          100: "#FFF1F0",
        },
      },
      boxShadow: {
        color:
          "0px 4px 8px rgba(0, 0, 0, 0.25), 0px 10px 20px rgba(220, 122, 80, 0.3), inset 2px 2px 8px rgba(0, 0, 0, 0.1)",
        secondary:
          "0px 10px 20px rgba(234, 199, 179, 1), inset 2px 2px 4px rgba(255, 238, 238, 0.75), inset -4px -4px 8px rgba(245, 231, 223, 1)",
      },
    },
  },
  plugins: [],
};
