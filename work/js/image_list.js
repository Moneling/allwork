$(function(){
	var imgArr =[]
loadImages()
function loadImages(){

	$.ajax({
		url:"",
		data:"",
		type:"post",
		datatype:"json",
		Async:true,
		Cache:false,
		success:function(){
			var newArr =[
			{
			"visitName": "1",
			"visitManager": "",
			"sumName": "10",
			"sumup": "10",
			"batchId": "UEC201407301102261",
			"interpreter": "323232",
			"outTime": "2016-06-25 15:11:54",
			"jpjclist": []
		},
		{
			"visitName": "2",
			"visitManager": "",
			"sumName": "10",
			"sumup": "10",
			"batchId": "UEC201407301102261",
			"interpreter": "323232",
			"outTime": "2016-06-25 15:11:54",
			"jpjclist": []
		}		
		];
		var images =imgArr.concat(newArr);

		var showimagestr ="";
		for(var i=0;i<images.length;i++){
			showimagestr +='<div class="col-xs-4 col-md-3 col-lg-3  album" data-id="1001">'+
			'<a href="#" class="thumbnail" data-id='+images[i].batchId+'>'
			+'<img src="../images/404.jpg" alt="图片加载失败">'
			+'<p class="del_photo" data-child-id="1001-001">'
			+'<span> × </span></p>'
			+'</a>'
			+'<h4>图片名称:'+images[i].visitName+'</h4>'
			+'</div>';
		}
		//添加图片元素到页面
		$(".photo_detail").html(showimagestr);

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


		},
		error:function(){
			console.log("请求失败...");
		}
	})
}



	





	


	/*滚动加载图片*/
	/*$(".container").offset().top;
	//console.log($(".container").offset().top);
	var photoArr=[];
	$("#showFilesBody").scroll(function() {
		var scrollHeight =parseInt($(".container").offset().top) ;
		var scrollBottomHeight = $(".container").height();
				//console.log("scrollBottomHeight:"+scrollBottomHeight);
				var nowHeight =scrollBottomHeight+scrollHeight;
				var newArr =[
				{fileID:1002,fileName:"图片11fffff",fileChilds:[{childID:001-001,childName:"图片001"}]},
				{fileID:1002,fileName:"图片11fffff",fileChilds:[{childID:001-001,childName:"图片001"}]}
				]
				if(nowHeight<900){
					console.log(images.length+":::::::::::::::::::::::::");
		// images.push({fileID:1002,fileName:"图片11",fileChilds:[{childID:001-001,childName:"图片001"}]})
		images.concat(newArr)
	};
	});*/


	
})
