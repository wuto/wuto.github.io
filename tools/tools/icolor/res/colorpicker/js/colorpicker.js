(function(b){var a=function(){var S={},c,N=65,t,P='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',B={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:true,flat:false},J=function(T,V){var U=j(T);b(V).data("colorpicker").fields.eq(1).val(U.r).end().eq(2).val(U.g).end().eq(3).val(U.b).end()},u=function(T,U){b(U).data("colorpicker").fields.eq(4).val(T.h).end().eq(5).val(T.s).end().eq(6).val(T.b).end()},g=function(T,U){b(U).data("colorpicker").fields.eq(0).val(R(T)).end()},l=function(T,U){b(U).data("colorpicker").selector.css("backgroundColor","#"+R({h:T.h,s:100,b:100}));b(U).data("colorpicker").selectorIndic.css({left:parseInt(150*T.s/100,10),top:parseInt(150*(100-T.b)/100,10)})},G=function(T,U){b(U).data("colorpicker").hue.css("top",parseInt(150-150*T.h/360,10))},h=function(T,U){b(U).data("colorpicker").currentColor.css("backgroundColor","#"+R(T))},E=function(T,U){b(U).data("colorpicker").newColor.css("backgroundColor","#"+R(T))},n=function(T){var V=T.charCode||T.keyCode||-1;if((V>N&&V<=90)||V==32){return false}var U=b(this).parent().parent();if(U.data("colorpicker").livePreview===true){e.apply(this)}},e=function(U){var V=b(this).parent().parent(),T;if(this.parentNode.className.indexOf("_hex")>0){V.data("colorpicker").color=T=m(y(this.value))}else{if(this.parentNode.className.indexOf("_hsb")>0){V.data("colorpicker").color=T=f({h:parseInt(V.data("colorpicker").fields.eq(4).val(),10),s:parseInt(V.data("colorpicker").fields.eq(5).val(),10),b:parseInt(V.data("colorpicker").fields.eq(6).val(),10)})}else{V.data("colorpicker").color=T=i(M({r:parseInt(V.data("colorpicker").fields.eq(1).val(),10),g:parseInt(V.data("colorpicker").fields.eq(2).val(),10),b:parseInt(V.data("colorpicker").fields.eq(3).val(),10)}))}}if(U){J(T,V.get(0));g(T,V.get(0));u(T,V.get(0))}l(T,V.get(0));G(T,V.get(0));E(T,V.get(0));V.data("colorpicker").onChange.apply(V,[T,R(T),j(T)])},o=function(T){var U=b(this).parent().parent();U.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},K=function(){N=this.parentNode.className.indexOf("_hex")>0?70:65;b(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus");b(this).parent().addClass("colorpicker_focus")},I=function(T){var V=b(this).parent().find("input").focus();var U={el:b(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:(this.parentNode.className.indexOf("_hsb")>0?100:255),y:T.pageY,field:V,val:parseInt(V.val(),10),preview:b(this).parent().parent().data("colorpicker").livePreview};b(document).bind("mouseup",U,s);b(document).bind("mousemove",U,L)},L=function(T){T.data.field.val(Math.max(0,Math.min(T.data.max,parseInt(T.data.val+T.pageY-T.data.y,10))));if(T.data.preview){e.apply(T.data.field.get(0),[true])}return false},s=function(T){e.apply(T.data.field.get(0),[true]);T.data.el.removeClass("colorpicker_slider").find("input").focus();b(document).unbind("mouseup",s);b(document).unbind("mousemove",L);return false},w=function(T){var U={cal:b(this).parent(),y:b(this).offset().top};U.preview=U.cal.data("colorpicker").livePreview;b(document).bind("mouseup",U,r);b(document).bind("mousemove",U,k)},k=function(T){e.apply(T.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,(T.pageY-T.data.y))))/150,10)).get(0),[T.data.preview]);return false},r=function(T){J(T.data.cal.data("colorpicker").color,T.data.cal.get(0));g(T.data.cal.data("colorpicker").color,T.data.cal.get(0));b(document).unbind("mouseup",r);b(document).unbind("mousemove",k);return false},x=function(T){var U={cal:b(this).parent(),pos:b(this).offset()};U.preview=U.cal.data("colorpicker").livePreview;b(document).bind("mouseup",U,A);b(document).bind("mousemove",U,q)},q=function(T){e.apply(T.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,(T.pageY-T.data.pos.top))))/150,10)).end().eq(5).val(parseInt(100*(Math.max(0,Math.min(150,(T.pageX-T.data.pos.left))))/150,10)).get(0),[T.data.preview]);
return false},A=function(T){J(T.data.cal.data("colorpicker").color,T.data.cal.get(0));g(T.data.cal.data("colorpicker").color,T.data.cal.get(0));b(document).unbind("mouseup",A);b(document).unbind("mousemove",q);return false},v=function(T){b(this).addClass("colorpicker_focus")},Q=function(T){b(this).removeClass("colorpicker_focus")},p=function(U){var V=b(this).parent();var T=V.data("colorpicker").color;V.data("colorpicker").origColor=T;h(T,V.get(0));V.data("colorpicker").onSubmit(T,R(T),j(T),V.data("colorpicker").el)},D=function(T){var X=b("#"+b(this).data("colorpickerId"));X.data("colorpicker").onBeforeShow.apply(this,[X.get(0)]);var Y=b(this).offset();var W=z();var V=Y.top+this.offsetHeight;var U=Y.left;if(V+176>W.t+W.h){V-=this.offsetHeight+176}if(U+356>W.l+W.w){U-=356}X.css({left:U+"px",top:V+"px"});if(X.data("colorpicker").onShow.apply(this,[X.get(0)])!=false){X.show()}b(document).bind("mousedown",{cal:X},O);return false},O=function(T){if(!H(T.data.cal.get(0),T.target,T.data.cal.get(0))){if(T.data.cal.data("colorpicker").onHide.apply(this,[T.data.cal.get(0)])!=false){T.data.cal.hide()}b(document).unbind("mousedown",O)}},H=function(V,U,T){if(V==U){return true}if(V.contains){return V.contains(U)}if(V.compareDocumentPosition){return !!(V.compareDocumentPosition(U)&16)}var W=U.parentNode;while(W&&W!=T){if(W==V){return true}W=W.parentNode}return false},z=function(){var T=document.compatMode=="CSS1Compat";return{l:window.pageXOffset||(T?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(T?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(T?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(T?document.documentElement.clientHeight:document.body.clientHeight)}},f=function(T){return{h:Math.min(360,Math.max(0,T.h)),s:Math.min(100,Math.max(0,T.s)),b:Math.min(100,Math.max(0,T.b))}},M=function(T){return{r:Math.min(255,Math.max(0,T.r)),g:Math.min(255,Math.max(0,T.g)),b:Math.min(255,Math.max(0,T.b))}},y=function(V){var T=6-V.length;if(T>0){var W=[];for(var U=0;U<T;U++){W.push("0")}W.push(V);V=W.join("")}return V},d=function(T){var T=parseInt(((T.indexOf("#")>-1)?T.substring(1):T),16);return{r:T>>16,g:(T&65280)>>8,b:(T&255)}},m=function(T){return i(d(T))},i=function(V){var U={h:0,s:0,b:0};var W=Math.min(V.r,V.g,V.b);var T=Math.max(V.r,V.g,V.b);var X=T-W;U.b=T;if(T!=0){}U.s=T!=0?255*X/T:0;if(U.s!=0){if(V.r==T){U.h=(V.g-V.b)/X}else{if(V.g==T){U.h=2+(V.b-V.r)/X}else{U.h=4+(V.r-V.g)/X}}}else{U.h=-1}U.h*=60;if(U.h<0){U.h+=360}U.s*=100/255;U.b*=100/255;return U},j=function(T){var V={};var Z=Math.round(T.h);var Y=Math.round(T.s*255/100);var U=Math.round(T.b*255/100);if(Y==0){V.r=V.g=V.b=U}else{var aa=U;var X=(255-Y)*U/255;var W=(aa-X)*(Z%60)/60;if(Z==360){Z=0}if(Z<60){V.r=aa;V.b=X;V.g=X+W}else{if(Z<120){V.g=aa;V.b=X;V.r=aa-W}else{if(Z<180){V.g=aa;V.r=X;V.b=X+W}else{if(Z<240){V.b=aa;V.r=X;V.g=aa-W}else{if(Z<300){V.b=aa;V.g=X;V.r=X+W}else{if(Z<360){V.r=aa;V.g=X;V.b=aa-W}else{V.r=0;V.g=0;V.b=0}}}}}}}return{r:Math.round(V.r),g:Math.round(V.g),b:Math.round(V.b)}},C=function(T){var U=[T.r.toString(16),T.g.toString(16),T.b.toString(16)];b.each(U,function(V,W){if(W.length==1){U[V]="0"+W}});return U.join("")},R=function(T){return C(j(T))},F=function(){var U=b(this).parent();var T=U.data("colorpicker").origColor;U.data("colorpicker").color=T;J(T,U.get(0));g(T,U.get(0));u(T,U.get(0));l(T,U.get(0));G(T,U.get(0));E(T,U.get(0))};return{init:function(T){T=b.extend({},B,T||{});if(typeof T.color=="string"){T.color=m(T.color)}else{if(T.color.r!=undefined&&T.color.g!=undefined&&T.color.b!=undefined){T.color=i(T.color)}else{if(T.color.h!=undefined&&T.color.s!=undefined&&T.color.b!=undefined){T.color=f(T.color)}else{return this}}}return this.each(function(){if(!b(this).data("colorpickerId")){var U=b.extend({},T);U.origColor=T.color;var W="collorpicker_"+parseInt(Math.random()*1000);b(this).data("colorpickerId",W);var V=b(P).attr("id",W);if(U.flat){V.appendTo(this).show()}else{V.appendTo(document.body)}U.fields=V.find("input").bind("keyup",n).bind("change",e).bind("blur",o).bind("focus",K);V.find("span").bind("mousedown",I).end().find(">div.colorpicker_current_color").bind("click",F);U.selector=V.find("div.colorpicker_color").bind("mousedown",x);U.selectorIndic=U.selector.find("div div");U.el=this;U.hue=V.find("div.colorpicker_hue div");V.find("div.colorpicker_hue").bind("mousedown",w);U.newColor=V.find("div.colorpicker_new_color");U.currentColor=V.find("div.colorpicker_current_color");V.data("colorpicker",U);V.find("div.colorpicker_submit").bind("mouseenter",v).bind("mouseleave",Q).bind("click",p);J(U.color,V.get(0));u(U.color,V.get(0));g(U.color,V.get(0));G(U.color,V.get(0));l(U.color,V.get(0));h(U.color,V.get(0));E(U.color,V.get(0));if(U.flat){V.css({position:"relative",display:"block"})}else{b(this).bind(U.eventName,D)}}})},showPicker:function(){return this.each(function(){if(b(this).data("colorpickerId")){D.apply(this)}})},hidePicker:function(){return this.each(function(){if(b(this).data("colorpickerId")){b("#"+b(this).data("colorpickerId")).hide()
}})},setColor:function(T){if(typeof T=="string"){T=m(T)}else{if(T.r!=undefined&&T.g!=undefined&&T.b!=undefined){T=i(T)}else{if(T.h!=undefined&&T.s!=undefined&&T.b!=undefined){T=f(T)}else{return this}}}return this.each(function(){if(b(this).data("colorpickerId")){var U=b("#"+b(this).data("colorpickerId"));U.data("colorpicker").color=T;U.data("colorpicker").origColor=T;J(T,U.get(0));u(T,U.get(0));g(T,U.get(0));G(T,U.get(0));l(T,U.get(0));h(T,U.get(0));E(T,U.get(0))}})}}}();b.fn.extend({ColorPicker:a.init,ColorPickerHide:a.hidePicker,ColorPickerShow:a.showPicker,ColorPickerSetColor:a.setColor})})(jQuery);