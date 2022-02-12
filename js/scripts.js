var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var mrRobo = function(input) {
  let numbers = [];
  for(let i = 0; i <= input; i++) {
    numbers.push(i);
  };

  var numberStrings = numbers.map(function(number) {
    return number.toString();
  });


  var mrRobo = numberStrings.map(function(numberString) {
    if (numberString.includes("3")) {
      return numberString = neighbor;
    } else if (numberString.includes("2")) {
      return numberString = boop;
    } else if (numberString.includes("1")) {
      return numberString = beep;
    } else {
      return numberString;
    }
  });
  
  return mrRobo;
};