$(function() {
    
    var curUrl = window.location.href;
        var oCurrentCity = $('#current_city');
        var oCityList = $('#cityList');
        var cityArr=[
            {
                name:'北京',
                cityCode:'110000',
                url:'index.htm'/*tpa=http://www.ziroom.com/*/
            },
            {
                name:'上海',
                cityCode:'310000',
                url:'http://sh.ziroom.com/'
            },
            {
                name:'深圳',
                cityCode:'440300',
                url:'http://sz.ziroom.com/'
            },
            {
                name:'杭州',
                cityCode:'330100',
                url:'http://hz.ziroom.com/'
            },
            {
                name:'南京',
                cityCode:'320100',
                url:'http://nj.ziroom.com/'
            }
        ];
        var cityIndex=0;

        if(curUrl.indexOf('http://static8.ziroom.com/phoenix/pc/js/www.ziroom.com')>=0){
            cityIndex=0;
        }else if(curUrl.indexOf('http://static8.ziroom.com/phoenix/pc/js/sh.ziroom.com')>=0){
            cityIndex=1;
        }else if(curUrl.indexOf('http://static8.ziroom.com/phoenix/pc/js/sz.ziroom.com')>=0){
            cityIndex=2;   
        }else if(curUrl.indexOf('http://static8.ziroom.com/phoenix/pc/js/hz.ziroom.com')>=0){
            cityIndex=3;
        }else if(curUrl.indexOf('http://static8.ziroom.com/phoenix/pc/js/nj.ziroom.com')>=0){
            cityIndex=4;
        }
        oCurrentCity.html(cityArr[cityIndex].name);
        var cityHtml='';  
        var cityActive='';
        var a = new Date();
        var b;

        for(var i=0; i<cityArr.length; i++){
            if(i==cityIndex){
                cityActive='active';
            }else{
                cityActive='';
            }
            if(i==0){
                b = '?t='+a.getSeconds();
            }else{
                b=''
            }
            cityHtml+='<a href="'+cityArr[i].url+''+b+'" data-id="'+cityArr[i].cityCode+'" class="'+cityActive+'">'+cityArr[i].name+'</a>'
        }
        oCityList.html(cityHtml);

        

});
