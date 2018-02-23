

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
    
    var a = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var b = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    var c = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    
    var d = Math.floor(Math.random() * (40 - 10+ 1)) + 0;
    var e = Math.floor(Math.random() * (40 - 10+ 1)) + 0;
    var f = Math.floor(Math.random() * (40 - 10+ 1)) + 0;
    
    
    
    var side1 = Math.floor(a / d);
    var side2 = Math.floor(b / e);
    var side3 = Math.floor(c / f);
    
    var part1 = side1 * side2; 
    
    correctAnswer = part1 * side3; 
    correctAnswerF = correctAnswer.toFixed(0);
    
    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;
    document.getElementById("d").innerHTML = d;
    document.getElementById("e").innerHTML = e;
    document.getElementById("f").innerHTML = f;
    
    
    
    var randomAnswer = Math.floor((Math.random() * 50) + 1);
    var randomAnswer2 = Math.floor((Math.random() * 50) + 1);
    var randomAnswer3 = Math.floor((Math.random() * 50) + 1);
 
    
    
    
    var correctPosition = Math.floor((Math.random() * 3) + 1);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswerF;
    
    var answers = [correctAnswerF];
    
    for(i=1; i<5; i++){
        if(i !== correctPosition){
            var wrongAnswer;

            do{
             wrongAnswer = Math.floor((Math.random() * 1000) + 1);
                var wrongAnswerF = Math.round(wrongAnswer);
            } while(answers.indexOf(wrongAnswerF)> -1);
            document.getElementById("box"+i).innerHTML = wrongAnswerF;
            
            answers.push(wrongAnswerF);
        }
    }

}






