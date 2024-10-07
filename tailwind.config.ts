import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-light)",
        foreground: "var(--foreground-light)",
        customYellow: "#FEC66D",
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      spacing: {
        "18": "4.5rem",
        "72": "18rem",
        "96": "24rem",
      },
      height: {
        "screen/90": "90vh",
        "screen/75": "75vh",
        "screen/50": "50vh",
        "screen/25": "25vh",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
