$(document).ready(function() {

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
	
});