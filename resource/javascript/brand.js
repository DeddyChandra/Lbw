function getApiInformation(a){
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
    .then(response => response.json())
    .then(response => {
        let responseJson = response.data;
        let temp = "";
        let jsonRes = "";
        const phonesContainer = document.getElementById('js-container');
        for(let k = 0+a; k < 10+a; k++){
            if(k > responseJson.length || k < 0){
                break;
            }
            temp = responseJson[k];
            // jsonRes += '<div class="col text-center">'+ temp.brand_name +'</div>'
            jsonRes += '<div class="col mb-3">';
            jsonRes += '<div class="card" style="width: 18rem;">';
            // jsonRes += '<img src="..." class="card-img-top" alt="...">';
            jsonRes += '<div class="card-body">';
            jsonRes += '<h5 class="card-title text-capitalize">' + temp.brand_name + '</h5>';
            jsonRes += '<p class="card-text">Jumlah Devices: ' + temp.device_count +'</p>';
            jsonRes += '<a href="' + temp.detail + '" class="btn btn-outline-dark">Show More</a>';
            jsonRes += '</div>';
            jsonRes += '</div>';
            jsonRes += '</div>';
        }
        phonesContainer.innerHTML = jsonRes;
    });
}

function next_page(){
    clear()
    getApiInformation(10);
}

function back_page(){
    clear()
    getApiInformation(-10);
}

function clear(){
    const phonesContainer = document.getElementById('js-container');
    phonesContainer.innerHTML = "";
}

getApiInformation(0);