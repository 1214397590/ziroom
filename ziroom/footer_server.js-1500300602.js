var SER_URL='http://zmcapi.ziroom.com/';
        var FIRST_MENU=null;
        var nowId='';

        //页面加载完进行请求获取一级菜单
        (function(){

            $.ajax({
                url:SER_URL+'/base/customer-service/getBusinessType',
                type:'GET',
                dataType:'jsonp',
                success:function(data){
                    if(data.status=='1'){
                        FIRST_MENU=data.data;
                        forMenuDom(FIRST_MENU,true);
                    }
                    else{
                        console.log(data);
                    }
                }
            });

        })();

        //打开关闭交互
        (function(){

            $('#J_openService').click(function(){
                if(getCookie('emGroup')){
                    openEaseMobim(getCookie('emGroup'));
                }
                else{
                    $('#J_serviceBox').show();
                }
            });

            $('#J_closeService').click(function(){
                $('#J_serviceBox').hide();
            });

        })();

        function setCookie(c_name,value,expiredays) {
            var exdate=new Date();
            exdate.setDate(exdate.getDate()+expiredays);
            document.cookie=c_name+ "=" +escape(value)+
                    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
        }

        function getCookie(c_name) {
            if (document.cookie.length>0)
            {
                var c_start=document.cookie.indexOf(c_name + "=");
                if (c_start!=-1)
                {
                    c_start=c_start + c_name.length+1;
                    var c_end=document.cookie.indexOf(";",c_start);
                    if (c_end==-1) c_end=document.cookie.length;
                    return unescape(document.cookie.substring(c_start,c_end));
                }
            }
            return "";
        }

        //渲染菜单
        function forMenuDom(aData,isFirst){
            $('#J_serviceUl').html('');

            if(isFirst){
                for(var i=0;i<aData.length;i++){
                    $('<li><a href="javascript:;" data-id="'+aData[i].id+'" data-hasSub="'+aData[i].hasSubType+'" onclick="clickItem(this)">'+aData[i].value+'</a></li>').appendTo('#J_serviceUl');
                }
                $('#J_serviceTit').html('请选择要咨询的业务类型');
            }
            else{
                for(var j=0;j<aData.length;j++){
                    $('<li><a href="javascript:;" data-id2="'+aData[j].id+'" data-id="'+nowId+'" onclick="clickItem(this)">'+aData[j].value+'</a></li>').appendTo('#J_serviceUl');
                }
                $('<li><a href="javascript:;" class="S_customerListBack" data-type="return" onclick="clickItem(this)">返回上一级</a></li>').appendTo('#J_serviceUl');
                $('#J_serviceTit').html('请选择要咨询的问题类型');
            }

        }

        //打开easemobim
        function openEaseMobim(emgroup){
            easemobim.bind({
                //请使用自己的租户ID
                tenantId: "3902",
                //是否隐藏小的悬浮按钮
                hide: true,
                emgroup:emgroup,
                to:'ziroomerPro',//环信客服中心渠道管理查看
                appKey:'ziroom#ziroom',
                onsessionclosed:function(){
                    setCookie('emGroup','',-1);//清除cookie
                    forMenuDom(FIRST_MENU,true);//重置菜单
                }
            })
        }

        //点击菜单选项
        function clickItem(obj){
            if($(obj).attr('data-type')=='return'){
                //返回上一级
                nowId='';
                forMenuDom(FIRST_MENU,true);
            }
            else if($(obj).attr('data-hasSub')=='1'){
                //一级菜单切有二级
                nowId=$(obj).attr('data-id');
                $.ajax({
                    url:SER_URL+'/base/customer-service/getQuestionType',
                    type:'GET',
                    dataType:'jsonp',
                    data:{param:'{"businessTypeId":"'+nowId+'"}'},
                    success:function(data){
                        if(data.status=='1'){
                            forMenuDom(data.data,false);
                        }
                        else{
                            console.log(data);
                        }
                    }
                });
            }
            else if($(obj).attr('data-hasSub')=='0'){
                //一级菜单直接请求技能组
                $.ajax({
                    url:SER_URL+'/base/customer-service/1/getSkillGroup',
                    type:'GET',
                    dataType:'jsonp',
                    data:{param:'{"businessTypeId":"'+$(obj).attr('data-id')+'"}'},
                    success:function(data){
                        if(data.status=='1'){
                            openEaseMobim(data.data.skillGroup);
                            setCookie('emGroup',data.data.skillGroup,3);
                            $('#J_serviceBox').hide();
                        }
                        else{
                            console.log(data);
                        }
                    }
                });
            }
            else{
                //二级菜单请求技能组
                $.ajax({
                    url:SER_URL+'/base/customer-service/1/getSkillGroup',
                    type:'GET',
                    dataType:'jsonp',
                    data:{param:'{"businessTypeId":"'+$(obj).attr('data-id')+'","questionTypeId":"'+$(obj).attr('data-id2')+'"}'},
                    success:function(data){
                        if(data.status=='1'){
                            openEaseMobim(data.data.skillGroup);
                            setCookie('emGroup',data.data.skillGroup,3);
                            $('#J_serviceBox').hide();
                        }
                        else{
                            console.log(data);
                        }
                    }
                });
            }
        }