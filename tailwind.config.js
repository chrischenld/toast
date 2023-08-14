/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        toast: "0px 2px 64px 2px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        default: {
          base: "#1A1A1E",
          inset: "#232329",
          fg: "#FAFAFA",
          accent: "#8E60BB",
          border: "#29292F",
          muted: "#313139",
        },
        fg: {
          default: "#FAFAFA",
          muted: "#A1A1A1",
          accent: "#8E60BB",
        },
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    // fontSize: {
    //   "2xs": ["0.5rem", "0.75rem"],
    //   xs: ["0.75rem", "1rem"],
    // },
  },
  plugins: [],
};
