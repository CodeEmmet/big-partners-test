
// global vars
var $window;
var WH;
var WW;
var HH;

// ---

// the magic begins
$(document).ready(function() {
	
	// global vars
	$window = $(window);
	
	// ---
	
	// global resize
	globalResize();
	$window.resize(globalResize);
	
	// ---
	
});

// ---

// global resize
function globalResize() {
	
	// set window size
	WH = $window.height();
	WW = $window.width();
	HH = 0;
	
}

// Volume Video
$('#volume').click(function(){
    if( $("#video").prop('muted') ) {
          $("#video").prop('muted', false);
          $(this).toggleClass('volumeOff');
    } else {
      $("#video").prop('muted', true);
      $(this).toggleClass('volumeOff');
    }
});

// Slick Slider
$(document).ready(function(){
  $('.slider-mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  });
});
