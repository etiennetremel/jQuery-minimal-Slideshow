jQuery-minimal-Slideshow
========================

Minimal Slideshow plugin in jQuery - Only 1K

Usage
-------

	&lt;div id="banner"&gt;
		&lt;img src="first-image.jpg" class="active" /&gt;
		&lt;img src="second-image.jpg" /&gt;
		&lt;img src="third-image.jpg" /&gt;
	&lt;/div&gt;

	&lt;script&gt;
		$(document).ready(function() {
			$('#banner').slideshow({
				'speed':1000, // Fading effect speed
				'delay':4000 // Delay between slides
			});
		});
	&lt;/script&gt;