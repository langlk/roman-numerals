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
  if (numeralValues.includes(decimalNumber)) {
    return numerals[numeralValues.indexOf(decimalNumber)];
  } else {
    var numeralTotal = 0;
    var result = "";
    for (var index = numeralValues.length - 1; index >= 0; index--) {
      var currentValue = numeralValues[index];
      var numeralCount = 0;
      while (numeralTotal + currentValue <= decimalNumber) {
        numeralCount += 1;
        if (numeralCount > 3) {
          var greaterVal = numeralTotal + 2 * currentValue;
          var greaterValIndex = numeralValues.indexOf(greaterVal);
          numeralTotal += (greaterVal - currentValue);
          var resultIndex = result.length - 1;
          while (numeralTotal > decimalNumber && resultIndex >= 0) {
            var thisNumeral = result.charAt(resultIndex);
            numeralTotal -= numeralValues[numerals.indexOf(thisNumeral)];
            resultIndex -= 1;
          }
          result = result.substring(0, resultIndex) + numerals[index] + numerals[greaterValIndex];
        } else {
          numeralTotal += currentValue;
          result += numerals[index];
        }
      }
    }
    return result;
  }
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
      var column = decimalNumber % place;
      result = makeColumnRoman(column) + result;
      decimalNumber -= column;
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
    console.log(makeRoman(decimalNumber));
  });
});
