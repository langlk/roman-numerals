var RomanNumerals = require('./../js/roman-numerals.js').romanModule;

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var roman = new RomanNumerals();
    var decimalNumber = parseInt($("input#decimal-number").val());
    $("#result").text(roman.makeRoman(decimalNumber));
  });
});
