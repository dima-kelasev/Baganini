document.addEventListener("DOMContentLoaded", () => {

console.log("#rotate");


$(window).scroll(function() {
var theta = $(window).scrollTop() / 3 % Math.PI;
var deg = $(window).scrollTop() / 7 % Math.PI;
var rotate = $(window).scrollTop() / 20 % Math.PI;
$('.animate_colos, .animate_colos2').css({ transform: 'rotate(' + theta + 'rad)' });
$('.animate_colos3, .animate_colos6').css({ transform: 'rotate(-' + theta + 'rad)' });
$(".animate_colos5").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos4, .animate_colos7").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos8, .animate_colos9").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos10, .animate_colos11").css({transform: 'rotate(' + theta + 'rad)' })
$(".animate_colos12, .animate_colos15").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos14, .animate_colos13").css({transform: 'rotate(' + rotate + 'rad)' })

});



});


