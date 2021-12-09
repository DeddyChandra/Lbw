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

async function getDeviceWeight(p){
   let array = [];
   for(let i = 0; true; i++){
      if(array.length == 5){
         break;
      }
      const deviceData = await getData(p.data.phones[i].detail);
      console.log(deviceData);
      let weight = deviceData.data.specifications.find(o => o.title === 'Body').specs.find(o => o.key === 'Weight').val[0].substring(0,3);
      if(weight != '-'){
         array.unshift(parseInt(weight))
      }
      // console.log(weight);
   }
   // console.log(array);
   return array;
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
            label: '',
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
            }
         }
      }
   });

   // const samsungBrandWeight = await getDeviceWeight(await getData(samsungBrand.detail));

   const samsungBrandWeight = await getDeviceWeight(await getData(samsungBrand.detail));
   const huaweiBrandWeight = await getDeviceWeight(await getData(huaweiBrand.detail));
   const appleBrandWeight = await getDeviceWeight(await getData(appleBrand.detail));
   const oppoBrandWeight = await getDeviceWeight(await getData(oppoBrand.detail));
   const xiaomiBrandWeight = await getDeviceWeight(await getData(xiaomiBrand.detail));

   console.log(samsungBrandWeight)

   const weightChartE = document.getElementById('weightChart').getContext('2d');
   const labels = ['Device 1', 'Device 2', 'Device 3','Device 4', 'Device 5'];
   const data = {
   labels: labels,
   datasets: [
      {
         label: 'Samsung',
         data: samsungBrandWeight,
         borderColor: 'rgba(255, 99, 132, 0.5)',
         backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
         label: 'Huawei',
         data: huaweiBrandWeight,
         borderColor: 'rgba(54, 162, 235, 0.5)',
         backgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
         label: 'Apple',
         data: appleBrandWeight,
         borderColor: 'rgba(255, 206, 86, 0.5)',
         backgroundColor: 'rgba(255, 206, 86, 1)',
      },
      {
         label: 'Oppo',
         data: oppoBrandWeight,
         borderColor: 'rgba(75, 192, 192, 0.5)',
         backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
         label: 'Xiaomi',
         data: xiaomiBrandWeight,
         borderColor: 'rgba(153, 102, 255, 0.5)',
         backgroundColor: 'rgba(153, 102, 255, 1)',
      }
   ]
   };
   const config = {
      type: 'line',
      data: data,
      options: {
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
                  display: true
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
}

main();