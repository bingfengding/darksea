$(function () {
    var top = document.documentElement ? document.documentElement : document.body;
    function setRem(number) {
        if (top.clientWidth>640){
            top.style.fontSize = '10px';
        }else {
            top.style.fontSize = (top.clientWidth / 64)+'px';
        }

        return number*top.clientWidth/2000 +"px";
    }
    setRem();

    $('#sample li').hover(function () {
        $(this).css({
            "transition":"0.5s",
            "transform":"scale(1.5)"
        });
        $(this).children("a").children("div").css({
            "transition":"0.5s",
            "transform":"translate(0,-60%)"
        })

    },function () {
        $(this).css({
            "transition":"0.5s",
            "transform":"scale(1,1)",
        });
        $(this).children("a").children("div").css({
            "transition":"0.5s",
            "transform":"translate(0,0)"
        })
    });

    function one() {
        $('#sample').css({
            "width":setRem(1400),
            "height":setRem(800),
            "margin-top":setRem(120),
            "margin-left":setRem(400),
            "padding-left":setRem(10),
            "padding-top":setRem(5),
        });
        $('#sample li').css({
            "width":setRem(160),
            "height":setRem(230),
            "margin-right":setRem(92),
            "margin-bottom":setRem(160),
            "background":"url('./images/4.jpg') no-repeat",
            "background-size":"100% auto",

    });

    }
    one();
    $(window).resize(function () {
        one();
    })


});