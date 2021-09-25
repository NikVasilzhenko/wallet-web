$(document).ready(function(){
	if($(window).width() > 767){
		
		//инициация плагина
		var fp = $('#fullpage').fullpage({
			sectionSelector: '.vertical-scrolling',
			css3: true,
			scrollingSpeed: 800,
			anchors: ['referal', 'last'],
			onLeave : function (index, nextIndex, direction) {
				if( 
					(index==1 && direction == 'up') ||
					(index==1 && direction == 'down' && (BottomPos1 == false))
				){
					return false;
				} else{
					if(direction == 'up'){
						$('.slide--' + nextIndex +' .section').animate({ scrollTop: 9999}, 100);
					}
					$('#js-blind').addClass('show');
				}
			},
			afterLoad : function(){				
				$('#js-blind').removeClass('show');
			}
		});
	}	
});