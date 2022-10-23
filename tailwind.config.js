
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const myClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-x-180": {
      transform: "rotateX(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), myClass],
};
