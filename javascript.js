var computerGuess;
var userGuesses=[];
var attempts=0;
var maxguesses;

let low=1;
let high=100;

function updateRange(){
	const rangeOutput=document.getElementById("rangeOutput");
	rangeOutput.innerText=`${low} - ${high}`;
	rangeOutput.style.marginLeft=low + "%";
	rangeOutput.style.marginRight=100-high + "%";

	const lowValue=document.getElementById("low");
	lowValue.style.flex=low + "%";

	const spaceValue=document.getElementById("space");
	spaceValue.style.flex=high-low + "%";

	const highValue=document.getElementById("high");
	highValue.style.flex=100-high + "%";


}



function newGame(){
	window.location.reload();
}


function gameEnded(){
	document.getElementById("newGameButton").style.display="inline";
	document.getElementById("inputBox").setAttribute("readonly","readonly");
}

function init(){
	computerGuess=Math.floor(Math.random()*100 +1);
	console.log(computerGuess);
	document.getElementById("gameArea").style.display="none" ;
	document.getElementById("newGameButton").style.display="none" ;

}

function startGameView(){
	document.getElementById("welcomeScreen").style.display="none";
	document.getElementById("gameArea").style.display="block";
} 

function easyMode(){
	startGameView();
	maxguesses=10;

}

function hardMode(){
	startGameView();
	maxguesses=5;
	
}

function compareGuess(){
	attempts++;
	document.getElementById("attempts").innerText=attempts;


	const userGuess=Number(document.getElementById("inputBox").value);
	userGuesses.push(" " + userGuess);
	document.getElementById("guesses").innerText=userGuesses;
	document.getElementById("inputBox").value="";


	if(attempts<maxguesses ){
		if(userGuess>computerGuess){
			if(userGuess<high){
				high=userGuess;
			}
			document.getElementById("textOutput").innerHTML="your guess is too high";
			//console.log(attempts);
		}else if(userGuess<computerGuess){
			if(userGuess>low){
				low=userGuess;
			}
			document.getElementById("textOutput").innerHTML="your guess is too low";
			//console.log(attempts);
		}else{
			document.getElementById("textOutput").innerHTML="correct! you got in";
			gameEnded();
		}
	}else {
		if(userGuess>computerGuess || userGuess<computerGuess){
			document.getElementById("textOutput").innerHTML="you LOSE! The number was" + computerGuess;
			gameEnded();
	}else{
		document.getElementById("textOutput").innerHTML="correct! you got in";
		gameEnded();
	}
	
}


updateRange();


}

