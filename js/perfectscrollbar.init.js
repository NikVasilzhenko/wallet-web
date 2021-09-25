
	if($(window).width() > 767){	

		const secAbout = new PerfectScrollbar('#section-about', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});
		const secBuy = new PerfectScrollbar('#section-buy', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});
		const secSend = new PerfectScrollbar('#section-send', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});
		const secCashout = new PerfectScrollbar('#section-cashout', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});
		const secExchange = new PerfectScrollbar('#section-exchange', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});
		const secStore = new PerfectScrollbar('#section-store', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});
		const secCard = new PerfectScrollbar('#section-card', {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20
		});

		var TopPos2 = false,
			BottomPos2 = false,
			TopPos3 = false,
			BottomPos3 = false,
			TopPos4 = false,
			BottomPos4 = false,
			TopPos5 = false,
			BottomPos5 = false,
			TopPos6 = false,
			BottomPos6 = false,
			TopPos7 = false,
			BottomPos7 = false,
			TopPos8 = false,
			BottomPos8 = false;

		document.getElementById('section-about').addEventListener('ps-scroll-y', function (e) {
			document.getElementById('js-about-fig').style.marginTop= -(document.getElementById('js-about-scroll').getBoundingClientRect().top / 4) + 'px';
			TopPos2 = false;
			BottomPos2 = false;
		});
		document.getElementById('section-about').addEventListener('ps-y-reach-start', function (e){
			TopPos2 = true;
		});
		document.getElementById('section-about').addEventListener('ps-y-reach-end', function (e){
			BottomPos2 = true;
		});

		document.getElementById('section-buy').addEventListener('ps-scroll-y', function (e) {
			document.getElementById('js-buy-fig').style.left= -(document.getElementById('js-buy-scroll').getBoundingClientRect().top / 4) + 'px';
			TopPos3 = false;
			BottomPos3 = false;
		});
		document.getElementById('section-buy').addEventListener('ps-y-reach-start', function (e){
			TopPos3 = true;
		});
		document.getElementById('section-buy').addEventListener('ps-y-reach-end', function (e){
			BottomPos3 = true;
		});

		document.getElementById('section-send').addEventListener('ps-scroll-y', function (e) {
			document.getElementById('js-send-fig').style.marginTop= -(document.getElementById('js-send-scroll').getBoundingClientRect().top / 3.5) + 'px';
			document.getElementById('js-send-fig').style.transform = 'rotate(' + (document.getElementById('js-send-scroll').getBoundingClientRect().top) / 20 + 'deg)';
			TopPos4 = false;
			BottomPos4 = false;
		});
		document.getElementById('section-send').addEventListener('ps-y-reach-start', function (e){
			TopPos4 = true;
		});
		document.getElementById('section-send').addEventListener('ps-y-reach-end', function (e){
			BottomPos4 = true;
		});

		document.getElementById('section-cashout').addEventListener('ps-scroll-y', function (e) {
			TopPos5 = false;
			BottomPos5 = false;
		});
		document.getElementById('section-cashout').addEventListener('ps-y-reach-start', function (e){
			TopPos5 = true;
		});
		document.getElementById('section-cashout').addEventListener('ps-y-reach-end', function (e){
			BottomPos5 = true;
		});

		document.getElementById('section-exchange').addEventListener('ps-scroll-y', function (e) {
			TopPos6 = false;
			BottomPos6 = false;
		});
		document.getElementById('section-exchange').addEventListener('ps-y-reach-start', function (e){
			TopPos6 = true;
		});
		document.getElementById('section-exchange').addEventListener('ps-y-reach-end', function (e){
			BottomPos6 = true;
		});

		document.getElementById('section-store').addEventListener('ps-scroll-y', function (e) {
			TopPos7 = false;
			BottomPos7 = false;
		});
		document.getElementById('section-store').addEventListener('ps-y-reach-start', function (e){
			TopPos7 = true;
		});
		document.getElementById('section-store').addEventListener('ps-y-reach-end', function (e){
			BottomPos7 = true;
		});

		document.getElementById('section-card').addEventListener('ps-scroll-y', function (e) {
			TopPos8 = false;
			BottomPos8 = false;
		});
		document.getElementById('section-card').addEventListener('ps-y-reach-start', function (e){
			TopPos8 = true;
		});
		document.getElementById('section-card').addEventListener('ps-y-reach-end', function (e){
			BottomPos8 = true;
		});
		
	}