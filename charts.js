const barChart = document.getElementById("bar-chart");
const doughnutChartAvg = document.getElementById("doughnut-chart-average");
const doughnutChartTop = document.getElementById("doughnut-chart-top");
const doughnutChartMe = document.getElementById("doughnut-chart-me");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: [20, "", 25, "", 30, "", 35, "", 40, "", 60, "", 65],
    datasets: [
      {
        label: "",
        data: [12, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90],
        backgroundColor: "#0800a3",
        borderWidth: 0,
        barThickness: 15,
      },
      {
        label: "",
        data: [50, 65, 70, 75, 80, 90, 100, 110, 120, 130, 160, 170, 190],
        backgroundColor: "#4935ff",
        borderWidth: 0,
        barThickness: 15,
      },
      {
        label: "",
        data: [80, 90, 100, 120, 140, 160, 180, 210, 220, 240, 260, 280, 320],
        backgroundColor: "#85afff",
        borderWidth: 0,
        barThickness: 15,
      },
    ],
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 300,
        minTicksLimit: 4,
        ticks: {
          stepSize: 100,
          callback: (value) => "$" + value,
        },
      },
    },
    maintainAspectRatio: true,
    aspectRatio: 1 | 3,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(doughnutChartAvg, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 22],
        backgroundColor: ["#22d6aa", "#d8f7f0"],
        hoverOffset: 4,
        borderRadius: 5,
      },
    ],
  },
  options: {
    radius: 40,
    cutout: "70%",
  },
  plugins: [
    {
      id: "doughnutLabel",
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        const xCord = chart.getDatasetMeta(0).data[0].x;
        const yCord = chart.getDatasetMeta(0).data[0].y;
        ctx.font = "bold 10px sans-serif";
        ctx.fillStyle = "rgba(0,0,0)";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";
        ctx.fillText(
          `${data.datasets[0].data[0] - data.datasets[0].data[1]}%`,
          xCord,
          yCord
        );
      },
    },
  ],
});

new Chart(doughnutChartTop, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 5],
        backgroundColor: ["#22d6aa", "#d8f7f0"],
        hoverOffset: 4,
        borderRadius: 5,
      },
    ],
  },
  options: {
    radius: 40,
    cutout: "70%",
  },
  plugins: [
    {
      id: "doughnutLabel",
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        const xCord = chart.getDatasetMeta(0).data[0].x;
        const yCord = chart.getDatasetMeta(0).data[0].y;
        ctx.font = "bold 10px sans-serif";
        ctx.fillStyle = "rgba(0,0,0)";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";
        ctx.fillText(
          `${data.datasets[0].data[0] - data.datasets[0].data[1]}%`,
          xCord,
          yCord
        );
      },
    },
  ],
});

new Chart(doughnutChartMe, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 41],
        backgroundColor: ["#22d6aa", "#d8f7f0"],
        hoverOffset: 4,
        borderRadius: 5,
      },
    ],
  },
  options: {
    radius: 40,
    cutout: "70%",
  },
  plugins: [
    {
      id: "doughnutLabel",
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        const xCord = chart.getDatasetMeta(0).data[0].x;
        const yCord = chart.getDatasetMeta(0).data[0].y;
        ctx.font = "bold 10px sans-serif";
        ctx.fillStyle = "rgba(0,0,0)";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";
        ctx.fillText(
          `${data.datasets[0].data[0] - data.datasets[0].data[1]}%`,
          xCord,
          yCord
        );
      },
    },
  ],
});
