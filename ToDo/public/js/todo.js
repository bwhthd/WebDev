$("#submit").hide();

$(".details").hide();
$(".input-form").hide();
$("li").click(function(){
	if($(this).hasClass("new")){
		$(this).find("h2").hide();
		$(".input-form").fadeIn();
	}
	$(this).find(".details").toggle("fast");
});

title = $(".input-title")


function enableSubmitEvent(){
	if(title.val().length > 0){
		$("#submit").fadeIn();
	}else{
		$("#submit").fadeOut();
	}
}

title.keyup(enableSubmitEvent);