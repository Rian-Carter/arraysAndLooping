

var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var test = "test"
var mrRobo = function(input) {
  let numbers = [];
  for(let i = 0; i <= input; i++) {
    numbers.push(i);
  };

  var numberStrings = numbers.map(function(number) {
    return number.toString();
  });

  // numbers[numbers.indexOf("3")] = neighbor;
  // numbers[numbers.indexOf("2")] = boop;
  // numbers[numbers.indexOf("1")] = beep;

  var mrRobo = numberStrings.map(function(numberString) {
    if (numberString === "3") {
      return numberString = neighbor;
    } else if (numberString === "2") {
      return numberString = boop;
    } else if (numberString === "1") {
      return numberString = beep;
    } else {
      return numberString;
    }
  });
  
  return mrRobo;
};