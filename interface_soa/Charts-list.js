var con =[];
$(function() {
  $.get(Category, function(data) {
    
    for (var i = 0; i < data.length; i++) {
      con.push(data[i].category);
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



