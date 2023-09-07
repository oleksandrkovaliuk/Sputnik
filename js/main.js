const ForShowCatalog = document.querySelectorAll('.catalog-list');
const btnForCloseCtlg = document.querySelector('.closebtn');
const CatalogShowsBlock = document.querySelector('.shows-block-wrap');
const catalogMobileBlocks = document.querySelectorAll('.catalog-mobile-block');
const catalogMobileList = document.querySelectorAll('.catalog-list-container');

ForShowCatalog.forEach((ForShowCatalogItem) => {
        ForShowCatalogItem.addEventListener('click', () => {
            if(window.innerWidth > 1080) {
                CatalogShowsBlock.style.display = "flex";
            }
        })
        btnForCloseCtlg.addEventListener('click', () => {
            if(window.innerWidth > 1080) {
                CatalogShowsBlock.style.display = "none";
            }
        })
});

function changeDisplay(block) {
    if(window.innerWidth <= 1080) {
        if(block.style.display === 'block') {
            block.style.display = 'none';
        } else {
            block.style.display = 'block';
        }
    }
}

let flag = false;
function showMobileBlock() {
    if(!flag) { 
        catalogMobileList.forEach((item, index) => {
            let block = catalogMobileBlocks[index]
            item.addEventListener('click', () => changeDisplay(block))
        })
        flag = true;
    }
}

function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1080 && windowWidth >= 0) {
        CatalogShowsBlock.style.display = 'none';
        showMobileBlock();
    } else {
        catalogMobileBlocks.forEach(item => {
            item.style.display = 'none';
        })
    }
};

window.addEventListener('load', handleWindowResize);
window.addEventListener('resize', handleWindowResize);


