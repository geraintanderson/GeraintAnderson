/*
www.geraintanderson.com
Created By: Geraint Anderson
Last Modified: 26th April 2014

The case converter changes the case of input text to one of UPPER CASE, lower case, Title Case or Standard case.
*/

function submitButton(){
	// This function is triggered when the form is submitted
	var radioCount = document.mainForm.caseOption.length; // Number of radio buttons
	var caseType; // Case of the processed text
	var inputText = document.getElementById('inText').value; // Text to be formatted
	var outText; // Formatted text
	
	// Check which case is selected with the radio button.
	for (i=0; i<radioCount; i++){
		if (document.mainForm.caseOption[i].checked){
			caseType = document.mainForm.caseOption[i].value;
			break;
		}
	}
	
	// Error handling if no radio button is selected.
	if (caseType == undefined){
		alert("Please choose a formatting option");
	} else {
		// Format the text and output it to the text area
		document.getElementById('outText').value = changeCase(inputText,caseType);
	}
}

function toTitleCase(inWord){
	// This function takes a word as an input and converts it to title case
	return inWord.substr(0,1).toUpperCase() + inWord.substr(1,inWord.length).toLowerCase();
}

function changeCase(inText,caseType){
	// This function changes the case of inText according to the parameter of caseType.
	var outText = "";
	var nextWord = "";
	
	switch(caseType){
		case "upperCase":
			// Capital letters only
			outText = inText.toUpperCase();
			break;
			
		case "lowerCase":
			// Lower case letters only
			outText = inText.toLowerCase();
			break;
			
		case "titleCase":
			// Each word starts with a capital letter
			
			// Create an array of individual words
			words = inText.split(" ");
			
			outText = toTitleCase(words[0]);
			
			// Individually process each word
			for (var i=1;i<words.length;i++){
				// For each word, capitalise the first letter and add to the output string
				outText = outText + " " + toTitleCase(words[i]);
			}
			break;
			
		case "standardCase":
			// Capital letters follow full stops only
			
			// Create an array of individual words
			words = inText.split(" ");
			// First word is a special case: Capital letter then lower case.
			outText = toTitleCase(words[0]);
			
			// Individually process each word
			for (var i=1;i<words.length;i++){
			
				// Special condition to capitalise "I"
				if ( words[i].toUpperCase() == "I" ){
					nextWord = "I";
				// Also capitalise "I" where it's used with an apostrophe
				} else if ( words[i].substr(0,2).toUpperCase() == "I'" ){
					nextWord = "I'" + words[i].substr(2).toLowerCase();
				// Check if this word is the start of a sentence, by checking if the last word ends with a full stop.
				} else if ( words[i-1].substr(-1) == "." ){
					// Words that start a sentence must begin with a capital.
					nextWord =  toTitleCase(words[i]);
				} else {
					// Otherwise the next word is lower case
					nextWord = words[i].toLowerCase();
				}
				
				// Add the next word to the output string
				outText = outText + " " + nextWord
			}
			break;
	}
	
	return outText;
}