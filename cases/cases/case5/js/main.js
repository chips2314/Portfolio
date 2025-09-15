document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('togglePassword').addEventListener('click', function () {
      var passwordField = document.getElementById('password');
      var eyeIcon = document.getElementById('eyeIcon');
  
      if (passwordField.type === 'password') {
          passwordField.type = 'text';
          eyeIcon.src = 'images/authorization/eye-open.png'; 
      } else {
          passwordField.type = 'password';
          eyeIcon.src = 'images/authorization/eye-close.png';
      }
  });

  document.getElementById('togglePassword2').addEventListener('click', function () {
      var passwordField = document.getElementById('password2');
      var eyeIcon = document.getElementById('eyeIcon2');

      if (passwordField.type === 'text') {
          passwordField.type = 'password'; 
          eyeIcon.src = 'images/authorization/eye-close.png';
      } else {
          passwordField.type = 'text'; 
          eyeIcon.src = 'images/authorization/eye-open.png'; 
      }
  });
});

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const toggleIcon = toggleBtn.querySelector('img'); 
const mobileMenuBtn = document.getElementById('mobile-menu-btn'); 
const sidebarMenu = document.getElementById('sidebar-menu');


toggleBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) {
     
        sidebar.classList.toggle('collapsed');
        
        // Обновляем иконку в зависимости от состояния
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.src = 'images/show-sidebar-horiz.png';
        } else {
            toggleIcon.src = 'images/hide-sidebar-horiz.png'; 
        }
    }
});

// Обработчик клика для переключения меню на мобильной версии
mobileMenuBtn.addEventListener('click', () => {
    sidebarMenu.classList.toggle('hide-menu'); // Переключаем класс для скрытия/показа меню
});

// Удаляем "no-transition" после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    sidebar.classList.remove('no-transition'); // Включаем анимацию
});




    //graph 

    const ctx = document.getElementById('cryptoChart').getContext('2d');

// Create gradient
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(122, 194, 49, 0.4)');
gradient.addColorStop(1, 'rgba(122, 194, 49, 0)');

// Данные графика
const data = {
  labels: [
    '20:00', '20:05', '20:10', '20:15', '20:20', 
    '20:25', '20:30', '20:35', '20:40', '20:45', '20:50'
  ],
  datasets: [
    {
      label: 'Bitcoin Price',
      data: [30000, 31000, 29000, 19900, 23000, 36000, 25000, 24000, 39000, 40000, 31000],
      borderColor: '#7ac231',
      borderWidth: 2,
      fill: true, 
      backgroundColor: gradient, 
      tension: 0, 
      pointRadius: 0, 
    },
    {
      type: 'bar',
      data: [10000, 12000, 9000, 11000, 15000, 13000, 14000, 11000, 16000, 14000, 15000],
      backgroundColor: 'rgba(122, 194, 49, 0.2)',
      barPercentage: 0.8,
    },
  ],
};

// Опции графика
const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = context.raw;
          return `$${value.toLocaleString()}`;
        },
      },
    },
  },
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
      grid: {
        color: '#2a2a2a',
      },
      ticks: {
        color: '#ffffff',
      },
    },
  },
};

// Создание графика
const cryptoChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
});

function updateChartForMobile(chart) {
  if (window.innerWidth <= 768) { // Условие для мобильной версии
    chart.options.scales.x.display = false; // Отключить ось X
  } else {
    chart.options.scales.x.display = true; // Включить ось X для больших экранов
  }
  chart.update(); // Применить изменения
}

updateChartForMobile(cryptoChart);

window.addEventListener('resize', () => {
  updateChartForMobile(cryptoChart);
});


// many graphs

const createChart = (id, data, isPositive) => {
    const ctx = document.getElementById(id).getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, isPositive ? 'rgba(0, 255, 135, 0.4)' : 'rgba(255, 77, 77, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
    new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array(data.length).fill(''),
          datasets: [
            {
              data,
              borderColor: isPositive ? '#7AC231' : '#FF173D',
              borderWidth: 2,
              tension: 0.2, // Небольшое скругление
              pointRadius: 0,
              fill: false, // Убираем фон
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        },
      });
  };
  
  // Example data
  createChart('chart-ethereum', [30, 28, 5, 40, 10, 39, 10], false);
  createChart('chart-bitcoin', [50, 48, 45, 52, 12, 35, 4], false);
  createChart('chart-litecoin', [10, 48, 20, 25, 4, 35, 2], true);
  createChart('chart-solana', [30, 28, 5, 40, 10, 39, 10], false);
  createChart('chart-binance', [50, 48, 45, 52, 12, 35, 4], true);
  createChart('chart-ripple', [10, 48, 20, 25, 4, 35, 2], true);

const ethereumData = [3000, 1200, 3100, 2150, 3120, 3080, 3070, 1005, 1990, 2150, 3500];
new Chart(document.getElementById("chart1").getContext("2d"), {
  type: "line",
  data: {
    labels: ethereumData.map((_, i) => i), 
    datasets: [
      {
        data: ethereumData,
        borderColor: "#7AC231",
        borderWidth: 2,
        tension: 0,
        pointRadius: (ctx) => (ctx.dataIndex === ethereumData.length - 1 ? 3 : 0), // Только последняя точка
        pointBackgroundColor: (ctx) =>
          ctx.dataIndex === ethereumData.length - 1 ? "#7AC231" : "transparent",
        pointBorderWidth: (ctx) => (ctx.dataIndex === ethereumData.length - 1 ? 8 : 0),
        pointBorderColor: (ctx) =>
          ctx.dataIndex === ethereumData.length - 1 ? "rgba(122, 194, 49, 0.5)" : "transparent",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});

// Bitcoin chart
const bitcoinData = [3100, 3200, 3000, 3050, 3100, 3150, 3200, 3180, 3120, 3090, 3070];
new Chart(document.getElementById("chart2").getContext("2d"), {
  type: "line",
  data: {
    labels: bitcoinData.map((_, i) => i),
    datasets: [
      {
        data: bitcoinData,
        borderColor: "#FF173D",
        borderWidth: 2,
        tension: 0,
        pointRadius: (ctx) => (ctx.dataIndex === bitcoinData.length - 1 ? 3 : 0),
        pointBackgroundColor: (ctx) =>
          ctx.dataIndex === bitcoinData.length - 1 ? "#FF173D" : "transparent",
        pointBorderWidth: (ctx) => (ctx.dataIndex === bitcoinData.length - 1 ? 8 : 0),
        pointBorderColor: (ctx) =>
          ctx.dataIndex === bitcoinData.length - 1 ? "rgba(255, 23, 61, 0.5)" : "transparent",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});

const litecoinData = [120, 230, 140, 150, 145, 248, 165, 360, 265, 170, 275];
new Chart(document.getElementById("chart3").getContext("2d"), {
  type: "line",
  data: {
    labels: litecoinData.map((_, i) => i),
    datasets: [
      {
        data: litecoinData,
        borderColor: "#7AC231",
        borderWidth: 2,
        tension: 0,
        pointRadius: (ctx) => (ctx.dataIndex === litecoinData.length - 1 ? 3 : 0),
        pointBackgroundColor: (ctx) =>
          ctx.dataIndex === litecoinData.length - 1 ? "#7AC231" : "transparent",
        pointBorderWidth: (ctx) => (ctx.dataIndex === litecoinData.length - 1 ? 8 : 0),
        pointBorderColor: (ctx) =>
          ctx.dataIndex === litecoinData.length - 1 ? "rgba(122, 194, 49, 0.5)" : "transparent",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});



