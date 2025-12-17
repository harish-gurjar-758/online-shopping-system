/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252',
        primary_gray: '#3e3e3e',
        secoundry: '#f5f0f0'
      },
      backgroundColor: {
        primary: '#ff5252',
        secoundry: '#f5f0f0'
      },
    },
  },
  plugins: [],
}

