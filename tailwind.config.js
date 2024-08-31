/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        "dana-sm":"dana-sm",
        "dana-md":"dana-md",
        "dana-bold":"dana-bold"
      },
      container: {
        center: true,

        padding: {
          DEFAULT:"1rem",
          lg:"0.925rem",
        },
      
      },
    },
  },
  plugins: [],
}

