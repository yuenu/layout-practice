function menuToggle() {
  const img = document.querySelector(".header__mobile__menu");
  const navigation = document.querySelector(".header__mobile__navigation");
  navigation.classList.toggle("active");
  let isToggle = img.classList.toggle("active");
  

  img.src = isToggle
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";
}
