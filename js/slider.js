
const slides = document.querySelectorAll("#project-slider-normal .slide-block");

const backbtn = document.querySelector(".backbtn");
const nextBtn = document.querySelector(".nextbtn");

const btn1 = document.querySelector(".sliderbtn1");
const btn2 = document.querySelector(".sliderbtn2");
const btn3 = document.querySelector(".sliderbtn3");
const btn4 = document.querySelector(".sliderbtn4");

let activeSlideIndex = 0;

const lengthOfSlides = slides.length;
const widthOfSlide = slides[0].getBoundingClientRect().width;

const setActiveSlide = () => {
    slides.forEach((slides) => {
        slides.classList.remove("active");
    });
    slides[activeSlideIndex].classList.add("active");
}

setActiveSlide();

const backSlide = () => {
    if(activeSlideIndex >= 1){
        activeSlideIndex--;
    } else{
        activeSlideIndex = lengthOfSlides - 1 ;
    }
    setActiveSlide();
};

const nextSlide = () => {
    if(activeSlideIndex <= lengthOfSlides - 1){
        activeSlideIndex = 0;
    }else{
        activeSlideIndex++;
    }
    setActiveSlide();
};

backbtn.addEventListener('click' , backSlide);
nextBtn.addEventListener('click' , nextSlide);


btn1.addEventListener('click' , () => {
    activeSlideIndex = 0 ;
    setActiveSlide();
})
btn2.addEventListener('click' , () => {
    activeSlideIndex = 1 ;
    setActiveSlide();
})
btn3.addEventListener('click' , () => {
    activeSlideIndex = 2 ;
    setActiveSlide();
})
btn4.addEventListener('click' , () => {
    activeSlideIndex = 3 ;
    setActiveSlide();
})