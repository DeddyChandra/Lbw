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

function weight(element, name, weightData, text){
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
         data: samsungWeight,
         borderColor: 'rgba(255, 99, 132, 0.5)',
         backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
         label: 'Huawei',
         data: huaweiWeight,
         borderColor: 'rgba(54, 162, 235, 0.5)',
         backgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
         label: 'Apple',
         data: appleWeight,
         borderColor: 'rgba(255, 206, 86, 0.5)',
         backgroundColor: 'rgba(255, 206, 86, 1)',
      },
      {
         label: 'Oppo',
         data: oppoWeight,
         borderColor: 'rgba(75, 192, 192, 0.5)',
         backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
         label: 'Xiaomi',
         data: xiaomiWeight,
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
               text: 'Top 5 Newest device weight'
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
weight('samsungWeightChart', samsungName, samsungWeight, 'Samsung devices weight')
weight('appleWeightChart', appleName, appleWeight, 'Apple devices weight')
weight('huaweiWeightChart', huaweiName, huaweiWeight, 'Huawei devices weight')
weight('oppoWeightChart', oppoName, oppoWeight, 'Oppo devices weight')
weight('xiaomiWeightChart', xiaomiName, xiaomiWeight, 'Xiaomi devices weight')