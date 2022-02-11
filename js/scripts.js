var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var mrRobo = function(input) {
  let numStr = "";
  for(let i = 0; i <= input; i++) {
    numStr = numStr + i;
  };
  var numbers = [numStr.split("")];
  return numbers;
}