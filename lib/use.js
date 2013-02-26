/*
 * Sample implementation
 */

$(function(){
	// Implementation
	$('#swipe').swipe({ swipeTime: 800, swipeX: 100, left: swipeLeft, right: swipeRight });

	// Left/Right custom functions
	function swipeLeft(){
		console.log('user swiped left');
	}

	function swipeRight(){
		console.log('user swiped right');
	}
});