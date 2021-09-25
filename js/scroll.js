const timeoutTime = 1000;

function nexSlide(hidedSection, showedSection){
	function delSection(){		
		hidedSection.removeClass('active').removeClass('out-up').removeClass('out-down');
		showedSection.removeClass('in-up').removeClass('in-down');		
		menuToggle(showedSection);
		$('#js-wrapper').removeClass('in-scrolling');
		setTimeout(scrollEventsListners, 1000);
	}
	$('#js-wrapper').addClass('in-scrolling');
	menuRolling(showedSection);
	hidedSection.addClass('out-up');
	showedSection.addClass('active').addClass('in-up');
	$('html,body').scrollTop(255);	
	
	collorsToggle(showedSection);
	initSliders(showedSection);
	
	setTimeout(delSection, timeoutTime);
}
function prevSlide(hidedSection, showedSection){
	function delUpSection(){		
		hidedSection.removeClass('active').removeClass('out-up').removeClass('out-down');
		showedSection.removeClass('in-up').removeClass('in-down');		
		$('#js-wrapper').removeClass('in-scrolling');
		setTimeout(scrollEventsListners, 1000);
	}
	$('#js-wrapper').addClass('in-scrolling');	
	menuRolling(showedSection);
	hidedSection.addClass('out-down');
	showedSection.addClass('active').addClass('in-down');
	$('html,body').scrollTop(showedSection.height() - 255 - $(window).height());
	
	menuToggle(showedSection);
	collorsToggle(showedSection);
	initSliders(showedSection);
	
	setTimeout(delUpSection, timeoutTime);
}
function menuToggle(showedSection){
	if(showedSection.attr('data-nav') == 'is-nav'){
		$('#js-wrapper').addClass('is-nav');
	} else{
		$('#js-wrapper').removeClass('is-nav');
	}	
}
function menuRolling(showedSection){
	if(showedSection.attr('data-navnumb')){
		$('#js-menu').removeClass('menu-pos-1 menu-pos-2 menu-pos-3 menu-pos-4 menu-pos-5 menu-pos-6 menu-pos-7')
		$('#js-menu').addClass('menu-pos-' + showedSection.attr('data-navnumb'));
	}
}
function collorsToggle(showedSection){
	$('#js-wrapper').removeClass('blue yellow black white yellow-h white-black-txt yellow white-black-txt blue-yellow-h').addClass(showedSection.attr('data-color'));
}
function initSliders(showedSection){
	if( !(showedSection.hasClass('slider-is-build')) ){
		if(showedSection.attr('id') == 'section-about'){
			$('#js-about-pagination').slick({
				slidesToShow: 7,
				slidesToScroll: 1,
				asNavFor: '#js-about-slider',
				dots: false,
				centerMode: false,
				focusOnSelect: true
			});
			$('#js-about-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				arrows: false,
				fade: true,
				asNavFor: '#js-about-pagination'
			});
			showedSection.addClass('slider-is-build');
		}
		if(showedSection.attr('id') == 'section-buy'){
			$('#js-steps-slider-sec-3').slick({
				arrows: false,
				fade: true,
				dots: true
			});
			showedSection.addClass('slider-is-build');
		}
		if(showedSection.attr('id') == 'section-cashout'){
			$('#js-steps-slider-sec-5').slick({
				arrows: false,
				fade: true,
				dots: true
			});
			showedSection.addClass('slider-is-build');
		}
		if(showedSection.attr('id') == 'section-store'){
			$('#js-steps-slider-sec-7').slick({
				arrows: false,
				fade: true,
				dots: true
			});
			$('#js-slider-cards').slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
				dots: true,
				infinite: false,
				responsive: [
					  {
						breakpoint: 768,
						settings: {
						  slidesToShow: 2
						}
					  }
				  ]
			});
			showedSection.addClass('slider-is-build');
		}
		if(showedSection.attr('id') == 'section-card'){
			$('#js-last-slider-pagination').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '#js-last-slider',
				dots: false,
				centerMode: false,
				focusOnSelect: true
			});
			$('#js-last-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				arrows: false,
				fade: true,
				asNavFor: '#js-last-slider-pagination'
			});
			showedSection.addClass('slider-is-build');
		}
	}
}
function scrollEventsListners(){
	$(window).on('scroll', function(){
		var winTop = $(window).scrollTop(),
			winHeight = $(window).height(),
			pageHeight =$('#js-wrapper').height(),
			winBottom = winTop + winHeight,
			activeSlide = $('.js-slide.active');

		if( (winBottom >= pageHeight) && ( !(activeSlide.hasClass('js-last-slide')) ) ){
			$(window).off('scroll');
			function startDown(){
				nexSlide($(activeSlide), activeSlide.next('.js-slide'));
			}
			setTimeout(startDown, timeoutTime/2);
		}
		if( (winTop <= 0) && ( !(activeSlide.hasClass('js-first-slide')) ) ){
			$(window).off('scroll');
			function startUp(){
				prevSlide($(activeSlide), activeSlide.prev('.js-slide'));
			}
			setTimeout(startUp, timeoutTime/2);
		}
		
		//paralax effect
		var fig = $('#js-about-fig'),
			figTop = fig.offset().top,
			figHeight = fig.height(),
			figBottom = figTop + figHeight;
		
		if( (winBottom >= figTop) && (winTop < figBottom) ){
			fig.find('img').css('margin-top', (winTop - figTop) / 3 + 'px');
		}
	});
}
scrollEventsListners();

//навигация
$('.js-nav-link').on('click', function(){
	var $this = $(this),
		activeSlide = $('.js-slide.active'),
		nextSlide = $('.js-slide[data-navnumb="' + $this.attr('data-navlink') + '"]'),
		slideHeight = activeSlide.height();
	
	if( $this.attr('data-navlink') >  activeSlide.attr('data-navnumb')){
		$(window).off('scroll');
		function nextSld(){
			nexSlide(activeSlide, nextSlide);
		}
		$('html, body').animate({ scrollTop: slideHeight - 50}, 150);
		setTimeout(nextSld, 600);
	} else if( $this.attr('data-navlink') <  activeSlide.attr('data-navnumb')){
		$(window).off('scroll');
		function prevSld(){
			prevSlide(activeSlide, nextSlide);
		}
		$('html, body').animate({ scrollTop: 5}, 150);
		setTimeout(prevSld, 600);
		
	} else{
		return false;
	}
		
});

//кнопке на груге в about
$('.js-next-slide-btn').on('click', function(){
	$(window).off('scroll');
	var activeSlide = $('.js-slide.active'),
		nextSlide = activeSlide.next('.js-slide'),
		slideHeight = activeSlide.height();
	
	
	function nextSld(){
		nexSlide(activeSlide, nextSlide);
	}
	$('html, body').animate({ scrollTop: slideHeight - 50}, 150);
	setTimeout(nextSld, 600);
});

