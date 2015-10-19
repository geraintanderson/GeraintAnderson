/*
www.geraintanderson.com
Created By: Geraint Anderson
Last Modified: 21st May 2014

These blocks of code can be used for a simple higher / lower card game.
*/

function card(value,suit){
	// Create a card object with three attributes [* Check that is the correct term *]
	this.value = value;
	this.suit = suit;
}

function generateCard(card){
	// This function creates a new card
	// Set the card value
	card.value = Math.floor(Math.random()*13)+1;
	// Set the suit value
	card.suit = Math.floor(Math.random()*4)+1;
}

function showCard(card){
	// This function is used to return the display value of a card

	// Determine the suit
	switch(card.suit){
	case 1:
		suitDisplay = "C";
		break;
	case 2:
		suitDisplay = "S";
		break;
	case 3:
		suitDisplay = "H";
		break;
	case 4:
		suitDisplay = "D";
		break;
}
	
	// Determine the display values
	switch(card.value){
		case 1:
			valueDisplay = "A";
			break;
		case 11:
			valueDisplay = "J";
			break;
		case 12:
			valueDisplay = "Q";
			break;
		case 13:
			valueDisplay = "K";
			break;
		default:
			valueDisplay = card.value;
	}
	return valueDisplay + suitDisplay;
}

function calculateResult(bet, card1, card2){
	// Calculate if the player wins or loses based on whether card 1
	// or card 2 is higher, and the bet, which should be either "higher"
	// or "lower"
	if (!(bet == "higher" || bet == "lower")){
		alert("Choose a bet value!  Higher or lower?");
		return;
	}
	
	// Work out if card2 is higher or lower than card1
	if (card2.value > card1.value){
		var comparison = "higher";
	} else if ( card2.value < card1.value ){
		var comparison = "lower";
	} else {
		var comparison = "equal";
	}
	
	// Work out if the player wins
	if (bet == comparison){
		return "win";
	} else {
		return "lose";
	}
}

function moveCard(fromCard, toCard){
	// This function takes the value of fromCard and gives it to toCard.  fromCard is then regenerated.
	toCard.value = fromCard.value;
	toCard.suit = fromCard.suit;
	
	generateCard(fromCard);
}

var currentCard = new card();
var nextCard = new card();