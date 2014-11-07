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


if(typeof $(".input-title").val() === 'string'){
	console.log("title");
	title = $(".input-title");
}

if(typeof $(".input-name").val() === 'string'){
	console.log("Name");
	name = $(".input-name");
}


function enableSubmitEventToDo(){
	if(title.val().length > 0){
		$("#submit").fadeIn();
	}else{
		$("#submit").fadeOut();
	}
}

function enableSubmitEventNewUser(){
	if(name.val().length > 0){
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

title.keyup(enableSubmitEventToDo);
name.keyup(enableSubmitEventNewUser);