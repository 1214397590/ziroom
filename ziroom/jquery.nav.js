/*banner插件果开始*/
; (function ($) {
    $.fn.extend({
        "nav": function (con) {
            var $this = $(this),
			 $nav = $this.find('.switch-tab'), 
			  num=(con && con.num)|| 5,
			  t = (con && con.t) || 3000,
			  a = (con && con.a) || 50, 
			  i = 1, 
			  autoChange = function () {
                $nav.find('a:eq(' + i + ')').addClass('current').siblings().removeClass('current');
                $this.find('.event-item').css('display', 'none').end().find('.event-item:eq(' + i + ')').css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, a, function () {
                   i++;
				   if(i>= num){i=0;}
                }).siblings('.event-item').css({
                    display: 'none',
                    opacity: 0
                });
            };
			var st=null;
			if(num!=1){
				
				st = setInterval(autoChange, t);
			}
			
            $this.hover(function () {
                clearInterval(st);
                return false;
            }, function () {
               if(num!=1){
					  st = setInterval(autoChange, t);
				}
                return false;
            }).find('.switch-tab>a').bind('click', function () {
                i = $(this).index();
				
                autoChange();
                return false;
            });
			if(num==1){$(".switch-tab").hide();}
			
            return $this;
        }
    });
}(jQuery));
/*banner插件果结束*



/*图片换文字效插件果开始*/

