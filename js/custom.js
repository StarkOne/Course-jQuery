$(function() {

    $("#js-get-started").on('click', function(e) {

    	e.preventDefault();

    	var plansOffset = $("#js-plans").offset().top; // растояние с верха браузера до этого элемента
    	
    	// скрол до элемента
    	$('html,body').animate({
    		scrollTop : plansOffset
    	}, 500);

    });

    
});
