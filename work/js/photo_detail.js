$(function(){
	var photos =[
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	]

	var showphotoStr ="";
		for(var i=0;i<photos.length;i++){
				showphotoStr +=`<div class="col-xs-4 col-md-3 col-lg-3  album">
									<a href="#" class="thumbnail" data-id=${photos[i].fileID}>
										<img src="../images/wjj.jpg" alt="图片加载失败">
									</a>
									<h4>相册:${photos[i].fileName}</h4>
								</div>`;
								}
	//$(".row").html(showStr)	
		
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

	

	/*控制显示删除按钮*/
	$(".thumbnail").hover(
			function(){
						$(this).find(".del_photo").show();	
			},function () {
				$(this).find(".del_photo").hide();	
			})

/*删除图片*/
	$(".del_photo").click(function(){
			
		var photoID =$(".del_photo").attr("data-child-id");
				console.log(photoID);

	})

})