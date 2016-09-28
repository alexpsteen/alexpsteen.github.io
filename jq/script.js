$(document).ready(function() {

	$('body').removeClass('fadeout');


	$(".mbar_li").hover(function() {
			$(this).animate({
				borderColor: '#FFFFFF'
				},{duration: 400, queue: false}
				, function() {
			});
			$(this).animate({
				opacity: '1'
				},{duration: 400, queue: false}
				, function() {
			});
		}, function() {
			$(this).animate({
				borderColor: 'transparent'
				},{duration: 400, queue: false}
				, function() {
			});
			$(this).animate({
				opacity: '0.6'
				},{duration: 400, queue: false}
				, function() {
			});
		}
	);

	$(".signature").hover(function() {
			$(".signatureBLK").animate({
				backgroundColor: '#FFFFFF'
				},{duration: 400, queue: false}
				, function() {
			});
			$(this).animate({
				opacity: '0'
				},{duration: 400, queue: false}
				, function() {
			});
		}, function() {
			$(".signatureBLK").animate({
				backgroundColor: 'transparent'
				},{duration: 400, queue: false}
				, function() {
			});
			$(this).animate({
				opacity: '1'
				},{duration: 400, queue: false}
				, function() {
			});
		}
	);

	// $(".mediaIcons").hover(
	// 	function(){$(this).animate({width: 54px, height: 54px}, 500);},
	// 	function(){$(this).animate({width: 50px, height: 50px}, 500);}
	// );
	
	$('.scrollTab').click( function() {
		$('html, body').animate({
			scrollTop: $(".paintRoller").offset().top
		}, 1000);
	});
	
});