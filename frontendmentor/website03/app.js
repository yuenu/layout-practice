let themeControl = document.getElementById('theme-control')
let themeStyle = document.getElementById('theme-style')
themeControl.addEventListener('change', function() {
  if(this.checked) {
    themeStyle.href="./assets/default.css"
  } else {
    themeStyle.href="./assets/main.css"
  }
})