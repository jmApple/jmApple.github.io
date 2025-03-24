define(function(require){"use strict";var imagesLoaded=require("imagesloaded"),helpers=require("helpers");return function(){var self={settings:{minimumSlideshowAspect:.4,maximumSlideshowAspect:.75},cacheDom:function(){self.dom={};self.dom.html=$("html");self.dom.window=$(window);self.dom.mainHeader=$(".primary-header");self.dom.carouselConfiguration=$("#carousel-configuration");self.dom.slideshowContainer=$(".homepage-slideshow-wrapper");self.dom.slideshowLeft=$("#homepage-slideshow-left");self.dom.slideshowRight=$("#homepage-slideshow-right");self.dom.slidesLeft=self.dom.slideshowLeft.find(".carousel-slide");self.dom.slidesRight=self.dom.slideshowRight.find(".carousel-slide");self.dom.initialImages={tablet:{left:self.dom.slidesLeft.find(".tablet"),right:self.dom.slidesRight.find(".tablet")},desktop:{left:self.dom.slidesLeft.find(".desktop"),right:self.dom.slidesRight.find(".desktop")},desktopRetina:{left:self.dom.slidesLeft.find(".retina"),right:self.dom.slidesRight.find(".retina")}}},setModel:function(){var configuration=helpers.parsePageDataJSON(self.dom.carouselConfiguration).HomepageSlideshowConfiguration;self.model=$.extend({},configuration);self.model.rendered=false;self.model.isPageEditor=helpers.isPageEditor();self.model.slides={left:{active:-1,duration:function(){return self.model.transitionLeft+self.model.leftFadeTime},fade:self.model.leftFadeTime,slides:self.dom.slidesLeft,len:self.dom.slidesLeft.length,timer:null},right:{active:-1,duration:function(){return self.model.transitionRight+self.model.rightFadeTime+self.model.rightStaggerTime},fade:self.model.rightFadeTime,slides:self.dom.slidesRight,len:self.dom.slidesRight.length,timer:null}}},setViewport:function(){var viewport="mobile",breakpoints=[{type:"tablet",query:Modernizr.mq("only all and (min-width: 768px) and (max-width: 1023px)")},{type:"desktop",query:Modernizr.mq("only all and (min-width: 1024px)")},{type:"desktopRetina",query:Modernizr.mq("only all and (min-width: 1024px)")&&self.dom.html.hasClass("modernizr-hires")}];breakpoints.forEach(function(item){if(item.query){viewport=item.type;return}});self.model.viewport=viewport},init:function(){self.cacheDom();self.setModel();self.setDims();self.applyConfiguredStyles();self.attachHandlers();self.startSlideshow();return self},applyConfiguredStyles:function(){var slides=Object.keys(self.model.slides);slides.forEach(function(slide){var model=self.model.slides[slide];model.slides.css({"-webkit-transition-duration":model.fade+"ms","-moz-transition-duration":model.fade+"ms","-ms-transition-duration":model.fade+"ms","-o-transition-duration":model.fade+"ms","transition-duration":model.fade+"ms"})})},startSlideshow:function(){var slides=Object.keys(self.model.slides);slides.forEach(function(slide){self.slideTimer(slide,true)})},slideTimer:function(slide,initial){var model=self.model.slides[slide],recursiveAnimation=function(){if(!self.model.isPageEditor&&model.len>1){model.timer=setTimeout(function(){self.animateSlide(model);self.slideTimer(slide,false)},model.duration())}};if(initial){self.dom.window.on("initialSlidesReady",function(){self.animateSlide(model)});self.dom.window.on("remainingSlidesReady",recursiveAnimation)}else{self.model.rightStaggerTime=0;recursiveAnimation()}},animateSlide:function(model){var newIndex=model.active+1>=model.len?0:model.active+1;model.slides.eq(model.active).removeClass("active");model.slides.eq(newIndex).addClass("active");model.active=newIndex},attachHandlers:function(){self.dom.window.on("resize",self.setDims)},setDims:function(){var height=self.slideshowHeight();self.setViewport();if(self.model.viewport==="desktop"||self.model.viewport==="desktopRetina"){self.dom.slideshowContainer.css({height:height})}else{self.dom.slideshowContainer.css({height:"auto"})}self.render()},render:function(){if(!self.model.rendered){self.loadInitialImages()}},loadInitialImages:function(){var needsPreload=Object.keys(self.dom.initialImages);if(needsPreload.indexOf(self.model.viewport)>=0){var imagesToPreload=function(){var images;self.model.imagesToPreload=self.dom.initialImages[self.model.viewport];images=[self.model.imagesToPreload.left.eq(0).data("imagePath"),self.model.imagesToPreload.right.eq(0).data("imagePath")];images=images.filter(function(value){return value!==undefined&&value!==null&&value!==""});return images}();imagesLoaded(imagesToPreload,self.initialImagesLoaded)}else{self.dom.slideshowContainer.addClass("rendered");self.model.rendered=true}},loadRemainingImages:function(){var imagesToPreload=function(){var left=self.model.imagesToPreload.left.splice(1,self.model.imagesToPreload.left.length-1),right=self.model.imagesToPreload.right.splice(1,self.model.imagesToPreload.right.length-1),els=left.concat(right),images=[];els.forEach(function(el){images.push($(el).data("imagePath"))});return images}();imagesLoaded(imagesToPreload,self.remainingImagesLoaded)},initialImagesLoaded:function(){self.dom.slideshowContainer.addClass("rendered");self.model.rendered=true;self.loadRemainingImages();self.dom.window.trigger("initialSlidesReady")},remainingImagesLoaded:function(){self.dom.window.trigger("remainingSlidesReady")},slideshowHeight:function(){if(self.model.isPageEditor){return"auto"}var winWidth=self.dom.window.width(),winHeight=self.dom.window.height(),minHeight=winWidth*self.settings.minimumSlideshowAspect,maxHeight=winWidth*self.settings.maximumSlideshowAspect,carouselHeight=winHeight-self.dom.mainHeader.outerHeight();if(carouselHeight<minHeight){carouselHeight=minHeight}else if(carouselHeight>maxHeight){carouselHeight=maxHeight}return carouselHeight}};return self.init()}()});
