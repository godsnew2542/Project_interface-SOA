var dataApp = localStorage.getItem("dataApp");
console.log(dataApp);
var Finalla = "http://127.0.0.1:8080/all/" + dataApp;
console.log(Finalla);
var Finallatable = "http://127.0.0.1:8080/app/reviews/" + dataApp;
console.log(Finallatable);

var nameApp = [];
var Content_Rating = [];
var Rating = [];
var Category = [];
var Size = [];
var Type = [];
var Price = [];
var Review = [];
var Sentiment = [];
var Polarity = [];
var Subjectivity = [];

$(function() {
  if (dataApp == dataApp) {
    $.get(Finalla, function(datafinal) {
      console.log("yes");
      for (var x = 0; x < datafinal.length; x++) {
        nameApp.push(datafinal[x].app);
        Content_Rating.push(datafinal[x].content_Rating);
        Rating.push(datafinal[x].rating);
        Category.push(datafinal[x].category);
        Size.push(datafinal[x].size);
        Type.push(datafinal[x].type);
        Price.push(datafinal[x].price);
      }
      //------1----------
      $("#Appname").append();
      var appname = `Appname: ${nameApp}`;
      $("#Appname").append(appname);

      $("#Content_Rating").append();
      var Content_Rating1 = `Content Rating: ${Content_Rating}`;
      $("#Content_Rating").append(Content_Rating1);

      //------2----------
      $("#Rat").append();
      var Rating1 = `Rating: ${Rating}`;
      $("#Rat").append(Rating1);

      $("#Category").append();
      var Category1 = `Category: ${Category}`;
      $("#Category").append(Category1);

      //------3----------
      $("#Size").append();
      var Size1 = `Size: ${Size}`;
      $("#Size").append(Size1);

      $("#Type-Price").append();
      var Type1 = `Type And Price: ${Type} : ${Price}`;
      $("#Type-Price").append(Type1);
      
      $.get(Finallatable, function(datafinalTable) {
        for (var i = 0; i < datafinalTable.length; i++) {
          Review.push(
            datafinalTable[i].translate_Reviews +
              '<hr class="sidebar-divider"> <br>'
          );
        }

        $("#REview").append();
        var table1 = `${Review} <br>`;
        $("#REview").append(table1);
      });
    });
  } else {
    console.log("NO data");
  }
});
