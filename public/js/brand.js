let temp = 0;

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

function getApiInformation(a){
    console.log(a);
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
    .then(response => response.json())
    .then(response => {
        let responseJson = response.data;
        let temp = "";
        let jsonRes = "";
        const phonesContainer = document.getElementById('js-container');
        for(let k = 0; k < responseJson.length; k++){
            // if(k > responseJson.length || k < 0){
            //     break;
            // }
            temp = responseJson[k];
            // jsonRes += '<div class="col text-center">'+ temp.brand_name +'</div>'
            jsonRes += '<div class="mb-3 col-3">';
            jsonRes += '<div class="card">';
            // jsonRes += '<img src="..." class="card-img-top" alt="...">';
            jsonRes += '<div class="card-body">';
            jsonRes += '<h5 class="card-title text-capitalize">' + temp.brand_name + '</h5>';
            jsonRes += '<p class="card-text">Jumlah Devices: ' + temp.device_count +'</p>';
            jsonRes += '<a href="/brands/show-all/' + temp.brand_slug + '" class="btn btn-outline-dark">Show More</a>';
            jsonRes += '</div>';
            jsonRes += '</div>';
            jsonRes += '</div>';
        }
        phonesContainer.innerHTML = jsonRes;
    });
}

function next_page(){
    clear()
    temp += 10;
    getApiInformation(temp);
}

function back_page(){
    clear()
    temp -= 10;
    getApiInformation(temp);
}

function clear(){
    const phonesContainer = document.getElementById('js-container');
    phonesContainer.innerHTML = "";
}

getApiInformation(0);
