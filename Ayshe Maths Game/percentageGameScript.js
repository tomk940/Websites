

var startReset = document.getElementById("startReset");
var timeRemaining = document.getElementById("timeRemaining");
var question = document.getElementById("question");
var scoreValue = document.getElementById("scoreValue");
var timeRemainingValue = document.getElementById("timeRemainingValue");
var gameOver = document.getElementById("gameOver");
var gameOverScore = document.getElementById("gameOverScore");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");



var playing = false;
var score = 0;
var action;
var timeRemaining;
var correctAnswer;
var correctAnswerF;



//Start/Reset Button
startReset.onclick = function () {
    

    
    
    if (playing === true) {
        location.reload();
    } else {  
        score = 0;   //reset score
        scoreValue.innerHTML = score; //set score in top corner
//        timeRemaining.style.display = "block";
        show("timeRemaining");//make time remaining visable
        timeRemaining = 60;
        
        timeRemainingValue.innerHTML = timeRemaining;
        startReset.innerHTML = "Reset Game"; //change start button to reset
         playing = true;//chaning playing from false to true
        
        startCountdown(); // start timer function
        askQuestion();
        
    }

};

for(i=1; i < 5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score++;
            scoreValue.innerHTML = score;
            
            hide("wrong");
            show("correct");
            setTimeout(function()           {hide("correct")}, 1000);
            
            askQuestion();
            
           } else{
                hide("correct");
                show("wrong");
                setTimeout(function()           {hide("wrong")}, 1000);
           }
       
       }
}
}


function startCountdown(){
    action = setInterval(function(){
        timeRemaining -= 1;
        timeRemainingValue.innerHTML = timeRemaining; // displays the countdown on bottom right
        if(timeRemaining == 0){ //game over
            stopCountdown();
            
            show("gameOver");
            hide("timeRemaining");
            gameOver.innerHTML = "<p>Game Over</p> <p>Your Score is: " + score + "</p>";
            hide("correct");
            hide("wrong");
            playing = false;
            
        }
    }, 1000);
    
    hide("gameOver");
}

function stopCountdown(){
    clearInterval(action);
}

function hide(x){ document.getElementById(x).style.display = "none";
}

function show(x){ document.getElementById(x).style.display = "block";
}




function askQuestion(){
    var x = Math.floor((Math.random() * 100) + 1);
    var y = Math.floor((Math.random() * 100) + 1);
    var z = Math.floor((Math.random() * 100) + 1);
    
    

    correctAnswer = (y / 100) * x;
    correctAnswerF = correctAnswer.toFixed(2);
    
    
    var sum = "What is " + x + "% of " + y + "?";
    
    
    var randomAnswer = Math.floor((Math.random() * 20) + 1);
    var randomAnswer2 = Math.floor((Math.random() * 20) + 1);
    var randomAnswer3 = Math.floor((Math.random() * 20) + 1);
 
    
    
    question.innerHTML = sum;
    
    var correctPosition = Math.floor((Math.random() * 3) + 1);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswerF;
    
    var answers = [correctAnswerF];
    
    for(i=1; i<5; i++){
        if(i !== correctPosition){
            var wrongAnswer;

            do{
             wrongAnswer = Math.floor((Math.random() * 10) + 1) * Math.floor((Math.random() * 10) + 1) / 100 * z;
                var wrongAnswerF = wrongAnswer.toFixed(2);
            } while(answers.indexOf(wrongAnswerF)> -1);
            document.getElementById("box"+i).innerHTML = wrongAnswerF;
            
            answers.push(wrongAnswerF);
        }
    }

}






