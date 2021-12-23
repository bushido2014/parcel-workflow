module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif;"
      },
      container: {
        center: true,
        padding: "1.5rem"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
