if(getQueryVariable("item") == false ){
		alert("一个错误的访问提交\n" +"err to 'item="+getQueryVariable("item")+"'");
		location.href="../index.html";
	}
	if(getQueryVariable("item") == "40"){
		$("#z-price").html("3,199")
		$("#r-price").html("3,199")
		$("#item-name").html("40")
		$("#l-images").attr("src","../images/40-alu-silver-sport-white-nc-s4-1up_GEO_CN.png");
		//return 0;
	}
	if(getQueryVariable("item") == "44"){
		$("#z-price").html("3,499")
		$("#r-price").html("3,499")
		$("#item-name").html("44")
		$("#l-images").attr("src","../images/44-alu-silver-sport-white-nc-s4-1up_GEO_CN.png");
		//return 0;
	}
	if(getQueryVariable("item") != "44" && getQueryVariable("item") !="40"){
		alert("一个错误的访问提交\n" +"err to 'item="+getQueryVariable("item")+"'");
		location.href="../index.html";
		}
	function getQueryVariable(variable)
	{
		   var query = window.location.search.substring(1);
		   var vars = query.split("&");
		   for (var i=0;i<vars.length;i++) {
				   var pair = vars[i].split("=");
				   if(pair[0] == variable){return pair[1];}
		   }
		   return(false);
	}
	$(document).ready(function() {
		$(".buy_btn").click(function(){
			$(".load-ing-buy").css("display","block");
			setTimeout(function(){
				alert("创建订单失败！即将返回商品目录。");
				location.href="../index.html";
			},1200);
			
		});
	});