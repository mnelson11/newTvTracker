// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newShow object
  var newShow = {
    Title: $("#Title").val().trim(),
    Network: $("#Network").val().trim(),
    Genre: $("#Genre").val().trim(),
    Episodes: $("#Episodes").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newShow)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#Title").val("");
  $("#Network").val("");
  $("#Genre").val("");
  $("#Episodes").val("");

});
