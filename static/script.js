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


const arrowSeeStats = document.getElementById('arrowSeeStats');
const statTemp = document.getElementById('statTemp');
const statHumidity = document.getElementById('statHumidity');
const statPressure = document.getElementById('statPressure');
const dataLive = document.getElementsByClassName('dataLive')[0];
const arrowSeeStatsChildren = arrowSeeStats.children;
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const arrowHome = document.getElementById('arrowHome');
const seeStats = document.getElementById('seeStats');
const iRound = document.getElementsByClassName('iRound');
const date = document.getElementById('date');

let newDate = new Date();
 

let formattedDate = newDate.toLocaleDateString("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

date.textContent = formattedDate;


let clicks = 0;


for (const i of iRound) {
  if (i === arrowHome || i === arrowRight)
    i.addEventListener('click', clickAdd);

  if (i === arrowLeft)
    i.addEventListener('click', clickRemove);
}

function clickAdd() {
  clicks++;
}

function clickRemove() {
  clicks--;
}

for (const i of iRound) {
  i.addEventListener('click', display);
}

function display() {
  switch (clicks) {
    case 0:
      homeDisplay();
      break;
    case 1:
      temperatureDisplay();
      break;
    case 2:
      humidityDisplay();
      break;
    case 3:
      pressureDisplay();
      break;
  }
}

function homeDisplay() {
  dataLive.classList.remove("hidden");

  for (const child of arrowSeeStatsChildren) {
    child.classList.remove("hidden");
  }
  statHumidity.classList.add("hidden");
  statTemp.classList.add("hidden");
  statPressure.classList.add("hidden");
  arrowLeft.classList.add("hidden");
  arrowRight.classList.add("hidden");


}

function temperatureDisplay() {

  statTemp.classList.remove("hidden");
  arrowLeft.classList.remove("hidden");
  arrowRight.classList.remove("hidden");
  statHumidity.classList.add("hidden");
  dataLive.classList.add("hidden");
  statPressure.classList.add("hidden");
  arrowSeeStats.classList.add("hidden");
  for (const child of arrowSeeStatsChildren) {
    child.classList.add("hidden");
  }


}

function humidityDisplay() {

  statHumidity.classList.remove("hidden");
  arrowLeft.classList.remove("hidden");
  arrowRight.classList.remove("hidden");
  statTemp.classList.add("hidden");
  dataLive.classList.add("hidden");
  statPressure.classList.add("hidden");
  for (const child of arrowSeeStatsChildren) {
    child.classList.add("hidden");
  }
}

function pressureDisplay() {

  statPressure.classList.remove("hidden");
  arrowLeft.classList.remove("hidden");
  arrowRight.classList.remove("hidden");
  statTemp.classList.add("hidden");
  dataLive.classList.add("hidden");
  statHumidity.classList.add("hidden");
  arrowRight.classList.add("hidden");
  for (const child of arrowSeeStatsChildren) {
    child.classList.add("hidden");
  }
}

window.addEventListener("load", () => {
  seeStats.classList.add("bounce");
});

seeStats.addEventListener('mouseenter', () => {
  seeStats.classList.remove('bounce');
});

seeStats.addEventListener('mouseleave', () => {
  seeStats.classList.add('bounce');
});