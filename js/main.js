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

	//１ページスクロール
	var current;
	$.scrollify({
	    section:".box",
	    setHeights:false,
	    before:function(i,box){
	        current = i;
	    },
	});
	$(window).on('resize',function(){
	    if(current){
	        var currentScrl = $('.box').eq(current).offset().top;
	        $(window).scrollTop(currentScrl);
	    }
	});

	//スクロールフェード
	var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });


})