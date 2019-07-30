$(document).ready(function ()   {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeRemaining = 0;


var timer = 21; 

timeRemaining = setInterval(function(){ 

timer = timer-1;

if(timer === 0){ 
    clearInterval(timeRemaining);
 } 
console.log(timer);
$("#timed").html("Time Remaining: " + timer);
}, 1000);

$("#start-button").click( function(){
    timeRemaining();
 });

 var questions =[{ 
	question:"The heart of a shrimp is located in its:" ,
	answers:["Foot", "Abdomen", "Head"],
	correctAnswer:"Head"
}, {
	question:"The amount of time it takes for a sloth to digest its food is:" ,
	answers:["2 days", "2 weeks", "2 years"],
	correctAnswer:"2 weeks"
}, {
	question:"Nearly 3 percent of ice in Antarctic glaciers is made of" ,
	answers:["Penguin urine", "Fresh water", "CO2 in dry ice form"],
	correctAnswer:"Penguin urine"
}];


$.each($('input[name="question-1"]:checked'), function(){ 
    if($(this).val()=== questions[0].correctAnswer){
        correct++;
    } else { 
        incorrect++;
    }
    console.log(this.value);
});

$.each($('input[name="question-2"]:checked'), function(){ 
    if($(this).val()=== questions[1].correctAnswer){
        correct++;
    } else { 
        incorrect++;
    }
    console.log(this.value);
});


$.each($('input[name="question-3"]:checked'), function(){ 
    if($(this).val()=== questions[2].correctAnswer){
        correct++;
    } else { 
        incorrect++;
    }
    console.log(this.value);
});



$("#correct-answers").text("Correct Answers: " + correct);
$("#incorrect-answers").text("Incorrect Answers: " + incorrect);
$("#unanswered-questions").text("Unanswered: " + unanswered);
$("#timed").text("Time Remaining: " + timer);



});






