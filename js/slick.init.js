$(document).ready(function(){
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
		asNavFor: '#js-about-pagination',
		responsive: [
			  {
				breakpoint: 768,
				settings: {
					autoplay: false,
					fade: true
				}
			  }
		  ]
	});
	
	
	$('#js-buy-slider').slick({
		arrows: false,
		dots: true,
		fade: true
	});
	
	$('#js-store-slider').slick({
		arrows: false,
		dots: true,
		swipe: false,
		fade: true
	});
	
	
	$('#js-steps-slider-sec-5').slick({
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
					slidesToShow: 2,
					slidesToScroll: 2
				}
			  }
		  ]
	});
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
	$('#js-reviews-slider').slick({
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
});
	
	
	
	
	
//$(document).ready(function() {
//  $("#js-about-pagination").slick({
//    slidesToShow: 7,
//    slidesToScroll: 1,
//    asNavFor: "#js-about-slider",
//    dots: false,
//    centerMode: false,
//    focusOnSelect: true,
//    fade: true
//  });
//  $("#js-about-slider").slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    autoplay: true,
//    fade: true,
//    arrows: false,
//    asNavFor: "#js-about-pagination",
//    responsive: [
//      {
//        breakpoint: 768,
//        settings: {
//          autoplay: false,
//          fade: true
//        }
//      }
//    ]
//  });
//
//  $("#js-buy-slider").slick({
//    arrows: false,
//    dots: true,
//    fade: true
//  });
//  $("#js-store-slider").slick({
//    arrows: false,
//    dots: true,
//    fade: true,
//	swipe: false
//  });
//
//  $("#js-steps-slider-sec-5").slick({
//    arrows: false,
//    dots: true,
//    fade: true
//  });
//  $("#js-steps-slider-sec-7").slick({
//    arrows: false,
//    dots: true,
//    fade: true
//  });
//  $("#js-slider-cards").slick({
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    arrows: false,
//    dots: true,
//    infinite: false,
//    responsive: [
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2
//        }
//      }
//    ]
//  });
//  $("#js-last-slider-pagination").slick({
//    slidesToShow: 5,
//    slidesToScroll: 1,
//    asNavFor: "#js-last-slider",
//    dots: false,
//    centerMode: false,
//    focusOnSelect: true,
//    fade: true
//  });
//  $("#js-last-slider").slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    autoplay: true,
//    fade: true,
//    arrows: false,
//    asNavFor: "#js-last-slider-pagination"
//  });
//  $("#js-reviews-slider").slick({
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    arrows: false,
//    fade: true,
//    dots: true,
//    infinite: false,
//    responsive: [
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 2
//        }
//      }
//    ]
//  });
//});
