$(function() {

		// плавные скрол
    $("#js-get-started").on('click', function(e) {
    	e.preventDefault();

    	var plansOffset = $("#js-plans").offset().top; // растояние с верха браузера до этого элемента
    	// скрол до элемента
    	$('html,body').animate({
    		scrollTop : plansOffset
    	}, 500);
    });

    // фиксация меню 
 		var headerH = $('#js-header').height(),
 				navH = $('#js-nav-container').innerHeight();
 		$(document).on('scroll', function () {
 			var documentScroll = $(this).scrollTop();
 			if(documentScroll > headerH) {
 				$('#js-nav-container').addClass('fixed');
 				$('#js-header').css('marginTop', navH);
 			} else {
 				$('#js-nav-container').removeClass('fixed');
 				$('#js-header').removeAttr('style');
 			}
 		})
    
    // плавный скролл к блокам в меню
    $('#js-nav a').on('click', function(event) {
    	event.preventDefault();
    	var currentBlock = $(this).attr('href'),
    			currentBlockOffset = $(currentBlock).offset().top; // от верах браузера до этого элемента
    	
    	$('html,body').animate({
    		scrollTop : currentBlockOffset - 20
    	}, 500);
    });


});
