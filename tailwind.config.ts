import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx, json}",
    "./components/**/*.{ts,tsx}",
    "./blocks/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    'text-6xl',
    'text-7xl',
    {
      pattern: /text-.+/,
    },
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scrollY: {
          to: {
            transform: "translateY(calc(-50% - 0.5rem))",
          },
        },
        "scrollY-reverse": {
          to: {
            transform: "translateY(calc(50% + 0.5rem))",
          },
        },
        scrollX: {
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
        "scrollX-reverse": {
          to: {
            transform: "translateX(calc(50% + 0.5rem))",
          },
        },
        enterFromRight: {
          from: {
            opacity: "0",
            transform: "translateX(200px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        enterFromLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-200px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        exitToRight: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(200px)",
          },
        },
        exitToLeft: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(-200px)",
          },
        },
        enterFromBotton: {
          from: {
            opacity: "0",
            transform: "translateY(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-vertically": "scrollY 20s linear infinite",
        "loop-horizontal": "scrollX 60s linear infinite",
        "loop-horizontal-reverse": "scrollX-reverse 50s linear infinite",
        "loop-vertically-reverse": "scrollY-reverse 50s linear infinite",
        enterFromRight: "enterFromRight 0.2s ease-out",
        enterFromLeft: "enterFromLeft 0.2s ease-out",
        exitToRight: "exitToRight 0.2s ease-out",
        exitToLeft: "exitToLeft 0.2s ease-out",
        enterFromBotton: "enterFromBotton 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
