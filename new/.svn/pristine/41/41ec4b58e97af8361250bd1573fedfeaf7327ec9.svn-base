;(function($){
	BombBox=function(options){
		var defaultOption={
			Id:"#reviewPublish_alert",
			closeId:"#reviewPublishClose_btn",
			cancel_btn:"#cancel_btn"
		}
		var settingOption=$.extend({},defaultOption,options);
		this.bgNode=$("<div class='review_bg'></div>");
		$('body').append(this.bgNode);
		$(settingOption.Id).show();
		$(settingOption.closeId).on("click",function(){
			hide();
		})
		$(settingOption.cancel_btn).on("click",function(){
			hide();
		})
		function hide(){
			$(".review_bg").remove();
			$(settingOption.Id).hide();
		}
	}
	$.BombBox=function(options){
		return new BombBox(options);
	}
	/*Delete=function(options){
       var Defaultoptions={
       	  DeleteId:"#invalid_div",
       	  DeleteTitle:"置无效",
       	  DeleteText:"您确定要置无效吗？",
       	  Delete_CloseId:"#invalid_close",
       	  Delete_Cancel:"#eData"
       }
       var settingsOption=$.extend({},Defaultoptions,options);
       this.DeleteNode=$("<div class='ui-widget ui-widget-content ui-corner-all ui-jqdialog jqmID1 delete_div' id='invalid_div'>"+
			"<div class='ui-jqdialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix' id='delhdgrid-table' style='cursor: move;'>"+
				"<div class='widget-header'>"+
					"<span class='ui-jqdialog-title'>"+settingsOption.DeleteTitle+"</span>"+
					"<a class='ui-jqdialog-titlebar-close ui-corner-all' style='cursor:pointer;' id='invalid_close'>"+
						"<span class='ui-icon ui-icon-closethick'></span>"+
					"</a>"+
				"</div>"+
			"</div>"+
			"<div class='ui-jqdialog-content ui-widget-content'>"+
				"<div id='DelTbl_grid-table' class='formdata'>"+
					"<table class='DelTable'>"+
						"<tbody>"+
							"<tr>"+
								"<td class='delmsg'>"+settingsOption.DeleteText+"</td>"+
							"</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>"+
				"<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='DelTbl_grid-table_2'>"+
					"<tbody>"+
						"<tr>"+
							"<td>"+
								"<hr class='ui-widget-content' style='margin:1px'>"+
							"</td>"+
						"</tr>"+
						"<tr>"+
							"<td class='DelButton EditButton'>"+
								"<a id='dData' class='fm-button ui-state-default ui-corner-all fm-button-icon-left btn btn-sm btn-danger'>确定</a>"+
								"<a id='eData' class='fm-button ui-state-default ui-corner-all fm-button-icon-left btn btn-sm'>取消</a>"+
							"</td>"+
						"</tr>"+
					"</tbody>"+
				"</table>"+
			"</div>"+
		"</div>");
        this.delete_bg=$("<div class='review_bg'></div>");
        $("body").append(this.DeleteNode);
        $("body").append(this.delete_bg);
        $(settingsOption.Delete_CloseId).on("click",function(){
        	$(settingOptions.DeleteId).remove();
        	$(this.delete_bg).remove();
        })
         $(settingsOption.Delete_Cancel).on("click",function(){
        	$(settingsOption.DeleteId).remove();
        	$(this.delete_bg).remove();
        })
	}
	$.Delete=function(options){
		return new Delete(options);
	}*/
})(jQuery)