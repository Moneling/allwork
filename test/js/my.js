/*$("p").addClass("test");*/
//$("div").css({"border":"solid pink 2px","boxSizing":"borderBox"}).add("p").css("background","green");

/*$( "li.third-item" ).prevAll().addBack()	//prevAll/nextAll 不加addBack()将不会显示该元素
  .css( "background-color", "red" );*/

  /*$("div ul li:nth-last-child(2)").addClass(getClass());*/
  /*$("div ul li:even").addClass(getClass());
  /*$("div ul li:odd").addClass(getClass1());

  function getClass(){
  	 return 'test test1';
  }
  function getClass1(){
  	 return ' test2';
  }*/

 /*$('ul li').addClass(2,function() {
  return 'test test1 ' + $(this).index();
});*/
/*	
	error
	console.log($( "div ul li" ));
$( "div ul li" ).addClass(function( index, currentClass ) {
  var addedClass;
 
  if ( currentClass === "red" ) {
    addedClass = "test1";
    $( "p" ).text( "There is one green div" ).addClass("test2");
  }
 
  return addedClass;
});*/

$(function(){
  $("p").after(function(){
    return "<div>" + this.className + "</div>";
  })
})()