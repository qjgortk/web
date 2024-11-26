$('.menu li').mouseenter(function() {
    $(this).children('.sub').stop().slideDown();
})
$('.menu li').mouseleave(function() {
    $(this).children('.sub').stop().slideUp();
})