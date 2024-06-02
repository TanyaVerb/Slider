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

//подсвечиваем выбранную по дефолту картинку
dotActive();
//___
function dotActive() {
  dots[orderImg].classList.add("active");
}

function removeActiveClass() {
  dots[orderImg].classList.remove("active");
}

function scrollSlider() {
  const value = orderImg * width;
  sliderLine.style.transform = `translate(-${value}px)`;
}
//__
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    removeActiveClass();
    orderImg = index;
    dotActive();
    scrollSlider();
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
