$(document).ready(function() {
    // Делегируем событие click для всех элементов с классом service__item__show
    $('.service__item').on('click', '.service__item__show', function() {
        // Находим элемент .service__item__list внутри текущего блока .service__item
        var $list = $(this).siblings('.service__item__list');
        
        // Плавно отображаем или скрываем меню только для текущего блока
        $list.slideToggle();
        
        // Добавляем или удаляем класс для заднего фона
        $('.page-blur').toggleClass('on');
    });

    // Делегируем событие click для всех элементов с классом close__service__item__list
    $('.service__item').on('click', '.close__service__item__list', function() {
        // Находим ближайший элемент .service__item__list и скрываем его
        $(this).closest('.service__item__list').slideToggle();
        
        // Удаляем класс для заднего фона
        $('.page-blur').removeClass('on');
    });
});
