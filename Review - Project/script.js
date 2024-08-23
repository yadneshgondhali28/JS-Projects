// user reviews array

const reviews = [
  {
    "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "author": "Jurica Koletić",
    "job": "Web Developer",
    "info": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            mollitia, unde quae, expedita quidem est sunt harum culpa
            accusantium repellendus illo soluta earum, ullam quo quisquam porro
            at laudantium. Accusantium cum exercitationem earum nihil dolorem
            sit reiciendis.`,
  },
  {
    "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "author": "Nicolas Horn",
    "job": "System Engineer",
    "info": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            mollitia, unde quae, expedita quidem est sunt harum culpa
            accusantium repellendus illo soluta earum, ullam quo quisquam porro
            at laudantium. Accusantium cum exercitationem earum nihil dolorem
            sit reiciendis.`
  },
  {
    "img": "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "author": "chinemerem",
    "job": "Data Analyst",
    "info": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            mollitia, unde quae, expedita quidem est sunt harum culpa
            accusantium repellendus illo soluta earum, ullam quo quisquam porro
            at laudantium. Accusantium cum exercitationem earum nihil dolorem
            sit reiciendis.`
  },
  {
    "img": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "author": "Erik Lucatero",
    "job": "Figma Developer",
    "info": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            mollitia, unde quae, expedita quidem est sunt harum culpa
            accusantium repellendus illo soluta earum, ullam quo quisquam porro
            at laudantium. Accusantium cum exercitationem earum nihil dolorem
            sit reiciendis.`
  }
];

let personImg = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let randomBtn = document.querySelector(".random-btn");

// initial review
let currentReview = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

rightBtn.addEventListener("click", () => {
  // currentReview = (currentReview + 1) % reviews.length;
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showPerson();
});

leftBtn.addEventListener("click", () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", () => {
  currentReview = Math.floor(Math.random() * reviews.length);
  showPerson();
})


let showPerson = () => {
  let person = reviews[currentReview];
  personImg.src = person.img;
  author.textContent = person.author;
  job.textContent = person.job;
  info.textContent = person.info;
}