
$(document).ready(function(){
	$("#questions").hide();
	$("#score").hide();


	//Audio controls
	var audio = new Audio("../TriviaGame/assets/audio/song.mp3");

	audio.play();
	audio.volume = 0.2;
	audio.loop = true;

	$("#music").on("click", function() {
		audio.play();
	});

	$("#mute").on("click", function (){
		audio.pause();
	});
});

//Timer and gameflow
var time = 61;

$("#start_button").on("click", function() {
	setInterval( function(){
		time -- ;
		$("#timer").html("Time: "+ time);
		if (time <= 10) {
			$("#timer").css({"color" : "red"})
		}
		if (time === 0) {
			$("#questions").hide();
			$("#results").html("Score:");
			$("#score").show();			
			getScore();
		}

	}, 1000);

	$("#start_button").hide();

	$("#questions").show();

});


//functions to check for incorrect or correct answers

function getAnswer(questionNumber){
    var radioName = document.getElementsByName(questionNumber);
    for (var j = 0; j < radioName.length; j++) {
    	if (radioName[j].checked === true) {
    		return(radioName[j].value);
    	}
    }
}      

function getScore(){
  var score = 0;
  for (var i = 1; i <= 10; i++)
    if(getAnswer("question" + i) === "correct")
    	score++;
		giveScore(score);
}

function giveScore(userScore){
	if (userScore <= 4) {
		$("#score").html(userScore + "/10");
		$("#score").append('<img src="assets/images/jerry.png">');
	}

	else if (userScore <= 8) {
		$("#score").html(userScore + "/10");
		$("#score").append('<img src="assets/images/morty.png">');		
	}
	else {
		$("#score").html(userScore + "/10");
		$("#score").append('<img src="assets/images/rick.png">');

	}
}


