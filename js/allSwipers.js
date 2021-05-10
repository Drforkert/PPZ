var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
});

var swiper = new Swiper(".teamSwiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    autoplay: {
        delay: 6000,
    },
    disableOnInteraction: false,
    effect: "cube",
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.5,
    },

    pagination: {
        el: '.teamSwiper',
        clickable: true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

var swiper = new Swiper(".aboutSwiper", {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    effect: "cube",
    grabCursor: true,
    autoplay: {
        delay: 6500,
    }, 
    disableOnInteraction: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.5,
    },
    pagination: {
        el: '.aboutSwiper',
        clickable: true,
    },

});

var swiper = new Swiper(".homeSwiper", {
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 6500,
    },
    effect: "cube",
    slidesPerView: 1,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.5,
    },
});

