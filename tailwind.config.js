/** @type {import('tailwindcss').Config} */
const daisyuiPlugin = require("daisyui");
// const tailwindPlugin = (function ({ addVariant, e, postcss }) {
//   addVariant("firefox", ({ container, separator }) => {
//     const isFirefoxRule = postcss.atRule({
//       name: "-moz-document",
//       params: "url-prefix()",
//     });
//     isFirefoxRule.append(container.nodes);
//     container.append(isFirefoxRule);
//     isFirefoxRule.walkRules((rule) => {
//       rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
//     });
//   });
// });

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        talkativeLite: {
          primary: "#0699CD",
          secondary: "#2196F3",
          accent: "#0F172A",
          neutral: "#191D24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          background: "#FFFFFF",
        },
      },
      "dark",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        Permanent: ["Permanent Marker", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyuiPlugin],
};
