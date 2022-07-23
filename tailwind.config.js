module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#FB3E3E",
        
"secondary": "#efcb88",
        
"accent": "#a1abf4",
        
"neutral": "#312A3C",
        
"base-100": "#E9E0F0",
        
"info": "#A0B7F8",
        
"success": "#1DB4A2",
        
"warning": "#AB5C07",
        
"error": "#EC4B79",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}