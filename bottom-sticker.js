/*!
 * bootm sticker
 * Copyright 2016-2020 Pactear.
 * Licensed under the MIT license
 * @author JeffenCheung@gmail.com
 * @date 2016-4-8
 * @version 0.0.1
 */
(function($) {

$.fn.bottomSticker = function (options) {
	var config = {
		width: '100%'
	};
	if (options){ $.extend(config, options); }

	return this.each( function() {
	var o = $(this)
		, cId = o.attr("id") + "-copy";
	var c = "." + cId;

	var $win = $(window)
		, isFixed = 0;

	function processScroll() {
		var scrollTop = $win.scrollTop()
				, cTop = $(c).offset().top
				, oTop = o.offset().top;
		if (oTop > cTop && !isFixed) {
			isFixed = 1;
		} else if (oTop <= cTop && isFixed) {
			isFixed = 0;
		}
		isFixed ? $(c).show()
		        : $(c).hide();

	}

	$win.on('scroll', processScroll);
	$win.on('resize', processScroll);

	var width = config['width'];
	width = o.width();
	var clone =  o.clone(true)
		.attr("id", cId)
		.addClass(cId)
		.css({'position': 'fixed'
			, 'bottom': '0px'
			, 'width': width});
		o.after(clone);

	processScroll();

 });
};

})(jQuery);
