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
            // jsonRes += '<li class="list-group-item">' + temp.brand_name + '</li>';
            jsonRes += '<div class="col text-center">'+ temp.brand_name +'</div>'
        }
        phonesContainer.innerHTML = jsonRes;
    });
}

 getApiInformation();