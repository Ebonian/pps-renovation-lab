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
        robotoMono: ["Roboto Mono"],
      },
      colors: {
        primary: {
          black: "#2F2F2F",
        },
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
        button:
          "0px 10px 20px rgba(220, 147, 80, 0.3), inset 2px 2px 4px rgba(220, 122, 80, 0.25), inset -4px -4px 8px rgba(0, 0, 0, 0.1)",
        lightWhiteButton:
          "0px 7.91024px 15.8205px #EAC7B3, inset 1.58205px 1.58205px 3.1641px rgba(255, 238, 238, 0.75), inset -3.1641px -3.1641px 6.32819px #F5E7DF",
        glass: "inset 4px 4px 28px 10px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
