$(document).ready(function() {
    //Event listener for when the button is clicked
    $("#searchbutton").click(function(){
        //Variable to hold search text from user
        var searchform = $("#searchform").val();
                      

        //Variable to hold api call from wikipedia with search input
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchform + "&callback=?";
    
        $.ajax({type:"GET",url:url, async:true, dataType:"json", 
        success: function(data){

               //Heading - console.log(data[1][0]);
               //Description -  console.log(data[2][0]);
               //Link - console.log(data[3][0]);
                $("#searchresults").empty();
                for(var i = 0; i < data[1].length; i++) {
                $("#searchresults").append("<li><a href="+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
                $("ul > li").addClass("list-group-item");
                    
                } 
                
                $("#searchform").val("");
            },
            
            error:function(errorMessage){
                console.log("Error");
            }
            
        });

});

  $("#searchform").keypress(function(e) {
        
        if (e.which == 13) {
            e.preventDefault();
            $("#searchbutton").click();
        }
    });
});
     

    
    
      