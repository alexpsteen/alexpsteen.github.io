

/**$(document).ready( function() {
	

	$("li).hover(function() {
		$(this).fadeTo('slow', 1);
	}, function() {
		$(this).fadeTo('slow', 0.65);
	}
	);


	$("#dv").hover(function() {
		$(this).css('border', '3px solid red');
	}, function() {
		$(this).css('border', '0px solid white');
	}
	);
});
**/

$(document).ready(function() {
    $('#dv').mouseenter(function() {
        $('#dv').fadeTo("fast", 1);
    });
});
