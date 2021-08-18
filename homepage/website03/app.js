// let theme = localStorage.getItem('theme')

let themeControl = document.getElementById('theme-control')

themeControl.addEventListener('change', function() {
  let themeStyle = document.getElementById('theme-style')
  if(this.checked) {
    themeStyle.href="./assets/default.css"
  } else {
    themeStyle.href="./assets/main.css"
  }
})