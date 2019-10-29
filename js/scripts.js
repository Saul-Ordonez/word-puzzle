$(document).ready(function() {
  $("form#text-box-form").submit(function(event) {
    event.preventDefault();
    var newArrayNoVowelsFor = [];
    var userInput = $('#text-box').val(); //This is what the user input.
    var forLoopFunction = function(userInput){
      for (var i = 0; i < userInput.length; i++) {
        if (userInput[i].match(/[aeiou]/gi))
        // === ("a" || "i" || "e" || "o" || "u" || "A" || "E" || "I" || "O" || "U"))
        {
          newArrayNoVowelsFor += "-";
        }
        else {
          newArrayNoVowelsFor += userInput.charAt(i);
          console.log(userInput[i]);
        }
      }
      return(newArrayNoVowelsFor);
    }

    $("p").append("for loop result: " + forLoopFunction(userInput));
    //
    // var newNewArrayNoVowelsMap = userInput.split('');
    // console.log(newNewArrayNoVowelsMap);


    // for loop(for the length of user input) {
    //   if consonant, add chr to newArrayNoVowels
    //   if vowel, add - to newArrayNoVowels
    //   return newArrayNoVowels
    // }
    // print newArrayNoVowels to p
  });
});
