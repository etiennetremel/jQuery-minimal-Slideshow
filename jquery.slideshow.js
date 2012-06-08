/*
	Slideshow plugin using jQuery
	Plugin created by Etienne TREMEL Mai 2012
	Version: 0.1
	
	Usage:
	<div id="banner">
		<img src="first-image.jpg" class="active" />
		<img src="second-image.jpg" />
		<img src="third-image.jpg" />
	</div>
	
	<script>
		$(document).ready(function() {
			$('#banner').slideshow({
				'speed':1000, // Fading effect speed
				'delay':4000 // Delay between slides
			});
		});
	</script>
	
	//To destroy:
	$('#banner').destroy();
	
*/

(function($){
	var defaults = {
		speed: 1000,
		delay: 4000
	};
	
	var methods = {
		init : function(options) {
			return this.each(function() {
				var $this = $(this),
					data = $this.data('slideshow');

				if(!data) {
					var settings = $.extend({}, defaults, options),
						banner = $(this);

					$this.data('slideshow', {
						'speed': settings.speed,
						'delay': settings.delay
					});
				}
					
				setTimeout( function() {
					slideSwitch($this);
				}, $this.data('slideshow').delay);
			});
		},
		destroy : function( ) {		
			return this.each(function() {
				var $this = $(this);
				
				$(window).unbind('.slideshow');
				$this.removeData('slideshow');		
			});
		}
	};
	
	function slideSwitch($this) {
		var $active = $this.find('img.active');
	
		if ( $active.length == 0 ) $active = $this.find('img:last');
	
		var $next =  $active.next().length ? $active.next() : $this.find('img:first');
	
		$active.addClass('last-active');
	
		$next.css({opacity: 0})
			.addClass('active')
			.animate({opacity: 1}, $this.data('slideshow').speed, function() {
				$active.removeClass('active last-active');
				setTimeout( function() {
					slideSwitch($this);
				}, $this.data('slideshow').delay);
			});
	}

	$.fn.slideshow = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.slideshow' );
		}    
	};

})(jQuery);