$(document).ready(function() {

	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
  

 	$("#quiz").click(function(event){
          var number = event.target.id.slice(-1);
    $("#a"+ number).slideToggle("slow");
  });
	$("#quiz").click(function(event){
          var number = event.target.id.slice(-1);
    $("#img"+ number).fadeToggle("slow");
  });
});
