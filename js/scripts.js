// business logic

var numerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

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