(function($){

    if(!$.omr){
        $.omr = new Object();
    };
    
    $.omr.mosaic = function(el, options){
    
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("omr.mosaic", base);
        
        base.init = function(){
            base.options = $.extend({},$.omr.mosaic.defaultOptions, options);
            
            base.load_box();
        };
        
        // Preload Images
        base.load_box = function(){
        	// Hide until window loaded, then fade in
			if (base.options.preload){
				$(base.options.backdrop, base.el).hide();
				$(base.options.overlay, base.el).hide();
			
				$(window).load(function(){
					// IE transparency fade fix
					if(base.options.options.animation == 'fade' && $(base.options.overlay, base.el).css('opacity') == 0 ) $(base.options.overlay, base.el).css('filter', 'alpha(opacity=0)');
					
					$(base.options.overlay, base.el).fadeIn(200, function(){
						$(base.options.backdrop, base.el).fadeIn(200);
					});
					
					base.allow_hover();
				});
			}else{
				$(base.options.backdrop, base.el).show();
				$(base.options.overlay , base.el).show();
				base.allow_hover();
			}
        };
        
        // Initialize hover animations
        base.allow_hover = function(){
        	// Select animation
			switch(base.options.animation){
			
				// Handle fade animations
				case 'fade':
					$(base.el).hover(function () {
			        	$(base.options.overlay, base.el).stop().fadeTo(base.options.speed, base.options.opacity);
			        },function () {
			        	$(base.options.overlay, base.el).stop().fadeTo(base.options.speed, 0);
			      	});
			      	
			    	break;
			    
			    // Handle slide animations
	      		case 'slide':
	      			// Grab default overlay x,y position
					startX = $(base.options.overlay, base.el).css(base.options.anchor_x) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_x) : '0px';
					startY = $(base.options.overlay, base.el).css(base.options.anchor_y) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_y) : '0px';;
	      			
			      	var hoverState = {};
			      	hoverState[base.options.anchor_x] = base.options.hover_x;
			      	hoverState[base.options.anchor_y] = base.options.hover_y;
			      	
			      	var endState = {};
			      	endState[base.options.anchor_x] = startX;
			      	endState[base.options.anchor_y] = startY;
			      	
					$(base.el).hover(function () {
			        	$(base.options.overlay, base.el).stop().animate(hoverState, base.options.speed);
			        },function () {
			        	$(base.options.overlay, base.el).stop().animate(endState, base.options.speed);
			      	});
			      	
			      	break;
			};
        };
        
        // Make it go!
        base.init();
    };
    
    $.omr.mosaic.defaultOptions = {
        animation	: 'fade',
        speed		: 150,
        opacity		: 1,
        preload		: 0,
        anchor_x	: 'left',
        anchor_y	: 'bottom',
        hover_x		: '0px',
        hover_y		: '0px',
        overlay  	: '.mosaic-overlay',	//Mosaic overlay
		backdrop 	: '.mosaic-backdrop'	//Mosaic backdrop
    };
    
    $.fn.mosaic = function(options){
        return this.each(function(){
            (new $.omr.mosaic(this, options));
        });
    };
    
})(jQuery);
/*图片换文字效插件果结束*/
/*表扬信滚动插件果开始*/
(function(){var e=jQuery,f="jQuery.pause",d=1,b=e.fn.animate,a={};function c(){return new Date().getTime()}e.fn.animate=function(k,h,j,i){var g=e.speed(h,j,i);g.complete=g.old;return this.each(function(){if(!this[f]){this[f]=d++}var l=e.extend({},g);b.apply(e(this),[k,e.extend({},l)]);a[this[f]]={run:true,prop:k,opt:l,start:c(),done:0}})};e.fn.pause=function(){return this.each(function(){if(!this[f]){this[f]=d++}var g=a[this[f]];if(g&&g.run){g.done+=c()-g.start;if(g.done>g.opt.duration){delete a[this[f]]}else{e(this).stop();g.run=false}}})};e.fn.resume=function(){return this.each(function(){if(!this[f]){this[f]=d++}var g=a[this[f]];if(g&&!g.run){g.opt.duration-=g.done;g.done=0;g.run=true;g.start=c();b.apply(e(this),[g.prop,e.extend({},g.opt)])}})}})();
$(function () {
    var scrtime;

    var $ul = $("#con ul");
    var liFirstHeight = $ul.find("li:first").height();//第一个li的高度
    $ul.css({ top: "-" + liFirstHeight - 20 + "px" });//利用css的top属性将第一个li隐藏在列表上方	 因li的上下padding:10px所以要-20

    $("#con").hover(function () {
        $ul.pause();//暂停动画
        clearInterval(scrtime);
    }, function () {
        $ul.resume();//恢复播放动画	
        scrtime = setInterval(function scrolllist() {
            //动画形式展现第一个li
            $ul.animate({ top: 0 + "px" }, 1500, function () {
                //动画完成时
                $ul.find("li:last").prependTo($ul);//将ul的最后一个剪切li插入为ul的第一个li
                liFirstHeight = $ul.find("li:first").height();//刚插入的li的高度
                $ul.css({ top: "-" + liFirstHeight - 20 + "px" });//利用css的top属性将刚插入的li隐藏在列表上方  因li的上下padding:10px所以要-20					
            });
        }, 7000);

    }).trigger("mouseleave");//通过trigger("mouseleave")函数来触发hover事件的第2个函数

});
/*表扬信滚动插件果结束*/

