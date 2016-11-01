/* Micro Interaction menu  */
// 1.) selecteer een menu element en een aside element en sla het op in een variabele

var menu = document.querySelector('#menu');
var aside = document.querySelector('#sidemenu');


// 3.) toggle class op het aside element

var toggleMenu = function (event) {
    aside.classList.toggle('open')
}

// 2.) voeg een click event toe aan het menu element

menu.addEventListener('click', toggleMenu);


