
$(document).ready(function () {
   
    // VARIABLES
var searchBtn, searchForm, searchClose, hamBtn, hamMenu, hamClose;

searchBtn = document.querySelector('#search-nav');
searchForm = document.querySelector('#search-form');
searchClose = document.querySelector('#search-close');
hamBtn = document.querySelector('#ham-btn');
hamBtn2 = document.querySelector('#ham-btn-2');
hamMenu = document.querySelector('#ham-menu');
hamClose = document.querySelector('#ham-close')
//CLICK BTN

hamBtn.addEventListener('click', function() {
    if (hamMenu.classList.contains('ham-deactive')) {
        hamMenu.classList.remove('ham-deactive');
        hamMenu.classList.add('ham-active');
    }

})

hamBtn2.addEventListener('click', function() {
    if (hamMenu.classList.contains('ham-deactive')) {
        hamMenu.classList.remove('ham-deactive');
        hamMenu.classList.add('ham-active');
    }

})


hamClose.addEventListener('click', function() {
    if (hamMenu.classList.contains('ham-active')) {
        hamMenu.classList.remove('ham-active');
        hamMenu.classList.add('ham-deactive');
    }

})


searchBtn.addEventListener('click', function() {
    if (searchForm.classList.contains('search-form-deactive')) {
        searchForm.classList.remove('search-form-deactive');
        searchForm.classList.add('search-form-active');
    }

})


searchClose.addEventListener('click', function() {
    if (searchForm.classList.contains('search-form-active')) {
        searchForm.classList.remove('search-form-active');
        searchForm.classList.add('search-form-deactive');
    }

})






});