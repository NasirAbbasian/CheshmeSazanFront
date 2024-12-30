const ctx = document.getElementById('userChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'تعداد حاضرین',
      data: [1, 2, 3, 4, 5, 6],
      borderWidth: 1,
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



const payChart = document.getElementById('payChart');
const payConfig = {
  type: 'line',
  data: {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    datasets: [{
      label: "میانگین حقوق پرداختی",
      data: [20, 18, 19, 23, 17, 20],
      tension: 0.3,
      fill:true
    }, {
      label: "حداقل حقوق پرداختی",
      data: [18, 15, 18, 18, 9, 19.5],
      tension: 0.3
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: { family:"Vazirmatn RD FD" }
        }
      },
    }
  }
}
new Chart(payChart, payConfig);
