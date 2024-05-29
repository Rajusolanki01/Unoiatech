import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      montserratalt: ["Montserrat Alternates", "sans-serif"],
      plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        customPink: "#C2278E",
        customPinkLight: "#F837B7",
        customDark: "#1C1C1C",
        customGray: "#C2278E08",
        grayText: "#292929bf",
        textPrimary: "#0e0e0ebf",
        textSecondary: "#1E5068",
        textLightGray: "#5E84A1",
        grayLight: "#6E6E6E",
      },
      lineHeight: {
        customHeight: "73.6px",
        customHeights: "59px",
      },
    },
  },
  plugins: [],
};
export default config;
