// Submit button click event
$("#submit").on("click", function (event) {
  event.preventDefault();

  // Holds user input
  var userData = {
    name: $("#name").val(),
    photo: $("#image").val(),
    scores: [
      $("#quest1").val(),
      $("#quest2").val(),
      $("#quest3").val(),
      $("#quest4").val(),
      $("#quest5").val(),
      $("#quest6").val(),
      $("#quest7").val(),
      $("#quest8").val(),
      $("#quest9").val(),
      $("#quest10").val(),
    ],
  };

  // Post user input to the friends api
  $.post("/api/friends", userData, function (data) {
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);

    $("#results-modal").modal("toggle");
  });

});
