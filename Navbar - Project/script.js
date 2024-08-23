// selecting menu icon.
let menuIcon = document.getElementById("menu-icon");

// selecting links
let navLinks = document.querySelector(".nav-links");

// adding event listener to menu icon.
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
})


