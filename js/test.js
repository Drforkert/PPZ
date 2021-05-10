$(document).ready(function() {
  const offerslider = new Swiper('.swiper-container-one', {
    loop: false, 
        autoplay: false,
        slidesPerView: 1,
        pagination: {
            el:' .swiper-container-one .swiper-pagination',
            type: 'bullets',
            clickable: true,
            speed: 500,
        },
  })
});