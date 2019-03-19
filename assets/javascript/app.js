$(document).ready(function() {

//Trivia Object
var defaultStat = {
    seconds: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timerOn: false
};


//Function for Timer
function startGame() {
    defaultStat.correct = 0;
    defaultStat.incorrect = 0;
    defaultStat.unanswered = 0;
    clearInterval(trivia.seconds);
}

//Timer function
function startTimer() {
    var seconds = 30;
    var interval = setInterval(function() {
        $("#timerDisplay").text = seconds;
        seconds--;
    
        if (seconds <= 0)
        {
            clearInterval(interval);
            $("#end").show();
        }
    }, 1000);

};

//Hide questions and end game

$("#questions").hide();
$("#end").hide();


//On click event to start game

$("#start").on("click", function(){
    $("#questions").show();
    $("#instructions").hide();
    $("#start").hide();
    startTimer();
});




});