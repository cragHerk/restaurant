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
        "nav-image": "url('/nav.jpg')",
        "section-image": "url('/section-triangle-bg.jpg')",
        "footer-image": "url('/footer-triangle-bg.jpg')",
      },
      colors: {
        gold: "#FFD60A",
        green: "#03A054",
        black: "#1F271B",
        grey: "#939F99",
        text: "#232323",
        white: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
export default config;
