document.addEventListener("DOMContentLoaded", function () {
    var masks = document.querySelectorAll(".ex__item__img__mask");

    masks.forEach(function (mask) {
        mask.addEventListener("mouseover", function () {
            this.classList.add("hovered");
        });
    });

    var buttons = document.querySelectorAll(".ex__item__form");
    var callMenu = document.querySelector(".phone__menu");

    buttons.forEach(function (button) {
        button.addEventListener("click", function(){ 
            callMenu.classList.add('active');
        })
    });


});
