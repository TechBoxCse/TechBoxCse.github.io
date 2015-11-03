(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(10).fadeOut("slow");
		jQuery("#load").delay(10).fadeOut("slow");
	});


	

})(jQuery);
