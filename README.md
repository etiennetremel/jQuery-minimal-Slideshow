jQuery-minimal-Slideshow
========================

Minimal Slideshow plugin in jQuery - Only 1K

Usage
-------

### HTML
	<div id="banner">
		<img src="first-image.jpg" class="active" />
		<img src="second-image.jpg" />
		<img src="third-image.jpg" />
	</div>

### CSS
	#banner {
		margin-top:10px;
		width:640px;
		height:426px;
		overflow:hidden;
	}
	
	#banner img {
		position:absolute;
	}
	
	#banner .active {
		z-index:9;
	}
	
	#banner .last-active {
		z-index:8;
	}

### Javascript
	$(document).ready(function() {
		$('#banner').slideshow({
			'speed':1000, // Fading effect speed
			'delay':4000 // Delay between slides
		});
	});