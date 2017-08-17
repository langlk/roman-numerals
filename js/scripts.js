// business logic

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
  } else if(decimalNumber === 0) {
    return "nulla";
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
