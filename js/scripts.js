var mrRobo = function(input) {
  let numbers = [];
  for(let i = 0; i <= input; i++) {
    numbers.push(i.toString());
  };

  var mrRobo = numbers.map(function(number) {
    if (number.includes("3")) {
      return number = ("Won't you be my neighbor?");
    } else if (number.includes("2")) {
      return number = ("boop!");
    } else if (number.includes("1")) {
      return number = ("beep!");
    } else {
      return number;
  };
});
  return mrRobo;
};


$(document).ready(function() {
  $("form#inputtedNumber").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = mrRobo(input);
    $("#output").text(result);
  });
});