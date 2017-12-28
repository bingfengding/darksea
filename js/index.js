$(function () {
    var top = document.documentElement ? document.documentElement : document.body;
    function setRem(number) {
        if (top.clientWidth>640){
            top.style.fontSize = '10px';
        }else {
            top.style.fontSize = (top.clientWidth / 64)+'px';
        }
        var rem =top.style.fontSize;
        return number*rem +"px";
    }

    function len(num) {
        var _clientWidth = document.documentElement.clientWidth;
        num = _clientWidth/1004*num;
        return num+'px';
    }

    function one() {
        $('#indexPart').css('height',len(546));
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
    }
    one();
    $(window).resize(function () {
            one()
    }
    );


});