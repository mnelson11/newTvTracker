 
// Make a get request to our api route that will return every show

$.get("/api/all", function(data) {

  // For each show
   //that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold show
     //data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "show-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our show
     //data to the well we just placed on the page
    $("#show-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].Title + "</h2>");
    $("#show-well-" + i).append("<h3>Network: " + data[i].Network + "</h4>");
    $("#show-well-" + i).append("<h3>Genre: " + data[i].Genre + "</h4>");
    $("#show-well-" + i).append("<h4>Episodes: " + data[i].Episodes_Watched + "/" + data[i].Episodes + "</h4>");
    $("#show-well-" + i).append("<button class='watch-episode' data-episode='" + data[i].id + "' data-episode-watched='" + data[i].Episodes_Watched + "'>+</button")
    $("#show-well-" + i).append("<button class='delete-episode' data-episode='" + data[i].id + "' data-episode-deleted='" + data[i].Episodes_Watched + "'>-</button")
    $("#show-well-" + i).append("<button class='delete' data-id='" + data[i].id + "'>DELETE SHOW</button>");

    
  }

  $(".watch-episode").click(function(){
      
      //var episodeWatched = parseInt($(this).data("episode-watched")) + 1;

      var info = {
        id: $(this).data("episode"),
        //Episodes_Watched: episodeWatched
      };

      $.post("/api/addepisode", info)
      .done(function(addEpisode) {
        console.log(addEpisode);
        console.log("Episode Watched Successfully!");
      })
      location.reload();
    });

   $(".delete-episode").click(function(){
      
     // var episodeWatched = parseInt($(this).data("episode-deleted")) - 1;

      var info = {
        id: $(this).data("episode"),
        //Episodes_Watched: episodeWatched
      };

      $.post("/api/deleteepisode", info)
      .done(function(deleteEpisode) {
        console.log(deleteEpisode);
        console.log("Episode Deleted Successfully!");
      })
      location.reload();
    });

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
});