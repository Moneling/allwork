$(function(){
	var files =[
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10013,fileName:"图片21",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10014,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10015,fileName:"图片134",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10016,fileName:"图片154",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10018,fileName:"图片1342",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10017,fileName:"图片1657",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10016,fileName:"图片fdg1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:10013,fileName:"图片1gfd",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:100112,fileName:"图片gdf1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:100143,fileName:"图片gfd1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001324,fileName:"图片vsd1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001534,fileName:"图片fsdf1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001543,fileName:"图片1fsd",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001534,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001345,fileName:"图片1vxc",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:100153,fileName:"图片1vcx",fileChilds:[{childID:001-001,childName:"图片001"}]},	
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	]

	var showStr ="";

		for(var i=0;i<files.length;i++){
				showStr +=`<div class="col-xs-4 col-md-3 col-lg-3  album">
									<a href="#" class="thumbnail" data-id=${files[i].fileID}>
										<img src="../images/wjj.jpg" alt="图片加载失败">
									</a>
									<h4>相册:${files[i].fileName}</h4>
								</div>`;
								}
	//$(".row").html(showStr)	
		

		$(".thumbnail").hover(
			function(){
						$(".showFileExplain").show();	
			},function () {
			$(".showFileExplain").hide();	
			})

		$(".album").click(function(){
			var id = $(this).attr("data-id");
			$.ajax({
				url:"",
				data:"",
				datatype:"json",
				type:"post",
				Cache:false,
				Async:true,
				success:function(data){
							console.log("请求成功....");
				},
				error:function(data){
					console.log("请求失败....");
				}
			})

		})

})