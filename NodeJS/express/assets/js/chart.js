import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js";
var xValues = ["Java", "Python", "Javascript", "SQL", "Shell", "HTML", "C"];
var yValues = [50, 25, 5, 10, 6, 2, 2];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2a282b",
  "#e8c3b9",
  "#b76cb3",
  "#71bc5e",
  "#414ca0"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "Programming Skills"
    }
  }
});