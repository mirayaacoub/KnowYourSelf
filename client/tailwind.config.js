/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["ConcertOne", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
      },
    },
  },
  plugins: [],
};
