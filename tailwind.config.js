/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        orangePrimary: "#FE5D26",
        spanPrimary: "#FE5D26",
        spanSecondary: "#FFD6C8",
        headingPrimary: "#212529",
        textPrimary: "#6C757D",
        bgPrimary: "#EEEEEE",
        cardBackground: "#F8F9FA",
        inputBackground: "#E9ECEF",
      },
      // container
      container:{
        center: true,
        padding: "1rem",
      },
      // screens
      screens:{
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      // subscriptions gradient
      backgroundImage: {
        "gradient-subscription":"linear-gradient(95deg, #FF8C650.27%, #F88D3A51.52%, #FF7B0099.73%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
