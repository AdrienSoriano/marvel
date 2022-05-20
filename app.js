let t = 0;
let p = 0;
const carousel = () => {
  const items = document.querySelector(".carousel-item");
  items.classList.add("active");
  let total = document.querySelectorAll(".carousel-item");

  //   for (let index = 0; index < total.length; index++) {
  //     let el = total[index];
  //   }

  let totalCa = total.length;

  let current = 0;
  const moveRight = document.querySelector("#moveRight");
  const moveLeft = document.querySelector("#moveLeft");
  moveRight.addEventListener("click", () => {
    t++;
    let next = current;
    current = current + 1;
    setSlide(next, current);
  });

  moveLeft.addEventListener("click", () => {
    let prev = current;
    current = current - 1;
    setSlide(prev, current);
  });

  function setSlide(prev, next) {
    let slide = current;
    if (next > totalCa - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = totalCa - 1;
      current = totalCa - 1;
    }

    const carousel = document.querySelectorAll(".carousel-item");
    p = t + 1;
    const currentCarousel = document.querySelector(".carousel-item--" + t);
    if (t === 4) {
      t = 1;
      p = 1;
    }

    const nextCarousel = document.querySelector(".carousel-item--" + p);
    console.log(currentCarousel);
    currentCarousel.classList.remove("active");
    nextCarousel.classList.add("active");

    setTimeout(function () {}, 800);
  }
};
carousel();
