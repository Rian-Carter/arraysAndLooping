var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var mrRobo = function(input) {
  let numbers = [];
  for(let i = 0; i <= input; i++) {
    numbers.push(i);
  };
  var numberStrings = [];
  numbers.forEach(function(number) {
    numberStrings.push(number.toString());
  });

  numbers[numbers.indexOf("3")] = neighbor;
  numbers[numbers.indexOf("2")] = boop;
  numbers[numbers.indexOf("1")] = beep;
  
  return numbersStrings;
};