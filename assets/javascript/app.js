$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeRemaining = 0;

    var timeRemaining;
    var timer = 20;



    $("#start-button").click(function () {
        console.log("here");
        $("#triviapage").removeClass("d-none");
        $("#welcome-page").addClass("d-none");
        timeRemaining = setInterval(function () {

            timer = timer - 1;

            if (timer === 0) {
                clearInterval(timeRemaining);
                $("#triviapage").addClass("d-none");
                $("#finishpage").removeClass("d-none");
                scoring();
            }

            console.log(timer);
            $("#timed").html("Time Remaining: " + timer);
        }, 1000);
    });

    $("#done").click(function (event) {
        event.preventDefault();
        clearInterval(timeRemaining);
        $("#triviapage").addClass("d-none");
        $("#finishpage").removeClass("d-none");
        scoring();

    });

    var questions = [{
        question: "The heart of a shrimp is located in its:",
        answers: ["Foot", "Abdomen", "Head"],
        correctAnswer: "Head"
    }, {
        question: "The amount of time it takes for a sloth to digest its food is:",
        answers: ["2 days", "2 weeks", "2 years"],
        correctAnswer: "2 weeks"
    }, {
        question: "Nearly 3 percent of ice in Antarctic glaciers is made of",
        answers: ["Penguin urine", "Fresh water", "CO2 in dry ice form"],
        correctAnswer: "Penguin urine"
    }];

    function scoring() {
        var answer1= $('input[name="q1"]:checked').val()
        var answer2= $('input[name="q2"]:checked').val()
        var answer3= $('input[name="q3"]:checked').val()
        console.log(answer2);
        console.log(questions[0].correctAnswer)
        if ( answer1 === questions[0].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }

        if (answer2 === questions[1].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }


        if (answer3 === questions[2].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }

        $("#correct-answers").text("Correct Answers: " + correct);
        $("#incorrect-answers").text("Incorrect Answers: " + incorrect);
    }



    $("#unanswered-questions").text("Unanswered: " + unanswered);
    $("#timed").text("Time Remaining: " + timer);

    setTimeout(function () {
        $("#timed").text("Time Remaining: " + timer);
    }, 1000);



});






