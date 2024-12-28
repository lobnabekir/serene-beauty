/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center: true ,
		padding: "15px",
			
	},
	screens:{
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl :"1200px",
	},
	fontFamily:{
		primary: "var(--font-marcellus)",
		secondary: "var(--font-montserrat)",
	},
  	extend: {
  		colors: {
  			primary : {
				DEFAULT: "#473936",
			},
			secondary : {
				DEFAULT: "#f2dfce",
				100: "#cea39c",
			},
			accent:{
				DEFAULT: "#f19687" ,
				100: "#f2d5c5" ,
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
