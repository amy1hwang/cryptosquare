var stringFunction = function(sentence) {
  sentence = sentence.replace(/[^a-zA-Z-]/g, "").toLowerCase();
}
var squareRootOfLetters = function(string) {
  return Math.ceil(Math.sqrt(string.length));
}
var cryptosquareFunction = function(string) {
  var string = stringFunction(string)
  var x = squareRootOfLetters(string)
  var column = "";
  for(var j = 0; j < x; j++) {
    for(var i = 0; i < string.length; i += x) {
      column += string.charAt(j + i);
    };
  };
  console.log(column);
  //   rowArray.push(row);
  // // }
  // // for(var r = 0; r < row.length; r++) {
  //   position = row.splice(0, 1);
  //   positionArray.push(position);
  // }
  // console.log(position);
  // console.log(positionArray);
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var string = ($("#input").val());
    $(".output").text(cryptosquareFunction(string));
  });
});
