
jQuery(document).ready(function(){
  $(window).scroll(function(e){
  	parallaxScroll();
	});
	 
	function parallaxScroll(){
		var scrolled = $(window).scrollBottom();
		$('#parallax-bg-1').css('bottom',(scrolled*.25)+'px');

	}