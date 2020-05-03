$("#submit").on("click", function (event) {
  event.preventDefault();

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

  console.log("FrontEnd: " + userData.name);
  console.log("FrontEnd: " + userData.photo);
  console.log("FrontEnd: " + userData.scores);

  // $.get("/api/friends", userData, function (data) {
  //   $("#match-name").text(data.name);
  //   $("#match-img").attr("src", data.photo);

  //   $("#results-modal").modal("toggle");
  // });

  $.ajax("/api/friends", {
    type: "POST",
    data: userData,
  }).then(function (data) {
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);

    $("#results-modal").modal("toggle");
  });
});
