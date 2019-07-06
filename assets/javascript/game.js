	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

			var win = 0;
			var lose = 0;
	        //count guess left
	        var guesLeft = 9;
	        //Letters I guessed
	        var letters = [];



	//Letter computer guess	
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


	//guess Left 	
	function updateguesLeft(){

		document.getElementById('guessLeft').innerText = 'Guesses left: ' + guesLeft;
	}
	// Already guessed letters
	function soFarGuess(){

		document.getElementById('yourGuessSoFar').innerText = "Your guess so far: " + letters.join( ', ' );
	}
	//call function updateguesLeft--show initial gueLeft:9
	updateguesLeft();	
	//------------------------------------------------------
	 //reset, renew all varialbles. Renew vars, there should not 
	 //include "var letters = []"---should be"letters = []"
	 var resetVar = function(){
	 //count guess left
	 guesLeft = 9;
	         //Letters I guessed
	         letters = [];
	         computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

	     }


	// Heppenning when key press:  
	//returns keypress into function
	document.onkeypress = function(){
	//9 8 7 6 5 4 3 2.....
	guesLeft--;
	//show letter when key pressed
	var playerGuess = event.key.toLowerCase();
	//Add letters into Array--Letters[]
	letters.push(playerGuess);
	//run Function: updateguesLeft, soFarGuess
	updateguesLeft();
	soFarGuess();
	console.log(computerGuess);
	//--------------------------------------------------

//Wins and Lose
	if(computerGuess == playerGuess){
		win++;
		document.getElementById('wins').innerText = "Wins: " + win;
	//reset game	
		resetVar();
	}else if(guesLeft == 0) {
		lose++;
		document.getElementById('lose').innerText = "Loses: " + lose;
		resetVar();

	}
}
