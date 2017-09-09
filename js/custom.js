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

    // создание модального окна

    $(".js-modal").each(function(index, el) {
	    let modalWidth = $(this).innerWidth() / 2;
	    
	    $(this).css({
	    	"marginLeft" : "-" + modalWidth + "px"
	    });
    });

    $('.js-show-modal').on('click', function(event) {
    	event.preventDefault();
    	var currentModal = $(this).attr('href');
    	$(currentModal).fadeIn(500);
    	$('body').append('<div class="overlay" id="js-overlay"></div>').addClass("open-modal");

    	$('.js-modal-close').on('click', function(event) {
    		event.preventDefault();
    		$('.js-modal').fadeOut(250);
    		$('body').removeClass("open-modal");
    		$('#js-overlay').remove();
    	});
    });

		$('body').on('click', "#js-overlay", function(){
			$('.js-modal').fadeOut(250);
    	$('body').removeClass("open-modal");
    	$('#js-overlay').remove();
		})    

    // // создание акардиона

    // $('.js-faq-title').on('click', function(event) {
    // 	event.preventDefault();
    // 	var $this = $(this);

    // 	if(!$this.hasClass('active')) {
    // 		$('.js-faq-constent').slideUp();
    // 		$('.js-faq-title').removeClass('active');
    // 	}

    // 	$this.toggleClass('active');
    // 	$this.next().slideToggle('fast');
    // });


    // создание акардиона 2

    $('.js-faq-title').on('click', function(event) {
    	event.preventDefault();
    	var $this = $(this),
    			answerId = $(this).attr('href');
    	if(!$this.hasClass('active')) {
    		$('.js-faq-constent').slideUp();
    		$('.js-faq-title').removeClass('active');
    	}

    	$this.toggleClass('active');
    	$(answerId).slideToggle('fast');
    });

    // всплывающие подсказки
    $('.js-popup-hover').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	var $this = $(this),
    			popupId = $(this).attr('href');
    			$(popupId).fadeIn();
    }, function() {
    	/* Stuff to do when the mouse leaves the element */
    	$('.js-popup').fadeOut('');
    });
});
