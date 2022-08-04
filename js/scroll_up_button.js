$(document).ready(function() {
	$(window).scroll(function() {
		// scroll-up button show / hide script
		if (this.scrollY > 500)
			  $('.scroll_up_button').addClass("show");
		else
			  $('.scroll_up_button').removeClass("show");
	});

	// slide-up script
	$('.scroll_up_button').click(function() {
		$('html').animate({scrollTop: 0});
		// removing smooth scroll on slide-up button click
		$('html').css("scrollBehavior", "auto");
	});

	$('.nav_link, .scroll_down').click(function() {
		 // applying again smooth scroll on menu items click
		 $('html').css("scrollBehavior", "smooth");
	});
});