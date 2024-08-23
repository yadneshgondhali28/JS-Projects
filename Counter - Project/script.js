// let decBtn = document.getElementById("decbtn");
// let resBtn = document.getElementById("resbtn");
// let incBtn = document.getElementById("incbtn");
// let showArea = document.querySelector(".show-area");

// let value = 0;

// decBtn.addEventListener("click", () => {
//   value += -1;
//   showArea.style.color = "rgb(234, 17, 17)";
//   showArea.textContent = value;
// })

// resBtn.addEventListener("click", () => {
//   value = 0;
//   showArea.style.color = "black";
//   showArea.textContent = 0;
// })

// incBtn.addEventListener("click", () => {
//   showArea.style.color = "rgb(7, 186, 24)";
//   value += 1;
//   showArea.textContent = value;
// })

let count = 0;

let value = document.getElementById("value");

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let classes = e.currentTarget.classList;
    if (classes.contains("dec-btn")) {
      count--;
    } else if (classes.contains("inc-btn")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  })
})