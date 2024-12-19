$(function () {
    $("nav#gnb ul li a, #site-map ul li a, .goToTop a").click(function () {
        // console.log($(this.hash).offset().top);
        var thisElem = $(this.hash)
        $("html,body").stop();
        $("html,body").animate({scrollTop: thisElem.offset().top},1500)
    })

    $(window).scroll(function () {
        // if (조건식) {실행문}
        // 조건식 ? 실행문1 : 실행문2;  >  true면 실행문1, false면 실행문2가 실행됨 >>3항 조건식
        $(this).scrollTop() > 0 ? $('.goToTop').addClass('on') : $('.goToTop').removeClass('on')
    })
    
    var wHeight = $(window).height();
    $(window).scroll(function () {
        var thisScrollTop = $(this).scrollTop()
    $('section').each(function(){
        var thisOffset = $(this).offset();
        console.log(thisOffset);
        if (thisOffset.top <= thisScrollTop + 300 && thisScrollTop <= thisOffset.top + wHeight) {
            $(this).addClass('active')
        }
        
    })
    })
})