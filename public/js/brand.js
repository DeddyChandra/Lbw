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

let input = document.querySelector('.input-keyword');
input.addEventListener('input', function(){
    let brands = brandData.data;
    console.log(input.value);
    let searchBrands = "";
    // console.log(brands);
    brands.forEach(element => {
        if(element.brand_name.toLowerCase().includes(input.value.toLowerCase())){
            searchBrands += /*html*/`
            <div class="mb-3 col-3">
                <div class="card" id="${element.brand_name}">
                    <div class="card-body">
                        <h5 class="card-title">${element.brand_name.charAt(0).toUpperCase() + element.brand_name.slice(1)}</h5>
                        <p class="card-text">Jumlah Devices: ${element.device_count}</p>
                        <a href="/brands/show-all/${element.brand_slug}" class="btn btn-outline-dark">Show More</a>
                    </div>
                </div>
            </div>`
        }
    });
    const phonesContainer = document.querySelector('#js-container');
    phonesContainer.innerHTML = searchBrands;
})

function getApiInformation(){
    const phonesContainer = document.querySelector('#js-container');
    phonesContainer.innerHTML = showLoading();
    let responseJson = brandData.data;
    let temp = "";
    let jsonRes = "";
    for(let i = 0; i < responseJson.length; i++){
        temp = responseJson[i];
        // '<div class="col text-center">'+ temp.brand_name +'</div>'
        jsonRes += /*html*/`
        <div class="mb-3 col-3">
            <div class="card" id="${temp.brand_name}">
                <div class="card-body">
                    <h5 class="card-title">${temp.brand_name.charAt(0).toUpperCase() + temp.brand_name.slice(1)}</h5>
                    <p class="card-text">Jumlah Devices: ${temp.device_count}</p>
                    <a href="/brands/show-all/${temp.brand_slug}" class="btn btn-outline-dark">Show More</a>
                </div>
            </div>
        </div>`
    }
    phonesContainer.innerHTML = jsonRes;
}
getApiInformation();