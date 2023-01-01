/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        heading1: ["42px", { fontWeight: "700" }],
        heading2: ["36px", { fontWeight: "600" }],
        heading3: ["32px", { fontWeight: "600" }],
        heading4: ["24px", { fontWeight: "600" }],
        heading5: ["18px", { fontWeight: "600" }],
        paragraph1: ["16px", { fontWeight: "600" }],
        paragraph2: ["16px", { fontWeight: "300" }],
        paragraph3: ["14px", { fontWeight: "600" }],
        paragraph4: ["14px", { fontWeight: "300" }],
        paragraph5: ["12px", { fontWeight: "300" }],
        heading1res: ["28px", { fontWeight: "700" }],
        heading2res: ["24px", { fontWeight: "600" }],
        heading3res: ["20px", { fontWeight: "600" }],
        heading4res: ["18px", { fontWeight: "600" }],
        paragraph1res: ["14px", { fontWeight: "600" }],
        paragraph2res: ["14px", { fontWeight: "300" }],
        paragraph3res: ["12px", { fontWeight: "600" }],
        paragraph4res: ["12px", { fontWeight: "300" }],
      },
      colors: {
        primary: "#923330",
        secondary: "#4D1211",
        text1: "#313131",
        text2: "#FFFFFF",
        text3: "#ADADAD",
        text4: "#6F6F6F",
        background1: "#FEF2B8",
        background2: "#D7A151",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
