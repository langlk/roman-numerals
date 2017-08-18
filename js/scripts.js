// business logic

var numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
var numeralValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

// We do not want empty inputs or negative numbers being converted
function error(decimalNumber) {
  if (!Number.isInteger(decimalNumber)) {
    return "error: empty field";
  } else if (decimalNumber < 0){
    return "error: negative";
  }
}

function makeColumnRoman(decimalNumber) {
  var numeralTotal = 0; // Keep track of total value of our Roman Numeral string so far.
  var result = "";
  for (var index = numeralValues.length - 1; index >= 0; index--) {
    // Go through our possible numeral values, starting with the biggest.
    var numeralCount = 0; // We want to keep track of how many of a numeral we've added
    while (numeralTotal + numeralValues[index] <= decimalNumber) {
      // If a numeral is small enough to add to the numeral string without going over our decimal ammount, we add it as many times as we can without going over the decimal ammount.
        numeralTotal += numeralValues[index];
        result += numerals[index];
    }
  }
  return result;
}

function makeRoman(decimalNumber) {
  var numberError = error(decimalNumber);
  if (numberError) { // Find out if we have an illegal input
    return numberError;
  } else if (decimalNumber === 0) { // 0 doesn't need to be converted by column
    return "nulla";
  } else { // We need to convert each column (10s, etc) individually
    var result = "";
    var place = 10; // What place (10s, 100s, etc) we're converting
    while (decimalNumber > 0) {
      result = makeColumnRoman(decimalNumber % place) + result;
      // Since we go from smallest place to largest, add result to front of Roman Numeral string
      decimalNumber -= decimalNumber % place;
      place *= 10;
    }
    return result;
  }
}

// User Interface logic

$(document).ready(function() {
  console.log(numerals.length);
  console.log(numeralValues.length);
  $("#number").submit(function(event) {
    event.preventDefault();
    var decimalNumber = parseInt($("input#decimal-number").val());
    $("#result").text(makeRoman(decimalNumber));
  });
});
