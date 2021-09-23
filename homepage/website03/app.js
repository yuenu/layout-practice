let themeControl = document.getElementById('theme-control')
let themeStyle = document.getElementById('theme-style')
themeStyle.href="./assets/main.css"
themeControl.addEventListener('change', function() {
  if(this.checked) {
    themeStyle.href="./assets/default.css"
  } else {
    themeStyle.href="./assets/main.css"
  }
})