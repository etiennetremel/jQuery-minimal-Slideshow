jQuery-minimal-Slideshow
========================

Minimal Slideshow plugin in jQuery - Only 1K

Usage
========================

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