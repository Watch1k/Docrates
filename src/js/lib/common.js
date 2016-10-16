/* Common JS */
$(document).ready(function(){

	//for IE9
	svg4everybody();

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

	(function () {
		var btn = $('.js-more'),
			content = btn.siblings('.js-text');

		btn.on('click', function () {
			content.slideToggle();
		});
	})();
	
});