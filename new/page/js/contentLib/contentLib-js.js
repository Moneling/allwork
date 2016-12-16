;(function(){
	//提示框
	function warn_(check_length){
		var html="<div class='content_mask'></div>";//创建遮罩层
		if(check_length==0){
		    $("body").append(html);
			 $("#alertmod_grid-table").show().find("#alertcnt_grid-table>div").text("请选择要操作的选项");
		}else if(check_length>1){
		    $("body").append(html);
             $("#alertmod_grid-table").show().find("#alertcnt_grid-table>div").text("只能选择一项操作");
		}
		
	}
	/*弹出框*/
	function content_add(){
		var html="<div class='content_mask'></div>";//创建遮罩层
		    $("body").append(html); //添加到页面 
		    $("#add_div").show();//弹出框显示
	}
	function content_edit(){
		var html="<div class='content_mask'></div>";//创建遮罩层
		    $("body").append(html); //添加到页面 
		    $("#edit_div").show();//弹出框显示
	}
	//表格里的按钮单击事件
	$("#grid-pager_left").on("click","td",function(){
	    var text=$(this).attr("data-original-title");  //获取被点击按钮的data-original-title属性的值
		var title=$(this).attr("data-title"); //获取被点击按钮的data-title属性的值
	    if(text=="增加权限"){	 //
	        content_add();
	    }else if(text=="查看权限"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l==1){
				var html="<div class='content_mask'></div>";
				$("body").append(html); 
            	$("#refresh_div").show();
      		}else if(che_l>1){
      			warn_(che_l);
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}else if(text=="修改权限"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l==1){
      			content_edit();
				// content_examine();
      		}else if(che_l>1){
      			warn_(che_l);
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}else if(text=="提交审核"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l==1){
      			alert("成功");
      		}else if(che_l>1){
      			warn_(che_l);
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}else if(text=="删除选项"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l>=1){
      			$("#delete_div").css("display","inline-block");
				var html="<div class='content_mask'></div>";
				 $("body").append(html); 
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}		     
    })
	//弹出框关闭按钮
	$("#content-add-close,#reset_close>.cancel_btn").on("click",function(){
		$(".content_mask").remove();
		$("#add_div").hide();
	})
	$("#content-edit-close,#sure_cancel>.cancel_btn").on("click",function(){
		$(".content_mask").remove();
		$("#edit_div").hide();
	})
	$("#content-refresh-close,#single_close>.cancel_btn").on("click",function(){
		$(".content_mask").remove();
		$("#refresh_div").hide();
	})
	$("#content-prompt-close").on("click",function(){
		$(".content_mask").remove();
		$("#alertmod_grid-table").hide();
	})
	$("#content-delete-close,#delete_cancel>.cancel_btn").on("click",function(){
		$(".content_mask").remove();
		$("#delete_div").hide();
	})
	//图片视频预览
	function videoAudio(){
		$(".ace-videos").on("click",".video_link",function(e){

			e.preventDefault();

			var srcUrl = $(this).attr("href");

			$("#main-container").after("<div id='video_mask'></div>");

			$("#video_mask").after("<div class='videoplayer'><video src='"+srcUrl+"'  controls='controls'></video></div>");
			
			$(".videoplayer").append("<span class='video_close'>x</span>");

			$(".video_close").on("click",function(){
					
					$("#video_mask").remove();
					
					$(".videoplayer").remove();
			
			})
	
	})

	$(".ace-thumbnails li").attr("class","");

	$(".ace-thumbnails").on("click",".video_select",function(){

		if($(this).parent().attr("class")==""){

			$(this).parent().attr("class","focus");

		}else{
			
			$(this).parent().removeClass("focus");

		}

	})
	
	}
	videoAudio();

})(jQuery)