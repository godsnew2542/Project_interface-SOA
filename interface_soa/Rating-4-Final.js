var Reting4 = localStorage.getItem("Reting4");
console.log(Reting4);
var Finalla = "http://127.0.0.1:8080/all/" + Reting4;
console.log(Finalla);

var nameApp = [];
var Content_Rating = [];
var Rating = [];
var Genres = [];
var Category = [];
var Size = [];
var Installs = [];
var Type = [];
var Price = [];
var Android_Ver = [];
var Current_Ver = [];
var last_Updated = [];
var Review = [];
var Sentiment = [];
var Polarity = [];
var Subjectivity = [];

$(function() {
  if (Reting4 == Reting4) {
    $.get(Finalla, function(datafinal) {
      console.log("yes");
      for (var x = 0; x < datafinal.length; x++) {
        nameApp.push(datafinal[x].app);
        Content_Rating.push(datafinal[x].content_Rating);
        Rating.push(datafinal[x].rating);
        Genres.push(datafinal[x].genres);
        Category.push(datafinal[x].category);
        Size.push(datafinal[x].size);
        Installs.push(datafinal[x].installs);
        Type.push(datafinal[x].type);
        Price.push(datafinal[x].price);
        Android_Ver.push(datafinal[x].android_Ver);
        Current_Ver.push(datafinal[x].current_Ver);
        Review.push(datafinal[x].reviews);
        last_Updated.push(datafinal[x].last_Updated);
      }
      // console.log(nameApp);
      // console.log(Content_Rating);
      console.log(Rating);
      // console.log(Genres);
      // console.log(Category);
      // console.log(Size);
      // console.log(Installs);
      // console.log(Type);
      // console.log(Price);
      // console.log(Android_Ver);
      // console.log(Current_Ver);
      console.log(Review);
      // console.log(last_Updated);
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

      $("#Genres").append();
      var Genres1 = `Genres: ${Genres}`;
      $("#Genres").append(Genres1);

      $("#Category").append();
      var Category1 = `Category: ${Category}`;
      $("#Category").append(Category1);

      //------3----------
      $("#Size").append();
      var Size1 = `Size: ${Size}`;
      $("#Size").append(Size1);

      $("#Installs").append();
      var Installs1 = `Installs: ${Installs}`;
      $("#Installs").append(Installs1);

      $("#Type-Price").append();
      var Type1 = `Type And Price: ${Type} : ${Price}`;
      $("#Type-Price").append(Type1);

      //------4----------
      $("#DAta").append();
      var DAta1 = `About App: Suport Android Version ${Android_Ver}  ${Current_Ver} : Latest Update ${last_Updated}`;
      $("#DAta").append(DAta1);
      
      //------Table----------
      $("#REview").append();
      var table1 = `${Review}`;
      $("#REview").append(table1);

      console.log(appname);
      console.log(Content_Rating1);
      console.log(Rating1);
      console.log(Genres1);
      console.log(Category1);
      console.log(Size1);
      console.log(Installs1);
      console.log(Type1);
      console.log(DAta1);
      console.log(table1);
      
    });
  } else {
    console.log("NO data");
  }
});