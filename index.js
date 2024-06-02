const sliderWrapper = document.querySelector(".slider__container");
const sliderLine = document.querySelector(".slider__line");
const images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".slider__dot");
console.log(dots[0]);
const nextBtn = document.querySelector(".slider__next-btn");
const prevBtn = document.querySelector(".slider__prev-btn");

// transform: translate(-400px)
let orderImg = 0; // индекс текущего изображения
let width; //ширина одного изображения
console.log(width);

//устанавливает ширину элемента sliderLine= сумме ширин всех изображений. Исп-ся для инициализации размеров слайдера при загрузке и при изменении размера окна.
function setWidthLine() {
  width = sliderWrapper.offsetWidth; //ширина из-я = ширине контейнера
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });

  console.log("width", width);
  console.log("widthLine", sliderLine.style.width);
}

//срабатывает при изменении размера представления документа (окна) и вызывает функцию setWidthLine для установки начальных размеров
window.addEventListener("resize", setWidthLine);
setWidthLine();

//подсвечиваем выбранную по дефолту картинку (точку)
dotActive();
//___
//добавляет класс "active" к текущей точке
function dotActive() {
  dots[orderImg].classList.add("active");
}

function removeActiveClass() {
  dots[orderImg].classList.remove("active");
}
//вычисляет значение смещения value для sliderLine в зав-ти от orderImg и width
function scrollSlider() {
  const value = orderImg * width;
  sliderLine.style.transform = `translate(-${value}px)`;
}
//__
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    removeActiveClass();
    orderImg = index; //устанавливается в индекс кликнутой точки
    dotActive();
    scrollSlider(); //перемещаем слайдер к соотв.изоб-нию
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
    orderImg = images.length - 1; //переход к последнему из-ю
  }
  dotActive();
  scrollSlider();
});
