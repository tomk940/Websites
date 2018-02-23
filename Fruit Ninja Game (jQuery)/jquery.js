var isPlaying = false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function(){
   
    
    
$("#startReset").click(function(){
    if(isPlaying == true){
        location.reload(); //reload page
    } else {
        isPlaying = true; // game initiated
        score = 0; //reset score
        $("#scoreValue").html(score); //show score
        $("#trialsLeft").show(); //show lives
        trialsLeft = 3; //reset score
        addHearts(); //show lives
        $("#gameOver").hide();
        $("#startReset").html("Reset Game");
    }
    startAction(); 
});

    
    
$("#fruit1").mouseover(function(){
    score++;
    $("#scoreValue").html(score);
    
    $("#sliceSound")[0].play();
    
    clearInterval(action);
    
    $("#fruit1").hide(
        "explode", 450
    );
    
    setTimeout(startAction, 500);
    
    
    
    
    
    
});  
    
    
    



//adds the three lives 
function addHearts(){
    $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i++){
                $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

//start generating gameplay
function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({   //randomly places fruit
        'left': Math.round(550* Math.random()),
        'top': -80
    });
    
    step = 1 + Math.round(5*Math.random());
    
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);
        
        if($("#fruit1").position().top > $("#fruitContainer").height()){
            if(trialsLeft > 1){
                $("#fruit1").show();
                chooseFruit();
                $("#fruit1").css({   //randomly places fruit
                    'left': Math.round(550* Math.random()),
                    'top': -80
                });

                step = 1 + Math.round(5*Math.random()); 
                trialsLeft--;
                addHearts();

               } else{
                   isPlaying = false;
                   $("#startReset").html("Start Game");
                   $("#gameOver").show();
                   $("#gameOver").html('<p>Game Over!</p> <p>Your Score is ' + score + '</p>');

                   stopAction();
                   $("#trialsLeft").hide();
               }
            }
    }, 10);
    
}


//generate random fruit
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png');
    
}

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    
});