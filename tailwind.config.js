/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      spacing:{
        1:'0.25rem',
        2:'0.5rem',
        3:'0.75rem',
        4:'1rem',
        8:'2rem',
        12:"3rem",
        16:"4rem",
        20:'5rem',
        24:'6rem',
        28:'7rem',
        32:'8rem',
        34:'9rem',
        38:'10rem',
        42:'11rem',
        46:'20rem',
      },
      fontSize:{
        xs:'0.75rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        10:['10px'],
        11:['11px'],
        12:['12px'],
        13:['13px'],
        14:['14px'],
      },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#fec321',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        "background-color":"#f8f7e7",
        "white":"#fff",
        'footer-background':"#ede1d7"
      },
      
    },
    extend: {
   
      backgroundImage: {
        'hero-pattern': "url('/image/download.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
  },
  plugins: [],
}
