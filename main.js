const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

const readMoreBtnOne = document.querySelector(".read-more-btn-one");
const textOne = document.querySelector(".text-one");

readMoreBtnOne.addEventListener("click", (e) => {
  textOne.classList.toggle("show-moreOfOne");
  if (readMoreBtnOne.innerText === "Read More") {
    readMoreBtnOne.innerText = "Read Less";
  } else {
    readMoreBtnOne.innerText = "Read More";
  }
});

const readMoreBtnTwo = document.querySelector(".read-more-btn-two");
const textTwo = document.querySelector(".text-two");

readMoreBtnTwo.addEventListener("click", (e) => {
  textTwo.classList.toggle("show-moreOfTwo");
  if (readMoreBtnTwo.innerText === "Read More") {
    readMoreBtnTwo.innerText = "Read Less";
  } else {
    readMoreBtnTwo.innerText = "Read More";
  }
});

const readMoreBtnThree = document.querySelector(".read-more-btn-three");
const textThree = document.querySelector(".text-three");

readMoreBtnThree.addEventListener("click", (e) => {
  textThree.classList.toggle("show-moreOfThree");
  if (readMoreBtnThree.innerText === "Read More") {
    readMoreBtnThree.innerText = "Read Less";
  } else {
    readMoreBtnThree.innerText = "Read More";
  }
});

const readMoreBtnFour = document.querySelector(".read-more-btn-four");
const textFour = document.querySelector(".text-four");

readMoreBtnFour.addEventListener("click", (e) => {
  textFour.classList.toggle("show-moreOfFour");
  if (readMoreBtnFour.innerText === "Read More") {
    readMoreBtnFour.innerText = "Read Less";
  } else {
    readMoreBtnFour.innerText = "Read More";
  }
});

const readMoreBtnFive = document.querySelector(".read-more-btn-five");
const textFive = document.querySelector(".text-five");

readMoreBtnFive.addEventListener("click", (e) => {
  textFive.classList.toggle("show-moreOfFive");
  if (readMoreBtnFive.innerText === "Read More") {
    readMoreBtnFive.innerText = "Read Less";
  } else {
    readMoreBtnFive.innerText = "Read More";
  }
});

const readMoreBtnSix = document.querySelector(".read-more-btn-six");
const textSix = document.querySelector(".text-six");

readMoreBtnSix.addEventListener("click", (e) => {
  textSix.classList.toggle("show-moreOfSix");
  if (readMoreBtnSix.innerText === "Read More") {
    readMoreBtnSix.innerText = "Read Less";
  } else {
    readMoreBtnSix.innerText = "Read More";
  }
});
