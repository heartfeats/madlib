
$(function() {
  $("#form-one").submit(function(event) {
    var lastNameInput = $("input#last-name").val();
    var illnessInput = $("input#illness").val();
    var nounInput = $("input#noun").val();
    var adjOneInput = $("input#adjective-one").val();
    var adjTwoInput = $("input#adjective-two").val();
    var sillyInput = $("input#silly").val();
    var placeInput = $("input#place").val();
    var numberInput = $("input#number").val();

    $(".last-name").text(lastNameInput);
    $(".illness").text(illnessInput);
    $(".noun").text(nounInput);
    $(".adjective-one").text(adjOneInput);
    $(".adjective-two").text(adjTwoInput);
    $(".silly").text(sillyInput);
    $(".place").text(placeInput);
    $(".number").text(numberInput);
    // $(".last-name").text(last-name-input);

    $("#note").show();

    event.preventDefault();
  });
});
