$(document).ready(function() {
    $('.offercontrols .buttons').click(function() {
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter = $(this).attr('data-filter');
        if(filter == 'all') {
            $('.angebote .single-service').show(400);
        }else{
            $('.angebote .single-service').not('.'+filter).hide(200);
            $('.angebote .single-service').filter('.'+filter).show(400);
        }
    });
});