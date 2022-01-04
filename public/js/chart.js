function getPhoneSpec(p){
   return fetch('https://api-mobilespecs.azharimm.site/v2/' + p)
      .then(response => response.json())
      .then(response => response);
}

function getAllBrands(){
   return fetch('https://api-mobilespecs.azharimm.site/v2/brands')
      .then(response => response.json())
      .then(response => response);
}

function getData(url){
   return fetch(url)
      .then(response => response.json())
      .then(response => response);
}

function showLoading(show = true){
   if(show){
      return /*html*/`
         <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
            </div>
         </div>`
   }
   else{
      return /*html*/`
      <div class="d-flex justify-content-center invisible">
         <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>`
   }
}

function HorizontalBarChart(element, name, weightData, text){
   const brandsChartE = document.getElementById(element).getContext('2d');
   const brandsChart = new Chart(brandsChartE, {
      type: 'bar',
      data: {
         labels: name,
         datasets: [
         {
            label: '',
            data: weightData,
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
               'rgba(204, 204, 255, 0.2)',
               'rgba(64, 224, 208, 0.2)',
               'rgba(255, 127, 80, 0.2)',
               'rgba(222, 49, 99, 0.2)',
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
               'rgba(204, 204, 255, 1)',
               'rgba(64, 224, 208, 1)',
               'rgba(255, 127, 80, 1)',
               'rgba(222, 49, 99, 1)',
            ],
            borderWidth: 1
         }
      ]
      },
      options: {
         indexAxis: 'y',
         responsive: true,
         elements: {
            bar: {
            borderWidth: 2,
            }
         },
         responsive: true,
         plugins: {
            legend: {
               display: false
            },
            title: {
               display: true,
               text: text
            }
         },
      }
   });
}

function allWeightAvarege(){
   let weightData = [
      samsung['totalWeight'] / samsung['countProperWeight'],
      apple['totalWeight'] / apple['countProperWeight'],
      huawei['totalWeight'] / huawei['countProperWeight'],
      oppo['totalWeight'] / oppo['countProperWeight'],
      xiaomi['totalWeight'] / samsung['countProperWeight'],
   ];
   
   const brandsChartE = document.querySelector('#averageWeightChart').getContext('2d');
   const brandsChart = new Chart(brandsChartE, {
      type: 'doughnut',
      data: {
         labels: ['Samsung', 'Apple', 'Huawei', 'Oppo', 'Xiaomi'],
         datasets: [
         {
            label: '',
            data: weightData,
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
               'rgba(204, 204, 255, 0.2)',
               'rgba(64, 224, 208, 0.2)',
               'rgba(255, 127, 80, 0.2)',
               'rgba(222, 49, 99, 0.2)',
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
               'rgba(204, 204, 255, 1)',
               'rgba(64, 224, 208, 1)',
               'rgba(255, 127, 80, 1)',
               'rgba(222, 49, 99, 1)',
            ],
            borderWidth: 1
         }
      ],
      hoverOffset: 4
      },
      options: {
         indexAxis: 'y',
         maintainAspectRatio : false,
         responsive: true,
         elements: {
            bar: {
            borderWidth: 2,
            }
         },
         responsive: true,
         plugins: {
            legend: {
               display: true
            },
            title: {
               display: true,
               text: "Averege Brands weight"
            }
         },
      }
   });
}

function allWeightCharts(){
   let weightChartLoading = document.querySelector('#weightChartLoading');
   weightChartLoading.innerHTML = showLoading();
   const weightChartE = document.querySelector('#weightChart').getContext('2d');
   const labels = [];
   for(let i = 0; i < 20; i++){
      labels.push(i+1);
   }
   // console.log(labels);
   const data = {
   labels: labels,
   datasets: [
      {
         label: 'Samsung',
         data: samsung['weight'],
         borderColor: 'rgba(255, 99, 132, 0.5)',
         backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
         label: 'Huawei',
         data: huawei['weight'],
         borderColor: 'rgba(54, 162, 235, 0.5)',
         backgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
         label: 'Apple',
         data: apple['weight'],
         borderColor: 'rgba(255, 206, 86, 0.5)',
         backgroundColor: 'rgba(255, 206, 86, 1)',
      },
      {
         label: 'Oppo',
         data: oppo['weight'],
         borderColor: 'rgba(75, 192, 192, 0.5)',
         backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
         label: 'Xiaomi',
         data: xiaomi['weight'],
         borderColor: 'rgba(153, 102, 255, 0.5)',
         backgroundColor: 'rgba(153, 102, 255, 1)',
      }
   ]
   };
   const config = {
      type: 'line',
      data: data,
      options: {
         animations: {
            tension: {
               duration: 3000,
               easing: 'linear',
               from: 1,
               to: 0,
               loop: true
            }
         },
         responsive: true,
         plugins: {
            legend: {
               position: 'top',
            },
            title: {
               display: true,
               text: 'Top 20 Newest device weight'
            }
         }
         ,interaction: {
            intersect: false,
         },
         scales: {
            x: {
               display: true,
               title: {
                  display: true,
                  text: 'Device'
               }
            },
            y: {
               display: true,
               beginAtZero: true,
               title: {
                  display: true,
                  text: 'Gram'
               },
               suggestedMin: -10,
               suggestedMax: 200
            }
         }
      },
   };
   const weightChart = new Chart(weightChartE, config);
   weightChartLoading.innerHTML = showLoading(false);
   weightChartLoading.classList.remove('mt-5');
}

