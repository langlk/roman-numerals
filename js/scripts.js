// business logic

function error(decimalNumber) {
  if (decimalNumber === "") {
    return "error: empty field";
  }

}



// User Interface logic

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var decimalNumber = $("input#decimal-number").val();
    console.log(error(decimalNumber));
  });
});
