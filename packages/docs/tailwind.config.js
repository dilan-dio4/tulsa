/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../core/src/**/*.{js,ts,jsx,tsx}"
  ],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  important: ".theme-doc-markdown"
}
