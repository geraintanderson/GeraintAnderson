/*
www.geraintanderson.com
Created By: Geraint Anderson
Created On: 26th April 2014

The case converter changes the case of input text to one of UPPER CASE, lower case, Title Case or Standard case.
*/
(function(){
	var app = angular.module('CaseConverter', []);
	app.controller('CaseConverterCtrl', function($scope){

		$scope.inText = "";
		$scope.outText = "";
		$scope.case = "lowerCase";

		$scope.submitButton = function(){

			switch($scope.case){
				case "upperCase":
					// Capital letters only
					outText = $scope.inText.toUpperCase();
					break;

				case "lowerCase":
					// Lower Case Letters only
					outText = $scope.inText.toLowerCase();
					break;

				case "titleCase":
					// Capital letter on first letter of each word
					outText = toTitleCase($scope.inText);
					break;

				case "standardCase":
					// Capitalise the first letter according to standard English
					outText = toStandardCase($scope.inText);
					break;

				};

			//return outText;
			$scope.outText = outText;

		};

	}); // End of Controller


	var toStandardCase = function(rawText){
		// Create an array of individual words
		words = rawText.split(" ");

		var formattedText = capitaliseWord(words[0]);


		// Individually process each word
		for (var i=1; i<words.length; i++){

			// Special condition to capitalise "I"
			if ( words[i].toUpperCase() == "I" ){
				nextWord = "I";
			// Also capitalise "I" where it's used with an apostrophe
			} else if ( words[i].substr(0,2).toUpperCase() == "I'" ){
				nextWord = "I'" + words[i].substr(2).toLowerCase();
			// Check if this word is the start of a sentence, by checking if the last word ends with a full stop.
			} else if ( words[i-1].substr(-1) == "." ){
				// Words that start a sentence must begin with a capital.
				nextWord =  capitaliseWord(words[i]);
			} else {
				// Otherwise the next word is lower case
				nextWord = words[i].toLowerCase();
			}

			// Add the next word to the output string
			formattedText = formattedText + " " + nextWord;
		};
		return formattedText;
	};


	var toTitleCase = function(rawText){
		// Create an array of individual words
		words = rawText.split(" ");

		var formattedText = capitaliseWord(words[0]);

		for (var i=1; i<words.length; i++){
			// For each word, capitalise the first letter and add to the output string
			formattedText = formattedText + " " + capitaliseWord(words[i]);
		};
		return formattedText;
	};

	function capitaliseWord(inWord){
		// This function takes a word as an input and capitalises the first letter
		return inWord.substr(0,1).toUpperCase() + inWord.substr(1,inWord.length).toLowerCase();
	}

}());
