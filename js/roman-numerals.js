function RomanNumerals() {
  this.numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  this.numeralValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
}

// We do not want empty inputs or negative numbers being converted
RomanNumerals.prototype.error = function(decimalNumber) {
  if (!Number.isInteger(decimalNumber)) {
    return "error: empty field";
  } else if (decimalNumber < 0){
    return "error: negative";
  }
}

RomanNumerals.prototype.makeRoman = function(decimalNumber) {
  var numberError = this.error(decimalNumber);
  if (numberError) { // Find out if we have an illegal input
    return numberError;
  } else if (decimalNumber === 0) { // 0 doesn't need to be converted by column
    return "nulla";
  } else { // We need to convert each column (10s, etc) individually
    var result = "";
    var numeralTotal = 0;
    for (var index = this.numeralValues.length - 1; index >= 0; index--) {
      // Go through our possible numeral values, starting with the biggest.
      var numeralCount = 0; // We want to keep track of how many of a numeral we've added
      while (numeralTotal + this.numeralValues[index] <= decimalNumber) {
        // If a numeral is small enough to add to the numeral string without going over our decimal ammount, we add it as many times as we can without going over the decimal ammount.
          numeralTotal += this.numeralValues[index];
          result += this.numerals[index];
      }
    }
    return result;
  }
};

exports.romanModule = RomanNumerals;