function allBatteryCharts(){
   let batteryChartLoading = document.querySelector('#batteryChartLoading');
   batteryChartLoading.innerHTML = showLoading();
   const batteryChartE = document.querySelector('#batteryChart').getContext('2d');
   const labels = [];
   for(let i = 0; i < 20; i++){
      labels.push(i+1);
   }
   // console.log(labels);
   const data = {
   labels: labels,
   datasets: [
      {
         label: 'Samsung',
         data: samsung['battery'],
         borderColor: 'rgba(255, 99, 132, 0.5)',
         backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
         label: 'Huawei',
         data: huawei['battery'],
         borderColor: 'rgba(54, 162, 235, 0.5)',
         backgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
         label: 'Apple',
         data: apple['battery'],
         borderColor: 'rgba(255, 206, 86, 0.5)',
         backgroundColor: 'rgba(255, 206, 86, 1)',
      },
      {
         label: 'Oppo',
         data: oppo['battery'],
         borderColor: 'rgba(75, 192, 192, 0.5)',
         backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
         label: 'Xiaomi',
         data: xiaomi['battery'],
         borderColor: 'rgba(153, 102, 255, 0.5)',
         backgroundColor: 'rgba(153, 102, 255, 1)',
      }
   ]
   };
   const config = {
      type: 'line',
      data: data,
      options: {
         animations: {
            tension: {
               duration: 3000,
               easing: 'linear',
               from: 1,
               to: 0,
               loop: true
            }
         },
         responsive: true,
         plugins: {
            legend: {
               position: 'top',
            },
            title: {
               display: true,
               text: 'Top 20 Newest device battery'
            }
         }
         ,interaction: {
            intersect: false,
         },
         scales: {
            x: {
               display: true,
               title: {
                  display: true,
                  text: 'Device'
               }
            },
            y: {
               display: true,
               beginAtZero: true,
               title: {
                  display: true,
                  text: 'Gram'
               },
               suggestedMin: -10,
               suggestedMax: 200
            }
         }
      },
   };
   const batteryChart = new Chart(batteryChartE, config);
   batteryChartLoading.innerHTML = showLoading(false);
   batteryChartLoading.classList.remove('mt-5');
}

function allBatteryAvarege(){
   let batteryData = [
      samsung['totalBattery'] / samsung['countProperBattery'],
      apple['totalBattery'] / apple['countProperBattery'],
      huawei['totalBattery'] / huawei['countProperBattery'],
      oppo['totalBattery'] / oppo['countProperBattery'],
      xiaomi['totalBattery'] / samsung['countProperBattery'],
   ];
   
   const brandsChartE = document.querySelector('#averageBatteryChart').getContext('2d');
   const brandsChart = new Chart(brandsChartE, {
      type: 'pie',
      data: {
         labels: ['Samsung', 'Apple', 'Huawei', 'Oppo', 'Xiaomi'],
         datasets: [
         {
            label: '',
            data: batteryData,
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
               'rgba(204, 204, 255, 0.2)',
               'rgba(64, 224, 208, 0.2)',
               'rgba(255, 127, 80, 0.2)',
               'rgba(222, 49, 99, 0.2)',
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
               'rgba(204, 204, 255, 1)',
               'rgba(64, 224, 208, 1)',
               'rgba(255, 127, 80, 1)',
               'rgba(222, 49, 99, 1)',
            ],
            borderWidth: 1
         }
      ],
      hoverOffset: 4
      },
      options: {
         indexAxis: 'y',
         maintainAspectRatio : false,
         responsive: true,
         elements: {
            bar: {
            borderWidth: 2,
            }
         },
         responsive: true,
         plugins: {
            legend: {
               display: true
            },
            title: {
               display: true,
               text: "Averege Brands battery"
            }
         },
      }
   });
}

