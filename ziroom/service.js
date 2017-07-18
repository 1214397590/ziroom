

$(function(){
	
	/* 评分效果 */
	
	function star(index){
		
		var _index=index;

		$('#score-ul li').each(function(i){			
			if(i<=_index){
				$(this).addClass('star-on');
			}else{
				$(this).removeClass('star-on');
			};
		});
		
	};
	
	$('#score-ul li').click(function (){
		var _index=$(this).index();
		star(_index);
		$('input[name=starVal]').val(_index+1);/* 获取分数的值 */
	});
	
	/* 左侧边栏一级菜单 */
	
	$('.plumbing_firstMenu').click(function(){
		
		if($(this).parent().find('.second').css('display')=='none'){
			$('.plumbing_firstMenu span').css('background','url(../images/service/triangle-1.png) no-repeat');
			$(this).children('span').css('background','url(../images/service/triangle-2.png) no-repeat');
			$(this).parent().find('.second').show();
			$(this).parent().siblings().find('.second').hide();
		}else{
			$(this).children('span').css('background','url(../images/service/triangle-1.png) no-repeat');
			$(this).parent().find('.second').hide();
		};
	});
	
	/* 左侧边栏二级菜单 */
	
	$('.plumbing_secondMenu').click(function(){
		$('.plumbing_secondMenu').removeClass('plumbing_secondMenu_click');
		$(this).addClass('plumbing_secondMenu_click');
	});
	
	/* 评分弹窗 */
	
	$('.score-a').live('click',function (){
		new Boxy('#score-pop-up',{title: "服务评价"});
	});
	
	/* 评分获取 */
	
	$('.score-b').click(function (){
		
	});
	
	/* 时间弹窗 */
	
	$('.revise-time').click(function (e){
            e.stopPropagation();
            new Boxy('#time-pop-up',{title: "修改上门时间"});
	});
        $(".pay").click(function(e){
            e.stopPropagation();
            var vasbId = $("#vasbId").text();
            $.ajax({
                type:'get',
                url:"?_p=servicecentre&_a=payment",
                data:'vasbId='+vasbId,
                success:function(msg){
                        window.location.href=msg;
                    }
            });
        });
        $(".prompt").click(function(e){
            e.stopPropagation();
            alert("请等待保洁完成后支付");
        });
	/* 保洁增值服务 */
	
	$('.vas ul li').live('click',function (){
		if($(this).hasClass('show-border')){
			$(this).removeClass('show-border');
			$(this).find('._icon-1').removeClass('show-icon');
			$('._pay').find('span').text(0);

                        $(this).find('p').eq(2).removeAttr('id','vasbId'); // p标签增加减少顺序改变则不能执行
                        $(this).find('p').eq(2).html(''); // p标签增加减少顺序改变则不能执行
		}else{
			$('.vas ul li').removeClass('show-border');
			$('.vas ul li').find('._icon-1').removeClass('show-icon');
			$(this).addClass('show-border');
			$(this).find('._icon-1').addClass('show-icon');
			$('._pay').find('span').text($(this).find('span').text());

                        $('.vas ul li').find('p').eq(2).removeAttr('id','vasbId'); // p标签增加减少顺序改变则不能执行
                        $('.vas ul li').find('p').eq(5).removeAttr('id','vasbId'); // p标签增加减少顺序改变则不能执行
                        $(this).find('p').eq(2).attr('id','vasbId'); // p标签增加减少顺序改变则不能执行
                        $('.vas ul li').find('p').eq(2).html(''); // p标签增加减少顺序改变则不能执行
                        $('.vas ul li').find('p').eq(5).html(''); // p标签增加减少顺序改变则不能执行
                        $(this).find('p').eq(2).text($(this).find('div').text()); // p标签增加减少顺序改变则不能执行
		};
		
		if($('._pay').find('span').text()==0){
			$('._pay-value').attr('value','0');
		}else{
			$('._pay-value').attr('value',$('.show-border').find('span').text());
		};
	});
		
	/* 读取中 */
	
	$('.submit').click(function (){
		$('#loading').removeClass('hide');
	});
	
	/* 编辑地址保存 */
	
	$('.pop-up-btn').live('click',function (){
		//window.location.reload();
                $("#b_name").val($("#lxname").val());
                $("#b_tel").val($("#lxtel").val());
                $('#contactName_0').text($('.pop-up-content input').eq(0).val());
                $('#contactTel_0').text($('.pop-up-content input').eq(1).val());
                $('#address_0').text($('.pop-up-content input').eq(2).val());
                $('.close').trigger('click');
	});
	
	/* 编辑地址切换 */

        function gd(){
        
        var house_code = $('#house_code').text();
        $.ajax({
           type:'POST',
           url:'/servicecentre/?_p=servicecentre&_a=gd',
           data:'house_code='+house_code,
           dataType:'json',
           success: function(msg){
                   $("#maxdate").val(msg.maxdate);
                   $('#d11').val(msg.maxdate);
            }
        });
    }

	$('._change-adress li').live('click',function(){
            if($(this).hasClass('spe_li')){
                $('._change-adress li').removeClass('li-click');
		$('.plumbing_adress_border').removeClass('plumbing_adress_border_2');
		$(this).addClass('li-click');
		$(this).children('.plumbing_adress_border').addClass('plumbing_adress_border_2');

                $("input[name='b_name']").attr('value',$(this).find('.contactName').text());
		$("input[name='b_tel']").attr('value',$(this).find('.contactTel').text());
		$("input[name='b_adress']").attr('value',$(this).find('.address').text());
                $("input[name='b_contract']").attr('value',$(this).find('#contract').text());

                var hireContractCode = $("#contract").text();
                var loreClassify = $("#loreClassify").text();
                $.ajax({
                   type:'POST',
                   url:'/servicecentre/?_p=servicecentre&_a=rentaldata',
                   data:'hireContractCode='+hireContractCode+'&loreClassify='+loreClassify,
                   dataType:'json',
                   success: function(msg){
                       if(msg.status == "failure"){
                           var str = '管家&nbsp;&nbsp;&nbsp;预计联系您'
                       }else{
                           var str = '管家&nbsp;&nbsp;'+msg.message.dealorname+'&nbsp;&nbsp;预计联系您'
                       }
                       $('.onSiteService_woker').html(str);
                    }
                });

            }else if($(this).hasClass('spe_li2')){
                $('._change-adress li').removeClass('li-click');
		$('.plumbing_adress_border').removeClass('plumbing_adress_border_2');
		$(this).addClass('li-click');
		$(this).children('.plumbing_adress_border').addClass('plumbing_adress_border_2');

                $("input[name='b_name']").attr('value',$(this).find('.contactName').text());
		$("input[name='b_tel']").attr('value',$(this).find('.contactTel').text());
		$("input[name='b_adress']").attr('value',$(this).find('.address').text());
                $("input[name='b_contract']").attr('value',$(this).find('#contract').text());
                $("input[name='house_code']").attr('value',$(this).find('#house_code').text());
  
                
                //gd();
                

            }else{
                
                $('._change-adress li').removeClass('li-click');
		$('.plumbing_adress_border').removeClass('plumbing_adress_border_2');
		$(this).addClass('li-click');
		$(this).children('.plumbing_adress_border').addClass('plumbing_adress_border_2');
			
		$("input[name='b_name']").attr('value',$(this).find('.contactName').text());
		$("input[name='b_tel']").attr('value',$(this).find('.contactTel').text());
		$("input[name='b_adress']").attr('value',$(this).find('.address').text());
                $("input[name='b_contract']").attr('value',$(this).find('#contract').text());
            };
		
	});
	
	/* 增值服务帮助 */

	$('._icon-2').live('click',function (){
		return false;
	});

        /* 新加模块 */

	$('.new-1 ul li').mouseover(function (){
		$('.new-1 ul li').removeClass('orange-border');
		$('.new-1 ul li').find('.set-font').removeClass('orange-font');
		$('.new-1 ul li').find('span').removeClass('orange-img-bg');
		$('.new-1-content').removeClass('box-show');

		$(this).addClass('orange-border');
		$(this).find('.set-font').addClass('orange-font');
		$(this).find('span').addClass('orange-img-bg');
		$('.new-1-content').eq($(this).index()).addClass('box-show');
	});

     


	/* 默认选中第一项 */

	
        if(document.location.href.indexOf("opentree=5")!=-1){
            $('.plumbing_firstMenu').eq(5).trigger('click');
            $('.plumbing_secondMenu').eq(5).trigger('click');
        }else{
            $('.plumbing_firstMenu').eq(0).trigger('click');
            $('.plumbing_secondMenu').eq(0).trigger('click');
        }
         /* 首页跳转 */

      if(window.location.hash=='#xxx'){
            $('.plumbing_firstMenu').eq(10).trigger('click');
            $('.plumbing_secondMenu').eq(20).trigger('click');
            document.getElementById("to-li1").click();
      };

//    if( $(".top .area .fr").children("li").eq(1).children("a").text()=="退出"){
//        $(".top .area .fr").children("li").eq(1).children("a").attr("target","_self");
//        $(".top .area .fr").children("li").eq(1).children("a").attr("href","javascript:;");
//    };

     $(".top .area .fr").children("li").eq(1).children("a").click(function (){
         setTimeout(function(){
            window.location.reload();
        },1100);
     });

    /* 进度返回按钮 */
    $('.schedule-2_title p span').live('click',function (){
        window.history.go(-2);
    });

    /* 二维码 */
    $('.ren_service').mouseover(function (){
            $('.qr_code_wrap').stop().slideDown();
    });
    $('.ren_service').mouseout(function (){
            $('.qr_code_wrap').stop().slideUp();
    });
    $('.qr_code_wrap').mouseover(function (){
            $('.qr_code_wrap').stop().slideDown();
    });
    $('.qr_code_wrap').mouseout(function (){
            $('.qr_code_wrap').stop().slideUp();
    });

    //alert($("#plumbing_leftul>li").length);
    //alert($("#plumbing_left ul li ul li").length);

});
function GetRequest(url) {
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}
function lopos(){
    var theurl=window.location.href;
    posArr=GetRequest(theurl+"&pos="+$('#p_a3').val());
    return posArr["pos"];
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


//15811550664

/* 编辑地址弹窗 */
function LoginBox(id){
     $("#cs_wz").val(id);
     new Boxy("#commonLogin",{"title":"用户登录"});
     $('#commonLogin').css({"padding":"10px 20px"});
};
function editAdress(){
	new Boxy('#edit-pop-up',{title: "修改联系地址"});
        $('.pop-up-content').find("#lxname").val($('#contactName_0').text());
        $('.pop-up-content').find("#lxtel").val($('#contactTel_0').text());
        $('.pop-up-content input').eq(2).val($('#address_0').text());
};

