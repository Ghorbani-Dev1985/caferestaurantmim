const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
      prefix: "crmim", 
      addCommonColors: true, 
      defaultTheme: "light",
      defaultExtendTheme: "light", 
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {
            radius:{
              small: "3px",
              medium: "6px",
              large: "10px",
              xlarge: "15px",
              full: "50%"
            },
            borderWidth:{
              small: "1px",
              medium: "4px",
              large: "8px",
            }
          }, 
          colors: {
            background: "#FAFAFA", 
            foreground: "#CA903E", 
            primary: {
              50: rgb(250, 243, 235),
              100:rgb(239, 220, 195),
              200: rgb(228, 197, 155),
              300: rgb(217, 174, 115),
              400: rgb(217, 174, 115),
              500: rgb(206, 151, 75),
              600: rgb(180, 126, 49),
              700: rgb(140, 98, 38),
              800: rgb(100, 70, 27),
              900: rgb(100, 70, 27),
              foreground: "#CA903E",
              DEFAULT: "#CA903E",
            },
            success: rgb(0 , 192 , 115),
            warning: rgb(255 , 153 , 0),
            error: rgb(255,71 , 87),
          }, 
        },
       
      },
    }),
  ]
}