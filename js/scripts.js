
$(function() {
  $("#form-one").submit(function(event) {

    var blanks = ['last-name', 'illness', 'adjective-one', 'adjective-two', 'silly', 'place', 'number']

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val()
      $("." + blank).text(userInput)
    });

    // (Above forEach loop returns the same result as below)
    //
    // 
    // var lastNameInput = $("input#last-name").val();
    // var illnessInput = $("input#illness").val();
    // var nounInput = $("input#noun").val();
    // var adjOneInput = $("input#adjective-one").val();
    // var adjTwoInput = $("input#adjective-two").val();
    // var sillyInput = $("input#silly").val();
    // var placeInput = $("input#place").val();
    // var numberInput = $("input#number").val();
    //
    // $(".last-name").text(lastNameInput);
    // $(".illness").text(illnessInput);
    // $(".noun").text(nounInput);
    // $(".adjective-one").text(adjOneInput);
    // $(".adjective-two").text(adjTwoInput);
    // $(".silly").text(sillyInput);
    // $(".place").text(placeInput);
    // $(".number").text(numberInput);

    $("#note").show();

    event.preventDefault();
  });
});
