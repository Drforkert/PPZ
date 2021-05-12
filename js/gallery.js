$(document).ready(function() {

    $('.controls .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .image').show(400);
        }else{
            $('.gallery .image').not('.'+filter).hide(200);
            $('.gallery .image').filter('.'+filter).show(400);
        }
    });
});