import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2.5': '10px',
        '62' : '250px',
        '42' :'167px',
        '5.5' : '22px',
        '7.5' : '30px',
        '8.2': '33px',
        '43' :'170px',
        '29' : '120px',
        '15' :'60px',
        '8.5/12' : '72%',
        '37' : '150px'
      },
      colors: {
        'native' : '#FA8B02',
        'wh-opacity' : 'rgba(255, 255, 255, 0.2)',
        'graien' : '#333333',
        'pink-opacity' : 'rgba(255, 255, 255, 0.3)',
        'graien-opacity' : 'rgba(51, 51, 51, 0.8)',
        'graien-opacity2' : 'rgba(51, 51, 51, 0.6)',
        'white-opacity6' : 'rgba(255, 255, 255, 0.4)',
        'arrow' : '#EFEFEF'
        
      },
      borderRadius: {
        '5xl': '50px',
      },
      backgroundImage: {
        'hero-pattern': "url('./images/background/hero.png')",
        'linear' : "url('./images/background/background.png')",
        'about-hero' : "url('./images/background/about-hero.png')"
      },
      fontSize: {
        '3.5xl': '32px' },
        lineHeight: {
          '5.5': '22px',
        },
        boxShadow: {
          '3xl': '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
        },
        fontFamily: {
          "podcast" : "var(--podcast-font)",
          'open-sance' : "var(--open-sance)"
        },
      screens: {
        'tablet': '640px',

  
        'laptop': '992px',

        'full-desktop': '1830px',
  
      },
    },
  },
  plugins: [],
};
export default config;
