$(".btn").on("click", function() {
	$("#timer").html("Time: ");
	$("#questions").html("Question 1: ");
});


$("#music").on("click", function() {
	var audio = new Audio("../TriviaGame/assets/audio/song.mp3");
	audio.play();
});

$("#mute").on("click", function (){


});