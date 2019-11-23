// $(function() {
//   //   $('#getdataplaystore').click(function() {
//   //     console.log("Get data...");
//   //     // var keyword =$("#keyword").val();
//   //     // var url='http://omdbapi.com/?apikey=3064720e&s=' + keyword;
//   // });

//   $("#go").click(function() {
//     console.log("name");
//     $.get("http://127.0.0.1:8080/playstore", function(DataGoogleplaystore) {
//     //console.log(DataGoogleplaystore);
//     var test_1 = DataGoogleplaystore.DataGoogleplaystore;
//     for(var index in DataTransfer.test_1){
//     var Search1 = data.test_1[index];
//     console.log(Search1);
//     }

//     });
//   });
// });
// $.get("imdb.json", function (Search, totalResults) {
//     console.log(Search);
//     console.log(totalResults);
//     var Search = Search.Search;
//     var totalResults = '<tr><th>Title</th><th>Year</th><th>imdb</th><th>Type</th><th>Poster</th></tr>'
//     $('#name').append(totalResults);
//     for (var index in Search) {
//         var Search1 = Search[index];
//         var tableRow = '<tr><td>' + Search1.Title + '</td><td>' +
//             Search1.Year + '</td><td>' + Search1.imdbID + '</td><td>' + Search1.Type + '</td><td><img src=' +
//             Search1.Poster + ' height=60%></td></tr>';
//         $("#name").append(tableRow);
//         console.log(Search);
//         console.log(Search1)
//     }
// });

// $.get(url, function(data, status){
//     console.log(data);
//     $("#name").empty();
//     for (var index in DataTransfer.Search) {
//         var movie  = data.Search[index];
//         var row = '<h4>'+movie.Title + '</h4>';
//         $("#new").append(row);
//         }
// });

const playstore = "http://127.0.0.1:8080/playstore";

fetch(playstore)
  .then(Response => Response.json())
  .then(data => tebleData(data))
  .catch(e => {
    console.log("error : " + e);
  });

function tebleData(data) {
  var mainContainer = document.getElementById("myData");
  var DATA1 =document.createElement("thead");
   DATA1.innerHTML = `<tr><th>App</th><th>Type</th><th>Price</th></tr>`;
   mainContainer.appendChild(DATA1);
  for (var i = 0; i < data.length; i++) {
    var DATA =document.createElement("tbody");
      DATA.innerHTML = `<tr><th><a href="link.html">${data[i].app}</a></th><th>${data[i].type}</th><th>${data[i].price}</th></tr>`;
      mainContainer.appendChild(DATA);
  }
} 

fetch(playstore)
  .then(Response => Response.json())
  .then(data => appenData(data))
  .catch(e => {
    console.log("error : " + e);
  });