let btn = document.getElementById("ibtn");
let color = document.querySelector(".color-code");

btn.addEventListener("click", () => {
  let rgbColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
  document.body.style.backgroundColor = rgbColor;
  color.textContent = rgbColor;
})

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}