(function(e,t) {
	function n(){function e(e){switch(e.type){case"touchstart": disY=e.changedTouches[0].clientY,s=0,e.preventDefault();
	break;case"touchend": function t(e){$(".box_"+i).removeClass("tb").addClass("ty"),setTimeout(function(){$(".box_"+i-1).hide(),$(".home_img").hide(),$(".box_"+i).find(".home_img").show()
},900)
}

function n() {
$(".box_"+i).show().removeClass("ty").addClass("tb"),
setTimeout(function(){$(".box_"+i).find(".home_img").show(),
$(".home"+i-0+1+"_text").hide()
},900)
}

if(s<-120)if(i<$(".j_wapper").size()) {
if(i==31)return!1;t(),i++
}

else i=1,$(".j_wapper").removeClass("ty").addClass("tb"),n();else s>120&&(i<=0?i=0:i--,n());break;case"touchmove":s=e.changedTouches[0].clientY-disY,e.preventDefault()
}}

var t=document.getElementsByTagName("body")[0],n=document.documentElement.clientHeight,r=document.documentElement.clientWidth,i=1,s;t&&(t.addEventListener("touchstart",e),t.addEventListener("touchend",e),t.addEventListener("touchmove",e));var o=document.getElementById("bgsound");o.addEventListener("ended",function() {
o.play()
},!1),$(".bgsoundsw").on("touchstart",function(e) {
$(this).children("dd").css("display")=="none"?$("#bgsound")[0].pause(): $("#bgsound")[0].play(),$(this).children().toggle()
});

var o=document.getElementById("bgsound");o.addEventListener("ended",function() {
setTimeout(function(){o.play()
},500)
},!1)
}


n()
$("#ten").on("touchstart",function(e) {
	window.location.href="http://bangniqian.com/wap/visa/do.jsp?method=toList&countryId=20";
});
})(window,undefined);