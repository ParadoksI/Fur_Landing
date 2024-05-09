if ($(window).width() > 1000) {
   
} else {
    $('#toggleBtn').on('click', function () {
        $('.header__foot__list').slideToggle(500, function () {

        }).css('display', 'flex');
        
    });
}