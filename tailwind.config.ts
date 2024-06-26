import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "switcher-pl": "url('/pl.svg')",
        "switcher-en": "url('/en.svg')",
      },
      colors: {
        background: "#a38954",
        gold: "#FFD60A",
        green: "#03A054",
        black: "#201e20",
        grey: "#939F99",
        text: "#232323",
        grey2: "#373A40",
        white: "#F9FAFB",
        g: "#a38954",
        gt: "#ac9465",
      },

      gridTemplateColumns: {
        "2": "repeat(2, 330px)",
      },
    },
  },
  plugins: [],
};
export default config;
