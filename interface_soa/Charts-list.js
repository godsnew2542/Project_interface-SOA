var con =[];
$(function() {
  $.get(Charts_list, function(data) {
    
    for (var i = 0; i < data.length; i++) {
      // Charts-list.html
      con.push(data[i].category);
      // var Category =
      // `<div>
      //   <u style="color:#18ce18" value="` + data[i] + `">` +
      //   [i + 1] +
      //   " " +
      //   data[i].category +
      //   "</u>" +
      //   "<br>"
      //   "</div>";
      // $("#Charts-list").append(Category);
    }
    $("#Charts-list").empty();
    for (var i=0; i<con.length; i++){
      var Category =
      `<div onclick=nan('${con[i]}');>
        <u style="color:#18ce18" >` +
        [i + 1] +
        " " +
        data[i].category +
        "</u>" +
        "<br>"
        "</div>";
      $("#Charts-list").append(Category);
    }
  });
});
function nan(con) {
  console.log(con);
  localStorage.setItem("Category", con);
  location.href = "Charts-list.html", con;
  
}



