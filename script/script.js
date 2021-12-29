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
const App = $('.app');




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
    
    




