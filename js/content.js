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
        $('.nav').css({
            'width':len(1004),
            'height':len(58),
        });
        $('#conPart').css({

            'width':len(1004),
            'height':len(602),
        });
        $('#fatherContent').css({
            'margin-top':len(120),
            'margin-left':len(530),
            'padding':len(5),
            'width':len(435),
            'height':len(325),
        });
        $('#content').css({
            'padding-right':len(10),
            'width':len(455),
            'height':len(325),
        });
        $('#conCopyright').css({
            'margin-top':len(570),
            'width':len(500),
            'height':len(30),
            'line-height':len(30),
        });

    }
    one();
    $(window).resize(function () {
            one()
        }
    );


});