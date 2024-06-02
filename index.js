const sliderWrapper = document.querySelector(".slider__container");
const sliderLine = document.querySelector(".slider__line");
const images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".slider__dot");
console.log(dots[0]);
const nextBtn = document.querySelector(".slider__next-btn");
const prevBtn = document.querySelector(".slider__prev-btn");

// transform: translate(-400px)
let orderImg = 0;
let width;
console.log(width);

// dots[orderImg].classList.add("active");

function setWidthLine() {
  width = sliderWrapper.offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });

  console.log("width", width);
  console.log("widthLine", sliderLine.style.width);
}

//срабатывает при изменении размера представления документа (окна)
window.addEventListener("resize", setWidthLine);
setWidthLine();

dotActive();
//___
function dotActive() {
  dots[orderImg].classList.add("active");
}

function removeActiveClass() {
  dots[orderImg].classList.remove("active");
}

//__
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const value = index * width;
    sliderLine.style.transform = `translate(-${value}px)`;
  });
});

//___

nextBtn.addEventListener("click", function () {
  removeActiveClass();
  orderImg++;
  if (orderImg > images.length - 1) {
    orderImg = 0;
  }
  dotActive();

  scrollSlider();
});

prevBtn.addEventListener("click", function () {
  removeActiveClass();
  orderImg--;
  if (orderImg < 0) {
    orderImg = images.length - 1;
  }
  dotActive();

  scrollSlider();
});

function scrollSlider() {
  const value = orderImg * width;
  sliderLine.style.transform = `translate(-${value}px)`;
}
