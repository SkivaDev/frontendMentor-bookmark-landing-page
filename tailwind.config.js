/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "soft-blue": 'hsl(231, 69%, 60%)',
        "soft-red": 'hsl(0, 94%, 66%)',
        "grayish-blue": 'hsl(229, 8%, 60%)',
        "very-dark-blue": 'hsl(229, 31%, 21%)',
      },
      colors: {
        "soft-blue": 'hsl(231, 69%, 60%)',
        "soft-red": 'hsl(0, 94%, 66%)',
        "grayish-blue": 'hsl(229, 8%, 60%)',
        "very-dark-blue": 'hsl(229, 31%, 21%)',
      },
      borderColor: {
        "soft-blue": 'hsl(231, 69%, 60%)',
        "soft-red": 'hsl(0, 94%, 66%)',
        "grayish-blue": 'hsl(229, 8%, 60%)',
        "very-dark-blue": 'hsl(229, 31%, 21%)',
      },
      screens: {
        md: "54.375em",
        rwd: "87.5em",
      },

    },
  },
  plugins: [],
}

