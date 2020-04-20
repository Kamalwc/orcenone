
var startButtonEL = document.querySelector("#start");

var rightwrongEl = document.querySelector("#rightwrong");
var testContentEL = document.querySelector(".testContent");
var timeEl = document.querySelector("#time");
var score;
var time  = 75;





var questions = [
    {
        title:"What symbol do you use to terminate a line in Javascript?",
        answer:"semi-colon",
        choices: ["colon", "period", "comma", "none", "semi-colon"]

    },
    {
        title:"What symbol do you use to select elements with ID's",
        answer:"hashtag",
        choices: ["hashtag", "curly braces", "semi-colon", "less than sign"]
    },
    {
        title:"Which tag is NOT a block level element",
        answer:"<span></span>",
        choices:["<div></div>", "<p></p>", "<span></span>", "<h1></h1>", "<h2></h2>"]
    },
    {
        title:"Which attribute do you use to link to another html page?",
        answer:"href",
        choices:["id", "src", "class", "name", "href"]
    },
    {
        title:"Which Keyword is NOT used to declare variables?",
        answer:"int",
        choices:["let", "var", "int", "const"]
    }
];

var questionElm;
var choicesElm;
var correctOrWrongElm;
var submitButtonElm;

var i = 0;
var timeInterval;
var correctCount = 0;
var scores = [];
var score;


var scoreList;
var initialList;
var tscore = document.querySelector("#tscore");
var tinitial = document.querySelector("#tinitial");

localStorage.setItem('scores', scores.toString());


startButtonEL.addEventListener("click",function(){

    timeInterval = setInterval(timeUpdate, 1000);

    testContentEL.innerHTML = "";
    var p = document.createElement("p")
    var p2 = document.createElement("p")
    var ul = document.createElement("ul");
    testContentEL.appendChild(p);
    testContentEL.appendChild(ul);
    testContentEL.appendChild(p2);


    p.setAttribute("id","question");
    ul.setAttribute("id","choices");
    p2.setAttribute("id","cw");

   
    questionElm = document.querySelector("#question");
    choicesElm = document.querySelector("#choices");
    correctOrWrongElm = document.querySelector("#cw");

    qc(i);
});

function qc(i){
    questionElm.textContent = questions[i].title;

    for( var j = 0; j < questions[i].choices.length; j++){
        var choice = document.createElement("li");
        choice.textContent = questions[i].choices[j];
        choice.setAttribute("data-index",questions[i].choices[j] ) //!!!!
        choice.setAttribute("class","font");
        choice.setAttribute("class", "lis");


        choicesElm.appendChild(choice);
    }
    correctOrWrongElm.textContent =""
}

function timeUpdate(){
    time--;
    timeEl.textContent = time;
    if(time <= 0){
        submit();
    }
}

function submit(){
    testContentEL.innerHTML = "";
    clearInterval(timeInterval);//pause time 
    questionElm.innerHTML ="";
    choicesElm.innerHTML = "";

    var doneMsg = document.createElement("h2");
    doneMsg.textContent = "All done";

    var scoreMsg = document.createElement("p")
    score = Math.round(( correctCount / questions.length ) * 100);
    scoreMsg.textContent = "Your Final score is " + score;

    var inputLabel = document.createElement('label')
    inputLabel.textContent = "Enter initials: ";

    var input = document.createElement('input')

    var submitButton = document.createElement('a');
    submitButton.textContent = "Submit";

    input.setAttribute("id", "initials")
    submitButton.setAttribute( "class", "viewScores");
    submitButton.setAttribute( "class", "link");

    submitButton.setAttribute( "href", "viewScores.html");

    testContentEL.appendChild( doneMsg );
    testContentEL.appendChild( scoreMsg );
    testContentEL.appendChild( inputLabel );
    testContentEL.appendChild( input );
    testContentEL.appendChild( submitButton );

}




function checkAnswer(e){
    var answer = e.target.textContent;

    var answerMsg;
    if(e.target.matches("li")){
        if(answer === questions[i].answer){
            correctCount++;
            correctOrWrongElm.textContent = "Correct!";
        }else{
            time -= 2;
            correctOrWrongElm.textContent = "Wrong!";
        }

    }
}

document.body.addEventListener("click",function(e){
 
    if(e.target.matches("li")){
        clearInterval(timeInterval);//pause time 
        checkAnswer(e);// displays w or r
        i++; //next question index

        //after 2 seconds 
        setTimeout(function(){
            if(i === questions.length){
                submit();
            }else{
                choicesElm.innerHTML ="";
                questionElm.innerHTML ="";
                qc(i);
                timeInterval = setInterval(timeUpdate, 1000);
            }
        }, 2000)
        showScores();
    }
});

var existing;
testContentEL.addEventListener("click",function(event){
    var att = event.target.getAttribute("class");
    var nscore = {
        initial: event.target.value,
        score: score
    }
    if(att == "viewScores"){
        alert("submit!");
        existing = existing ? existing.split(',') : [];
        existing.push(nscore);
        localStorage.setItem("scores", existing.toString())
    }
    existing = localStorage.getItem('scores');
    
    
});

function initialRender(){
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if(storedScores != null){
        scores = storedScores;
    }

    renderScores();
}

function renderScores(){
    for (let i = 0; i < scores.length; i++) {
        scoreList = document.createElement("li");
        scoreList.textContent = scores[i].score;
        tscoreEl.append(scoreList);

        initialList = document.createElement('p');
        initialList.textContent = scores[i].initial;
        tinitialEl.append(initialList);
    }
}





































































function showScores(){
    var scorez = localStorage.getItem("scores");

    for(var i = 0; i < scorez.length; i++){
        scoreList = document.createElement("li");
        scoreList.textContent = scorez[i].score;
        tscoreEl.append(scoreList);

        initialList = document.createElement('p');
        initialList.textContent = scorez[i].initial;
        tinitialEl.append(initialList);
    }
}






























// add the time feature 

// HIGHSCORES PAGE 
//      lists scores of all people (local storage)
//      go back to test to retake 
//      clear local storage  highscores

// style 


