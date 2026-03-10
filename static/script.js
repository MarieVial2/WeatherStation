// // Nombre de points maximum affichés en même temps sur le graphe
// const maxDataPoints = 10;

// // Fonction générique pour configurer un graphique
// function createChart(ctx, label, color) {
//   return new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: [],
//       datasets: [
//         {
//           label: label,
//           data: [],
//           borderColor: color,
//           backgroundColor: color,
//           borderWidth: 2,
//           tension: 0.3,
//           pointRadius: 2,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       animation: false,
//       scales: {
//         x: { display: true },
//         y: { display: true },
//       },
//     },
//   });
// }

// const tempChart = createChart(
//   document.getElementById("tempChart").getContext("2d"),
//   "Température (°C)",
//   "rgba(255, 99, 132, 1)",
// );
// const humChart = createChart(
//   document.getElementById("humChart").getContext("2d"),
//   "Humidité (%)",
//   "rgba(54, 162, 235, 1)",
// );
// const presChart = createChart(
//   document.getElementById("presChart").getContext("2d"),
//   "Pression (mbar)",
//   "rgba(75, 192, 192, 1)",
// );

// function addDataToChart(chart, timeLabel, newValue) {
//   chart.data.labels.push(timeLabel);
//   chart.data.datasets[0].data.push(newValue);

//   if (chart.data.labels.length > maxDataPoints) {
//     chart.data.labels.shift();
//     chart.data.datasets[0].data.shift();
//   }
//   chart.update();
// }

// function updateSensorData() {
//   fetch("/api/data")
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById("temp").innerText = data.temperature;
//       document.getElementById("hum").innerText = data.humidity;
//       document.getElementById("pres").innerText = data.pressure;

//       const now = new Date();
//       const timeString =
//         String(now.getHours()).padStart(2, "0") +
//         ":" +
//         String(now.getMinutes()).padStart(2, "0") +
//         ":" +
//         String(now.getSeconds()).padStart(2, "0");

//       addDataToChart(tempChart, timeString, data.temperature);
//       addDataToChart(humChart, timeString, data.humidity);
//       addDataToChart(presChart, timeString, data.pressure);
//     })
//     .catch((error) => console.error("Erreur:", error));
// }

// setInterval(updateSensorData, 2000);

// updateSensorData();


const arrowHome = document.getElementById('arrowHome');
const statTemp = document.getElementById('statTemp');
const dataLive = document.getElementsByClassName('dataLive')[0];
const arrowHomeChildren = arrowHome.children;
const iRound = document.getElementsByClassName('iRound');



arrowHome.addEventListener('click', (e) => {
  arrowHome.classList.add('hidden');
  
  statTemp.classList.remove('hidden');
  dataLive.classList.add('hidden');

  for (child of arrowHomeChildren) {
    child.classList.add('hidden');
  }
  

})
