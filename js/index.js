
document.addEventListener("DOMContentLoaded", () => {

console.log("#rotate");


$(window).scroll(function() {
var theta = $(window).scrollTop() / 3 % Math.PI;
var deg = $(window).scrollTop() / 7 % Math.PI;
var rotate = $(window).scrollTop() / 20 % Math.PI;
$('.animate_img, .animate_img7').css({ transform: 'rotate(' + theta + 'rad)' });
$('.animate_img1, .animate_img4').css({ transform: 'rotate(-' + theta + 'rad)' });
$(".animate_img5").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_img2").css({transform: 'rotate(' + rotate + 'rad)' })
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



