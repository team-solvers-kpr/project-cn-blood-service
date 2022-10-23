const plugin =require("tailwindcss/plugin")
const Myclass=plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-x-180":{
      transform:"rotateX(180deg)",
    },
    ".preserve-3d":{
      transfromStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
      
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
      
    },
   

  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
};
