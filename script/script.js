const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navThemeBtn = $('.header__nav-btn.nav-btn--theme');
const modalTheme = $(' .modal__theme');
const closeModalBtn = $(' .modal__close-btn')

const songLists = Array.from($$('.playlist__list-song'));




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



//Handle when click on icons heart
songLists.forEach(songList => {
    songList.onclick = function(e) {
        const heartIconBtn = e.target.closest('.song-btn--heart');
        const micIconBtn = e.target.closest('.btn--mic')
        // console.log(heartIconBtn, "Parents")


        //Handle when click on icons heart
        if (heartIconBtn) {
            const heartIcon =heartIconBtn.firstElementChild;
            // console.log(heartIcon, "Child")

            if(heartIcon.classList.contains('primary')){
                heartIcon.classList.replace('bi-heart-fill', 'bi-heart');
            }
            else {
                heartIcon.classList.replace('bi-heart', 'bi-heart-fill');
                heartIcon.classList.toggle('primary');
            }
        }

        ////Handle when click on icons miccro
        if(micIconBtn) {
            const micIcon = micIconBtn.firstElementChild
            micIcon.classList.toggle('primary');
    
        }



    }
});

