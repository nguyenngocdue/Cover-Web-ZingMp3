
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
const exploreSlideLists = Array.from($$(' .explore__slide-container'));
const normalPlaylistLists = Array.from($$('.normal-playlist--section'));
const specialPlaylistLists = Array.from($$('.special-playlist--section'));
const playlistBannerLists = Array.from($$('.playlistBanner-container'));

const playerContainer = Array.from($$(".player__container"));
const player = $('.player');
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

var listNormalPlaylist = [
    {
        header: "Có Thể Bạn Muốn Nghe",
        playlists: [
            {
                name: "V_POP 2021 Nghe Gì",
                artists: ["ERIK", "LyLy", "MONSTAR"],
                image: "./assets/img/Explore/normalPlaylists/1.webp"
            },
            {
                name: "V-Pop: Hits Quốc Dân",
                artists: ["Jack", "HƯơng Tràm", "ERIK"],
                image: "./assets/img/Explore/normalPlaylists/2.webp"
            },
            {
                name: "Pop Ballad Việt Nổi Bật",
                artists: ["ERIK", "Quân A.P", "Hiền Hồ"],
                image: "./assets/img/Explore/normalPlaylists/3.webp"
            },
            {
                name: "Bolero Hay Nhất",
                artists: ["ERIK", "LyLy", "MONSTAR"],
                image: "./assets/img/Explore/normalPlaylists/4.webp"
            },
            {
                name: "Acoustic Covers",
                artists: ["Dermot Kennedy", "Us The Duo", "Lisie"],
                image: "./assets/img/Explore/normalPlaylists/5.webp"
            }
        ],
    },
    {
        header: "Lựa chọn hôm nay",
        playlists: [
            {
                name: "Kết Hợp Gây Nghiện",
                artists: ["1 cây làm chẳng nên non, nhiều cây hợp lại nên bài Hit hay"],
                image: "./assets/img/Explore/normalPlaylists/Select ToDay/1.webp"
            },
            {
                name: "Quý Cô Indie Việt",
                artists: ["Những bóng hồng đa zi năng của làng Indie Việt"],
                image: "./assets/img/Explore/normalPlaylists/Select ToDay/2.webp"
            },
            {
                name: "Rap Việt Thế Hệ Trẻ",
                artists: ["Sự bùng nổ của Rap Việt thế hệ Gen Z"],
                image: "./assets/img/Explore/normalPlaylists/Select ToDay/3.webp"
            },
            {
                name: "K-Pop Daebak",
                artists: ["Ở đây có những ca khúc K-Pop căng đét"],
                image: "./assets/img/Explore/normalPlaylists/Select ToDay/4.webp"
            },
            {
                name: "Today's EDM Hits",
                artists: ["Alan Walker không đối thủ trên 'Today's EDM Hits'"],
                image: "./assets/img/Explore/normalPlaylists/Select ToDay/5.webp"
            }
        ]
    },
    {
        header: "XONE's CORNER",
        playlists: [
            {
                name:"Throwback Teen pop",
                artists: ["Nhạc teen pop lan rộng từ những năm 2000s"],
                image:"./assets/img/Explore/normalPlaylists/XONE's CORNER/1.webp"
    
            },
            {
                name:"BTS x Halsey",
                artists: ["Cùng làm nhạc, BTS và Halsey trở thành bạn bè"],
                image:"./assets/img/Explore/normalPlaylists/XONE's CORNER/2.webp"
            },
            {
                name:"Asia Tune - Pop",
                artists: ["Top các khúc pop châu Á đang thịnh hành"],
                image:"./assets/img/Explore/normalPlaylists/XONE's CORNER/3.webp"
            },
            {
                name:"Daily XONE's Picks",
                artists: ["Bài hát XONE chọn riêng cho hôm nay"],
                image:"./assets/img/Explore/normalPlaylists/XONE's CORNER/4.webp"
            },
            {
                name:"Indie Hits",
                artists: ["Không gian indie quốc tế"],
                image:"./assets/img/Explore/normalPlaylists/XONE's CORNER/5.webp"
            } 
        ]
    },
    {
        header: "Mix Riêng Cho Bạn",
        playlists: [
            {
                name:"",
                artists: ["Jack", "K-ICM", "Phan Duy ANh"],
                image:"./assets/img/Explore/normalPlaylists/Mix own yourself/1.jpg"
            },
            {
                name:"",
                artists: ["Jack", "K-ICM", "Phan Duy ANh"],
                image:"./assets/img/Explore/normalPlaylists/Mix own yourself/2.jpg"
            },
            {
                name:"",
                artists: ["Jack", "K-ICM", "Phan Duy ANh"],
                image:"./assets/img/Explore/normalPlaylists/Mix own yourself/3.jpg"
            },
            {
                name:"",
                artists: ["Jack", "K-ICM", "Phan Duy ANh"],
                image:"./assets/img/Explore/normalPlaylists/Mix own yourself/4.jpg"
            },
            {
                name:"",
                artists: ["Jack", "K-ICM", "Phan Duy ANh"],
                image:"./assets/img/Explore/normalPlaylists/Mix own yourself/5.jpg"
            }
        ]
    },
    {
        header: "Nhạc Mới Mỗi Ngày",
        playlists: [
            {
                name: "V-Pop Tháng 1/2022",
                artists: ["Hoàng Thùy Linh", "Phan Mạnh Quỳnh", "Orange"],
                image: "./assets/img/Explore/normalPlaylists/NewMusicEveryday/1.webp"
            },
            {
                name: "US-UK Tháng 1/2022",
                artists: ["Katy Perry", "Ed Sheeran", "24KGoldn"],
                image: "./assets/img/Explore/normalPlaylists/NewMusicEveryday/2.webp"
            },
            {
                name: "K-Pop Tháng 1/2022",
                artists: ["aespa", "Bambam", "Kep1er"],
                image: "./assets/img/Explore/normalPlaylists/NewMusicEveryday/3.webp"
            },
            {
                name: "C-Pop Tháng 1/2022",
                artists: ["Triệu Nãi Cát", "Hoàng Mai (Mei)", "Tiểu Điền Âm Nhạc Xã"],
                image: "./assets/img/Explore/normalPlaylists/NewMusicEveryday/4.webp"
            },
            {
                name: "Indie Việt Tháng 1/2022",
                artists: ["Starry Night", "Sean", "hooligan."],
                image: "./assets/img/Explore/normalPlaylists/NewMusicEveryday/5.webp"
            },

        ]
    }
];
const NORMAL_PLAYLIST_STORAGE_KEY = 'VIK_NORMAL_PLAYLIST';
localStorage.setItem(NORMAL_PLAYLIST_STORAGE_KEY, JSON.stringify(listNormalPlaylist));

