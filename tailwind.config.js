/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/style.css" , "./src/index.html" , "./src/app.js"],
  theme: {
    extend: {},
    backgroundImage: {
      'facebook' : "url(../images/icon-facebook.svg)",
      'twitter' : "url(../images/icon-twitter.svg)",
      'instagram' : "url(../images/icon-instagram.svg)",
      'youtube' : "url(../images/icon-youtube.svg)",
    }
  },
  plugins: [],
}
