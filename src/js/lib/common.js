/* Common JS */
$(document).ready(function(){

	//for IE9
	svg4everybody();

	// detect phone/tablet
	var md = new MobileDetect(window.navigator.userAgent);
	console.log(md.phone());
	console.log(md.tablet());

	// check orientation device
	function isPortrait() {
		return window.innerHeight > window.innerWidth;
	};

	// Listen for orientation changes
	window.addEventListener("orientationchange", function() {
		if (isPortrait()) {
			// code here
		}
	}, false);

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	// new WOW().init();
	
});