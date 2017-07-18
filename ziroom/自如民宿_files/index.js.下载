$(function(){

   
  setBanner();
  setPartB();
  scrollShowImg();
  setImgWidth();
  

  $(window).scroll(function(){
    scrollShowImg();
     setImgWidth();
  });

  $(window).resize(function(){

    setImgWidth()
  });


  //清空搜索内容
  $('#cityIpt').val('');
  $('#start').val('');
  $('#end').val('');
   
  if (!placeholderSupport()) { // 判断浏览器是否支持 placeholder
      $("input").each(function(){
        var input = $(this);
        if(input.attr('placeholder')){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
                input.css({"color":"#bbb"})
              }
        }
      })
    };
  //吸顶条
  (function(){
    var oSearchBar = $('#searchBar');
    var oSearchTop = oSearchBar.offset().top;
    var oHeader = $('#header');
    var oDatePiker = $('#ui-datepicker-div');
    var _id='';

    oSearchBar.find('input').click(function(){
      if(!oSearchBar.hasClass('search_bar_fixed')){
        _id = $(this).attr('id');
      $("html, body").animate({"scroll-top":oSearchTop-150},300);
      }
      
    });
    $(window).scroll(function(){
    //$('#ui-datepicker-div').hide();      
      if($(document).scrollTop()>=oSearchTop-50){

        oHeader.addClass('header_fixed');
        oSearchBar.addClass('search_bar_fixed');
        $('#J_xiding_empty').hide();
      }
      else{
        oHeader.removeClass('header_fixed');
        oSearchBar.removeClass('search_bar_fixed');
        $('#J_xiding_empty').show();
      }
       var oDatePiker = $('#ui-datepicker-div');
      if(_id=='start'||_id=='end'){
            //console.log($('#'+_id).offset().top);
            oDatePiker.css('top',$('#'+_id).offset().top+30);
      }
    });
    $(window).resize(function(){
      if(!oSearchBar.hasClass('search_bar_fixed')){
        oSearchTop = oSearchBar.offset().top;
      }
      //$('#ui-datepicker-div').hide();
    });
  })();
});

function scrollShowImg(){
  var iWinHeight = $(window).height();
  var iTop = $(window).scrollTop() + iWinHeight;
  var aImg;

    $('.parts').each(function(){
        var _top = $(this).offset().top;
        if(_top < iTop){
          aImg = $(this).find('img[data-lazy]');
          aImg.each(function(){
            $(this).attr('src',$(this).attr('data-lazy')).addClass('loadImgShow');
          });
          
        }
      }); 
}


function setBanner(){

  var timer = null;
  var aLi   = $('#slides li');
  var index = 0;
  var firstSrc = aLi.eq(index).find('img').attr('data-lazy');


  resizeImage();
  $(window).resize(resizeImage);

  aLi.eq(index).addClass('active aniActive').siblings().removeClass('active aniActive');
  aLi.eq(index).find('img').attr('src',firstSrc);

  setInterval(function(){
    index++;
    index = index%aLi.size();
    aLi.eq(index).addClass('active aniActive').siblings().removeClass('active aniActive');
    aLi.eq(index).find('img').attr('src',aLi.eq(index).find('img').attr('data-lazy'));
    
  },5000);

}

function setPartB(){

  var timer = null;
  var aLi   = $('#J_slideBox li');
  var aTab = $('#J_slideTabs li');
  var index = 0;

  aLi.eq(index).addClass('active aniActive').siblings().removeClass('active aniActive');
  aTab.eq(index).addClass('on').siblings().removeClass('on');

  timer=setInterval(function(){
    index++;
    index = index%aLi.size();
    aLi.eq(index).addClass('active aniActive').siblings().removeClass('active aniActive');
    aTab.eq(index).addClass('on').siblings().removeClass('on');
  },3000);

  //移入关掉定时器
  $('#J_slideBox,#J_slideTabs').mouseover(function(){
    clearInterval(timer);
  });
  //移出开启
  $('#J_slideBox,#J_slideTabs').mouseout(function(){
    timer=setInterval(function(){
      index++;
      index = index%aLi.size();
      aLi.eq(index).addClass('active aniActive').siblings().removeClass('active aniActive');
      aTab.eq(index).addClass('on').siblings().removeClass('on');
    },3000);
  });
  //手动切换轮播图
  $('#J_slideTabs li').each(function(i){
    $(this).mouseover(function(){
      index=i;
      aLi.eq(i).addClass('active aniActive').siblings().removeClass('active aniActive');
      aTab.eq(i).addClass('on').siblings().removeClass('on');
    });
  });
}

function resizeImage () {

  var $screen = $(window);
  var sheight = $screen.height();
  var swidth  = $screen.width();
  var sImgHeight = 0;
  var sImgWidth = 0;
  var oSlides = $('#slides');
  var aLi   = $('#slides li');
  var aImg = $('#slides li img');
  var left=0;
  var imgWidth=1920;
  var imgHeight=1038;
  var iScale = 1038/1920;
  sImgHeight = swidth*iScale;
  sImgWidth = swidth;
  //console.log(sImgHeight);

  aLi.css({'height':sheight});
  oSlides.css({'height':sheight});

  if(sImgHeight < sheight){
      sImgHeight = sheight;
      sImgWidth = sImgHeight/iScale;
      left = -(sImgWidth-swidth)/2;
      aImg.css({'height':sImgHeight,'width':sImgWidth,'margin-left':left});
  }else{
    aImg.css({'height':'auto','width':'100%','margin-left':'0'});
  }

}


function setImgWidth(){
  var oImgA = $('#recommendCity img:eq(0)');
  var aBgA = $('#recommendCity .bg');
  var aTxtA = $('#recommendCity .txt');
  var w=oImgA.width();
  var h=oImgA.height();
  var fontSizeA = w*(48/400);

  aBgA.css({'width':w-20,'height':h-20});
  aTxtA.css('font-size',fontSizeA);

  var oImgB = $('#J_partB .S_partB_right1 img:eq(0)');
  var aBgB = $('#J_partB .bg');
  var aTxtB = $('#J_partB .txt');
  var aTxtB2 = $('.S_partB_sliders_txt');
  var wB=oImgB.width();
  var hB=oImgB.height();
  var fontSizeB = wB*(24/396);

  aBgB.css({'width':wB-20,'height':hB-20});
  aTxtB.css('font-size',fontSizeB);
  aTxtB2.css('font-size',fontSizeB);
  $('.S_partB_sliders_txt p').css('padding-left',fontSizeB);


  var oImgC = $('#zhenxuanList img:eq(0)');
  var aBgC = $('#zhenxuanList .bg');
  var aTxtC = $('#zhenxuanList .txt');
  var aTxtCon = $('#zhenxuanList .c');
  var wC=oImgC.width();
  var hC=oImgC.height()*2;
  var fontSizeC = wC*(24/480);
  


  if(fontSizeC<16){
    fontSizeC=16;
  }
   aBgC.css({'width':wC-20,'height':hC-20});
   aTxtC.find('h3').css('font-size',fontSizeC);  

 
}