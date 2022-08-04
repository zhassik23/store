document.body.onload = function() {
	$(".home_content").animate({ opacity: '1'}, "slow");

	setTimeout(function() {
		var preloader = document.getElementById('page_preloader');
		if (!preloader.classList.contains('done'))
			preloader.classList.add('done');
		
	}, 1000);
}