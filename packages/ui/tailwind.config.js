const config = {
  content: [
    "../../apps/buyer/components/**/*.{ts,tsx}",
    "../../apps/buyer/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
