$(document).ready(function() {
    var classList = ['montag', 'donnerstag', 'freitag'];
    var offerSlider = new Swiper('.offer-container .swiper-container.offer-swiper', {
        loop: false, 
        autoplay: false,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        pagination: {
            el:' .offer-container .swiper-pagination',
            type: 'bullets',
            clickable: true,
            speed: 500,
        },
        on: {
            init: function() {
                var index = this.activeIndex;
                $('.offer-container')
                    .removeClass(classList)
                    .addClass(classList[index]);

                $('.offer-container .img-wrapper')
                    .removeClass('active')
                    .eq(index)
                    .addClass('active');
            }
        }
    }).on('slideChange', function() {
        var index = this.activeIndex;
        $('.offer-container')
        .removeClass(classList)
        .addClass(classList[index]);

        $('.offer-container .img-wrapper')
        .removeClass('active')
        .eq(index)
        .addClass('active');
    });
});