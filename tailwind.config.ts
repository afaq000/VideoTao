import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	'./node_modules/shadcn-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
		borderColor: {
			'focus-blue': '#2563eb', // Tailwind's blue-400 color hex
		  },
		fontFamily: {
			sans: ['Inter var', 'Inter', 'sans-serif'],
		  },
		  fontSize: {
			xxs: '10px',  
			small:'8px',
		  },
		  transitionTimingFunction: {
			'ease-red': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',     // For red bar
			'ease-yellow': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // For yellow bar
			'ease-violet': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',  // For violet bar
		  },
		  fontFeatureSettings: {
			dlig: '"dlig" 1',
			ss07: '"ss07" 1',
			ss08: '"ss08" 1',
			zero: '"zero" 1',
			cv01: '"cv01" 1',
			cv03: '"cv03" 1',
			cv04: '"cv04" 1',
			cv05: '"cv05" 1',
			cv08: '"cv08" 1',
			cv09: '"cv09" 1',
			cv11: '"cv11" 1',
			cv12: '"cv12" 1',
			cv13: '"cv13" 1',
		  },
		  screens: {
			sm2: "478px", // Custom screen for 478px
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			lightBlack:"#29292C",
			littleBlack:"#27272A",
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
