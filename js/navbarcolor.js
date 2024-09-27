// Change navbar background color on scroll
// 200orinigal 200 px
$(window).scroll(function () {
    $('nav').toggleClass('bg-lime',
        $(this).scrollTop() > 1)
})

// Mobile Clivk Menu Set Blur Bg
$('.navbar-toggler').click(function () {
    $('nav').toggleClass('bg-lime');
});

const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => { 
    $('nav').toggleClass('bg-lime');
});