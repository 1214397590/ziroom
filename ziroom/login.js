// * author : zxl
// * email  : zxl816@gmail.com 
// * date   : 2013-05-03
//    

$(function () {
   
    $('.text').focus(function () {
        $(this).addClass('inpfocus');
        $(this).parents('div').prev().find('.tips').hide();
    }).blur(function () {
        $(this).removeClass('inpfocus');
    });
   


    (function () {
        //账号验证
        var oZhanghao = $('#zhanghao'),
            oUserPassWord = $('#user_password'),
            oRedrect_url = $('#redrect_url'),
            ocaptcha = $('#captcha'),
            oZhanghao_tips = $('#user_tips'),
            oPassWord_tips = $('#userpass_tips'),
            oCaptcha_tips = $('#usercaptcha_tips'),
            oZhanghao_tips_em = $('em', oZhanghao_tips),
            oPassWord_tips_em = $('em', oPassWord_tips),

            oCaptcha_tips_em = $('em', oCaptcha_tips);

        oZhanghao.focus(function () {
            var val = $.trim($(this).val());
			
            if (val == '\u8BF7\u8F93\u5165\u7B7E\u7EA6\u624B\u673A\u53F7\u6216\u6CE8\u518C\u90AE\u7BB1') {
                $(this).val('');

            }
            oZhanghao_tips.hide();
        }).blur(function () {
            var val = $.trim($(this).val());
            if (val == '') {
                $(this).val('\u8BF7\u8F93\u5165\u7B7E\u7EA6\u624B\u673A\u53F7\u6216\u6CE8\u518C\u90AE\u7BB1');

            }
        }).keydown(function (e) {
            if (e.keyCode == 13) {
                login_check();
            }
        });
        oUserPassWord.focus(function () {

        }).keydown(function (e) {
            if (e.keyCode == 13) {
                login_check();
            }
        });
        ocaptcha.focus(function () {

        }).keydown(function (e) {
            if (e.keyCode == 13) {
                login_check();
            }
        });

        $('#login_button').click(function () {
            login_check();
        });

        function login_check() {
            var login_btn = $('#login_button');
            var loadbtn = $('#login_btn_load');

            var mphone = oZhanghao.val();
            var redrect_url = oRedrect_url.val();
            var password = oUserPassWord.val();
            var captcha = ocaptcha.val();
            var is_captcha = $('#is_captcha').val();

            var This = $(this);

            if (mphone == "" || mphone == '\u8BF7\u8F93\u5165\u7B7E\u7EA6\u624B\u673A\u53F7\u6216\u6CE8\u518C\u90AE\u7BB1') {
                oZhanghao_tips.show();
                oZhanghao_tips_em.text('\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a');
                return false;
            }

            if (password == '') {
                oPassWord_tips.show();
                oPassWord_tips_em.text('\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a');
                return false;
            }

            if (captcha == '' && is_captcha == '1') {
                oCaptcha_tips.show();
                oCaptcha_tips_em.text('\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a');
                return false;
            }


            loadbtn.show();
            login_btn.hide();

            $.post('/?_p=sign&_a=get_hide_key&' + Math.random(), {}, function (key) {

                var hide_key = key;
                var prevPage = $.query.get('prevPage');
                $.post('/?_p=sign&_a=examine', {mphone: mphone, password: password, captcha: captcha, hide_key: hide_key, prevPage: prevPage, redrect_url: redrect_url}, function (z) {
                    if (z.indexOf('e') == 0) {
                        var c = z.substr(2);

                        if (c.indexOf('captcha') == 0) {
                            click_img();

                            oCaptcha_tips.show();
                            oCaptcha_tips_em.text('\u9a8c\u8bc1\u7801\u9519\u8bef');
                            loadbtn.hide();
                            login_btn.show();
                            return false;
                        }

                        if (c.indexOf('time') == 0) {
                            click_img();

                            oCaptcha_tips.show();
                            oCaptcha_tips_em.text('\u9a8c\u8bc1\u7801\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165');
                            loadbtn.hide();
                            login_btn.show();
                            return false;
                        }

                        if ((c.indexOf('user') == 0) || (c.indexOf('pass') == 0)) {


                            oZhanghao_tips_em.text('\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u6b63\u786e');
                            oZhanghao_tips.fadeIn(100).delay(800).fadeOut(100);

                            c = parseInt(c.substr(5));

                            if (c > 2) {
                                click_img();
                                $('#is_captcha').val('1');
                                $('#captcha_tr').show();
                            }
                            loadbtn.hide();
                            login_btn.show();
                            return false;
                        }
                    }

                   //ZXL 2014-10-13
                    var curUrl=window.location.href;
                    if(curUrl.indexOf('servicecentre')>0){
                        closeboxy();
                        var cswz=$("#cs_wz").val();
                        if(cswz=="li8" || cswz=="li9" || cswz=="li10" || cswz=="li11"){
                            window.location="http://www.ziroom.com/servicecentre/?_p=servicespeed&_a=calendar#"+cswz;
                        }else{
                            //window.location.href+=window.location.href
                            var readpos=lopos();
                            //location.href+="&pos="+readpos;
                            window.location.reload();
                            //plumbingFrom($('#p_a1').val(),$('#p_a2').val(),$('#p_a3').val());
                        }
                        //window.location.reload();
                         $('#serLogin').val('1');
                        return;
                    }
                    //ZXL 2014-10-13

                    
                    /*if(z.indexOf('http') == 0 && curUrl=='http://zsw.ziroom.com/servicecentre/' ){
                        alert(111)
                        //window.location.href='http://zsw.ziroom.com/servicecentre/?_p=servicecentre&_a=calendar';
                    }*/
                    


                    if (z.indexOf('weakpassword') == 0) {
                        var mobile = z.substr(13, 11);
                        var type = z.substr(25);
                        window.location = 'http://www.ziroom.com/?_p=sign&_a=weakpassowrd&step=1&mobile=' + mobile + '&type=' + type;
                    }
                    if (z.indexOf('http') == 0) {
                        window.location = z;
                    }
                    if (z.indexOf('a') == 0) {
                       
                        if (refer_p_a == 'e') {
                            window.location = 'http://i.ziroom.com/index.php?uri=contract/pay';
                        }
                        else {
                            
                            window.location = 'http://i.ziroom.com/index.php?uri=ziroomer/index';
                        }
                    }
                    if (z == 'email_suc') {
                       
                        window.location = 'http://i.ziroom.com/index.php?uri=ziroomer/index';
                    }
                    if (z == 'zwp_success') {
                        window.location = 'http://s.ziroom.com/index.php?uri=login/';
                    }
                    if (z == 'oa_login') {
//                        window.location = 'http://family.ziroom.com/cms';
                        window.location = 'http://z.ziroom.com/';
                    }
                });
            });
        }


        //账号验证 end
    })();


})



