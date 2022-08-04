// nav-toggle
$(".nav_toggle").click(function() {
	$(".header .nav_list").slideToggle();
});
$(".header .nav_list nav_link").click(function() {
	if ($(window).width() < 768) {
		$(".header .nav_list").slideToggle();
	}
});

// fixed header
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".header").addClass("fixed");
	} else {
		$(".header").removeClass("fixed");
	}
});

// navbar -> show / hide
$(document).ready(function(){
	// slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
		// removing smooth scroll on slide-up button click
		$('html').css("scrollBehavior", "auto");
	});
});

// navbar -> hover
function after(element) {
	element.style.color = "#835511";
}
function before(element) {
	element.style.color = "#FF9800";
}

// Movable home text
$('.home_data').on('mousemove', function(e) {
	centerX = $(this).width() / 2;
	var moveX = centerX - e.offsetX;
	$(this).css({
		'transform': 'perspective(500px) rotateY(' + moveX / 50 + 'deg)'
	});
});

// Products animation
function fadeIn() {
	document.getElementById('person').innerHTML;
	$("#products").animate({top: '+=30px', opacity: '0'}, "slow");
   $("#products").animate({top: '-=30px', opacity: '1'}, "slow");
}
function fadeOut() {
	document.getElementById('person').innerHTML;
	$("#products").animate({top: '+=30px', opacity: '0'}, "slow");
   $("#products").animate({top: '-=30px', opacity: '1'}, "slow");
}