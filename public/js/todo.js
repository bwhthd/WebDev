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
name = $(".input-name")


function enableSubmitEvent(){
	if(this.val().length > 0){
		$("#submit").fadeIn();
	}else{
		$("#submit").fadeOut();
	}
}

$(".signup").click(
	function(){
		$(".signup h2").fadeOut();
		$(".input-form").fadeIn();
	} 
);

title.keyup(enableSubmitEvent);
name.keyup(enableSubmitEvent);