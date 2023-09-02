const slidesParent = document.querySelector("#project-slider-normal");
const slides = document.querySelectorAll("#project-slider-normal .slide-block");

const backbtn = document.querySelector(".backbtn");
const nextBtn = document.querySelector(".nextbtn");

const btn1 = document.querySelector(".sliderbtn1");
const btn2 = document.querySelector(".sliderbtn2");
const btn3 = document.querySelector(".sliderbtn3");
const btn4 = document.querySelector(".sliderbtn4");

let activeSlideIndex = 0;

const lengthOfSlides = slides.length - 1;
const widthOfSlide = slides[activeSlideIndex].getBoundingClientRect().width;

const setActiveSlide = () => {
  slides.forEach((slides) => {
    slides.classList.remove("active");
  });
  slides[activeSlideIndex].classList.add("active");
};

setActiveSlide();

const backSlide = () => {
  if (activeSlideIndex >= 1) {
    activeSlideIndex--;
    slidesParent.style.transform = `translate3d(-${(widthOfSlide * activeSlideIndex)}px, 0, 0)`;
  } else {
    activeSlideIndex = lengthOfSlides;
    slidesParent.style.transform = `translate3d(-${(widthOfSlide * lengthOfSlides)}px, 0, 0)`;
  }
  setActiveSlide();
};

const nextSlide = () => {
  if (activeSlideIndex === lengthOfSlides) {
    activeSlideIndex = 0;
    slidesParent.style.transform = `translate3d(0, 0, 0)`;
  } else {
    activeSlideIndex++;
    slidesParent.style.transform = `translate3d(-${(widthOfSlide * activeSlideIndex + 1)}px, 0, 0)`;
  }
  setActiveSlide();
};

backbtn.addEventListener("click", backSlide);
nextBtn.addEventListener("click", nextSlide);

btn1.addEventListener("click", () => {
  activeSlideIndex = 0;
  setActiveSlide();
  slidesParent.style.transform = `translate3d(0, 0, 0)`;
});
btn2.addEventListener("click", () => {
  activeSlideIndex = 1;
  setActiveSlide();
  slidesParent.style.transform = `translate3d(-${(widthOfSlide * activeSlideIndex + 1)}px, 0, 0)`;
});
btn3.addEventListener("click", () => {
  activeSlideIndex = 2;
  setActiveSlide();
  slidesParent.style.transform = `translate3d(-${(widthOfSlide * activeSlideIndex + 1)}px, 0, 0)`;
});
btn4.addEventListener("click", () => {
  activeSlideIndex = 3;
  setActiveSlide();
  slidesParent.style.transform = `translate3d(-${(widthOfSlide * activeSlideIndex + 1)}px, 0, 0)`;
});
