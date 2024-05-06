$(document).ready(function() {
    // Отслеживаем событие прокрутки страницы
    $(window).scroll(function() {
        // Проверяем положение секции на странице
        var sectionOffset = $('#Now').offset().top;
        var windowScrollTop = $(window).scrollTop();

        // Если скролл дошел до секции, поднимаем ее вверх
        if (windowScrollTop > sectionOffset) {
            $('#Now').css('top', - (windowScrollTop - sectionOffset) + 'px');
        } else {
            // Иначе возвращаем секцию на место
            $('#Now').css('top', 0);
        }
    });
});