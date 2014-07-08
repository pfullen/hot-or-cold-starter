
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// ****************** Functions *****************


//  New Game Function

  function randomNum () {
  	
  	
  	var randomNum = Math.floor((Math.random()*100)+1);
  	return randomNum;
  	
  	 	 }
  	 

  	 
 // User Guess Function 	 
  	 function userGuess () {
  	 
  	 var valGuess = +document.getElementById("userGuess").value;
  	 
	  
		

  	 return valGuess;
  	 }



// Compare Results function
	function compareResults (guess,randomNum) {
    
    var currentResult = guess - randomNum;
    var correct = "You guessed the correct Number"; 
    var hot = "You are hot!!!";
    var cold = "You are cold!!!";
    var hotter = "You are getting hotter!!!";
    var colder = "You are getting colder!!!";    
    var same = "You guess is just as close as your last guess!";
    var not_A_Num = "Your entry is not a number!";
    var overLimit = "You need to enter a # between 1 & 100";
    // convert current result  to absolute number 
    
    currentResult = Math.abs(currentResult);
    
  

   console.log(currentResult);
   console.log( lastResult);
   
    
    if (currentResult===0) {
   console.log(correct);
    $('#feedback').html(correct);    
    
    }    else if (lastResult === null) {    
          // inner if to compare first result
     if (currentResult <= 10) {
   $('#feedback').html(hot);    
    $('#feedback').css("background-color","red");
 
	console.log(hot);
   
   } else if (currentResult >= 10) {
    $('#feedback').html(cold);
   $('#feedback').css("background-color","blue");  
	console.log(cold); 
   }  // close inner if on first guess
}
       
        //  if to compare subsequent guesses to see if player is getting hotter or colder
      	
         else if (currentResult < lastResult) {
     		 $('#feedback').html(hotter);
     		 $('#feedback').css("background-color","red");
     		
     		}   else if (currentResult > lastResult) {
			  $('#feedback').html(colder); 
			  $('#feedback').css("background-color","blue");    		
     		
     		}
         
     lastResult = currentResult;
     
     }    
     
        
             
       
      	 
  	  	 
  	 
  	 
  	 
// reset function 

 /* function resetPage () {
  	 var guessCount = 0;
    var lastUserGuess =0;
  	
  	var userGuess =
				$('input[name="userGuess"').val("");    //  reset user guess input field
		
		guessCount = 0;
 			$('span').html(guessCount);
 			
 			$('#feedback').html('Make your Guess!');
 			$('ul.guessBox').html('<li> Your Guesses: </li>');		
				('span').html(0);
  }
  	 
  	 
  	 */
  	 
 //  *************Main code*************
    var guessCount = 0;
    var lastResult =null;
    $('input#userGuess').focus();    // focus on user text
    
  // get random number on startup
  
 // var resetNow = resetPage ();
  var getNum = randomNum();
  console.log('The random # is ' + getNum);


// start new Game when users clicks new game button
 $('.new').click(function () {
    $('input#userGuess').focus();  
 	 lastResult =null;
 	 currentResult=null;
   console.log('The Last Result # is ' + lastResult);
 	var getNum = randomNum();
  console.log('The random # is ' + getNum);
  
 	$('span').html(0);
 	
 
 	
 	var userGuess = 
				$('input[name="userGuess"').val("");
				
				guessCount = 0;
 			$('span').html(guessCount);
 			
 			$('#feedback').html('Guess a Number between 1 & 100');
 	
 	      $('ul#guessList').html('');
 	
 })


// Prevent default page refresh when submit is clicked
$('form').submit(function(event){ 
  			 event.preventDefault(); 
  			
          console.log(guessCount);

})

// get value of user's guess when user clicks guess then compare to random number generated by computer
$('#guessButton').click(function () {
		
			var getUserGuess = userGuess();
        	
         if (getUserGuess > 100 ){
         	
         	    $('#feedback').html("You need to select a number between 1 & 100");  
         	
         }      else {	
        	 guessCount++ ;
         $('span').html(guessCount);
          var result = +(compareResults(getUserGuess,getNum));
         }
          
    
       	 $('ul#guessList').prepend(
 	 			'<li>' + getUserGuess + '</li>'
 	 			
 	 	     
 	 			);	
       	 
       
   })





// Evaluate Guess against the random number generated by computer








});


