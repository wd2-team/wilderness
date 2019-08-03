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

	//端末判定
	var getDevice = (function(){
	    var ua = navigator.userAgent;
	    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
	        return 'sp';
	    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
	        return 'tab';
	    }else{
	        return 'other';
	    }
	})();
	if( getDevice == 'tab' ){
	    //タブレット
	    $('#about-pc').css({
			"display": "none"
		});
		function logoResizeTab(){
			var w = $(window).width();
			var h = $(window).height();
			var logoWidth = $('#logoimg').width();
			var logoHeight = $('#logoimg').height();
			$('.logo').css({
				"left": w / 2 - logoWidth / 2
			});
			if (h <= 1366) {
				$('.logo').css({
					"top": 300
				});
			}
			if (h <= 1024) {
				$('.logo').css({
					"top": 100
				});
			}
		}
		logoResizeTab();
		$(window).on('resize', function(){
			logoResizeTab();
		});
	}


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