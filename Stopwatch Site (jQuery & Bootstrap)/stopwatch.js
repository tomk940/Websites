$(function(){
   
    
    //Variables
    
    var mode = 0;
    var timeCounter = 0;
    var lapCounter = 0;
    var action; //variable for setInterval
    var lapNumber = 0;
    
    var timeMinutes, timeSeconds, timeCentiSeconds, lapMinutes, lapSeconds, lapCentiSeconds;
    
    
    
    //App Load
    
    hideShowButtons("#startButton","#lapButton");
    
    //click on start button
    $("#startButton").click(function(){
        mode = 1;
        hideShowButtons("#stopButton", "#lapButton");
        startAction();
    });
    
    
    //stop button
    $("#stopButton").click(function(){
        hideShowButtons("#resumeButton","#resetButton");
        clearInterval(action);
    });
    
    //resume Button
    $("#resumeButton").click(function(){
        hideShowButtons("#stopButton","#lapButton");
        startAction();
    });
    
    
    //reset Button
    $("#resetButton").click(function(){
      location.reload();
    });
    
     //lap Button
    $("#lapButton").click(function(){
      if(mode){
          clearInterval(action);
          lapCounter = 0;
          addLap();
          startAction();
      }
    });
    
    
    
    
    
    
    
    //functions
    
    //hide buttons
    function hideShowButtons(x,y){
        $(".control").hide();  //hides all buttons
        $(x).show(); //shows start button
        $(y).show(); //shows rest button
    }
    
    
    
    //start counter
    function startAction(){
        action = setInterval(function(){
            timeCounter++;
            if(timeCounter == 100*60*100){
                timeCounter = 0;
            }
            lapCounter++;
            if(lapCounter == 100*60*100){
                lapCounter = 0;
            }
            updateTime();
        }, 10); // increase counter ever 10 miliseconds  and then convert that time into minutes/seconds/centiseconds
    }
    
    
    //change counter into minutes/seconds/centiseconds
    function updateTime(){
        //1min = 6000centiseconds
        timeMinutes = Math.floor(timeCounter /6000);
        //1 second = 100centisecond
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiSeconds = (timeCounter%6000)%100;
        
        $("#timeMinutes").text(format(timeMinutes));
        $("#timeSeconds").text(format(timeSeconds));       $("#timeCentiSeconds").text(format(timeCentiSeconds));
        
        lapMinutes = Math.floor(lapCounter /6000);
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiSeconds = (lapCounter%6000)%100;
        
        $("#lapMinutes").text(format(lapMinutes));
        $("#lapSeconds").text(format(lapSeconds));       $("#lapCentiSeconds").text(format(lapCentiSeconds));
                                 
    }
    
    
    //format numbers so it always has 2 digits e.g. 01
    function format(number){
        if(number<10){
            return '0' +number;
        } else{
            return number;
        }
    }
    
//    //print lap times in box
    function addLap(){
        lapNumber++;
        var myLapDetails = 
            '<div class="lap">' + 
                '<div class="lapTimeTitle">' +
                        'Lap' + lapNumber +
                    '</div>' +
                    '<div class="lapTime">' +
                        '<span>' + format(lapMinutes) + '</span>' + ':<span>' + format(lapSeconds) + '</span>' + ':<span>' + format(lapCentiSeconds) + '</span>'
                '</div>' 
            '</div>';
        $(myLapDetails).prependTo("#Lapcontainer");
    }
    
    
    
    


});












