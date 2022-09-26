$('.main01 .inner_01').slick({
	lazyLoad: 'progressive',
	dots: false,
	speed: 500,
	infinite: true,
	swipe: false,
	fade: true,
	arrows: true,
	prevArrow: $(".main_ban_prev"),
	nextArrow: $(".main_ban_next"),
	// cssEase: 'ease-in-out',
	// asNavFor: '#slider-overlay .slides, .slick-dots-thumb'
});

$('.main01 .inner_01').on( "init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$('p.main_paging').html("<span>" + i + "</span>" + " / " + slick.slideCount);
	setTimeout(() => { $('.main01 .inner_02').slick('slickGoTo', currentSlide); }, 500);
	setTimeout(() => { $('.main01 .inner_03').slick('slickGoTo', currentSlide); }, 1000);
});

$('.main01 .inner_02').slick({
	lazyLoad: 'progressive',
	arrows: false,
	fade: true,
	infinite: true,
	centerMode: true,
	speed: 500,
	swipe: false,
	slidesToShow: 1,
	adaptiveHeight: true,
	// cssEase: 'ease-in-out',
	// asNavFor: '.slick-dots-thumb, #slider .slides'
});

$('.main01 .inner_03').slick({
	lazyLoad: 'progressive',
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	cssEase: 'ease-in-out',
	// centerMode: true,
	// centerPadding: '53px',
	// adaptiveHeight: true,
	// asNavFor: '#slider-overlay .slides, #slider .slides',
	// focusOnSelect: true,
});