
/* Form submit */
// 1.) selecteer een form element en sla het op in een variabele
var form = document.querySelector('#register')

// 3.) verander de location

var register = function (event){
    window.location.href='index.html';
    event.preventDefault();
}

// 2.) voeg een submit event toe aan het form element

form.addEventListener('submit', register);
