;(function($){
  //弹出框显示
   $("#grid-pager_left").on("click","td",function(){
   	   var td_Text=$(this).attr('data-original-title');
        show_Reviewalert(td_Text);
   })
	function show_Reviewalert(datatitle){
		var checked_length=$("#grid-table").find("input:checked").length,
		    html=$("<div class='review_bg'></div>");
		    if(datatitle=="发布"){
		    	if(checked_length==1){
		    	  $.BombBox();							   
				}else if(checked_length==0){
				   $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
				}else if(checked_length>1){
		           $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("只能操作一项！");
				}
		    }else if(datatitle=="查看"){
		    	if(checked_length==1){			
				    $.BombBox({Id:"#reviewLook_alert",closeId:"#reviewLookClose_btn",cancel_btn:"#close_btn"});
				}else if(checked_length==0){
				  $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
				}else if(checked_length>1){
		           $.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("只能操作一项！");
				}
		    }else if(datatitle=="置无效"){
		    	if(checked_length==1){
		    		$.BombBox({Id:"#invalid_div",closeId:"#invalid_close",cancel_btn:"#invalid_cancel"})		    		
		    	}else if(checked_length==0){
		    		$.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
		    	}else if(checked_length>1){
		    		$.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("只能操作一项！");
		    	}
		    }else if(datatitle=="同步"){
		    	if(checked_length==1){
		    		//alert("aaaaa");
		    	}else if(checked_length==0){
		    		$.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
		    	}else if(checked_length>1){
		    		$.BombBox({Id:"#warn_div",closeId:"#warn_close_review"});
				   $("#warn_div").find("#alertcnt_grid-table>div").text("请选择要操作的选项！");
		    	}
		    }		
	}


})(jQuery)