const readMoreBtn = document.querySelectorAll(".read-more-btn");
const text = document.querySelectorAll(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
});
console.log(readMoreBtn);
