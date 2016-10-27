var cryptosquareFunction = function(string) {
  //take out non letter characters.
  string = string.replace(/[^a-zA-Z-]/g, "").toLowerCase();
  //make an array of the string
  var letters = string.split("");
  var squareRootOfLetters = Math.ceil(Math.sqrt(letters.length));
  //slice(start, column.length)
  var row = []
  var rowArray = []
  //var position = []
  for(var i = 0; i < squareRootOfLetters; i++) {
    row = letters.splice(0, squareRootOfLetters);
    rowArray.push(row);
  }
  for(var r = 0; r <= row.length; r++) {
    //position = row.shift();
  }
  console.log(rowArray);
  //console.log(position);
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var string = ($("#input").val());
    $(".output").text(cryptosquareFunction(string));
  });
});
