"use strict";

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); 

    function formValidate() {

        let forms = document.getElementsByClassName('needs-validation');
        let feedback = document.querySelectorAll('.feedback');
      // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            
            
                feedback.forEach( item => {
                    item.classList.add('valid-feedback');
                    item.innerHTML = "Good";
                });
                form.classList.add('was-validated');
            }, false);
      });
    }
    formValidate();


    let nav = document.querySelectorAll('.nav-item');
    console.log(nav);
    let sections = document.querySelectorAll('section');
    console.log(sections);

    //Функция принимает аргумент i, перебирает секции и присваевает им классы
    //для скрытия, потом для секции с индексом который передается в i присваевает класс для показа.
    function showDefaultWindow(i) {
        sections.forEach( item => {
            item.classList.add('hidden');
            item.classList.remove('active');
            console.log('done');
        });
        sections[i].classList.add('active');
        sections[i].classList.remove('hidden');
    }
    showDefaultWindow(0);
    
    //Функция отслеживает клик по ссылкам меню и перевает индекс
    // элемента события i + 1 в функцию выше.
    function showPages() {
         nav.forEach( (item, index) => {
            
            item.addEventListener('click', (e) => {
                e.preventDefault();
                showDefaultWindow(index);
            });
         });

         //Add animation on logo link.
         let logo = document.querySelector('.logo');
         logo.addEventListener('click', () => showDefaultWindow(0));
    }
    showPages();

}, false);



    
      
      
    
