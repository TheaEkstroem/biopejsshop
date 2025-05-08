/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        100: "#FDFDFC",
        200: "#FDFDFC",
        300: "#FBFAF9",
        400: "#F9F8F6",
        500: "#F7F6F4",
        600: "#CEC7BB",
        700: "#A59A82",
        800: "#736954",
        900: "#383329",
        950: "#1D1B15",
      },
      black: {
        100: "#D9D9D9",
        200: "#B3B3B3",
        300: "#8C8C8C",
        400: "#636363",
        500: "#3E3E3E",
        600: "#303030",
        700: "#262626",
        800: "#1A1A1A",
        900: "#0D0D0D",
        950: "#050505",
      },
      brown: {
        100: "#BFAFA7",
        200: "#9F897B",
        300: "#766356",
        400: "#4B3F37",
        500: "#3B312B",
        600: "#2C2520",
        700: "#1D1916",
      },
      orange: {
        100: "#F8D4AA",
        200: "#F5BE80",
        300: "#F0A651",
        400: "#ED9128",
        500: "#CA7410",
        600: "#9B590E",
        700: "#683B09",
      },
      yellow: {
        100: "#F3E6BE",
        200: "#EEDAA0",
        300: "#E7CD7D",
        400: "#E2C15F",
        500: "#D8AC26",
        600: "#A4821E",
        700: "#6D5615",
      },
      blue: {
        100: "#BDCBF3",
        200: "#A1B3EE",
        300: "#7D98E8",
        400: "#5F80E2",
        500: "#2753D8",
        600: "#1E3FA4",
        700: "#0A2D68",
      },
    },

    // 'white': '#fff',
    //   'black': '#000',
    //   },

    /* Tilføj din egen spacing nedenfor */
    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxxs: "4px",
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "56px",
      xl: "64px",
      "2xl": "72px",
      "3xl": "80px",
      "4xl": "88px",
      "5xl": "96px",
      "6xl": "104px",
      "7xl": "112px",
      "8xl": "120px",
      "9xl": "128px",
      "10xl": "136px",
    },
    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      cormorant: ["Cormorant", "serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    // fontSize: {
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     large: ['2.5rem', { lineHeight: '3.75rem' }],
    //   },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "1px",
      3: "2px",
      4: "3px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      DEFAULT: "1.25rem",
      none: "0px",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "100px",
    },

    /* Box shadows herunder */
    boxShadow: {
      drop25:
        "2px 2px 2px 0 rgb(0 0 0 / 0.20)" /* x y blur spread farve / opacity */,
      drop50:
        "4px 4px 4px 0 rgb(0 0 0 / 0.50)" /* x y blur spread farve / opacity */,
      inner25:
        "0px 4px 4px 0 rgb(0 0 0 / 0.25)/inset" /* x y blur spread farve / opacity */,
      inner50:
        "0px 4px 4px 0 rgb(0 0 0 / 0.50)/inset" /* x y blur spread farve / opacity */,
    },

    extend: {
      /* Tilføj din egen farvepalette nedenfor */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        brand: {
          blue: "#5E718F",
          purple: "#DBD2E9",
          yellow: "#EBE089",
          rosa: "#6C4852",
        },
        background: {
          white: "#FDFDFC",
          beige: "#F7F5F1",
          rosa: "#7C545F",
          blue: "#7586A4",
        },
        font: {
          white: "#FDFDFC",
          black: "#221E1F",
        },
      },


      //     'white': '#fff',
      //     'black': '#000',
      // },

      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },

      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },

      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },

      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },

      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
