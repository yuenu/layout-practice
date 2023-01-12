const hamburgerBtn = document.querySelector('.hamburger-menu')
const mobileNavMenu = document.querySelector('.hamburger-nav-menu')
const hamburgerImg = document.querySelector('.hamburger-menu img')


function debounce(func, delay){
  let timeout = null;
  return function(){
    let context = this;  
    let args = arguments;
    clearTimeout(timeout)

    timeout = setTimeout(function(){
      func.apply(context, args)
    }, delay)
  }
}

function hamburgerOpen() {
  mobileNavMenu.classList.add('active')
  hamburgerImg.src = "./assets/images/icon-menu-close.svg"
}

function hamburgerClose() {
  mobileNavMenu.classList.remove('active')
  hamburgerImg.src = "./assets/images/icon-menu.svg"
}


hamburgerBtn.addEventListener('click', () => {
  hamburgerImg.dataset.clicked = hamburgerImg.dataset.clicked === '0' ? '1' : '0'
  hamburgerImg.dataset.clicked === '0' ? hamburgerClose() : hamburgerOpen()
})

window.addEventListener("resize",debounce(function(e){
  hamburgerImg.dataset.clicked = '0'
  hamburgerClose()
}, 500));