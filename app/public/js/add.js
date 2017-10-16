
// When user clicks add-btn

// object.onkeyup = function(){
//         var a=document.getElementById("Title").value;
//         var b=document.getElementById("Network").value;
//         var c=document.getElementById("Genre").value;
//         var d=document.getElementById("Episodes").value;
//         if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="")
//         {
//             return false; 
            
//        }

        
        
//    }

   // if(validate === false)
   // {
   //    $('#add-btn').attr('disabled', 'disabled');
   //  }else {
   //          $('#add-btn').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
   //      }
        
document.onkeyup = function()
{
        var a=document.getElementById("Title").value;
        var b=document.getElementById("Network").value;
        var c=document.getElementById("Genre").value;
        var d=document.getElementById("Episodes").value;
        
        if (a !== null && b !== null && c !== null && d !== null)
          {
          $('#add-btn').attr("disabled", false); 
        
        if {b !=null
           $('#add-btn').attr('disabled', true);  
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

