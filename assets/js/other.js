$(document).ready(function() { 
    $('.make__other').click(function() { 
        if ($('.calculator__menu').hasClass('active')) { 
            $('.other__menu').toggleClass('active');
            $('.calculator__menu').removeClass('active');
        } else if ($('.phone__menu').hasClass('active')) { 
            $('.phone__menu').removeClass('active');
            $('.other__menu').toggleClass('active');
        }  else if ($('.type__menu').hasClass('active')) { 
            $('.type__menu').removeClass('active');
            $('.other__menu').toggleClass('active');
        } else { 
            $('.other__menu').toggleClass('active')
        }
        
    });

    $('.closeOther').click(function() { 
            $('.other__menu').removeClass('active');
    });
});