export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        secondary: "#22c55e",
        background: "#0f172a",
        foreground: "#d1fae5",
        lightBg: "#f4f4f4",
        lightText: "#1a1a1a",
      },
    },
  },
  plugins: [],
};