$(document).ready(function() {
  if ($(window).width() < 767) {
    var expandNavs = document.querySelectorAll(".mobile-nav-stack__note");
    Array.prototype.map.call(expandNavs, function(expandItem) {
      var isExpanded = false;

      expandItem.addEventListener("click", function(e) {
        if (!isExpanded) {
          e.target.parentNode.classList.remove("mobile-nav-stack--expandable");
          e.target.parentNode.classList.add("mobile-nav-stack--expanded");
          e.target.innerText = "hide all features";
          isExpanded = true;
        } else {
          e.target.parentNode.classList.add("mobile-nav-stack--expandable");
          e.target.parentNode.classList.remove("mobile-nav-stack--expanded");
          e.target.innerText = "show all features";
          isExpanded = false;
        }
      });
    });

    //показ попапов
    var popupBuyIsShowed = false,
      popupLastNewsIsShowed = false,
      popupExchangeIsShowed = false,
      popupCardIsShowed = false,
      showBuyPopupFnc = function() {
        $("#js-popup-buy").addClass("show");
        popupBuyIsShowed = true;
      },
      showLastNewsPopupFnc = function() {
        $("#js-popup-lastnews").addClass("show");
        popupLastNewsIsShowed = true;
      },
      showExchangePopupFnc = function() {
        $("#js-popup-exchange").addClass("show");
        popupExchangeIsShowed = true;
      },
      showCardPopupFnc = function() {
        $("#js-popup-card").addClass("show");
        popupCardIsShowed = true;
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

    if ($(window).scrollTop() >= $(".slide--9").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-last");
    } else if ($(window).scrollTop() >= $("#js-learn-center").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-learn-center");
    } else if ($(window).scrollTop() >= $(".slide--8").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-card");
      if (popupCardIsShowed == false) {
        setTimeout(showCardPopupFnc, 2000);
      }
    } else if ($(window).scrollTop() >= $(".slide--7").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-store");
    } else if ($(window).scrollTop() >= $(".slide--6").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-exchange");
      //        if (popupExchangeIsShowed == false) {
      //          setTimeout(showExchangePopupFnc, 2000);
      //        }
    } else if ($(window).scrollTop() >= $(".slide--5").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-cashout");
    } else if ($(window).scrollTop() >= $(".slide--4").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-send");
    } else if ($(window).scrollTop() >= $(".slide--3").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-buy");
      //        if (popupBuyIsShowed == false) {
      //          setTimeout(showBuyPopupFnc, 2000);
      //        }
    } else if ($(window).scrollTop() >= $(".slide--2").offset().top) {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-about");
    } else {
      $("#js-overwrap")
        .removeClass()
        .addClass("active-first");
    }
  }
});
