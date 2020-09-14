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
$(".animate_colos16, .animate_colos17").css({transform: 'rotate(' + theta + 'rad)' })
$(".animate_colos18, .animate_colos19").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos20, .animate_colos21").css({transform: 'rotate(' + theta + 'rad)' })
$(".animate_colos22, .animate_colos23").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos24").css({transform: 'rotate(' + rotate + 'rad)' })

$(".animate_colos25, .animate_colos26").css({transform: 'rotate(' + theta + 'rad)' })
$(".animate_colos27, .animate_colos28").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos29, .animate_colos30").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos31, .animate_colos32").css({transform: 'rotate(' + rotate + 'rad)' })

$(".animate_colos33, .animate_colos35").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos34, .animate_colos36").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos37, .animate_colos39").css({transform: 'rotate(' + theta + 'rad)' })
$(".animate_colos40").css({transform: 'rotate(' + rotate + 'rad)' })


$(".animate_colos41, .animate_colos43").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos42, .animate_colos44").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos45").css({transform: 'rotate(' + theta + 'rad)' })

$(".animate_colos46, .animate_colos48").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos47, .animate_colos49").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos51").css({transform: 'rotate(' + theta + 'rad)' })

$(".animate_colos52, .animate_colos54").css({transform: 'rotate(' + deg + 'rad)' })
$(".animate_colos53, .animate_colos55").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos56, .animate_colos57").css({transform: 'rotate(' + rotate + 'rad)' })
$(".animate_colos58").css({transform: 'rotate(' + theta + 'rad)' })


});



});


