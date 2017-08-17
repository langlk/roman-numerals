// business logic

var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var numeralValues = [1, 5, 10, 50, 100, 500, 1000];

function error(decimalNumber) {
  if (!Number.isInteger(decimalNumber)) {
    return "error: empty field";
  } else if (decimalNumber < 0){
    return "error: negative";
  }
}

function makeColumnRoman(decimalNumber) {
  var numeralTotal = 0;
  var result = "";
  for (var index = numeralValues.length - 1; index >= 0; index--) {
    var numeralCount = 0;
    while (numeralTotal + numeralValues[index] <= decimalNumber) {
      numeralCount += 1;
      if (numeralCount > 3) {
        var greaterVal = numeralTotal + 2 * numeralValues[index];
        numeralTotal += (greaterVal - numeralValues[index]);
        var resultIndex = result.length - 1;
        while (numeralTotal > decimalNumber && resultIndex >= 0) {
          var thisNumeral = result.charAt(resultIndex);
          numeralTotal -= numeralValues[numerals.indexOf(thisNumeral)];
          resultIndex -= 1;
        }
        result = result.substring(0, resultIndex) + numerals[index] + numerals[numeralValues.indexOf(greaterVal)];
      } else {
        numeralTotal += numeralValues[index];
        result += numerals[index];
      }
    }
  }
  return result;
}

function makeRoman(decimalNumber) {
  var numberError = error(decimalNumber);
  if (numberError) {
    return numberError;
  } else if (decimalNumber === 0) {
    return "nulla";
  } else {
    var result = "";
    var place = 10;
    while (decimalNumber > 0) {
      result = makeColumnRoman(decimalNumber % place) + result;
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
