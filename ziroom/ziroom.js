function i$(i){ return document.getElementById(i); }
function i$s(i,l){ if(!i$(i)) return []; return i$(i).getElementsByTagName(l); }
var itrim = function(str){ return str.replace(/^\s+/, '').replace(/\s+$/, '');} 
var iv$ = function(id){ return itrim(i$(id).value) ; }
var addEvent = function(obj,eventType,func){if(obj.attachEvent){obj.attachEvent("on" + eventType,func);}else{obj.addEventListener(eventType,func,false)}} ;
var delEvent = function(obj,eventType,func){if(obj.detachEvent){obj.detachEvent("on" + eventType,func)}else{obj.removeEventListener(eventType,func,false)}} ;
var setCookie = function(name,value,expires,path,domain,secure){if(!path) path='/';document.cookie=name+"="+escape(value)+((expires)?";expires="+expires.toUTCString():"")+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+((secure)?";secure":"");}
var getCookie = function(sName){var aCookie = document.cookie.split("; ");for (var i=0; i < aCookie.length; i++){var aCrumb = aCookie[i].split("="); if (sName == aCrumb[0] && aCrumb[1])  return aCrumb[1];} return '';} ;
//var getOffset = function (el, isLeft) {  var retValue = 0;if(!el.parentNode) return 100000001 ;   while (el != null) {     retValue += el["offset" + (isLeft ? "Left" : "Top")];el = el.offsetParent;   }  return retValue;};
var getOffset=function(elem,isLeft){
	return elem.offsetParent ? elem.offsetTop + getOffset(elem.offsetParent) : elem.offsetTop;
}
var _body = document.compatMode == 'BackCompat' ? document.body : document.documentElement ;
var _IE6 = /MSIE 6.0/.test(navigator.appVersion) ;
function ajaxCreate(){
	var ajax = false ;
	if(window.XMLHttpRequest){ ajax = new XMLHttpRequest() ;}
	else if (window.ActiveXObject) {try {ajax = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {try {ajax = new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}}}
	return ajax ;
}

function ajaxPost(url,params,callback,sync,ajax){
	if(!ajax) ajax = ajaxCreate() ;
	if(!ajax) return false;
	ajax.open("POST", url, !sync); 
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
	ajax.setRequestHeader("If-Modified-Since","0"); 
	ajax.onreadystatechange = function(){ if (ajax.readyState == 4 && ajax.status == 200) {if(callback) callback(ajax.responseText); } } ;
	if(!params) params = '' ;
	ajax.send(params);
}

function zzLength(t){
	//return parseInt(t.replace(/[^\x00-\xff]/g,'xx').length / 2,10) ;
	return t.length ;
}

function doPageFunc(){
	doPageFunc.end = true ;
	if(!addPageFunc.fs) return ;
	for(var i=0;i<addPageFunc.fs.length;i++){
		addPageFunc.fs[i]() ;
	}
}

function addPageFunc(f){
	if(!addPageFunc.fs) addPageFunc.fs = [] ;
	if(doPageFunc.end){
		f() ;
		return ;
	}
	
	addPageFunc.fs.push(f) ;
}

function showWinPic(src,oa){
	if(showWinPic.xing) return false ;
	if(typeof PackDialog == 'undefined' || !i$('i_win_pic_dialog')){
		if(src == '') return ;
		window.open(src) ;
		return ;
	}
	showWinPic.xing = true ;
	if(!showWinPic.d){
		showWinPic.d = new PackDialog('i_win_pic_dialog') ;
		showWinPic.d.funs.closeEnd = function(){
			showWinPic.xing = false ;
		}
	}
	
	if(!oa) oa = {} ;
	var iwidth = 480 ;
	var iheight = 360 ;
	
	if(oa.iwidth) iwidth = oa.iwidth ;
	if(oa.iheight) iheight = oa.iheight ;
	
	var im = document.getElementById("hxt");
	if(im) {
		iwidth = im.width ;
		iheight = im.height ;
	}
	

	if(src == ''){
		//showWinPic.d.show('<img src="image_no.gif"/*tpa=http://www.ziroom.com/static/images/image_no.gif*/ />',iwidth,iheight) ;
		return false ;
	}
	
	if(!oa.loading) oa.loading = i$('i_win_loading') ;
	showWinPic.d.show(oa.loading,iwidth,iheight) ;
	
	var img = new Image() ;
	img.onload = function(){
		if(!showWinPic.xing) return ;
		showWinPic.xing = false ;
		if(!oa.showimg) oa.showimg = img ;
		if(oa.fixshowimgfuc) oa.fixshowimgfuc(img) ;
		showWinPic.d.show(oa.showimg,iwidth) ;
	};
	
	img.onerror = function(){
		if(!oa.showerrorimg) oa.showerrorimg = '<img src="image_no.gif"/*tpa=http://www.ziroom.com/static/images/image_no.gif*/ />' ;
		if(oa.fixshowerrorimg) oa.fixshowerrorimg() ;
		showWinPic.d.show(oa.showerrorimg,iwidth) ;
	}
	
	img.src = src ;
}

function showCsPic(src,id){
	if(src == ''){
		return false ;
	}
	src = src.replace("/amsupload", "ams");
	var domm = document.createElement('div')  ;
	var p = i$('i_cs_'+id) ;
	domm.appendChild(p) ;
	domm.appendChild(i$('i_win_loading')) ;
	var arg = {} ;
	arg.iwidth = 720 ;
	arg.loading = domm ;
	arg.fixshowimgfuc = function(i){
		//i.style.width = '480px' ;
		i$('i_win_pic_rc').appendChild(i$('i_win_loading')) ;
		var idomm = document.createElement('div')  ;
		idomm.style.cssText = 'float:left;width:480px;text-align:center;' ;
		idomm.appendChild(i) ;
		domm.appendChild(idomm) ;
	}
	
	if(!showCsPic.errorImg){
		showCsPic.errorImg = document.createElement('img') ;
		showCsPic.errorImg.src = 'image_no.gif'/*tpa=http://www.ziroom.com/static/images/image_no.gif*/ ;
	}
	
	arg.fixshowerrorimg = function(i){
		i$('i_win_pic_rc').appendChild(i$('i_win_loading')) ;
		domm.appendChild(showCsPic.errorImg) ;
	}
	
	arg.showerrorimg = domm ;
	arg.showimg = domm ;
	showWinPic(src,arg) ;
}

var ZiRoomCompareIds = [];
var ZiRoomCompareIds2 = [];//浏览历史对比
var ZiRoomCompareMax = 4 ;
var ZiRoomCompareCKey = '_ziroom_comp' ;
//var ZiRoomCompareTpl = '<span>{fee}元<a href="javascript:;" onclick="delZiRoomCompare(\'{rid}\');return false;">[删除]</a></span><a class="green" href="{url}" target="_blank" title="{sname}">{sname}</a>' ;
var ZiRoomCompareTpl = '<span class="w120 mr10"><a class="green" href="{url}" target="_blank" title="{sname}">{sname}</a></span><span class="w50 mr10">{fee}/月</span><span class="w40"><a href="javascript:;" onclick="delZiRoomCompare(\'{rid}\');return false;">[删除]</a></span>' ;
//<li class="clearfix"></li>
function initZiRoomCompare(){
	var nc = getCookie(ZiRoomCompareCKey) ;
	if(nc != '') nc = nc.split('A') ;
	else nc = [] ;
	ZiRoomCompareIds = nc ;
	if(ZiRoomCompareIds.length > 0 ){
		ajaxPost('/?_p=ajax&_a=zirooms','rids='+ZiRoomCompareIds.join(','),function(t){
			eval('var js='+t+';') ;
			for(var i=0;i<js.length;i++){
				var idata = js[i] ;
				//
				//var url = "/?_p=view&_a=view&room_id="+idata.rid;
				var url = "/z/vr/"+idata.rid+".html";
				//idata.url = BaseUrlZiRoom.replace('|X|',idata.rid) ;
				idata.url = url;
				var tpl = ZiRoomCompareTpl ;
				for(var k in idata){
					tpl = tpl.replace(new RegExp('{'+k+'}','gm'),idata[k]) ;
				}
				var domli = document.createElement('li') ;
				domli.id = 'i_ziroom_comp_i_' + idata.rid ;
				//domli.className = 'clearfix';
				domli.innerHTML = tpl ;
				i$('i_ziroom_comp_in').appendChild(domli) ;
			}
			initZiRoomCompare.initd = true ;
			if(getCookie(ZiRoomCompareCKey+'_o') == '1') openZiRoomCompare() ;
		},false) ;
	}else{
		initZiRoomCompare.initd = true ;
		if(getCookie(ZiRoomCompareCKey+'_o') == '1') openZiRoomCompare() ;
	}
	i$('i_ziroom_comp_num').innerHTML = ZiRoomCompareMax - ZiRoomCompareIds.length ;
	//初始化根据条件隐藏或显示
	if (ZiRoomCompareIds.length>1 && ZiRoomCompareIds.length<5) { $(".startcombutt").attr('disabled',false);}
	else { $(".startcombutt").attr('disabled',true);}
}
function addZiRoomCompare(rid,fee,sname){
	if(!initZiRoomCompare.initd) initZiRoomCompare() ;
	if(ZiRoomCompareIds.length >= ZiRoomCompareMax){
		openZiRoomCompare() ;
		return false ;
	}
	for(var i=0;i<ZiRoomCompareIds.length;i++){
		if(ZiRoomCompareIds[i] != rid) continue ;
		openZiRoomCompare() ;
		return ;
	}

	ZiRoomCompareIds.push(rid) ;
	setCookie(ZiRoomCompareCKey,ZiRoomCompareIds.join('A')) ;
	
	var tpl = ZiRoomCompareTpl ;
	//var url = BaseUrlZiRoom.replace('|X|',rid) ;
	//var url = "/?_p=view&_a=view&room_id="+rid;
	var url = "/z/vr/"+rid+".html";
	var idata = {fee:fee,sname:sname,url:url,rid:rid} ;
	for(var k in idata){
		tpl = tpl.replace(new RegExp('{'+k+'}','gm'),idata[k]) ;
	}
	var domli = document.createElement('li') ;
	domli.id = 'i_ziroom_comp_i_' + rid ;
	domli.className = 'clearfix';
	domli.innerHTML = tpl ;
	
	i$('i_ziroom_comp_in').appendChild(domli) ;
	i$('i_ziroom_comp_num').innerHTML = ZiRoomCompareMax - ZiRoomCompareIds.length ;
	openZiRoomCompare() ;
	if (ZiRoomCompareIds.length>1 && ZiRoomCompareIds.length<5) { $(".startcombutt").attr('disabled',false);}
	else { $(".startcombutt").attr('disabled',true);}
}

function delZiRoomCompare(rid){
	if(!initZiRoomCompare.initd) initZiRoomCompare() ;
	if(!ZiRoomCompareIds) return false ;
	var ids = [] ;
	for(var i=0;i<ZiRoomCompareIds.length;i++){
		if(ZiRoomCompareIds[i] == rid) continue ;
		ids.push(ZiRoomCompareIds[i]) ;
	}
	ZiRoomCompareIds = ids ;
	i$('i_ziroom_comp_in').removeChild(i$('i_ziroom_comp_i_'+rid)) ;
	setCookie(ZiRoomCompareCKey,ZiRoomCompareIds.join('A')) ;
	i$('i_ziroom_comp_num').innerHTML = ZiRoomCompareMax - ZiRoomCompareIds.length ;
}

function clearZiRoomCompare(){
	ZiRoomCompareIds = [] ;
	setCookie(ZiRoomCompareCKey,ZiRoomCompareIds.join('A')) ;
	i$('i_ziroom_comp_in').innerHTML = '' ;
	i$('i_ziroom_comp_num').innerHTML = ZiRoomCompareMax ;
	
	$('.vam input[type="checkbox"]').removeAttr("checked");
	
}

function closeZiRoomCompare(){
	i$('i_ziroom_comp').style.display = 'none' ;
	setCookie(ZiRoomCompareCKey+'_o','') ;
}
//a 标签
function startZiRoomCompare(obj){
	if(ZiRoomCompareIds.length < 1) return false ;
	if(ZiRoomCompareIds.length == 1){
		alert('请至少选择两个房间') ;
		return false ;
	}
	//var url = ZiRoomCompareUrl + '&ids=' + ZiRoomCompareIds.join('A') ;
	var url = ZiRoomCompareUrl + ZiRoomCompareIds.join('A')+".html";
	obj.target = '_blank' ;
	obj.href = url ;
	return true ;
}
//button
function startZiRoomCompare_button(obj){
	if(ZiRoomCompareIds.length < 1) return false ;
	if(ZiRoomCompareIds.length == 1){
		//alert('请至少选择两个房间') ;
		$(".startcombutt").attr('disabled',true);//按钮禁用
		return false ;
	}
	
	var url = ZiRoomCompareUrl + ZiRoomCompareIds.join('A')+".html";
	window.open(url);
}
//浏览记录对比
function startZiRoomCompare_duibi(){
	if(ZiRoomCompareIds2.length <= 1){
		//alert('请至少选择两个房间') ;
		$(".compbutt").attr('disabled',true);//按钮禁用
		return false ;
	}
	
	var url = ZiRoomCompareUrl + ZiRoomCompareIds2.join('A')+".html";
	window.open(url);
}

function openZiRoomCompare(noset){
	if(i$('i_ziroom_comp').style.display == '') return ;
	i$('i_ziroom_comp').style.display = '' ;
	setCookie(ZiRoomCompareCKey+'_o','1') ;
}

function chZiRoomCompareN(v){
	var lis = i$s('i_ziroom_compare_table','tr') ;
	for(var i=0;i<lis.length;i++){
		var cla = lis[i].getAttribute('cla') ;
		if(!cla) continue ;
		if(cla == 'title') continue ;
		if(!v){
			lis[i].style.display = '' ;
		}else{
			lis[i].style.display = v == cla ? '' : 'none' ;
		}
	}
}


function initZiRoomCompareN(){
	var lis = i$s('i_ziroom_compare_table','tr') ;
	for(var i=0;i<lis.length;i++){
		var cla = lis[i].getAttribute('cla') ;
		if(!cla) continue ;
		var tds = lis[i].getElementsByTagName('td') ;
		var ii = 0 ;
		for(var k=0;k < tds.length;k++){
			if(tds[k].getAttribute('ccl')) continue ;
			tds[k].setAttribute('ii',ii) ;
			ii++ ;
		}
	}
}

function delZiRoomCompareN(deli){
	if(ZiRoomCompareNum < 3){
		alert('至少应该有两项对比项') ;
		return ;
	}
	var lis = i$s('i_ziroom_compare_table','tr') ;
	for(var i=0;i<lis.length;i++){
		var cla = lis[i].getAttribute('cla') ;
		if(!cla) continue ;
		var tds = lis[i].getElementsByTagName('td') ;
		var ii = 0 ;
		for(var k=0;k < tds.length;k++){
			var ii = tds[k].getAttribute('ii') ;
			if(!ii) continue ;
			if(ii == deli){
				tds[k].parentNode.removeChild(tds[k]) ;
				break ;
			}
		}
	}
	ZiRoomCompareNum-- ;
}
var initQKeyWord = '' ;
var defaultQKeyWord = '请输入关键字(房间号/商圈/小区名等)' ;
var doQKeyUrl = '' ;

function initQKey(){
	i$('i_q_keyword').onfocus = function(){
		if(this.value == defaultQKeyWord) this.value = '' ;
		this.style.color = '#333' ;
	}
	i$('i_q_keyword').onblur = function(){
		if(this.value == ''){
			this.value = defaultQKeyWord ;
			this.className = 'txtBox' ;
			this.style.color = '' ;
		}
	}
	
	if(initQKeyWord && initQKeyWord != defaultQKeyWord){
		i$('i_q_keyword').value = initQKeyWord ;
		i$('i_q_keyword').onfocus() ;
	}else{
		i$('i_q_keyword').value = defaultQKeyWord ;
	}

}

function doQKey(){
	var qwd = iv$('i_q_keyword') ;
	if(qwd == defaultQKeyWord) qwd = '' ;
	var url = doQKeyUrl ;
	if(!url) url = window.location.href ;
	//url = url.replace(/[?&]qwd=(.*)&/,'&').replace(/[?&]qwd(.*)/,'').replace(/\?$/,'') ;
	//alert(url);
	url += (url.indexOf("?") != -1 ? "&":"?") + "qwd=" + qwd;
	//i$('i_doqkey_form').setAttribute('action',url) ;
	//alert(i$('i_doqkey_form').getAttribute('action'));
	//i_doqkey_form.action = url;
	//i$('i_doqkey_qwd').value = qwd ;
	//i$('i_doqkey_form').submit() ;
	//return false ;
	window.location.href = encodeURI(url);
}

function checkedOne(o,n){
	if(!o) return false ;
	if(!checkedOne.lastC) checkedOne.lastC = {} ;
	if(checkedOne.lastC[n]){
		checkedOne.lastC[n].checked = false ;
	}
	checkedOne.lastC[n] = o ;
	checkedOne.lastC[n].checked = true ;
}

function mTab(fix,i,cl1,cl2){
	if(mTab.lastI){
		i$(fix+mTab.lastI).style.display = 'none' ;
		i$(fix+'s_'+mTab.lastI).className = cl2 ;
	}
	mTab.lastI = i ;
	i$(fix+i).style.display = '' ;
	i$(fix+'s_'+i).className = cl1 ;
}


var CAI = {} ;
CAI.inCity = function(id,initv,initLen){
	if(!window.CityA) return ;
	if(!i$(id)) return ;
	
	var js = window.CityA.citys ;
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	for(var k in js){
		var op = new Option(k,k) ;
		op.setAttribute('cid',js[k]) ;
		i$(id).options.add(op) ;
	}
	if(initv) i$(id).value = initv ;
}

CAI.inDistrict = function(cityName,id,initv,initLen){
	/*
	if(!window.CityA) return ;
	if(!i$(id)) return ;
	
	var cityId = window.CityA.citys[cityName] ;
	if(!cityId) return ;
	
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	
	var js = window.CityA.district['city_'+cityId] ;
	*/
	var js = window.CityA.district;
	if(!js) return ;
	
	for(var i=0;i < js.length;i++){
		var op = new Option(js[i].district_name,js[i].district_code) ;
		op.setAttribute('cid',js[i].district_code) ;
		
		i$(id).options.add(op) ;
	}
	if(initv) i$(id).value = initv ;
}

CAI.inBusiness = function(cityName,districtName,id,initv,initLen){
	/*
	if(!window.CityA) return ;
	if(!i$(id)) return ;

	var cityId = window.CityA.citys[cityName] ;
	if(!cityId) return ;
	
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	
	var js = window.CityA.district['city_'+cityId] ;
	var districtId = 0 ;
	for(var i=0;i < js.length;i++){
		if(js[i].district_name == districtName){
			districtId = js[i].district_id ;
			break ;
		}
	}
	if(!districtId) return ;
	*/
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	var js = window.CityA.business;
	if(!js) return ;
	for(var i=0;i < js.length;i++){
		var code = js[i].district_code;
		if(code == districtName) {
			var op = new Option(js[i].business_name,js[i].business_code) ;
			op.setAttribute('cid',js[i].business_code) ;
			
			i$(id).options.add(op) ;
		}
		
	}
	
	if(initv) i$(id).value = initv ;
}

CAI.inSubway = function(cityName,id,initv,initLen){
	/*
	if(!window.CityA) return ;
	if(!i$(id)) return ;
	
	var cityId = window.CityA.citys[cityName] ;
	if(!cityId) return ;
	
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	*/
	//var js = window.CityA.subway['city_'+cityId] ;
	var js = window.CityA.subway;
	if(!js) return ;
	
	for(var i=0;i < js.length;i++){
		var op = new Option(js[i].subway_name,js[i].subway_code) ;
		op.setAttribute('cid',js[i].subway_code) ;
		
		i$(id).options.add(op) ;
	}
	if(initv) i$(id).value = initv ;
}

CAI.inSubwayStation = function(cityName,subwayName,id,initv,initLen){
	/*
	if(!window.CityA) return ;
	if(!i$(id)) return ;

	var cityId = window.CityA.citys[cityName] ;
	if(!cityId) return ;
	
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	
	var js = window.CityA.subway['city_'+cityId] ;
	var subwayId = 0 ;
	for(var i=0;i < js.length;i++){
		if(js[i].subway_name == subwayName){
			subwayId = js[i].subway_id ;
			break ;
		}
	}

	if(!subwayId) return ;
	*/
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	js = window.CityA.subwayStation;
	var length = subwayName.length;
	for(var i=0;i < js.length;i++){
		var station = js[i].station_code;
		var code = station.substring(0, length);
		if(code == subwayName) {
			var op = new Option(js[i].station_name,js[i].station_code) ;
			op.setAttribute('cid',js[i].station_code) ;
			
			i$(id).options.add(op) ;
		}
	}
	
	if(initv) i$(id).value = initv ;
}


CAI.inCycleFace = function(id,initv,initLen){
	/*
	if(!window.CityA) return ;
	if(!i$(id)) return ;
	
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	
	var js = window.CityA.cycleFace ;
	*/
	var js = window.CityA.cycleFace ;
	if(!js) return ;

	for(var i=0;i < js.length;i++){
		var op = new Option(js[i].face_name,js[i].face_name) ;
		op.setAttribute('cid',js[i].id) ;		
		i$(id).options.add(op) ;
	}
	if(initv) i$(id).value = initv ;
}

CAI.inCycle = function(cityName,id,initv,initLen){
	/*
	if(!window.CityA) return ;
	if(!i$(id)) return ;

	var cityId = window.CityA.citys[cityName] ;
	if(!cityId) return ;
	
	if(typeof initLen == 'undefined') initLen = 1 ;
	i$(id).options.length = initLen ;
	
	var js = window.CityA.cycle['city_'+cityId] ;
	*/
	var js = window.CityA.cycle ;
	if(!js) return ;
	
	for(var i=0;i < js.length;i++){
		var op = new Option(js[i].cycle_name,js[i].cycle_name) ;
		op.setAttribute('cid',js[i].cycle_id) ;
		
		i$(id).options.add(op) ;
	}
	if(initv) i$(id).value = initv ;
}



function MmMove(idd){
	this.doObj = document.getElementById(idd) ;
	if(!this.doObj) return false ;
	
	//移动一次移动几个格
	this.moveOneTimes = 1 ;
	
	//单个宽度
	this.showOneWidth = 350 ;
	
	//移动加速度
	this.moveSpeedA = 1 ;
	
	//移动偏移
	this.moveSOffset = 5 ;
	
	var _ms = false ;
	var _this = this ;
	
	this.init = function(){
		_this.doObj.style.marginLeft = '-'+_this.showOneWidth*_this.moveOneTimes+'px';
	}
	
	this.moving = false;
	this.move = function(l){
		if(_this.moving) return ;
		var __thisOffset = 1 ;
		if(l) __thisOffset = -1 ;
		
		if(!_ms) _ms = new MyAcceleration() ;
		
		_ms.s = _this.showOneWidth*_this.moveOneTimes + this.moveSOffset ;
		_ms.a = _this.moveSpeedA ;
		_ms.go();
		
		var __thisMl = parseInt(_this.doObj.style.marginLeft,10);
		var __si = setInterval(function(){
			_this.moving = true ;
			var __s = _ms.getS();
			if(__s)	_this.doObj.style.marginLeft = __thisMl + (-1)*__thisOffset * __s +'px';
			else{
				clearInterval(__si);
				if(_this.func_End){
					_this.func_End(__thisOffset) ;
				}
				//复位
				_this.doObj.style.marginLeft = '-'+_this.showOneWidth*_this.moveOneTimes+'px';
				_this.moving = false;
			}
		},30);
	}
	
	if(document.getElementById(idd+'_left')){
		document.getElementById(idd+'_left').onclick = function(){_this.move(1)} ;
	}
	
	if(document.getElementById(idd+'_right')){
		document.getElementById(idd+'_right').onclick = function(){_this.move()} ;
	}

}

function MyAcceleration(s,a){
	this.go = function(){
		this.counter = 0 ;
		this.v = Math.sqrt(2*this.a*this.s) ;
		this.t = Math.sqrt(2*this.s/this.a) ;
	}
	
	if(s && a){
		this.a = a ;
		this.s = s ;
		this.go();
	}

	this.getS = function(){
		this.counter ++ ;
		var thisS = this.v*this.counter - 1/2 * this.a * this.counter * this.counter ;
		if(thisS >= this.s || thisS < 0 || this.counter > this.t){
			this.counter = 0 ;
			return false;
		}
		return thisS;
	}
}



/**
 * classes.file ,classes.text ,classes.button
 */
function vUpload(in_id,sum,f_name,f_id,classes,more){
	if(!sum) sum = 1 ;
	for(var i=0;i<sum;i++){
		var up = document.createElement('div') ;
		up.style.cssText = 'position:relative;';
		
		var _in = document.createElement('input') ;
		_in.setAttribute('type','file') ;
		_in.style.cssText = 'height:24px;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;position:absolute;left:0;';
		if(classes.file) _in.className = classes.file ;
		if(f_id) _in.id = f_id ;
		if(f_name) _in.setAttribute('name',f_name) ;
		up.appendChild(_in);
		_in.onchange = function(){
			var t = this.parentNode.getElementsByTagName('input') ;
			if(t.length < 2) return ;
			t = this.parentNode.getElementsByTagName('input')[1] ;
			t.value = this.value ;
			t = this.parentNode.lastChild  ;
			if(t && t.tagName.toLowerCase() == 'span' && t.getElementsByTagName('input').length > 0){
				t = t.getElementsByTagName('input')[0] ;
				if(t && t.tagName.toLowerCase() == 'input' && t.getAttribute('type') == 'text'){
					var s = this.value ;
					s = s.substr(s.lastIndexOf('/')+1) ;
					s = s.substr(s.lastIndexOf('\\')+1) ;
					s = s.substr(0,s.lastIndexOf('.')) ;
					t.value = s ;
				}
			}
		}
		
		_in = document.createElement('input') ;
		_in.setAttribute('type','text') ;
		_in.readOnly = true ;
		_in.style.cssText = 'width:120px;height:21px;margin-right:2px;';
		if(classes.text) _in.className = classes.text ;
		up.appendChild(_in);
		
		if(!classes.vtext) classes.vtext = '' ;
		_in = document.createElement('input') ;
		_in.setAttribute('type','button') ;
		_in.value = classes.vtext ;
		if(classes.button) _in.className = classes.button ;
		up.appendChild(_in);
		if(more){
			if(typeof(more) == 'string'){
				if(more != '') up.innerHTML += more ;
			}else{
				if(more.id) more.id = '' ;
				up.appendChild(more.cloneNode(1));
			}
		}
		document.getElementById(in_id).appendChild(up) ;
	}
}

/**********************************浏览过的房源记录***********************************/
function addZiRoomCompare2(){
	ZiRoomCompareIds2=[];
	var name = $("input[name='checkbox_name']");
	name.each(function(){
		if ($(this).attr("checked")){ 
			ZiRoomCompareIds2.push($(this).val());
		} 
	})
	if (ZiRoomCompareIds2.length>1 && ZiRoomCompareIds2.length<5) {
		$(".compbutt").attr('disabled',false);
	} else { 
		$(".compbutt").attr('disabled',true);
	}
	
	if (ZiRoomCompareIds2.length==4){
		name.each(function(){
			if (!$(this).attr("checked")){ 
				$(this).attr('disabled',true);
			} 
		})
	} else {
		name.each(function(){
			if (!$(this).attr("checked")){ 
				$(this).attr('disabled',false);
			} 
		})
	}
}





