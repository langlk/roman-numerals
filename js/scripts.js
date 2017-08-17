// business logic

var numerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};
var numeralValues = [1, 5, 10, 50, 100, 500, 1000];

function error(decimalNumber) {
  if (!Number.isInteger(decimalNumber)) {
    return "error: empty field";
  } else if (decimalNumber < 0){
    return "error: negative";
  }
}

function makeRoman(decimalNumber) {
  var numberError = error(decimalNumber);
  if (numberError) {
    return numberError;
  } else if (decimalNumber === 0) {
    return "nulla";
  } else if (numerals.hasOwnProperty(decimalNumber)) {
    return numerals[decimalNumber];
  } else {
    var numeralTotal = 0;
    var result = "";
    for (var index = numeralValues.length - 1; index >= 0; index--) {
      var currentValue = numeralValues[index];
      while (numeralTotal + currentValue <= decimalNumber) {
        numeralTotal += currentValue;
        result += numerals[currentValue];
      }
    }
    return result;
  }
}


// User Interface logic

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var decimalNumber = parseInt($("input#decimal-number").val());
    console.log(makeRoman(decimalNumber));
  });
});
