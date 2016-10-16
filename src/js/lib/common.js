/* Common JS */
$(document).ready(function () {

	//for IE9
	svg4everybody();

	//validate
	$.validate({
		validateOnBlur : true,
		showHelpOnFocus : false,
		addSuggestions : false
	});

	// Clear placeholder
	(function () {
		var el = $('input, textarea');
		el.focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');
		});
		el.blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	}());

	// new WOW().init();

	(function () {
		var btn = $('.js-more'),
			content = btn.siblings('.js-text');

		btn.on('click', function () {
			$(this).text(function (i, text) {
				return text === 'Скрыть' ? 'Подробнее' : 'Скрыть';   // toggle button text
			});
			content.slideToggle();
		});
	})();

	(function () {
		var slider = $('.js-slider-for'),
			item = slider.children();
		nav = slider.siblings('.js-slider-nav').children().children();

		nav.on('click', function () {
			var _this = $(this);
			item.filter('.is-active').fadeOut('fast', function () {
				$(this).removeClass('is-active');
				item.eq(_this.index()).fadeIn('fast').addClass('is-active');
			});
			nav.removeClass('is-active');
			$(this).addClass('is-active');
		});
	})();

	(function () {
		$('input[type="file"]').inputfile({
			uploadText: 'прикрепить файл',
			removeText: '<span>Удалить</span>',
			restoreText: '<span></span>',
			uploadButtonClass: 'upload-btn',
			removeButtonClass: 'remove-btn'
		});
	})();

});