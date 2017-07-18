$(function(){

	$("input:text,textarea").blur(function(){
		var reg=/['")><&\\\/\.]/;
		if(reg.test($(this).val())){
			alert("输入内容含非法字符，请重新输入");
			$(this).val("");
		}
	});



	$('#slideBar li').hover(function () {
		var oBox = $(this).find('.box');
		if(oBox.size()==1){
			 oBox.stop().fadeTo(0, 0).animate({
				opacity: 1,
				right: '35px'
			}, 350, function () {
				oBox.show();
			})
		}
               
    }, function () {
		var oBox = $(this).find('.box');
			oBox.stop().animate({
				opacity: 0,
				right: '100px'
			}, 250, function () {
				$(this).hide();
			})
		});
	
	
	$('#fankui').click(function(){
		new Boxy('#feedbackBox',{title:'意见反馈'});
	});
	
	
	
	

	//登录帮助
	$('#loginHelp').click(function(){
		new Boxy('#loginHelpBox',{"title":"登录帮助"});
	})



	//$(".tabsview").tab({tabNavObj:".tabs",tabContentObj:".tabscontnet",tabContent:".info",eventType:"click"});
	

    $('#goTop').click(function(){
        $(window).scrollTop(0);
    });


    $('#send_mail').click(function () {
        var mail_val = $.trim($("#mail_val").val());
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(mail_val)) {
            $("#mail_tishi").text('邮箱格式不正确');
            return false;
        }
        $("#send_mail").hide();
        $.post('/?_p=sign&_a=get_password', {email: mail_val}, function (z) {
            if (z == 'email_format_error') {
                $("#mail_tishi").text('邮箱格式不正确');
                return false;
            }
            if (z == 'no') {
                $("#mail_tishi").text('邮箱不存在，请输入您注册自如的邮箱');
                return false;
            }
            if (z == 'ok') {
                $("#mail_tishi").text('邮件已发送，10分钟内有效，请注意查收');
                self.setInterval(function () {
                    window.location = 'http://www.ziroom.com/g/login.html';
                }, 2000);
            }

        });

    });


	
	
	
	
})