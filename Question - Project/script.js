
// // traversing the dom
// const btns = document.querySelectorAll(".btns");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-txt");
//   })
// })

// using selectors inside the element
const questions = document.querySelectorAll(".que-container");

questions.forEach(function (question) {
  const btn = question.querySelector(".btns");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-txt");
      }
    });
    question.classList.toggle("show-txt");
  });
});