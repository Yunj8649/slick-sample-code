$('#slider .slides').slick({
  lazyLoad: 'progressive',
	arrows: true,
	dots: true,
	speed: 500,
	infinite: true,
	cssEase: 'ease-in-out',
	swipe: false,
	fade: true,
  asNavFor: '#slider-overlay .slides, .slick-dots-thumb'
});
$('#slider-overlay .slides').slick({
  lazyLoad: 'progressive',
	arrows: true,
	// fade: true,
	centerPadding: '0px',
	infinite: true,
	centerMode: true,
	speed: 500,
	swipe: false,
	cssEase: 'ease-in-out',
	slidesToShow: 1,
	adaptiveHeight: true,
  asNavFor: '.slick-dots-thumb, #slider .slides'
});
$('.slick-dots-thumb').slick({
  lazyLoad: 'progressive',
	 arrows: false,
	 infinite: true,
	 slidesToShow: 3,
	 centerMode: true,
	 centerPadding: '53px',
	 adaptiveHeight: true,
	 cssEase: 'ease-in-out',
  asNavFor: '#slider-overlay .slides, #slider .slides',
  focusOnSelect: true,
});
