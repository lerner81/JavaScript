

$(document).ready(function(){  

   $("#start_button").on('click',function(){   
    start();
    $("#gamespace").on('click','.balloon', function(){
    count(); 
	  $(this).hide ("explode",{pieces: 13}, 300);
    $(this).stop();   
   
    }); // end of click function
   }); // end of start button  
});//end of ready function

//beginning the the start function
//this function starts the timer, the balloons and css
function start(){
  timer();
  $('#timer').show();
  addBalloon();
  startcss();
}

//timer function
//this function controls the timer going down and 
//everything that is triggered by the timer, "alert, reload"
var time = 31;
var repeat;

function timer(){
if(time > 0){
  time -= 1;  
  $("#timer")[0].innerHTML = time + " seconds left"; 
repeat = setTimeout("timer()", 1000);
$("#start_button").attr("disabled",true);
  }else{
    clearTimeout(repeat);
    alert("You earned a new score of "+ gameScore
    +" points!! \nCongratulations!"); 
location.reload();  
  }
}

//function that changes the css 
function startcss(){
  $('#gamespace').css('background-color', '#6699ff');
  $('html , body').css('background-color', '#E1D4C0');
}

//add balloon function
//function that adds balloons randomly(within 2 seconds), creates dynamic IDS, and random locations 
var newBalloon;
var balloon = ["0.png","1.png","2.png","3.png","4.png"];
var newID = 0;

function addBalloon(){
  var xPos = randPosX();
  var interval = randInterval();
if(time>=1.25){
   var randBalloon = Math.floor(Math.random() * balloon.length); // generates a random number from the array
   $('#gamespace').append('<img src="img/' + randBalloon +'.png" class ="balloon" id= "bal'+newID+'" style ="left:'+xPos+'px;"/>'); // populates a random balloon
    newID++;       
    newBalloon = setTimeout("addBalloon()", interval); //adds a new balloon randomly within 2 seconds
    //end of adding images
  animateBalloon ();
  }else{
    clearTimeout(newBalloon);
  }
}
//makes the balloon fall and increases the speed
var j =0;  
 
function animateBalloon(){
 var speed = 4000;
  if(time < 20)
   speed = 2000;
  if (time < 10)
    speed = 1250;  
  $("#bal"+j).animate({top:'265px'}, speed).hide ("explode",{pieces: 13}, 300);
  //makes the balloons fall and explode 
  j++;
};

// function that creates a random interval
function randInterval(){
  return Math.floor(Math.random() * 2000);
}
//x random function, I do not need a y so I deleted it
    function randPosX(){       
    return Math.floor(Math.random() * 560);    
    }

//function that increments score
var gameScore = 0;
function count() {  
  gameScore += 1;// incrementing amount is increased everytime the start button is clicked
  $("#score")[0].innerHTML = gameScore + " pts";
};





