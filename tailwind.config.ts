import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Neutralsans", "sans-serif"],
        displayMedium: ["Neutralsans Medium", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["DM Mono", "Space Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        button: "7px",
        card: "10px",
        viewport: "20px",
      },
      colors: {
        canvas: {
          light: "#FBFBFA",
          dark: "#0F0F0F",
        },
        panel: {
          light: "#FFFFFF",
          dark: "#171717",
        },
        edge: {
          light: "#EBEBEA",
          dark: "#262626",
        },
      },
    },
  },
  plugins: [],
};

export default config;

