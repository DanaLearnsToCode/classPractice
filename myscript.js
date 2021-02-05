$(document).ready(function() {
        $("#img").hide();
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#ptoggler").click(function(){
		$(".dissapear").toggle();
	});
  

 	$("#quiz").click(function(event){
          var number = event.target.id.slice(-1);
    $("#a"+ number).slideToggle("slow");
    $("#img"+ number).hide();
  });
	$("#a+ number").click(function(){
          
    $("#img"+ number).fadeToggle("slow");
  });
});
