// Charts-list.html
var Charts_list = "http://127.0.0.1:8080/playstore";
// Free-list.html
var Free_list = "";


$(document).ready(function() {
  $.get(Free_list, function(responseData) {
    $("#Free-table").DataTable({
      processing: true,
      data: responseData,
        columns: [
          { 
            "data": "app",
            "render": function(data, type, row, meta){
               if(type === 'display'){
                   data = '<a href="index.html"' + data + '">' + data + '</a>';
               }   
               return data;
            }
         },
          { data: "rating" },
          { data: "installs" },
          { data: "price" },         
        ]    
    });
  });
});
