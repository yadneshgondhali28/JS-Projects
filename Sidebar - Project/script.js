let menuIcon = document.querySelector(".menu-bar-icon");

let closeBtn = document.querySelector(".close-btn");

let sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
})