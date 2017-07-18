(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,946,471);


(lib.eye = function() {
	this.initialize(img.eye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,24);


(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,41);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(-15.6,-8.3,0.998,0.998,-14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-14.9,31.2,29.8);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(-15.6,-8.3,0.998,0.998,-14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-14.9,31.2,29.8);


(lib.banner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 眼球
	this.instance = new lib.补间3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48,-62,0.999,0.999,11.6);

	this.instance_1 = new lib.补间4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54,-68,0.999,0.999,-14.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-14.8,x:-54,y:-68},11).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},11).to({rotation:-41,x:-55},13).wait(15).to({rotation:-32},0).to({regX:0.1,rotation:0.5,x:-47.9,y:-62},11).to({regX:0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:11.5,x:-47.8},14).wait(36));

	// 眼球2
	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.9,-19.7,0.999,0.999,11.6);

	this.instance_3 = new lib.补间4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(58,-24,0.999,0.999,-14.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:-14.8,x:58,y:-24},11).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},11).to({rotation:-32,x:54.9,y:-24.7},13).wait(15).to({startPosition:0},0).to({regX:0.1,rotation:0.5,x:66.9,y:-19.8},11).to({regX:0.2,regY:-0.1,scaleX:1,scaleY:1,rotation:11.5,x:67.1,y:-19.7},14).wait(36));

	// 图层 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhoDmIAAnLIDRAAIAAHLg");
	var mask_graphics_1 = new cjs.Graphics().p("AiEDoIAAnPIEJAAIAAHPg");
	var mask_graphics_2 = new cjs.Graphics().p("AigDqIAAnTIFBAAIAAHTg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai8DsIAAnXIF5AAIAAHXg");
	var mask_graphics_4 = new cjs.Graphics().p("AjZDuIAAnaIGzAAIAAHag");
	var mask_graphics_5 = new cjs.Graphics().p("Aj1DvIAAndIHrAAIAAHdg");
	var mask_graphics_6 = new cjs.Graphics().p("AkRDxIAAnhIIjAAIAAHhg");
	var mask_graphics_7 = new cjs.Graphics().p("AktDzIAAnlIJbAAIAAHlg");
	var mask_graphics_8 = new cjs.Graphics().p("AlJD1IAAnpIKTAAIAAHpg");
	var mask_graphics_9 = new cjs.Graphics().p("AllD3IAAntILLAAIAAHtg");
	var mask_graphics_10 = new cjs.Graphics().p("AmBD5IAAnxIMDAAIAAHxg");
	var mask_graphics_11 = new cjs.Graphics().p("AmdD7IAAn0IM7AAIAAH0g");
	var mask_graphics_12 = new cjs.Graphics().p("Am6D8IAAn4IN0AAIAAH4g");
	var mask_graphics_13 = new cjs.Graphics().p("AnWD+IAAn7IOtAAIAAH7g");
	var mask_graphics_14 = new cjs.Graphics().p("AnyEAIAAn/IPlAAIAAH/g");
	var mask_graphics_15 = new cjs.Graphics().p("AoOECIAAoDIQdAAIAAIDg");
	var mask_graphics_16 = new cjs.Graphics().p("AoqEEIAAoHIRVAAIAAIHg");
	var mask_graphics_17 = new cjs.Graphics().p("ApGEGIAAoLISNAAIAAILg");
	var mask_graphics_18 = new cjs.Graphics().p("ApiEIIAAoPITFAAIAAIPg");
	var mask_graphics_19 = new cjs.Graphics().p("Ap+EKIAAoTIT9AAIAAITg");
	var mask_graphics_20 = new cjs.Graphics().p("AqaELIAAoVIU1AAIAAIVg");
	var mask_graphics_21 = new cjs.Graphics().p("Aq3EOIAAoaIVvAAIAAIag");
	var mask_graphics_22 = new cjs.Graphics().p("ArTEPIAAodIWnAAIAAIdg");
	var mask_graphics_23 = new cjs.Graphics().p("ArvERIAAohIXfAAIAAIhg");
	var mask_graphics_24 = new cjs.Graphics().p("AsLETIAAolIYXAAIAAIlg");
	var mask_graphics_25 = new cjs.Graphics().p("AsLETIAAolIYXAAIAAIlg");
	var mask_graphics_26 = new cjs.Graphics().p("AtQEfIAAo9IahAAIAAI9g");
	var mask_graphics_27 = new cjs.Graphics().p("AuVErIAApVIcrAAIAAJVg");
	var mask_graphics_28 = new cjs.Graphics().p("AvaE3IAAptIe1AAIAAJtg");
	var mask_graphics_29 = new cjs.Graphics().p("AwgFDIAAqGMAhBAAAIAAKGg");
	var mask_graphics_30 = new cjs.Graphics().p("AxlFPIAAqdMAjLAAAIAAKdg");
	var mask_graphics_31 = new cjs.Graphics().p("AyqFbIAAq1MAlVAAAIAAK1g");
	var mask_graphics_32 = new cjs.Graphics().p("AzvFoIAArPMAnfAAAIAALPg");
	var mask_graphics_33 = new cjs.Graphics().p("A00FzIAArlMAppAAAIAALlg");
	var mask_graphics_34 = new cjs.Graphics().p("A15GAIAAr/MArzAAAIAAL/g");
	var mask_graphics_35 = new cjs.Graphics().p("A2+GMIAAsXMAt+AAAIAAMXg");
	var mask_graphics_36 = new cjs.Graphics().p("A4EGYIAAsvMAwJAAAIAAMvg");
	var mask_graphics_37 = new cjs.Graphics().p("A5JGkIAAtHMAyTAAAIAANHg");
	var mask_graphics_38 = new cjs.Graphics().p("A6OGwIAAtfMA0dAAAIAANfg");
	var mask_graphics_39 = new cjs.Graphics().p("A7TG8IAAt3MA2nAAAIAAN3g");
	var mask_graphics_40 = new cjs.Graphics().p("A8YHIIAAuPMA4xAAAIAAOPg");
	var mask_graphics_41 = new cjs.Graphics().p("A9eHUIAAuoMA68AAAIAAOog");
	var mask_graphics_42 = new cjs.Graphics().p("A+jHgIAAu/MA9HAAAIAAO/g");
	var mask_graphics_43 = new cjs.Graphics().p("A/oHsIAAvXMA/RAAAIAAPXg");
	var mask_graphics_44 = new cjs.Graphics().p("EggtAH5IAAvxMBBbAAAIAAPxg");
	var mask_graphics_45 = new cjs.Graphics().p("EghyAIEIAAwIMBDlAAAIAAQIg");
	var mask_graphics_46 = new cjs.Graphics().p("Egi3AIRIAAwhMBFvAAAIAAQhg");
	var mask_graphics_47 = new cjs.Graphics().p("Egj8AIdIAAw5MBH5AAAIAAQ5g");
	var mask_graphics_48 = new cjs.Graphics().p("EglCAIpIAAxRMBKFAAAIAARRg");
	var mask_graphics_49 = new cjs.Graphics().p("EgmHAHlIAAxpMBMPAAAIAARpg");
	var mask_graphics_73 = new cjs.Graphics().p("EgmMAHMIAAuXMBMZAAAIAAOXg");
	var mask_graphics_74 = new cjs.Graphics().p("Egk4AHJIAAuRMBJxAAAIAAORg");
	var mask_graphics_75 = new cjs.Graphics().p("EgjjAHHIAAuNMBHHAAAIAAONg");
	var mask_graphics_76 = new cjs.Graphics().p("EgiPAHEIAAuHMBEfAAAIAAOHg");
	var mask_graphics_77 = new cjs.Graphics().p("Egg7AHBIAAuBMBB3AAAIAAOBg");
	var mask_graphics_78 = new cjs.Graphics().p("A/nG/IAAt9MA/PAAAIAAN9g");
	var mask_graphics_79 = new cjs.Graphics().p("A+SG8IAAt3MA8mAAAIAAN3g");
	var mask_graphics_80 = new cjs.Graphics().p("A8+G5IAAtxMA59AAAIAANxg");
	var mask_graphics_81 = new cjs.Graphics().p("A7qG2IAAtrMA3VAAAIAANrg");
	var mask_graphics_82 = new cjs.Graphics().p("A6WG0IAAtnMA0tAAAIAANng");
	var mask_graphics_83 = new cjs.Graphics().p("A5CGxIAAthMAyFAAAIAANhg");
	var mask_graphics_84 = new cjs.Graphics().p("A3tGuIAAtbMAvbAAAIAANbg");
	var mask_graphics_85 = new cjs.Graphics().p("A2ZGsIAAtXMAszAAAIAANXg");
	var mask_graphics_86 = new cjs.Graphics().p("A1FGpIAAtRMAqLAAAIAANRg");
	var mask_graphics_87 = new cjs.Graphics().p("AzxGmIAAtLMAnjAAAIAANLg");
	var mask_graphics_88 = new cjs.Graphics().p("AydGkIAAtHMAk7AAAIAANHg");
	var mask_graphics_89 = new cjs.Graphics().p("AxIGhIAAtBMAiRAAAIAANBg");
	var mask_graphics_90 = new cjs.Graphics().p("Av0GeIAAs7IfpAAIAAM7g");
	var mask_graphics_91 = new cjs.Graphics().p("AugGbIAAs1IdBAAIAAM1g");
	var mask_graphics_92 = new cjs.Graphics().p("AtMGZIAAsxIaZAAIAAMxg");
	var mask_graphics_93 = new cjs.Graphics().p("Ar3GWIAAsrIXvAAIAAMrg");
	var mask_graphics_94 = new cjs.Graphics().p("AqjGTIAAslIVHAAIAAMlg");
	var mask_graphics_95 = new cjs.Graphics().p("ApPGRIAAshISfAAIAAMhg");
	var mask_graphics_96 = new cjs.Graphics().p("An7GOIAAsbIP3AAIAAMbg");
	var mask_graphics_97 = new cjs.Graphics().p("AmmGLIAAsVINNAAIAAMVg");
	var mask_graphics_98 = new cjs.Graphics().p("AlSGJIAAsRIKlAAIAAMRg");
	var mask_graphics_99 = new cjs.Graphics().p("AOxCgIAAsLIH+AAIAAMLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-256.5,y:-71.9}).wait(1).to({graphics:mask_graphics_1,x:-253.9,y:-72.3}).wait(1).to({graphics:mask_graphics_2,x:-251.3,y:-72.7}).wait(1).to({graphics:mask_graphics_3,x:-248.7,y:-73.1}).wait(1).to({graphics:mask_graphics_4,x:-246.1,y:-73.5}).wait(1).to({graphics:mask_graphics_5,x:-243.5,y:-73.9}).wait(1).to({graphics:mask_graphics_6,x:-240.9,y:-74.3}).wait(1).to({graphics:mask_graphics_7,x:-238.2,y:-74.7}).wait(1).to({graphics:mask_graphics_8,x:-235.6,y:-75.1}).wait(1).to({graphics:mask_graphics_9,x:-233,y:-75.5}).wait(1).to({graphics:mask_graphics_10,x:-230.4,y:-75.9}).wait(1).to({graphics:mask_graphics_11,x:-227.8,y:-76.3}).wait(1).to({graphics:mask_graphics_12,x:-225.2,y:-76.7}).wait(1).to({graphics:mask_graphics_13,x:-222.6,y:-77.1}).wait(1).to({graphics:mask_graphics_14,x:-220,y:-77.5}).wait(1).to({graphics:mask_graphics_15,x:-217.4,y:-77.9}).wait(1).to({graphics:mask_graphics_16,x:-214.8,y:-78.3}).wait(1).to({graphics:mask_graphics_17,x:-212.2,y:-78.7}).wait(1).to({graphics:mask_graphics_18,x:-209.6,y:-79.1}).wait(1).to({graphics:mask_graphics_19,x:-207,y:-79.5}).wait(1).to({graphics:mask_graphics_20,x:-204.4,y:-79.8}).wait(1).to({graphics:mask_graphics_21,x:-201.8,y:-80.2}).wait(1).to({graphics:mask_graphics_22,x:-199.2,y:-80.7}).wait(1).to({graphics:mask_graphics_23,x:-196.5,y:-81}).wait(1).to({graphics:mask_graphics_24,x:-193.9,y:-81.4}).wait(1).to({graphics:mask_graphics_25,x:-193.9,y:-81.4}).wait(1).to({graphics:mask_graphics_26,x:-185.4,y:-81.1}).wait(1).to({graphics:mask_graphics_27,x:-176.9,y:-80.7}).wait(1).to({graphics:mask_graphics_28,x:-168.3,y:-80.3}).wait(1).to({graphics:mask_graphics_29,x:-159.8,y:-79.9}).wait(1).to({graphics:mask_graphics_30,x:-151.2,y:-79.6}).wait(1).to({graphics:mask_graphics_31,x:-142.7,y:-79.2}).wait(1).to({graphics:mask_graphics_32,x:-134.1,y:-78.8}).wait(1).to({graphics:mask_graphics_33,x:-125.6,y:-78.4}).wait(1).to({graphics:mask_graphics_34,x:-117.1,y:-78.1}).wait(1).to({graphics:mask_graphics_35,x:-108.5,y:-77.7}).wait(1).to({graphics:mask_graphics_36,x:-100,y:-77.3}).wait(1).to({graphics:mask_graphics_37,x:-91.4,y:-76.9}).wait(1).to({graphics:mask_graphics_38,x:-82.9,y:-76.6}).wait(1).to({graphics:mask_graphics_39,x:-74.4,y:-76.2}).wait(1).to({graphics:mask_graphics_40,x:-65.8,y:-75.8}).wait(1).to({graphics:mask_graphics_41,x:-57.3,y:-75.4}).wait(1).to({graphics:mask_graphics_42,x:-48.8,y:-75.1}).wait(1).to({graphics:mask_graphics_43,x:-40.2,y:-74.7}).wait(1).to({graphics:mask_graphics_44,x:-31.7,y:-74.3}).wait(1).to({graphics:mask_graphics_45,x:-23.1,y:-73.9}).wait(1).to({graphics:mask_graphics_46,x:-14.6,y:-73.6}).wait(1).to({graphics:mask_graphics_47,x:-6,y:-73.2}).wait(1).to({graphics:mask_graphics_48,x:2.5,y:-72.8}).wait(1).to({graphics:mask_graphics_49,x:11,y:-64.5}).wait(24).to({graphics:mask_graphics_73,x:1.5,y:-63.9}).wait(1).to({graphics:mask_graphics_74,x:11.7,y:-64.8}).wait(1).to({graphics:mask_graphics_75,x:21.8,y:-65.6}).wait(1).to({graphics:mask_graphics_76,x:32,y:-66.4}).wait(1).to({graphics:mask_graphics_77,x:42.1,y:-67.2}).wait(1).to({graphics:mask_graphics_78,x:52.3,y:-68}).wait(1).to({graphics:mask_graphics_79,x:62.5,y:-68.8}).wait(1).to({graphics:mask_graphics_80,x:72.6,y:-69.6}).wait(1).to({graphics:mask_graphics_81,x:82.8,y:-70.4}).wait(1).to({graphics:mask_graphics_82,x:92.9,y:-71.2}).wait(1).to({graphics:mask_graphics_83,x:103.1,y:-72}).wait(1).to({graphics:mask_graphics_84,x:113.2,y:-72.8}).wait(1).to({graphics:mask_graphics_85,x:123.4,y:-73.6}).wait(1).to({graphics:mask_graphics_86,x:133.5,y:-74.4}).wait(1).to({graphics:mask_graphics_87,x:143.7,y:-75.3}).wait(1).to({graphics:mask_graphics_88,x:153.8,y:-76.1}).wait(1).to({graphics:mask_graphics_89,x:164,y:-76.9}).wait(1).to({graphics:mask_graphics_90,x:174.1,y:-77.7}).wait(1).to({graphics:mask_graphics_91,x:184.3,y:-78.5}).wait(1).to({graphics:mask_graphics_92,x:194.5,y:-79.3}).wait(1).to({graphics:mask_graphics_93,x:204.6,y:-80.1}).wait(1).to({graphics:mask_graphics_94,x:214.8,y:-80.9}).wait(1).to({graphics:mask_graphics_95,x:224.9,y:-81.7}).wait(1).to({graphics:mask_graphics_96,x:235,y:-82.5}).wait(1).to({graphics:mask_graphics_97,x:245.2,y:-83.3}).wait(1).to({graphics:mask_graphics_98,x:255.3,y:-84.1}).wait(1).to({graphics:mask_graphics_99,x:145.5,y:-62}).wait(1));

	// 波浪
	this.instance_4 = new lib.line();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-228,-105);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// banner
	this.instance_5 = new lib.banner();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-492,-271);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492,-271,946,471);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner_1();
	this.instance.parent = this;
	this.instance.setTransform(473,238.3,1,1,0,0,0,-19,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 背景
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E28B1").ss(0.1,2,0,3).p("EhJ5gcuMCTzAAAMAAAA5dMiTzAAAg");
	this.shape.setTransform(477,238.3,1,1.281);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E28B1").s().p("EhJ5AcvMAAAg5dMCTzAAAMAAAA5dg");
	this.shape_1.setTransform(477,238.3,1,1.281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(473,237.3,951,473);
// library properties:
lib.properties = {
	width: 946,
	height: 471,
	fps: 24,
	color: "#2E28B7",
	opacity: 1.00,
	manifest: [
		{src:"http://www.ziroom.com/zhuanti/2017/haiyan/pc/js/images/banner.png?1494312061614", id:"banner"},
		{src:"http://www.ziroom.com/zhuanti/2017/haiyan/pc/js/images/eye.png?1494312061615", id:"eye"},
		{src:"http://www.ziroom.com/zhuanti/2017/haiyan/pc/js/images/line.png?1494312061615", id:"line"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;