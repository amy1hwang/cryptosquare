var cryptosquareFunction = function(string) {
  //take out non letter characters.
  string = string.replace(/[^a-zA-Z-]/g, "").toLowerCase();
  //string = string.replace(/^[a-zA-Z]*$/gi);
  console.log(string);
  //make an array of the string
  //figure out # of columns and # of rows based on the # of the letters in the string.
  //slice(start, column.length)
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var string = ($("#input").val());
    $(".output").text(cryptosquareFunction(string));
  });
});
