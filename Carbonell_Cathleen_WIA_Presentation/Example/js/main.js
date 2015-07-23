/* 

Presentation Project -- Cathleen Carbonell -- WIA 1507

*/


$( document ).ready(function() {

	$('a.gallery').featherlightGallery({
	    openSpeed: 900,
	    previousIcon: '&#9664;',
    	nextIcon: '&#9654;'
	});


// code to fix iframe resize from https://github.com/noelboss/featherlight/issues/52

	 $.featherlight.contentFilters.iframe = {
  		process: function(url){
   		return $('<iframe width="600" height="400" src="' + url + '"/>')
  }
}



});