async function main(){
   const allBrands = await getAllBrands();
   const samsungBrand = allBrands.data.find(o => o.brand_slug === 'samsung-phones-9');
   const huaweiBrand = allBrands.data.find(o => o.brand_slug === 'huawei-phones-58');
   const appleBrand = allBrands.data.find(o => o.brand_slug === 'apple-phones-48');
   const oppoBrand = allBrands.data.find(o => o.brand_slug === 'oppo-phones-82');
   const xiaomiBrand = allBrands.data.find(o => o.brand_slug === 'xiaomi-phones-80');
   const vivoBrand = allBrands.data.find(o => o.brand_slug === 'vivo-phones-98');
   const lenovoBrand = allBrands.data.find(o => o.brand_slug === 'lenovo-phones-73');
   const lgBrand = allBrands.data.find(o => o.brand_slug === 'lg-phones-20');
   const realmeBrand = allBrands.data.find(o => o.brand_slug === 'realme-phones-118');
   const asusBrand = allBrands.data.find(o => o.brand_slug === 'asus-phones-46');

   const brandData = [samsungBrand.device_count, huaweiBrand.device_count, appleBrand.device_count, oppoBrand.device_count, xiaomiBrand.device_count, vivoBrand.device_count, lenovoBrand.device_count, lgBrand.device_count, realmeBrand.device_count, asusBrand.device_count];

   const brandsChartE = document.getElementById('brandsChart').getContext('2d');
   const brandsChart = new Chart(brandsChartE, {
      type: 'bar',
      data: {
         labels: ['Samsung', 'Huawei', 'Apple', 'Oppo', 'Xiaomi', 'Vivo', 'Lenovo', 'LG', 'Realme', 'Asus'],
         datasets: [
         {
            label: 'Total device',
            data: brandData,
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
               'rgba(204, 204, 255, 0.2)',
               'rgba(64, 224, 208, 0.2)',
               'rgba(255, 127, 80, 0.2)',
               'rgba(222, 49, 99, 0.2)',
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
               'rgba(204, 204, 255, 1)',
               'rgba(64, 224, 208, 1)',
               'rgba(255, 127, 80, 1)',
               'rgba(222, 49, 99, 1)',
            ],
            borderWidth: 1
         }
      ]
      },
      options: {
         responsive: true,
         scales: {
            y: {
               beginAtZero: true
            },
         },
         plugins: {
            title: {
               display: true,
               text: 'Top 10 brands with total devices'
            },
            legend: {
               display: false
            },
         },
      }
   });
}

main();
allWeightCharts();
allWeightAvarege();
HorizontalBarChart('samsungWeightChart', samsung['name'], samsung['weight'], 'Samsung devices weight');
HorizontalBarChart('appleWeightChart', apple['name'], apple['weight'], 'Apple devices weight');
HorizontalBarChart('huaweiWeightChart', huawei['name'], huawei['weight'], 'Huawei devices weight');
HorizontalBarChart('oppoWeightChart', oppo['name'], oppo['weight'], 'Oppo devices weight');
HorizontalBarChart('xiaomiWeightChart', xiaomi['name'], xiaomi['weight'], 'Xiaomi devices weight');
allBatteryCharts();
HorizontalBarChart('samsungBatteryChart', samsung['name'], samsung['battery'], 'Samsung devices battery');
HorizontalBarChart('appleBatteryChart', apple['name'], apple['battery'], 'Apple devices battery');
HorizontalBarChart('huaweiBatteryChart', huawei['name'], huawei['battery'], 'Huawei devices battery');
HorizontalBarChart('oppoBatteryChart', oppo['name'], oppo['battery'], 'Oppo devices battery');
HorizontalBarChart('xiaomiBatteryChart', xiaomi['name'], xiaomi['battery'], 'Xiaomi devices battery');
allBatteryAvarege();

function brut(){
   fetch('https://api-mobilespecs.azharimm.site/v2/brands')
   .then(response => response.json())
   .then(response => response);
   return fetch('http://phone-spec-api.deddychandra.my.id/v2/brands')
      .then(response => response.json())
      .then(response => response);
}

async function test(){
   for(let i = 0; i < 150; i++){
      await brut();
      console.log("done");
   }
}

test();
