$(document).ready(function () {
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.hamburger').toggleClass('active');
        $('.navbar').toggleClass('open');
       
    });
});