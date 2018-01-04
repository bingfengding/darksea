$(function () {
    var top = document.documentElement ? document.documentElement : document.body;
    if (top.clientWidth>640){
        top.style.fontSize = '10px';
    }else {
        top.style.fontSize = (top.clientWidth/64)+'px';
    }
    function setRem(number) {
        var rema =top.style.fontSize;
        return number* parseFloat(rema) + 'px';
    }
    function len(num) {
        var _clientWidth = document.documentElement.clientWidth;
        num = _clientWidth/1004*num;
        return num+'px';
    }
     timer=setTimeout(function () {
        document.documentElement.scrollTop = parseFloat(len(300));
        clearTimeout(timer);
    },50);

    //CSS设置
    function one() {
        $('#indexPart').css({
                'height':len(546),
                'marginTop':len(-5)
        });

        $('.top').css({
            'height':len(572),
            'width':len(1004)
        });
        $('#affiche').css({
            width:len(130),
            'height':len(120),
            'margin-top':len(120),
            'margin-left':len(25)
        });
        $('#copyright').css({
            'width':len(500),
            'height':len(30),
            'line-height':len(30),
            'margin-top':len(516)
        });
        $('#news').css({
            'width':len(280),
            'height':len(130),
            'margin-top':len(50),
            'margin-left':len(360)
        });
        $('#news dt').css({
            'padding-left':len(10),
            'line-height':len(20),
            'font-size':len(14),
        });
        $('#news dd').css({
            'line-height':len(20),
            'height':len(20),
            'font-size':len(12),
        });
        $('#affiche p').css({
            'font-size':len(14),
        });

    }
    one();
    $(window).resize(function () {
            one();
    }
    );


});