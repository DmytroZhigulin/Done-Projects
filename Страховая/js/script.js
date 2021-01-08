"use strict";

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


// Slick Slide Reviews
$('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt="arrow-next"></button>',
    dots: true,
    mobileFirst: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,   
    centerMode: true,
    
});


//Прокрутка по якорям
$('a.nav-link').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + "px"
    }, {
        duration: 2000,
        easing: "swing"
    });
    return false;
});


// ловим клик на бургер меню
$('.menu__button').click(function () {
    $(this).toggleClass('active');

    if(true) {
        $('.nav__mobile').toggleClass('hidden'); 
    }
});


// вызов модального окна
$('[data-modal]').click(function () {
    $('.modal').removeClass('hidden').addClass('show');

    function closeModal() {
        $('.modal').removeClass('show').addClass('hidden');
    }

    //закрытие модального окна по клику на крестик
    $('[data-close]').click(function() {
        closeModal();   
    });

    //закрытие модального окна по клику на ESC
    $(window).bind('keydown', function(e) {
        if(e.keyCode === 27) {
            closeModal();
        }
    });

    //Закрытие модалки по клику вне области окна
    $('.modal').click(function(event) {
        if(event.target === this) {
            closeModal();
        }
    });
});


//проверка форм 

$('.modal_form').submit( function() {

    $('#modal_name').val( function() {
        console.log(this.value);
    });
    $('#modal_phone').val( function() {
        console.log(this.value);
    });

    console.log("Submited"); 
    return false;  
});

$('.contacts_form').submit( function() {
    console.log("Submited"); 
    return false;  
});











