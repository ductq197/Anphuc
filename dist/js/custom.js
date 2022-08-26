$(document).ready(function(){
	$(".slide-content, .spbc-slide").owlCarousel({
		animateIn: 'FadeIn',
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		navSpeed: 3000,
		slideBy: 1,
		margin: 0,
		touchDrag  : false,
		mouseDrag  : false,
		navRewind: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 3000,
		autoplayTimeout:3000,
		autoHeight: true,
	});
});
$(document).ready(function () {

	$(".tab-content-item").hide();
	$(".tab-content-item:first").show();

	$(".tab-list li").click(function() {
		$(".tab-content-item").hide();

		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn();
		if($(this).attr("rel") == "tab2"){
			$('.tab-ul').addClass('slide');
		}else{
			$('.tab-ul').removeClass('slide');
		}
		$(".tab-list li").removeClass("active");
		$(this).addClass("active");
	});

});