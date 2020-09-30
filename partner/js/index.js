
document.addEventListener("DOMContentLoaded", () => {

console.log("#rotate");


$(window).scroll(function() {
var theta = $(window).scrollTop() / 3 % Math.PI;
var deg = $(window).scrollTop() / 7 % Math.PI;
var rotate = $(window).scrollTop() / 20 % Math.PI;
var twin = $(window).scrollTop() / 12 % Math.PI;
$('.animate_colos1, .animate_colos3, .animate_colos9').css({ transform: 'rotate(' + theta + 'rad)' });
$('.animate_colos4, .animate_colos2').css({ transform: 'rotate(-' + theta + 'rad)' });
$(".animate_colos5, .animate_colos6, .animate_colos10").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos7, .animate_colos8").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos11, .animate_colos13").css({transform: 'rotate(' + twin + 'rad)' })
$(".animate_colos12, .animate_colos14, .animate_colos15").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos16, .animate_colos17").css({transform: 'rotate(' + twin + 'rad)' })
});

$('.menu_btn').click(function(){
	$('.hide_menu').show()
	$('.menu_btn').hide()
})
$('.close_btn').click(function(){
	$('.hide_menu').hide()
	$('.menu_btn').show()
})

var t, a;
function example(e){
clearTimeout(t);
var w = e.width;
if (a) {
t = setInterval(function () {
if (w <= 450) clearTimeout(t); // Стили на уменьшение
e.style.cursor = 'zoom-in';
e.style.borderRadius = '1px';
e.style.boxShadow = '2px 2px 5px #fff'
e.width = w--;
}, 5);
}
else {
t = setInterval(function () {
if (w >= 650) clearTimeout(t);
// Стили на увеличение
e.style.cursor = 'zoom-out';
e.style.borderRadius = '5px';
e.style.boxShadow = '2px 2px 5px #888'
e.width = w++;
}, 5);
}
a = !a;
}



});


