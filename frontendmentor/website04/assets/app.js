// Variables
const bookmark = document.querySelector("#bookmark");
const radioList = document.querySelectorAll('input[type="radio"]')
const hamburgerMenu = document.querySelector('.hamburger')


hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active')
})

// Event Listener
bookmark.addEventListener("click", function () {
  if (bookmark.lastElementChild.innerHTML === "bookmarked") {
    bookmark.lastElementChild.innerHTML = "bookmark";
  } else {
    bookmark.lastElementChild.innerHTML = "bookmarked";
  }
  bookmark.classList.toggle("booked");
});


radioList.forEach((elem) => {
  elem.addEventListener('change', function(e) {
    // Remove all the 'active className'
    for(let item of radioList) {
      item.parentElement.parentElement.parentElement.parentElement.classList.remove('active')
    }
    // add the toggel One class
    const card = e.target.parentElement.parentElement.parentElement.parentElement
    card.classList.add('active')
  })
})

