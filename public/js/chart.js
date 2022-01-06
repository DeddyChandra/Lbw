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

function getWeightPerYear(data){
    let result = [];
    Object.keys(data).forEach(element => {
        result.push(data[element].totalWeight / data[element].countProperWeight);
    });
    return result;
}

function allWeightCharts(){
    let weightChartLoading = document.querySelector('#weightChartLoading');
    weightChartLoading.innerHTML = showLoading();
    const weightChartE = document.querySelector('#weightChart').getContext('2d');
    const labels = [];
    for(let i = 2018; i < 2023; i++){
        labels.push(i);
    }
    const data = {
    labels: labels,
    datasets: [
        {
            label: 'Samsung',
            data: getWeightPerYear(samsung),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Huawei',
            data: getWeightPerYear(huawei),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: 'Apple',
            data: getWeightPerYear(apple),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
        },
        {
            label: 'Oppo',
            data: getWeightPerYear(oppo),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
            label: 'Xiaomi',
            data: getWeightPerYear(xiaomi),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
        }
    ]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
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
                    suggestedMin: 0,
                    suggestedMax: 200
                }
            }
        },
    };
    const weightChart = new Chart(weightChartE, config);
    weightChartLoading.innerHTML = showLoading(false);
    weightChartLoading.classList.remove('mt-5');
}

function getBatteryPerYear(data){
    let result = [];
    Object.keys(data).forEach(element => {
        result.push(data[element].totalBattery / data[element].countProperBattery);
    });
    return result;
}

function allBatteryCharts(){
    let batteryChartLoading = document.querySelector('#batteryChartLoading');
    batteryChartLoading.innerHTML = showLoading();
    const batteryChartE = document.querySelector('#batteryChart').getContext('2d');
    const labels = [];
    for(let i = 2018; i < 2023; i++){
        labels.push(i);
    }
    // console.log(labels);
    const data = {
    labels: labels,
    datasets: [
        {
            label: 'Samsung',
            data: getBatteryPerYear(samsung),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Huawei',
            data: getBatteryPerYear(huawei),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: 'Apple',
            data: getBatteryPerYear(apple),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
        },
        {
            label: 'Oppo',
            data: getBatteryPerYear(oppo),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
            label: 'Xiaomi',
            data: getBatteryPerYear(xiaomi),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
        }
    ]
    };
    let delayed;
    const config = {
        type: 'bar',
        data: data,
        options: {
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
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
                suggestedMin: 0,
                suggestedMax: 200
                }
            }
        },
    };
    const batteryChart = new Chart(batteryChartE, config);
    batteryChartLoading.innerHTML = showLoading(false);
    batteryChartLoading.classList.remove('mt-5');
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
    // sorting high to low number of devices per brand
    brandData.sort(function(a, b) {
        return b - a;
    });

   // sorting the brand name
    let brandSort = ['0','1','2','3','4','5','6','7','8','9'];
    for(let i = 0; i < 10; i++){
        if(brandData[i] == samsungBrand.device_count){
            brandSort[i] = "samsung";
        }
        else if(brandData[i] == huaweiBrand.device_count){
            brandSort[i] = "huawei";
        }
        else if(brandData[i] == appleBrand.device_count){
            brandSort[i] = "apple";
        }
        else if(brandData[i] == oppoBrand.device_count){
            brandSort[i] = "oppo";
        }
        else if(brandData[i] == xiaomiBrand.device_count){
            brandSort[i] = "xiaomi";
        }
        else if(brandData[i] == vivoBrand.device_count){
            brandSort[i] = "vivo";
        }
        else if(brandData[i] == lenovoBrand.device_count){
            brandSort[i] = "lenovo";
        }
        else if(brandData[i] == lgBrand.device_count){
            brandSort[i] = "lg";
        }
        else if(brandData[i] == realmeBrand.device_count){
            brandSort[i] = "realme";
        }
        else if(brandData[i] == asusBrand.device_count){
            brandSort[i] = "asus";
        }
    }
    const brandsChartE = document.getElementById('brandsChart').getContext('2d');
    const brandsChart = new Chart(brandsChartE, {
        type: 'bar',
        data: {
            labels: [brandSort[0], brandSort[1], brandSort[2], brandSort[3], brandSort[4], brandSort[5], brandSort[6], brandSort[7], brandSort[8], brandSort[9]],
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

function getScatterData(data){
    let result = [];
    console.log(data);
    Object.keys(data).forEach(element => {
        // console.log(data[element].battery[0]);
        for(let i = 0; i < 5; i++){
            let device = [];
            device.push(data[element].battery[i]);
            device.push(data[element].weight[i]);
            result.push(device);
        }
    });
    return result;
}

function scatterChart(){
    let scatterChartLoading = document.querySelector('#scatterChartLoading');
    scatterChartLoading.innerHTML = showLoading();
    const scatterChartE = document.querySelector('#scatterChart').getContext('2d');
    const data = {
    datasets: [
        {
            label: 'Samsung',
            data: getScatterData(samsung),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Huawei',
            data: getScatterData(huawei),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: 'Apple',
            data: getScatterData(apple),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
        },
        {
            label: 'Oppo',
            data: getScatterData(oppo),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
            label: 'Xiaomi',
            data: getScatterData(xiaomi),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
        }
    ]
    };
    const config = {
        type: 'scatter',
        data: data,
        options: {
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
                    text: 'Battery (mAH)'
                }
                },
                y: {
                    display: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Weight (Gram)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 200
                }
            }
        },
    };
    const weightChart = new Chart(scatterChartE, config);
    scatterChartLoading.innerHTML = showLoading(false);
    scatterChartLoading.classList.remove('mt-5');
}

main();
allWeightCharts();
allBatteryCharts();
scatterChart()