var listSpecialPlaylist = [
    {
        header: {
            explication: "Vì bạn đã nghe",
            topicName: "Chi Dân",
            image: "./assets/img/Explore/normalPlaylists/Because You Heard/title.webp"
        },
        playlists: [
            {
                name: "Những Bài Hát Hay Nhất Của",
                artists: ["Chi Dân"],
                image: "./assets/img/Explore/normalPlaylists/Because You Heard/1.webp"
            },
            {
                name: "Vẫn Là Em",
                artists: ["Thúy Khanh", "Chi Dân"],
                image: "./assets/img/Explore/normalPlaylists/Because You Heard/2.webp"
            },
            {
                name: "Mất Trí Nhớ",
                artists: ["Chi Dân"],
                image: "./assets/img/Explore/normalPlaylists/Because You Heard/3.webp"
            },
            {
                name: "Anh Không Sao Đâu",
                artists: ["Chi Dân"],
                image: "./assets/img/Explore/normalPlaylists/Because You Heard/4.webp"
            },
            {
                name: "Khi Em Ngủ Say",
                artists: ["Chi Dân"],
                image: "./assets/img/Explore/normalPlaylists/Because You Heard/5.webp"
            }

        ]
    }
];
const SPECIAL_PLAYLIST_STORAGE_KEY = 'VIK_SPECIAL_PLAYLIST';
localStorage.setItem(SPECIAL_PLAYLIST_STORAGE_KEY, JSON.stringify(listSpecialPlaylist));

