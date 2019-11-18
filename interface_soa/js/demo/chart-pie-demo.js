// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Application number", "Free", "Paid", "NaN"],
    datasets: [
      {
        data: [1, 1, 1, 1],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
        hoverBorderColor: "rgba(234, 236, 244, 1)"
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80
  }
});

var print = "กรุณาเลื่อก Application ที่ต้องการดูข้อมูล"
$(".select-application-data").empty();
$(".select-application-data").append(print);

function A1(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [55, 30, 15, 50],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A2(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A3(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A4(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A5(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A6(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A7(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A8(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A9(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A10(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A11(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A12(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A13(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A14(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A15(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A16(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A17(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A18(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A19(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A20(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A21(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A22(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A23(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A24(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A25(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A26(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A27(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A28(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A29(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A30(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A31(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A32(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}

function A33(obj) {
  $(".select-application-data").empty();
  print = obj;
  $(".select-application-data").append(print);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Application number", "Free", "Paid", "NaN"],
      datasets: [
        {
          data: [2, 5, 10, 20],
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#e74a3b"],
          hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#d92e59"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
}
