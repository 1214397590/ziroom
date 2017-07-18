$(function()
{
	
	
	setMainHeight();
	$(window).resize(function(){
		
		setMainHeight();
	});
	
	//左边的切换
	var oSlideBg = $('#slide-bg');
	var iSlideIndex = oSlideBg.attr('data-index');
	$('#slideLeftBar li').mouseenter(function(){
		oSlideBg.stop().animate({'top':$(this).index()*94},200);
		
	}).mouseleave(function(){
		oSlideBg.stop().animate({'top':iSlideIndex*94},200);
	}).click(function(){
		iSlideIndex= $(this).index();
		oSlideBg.attr('data-index',iSlideIndex);
		$('.mod-search').eq(iSlideIndex).show().siblings().hide();
	});
	
	
	
	//情侣找房的check
	$('.m3 .checkBox').click(function(){	
		
		if($(this).hasClass('checkBoxActive')){
			$(this).removeClass('checkBoxActive');	
			$('#nFlag').val('0');
		}else{
			$('.m3 .checkBox').removeClass('checkBoxActive');
			$(this).addClass('checkBoxActive');	
			if($(this).parents().hasClass('man')){
				$('#nFlag').val('1');
			}else{
				$('#nFlag').val('2');
			}
		}
		
		
	})
	
	
	//打开左边或是隐藏左边
	$('#MapInfoTab').click(function(){
		console.log($(this).find('span').hasClass('active'));
		if($(this).find('span').hasClass('active')){			
			$(this).find('span').removeClass('active');
			$('#mapBox').css({'margin-left':'575px'});
			$('#listBox').css({'left':'55px'});
		}else{
			$(this).find('span').addClass('active');
			$('#mapBox').css({'margin-left':'55px'});
			$('#listBox').css({'left':'-465px'});
		}
		
	});
	
	
	//时间下拉选择
	$('#timeList li').click(function(){
		var timerVal = $(this).attr('data-time');
		
		$('#time_txt').html(timerVal+'分钟内路程');
		$('#timeList ul').hide();
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$('.select_list .list').hover(function(){
		$(this).find('ul').show();
	},function(){
		$(this).find('ul').hide();
	});
	
	
	
	//var start = {'latitude':39.95676,'longitude':116.401394};
	//var end = {'latitude':36.63014,'longitude':114.499574};
	
	//alert(getDistance(start, end));
 
	// 百度地图API功能--计算距离

	//var pointA = new BMap.Point( Longitude , Latitude ); // 创建点坐标A
	//var pointB = new BMap.Point( Longitude , Latitude ); // 创建点坐标B
	//alert('两点的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。'); //获取两点距离,保留小数点后两位
	
});

function setMainHeight(){
	
	var h = $(window).height()-60;	
	$('#mapMain').css({'height':h});
	$('#listBoxs').css({'height':h-200});
	//$('#listBoxs ul').css({'height':h-230});
	
}


function getDistance(start,end){  
        var lat1 = (Math.PI/180)*start.latitude;  
        var lat2 = (Math.PI/180)*end.latitude;  
          
        var lon1 = (Math.PI/180)*start.longitude;  
        var lon2 = (Math.PI/180)*end.longitude;  

        var R = 6371;  
          
        //两点间距离 km，如果想要米的话，结果*1000就可以了  
        var d =  Math.acos(Math.sin(lat1)*Math.sin(lat2)+Math.cos(lat1)*Math.cos(lat2)*Math.cos(lon2-lon1))*R;  
          
        return d;  
    }  