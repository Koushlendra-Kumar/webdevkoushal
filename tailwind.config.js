/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nabla: ['Nabla', 'sans-serif'],
        cherry: ['Cherry Bomb One', 'cursive'],
        monospace: ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
