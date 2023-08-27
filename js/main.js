const ForShowCatalog = document.querySelectorAll('.catalog-list');
const btnForCloseCtlg = document.querySelector('.closebtn');
const CatalogShowsBlock = document.querySelector('.shows-block-wrap');

ForShowCatalog?.forEach((ForShowCatalog) => {
    ForShowCatalog.addEventListener('click' , () => {
        CatalogShowsBlock.style.display = "flex";
    })
    btnForCloseCtlg.addEventListener('click' , () => {
        CatalogShowsBlock.style.display = "none";
    })
});

const projectSliderNormalView = document.querySelector('#project-slider-normal');
const projectSliderSwitchedView = document.querySelector('#project-slider-switched');
const switcherForSliders = document.querySelector('#checge-project-block-view');

let isSwitched = false;

switcherForSliders.addEventListener('click', () => {
    if (isSwitched) {
        projectSliderNormalView.classList.remove("shows");
        projectSliderSwitchedView.classList.remove("shows");
    } else {
        projectSliderNormalView.classList.add("shows");
        projectSliderSwitchedView.classList.add("shows");
    }
    
    isSwitched = !isSwitched;
});