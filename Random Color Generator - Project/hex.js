let hex_codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("ibtn");
let color = document.querySelector(".color-code");
color.style.width = "108px";

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex_codes[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex_codes.length);
}