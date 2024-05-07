$(document).ready(function() {
    $('#phone').click(function() { 
        if ($('.calculator__menu').hasClass('active')) { 
            $('.phone__menu').toggleClass('active');
            $('.calculator__menu').removeClass('active');
        } else { 
            $('.phone__menu').toggleClass('active');
        }
        
    });

    
});