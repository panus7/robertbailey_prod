// Change navbar background color on scroll
$(window).scroll(function () {
    $('nav').toggleClass('bg-lime',
 $(this).scrollTop() > 200)
})