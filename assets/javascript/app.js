$(document).ready(function ()   {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeRemaining = 0;


var timer = 21; 

timeRemaining = setInterval(function(){ 

timer = timer-1;

if(timer == 0){ 
    clearInterval(timeRemaining);
 } 
console.log(timer);
$("#timed").html(timer);
}, 1000);

$("#start-button").click( function(){
    timeRemaining();
 });


$("#correct-answers").text("Correct Answers: " + correct);
$("#incorrect-answers").text("Incorrect Answers: " + incorrect);
$("#unanswered-questions").text("Unanswered: " + unanswered);
$("#timed").text("Time Remaining: ") + timer;


});


