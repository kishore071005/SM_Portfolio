module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#ec4899",
        accent: "#22d3ee",
        dark: "#0f172a",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
