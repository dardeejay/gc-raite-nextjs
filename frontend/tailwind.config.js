/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "primary-bg": "#FFFDF1",
        "btn-primary": "#FEFAE0",
        "text-primary": "#3C5233",
        "text-muted": "#A2A2A2",
        "footer-bg": "#264027",
        "footer-bottom": "#5BDF60",
        "text-white": "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
