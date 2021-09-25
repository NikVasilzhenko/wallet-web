$(document).ready(function(){
	//cards flippers
	$(".js-card-container").on("mousemove",function(e) { 			
		if($(this).hasClass('js-card-long')){
			var ax = -($(this).innerWidth()/2- (e.pageX - $(this).offset().left))/50;
			var ay = ($(this).innerHeight()/2- (e.pageY - $(this).offset().top))/10;
		} else if($(this).hasClass('js-card-hight')){
			var ax = -($(this).innerWidth()/2- (e.pageX - $(this).offset().left))/10;
			var ay = ($(this).innerHeight()/2- (e.pageY - $(this).offset().top))/50;
		} else{
			var ax = -($(this).innerWidth()/2- (e.pageX - $(this).offset().left))/10;
			var ay = ($(this).innerHeight()/2- (e.pageY - $(this).offset().top))/10;
		}
		$(this).find('.js-card').attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
	});
	$(".js-card-container").on("mouseout",function(){
		$(this).find('.js-card').attr("style", "transform: rotateY(0) rotateX(0);-webkit-transform: rotateY(0) rotateX(0);-moz-transform: rotateY(0) rotateX(0)");
	});
	
	//how it works tabs
	var tabs = $('.js-tab'),
		tabsItems = $('.js-tab-item');
	tabs.on('click', function(){
		tabs.removeClass('active');
		$(this).addClass('active');			
		tabsItems.removeClass('active').eq($(this).index()).addClass('active');
	});
	
	//show/hide tab
	$('#js-start-again').on('click', function(){
		$('#js-form-sec').removeClass('show');
		$('#js-numb-input').val('');
	});
	$('#js-surprise-me').on('click', function(){
		if($('#js-numb-input').val() != 0){
			$('#js-form-sec').addClass('show');
		} else {
			$('#js-numb-input').addClass('error');
		}
		$('#js-numb-input').on('input', function(){
			$(this).removeClass('error');
		});
	});
	
	//details hover
	$('.js-detail-eye').on('mouseover', function(){
		$(this).closest('.js-detail-item').addClass('hovered');
	});
	$('.js-detail-item').on('mouseleave', function(){
		$(this).removeClass('hovered');
	});
	
	//
	$('.js-next-slide-btn').on('click', function(){
		function nextSlide(){
			$.fn.fullpage.moveSectionDown();
		}
		$('#section-about').animate({ scrollTop: 9999}, 500, nextSlide);
	});
	
	//play sec
	$('.js-palay-btn').on('click', function(){
		var srcAttr = $(this).attr('data-href'),
        	elem = $('<iframe>',{     
                src : srcAttr + "?autohide=1&amp;autoplay=1",
                frameborder : "0",
                allowfullscreen : ""});
		function prependFnc(){
			$('#js-video-popup-main').prepend(elem);
		}        
		$(this).addClass('hide');
		$('#js-video-popup').addClass('show');
		if($(window).width() > 767){
			$('#js-video-popup-main').css({
				'top' : $(this).closest('.js-play-container')[0].getBoundingClientRect().top + ($('#js-video-popup-main').outerHeight(true) / 2) + 'px',
				'left' : $(this).closest('.js-play-container')[0].getBoundingClientRect().left + ($('#js-video-popup-main').width() / 2) + 'px'
			});
			$('#js-video-popup-main').animate(
				{
					width: '100rem', 
					paddingTop: '50rem',
					top: ($(window).height() / 2) + 'px',
					left: ($(window).width() / 2) + 'px',
					borderRadius: 0
				},
				500, prependFnc);
		} else{
			$('#js-video-popup-main').css({
				'top' : $(this).closest('.js-play-container')[0].getBoundingClientRect().top + ($('#js-video-popup-main').outerHeight() / 2) + 'px',
				'left' : $(this).closest('.js-play-container')[0].getBoundingClientRect().left + ($('#js-video-popup-main').width() / 2) + 'px'
			});
			$('#js-video-popup-main').animate(
				{
					width: '90%', 
					paddingTop: '45%',
					top: ($(window).height() / 2) + 'px',
					left: ($(window).width() / 2) + 'px',
					borderRadius: 0
				},
				500, prependFnc);
		}

	});
	$('#js-video-popup-close').on('click', function(){
		$('#js-video-popup').removeClass('show');
		$('.js-palay-btn').removeClass('hide');
		$('#js-video-popup-main').attr('style', '');
		$('#js-video-popup-main').find('iframe').remove();
	});
	
	//mob lang select
	$('.js-lang-popup-open').on('click', function(){
		$('#js-lang-popup').fadeToggle(500);
	});
	
	//mob menu
	$('.js-mob-menu-btn').on('click', function(){
		$(this).toggleClass('open');
		$('#js-mob-menu').toggleClass('open');
	});
 
	if (window.geoip2) {
		const selectedItem = 
			document.querySelector('.form-sec .js-styled-select .select-selected')
		
			window.geoip2.country(function(res) {
			selectedItem.innerHTML = res.country.names.en
		})
	}
});

// selects location

//tyled selects
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("js-styled-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function(e) {
		var y, i, k, s, h;
		s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		h = this.parentNode.previousSibling;
		for (i = 0; i < s.length; i++) {
		  if (s.options[i].innerHTML == this.innerHTML) {
			s.selectedIndex = i;
			h.innerHTML = this.innerHTML;
			y = this.parentNode.getElementsByClassName("same-as-selected");
			for (k = 0; k < y.length; k++) {
			  y[k].removeAttribute("class");
			}
			this.setAttribute("class", "same-as-selected");
			break;
		  }
		}
		h.click();
	});
	b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
	e.stopPropagation();
	closeAllSelect(this);
	this.nextSibling.classList.toggle("select-hide");
	this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
	if (elmnt == y[i]) {
	  arrNo.push(i)
	} else {
	  y[i].classList.remove("select-arrow-active");
	}
  }
  for (i = 0; i < x.length; i++) {
	if (arrNo.indexOf(i)) {
	  x[i].classList.add("select-hide");
	}
  }
}
document.addEventListener("click", closeAllSelect);

//notnum input block
function Ftest (obj){
	 if (this.ST) return; var ov = obj.value;
	 var ovrl = ov.replace (/\d*\.?\d*/, '').length; 
	 this.ST = true;
	 if (ovrl > 0) {
		 obj.value = obj.lang; 
		 Fshowerror (obj); 
		 return
	 }
	 obj.lang = obj.value; 
	 this.ST = null;
}
function Fshowerror (obj){
	if (!this.OBJ){
		this.OBJ = obj; 
		obj.style.backgroundColor = 'pink'; 
		this.TIM = setTimeout (Fshowerror, 50);
	} else {
		this.OBJ.style.backgroundColor = ''; 
		clearTimeout (this.TIM); 
		this.ST = null; 
		Ftest (this.OBJ); 
		this.OBJ = null;
	}
}
