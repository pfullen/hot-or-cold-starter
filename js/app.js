
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


//  New Game Function

  function randomNum () {
  	
  	
  	var randomNum = Math.floor((Math.random()*100)+1);
  	return randomNum;
  	
  	
  	
  }
  
  var getNum = randomNum();
  console.log('The random # is ' + getNum);


// start new Game when users clicks new game button
 $('.new').click(function () {
 	
 	var getNum = randomNum();
  console.log('The random # is ' + getNum);
 	
 	
 })


});


