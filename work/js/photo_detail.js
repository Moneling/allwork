$(function(){
	var photos =[
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	]

	var showphotoStr ="";
		for(var i=0;i<photos.length;i++){
				showphotoStr +=`<div class="col-xs-6 col-md-4 col-lg-3  album" data-id="1001">
							 									<a href="#" class="thumbnail">
							 										<img src="../images/404.jpg" alt="图片加载失败" >
							 										<p class="del_photo" data-child-id="1001-001">
							 											<span> × </span>
							 										</p>
							 										
							 									</a>
							 									<h3>图片名称:${photos[i].fileName}</h3>
							 							</div>`;
								}
		

$(".photo_detail").html(showphotoStr);

		/*ajax 请求*/
		/*$(".album").click(function(){
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

		})*/

	

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


/*滚动加载图片*/
	$(".container").offset().top;
	console.log($(".container").offset().top);
	var photoArr=[];
	$("#showFilesBody").scroll(function() {

		var scrollHeight =parseInt($(".container").offset().top) ;
		var scrollBottomHeight = $(".container").height();
				console.log("scrollBottomHeight:"+scrollBottomHeight);
		var nowHeight =scrollBottomHeight+scrollHeight;
				console.log(nowHeight+"<<<<<<<<<<<<<<<<<");
		if(nowHeight<900){
				photos.push({fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1001,fileName:"图片1",fileChilds:[{childID:001-001,childName:"图片001"}]},
	{fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]})
  			alert("ffff")
  		};
	});

})

