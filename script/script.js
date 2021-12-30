
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

const exploreSlideLists = Array.from($$(' .explore__slide-container'))

const App = $('.app');

const listExploreSlide = [
    {image: "./assets/img/Explore/1.jpg"},
    {image: "./assets/img/Explore/2.jpg"},
    {image: "./assets/img/Explore/3.jpg"},
    {image: "./assets/img/Explore/4.jpg"},
    {image: "./assets/img/Explore/5.jpg"},
    {image: "./assets/img/Explore/6.jpg"},
    {image: "./assets/img/Explore/7.jpg"},
    {image: "./assets/img/Explore/8.jpg"},
];
const EXPLORE_SLIDE_STORAGE_KEY = 'VIK_EPLORE_SLIDE';
localStorage.setItem(EXPLORE_SLIDE_STORAGE_KEY, JSON.stringify(listExploreSlide));



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
    



const app = {
    
    exploreSlides: JSON.parse(localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY) || '[]'),

    html([first, ...string], ...values) {
        return values.reduce((acc, cur) => acc.concat(cur, string.shift()), [first])
        .filter(x => x && x !== true || x === 0)
        .join('')       
    },

    renderExploreSlide() {
        exploreSlideLists.forEach((exploreSlideList, SlideIndex) => {
            exploreSlideList.innerHTML = app.html`
            <div class="explore__slide-move">
                <button class="explore__slide-btn btn--prev">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <button class="explore__slide-btn btn--next">
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
            
            
            ${this.exploreSlides.map((exploreSlide, index) => {
                return app.html`
                    <div
                        class="col col-3 explore__slide-item 
                        ${index === 0 && 'first next' }
                        ${index === 1 && 'second'}
                        ${index === 2 && 'third'}
                        ${index === 3 && 'fourth'}
                        ${index > 3 && index < app.exploreSlides.length - 1 && 'fifth'}
                        ${index === app.exploreSlides.length -1 && 'sixth prev'} 
                    ">
                        <div class="explore__slide-col-display">
                            <div class="explore__slide-img img-pos" style="background: url('${exploreSlide.image}') no-repeat center  center / cover;"></div>
                        </div>
                    </div>
                    `
            })}
            `
        })
        
        
    },
    prevSlide: function() {
        const slideMoveItems = Array.from($$('.explore__slide-container .explore__slide-item'));
        
        $('.explore__slide-item.next').classList.remove('next');
        $('.explore__slide-item.prev').classList.remove('prev');
        
        const firstSlide = $('.explore__slide-item.first');
        const secondSlide = $('.explore__slide-item.second');
        const thirdSlide = $('.explore__slide-item.third');
        const fourthSlide = $('.explore__slide-item.fourth');
        const sixthSlide = $('.explore__slide-item.sixth');
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

        const firstSlide = $('.explore__slide-item.first');
        const secondSlide = $('.explore__slide-item.second');
        const thirdSlide = $('.explore__slide-item.third');
        const fourthSlide = $('.explore__slide-item.fourth');
        const sixthSlide = $('.explore__slide-item.sixth');
        const fifthSlideIndex = slideMoveItems.indexOf(firstSlide) === slideMoveItems.length - 1 ? 0 : slideMoveItems.indexOf(firstSlide) +1;


        const fifthSlide = slideMoveItems[fifthSlideIndex];
        
        console.log(firstSlide, "firstSlide02")
        
        firstSlide.classList.add('prev');
        console.log(firstSlide, "thêm prev")



        console.log(fourthSlide, "check1")
        fourthSlide.classList.add('next');
        console.log(fourthSlide, "thêm next")

        
        firstSlide.classList.replace('first', 'sixth');
        console.log(firstSlide, "firstSlide2")

        console.log(secondSlide, "secondSlide bf")
        secondSlide.classList.replace('second', 'first');
        console.log(secondSlide, "secondSlide af")

        thirdSlide.classList.replace('third', 'second');
        console.log(thirdSlide, "thirdSlide")
        
        
        
        fourthSlide.classList.replace('fourth', 'third');
        console.log(fourthSlide, "fourthSlide")

        fifthSlide.classList.replace('fifth', 'fourth');
        console.log(fifthSlide, "fifthSlide")

        sixthSlide.classList.replace('sixth', 'fifth') 
        console.log(sixthSlide, "sixthSlide")


    },

    handleEvents: function(){
        const _this = this;
        const slideMove = $('.explore__slide-container .explore__slide-move');

        

        // Handle when click on explore slide show move buttons
        function exploreSlideShow() {
            _this.nextSlide();
            let autoMoveSlideId = setTimeout(exploreSlideShow,4000);
            slideMove.onclick = (e) => {
                const prevBtn = e.target.closest('.slide__move.btn--prev');
                const nextBtn = e.target.closest('.slide__move-btn.btn-next');
                
                
                if(prevBtn) {
                    _this.prevSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000);
                }
                if (nextBtn) {
                    _this.nextSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000);
                }
                
            }
            
        }
        exploreSlideShow()
 
    },




    render : function (){

        //Render Explore Slide
        this.renderExploreSlide();
        
    },
    start: function() {

        this.render();
        this.handleEvents();

    },
};

app.start();
