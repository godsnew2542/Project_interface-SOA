ratingOne = [];
$(function() {
  $.get(All_list, function(rating1) {
    for (var i = 0; i < rating1.length; i++) {
      ratingOne.push(rating1[i].rating);
    }
    console.log(ratingOne);
    if (
      ratingOne == 1.0 ||
      ratingOne == 1.1 ||
      ratingOne == 1.2 ||
      ratingOne == 1.3 ||
      ratingOne == 1.4 ||
      ratingOne == 1.5 ||
      ratingOne == 1.6 ||
      ratingOne == 1.7 ||
      ratingOne == 1.8 ||
      ratingOne == 1.9
    ) {
      console.log("1.0-1.9");
    } else {
      console.log("No");
    }
    //     var a = 4;

    // while(a < rating1.length){
    // 	// document.write(a + " ");
    //     console.log(a + " ");
    //     a++;

    // }
  });
});

// $(document).ready(function () {
//     $.get(Rating1, function (responseData) {
//         $("#Rating_1-table").DataTable({
//             processing: true,
//             data: responseData,
//             columns: [
//                 {
//                     "data": "app",
//                     "render": function (data, type, row, meta) {
//                         if (type === 'display') {
//                             data = '<a href="index.html"' + data + '">' + data + '</a>';
//                         }
//                         return data;
//                     }
//                 },
//                 { data: "rating" },
//                 { data: "installs" },
//                 { data: "price" },
//             ]
//         });
//     }).fail(function () {
//         alert("Can not data from URL");
//     });
// });
