$(function(){
   

    
    
    
//    canvas
    
    var paint = false;
    var paint_erase = "paint";
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");
    var container = $('#container');
    var mouse = {x: 0, y: 0}; //mouse position
    
    
    //load localstorage
    //gets infor from the save button
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        
        img.onload = function(){
          ctx.drawImage(img, 0, 0);  
        }
        img.src = localStorage.getItem("imgCanvas");
        //creates a new image variable
        //loads image using the context.drawImage which then asks for the image and the coordinats to start form
        //uses the url we saved on the save button and makes it an img
    };
    
    
    
    
    
    //set drawing perameters
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    
    //click inside the container
    container.mousedown(function(e){
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        //pageX gives us how far the mouse is form the left side/ top of the screen. then minus the distance from the left side/ top of the container (this) to the left side/top of the screen which is what offsetLeft/Top does.
        ctx.moveTo(mouse.x, mouse.y);
        
    });
    
    //move the mouse whilst holding the mouse key
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint == true){
            if(paint_erase == "paint"){
                //get color
                ctx.strokeStyle = $("#paintColor").val();
                //changes the color of the pen to wahtever is chosen on the picker
            }else {
                //white color
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        } 
        
    });
    
    
    //let go of mouse key
    container.mouseup(function(){
        paint = false;
        
    });
    
    
    
    //if we leave the container
    container.mouseleave(function(){
        paint = false;
        
    });
    
    
    //erase button
    
    $("#erase").click(function(){
        if(paint_erase == "paint"){
            paint_erase = "erase";
        }else{
            paint_erase = "paint";
        }
        $(this).toggleClass("eraseMode");
    });
    
    
    //save button - save data on users broswer
    $("#save").click(function(){
        if(typeof(localStorage) != null){
        localStorage.setItem("imgCanvas", canvas.toDataURL());
        
        //first parameter is just a variable name the second parameter is what you are storing
        //canvas.todataurl saves the image as an encrypted url
        }else{
        windoes.alert("Your Browser does not support local storage");
        }
    });    
    
    
    //reset button - clears an ear of the screen
    //it takes the cordinated of the top left point of the area and then the width and height of the area that you want to clear
    $("#reset").click(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        paint_erase = "paint";
        $("#erase").removeClass("eraseMode");
    });
    
    
    
    //change color
    $("#paintColor").change(function(){
        $("#circle").css("background-color", $(this).val());
        //this changes the color of the circle under the color picker
        
        
    });
    
    
    //    slider  line width
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });
    
    
    
    
    
    
});



//e.g. of how canvas works (not using mouse but coordinates)
//  var canvas = document.getElementById("paint");
//    var context = canvas.getContext('2d'); 
//    
//    //to draw a line
//    //delcare a new path
//    context.beginPath();
//    
//    //define parameters e.g. line width, color, rounded edge, line join
//    context.lineWidth = 40;
//    context.strokeStyle = '#4499e3';
//    context.lineCap = "round";
//    context.lineJoin = "round";
//    
//    //positioned the context(start) point
//    context.moveTo(100,50);
//    
//    //draw line from start point to new position
//    context.lineTo(390,50);
//     //draw line from last point to new position
//    context.lineTo(250,50);
//    //draw line from last point to new position
//    context.lineTo(250,300);
//    
//    //to make line visible
//    
//    context.stroke();