let bookmark = document.querySelector("#bookmark");

bookmark.addEventListener("click", function () {
  if (bookmark.lastElementChild.innerHTML === "bookmarked") {
    bookmark.lastElementChild.innerHTML = "bookmark";
  } else {
    bookmark.lastElementChild.innerHTML = "bookmarked";
  }
  bookmark.classList.toggle("booked");
});
