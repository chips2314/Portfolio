const ctx = document.getElementById('cryptoChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(131, 236, 255, 0.4)');
gradient.addColorStop(1, 'rgba(131, 236, 255, 0)');

const data = {
  labels: [
    '20:00', '20:05', '20:10', '20:15', '20:20', '20:25', '20:30', 
    '20:35', '20:40', '20:45', '20:50', '20:55', '21:00', '21:05'
  ],
  datasets: [
    {
      label: 'Bitcoin Price',
      data: [30000, 31000, 29000, 19900, 23000, 36000, 25000, 24000, 39000, 40000, 31000, 32000, 35000, 37000],
      borderColor: '#83ECFF',
      borderWidth: 2,
      fill: true, 
      backgroundColor: gradient, 
      tension: 0.2, 
      pointRadius: 0, 
    },
    {
      type: 'bar',
      data: [10000, 12000, 9000, 11000, 15000, 13000, 14000, 11000, 16000, 14000, 15000, 17000, 18000, 19000],
      backgroundColor: 'rgba(131, 236, 255, 0.2)',
      barPercentage: 0.8,
      borderRadius: 5, 
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        color: '#2a2a2a',
      },
      ticks: {
        color: '#ffffff',
      },
    },
    y: {
      ticks: {
        stepSize: 10000,  
        color: '#ffffff',
      },
      min: 0,   
      max: 50000,   
      grid: {
        color: '#2a2a2a',
      },
    },
  },
  plugins: {
    legend: {
        display: false,  
      },
    tooltip: {
        enabled: true,
        backgroundColor: 'rgba(50, 50, 50, 0.9)', 
        titleColor: '#83ECFF',  
        bodyColor: '#ffffff',  
        borderRadius: 8,  
        padding: 10,  
        displayColors: false,  
        intersect: false,  
        mode: 'nearest',  
        callbacks: {
          title: function (context) {
            return context[0].label;  
          },
          label: function (context) {
            const value = context.raw.toFixed(5) + ' USDT';
            return value;
          },
          afterLabel: function (context) {
            const changePercent = Math.random() * 20 - 10;  
            return (changePercent > 0 ? '+' : '') + changePercent.toFixed(2) + '%';
          },
        },
      },
  },
};

const cryptoChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
});

function updateChartForMobile(chart) {
  if (window.innerWidth <= 768) {
    chart.options.scales.x.display = false;
  } else {
    chart.options.scales.x.display = true;
  }
  chart.update();
}

updateChartForMobile(cryptoChart);

window.addEventListener('resize', () => {
  updateChartForMobile(cryptoChart);
});