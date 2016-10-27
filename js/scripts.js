var cryptosquareFunction = function(string) {
  //take out non letter characters.
  string = string.replace(/[^a-zA-Z-]/g, "").toLowerCase();
  //make an array of the string
  var letters = string.split("");
  var squareRootOfLetters = Math.ceil(Math.sqrt(letters.length));
  console.log(squareRootOfLetters);
  //figure out# of rows based on the # of the letters in the string.
  var firstRow = letters.slice(0, squareRootOfLetters);
  console.log(firstRow);
  // for(var i = 0, i = squareRootOfLetters, i++) {
  //
  // }
  // //slice(start, column.length)
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var string = ($("#input").val());
    $(".output").text(cryptosquareFunction(string));
  });
});
