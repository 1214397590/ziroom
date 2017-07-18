$(function(){
	/* 切换城市 */
	$('#changeCityList').mouseenter(function(){
		$(this).find('.con').css({'top':'-62px'}).stop().animate({'top':'0'},300);
	}).mouseleave(function(){
		$(this).find('.con').css({'top':'-62px'});
	})
        
        
	if($('#business').size()>0)
	{
		$('#business').tabBuss();
	}
	if($(".menu_list").size()>0)
	{
		$(".menu_list").hoverShow({hoverObj:".menu_list",hoverObjClass:"menuhover"}); 
	}
	if($('.inp-bor').size()>0)
	{
		$('.inp-bor').placeholder();
	}

	$('#goTop').click(function(){$(window).scrollTop(0);});
	$('#feedback').click(function(){var dialog = new Boxy('#feedbackBox', {title: "意见反馈"});});
	
	
	
	goTop();
})