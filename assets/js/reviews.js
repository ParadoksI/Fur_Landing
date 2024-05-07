$(document).ready(function() { 
    $('.reviews__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode : true,
        
        responsive : [
            { 
                breakpoint : 1199,
                settings : { 
                    arrows : false ,
                    dots : true,
                    slidesToShow: 1,
                    centerPadding : "50px 30px 0px ",
                }
            },
            { 
                breakpoint : 9999,
                settings : {
                    arrows : true,
                    dots: false,
                    slidesToShow: 3,
                    centerPadding : "0px",
                }
            }
        ]
    })
});