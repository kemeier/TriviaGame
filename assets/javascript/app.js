$(document).ready(function ()   {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeRemaining = 0;


var timer = 21; 

a = setInterval(function(){ 

timer = timer-1;

if(timer == 0){ 
    clearInterval(a);
 } 
console.log(timer);
}, 1000);


$("#start-button").click( function(){

 });



$("#correct-answers").text("Correct Answers: " + correct);
$("#incorrect-answers").text("Incorrect Answers: " + incorrect);
$("#unanswered-questions").text("Unanswered: " + unanswered);
$("#time-remaining").text("Time Remaining: ") + timeRemaining;


});


function startTimer(){
    var counter = 5;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  
  $("#startClock").click(function(){
      startTimer();
  });