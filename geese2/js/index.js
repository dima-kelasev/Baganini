document.addEventListener("DOMContentLoaded", () => {

console.log("#rotate");


$(window).scroll(function() {
var theta = $(window).scrollTop() / 3 % Math.PI;
var deg = $(window).scrollTop() / 7 % Math.PI;
var rotate = $(window).scrollTop() / 20 % Math.PI;
var twin = $(window).scrollTop() / 12 % Math.PI;
$('.colos_animate1, .colos_animate2').css({ transform: 'rotate(' + theta + 'rad)' });
$('.colos_animate4, .colos_animate5').css({ transform: 'rotate(-' + theta + 'rad)' });
$(".colos_animate3, .colos_animate6").css({transform: 'rotate(' + deg + 'rad)' })
$(".colos_animate7, .colos_animate8").css({transform: 'rotate(' + twin + 'rad)' })
$(".colos_animate9, .colos_animate11").css({transform: 'rotate(' + rotate + 'rad)' })
$(".colos_animate10, .colos_animate12").css({transform: 'rotate(' + deg + 'rad)' })
$(".colos_animate13, .colos_animate18").css({transform: 'rotate(' + rotate + 'rad)' })
$(".colos_animate17, .colos_animate19").css({transform: 'rotate(' + twin + 'rad)' })
});

$('.menu_btn').click(function(){
	$('.hide_menu').show()
	$('.menu_btn').hide()
})
$('.close_btn').click(function(){
	$('.hide_menu').hide()
	$('.menu_btn').show()
})



});


