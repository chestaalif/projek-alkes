/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}"
    ],
    "theme": {
          "extend": {
                "colors": {
                      "black": "#000",
                      "gainsboro": "rgba(224, 226, 230, 0.3)",
                      "dimgray": {
                            "100": "#4c4c4c",
                            "200": "rgba(113, 113, 113, 0.6)"
                      },
                      "silver": "#b5b5b5",
                      "white": "#fff",
                      "slateblue": "#5748ba",
                      "cornflowerblue": "#6893d8",
                      "orchid": "#bb54a0",
                      "coral": "#fe7f5a",
                      "gray": {
                            "100": "rgba(255, 255, 255, 0.5)",
                            "200": "rgba(0, 0, 0, 0.4)",
                            "300": "rgba(255, 255, 255, 0.4)"
                      }
                },
                "spacing": {},
                "fontFamily": {
                      "poppins": "Poppins",
                      "playfair-display": "'Playfair Display'"
                },
                "borderRadius": {
                      "3xs": "10px",
                      "93xl-5": "112.5px"
                }
          },
          "fontSize": {
                "smi": "13px",
                "17xl": "36px",
                "sm": "14px",
                "xs": "12px",
                "3xs": "10px",
                "5xl": "24px",
                "inherit": "inherit"
          }
    },
    "corePlugins": {
          "preflight": false
    }
}