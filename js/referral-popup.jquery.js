$(document).ready(function(){
	var popupReferralIsShowed = false;
	$(window).on('scroll', function(){
		if(($(this).scrollTop() + $(this).height()) > ($('#js-why-crypterium').offset().top + 200)){
			if (popupReferralIsShowed === false) {
				$('#js-popup-referal').addClass('show');
				popupReferralIsShowed = true;
			}
			
		}
	});
	$('.js-popup-close').on('click', function(){
		$(this).closest('.popup').removeClass('show');
	});
});