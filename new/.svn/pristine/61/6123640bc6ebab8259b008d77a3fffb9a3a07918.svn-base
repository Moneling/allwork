;(function(){
	//提示框
	function warn_(check_length){
		var html="<div class='material_mask'></div>";//创建遮罩层
		if(check_length==0){
		    $("body").append(html);
			 $("#alertmod_grid-table").show().find("#alertcnt_grid-table>div").text("请选择要操作的选项");
		}else if(check_length>1){
		    $("body").append(html);
             $("#alertmod_grid-table").show().find("#alertcnt_grid-table>div").text("只能选择一项操作");
		}
		
	}
	/*弹出框*/
	function material_add(title_txt){
		var html="<div class='material_mask'></div>";//创建遮罩层
		    $("body").append(html); //添加到页面 
		    $('#add_div').show();//弹出框显示
            $("#input-div").hide();
            $("#preview-div").hide();
			$(".file-input").show();
	}
	function material_edit(title_txt){
		var html="<div class='material_mask'></div>";//创建遮罩层
		    $("body").append(html); //添加到页面 
		    $('#edit_div').show();//弹出框显示
		    $("#input-div").show();
			$("#preview-div").hide();
			$(".file-input").hide();
	}
	function material_look(title_txt){
		var html="<div class='material_mask'></div>";//创建遮罩层
		    $("body").append(html); //添加到页面 
		    $('#look_div').show();//弹出框显示
		    $("#input-div").hide();
			$("#preview-div").show();
			$(".file-input").hide();
	}
	//表格里的按钮单击事件
	$("#grid-pager_left").on("click","td",function(){
	    var text=$(this).attr("data-original-title");  //获取被点击按钮的data-original-title属性的值
	    if(text=="增加权限"){	 //
	        material_add(text);
	    }else if(text=="查看权限"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l==1){
      			material_look(text);
      		}else if(che_l>1){
      			warn_(che_l);
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}else if(text=="修改权限"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l==1){
      			material_edit(text);
      		}else if(che_l>1){
      			warn_(che_l);
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}else if(text=="删除选项"){
      		var che_l=$("#grid-table").find("input:checked").length;
      		if(che_l>=1){
      			$("#delete_div").css("display","inline-block");
				var html="<div class='material_mask'></div>";
				 $("body").append(html); 
      		}else if(che_l==0){
      			warn_(che_l);
      		}
      	}		     
    })
	//弹出框关闭按钮
	$("#material-add-close,#reset_close>.cancel_btn").on("click",function(){
		$(".material_mask").remove();
		$("#add_div").hide();
	})
	$("#material-look-close,#single_close>.cancel_btn").on("click",function(){
		$(".material_mask").remove();
		$("#look_div").hide();
	})
	$("#material-edit-close,#sure_cancel>.cancel_btn").on("click",function(){
		$(".material_mask").remove();
		$("#edit_div").hide();
	})
	$("#material-prompt-close").on("click",function(){
		$(".material_mask").remove();
		$("#alertmod_grid-table").hide();
	})
	$("#material-delete-close,#delete_cancel>.cancel_btn").on("click",function(){
		$(".material_mask").remove();
		$("#delete_div").hide();
	})
	//编辑页的删除按钮
	$("#input-delete").on("click",function(){
		$("#input-div").hide();
		$(".file-input").show();
	})
})(jQuery)