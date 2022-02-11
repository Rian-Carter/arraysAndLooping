var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var mrRobo = function(input) {
  let str = "";
  for(let i = 0; i < (input+1); i++) {
    str = str + i;
  }
  var numbers = [str.split("")];
  console.log(numbers);
}

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = mrRobo(input);
    $("#results").text(result);
  });
});