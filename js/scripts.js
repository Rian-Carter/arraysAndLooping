var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var mrRobo = function(input) {
  let numbers = [];
  for(let i = 0; i <= input; i++) {
    numbers.push(i);
  };
  numbers[numbers.indexOf("1")] = beep;
  numbers[numbers.indexOf("2")] = boop;
  numbers[numbers.indexOf("3")] = neighbor;

  return numbers
}