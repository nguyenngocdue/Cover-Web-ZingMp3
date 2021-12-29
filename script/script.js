const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navThemeBtn = $('.header__nav-btn.nav-btn--theme');
const modalTheme = $(' .modal__theme');
const closeModalBtn = $(' .modal__close-btn')
const songLists = Array.from($$('.playlist__list-song'));
const songListquick = Array.from($$('.player-quick__list'));

const appContainers = Array.from($$('.app__container'));
const sidebarNavItems = Array.from($$('.sidebar__nav-list .sidebar__nav-item'));
const header = $('.header');
// const App = $('.app');




    //Open and close model theme
    navThemeBtn.onclick = (e) => {
        modalTheme.classList.add('open')
    },
    
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


    //Handle when click on icons heart on Songs of quick bar
    songListquick.forEach (songList => {
        songList.onclick = function(e) {
            const heartIconBtn = e.target.closest('.song-btn--heart');
            // console.log(heartIconBtn)

            if (heartIconBtn) {
                const heartIcon = heartIconBtn.firstElementChild;
                if (heartIcon.classList.contains('primary')){
                    heartIcon.classList.replace('bi-heart-fill', 'bi-heart')
                    heartIcon.classList.remove('primary')
                }
                else {
                    heartIcon.classList.replace('bi-heart', 'bi-heart-fill');
                    heartIcon.classList.toggle('primary')
                }
            }
        }

    })
    
    
    
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
                    heartIcon.classList.remove('primary');

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
    })
    
        //Handle when click on siderbar items
        sidebarNavItems.forEach((sidebarNavItem, index) => {
            sidebarNavItem.onclick = (e) => {
                // Object.assign(header.style, {
                //     backgroundColor: 'transparent',
                //     boxShadow: 'none',
                // })

                $('.app__container.active').classList.remove('active');
                appContainers[index].classList.add('active')

                $('.sidebar__nav-item.active').classList.remove('active');
                sidebarNavItems[index].classList.add('active');        
            }
        
        });
    
    
        const firstSlide = $('.explore__slide-item.first');
        const secondSlide = $('.explore__slide-item.second');
        const thirdSlide = $('.explore__slide-item.third');
        const fourthSlide = $('.explore__slide-item.fourth');
        const sixthSlide = $('.explore__slide-item.sixth');
const app = {
   
    prevSlide: function() {
        const slideMoveItems = Array.from($$('.explore__slide-container .explore__slide-item'));
        $('.explore__slide-item.next').classList.remove('next');
        $('.explore__slide-item.prev').classList.remove('prev');

        const fifthSlideIndex = slideMoveItems.indexOf(sixthSlide) === 0 ? slideMoveItems.length - 1 : slideMoveItems.indexOf(sixthSlide) - 1;

        const fifthSlide = slideMoveItems[fifthSlideIndex]; //gán fifthSlide cho vị trí sau lưng sixth ; OUT = 2
  
        fifthSlide.classList.replace('first', 'second');
        secondSlide.classList.replace('second', 'third');
        thirdSlide.classList.add('prev');
        thirdSlide.classList.replace('third', 'fourth');
        fourthSlide.classList.replace('fourth', 'fifth');
        fifthSlide.classList.replace('fifth', 'sixth');
        sixthSlide.classList.add('next');
        sixthSlide.classList.replace('sixth', 'first'); 
    },
    nextSlide: function(){
        const slideMoveItems = Array.from($$('.explore__slide-container .explore__slide-item'));
        $('.explore__slide-item.next').classList.remove('next');
        $('.explore__slide-item.prev').classList.remove('prev');
        const fifthSlideIndex = slideMoveItems.indexOf(firstSlide) === slideMoveItems.length - 1 ? 0 : slideMoveItems.indexOf(firstSlide) +1;

        console.log(slideMoveItems)

        const fifthSlide = slideMoveItems[fifthSlideIndex];
        console.log(fifthSlide, slideMoveItems.indexOf(fifthSlide))

        firstSlide.classList.add('prev');
        firstSlide.classList.replace('first', 'sixth');
        secondSlide.classList.replace('second', 'first');
        thirdSlide.classList.replace('third', 'second');
        fourthSlide.classList.add('next');
        fourthSlide.classList.replace('fourth', 'third');
        fifthSlide.classList.replace('fifth', 'fourth');
        sixthSlide.classList.replace('sixth', 'fifth')

    
    },
    handleEvents: function(){
        const _this = this;
        const slideMove = $('.explore__slide-container .explore__slide-item');



        // Handle when click on explore slide show move buttons
        function exploreSlideShow() {
            _this.nextSlide();
            let autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
            slideMove.onclick = (e) => {
                const prevBtn = e.target.closest('.slide__move-btn.btn--prev')
                const nextBtn = e.target.closest('.slide__move-btn.btn--next')
                
                if(prevBtn) {
                    _this.prevSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
                }
    
                if(nextBtn) {
                    _this.nextSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
                }
            }
           
        }
        exploreSlideShow()
    },




    start: function() {
        this.prevSlide();
        this.nextSlide();
        this.handleEvents();

    },
};

app.start();
