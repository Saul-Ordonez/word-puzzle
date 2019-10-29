$(document).ready(function() {
  $("form#text-box-form").submit(function(event) {
    event.preventDefault();
    var newArrayNoVowelsFor = [];
    var userInput = $('#text-box').val(); //This is what the user input.
    var forLoopFunction = function(userInput){
      for (var i = 0; i < userInput.length; i++) {
        if (userInput[i].match(/[aeiou]/gi)) {
          newArrayNoVowelsFor += "-";
        }
        else {
          newArrayNoVowelsFor += userInput.charAt(i);
        }
      }
      return(newArrayNoVowelsFor);
    }

    $("p").append("for loop result: " + forLoopFunction(userInput));
  });
});