var listImgBanner = [
    {image: "./assets/img/Explore/normalPlaylists/Label/1.jpg"},
    {image: "./assets/img/Explore/normalPlaylists/Label/2.jpg"},
    {image: "./assets/img/Explore/normalPlaylists/Label/3.jpg"},
];
const LIST_IMAGE_BANNER_KEY = 'VIK_BANNER_PLAYLIST';
localStorage.setItem(LIST_IMAGE_BANNER_KEY, JSON.stringify(listImgBanner));


var listSong = [
    [
        {
            name: "Cứ Chill Thôi",
            singer: ["Chillies", "Suni Hạ Linh",  "Rhymastic"],
            path: "./assets/music/listSong1/song1.mp3",
            image: "./assets/img/music/listSong1/song1.jpg"
        },
        {
            name: "Crush",
            singer: ["WN", "Vani", "An An"],
            path: "./assets/music/listSong1/song2.mp3",
            image: "./assets/img/music/listSong1/song2.jpg"
        },
        {
            name: "Vô Tình",
            singer: ["Xesi", "Hoaprox"],
            path: "./assets/music/listSong1/song3.mp3",
            image: "./assets/img/music/listSong1/song3.jpg"
        }

    ],
];
const MUSIC_STORAGE_KEY = 'VIK_MUSIC';
localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(listSong))


 
const app = {
    isPlaying: false,
    
    exploreSlides: JSON.parse(localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY) || '[]'),
    normalPlaylists: JSON.parse(localStorage.getItem(NORMAL_PLAYLIST_STORAGE_KEY) || '[]'),
    specialPlayLists: JSON.parse(localStorage.getItem(SPECIAL_PLAYLIST_STORAGE_KEY) || '[]'),
    listBannerPlaylists: JSON.parse(localStorage.getItem(LIST_IMAGE_BANNER_KEY) || '[]'),
    songPlaylists: JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY) || '[]'),


    html([first, ...string], ...values) {
        return values.reduce((acc, cur) => acc.concat(cur, string.shift()), [first])
        .filter(x => x && x !== true || x === 0)
        .join('')       
    },

    renderSong() {
        playerContainer.forEach((playContainer, index_playContainer) => {
           playContainer.innerHTML = app.html`
                <div class="player__container-song">
                    <div class="player__song-info media">

                        <div class="media__left">
                            <div class="player__song-thumb">
                                <div class="thumb-img" style="background: url(${this.songPlaylists[index_playContainer].image}) center center / cover no-repeat;"></div>
                            </div>
                        </div>

                        <div class="media__content">
                            <div class="player__song-body media__info">
                                <div class="player__song-title">
                                    <div class="player__title-animate">
                                        <div class="title__item">Anh Đã Quen Với Cô Đơn</div>
                                        <div class="title__item">Anh Đã Quen Với Cô Đơn</div>
                                    </div>
                                </div>
                                <div class="player__song-author info__author">
                                    <a href="" class="is-ghost">Soobin Hoàng Sơn</a>
                                </div>
                            </div>
                        </div>

                        <div class="media__right">
                            <div class="player__song-options">
                                <div class="player__song-btn option-btn ">
                                    <i class="bi bi-heart-fill icon--heart primary btn-icon"></i>
                                </div>
                                <div class="player__song-btn option-btn">
                                    <i class="bi bi-three-dots"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="player__control">
                    <div class="player__control-btn">
                        <div class="control-btn">
                            <i class="bi bi-shuffle"></i>
                        </div>
                        <div class="control-btn">
                            <i class="bi bi-skip-start-fill"></i>
                        </div>
                        <div class="control-btn btn-toggle-play btn--play-song">
                            <i class="bi bi-pause icon-pause"></i>
                            <i class="bi bi-play-fill icon-play"></i> 
                        </div>
                        <div class="control-btn">
                            <i class="bi bi-skip-end-fill"></i>
                        </div>
                        <div class="control-btn">
                            <i class="bi bi-arrow-repeat"></i>
                        </div>
                    </div>
                    <div class="progress-block">
                        <span class="tracktime">00:00</span>
                        <input id="progress--main" class="progress" type="range" value="0" step="1" min="0" max="100">
                        <span class="durationtime">03:55</span>
                    </div>

                </div>
                <div class="player__options">
                    <div class="player__options-container">
                        <div class="player__options-btn option-btn">
                            <i class="bi bi-camera-video btn-icon"></i>
                        </div>
                        <div class="player__options-btn option-btn">
                            <i class="bi bi-mic btn-icon"></i>
                        </div>
                        <div class="player__options-btn option-btn">
                            <i class="bi bi-volume-up btn-icon"></i>
                        </div>
                        <div class="player__volume-progress">
                            <input type="range" class="volume__range" value="100" step="1" min="0" max="100">
                        </div>
                        <div class="player__list-icon">
                            <i class="bi bi-music-note-list btn-icon"></i>
                        </div>
                    </div>
                </div>
                <audio id="audio" src="./assets/music/listSong1/song1.mp3"></audio>
       `
   })
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
        
        // console.log(firstSlide, "firstSlide02")
        
        firstSlide.classList.add('prev');
        // console.log(firstSlide, "thêm prev")



        // console.log(fourthSlide, "check1")
        fourthSlide.classList.add('next');
        // console.log(fourthSlide, "thêm next")

        
        firstSlide.classList.replace('first', 'sixth');
        // console.log(firstSlide, "firstSlide2")

        // console.log(secondSlide, "secondSlide bf")
        secondSlide.classList.replace('second', 'first');
        // console.log(secondSlide, "secondSlide af")

        thirdSlide.classList.replace('third', 'second');
        // console.log(thirdSlide, "thirdSlide")
        
        
        
        fourthSlide.classList.replace('fourth', 'third');
        // console.log(fourthSlide, "fourthSlide")

        fifthSlide.classList.replace('fifth', 'fourth');
        // console.log(fifthSlide, "fifthSlide")

        sixthSlide.classList.replace('sixth', 'fifth') 
        // console.log(sixthSlide, "sixthSlide")


    },

    handleEvents: function(){
        const _this = this;
        const slideMove = $('.explore__slide-container .explore__slide-move');
        const playBtns = Array.from($$('.btn-toggle-play.btn--play-song'));
        const audio = $('#audio');

        // Handle when click play
        playBtns.forEach(playBtn => {
            playBtn.onclick = function() {
                if (_this.isPlaying){
                    audio.pause();
                }
                else {
                    audio.play();
                }
            }
        })

        // When the song is played
        audio.onplay = function() {
            player.classList.add('playing');
        }

        //when the song is paused
        audio.onpause = function() {
            player.classList.remove('playing');
        }
        


        

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
            
        })









 
    },

    renderNomalPlaylist() {
        normalPlaylistLists.forEach((normalPlaylistList, playlistListIndex) => {

            normalPlaylistList.innerHTML = app.html`
                ${playlistListIndex != 6 && app.html `
                <div class="col c-12">
                    <div class="container__header">
                        <a href="#" class="container__header-title">
                            <h3>${this.normalPlaylists[playlistListIndex].header}</h3>
                        </a>
                    </div>
                </div>
                `}
                <div class="col c-12">
                    <div class= "row ${playlistListIndex !== 7 && 'no-wrap'} normal-playlist--container">
                        ${this.normalPlaylists[playlistListIndex].playlists.map((playlist, index) => {
                            return app.html`
                                <div class="col col-2-4 ${playlistListIndex ===7 && 'mb-30'}">
                                    <div class="row__item">
                                        <div class="row__item-container">
                                            <div class="row__item-display">
                                                <div class="zm-actions-container">
                                                    <div class="zm-box zm-actions playlist-actions isWhite">
                                                        <button class="zm-btn is-hover-circle">
                                                            <i class="bi bi-x-lg isWhite icon"></i>
                                                        </button>
                                                        <button class="zm-btn">
                                                            <i class="bi bi-play-fill icon isWhite islarge action-play icon"></i>
                                                        </button>
                                                        <button class="zm-btn is-hover-circle">
                                                            <i class="bi bi-three-dots isWhite icon"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <figure>
                                                    <img src="${playlist.image}" alt="">
                                                </figure>
                                                <div class="opacity"></div>
                                            </div>
                                            <div class="row__item-info">
                                                ${playlistListIndex != 3 && app.html`
                                                    <a href="#" class="row__item-info-name"> ${playlist.name} </a>
                                                `
                                                }
                                                ${playlistListIndex != 5 && app.html`
                                                    <h3 class="row__item-info-creator-subtitle is-oneline>
                                                        ${playlist.artists.map((artist, artistIndex) => {
                                                            return app.html `<a href="#" class="is-ghost">${artist}</a>${artistIndex < playlist.artists.length -1 && ', '}
                                                            `
                                                        })}
                                                    </h3>
                                                `}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                            })}
                    </div>
                </div>
            `
        })
    },

    renderSpecialPlaylist() {
        specialPlaylistLists.forEach((specialPlaylistList, playlistListIndex) => {
            specialPlaylistList.innerHTML = app.html`
            <div class="col c-12">
                <div class="container__header-section special-playlist mb-16">
                    <div class="container__header-title special-playlist">
                        <figure class="is-50x50">
                            <img src="${this.specialPlayLists[playlistListIndex].header.image}" alt="" />
                        </figure>
                        <div class="special-playlist--info">
                            <h3>${this.specialPlayLists[playlistListIndex].header.explication}</h3>
                            <a href="">${this.specialPlayLists[playlistListIndex].header.topicName}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col c-12">
                    <div class= "row no-wrap normal-playlist--container">
                        ${this.specialPlayLists[playlistListIndex].playlists.map((playlist, index) => {
                            return app.html`
                                <div class="col col-2-4">
                                    <div class="row__item">
                                        <div class="row__item-container">
                                            <div class="row__item-display">
                                                <div class="zm-actions-container">
                                                    <div class="zm-box zm-actions playlist-actions isWhite">
                                                        <button class="zm-btn is-hover-circle">
                                                            <i class="bi bi-x-lg isWhite icon"></i>
                                                        </button>
                                                        <button class="zm-btn">
                                                            <i class="bi bi-play-fill icon isWhite islarge action-play icon"></i>
                                                        </button>
                                                        <button class="zm-btn is-hover-circle">
                                                            <i class="bi bi-three-dots isWhite icon"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <figure>
                                                    <img src="${playlist.image}" alt="">
                                                </figure>
                                                <div class="opacity"></div>
                                            </div>
                                            <div class="row__item-info">
                                                 <a href="#" class="row__item-info-name"> ${playlist.name} </a>
                                                ${playlistListIndex != 5 && app.html`
                                                    <h3 class="row__item-info-creator-subtitle is-oneline>
                                                        ${playlist.artists.map((artist, artistIndex) => {
                                                            return app.html `
                                                                <a href="#" class="is-ghost">${artist}</a>${artistIndex < playlist.artists.length -1 && ', '}
                                                            `
                                                        })}
                                                    </h3>
                                                `}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                            })}
                    </div>
                </div>
            `
        })
    },

    renderBannerPlaylist() {
        playlistBannerLists.forEach((listImgBannerList, index) => {
            listImgBannerList.innerHTML = app.html`
            ${this.listBannerPlaylists.map((element, index) => {
                return app.html`
                    <div class="col col-3">
                        <div class="row__item">
                            <div class="row__item-display">
                                <figure class="is-48x48">
                                    <img src="${element.image}" alt="" />
                                </figure>
                                </div>
                            </div>
                        </div>     
                    `
                })}
            `
        })

    },




    render : function (){
        //Render Explore Slide
        this.renderExploreSlide();
        this.renderNomalPlaylist();
        this.renderSpecialPlaylist();
        this.renderBannerPlaylist();
        this.renderSong();
        
    },
    start: function() {

        this.render();
        this.handleEvents();

    },
};

app.start();




