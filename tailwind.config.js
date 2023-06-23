/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html", 
      "./src/**/*.{html,vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        llano: {
          400: "#7A3D00",
          500: "#663300",
          600: "#422100",
          650: "#3D1F00",
          700: "#2B1700",
          750: "#291400",
          800: "#1D0F00",
          850: "#1A0E00",
          900: "#140A00",
          950: "#0F0700",
        },
        palette: {
          1: "#6F1D1B",
          2: "#BB9457",
          3: "#432818",
          4: "#99582A",
          5: "#FFE6A7",
        },
        llanowhite: {
          3: "#F5F5F5",
          2: "#fffaff",

        }
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [],
};
