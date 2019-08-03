$(function(){

	//ロゴ画像を中心に配置
	function logoResize(){
		var w = $(window).width();
		var h = $(window).height();
		var logoWidth = $('#logoimg').width();
		var logoHeight = $('#logoimg').height();
		$('.logo').css({
			"top": h / 2 - logoHeight / 2 - 30,
			"left": w / 2 - logoWidth / 2
		});
		if (w <= 1440) {
			$('.logo').css({
				"top": -30,
				"left": -50
			});
		}
		if (w <= 480) {
			$('.logo').css({
				"top": 0,
				"left": w / 2 - logoWidth / 2
			});
			$('#about-sp').css({
				"top": logoHeight
			});
		}
	}
	logoResize();
	$(window).on('resize', function(){
		logoResize();
	});

	//１ページスクロール
	// $.scrollify({section:".box"});

	// var current;
	// $.scrollify({
	//     section:".box",
	//     setHeights:false,
	//     before:function(i,box){
	//         current = i;
	//     },
	// });
	// $(window).on('resize',function(){
	//     if(current){
	//         var currentScrl = $('.box').eq(current).offset().top;
	//         $(window).scrollTop(currentScrl);
	//     }
	// });

})