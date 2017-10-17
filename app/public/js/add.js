

document.onkeyup = function()
{
        var a=document.getElementById("Title").value;
        var b=document.getElementById("Network").value;
        var c=document.getElementById("Genre").value;
        var d=document.getElementById("Episodes").value;
        
        console.log(b);

        {$('#add-btn').removeAttr('disabled');}

        if(a === "" || a ===undefined)
        {$('#add-btn').attr('disabled', 'disabled');
        } 
        if(b === "" || b ===undefined)
        {$('#add-btn').attr('disabled', 'disabled');
        } 
        if(c === "" || c ===undefined)
        {$('#add-btn').attr('disabled', 'disabled');
        } 
        if(d === "" || d ===undefined)
        {$('#add-btn').attr('disabled', 'disabled');
        } 



  }



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