/*瀑布流*/
$.fn.wookmark = function(options) {
  
  if(!this.wookmarkOptions) {
    this.wookmarkOptions = $.extend( {
        container: $('body'),
        offset: 2,
        autoResize: false,
        itemWidth: $(this[0]).outerWidth(),
        resizeDelay: 50
      }, options);
  } else if(options) {
    this.wookmarkOptions = $.extend(this.wookmarkOptions, options);
  }
  
  // Layout variables.
  if(!this.wookmarkColumns) {
    this.wookmarkColumns = null;
    this.wookmarkContainerWidth = null;
  }
  
  // Main layout function.
  this.wookmarkLayout = function() {
    // Calculate basic layout parameters.
    var columnWidth = this.wookmarkOptions.itemWidth + this.wookmarkOptions.offset;
    var containerWidth = this.wookmarkOptions.container.width();
    var columns = Math.floor((containerWidth+this.wookmarkOptions.offset)/columnWidth);
    var offset = Math.round((containerWidth - (columns*columnWidth-this.wookmarkOptions.offset))/2);
    
    // If container and column count hasn't changed, we can only update the columns.
    var bottom = 0;
    if(this.wookmarkColumns != null && this.wookmarkColumns.length == columns) {
      bottom = this.wookmarkLayoutColumns(columnWidth, offset);
    } else {
      bottom = this.wookmarkLayoutFull(columnWidth, columns, offset);
    }
    
    // Set container height to height of the grid.
    this.wookmarkOptions.container.css('height', bottom+'px');
  };
  
  /**
   * Perform a full layout update.
   */
  this.wookmarkLayoutFull = function(columnWidth, columns, offset) {
    // Prepare Array to store height of columns.
    var heights = [];
    while(heights.length < columns) {
      heights.push(0);
    }
    
    // Store column data.
    this.wookmarkColumns = [];
    while(this.wookmarkColumns.length < columns) {
      this.wookmarkColumns.push([]);
    }
    
    // Loop over items.
    var item, top, left, i=0, k=0, length=this.length, shortest=null, shortestIndex=null, bottom = 0;
    for(; i<length; i++ ) {
      item = $(this[i]);
      
      // Find the shortest column.
      shortest = null;
      shortestIndex = 0;
      for(k=0; k<columns; k++) {
        if(shortest == null || heights[k] < shortest) {
          shortest = heights[k];
          shortestIndex = k;
        }
      }
      
      // Postion the item.
      item.css({
        position: 'absolute',
        top: shortest+'px',
        left: (shortestIndex*columnWidth + offset)+'px'
      });
      
      // Update column height.
      heights[shortestIndex] = shortest + item.outerHeight() + this.wookmarkOptions.offset;
      bottom = Math.max(bottom, heights[shortestIndex]);
      
      this.wookmarkColumns[shortestIndex].push(item);
    }
    
    return bottom;
  };
  
  /**
   * This layout function only updates the vertical position of the 
   * existing column assignments.
   */
  this.wookmarkLayoutColumns = function(columnWidth, offset) {
    var heights = [];
    while(heights.length < this.wookmarkColumns.length) {
      heights.push(0);
    }
    
    var i=0, length = this.wookmarkColumns.length, column;
    var k=0, kLength, item;
    var bottom = 0;
    for(; i<length; i++) {
      column = this.wookmarkColumns[i];
      kLength = column.length;
      for(k=0; k<kLength; k++) {
        item = column[k];
        item.css({
          left: (i*columnWidth + offset)+'px',
          top: heights[i]+'px'
        });
        heights[i] += item.outerHeight() + this.wookmarkOptions.offset;
        
        bottom = Math.max(bottom, heights[i]);
      }
    }
    
    return bottom;
  };
  
  // Listen to resize event if requested.
  this.wookmarkResizeTimer = null;
  if(!this.wookmarkResizeMethod) {
    this.wookmarkResizeMethod = null;
  }
  if(this.wookmarkOptions.autoResize) {
    // This timer ensures that layout is not continuously called as window is being dragged.
    this.wookmarkOnResize = function(event) {
      if(this.wookmarkResizeTimer) {
        clearTimeout(this.wookmarkResizeTimer);
      }
      this.wookmarkResizeTimer = setTimeout($.proxy(this.wookmarkLayout, this), this.wookmarkOptions.resizeDelay)
    };
    
    // Bind event listener.
    if(!this.wookmarkResizeMethod) {
      this.wookmarkResizeMethod = $.proxy(this.wookmarkOnResize, this);
    }
    $(window).resize(this.wookmarkResizeMethod);
  };
  
  /**
   * Clear event listeners and time outs.
   */
  this.wookmarkClear = function() {
    if(this.wookmarkResizeTimer) {
      clearTimeout(this.wookmarkResizeTimer);
      this.wookmarkResizeTimer = null;
    }
    if(this.wookmarkResizeMethod) {
      $(window).unbind('resize', this.wookmarkResizeMethod);
    }
  };
  
  // Apply layout
  this.wookmarkLayout();
  
  // Display items (if hidden).
  this.show();
};


/*瀑布流*/