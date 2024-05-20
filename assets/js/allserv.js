$(document).ready(function() { 
    $('.allserv__show__more').click(function() { 
        $('.allserv__hidden').slideToggle();

        $(this).toggleClass('rotate');
    });
});