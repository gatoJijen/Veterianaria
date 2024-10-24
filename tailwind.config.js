/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{html,php,js}",
    "./src/php/*.{php}"
  ],
  theme: {
    extend: {
      "colors": {
        "orange2": {
          "50": "#fff5e6",
          "100": "#ffeccc",
          "200": "#ffd899",
          "300": "#ffc566",
          "400": "#ffb133",
          "500": "#ff9e00",
          "600": "#e39953",
          "700": "#995f00",
          "800": "#663f00",
          "900": "#332000"
        }
      }
    }
  },
  plugins: [],
}

