
let btn = document.querySelector(".btn");
let overlay = document.querySelector(".overlay-container");

btn.addEventListener("click", () => {
  document.body.classList.toggle("show-blue-cover");
  overlay.style.display = "flex";
})

let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-blue-cover");
  overlay.style.display = "none";
})