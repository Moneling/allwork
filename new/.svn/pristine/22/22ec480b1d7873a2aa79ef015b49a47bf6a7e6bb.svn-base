;(function($){
  //弹出框显示
   $("#grid-pager_left").on("click","td",function(){
   	   var td_Text=$(this).attr('data-original-title');
        show_Reviewalert(td_Text);
   })
	function show_Reviewalert(datatitle){
		var checked_length=$("#grid-table").find("input:checked").length,
		    html=$("<div class='review_bg'></div>");
		    if(datatitle=="多媒体审核"){
		    	if(checked_length==1){			
				    $.BombBox({Id:"#review_alert",closeId:"#review_close",cancel_btn:"#reviewcancel_btn"});
				}else if(checked_length==0){
				   $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
				}else if(checked_length>1){
		           $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("只能操作一项！");
				}
		    }else if(datatitle=="查看"){
		    	if(checked_length==1){			
				    $.BombBox({Id:"#reviewLook_alert",closeId:"#reviewLook_close",cancel_btn:"#review_look_btn"});
				}else if(checked_length==0){
				   $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
				}else if(checked_length>1){
		           $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("只能操作一项！");
				}
		    }		
	}

})(jQuery)