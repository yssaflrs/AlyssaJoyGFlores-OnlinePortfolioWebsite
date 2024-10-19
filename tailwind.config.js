export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "376px",
        Tablet : "900px",
        Desktop: "1440px",
      },
      
      colors: {

        "primary-black": "#202125",
        "white" : "#EEEEEE"  ,
        "light-violet" : "#7a62d9",
        "light-gray-opacity" : "#3D3C43",
        "light-orange" : "#fb7b45"
      },
    },
  },
  plugins: [],
};