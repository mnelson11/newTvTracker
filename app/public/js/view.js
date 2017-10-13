// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the show they typed into the Show-search input
  var showSearched = $("#show-search").val().trim();

  // Make an AJAX get request to our api, including the user's Show in the url
  $.get("/api/title/" + showSearched, function(data) {

    console.log(data);
    // Call our renderShows function to add our Shows to the page
    renderShows(data);

  });

});

// When user hits the Network-search-btn
$("#network-search-btn").on("click", function() {

  // Save the authorthey typed into the Network-search input
  var networkSearched = $("#network-search").val().trim();

  // Make an AJAX get request to our api, including the user's Network in the url
  $.get("/api/network/" + networkSearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderShow function to add our Shows to the page
    renderShows(data);

  });

});

// When user hits the genre-search-btn
$("#genre-search-btn").on("click", function() {

  // Save the Show they typed into the genre-search input
  var genreSearched = $("#genre-search").val().trim();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/genre/" + genreSearched, function(data) {

    console.log(data);
    // Call our renderShows function to add our Shows to the page
    renderShows(data);

  });

});

function renderShows(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].Title + "</h2>");
      div.append("<p>Network: " + data[i].Network + "</p>");
      div.append("<p>Genre: " + data[i].Genre + "</p>");
      div.append("<p>Episodes: " + data[i].Episodes + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE SHOW</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        // On success, run the following code
        .done(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
