const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navThemeBtn = $('.header__nav-btn.nav-btn--theme');
const modalTheme = $(' .modal__theme');
const closeModalBtn = $(' .modal__close-btn')



//Open and close model theme
navThemeBtn.onclick = (e) => {
    modalTheme.classList.add('open')
}

modalTheme.onclick = (e) => {
    const themContainer = e.target.closest('.modal__theme .modal__theme-container')
    if (themContainer) {
        e.stopPropagation()
    }
    else {
        modalTheme.classList.remove('open')
    }
}
closeModalBtn.onclick = (e) => {
    modalTheme.classList.remove('open')
}