function getApiInformation(){
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
    .then(response => response.json())
    .then(response => {
        
        let responseJson = response.data;
        let temp = "";
        let jsonRes = "";
        const phonesContainer = document.getElementById('js-container');
        for(let i = 0; i < responseJson.length; i++){
            temp = responseJson[i];
            // jsonRes += '<div class="col text-center">'+ temp.brand_name +'</div>'
            jsonRes += '<div class="col mb-3">';
            jsonRes += '<div class="card" style="width: 18rem;">';
            // jsonRes += '<img src="..." class="card-img-top" alt="...">';
            jsonRes += '<div class="card-body">';
            jsonRes += '<h5 class="card-title">' + temp.brand_name + '</h5>';
            jsonRes += '<p class="card-text">Jumlah Devices: ' + temp.device_count +'</p>';
            jsonRes += '<a href="' + temp.detail + '" class="btn btn-outline-dark">Show More</a>';
            jsonRes += '</div>';
            jsonRes += '</div>';
            jsonRes += '</div>';
        }
        phonesContainer.innerHTML = jsonRes;
    });
}

 getApiInformation();