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
        // Brand palette: vert sauge / blanc / anthracite
        background: "#1A1A1A", // anthracite dark
        foreground: "#FAFAFA", // blanc
        accent: {
          DEFAULT: "#8B9E7C", // vert sauge
          light: "#A3B594",
          dark: "#6B7D5E",
        },
        muted: "#71717A", // zinc-500
        surface: "#262626", // slightly lighter than bg
        border: "#3F3F46", // zinc-700
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
