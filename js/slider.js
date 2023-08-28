
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
    slides.forEach((slides , index) => {
        slides.classList.remove("active");
        if(index === activeSlideIndex){
            slides.classList.add("active");
        }
    });
}

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
        activeSlideIndex++;
    }else{
        activeSlideIndex = 0;
    }
    setActiveSlide();
};

backbtn.addEventListener('click' , backSlide);
nextBtn.addEventListener('click' , nextSlide);