let btn = document.getElementById("ibtn");
let color = document.querySelector(".color-code");

btn.addEventListener("click", () => {
  let hslColor = `hsl(${getRandomNumber()}, ${getRandomPercent()}%, ${getRandomPercent()}%)`;
  document.body.style.backgroundColor = hslColor;
  color.textContent = hslColor;
})

function getRandomNumber() {
  return Math.floor(Math.random() * 361)
}

function getRandomPercent() {
  return Math.floor(Math.random() * 101)
}