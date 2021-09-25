if($(window).width() > 767){
	const secAbout = new PerfectScrollbar('#section-referal', {
		wheelSpeed: 1,
		wheelPropagation: true,
		minScrollbarLength: 20
	});

	var BottomPos1 = false;
	var popupReferalIsShowed = false;

	document.getElementById('section-referal').addEventListener('ps-scroll-y', function (e) {
		if( (document.getElementById('js-why-crypterium').getBoundingClientRect().top < (window.innerHeight - 100)) && popupReferalIsShowed==false ){
			$('#js-popup-referal').addClass('show');
			popupReferalIsShowed = true;
			$('.js-popup-close').on('click', function(){
				$(this).closest('.popup').removeClass('show');
			});
		}
		
		BottomPos1 = false;
	});
	document.getElementById('section-referal').addEventListener('ps-y-reach-end', function (e){
		BottomPos1 = true;
	});
}