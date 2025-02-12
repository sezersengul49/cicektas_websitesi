/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '850': '850ms', // Özel bir süre ekleyin
      },
    },
  },
  plugins: [],
}