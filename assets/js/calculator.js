$(document).ready(function () {
    $('#calc').click(function () {
        if ($('.phone__menu').hasClass('active')) { 
            $('.calculator__menu').toggleClass('active');
            $('.phone__menu').removeClass('active');
        }
        else { 
            $('.calculator__menu').toggleClass('active');
        }
        
    });


    // При клике на любой из радио-кнопок
    $('.calculator__type__item input[type="radio"]').click(function () {
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__type__item input[type="radio"]').not(this).prop('checked', false);
    });

    $('.calculator__place__item input[type="radio"]').click(function () {
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__place__item input[type="radio"]').not(this).prop('checked', false);
    });
    
    $('.calculator__mat__item input[type="radio"]').click(function () {
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__mat__item input[type="radio"]').not(this).prop('checked', false);
    });

    $('.calculator__form__check__cont input[type="radio"]').click(function() {
        // Получаем текст из элемента <p>
        var text = $(this).siblings('p').text();
        // Присваиваем его как значение атрибута "value" скрытого поля ввода
        $('#cForm-hidden').val(text);
        // Снимаем флажок со всех других радио-кнопок
        $('.calculator__form__check__cont input[type="radio"]').not(this).prop('checked', false);
    });


    // _!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // Скрыть все элементы, кроме первого
    $('.calculator__container > div').not(':first').hide();
    
    // При клике на кнопку "Далее"
    $('.calculator__next').click(function() {
        console.log('Клик по кнопке "Далее" обработан'); // Отладочное сообщение
        // Найти текущий элемент
        var current = $('.calculator__container > div:visible');
        
        // Найти следующий элемент
        var next = current.next('.calculator__container > div');
        
        // Если следующий элемент существует
        if (next.length) {
            // Скрыть текущий элемент
            current.hide();
            // Показать следующий элемент
            next.show();
            
            // Получить текст для изменения в элементе <span id="calc-title">
            var title = '';
            switch(next.attr('id')) {
                case 'cType':
                    title = 'тип мебели';
                    break;
                case 'cPlace':
                    title = 'размер мебели';
                    $('.s1').removeClass('active');
                    $('.s2').addClass('active');
                    break;
                case 'cMat':
                    title = 'материал';
                    $('.s2').removeClass('active');
                    $('.s3').addClass('active');
                    break;
                case 'cForm':
                    title = 'удобный способ связи';
                    $('.s3').removeClass('active');
                    $('.s4').addClass('active');
                    break;
                default:
                    title = 'тип мебели';
                    break;
            }
            $('#calc-title').text(title);
            
            // Показать кнопку "Далее", если следующий элемент не является формой
            if (next.attr('id') !== 'cForm') {
                $('.calculator__next').show();
            } else {
                $('.calculator__next').hide();
            }
        }
    });
});