$(document).ready(function(){
	if($(window).width() > 767){
		//Удалить learn center 
		$('#js-learn-center').remove();
		//показ попапов
		var popupBuyIsShowed = false,
			popupExchangeIsShowed = false,
			popupLastNewsIsShowed = false,
			popupCardIsShowed = false,		
		showBuyPopupFnc = function(){
			if (!popupExchangeIsShowed && !popupLastNewsIsShowed && !popupCardIsShowed) {
				$('#js-popup-buy').addClass('show');
				popupBuyIsShowed = true;
			}
		},
		showExchangePopupFnc = function(){
			if (!popupBuyIsShowed && !popupLastNewsIsShowed && !popupCardIsShowed) {
				$('#js-popup-buy').addClass('show');
				popupExchangeIsShowed = true;
			}
		},
		showLastNewsPopupFnc = function(){
			if (!popupBuyIsShowed && !popupExchangeIsShowed && !popupCardIsShowed) {
				$('#js-popup-buy').addClass('show');
				popupLastNewsIsShowed = true;
			}
		},
		showCardPopupFnc = function(){
			if (!popupBuyIsShowed && !popupExchangeIsShowed && !popupLastNewsIsShowed) {
				$('#js-popup-buy').addClass('show');
				popupCardIsShowed = true;
			}
		};
		
		setTimeout(showBuyPopupFnc, 40000);
		

		//закрыть попап
		$('.js-popup-close').on('click', function(){
			$(this).closest('.popup').removeClass('show');
			if($(this).closest('.popup').hasClass('popup--buy')){
				setTimeout(showLastNewsPopupFnc, 40000);
			} else if($(this).closest('.popup').hasClass('popup--lastnews')){
				setTimeout(showExchangePopupFnc, 40000);  
			}
		});
		
		//инициация плагина
		var fp = $('#fullpage').fullpage({
			sectionSelector: '.vertical-scrolling',
			css3: true,
			scrollingSpeed: 800,
			anchors: ['start', 'about', 'buy', 'send', 'cashout','exchange','store','card','last'],
			onLeave : function (index, nextIndex, direction) {
				if( 
					!(index == 1 ||
					index == 9 ||
					(index==2 && direction == 'up' && (TopPos2 == true)) ||
					(index==2 && direction == 'down' && (BottomPos2 == true)) ||
					(index==3 && direction == 'up' && (TopPos3 == true)) ||
					(index==3 && direction == 'down' && (BottomPos3 == true)) ||
					(index==4 && direction == 'up' && (TopPos4 == true)) ||
					(index==4 && direction == 'down' && (BottomPos4 == true)) ||
					(index==5 && direction == 'up' && (TopPos5 == true)) ||
					(index==5 && direction == 'down' && (BottomPos5 == true)) ||
					(index==6 && direction == 'up' && (TopPos6 == true)) ||
					(index==6 && direction == 'down' && (BottomPos6 == true)) ||
					(index==7 && direction == 'up' && (TopPos7 == true)) ||
					(index==7 && direction == 'down' && (BottomPos7 == true)) ||
					(index==8 && direction == 'up' && (TopPos8 == true)) ||
					(index==8 && direction == 'down' && (BottomPos8 == true)))
				){
					return false;
				} else{
					if(direction == 'up'){
						$('.slide--' + index +' .section').animate({ scrollTop: 0}, 200);
						$('.slide--' + nextIndex +' .section').animate({ scrollTop: 9999}, 100);
					} else{
						$('.slide--' + index +' .section').animate({ scrollTop: 6666}, 800);
						$('.slide--' + nextIndex +' .section').animate({ scrollTop: 0}, 100);
					}
					$('#js-blind').addClass('show');
					$('#js-about-fig').add('#js-buy-fig').add('#js-send-fig').attr('style', '');
				}
			},
			afterLoad : function(){
				//запуск попапов
				(function(){
					if($('body').hasClass('fp-viewing-card') && popupCardIsShowed==false){
						setTimeout(showCardPopupFnc, 2000);
					}
				})();
				
				$('#js-blind').removeClass('show');
			}
		});
		$('.js-nav-link').on('click', function(e){
			e.preventDefault();
			TopPos2 = true;
			BottomPos2 = true;
			TopPos3 = true;
			BottomPos3 = true;
			TopPos4 = true;
			BottomPos4 = true;
			TopPos5 = true;
			BottomPos5 = true;
			TopPos6 = true;
			BottomPos6 = true;
			TopPos7 = true
			BottomPos7 = true;
			TopPos8 = true;
			BottomPos8 = true;
			location.href = $(this).attr('href');
		});
	}	
});