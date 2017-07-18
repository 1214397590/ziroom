 $(function(){
  if (!placeholderSupport()) { // 判断浏览器是否支持 placeholder
      $('[placeholder]').focus(function() {
        if($('#indexFlag').size()>0){
          if($("#start").val() != $("#start").attr("placeholder")){
            $("#start").css({"color":"#444"});
          }
        }
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }else{
          input.css({"color":"#444"});
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
          input.css({"color":"#bbb"})
        }else{
          input.css({"color":"#444"});
        }
      }).blur();
    };
    
    $(document).click(function(){
      $('.select_list').hide();
    });

    // 搜索框
    $(".ipt_box").each(function(){
        $(this).click(function(e){
            $(this).siblings(".select_list").show();
            e.stopPropagation();
        })
    });
    $(".select_list").delegate("li","click",function(){
        $(this).parents(".select_list").hide();
        $(this).addClass("current").siblings().removeClass("current");
        $(this).parents(".select_list").siblings(".ipt_box").find(".ipt").val($(this).html());
        if($(this).parents(".select_list").hasClass("city_list")){
         $(this).parents(".select_list").siblings(".ipt_box").find(".ipt").attr('data-cityCode',$(this).attr('data-cityCode'));
        }else if($(this).parents(".select_list").hasClass("person_list")){
         $(this).parents(".select_list").siblings(".ipt_box").find(".ipt").attr('data-person',$(this).attr('data-person'));
        }
        $(this).parents(".select_list").siblings(".ipt_box").find(".ipt").css({"color":"#444"});
    });
    // 日历插件
  var y,m,d;
  var startDate,endDate;
  var now = new Date();

  y = now.getFullYear();
  m = now.getMonth()+1;
  d = now.getDate();

  if($('#indexFlag').size()>0){
    if($('#start').val() != "" && $('#start').val() != $('#start').attr("placeholder")){
       new MINSU.DatePicker(y+'-'+m+'-'+d, '#start', '#end');
    }else{
       $('#start').val(y+'-'+m+'-'+d);
      new MINSU.DatePicker(y+'-'+m+'-'+d, '#start', '#end');
      $('#start').val('');
    }
  }else{
    $('#start').val(y+'-'+m+'-'+d);
    new MINSU.DatePicker(y+'-'+m+'-'+d, '#start', '#end');
  }

  
  
  setImg();

 })
 function showTap(str,id,time){
  layer.tips(str, '#'+id, {
          tips: [1, '#fff'],
          time: time
      });
 }
 function placeholderSupport() {
  return 'placeholder' in document.createElement('input');
}
function setImg(){
    // var staticUrl = $('#staticUrl').val();
    var sacle=2/3;
    var height = $('.setImg:eq(0)').parent('.img_box').width()*sacle;
    $('.setImg').each(function(){
        var _this = $(this);
        var newImg = new Image();
        newImg.onload = function(){
            var imgH = _this.height();
            if(imgH<height){
                _this.css({'margin-top':(height-imgH)/2+'px'});
            }
        }
        newImg.src = _this.attr('src');

        newImg.onerror = function(){
          // 默认图片
            // _this.attr('src',staticUrl+'/images/base1.jpg');
        }
       
        $(this).parent('.img_box').css({'height':height,'overflow':'hidden'});

       

    });

}
// 评星方法
function setStar() {
        $('.stars').each(function(){
            var iMyCalendarStar=$(this).attr('data-val').split('.');
            for(var i=0; i<iMyCalendarStar[0]; i++){
                $(this).find('li').eq(i).addClass('active');
            }

            if(iMyCalendarStar[1]>0){
                $(this).find('li').eq(iMyCalendarStar[0]).addClass('half');
            }
        });
}

function showShadedowTips(str,time){
  layer.msg(str, {
  time: time //20s后自动关闭
  });
}
// 提示信息
function showConfirm(str,btn){
  //询问框
  layer.confirm(str, {
    title:"提示",
    btn: btn //按钮
  });
}
