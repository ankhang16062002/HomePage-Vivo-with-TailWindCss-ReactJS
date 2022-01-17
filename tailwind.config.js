module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "black",
        "second-color": "#f0f2f5",
      },
      fontFamily: {
          "popins": ["Poppins", "sans-serif"]
      },
      fontSize: {
          "16": "16px",
          "20": "20px",
          "24": "24px",
          "28": "28px",
          "32": "32px",
          "36": "36px",
          "40": "40px",
      },
      screens: {
        'sm': '500px',
        '2xl': '1400px'
      }
    },
  },
  plugins: [],
}