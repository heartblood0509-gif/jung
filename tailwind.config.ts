import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C41E3A",
          dark: "#8B0000",
        },
        secondary: {
          DEFAULT: "#D4AF37",
          light: "#F5F5DC",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
