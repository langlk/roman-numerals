// business logic

function error(decimalNumber) {
  if (!Number.isInteger(decimalNumber)) {
    return "error: empty field";
  } else if (decimalNumber < 0){
    return "error: negative";
  }
}



// User Interface logic

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var decimalNumber = parseInt($("input#decimal-number").val());
    console.log(error(decimalNumber));
  });
});
