$(function(){

	//ロゴ画像を中心に配置
	function logoResize(){
		var w = $(window).width();
		var h = $(window).height();
		var logoWidth = $('#logoimg').width();
		var logoHeight = $('#logoimg').height();
		$('.logo').css({
			"top": h / 2 - logoHeight / 2,
			"left": w / 2 - logoWidth / 2
		});
	}
	logoResize();
	$(window).on('resize', function(){
		logoResize();
	});

})