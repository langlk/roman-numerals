// business logic

var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var numeralValues = [1, 5, 10, 50, 100, 500, 1000];

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
      numeralCount += 1;
      if (numeralCount > 3) {
        // If we already have three numerals in a row we want to replace with the next greater numeral minus this numeral
        var greaterVal = numeralTotal + 2 * numeralValues[index];
        numeralTotal += (greaterVal - numeralValues[index]);
        var resultIndex = result.length - 1;
        while (numeralTotal > decimalNumber && resultIndex >= 0) {
          // Remove all the numerals we'd already put in the string making the total too large, so we can add the new pair of numerals
          var thisNumeral = result.charAt(resultIndex);
          numeralTotal -= numeralValues[numerals.indexOf(thisNumeral)];
          resultIndex -= 1;
        }
        // Make the new string now that we've removed the extra numerals
        result = result.substring(0, resultIndex) + numerals[index] + numerals[numeralValues.indexOf(greaterVal)];
      } else {
        // Keep track of our total and add to string
        numeralTotal += numeralValues[index];
        result += numerals[index];
      }
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
  $("#number").submit(function(event) {
    event.preventDefault();
    var decimalNumber = parseInt($("input#decimal-number").val());
    $("#result").text(makeRoman(decimalNumber));
  });
});
