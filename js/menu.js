const burgerForOpenMenu = document.querySelectorAll('.burger');
const burgerForCloseMenu = document.querySelector('#closeBurger');
const OpenedMenu = document.querySelector('#menu');
const HeaderForOpenedMenu = document.querySelector('#menu .header');
const CloseMenuFromLogo = document.querySelector('#logo');

burgerForOpenMenu.forEach((openBurgerBtn) => {
    openBurgerBtn.addEventListener('click', () => {
        OpenedMenu.style.display = 'block';
        HeaderForOpenedMenu.style.display = 'flex';
    })
})
burgerForCloseMenu.addEventListener('click', () => {
    OpenedMenu.style.display = 'none';
    HeaderForOpenedMenu.style.display = 'none';
})

CloseMenuFromLogo.addEventListener('click', () => {
    OpenedMenu.style.display = 'none';
})


const fixedPageHeader = document.querySelector('#header');
const secondSection = document.querySelector('#second-section');

function checkPagePosition() {
    const pagePosition = window.scrollY;
    if (pagePosition >= 1010) {
        fixedPageHeader.classList.add('fixed');
        secondSection.classList.add('fixed');

    } else {
        fixedPageHeader.classList.remove('fixed');
        secondSection.classList.remove('fixed');
    }
}
window.addEventListener('scroll', checkPagePosition);
checkPagePosition();