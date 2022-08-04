var progress = document.getElementById('progress_bar');
var totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
   var progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}