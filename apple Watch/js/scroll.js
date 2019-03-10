var select_ = 1;
function isIE() { //ie?
     if (!!window.ActiveXObject || "ActiveXObject" in window)
            { return true; }
     else
            { return false; }
 }
if(isIE()==true){
	alert("推荐使用Chrome、Safari等支持webkit浏览器浏览此页。")
}else{
	
}
$(document).ready(function() {
		  $(".buy_select_btn").click(function(){
				 $(".buy_select_btn").removeClass("buy_check");
				if($(this).attr("value") == 1){
					$(this).addClass("buy_check");
					$("#shop_img").css({opacity:"0"});
					$("#L-price").html("3,199");
					$("#s-price").html("442‡");
					$("#shop_img").delay(100).animate({opacity:"1"});
					$("#shop_img").attr("src","images/40-alu-silver-sport-white-nc-s4-1up_GEO_CN.png");
					select_ = 1;
				}else{
					$(this).addClass("buy_check");
					$("#shop_img").css({opacity:"0"});
					$("#L-price").html("3,499");
					$("#s-price").html("483‡");
					$("#shop_img").delay(100).animate({opacity:"1"});
					$("#shop_img").attr("src","images/44-alu-silver-sport-white-nc-s4-1up_GEO_CN.png");
					select_ = 2;
				}
		  });
            $(window).scroll(function(){  
                var scrollPos=$(window).scrollTop();    
                if(scrollPos > 42){  
                    $(".lock_nav").addClass("lock_fixed");  
                    $(".nav_top").css("top","-42px"); 
                }else{  
                    $(".lock_nav").removeClass("lock_fixed");
					$(".nav_top").css("top","0px");
                } 
				//判断页面控制img的固定值
				if(scrollPos > 450){  
					$(".list_image").css("position","relative");
                    $(".list_image").css("top","350px"); 
                }else{  
					$(".list_image").css("position","fixed"); 
					$(".list_image").css("top",""); 
                }
            });  
			$(".buy_btn").click(function(){
				if(select_ == 1){
					$("#loading").css("display","block");
					setTimeout(function(){location.href="./buy/buy-order.html?item=40";}, 1200)
					
				}else{
					$("#loading").css("display","block")
					setTimeout(function(){location.href="./buy/buy-order.html?item=44";}, 1200)
				}
				
			});
        }); 