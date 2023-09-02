/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  theme: {
    extend: {
      colors: {
        'my-gray-1': '#dadce0',
        'my-blue-1': '#1967d2',
        'my-green-1': '#137333'
      },
      boxShadow: {
        blue: '0 0 3px 3px #4205f4'
      }
    }
  },
  plugins: []
}
