$(function () {
    //rem设置
    var top = document.documentElement ? document.documentElement : document.body;
    function setRem(number) {
        if (top.clientWidth>640){
            top.style.fontSize = '10px';
        }else {
            top.style.fontSize = (top.clientWidth / 64)+'px';
        }
        var rem =parseFloat(top.style.fontSize);
        return number*rem +"px";
    }
    setRem();
    function len(num) {
        var _clientWidth = document.documentElement.clientWidth;
        num = _clientWidth/1004*num;
        return num+'px';
    }

    //页面设置
    //联系方式
    tela = function tela(val) {
        if($("#tel")[0]){

        }else {
        var newUrl = "content.html?address";
        history.pushState({},"", newUrl);
        $("#granddadContent").html('<div id="fatherContent" style="overflow:hidden"><div id="content"><div id="address"><ul><li class="tel"><a target="_blank" href="tel://13656643571">13656643571</a></li><li class="qq"><a target="_blank" href="tencent://message/?uin=122734123&Site=www.mydarksea.com/content.html&Menu=yes">122734123</a></li><li class="email"><a target="_blank" href="mailto:bingfengding@163.com">bingfengding@163.com</a></li><li class="address"><a href="javascript:;">广州白云鹤亭中路</a></li></ul></div></div></div>');
        one();
        }
    };
    //个人简介
    rooma = function rooma(val) {
        if($("#room")[0]){

        }else{
            var newUrl = "content.html?room";
            history.pushState({}, "", newUrl);
            $("#granddadContent").html('<div id="fatherContent" style="overflow:hidden"><div id="content"><div id="room"><ul class="clearfix"><li>姓名:丁海洋</li><li>年龄:29</li><li>性别:男</li><li>籍贯:重庆</li><li>毕业院校:浙江理工大学</li><li>专业:经济学</li><li>爱好:编程,动漫,食物</li></ul><ul class="skill"><li>个人技能</li><li><strong>HTML5</strong><span><i class="skilled">熟练</i></span></li><li><strong>JavaScript</strong><span><i class="master">精通</i></span></li><li><strong>Web前端</strong><span><i class="master">精通</i></span></li><li><strong>UI</strong><span><i class="commonly">一般</i></span></li><li><strong>MySQL</strong><span><i class="good">良好</i></span></li><li><strong>PHP</strong><span><i class="skilled">熟练</i></span></li><li><strong>Flash</strong><span><i class="commonly">一般</i></span></li><li><strong>Illustrator</strong><span><i class="good">良好</i></span></li><li><strong>PhotoShop</strong><span><i class="skilled">熟练</i></span></li><li><strong>英语</strong><span><i class="good">良好</i></span></li></ul></div></div></div>');
            one();
        }

    };
    //履历
        lifta = function lifta(val) {
            if($("#lift")[0]){

            }else{
                var newUrl = "content.html?lift";
                history.pushState({}, "", newUrl);
                $("#granddadContent").html('<div id="fatherContent" style="overflow:hidden"><div id="content"><div id="lift"><ul><li><p> <span>2016.11-至今</span><span style="">中通云仓广州分公司</span></p><p>职位:前端+IT</p><p>工作描述: 集搭建主页，维护管理软件，安装摄像头，监控，解决其他人IT方面问题为一体的混合工作。中西合璧，软硬兼备。</p></li><li><p><span>2015.8-2016.10</span><span>杭州瑞标网络科技有限公司</span></p><p>职位:Web前端开发</p><p>工作内容: 主要负责公司web网页搭建的静态页面处理，以及之后的优化与维护。</p></li><li><p><span>2011.3-2015.3</span><span>杭州网易旗下网之易</span></p><p>职位: 暴雪合作部sonda组</p><p>工作内容: 属于暴雪合作部，主要对网易代理的暴雪游戏监控，管理。对玩家数据进行检测修复等</p></li></ul></div></div></div>');
                one();

            }
        };

    //留言板
    var date = new Date(),
                newDateW ,
                newHoursW ,
                newMinutesW,
                newMillisecondsW,
                newMonthW;
    messagea = function messagea(val) {
        //console.log($("#massage"));
        if ($("#massage")[0]) {

        } else {


        var newUrl = "content.html?message";
        history.pushState({}, "", newUrl);

        $("#granddadContent").html('<div id="fatherContent" style="overflow:hidden"><div id="content"><div id="massage"><form id="massageForm" action="" ><div class="userM"><span>联系人: </span><input type="text" name="user" class="user"></div><textarea name="massageContent" class="massageContent"></textarea><div class="footerForm clearfix"><input type="button" value="提交" id="massageSub"><input type="button" value="取消" id="massageHide" ></div></form></div></div></div><input type="button" value="留言" class="massageIpt">');

        //console.log("写入HTML信息");

        $('.massageIpt').click(function () {
            $("#massage ul").hide();
            if ($('#massageForm').is(":hidden")) {
                $('#massageForm').show();
            } else {
                $('#massageForm').hide();
            }
            $('.massageIpt').hide();
        });
        $('#massageSub').click(function () {
            $.ajax({
                type: "POST",
                url: './php/massage.php',
                data: {
                    user: $("form .user").val(),
                    content: $("form .massageContent").val(),
                },
                success: function (response, status, xhr) {
                    $("#massageForm").hide();
                    $('.massageIpt').show();
                    $("#massage ul").show();
                    if (date.getDate() < 10) {
                        newDateW = "0" + date.getDate();
                    } else {
                        newDateW = date.getDate();
                    }
                    if (date.getMonth() + 1 < 10) {
                        newMonthW = "0" + (date.getMonth() + 1);
                    } else {
                        newMonthW = date.getMonth() + 1;
                    }
                    if (date.getHours() < 10) {
                        newHoursW = "0" + date.getHours();
                    } else {
                        newHoursW = date.getHours();
                    }
                    if (date.getMinutes() < 10) {
                        newMinutesW = "0" + date.getMinutes();
                    } else {
                        newMinutesW = date.getMinutes();
                    }
                    if (date.getSeconds() < 10) {
                        newMillisecondsW = "0" + date.getSeconds();
                    } else {
                        newMillisecondsW = date.getSeconds();
                    }
                    if ($("form .user").val() == "") {
                        $("form .user").val("匿名");
                    }
                    if ($("form .massageContent").val() == "") {
                        $("form .massageContent").val("此人不愿意留下他的足迹");
                    }
                    $("#massage ul").prepend("<li><p>联系人:" + $("form .user").val() + "</p><p>" + $("form .massageContent").val() + "</p><p>" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + newDateW + " " + newHoursW + ":" + newMinutesW + ":" + newMillisecondsW + "</p></li>");

                    $("form .user").val("");
                    $("form .massageContent").val("");
                }
            })
        });
        $('#massageHide').click(function () {
            $('#massageForm').hide();
            $('.massageIpt').show();
            $("#massage ul").show();
        });
        $.ajax({
            url: "./php/showmassage.php",
            type: "POST",
            success: function (response, status, xhr) {
                var html = "<ul>";
                var response_len = response.indexOf('[');
                response = response.substr(response_len,response.length);
                var json = JSON.parse(response);
                $.each(json, function (index, value) {
                    html += "<li><p>联系人:" + json[index]['user'] + "</p><p>" + json[index]['content'] + "</p><p>" + json[index]['date'] + "</p></li>"

                });
                html += "</ul>";
                $("#massage").append(html);

            }

        });
        one();
    }
    };
        if(location.search=="?address"){
            tela();
    } else if(location.search=="?room"){
            rooma();
        }else if(location.search=="?message"){
            messagea();
    }else if(location.search=="?lift"){
            lifta();
        }else if(location.search=="?resource"){
            resourcea();
        }else if(location.search=="?sample"){
            samplea();
        }else if(location.search=="?treasure"){
            treasurea();
        }else if(location.search=="?home"){
            homea();
        }
    //CSS设置
    function one() {
           // console.log("CSS开始设置");
        $('embed.nav').css({
            'width':len(1004),
            'height':len(71),
            'margin-top':len(-8)
        });
        $('#conPart').css({
            'width':len(1004),
            'height':len(602),
            'margin-top':len(-11)
        });
        $('#granddadContent').css({
            'margin-top':len(120),
            'margin-left':len(530),
            'padding':len(5),
            'width':len(435),
            'height':len(325),
        });
        $('#fatherContent').css({
            'width':len(435),
            'height':len(325),
        });
        $('#content').css({
            'padding-right':len(10),
            'width':len(455),
            'height':len(325),
            'fontSize':len(16)
        });
        $('#conCopyright').css({
            'margin-top':len(570),
            'width':len(500),
            'height':len(30),
            'line-height':len(30),
        });
        $('.massageIpt').css({
            'top' :len(-30),
            'left': len(360),
            'width':len(40),
            'height':len(25),
            'font-size':len(14)
        });
        $('#massageForm').css({
            'padding-left':len(10),
            'font-size':len(14)
        });
        $('#massageForm .userM').css({
            'padding-bottom':len(10),
        });
        $('#massage li p').css({
            'padding-bottom':len(10),
            'font-size':len(10)
        });
        $("#massageForm .userM input").css({
            'width':len(200),
            'height' :len(25),
        });
        $("#massageForm textarea").css({
            'width':len(400),
            'height' :len(250),
        });
        $("#massageForm .footerForm").css({
            'padding-top':len(10),
            'margin-right':len(20),
        });
        $("#massageForm .footerForm input").css({
            'width':len(40),
            'height':len(25),
        });
        $("#massageSub").css({
            'margin-left':len(250),
            'margin-right':len(10),
        });
        $("#address").css({
            'padding':len(10),
        });
        $("#address li").css({
            'width':len(400),
            'line-height':len(40),
            'padding-left':len(34),
            'fontSize':len(18)
        });
        $("#address li a").css({
            'fontSize':len(18)
        });
        $("#address li.tel").css({
            'background-size':len(30)
        });
        $("#address li.qq").css({
            'background-size':len(30)
        });
        $("#address li.email").css({
            'background-size':len(30)
        });
        $("#address li.address").css({
            'background-size':len(30)
        });

        //room css
        $("#room li").css({
            'height':len(30),
            'line-height':len(30),
        });
        $("#room ul:last-of-type strong").css({
            'width':len(80),
            'line-height':len(30),
        });
        $("#room ul:last-of-type span").css({
            'width':len(320),
            'height':len(12),
            'margin-top':len(9),
            'border-radius':len(6)
        });
        $("#room ul:last-of-type span i").css({
            'padding-right':len(10),
            'height':len(12),
            'line-height':len(12),
            'border-radius':len(6),
            'font-size':len(8)
        });

        $("#room ul:first-of-type li").css({
            'padding':len(3),
            'margin-bottom':len(10),
        });
        $("#room .skill li").css({
            'padding-left':len(10),
            'margin-bottom':len(10),
        });
        $('.commonly').css({
            'width':len(80)
        });
        $('.good').css({
            'width':len(160)
        });
        $('.skilled').css({
            'width':len(240)
        });
        $('.master').css({
            'width':len(320)
        });

        //lift CSS
        $("#lift").css({
            'padding-right':len(20),
            'padding-left':len(10),
            'font-size':len(12),

        });
        $("#lift p").css({
            'padding-bottom':len(10),
        });
        $("#lift p span").css({
            'font-size':len(14),
        });
        $("#lift p span:first-of-type").css({
            'width':len(180),
        });
        //console.log('one方法在执行');
    }
    one();
    $(window).resize(function () {
            one();
        //console.log("窗口改变CSS开始改变");
        }
    );

});
