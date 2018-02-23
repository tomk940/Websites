

var startReset = document.getElementById("startReset");
var question = document.getElementById("question");
var gameOver = document.getElementById("gameOver");
var gameOverScore = document.getElementById("gameOverScore");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");



var playing = false;
var action;
var correctAnswer;
var correctAnswerF;



//Start/Reset Button
startReset.onclick = function () {
    

    
    
    if (playing === true) {
        location.reload();
    } else {  
        startReset.innerHTML = "Reset Game"; //change start button to reset
         playing = true;//chaning playing from false to true
        askQuestion();
        
    }

};


for(i=1; i < 5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctAnswerF){
            
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






