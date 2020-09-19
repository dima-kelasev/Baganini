document.addEventListener("DOMContentLoaded", () => {

console.log("#rotate");


$(window).scroll(function() {
var theta = $(window).scrollTop() / 3 % Math.PI;
var deg = $(window).scrollTop() / 7 % Math.PI;
var rotate = $(window).scrollTop() / 20 % Math.PI;
$('.animate_colos, .animate_colos2').css({ transform: 'rotate(' + rotate + 'rad)' });
$('.animate_colos1, .animate_colos3').css({ transform: 'rotate(-' + deg + 'rad)' });
$('.animate_colos4, .animate_colos5').css({ transform: 'rotate(-' + theta + 'rad)' });
$('.animate_colos7, .animate_colos8').css({ transform: 'rotate(-' + rotate + 'rad)' });
$('.animate_colos6, .animate_colos9').css({ transform: 'rotate(-' + theta + 'rad)' });

$('.animate_colos11, .animate_colos12').css({ transform: 'rotate(' + theta + 'rad)' });
$('.animate_colos13, .animate_colos16').css({ transform: 'rotate(-' + deg + 'rad)' });
$('.animate_colos18, .animate_colos15').css({ transform: 'rotate(-' + rotate + 'rad)' });
$('.animate_colos22, .animate_colos19').css({ transform: 'rotate(-' + theta + 'rad)' });
$('.animate_colos20, .animate_colos14').css({ transform: 'rotate(-' + deg + 'rad)' });
$('.animate_colos21, .animate_colos17').css({ transform: 'rotate(-' + theta + 'rad)' });

$('.animate_colos23, .animate_colos25').css({ transform: 'rotate(-' + deg + 'rad)' });
$('.animate_colos24, .animate_colos26').css({ transform: 'rotate(-' + theta + 'rad)' });
$('.animate_colos27, .animate_colos29').css({ transform: 'rotate(-' + rotate + 'rad)' });
$('.animate_colos28, .animate_colos30').css({ transform: 'rotate(-' + rotate + 'rad)' });
$('.animate_colos33, .animate_colos34, .animate_colos32').css({ transform: 'rotate(-' + rotate + 'rad)' });
$('.animate_colos35, .animate_colos37, .animate_colos39').css({ transform: 'rotate(-' + rotate + 'rad)' });
$('.animate_colos36, .animate_colos38, .animate_colos40').css({ transform: 'rotate(-' + rotate + 'rad)' });

$('.menu_btn').click(function(){
	$('.hide_menu').show()
	$('.menu_btn').hide()
})
$('.close_btn').click(function(){
	$('.hide_menu').hide()
	$('.menu_btn').show()
})


});



});








