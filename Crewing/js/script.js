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
}, false);


    
      
      
    
