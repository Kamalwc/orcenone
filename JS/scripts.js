// Once the user starts the quiz, present the first question and start the countdown timer.
// When the user selects an answer, pause the quiz timer and let the user know if the answer right/wrong.
// If the user is wrong, subtract penalty time from the clock.
// After 2 seconds, proceed to the next question and resume the countdown timer.
// If the countdown timer reaches 0 the quiz is over.
// If the user answers all the questions the quiz is over.
// The user's score and initials are then saved after which the high scores will be displayed.
// Also provide a link straight to viewing the high scores page.


// start quiz button ONLCLICK start the timer count down and show the countdown
// at the end of the timer display PENCILS DOWN!
var startButtonEL = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var rightwrongEl = document.querySelector("#rightwrong");


var questions = [
    {
        title:"What color is is the Sky?",
        answer:"blue",
        choices: ["green", "white", "black", "red", "blue"]

    },
    {
        title:"1 + 1 = ?..",
        answer:"2",
        choices: ["4", "23", "1", "2"]
    },
    {
        title:"How many legs does a chair have?",
        answer:"4",
        choices:["4", "23", "1", "2"]
    }
];



startButtonEL.addEventListener("click",function(){

    questionEl.textContent = questions[i].title;
    for( var i = 0; i < choices.length; i++){
        var choice = document.createElement("li");
        questionEl.appendChild(choice);
        choice.textContent = questions[i].choice[i];
    }

    choicesEl.addEventListener("click", function(e){
        e.target.
    });
    if(questions[i].answer === e.target.value){
        rightwrongEl.textContent = "Correct!";
    }else{
        rightwrongEl.textContent = "Wrong!";

    }
    setTimeout(function(){
        alert("success");
    }, 2000);
});



function countdown(){

}