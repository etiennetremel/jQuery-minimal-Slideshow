jQuery-minimal-Slideshow
========================

Minimal Slideshow plugin in jQuery - Only 1.4K
Use the advanced version of Slideshow to display navigation and use content in slides (not just images). See Javascript and example for details.

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
		position:relative;
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
			'delay':4000, // Delay between slides
			'stopOnMouseOver': false //Stop sliding when mouse is over
		});
	});
	
Log
-------

### v0.3 (Advanced version)
	Advanced version added with more features, but file bigger
	New parameter added: "navigation" - Use navigation
	Usage changed: div used instead of image tag

### v0.2
	New parameter added: "stopOnMouseOver" - Stop sliding when mouse is over