!function(s){"use strict";var e={};function t(){var a,o,i,d,e,r,g,n,l;f(),s(".edgtf-blog-holder.edgtf-blog-type-masonry").length&&((a=s(".edgtf-blog-holder.edgtf-blog-type-masonry")).waitForImages({finished:function(){a.isotope({itemSelector:"article",resizable:!1,masonry:{columnWidth:".edgtf-blog-masonry-grid-sizer",gutter:".edgtf-blog-masonry-grid-gutter"}}),setTimeout(function(){a.addClass("edgtf-appeared"),a.isotope("layout")},400)},waitForAll:!0}),o=s(".edgtf-filter-blog-holder"),s(".edgtf-filter").on("click",function(){var e=s(this),t=e.attr("data-filter");return o.find(".edgtf-active").removeClass("edgtf-active"),e.addClass("edgtf-active"),a.isotope({filter:t}),!1})),s(".edgtf-blog-holder.edgtf-blog-type-masonry").length&&((i=s(".edgtf-blog-holder.edgtf-blog-type-masonry")).hasClass("edgtf-masonry-pagination-infinite-scroll")?(d=1,s(".edgtf-blog-infinite-scroll-button a").appear(function(e){e.preventDefault();var a,o=s(".edgtf-blog-infinite-scroll-button a"),e=o.attr("href"),r=".edgtf-blog-infinite-scroll-button a";s(r).attr("href");o.css("visibility","visible"),o.text(edgtfGlobalVars.vars.edgtfMessage),s.get(e+"",function(e){var t=s(".edgtf-masonry-pagination-infinite-scroll",e).wrapInner("").html();a=s(r,e).attr("href"),i.append(t).waitForImages(function(){edgtf.modules.blog.edgtfInitAudioPlayer(),edgtf.modules.common.edgtfSlickSlider(),edgtf.modules.common.edgtfFluidVideo(),i.isotope("reloadItems").isotope({sortBy:"original-order"}),s(".edgtf-masonry-pagination-load-more").isotope("layout")}),o.parent().data("rel")>d?(o.attr("href",a),o.css("visibility","hidden")):(o.text(edgtfGlobalVars.vars.edgtfFinishedMessage),setTimeout(function(){o.parent().fadeOut(600,function(){o.parent().remove()})},600))}),d++},{one:!1,accX:0,accY:edgtfGlobalVars.vars.edgtfElementAppearAmount})):i.hasClass("edgtf-masonry-pagination-load-more")&&(d=1,s(".edgtf-blog-load-more-button a").on("click",function(e){e.preventDefault();var a,o=s(this),e=o.attr("href"),r=".edgtf-blog-load-more-button a";s(r).attr("href");s.get(e+"",function(e){var t=s(".edgtf-masonry-pagination-load-more",e).wrapInner("").html();a=s(r,e).attr("href"),i.append(t).isotope("reloadItems").isotope({sortBy:"original-order"}),edgtf.modules.blog.edgtfInitAudioPlayer(),edgtf.modules.common.edgtfSlickSlider(),edgtf.modules.common.edgtfFluidVideo(),setTimeout(function(){s(".edgtf-masonry-pagination-load-more").isotope("layout")},400),o.parent().data("rel")>d?o.attr("href",a):o.parent().remove()}),d++}))),(e=s(".edgtf-blog-holder.edgtf-blog-load-more:not(.edgtf-blog-type-masonry)")).length&&e.each(function(){var a,o=s(this),r=o.find(".edgtf-load-more-ajax-pagination .edgtf-btn"),i=o.data("max-pages");r.on("click",function(e){e.preventDefault(),e.stopPropagation();var e=function(e){var t={nextPage:"",number:"",category:"",blogType:"",archiveCategory:"",archiveAuthor:"",archiveTag:"",archiveDay:"",archiveMonth:"",archiveYear:""};void 0!==e.data("next-page")&&!1!==e.data("next-page")&&(t.nextPage=e.data("next-page"));void 0!==e.data("post-number")&&!1!==e.data("post-number")&&(t.number=e.data("post-number"));void 0!==e.data("category")&&!1!==e.data("category")&&(t.category=e.data("category"));void 0!==e.data("blog-type")&&!1!==e.data("blog-type")&&(t.blogType=e.data("blog-type"));void 0!==e.data("archive-category")&&!1!==e.data("archive-category")&&(t.archiveCategory=e.data("archive-category"));void 0!==e.data("archive-author")&&!1!==e.data("archive-author")&&(t.archiveAuthor=e.data("archive-author"));void 0!==e.data("archive-tag")&&!1!==e.data("archive-tag")&&(t.archiveTag=e.data("archive-tag"));void 0!==e.data("archive-day")&&!1!==e.data("archive-day")&&(t.archiveDay=e.data("archive-day"));void 0!==e.data("archive-month")&&!1!==e.data("archive-month")&&(t.archiveMonth=e.data("archive-month"));void 0!==e.data("archive-year")&&!1!==e.data("archive-year")&&(t.archiveYear=e.data("archive-year"));return t}(o),t=(a=e.nextPage,thisHolder.find('input[name*="edgtf_blog_load_more_nonce_"]'));e.blog_load_more_id=t.attr("name").substring(t.attr("name").length-4,t.attr("name").length),e.blog_load_more_nonce=t.val(),a<=i&&(t={action:"silverscreen_edge_blog_load_more",nextPage:e.nextPage,number:e.number,category:e.category,blogType:e.blogType,archiveCategory:e.archiveCategory,archiveAuthor:e.archiveAuthor,archiveTag:e.archiveTag,archiveDay:e.archiveDay,archiveMonth:e.archiveMonth,archiveYear:e.archiveYear},s.ajax({type:"POST",data:t,url:EdgefAjaxUrl,success:function(e){a++,o.data("next-page",a);var t=s.parseJSON(e).html;o.waitForImages(function(){o.find("article:last").after(t),setTimeout(function(){edgtf.modules.blog.edgtfInitAudioPlayer(),edgtf.modules.common.edgtfOwlSlider(),edgtf.modules.common.edgtfFluidVideo()},400)})}})),a===i&&r.hide()})}),s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery").length&&(c(s(".edgtf-blog-masonry-gallery-grid-sizer").width()),(r=s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery")).isotope({itemSelector:"article",resizable:!1,masonry:{columnWidth:".edgtf-blog-masonry-gallery-grid-sizer",gutter:".edgtf-blog-masonry-gallery-grid-gutter"}}),g=s(".edgtf-filter-blog-holder"),s(".edgtf-filter").on("click",function(){var e=s(this),t=e.attr("data-filter");return g.find(".edgtf-active").removeClass("edgtf-active"),e.addClass("edgtf-active"),r.isotope({filter:t}),!1}),r.waitForImages(function(){r.animate({opacity:"1"},300,function(){r.isotope("layout")})}),s(window).resize(function(){c(s(".edgtf-blog-masonry-gallery-grid-sizer").width()),r.isotope("layout")})),s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery").length&&((n=s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery")).hasClass("edgtf-masonry-pagination-infinite-scroll")?(l=1,s(".edgtf-blog-infinite-scroll-button a").appear(function(e){e.preventDefault();var a,o=s(".edgtf-blog-infinite-scroll-button a"),e=o.attr("href"),r=".edgtf-blog-infinite-scroll-button a";s(r).attr("href");o.css("visibility","visible"),o.text(edgtfGlobalVars.vars.edgtfMessage),s.get(e+"",function(e){var t=s(".edgtf-masonry-pagination-infinite-scroll",e).wrapInner("").html();a=s(r,e).attr("href"),n.append(t).waitForImages(function(){n.isotope("reloadItems").isotope({sortBy:"original-order"}),edgtf.modules.blog.edgtfInitAudioPlayer(),edgtf.modules.common.edgtfSlickSlider(),edgtf.modules.common.edgtfFluidVideo(),c(s(".edgtf-blog-masonry-gallery-grid-sizer").width()),setTimeout(function(){n.isotope("layout")},400)}),o.parent().data("rel")>l?(o.attr("href",a),o.css("visibility","hidden")):(o.text(edgtfGlobalVars.vars.edgtfFinishedMessage),setTimeout(function(){o.parent().fadeOut(600,function(){o.parent().remove()})},600))}),l++},{one:!1,accX:0,accY:edgtfGlobalVars.vars.edgtfElementAppearAmount})):n.hasClass("edgtf-masonry-pagination-load-more")&&(l=1,s(".edgtf-blog-load-more-button a").on("click",function(e){e.preventDefault();var a,o=s(this),r=o.siblings("a"),e=o.attr("href"),i=".edgtf-blog-load-more-button a";s(i).attr("href");s.get(e+"",function(e){var t=s(".edgtf-masonry-pagination-load-more",e).wrapInner("").html();a=s(i,e).attr("href"),n.append(t).isotope("reloadItems").isotope({sortBy:"original-order"}),edgtf.modules.blog.edgtfInitAudioPlayer(),edgtf.modules.common.edgtfSlickSlider(),edgtf.modules.common.edgtfFluidVideo(),c(s(".edgtf-blog-masonry-gallery-grid-sizer").width()),setTimeout(function(){n.isotope("layout")},400),o.parents(".edgtf-blog-load-more-button").data("rel")>l?(o.attr("href",a),r.attr("href",a)):o.parents(".edgtf-blog-load-more-button").remove()}),l++})),s(window).resize(function(){c(s(".edgtf-blog-masonry-gallery-grid-sizer").width()),n.isotope("reloadItems")}))}function a(){}function o(){}function r(){}function f(){s("audio.edgtf-blog-audio").mediaelementplayer({audioWidth:"100%"})}function c(e){var t=s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery .edgtf-masonry-gallery-item-large-height"),a=s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery .edgtf-masonry-gallery-item-large-width"),o=s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery .edgtf-masonry-gallery-item-large-width-height"),r=s(".edgtf-blog-holder.edgtf-blog-type-masonry-gallery .edgtf-masonry-gallery-item-default");t.css("height",2*e),a.css("height",e),o.css("height",2*e),edgtf.windowWidth<480&&(o.css("height",e),t.css("height",2*e),a.css("height",e/2)),r.css("height",e)}(edgtf.modules.blog=e).edgtfInitAudioPlayer=f,e.edgtfOnDocumentReady=t,e.edgtfOnWindowLoad=a,e.edgtfOnWindowResize=o,e.edgtfOnWindowScroll=r,s(document).ready(t),s(window).on("load",a),s(window).resize(o),s(window).scroll(r)}(jQuery);