/*
	Slideshow plugin using jQuery (Advanced version)
	Plugin created by Etienne TREMEL Mai 2012
	Version: 0.3
	jQuery 1.7 minimun required

	The advanced version include navigation system and another way to define slides
	
	Usage:
	<div id="banner">
		<div class="item active"><img src="first-image.jpg" /></div>
		<div class="item"><a href="http://www.google.com" target="_blank"><img src="second-image.jpg" /></a></div>
		<div class="item">
			<h1>Slide title</h1>
			<p>Some content here</p>
			<p>Some content here</p>
		</div>
	</div>
	
	<script>
		$(document).ready(function() {
			$('#banner').slideshow({
				'speed':1000, // Fading effect speed
				'delay':4000, // Delay between slides
				'stopOnMouseOver': true, //Stop sliding when mouse is over
				'navigation': true // Add navigation
			});
		});
	</script>
	
	//To destroy:
	$('#banner').destroy();
	
*/

(function($){
	var defaults = {
		speed: 800,
		delay: 4000,
		stopOnMouseOver: false,
		navigation: true
	};
	
	var methods = {
		init : function(options) {
			return this.each(function() {
				var $this = $(this),
					data = $this.data('slideshow');

				if(!data) {
					var settings = $.extend({}, defaults, options);

					$this.data('slideshow', {
						'speed': settings.speed,
						'delay': settings.delay,
						'stopOnMouseOver': settings.stopOnMouseOver,
						'navigation':settings.navigation,
						'timeOut':'',
						'isPlaying':false
					});
				}

				$this.data('slideshow').timeOut = setTimeout( function() {
					slideSwitch($this);
				}, $this.data('slideshow').delay);
				
				if($this.data('slideshow').stopOnMouseOver) {
					$this.mouseover(function() {
						clearTimeout($this.data('slideshow').timeOut);
					});
					$this.mouseout(function() {
						$this.data('slideshow').timeOut = setTimeout( function() {
							slideSwitch($this);
						}, $this.data('slideshow').delay);
					});
				}
				
				if($this.data('slideshow').navigation) {
					var navigation = $('<ul class="navigation" />');
					$this.find('.item').each(function(index, item) {
						var active = (index) ? '' : 'active';
						navigation.append('<li class="' + active + '"></li>');
					});
					navigation.find('li').click(function() {
						var index = $(this).index();
						if(!$this.data('slideshow').isPlaying) slideSwitch($this, index);
					});
					$this.append(navigation);
				}
			});
		},
		destroy : function( ) {		
			return this.each(function() {
				var $this = $(this);
				
				clearTimeout($this.data('slideshow').timeOut);
				$(window).unbind('.slideshow');
				$this.removeData('slideshow');		
			});
		}
	};

	function slideSwitch($this, index) {
		clearTimeout($this.data('slideshow').timeOut);
		$this.data('slideshow').isPlaying = true;

		var $active = $this.find('.item.active'),
			$next;
		if ($active.length==0) $active = $this.find('.item:last');
		
		if($.isNumeric(index) && index != $active.index()) {
			$next =  $this.find('.item:eq(' + index + ')');
		} else {
			$next =  $active.next('.item').length ? $active.next('.item') : $this.find('.item:first');
		}

		$active.addClass('last-active');

		$next.css({opacity: 0})
			.addClass('active')
			.animate({opacity: 1}, $this.data('slideshow').speed, function() {
				$active.removeClass('active last-active');
				$this.data('slideshow').isPlaying = false;
				$this.data('slideshow').timeOut = setTimeout( function() {
					slideSwitch($this);
				}, $this.data('slideshow').delay);
			});
			
		$this.find('.navigation li').removeClass('active');
		$this.find('.navigation li:eq(' + $next.index() + ')').addClass('active');
	};

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