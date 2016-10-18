/* Common JS */
$(document).ready(function () {

	//for IE9
	svg4everybody();

	//validate
	$.validate({
		validateOnBlur : true,
		showHelpOnFocus : false,
		addSuggestions : false,
		scrollToTopOnError: false
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

	new WOW().init();

	(function () {
		var btn = $('.js-more'),
			content = btn.siblings('.js-text');

		btn.on('click', function () {
			$(this).toggleClass('is-open');
			$(this).text(function (i, text) {
				return text === 'Скрыть' ? 'Подробнее' : 'Скрыть';   // toggle button text
			});
			content.slideToggle();
			if ($(this).hasClass('is-open')) {
				$('html, body').animate({scrollTop: $(this).offset().top - 100}, 1000);
			}
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

	(function () {
		$('.text__image').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: true,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});
	})();

	(function () {
		var header = $('.js-header');
		$(window).scroll(function () {
			if ($(document).scrollTop() > 5) {
				header.addClass('is-active');
			} else {
				header.removeClass('is-active');
			}
		});
	})();

	(function () {
		var list = $('.js-doc-list'),
			item = list.children(),
			header = item.find('.js-doc-header'),
			image = item.find('.js-doc-image'),
			text = item.find('.js-doc-text');

		var desc = $('.js-desc'),
			descHeader = $('.js-desc-header'),
			descImage = $('.js-desc-img'),
			descText = $('.js-desc-text'),
			descClose = $('.js-desc-close'),
			descPrev = $('.js-desc-prev'),
			descNext = $('.js-desc-next'),
			descIndex;

		item.on('click', function () {
			var index = $(this).index();
			desc.attr('data-index', index + 1);
			desc.addClass('is-active');
			descHeader.html(header.eq(index));
			descImage.html(image.eq(index));
			descText.html(text.eq(index));
			descIndex = index;
			$('html, body').animate({scrollTop: desc.offset().top - 110}, 1000);
		});

		descClose.on('click', function () {
			$(this).closest(desc).removeClass('is-active');
		});

		descPrev.on('click', function () {
			if (descIndex > 0) {
				descHeader.html(header.eq(descIndex - 1));
				descImage.html(image.eq(descIndex - 1));
				descText.html(text.eq(descIndex - 1));
				descIndex--;
			} else {
				descIndex = item.length;
				descHeader.html(header.eq(descIndex - 1));
				descImage.html(image.eq(descIndex - 1));
				descText.html(text.eq(descIndex - 1));
				descIndex--;
			}
			desc.attr('data-index', descIndex + 1);
		});

		descNext.on('click', function () {
			descIndex++;
			desc.attr('data-index', descIndex + 1);
			if (descIndex < item.length) {
				descHeader.html(header.eq(descIndex));
				descImage.html(image.eq(descIndex));
				descText.html(text.eq(descIndex));
			} else {
				descIndex = 0;
				descHeader.html(header.eq(descIndex));
				descImage.html(image.eq(descIndex));
				descText.html(text.eq(descIndex));
			}
		});
	})();

	(function () {
		var slider = $('.js-slider');

		if ($(window).width() < 1600) {
			slider.find('.wow').removeClass('wow');
			slider.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-right"></use></svg></button>'
			});

			var next = slider.find('.slick-next'),
				nav = $('.js-slick-nav');

			nav.prepend(next);
		}

		$(window).resize(function () {
			if ($(window).width() < 1600) {
				if (!$('.slick-initialized').length) {
					slider.slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-right"></use></svg></button>'
					});

					var next = slider.find('.slick-next'),
						nav = $('.js-slick-nav');

					nav.prepend(next);
				}
			} else {
				if ($('.slick-initialized').length) {
					slider.slick('unslick');
				}
			}
		})
	})();

	(function () {
		var request = $('#request'),
			btn = $('.js-request');

		btn.on('click', function () {
			$('html, body').animate({scrollTop: request.offset().top - 77}, 1500);
		});
	})();

	(function(){
		var link = $('.nav__link');

		link.on('click', function (e) {
			e.preventDefault();
			link.removeClass('is-active');
			$(this).addClass('is-active');
			var id = $(this).attr('href');
			$('html, body').animate({scrollTop: $(id).offset().top - 77}, 1500);
		});
	})();

	(function () {
		var btn = $('.js-more-btn');

		btn.on('click', function (e) {
			e.preventDefault();
			$(this).text(function (i, text) {
				return text === 'Читать далее' ? 'Скрыть' : 'Читать далее';   // toggle button text
			});
			$(this).prev().toggle();
		});
	})();

});