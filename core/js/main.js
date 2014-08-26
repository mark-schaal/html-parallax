(function ( $ ) {
	$.fn.stickyScrollHeader = function(container,elements,options){
		var settings = $.extend({
			strScrollClass:"scroll-before",
			eleStickyDestination:$(container).parent(),
		},options);

		return this.each(function(){
			var obj = this;
			obj.origin = $(this).parent();
			obj.eventHorizon = $(obj).outerHeight();

			$(container).scroll(function(){
				 if(($(this).scrollTop() >= obj.eventHorizon) && !$(obj).hasClass(settings.strScrollClass) ){
						$(obj).addClass(settings.strScrollClass).prependTo($(this).parent());
				 }
				 if($(obj).hasClass(settings.strScrollClass) && ($(this).scrollTop() < obj.eventHorizon)){
					$(obj).removeClass(settings.strScrollClass).prependTo(obj.origin);
				 }
			});
		});
	}

	$('.header').stickyScrollHeader($('.parallax'),this);

}(jQuery));